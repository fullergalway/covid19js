const git = require('simple-git')
const fs = require('fs');
const csv = require('csvtojson');
const variables = ["Confirmed","Deaths","Recovered"];
require("../src/compress");

const csv2js = () => {
  const values = [];
  const FIXED_VALUES=10000;
  for(var i=0;i<FIXED_VALUES;i++)values.push(i);
  const map = (v)=>{
    if(v == null){
      return null;
    }
      if((""+v).length === 0){
        return "";
      }
    if(isNaN(v)){
      v = v.trim();
      if(v.length === 0){
        return "";
      }
    }else{
      v = parseFloat(v);
    }
    if(values.indexOf(v)<0){
      values.push(v);
    }
    return values.indexOf(v);

  }
  const writeValues = () => {
    let filename = "src/tmp/values.js";
    fs.unlink(filename,()=>{
      let out = fs.createWriteStream(filename);
      out.write("module.exports = ");
      out.write(JSON.stringify(JSON.stringify(values.slice(FIXED_VALUES-1)).covid19js_compress()));
      out.write(";");
      out.end();
    });
  }
  variables.forEach(variable=>{
   let filename = "src/tmp/"+variable.toLowerCase()+".js";
   fs.unlink(filename, ()=>{
        let out = fs.createWriteStream(filename);
        let csvFilePath=`COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-${variable}.csv`
        out.write("module.exports = ");
         csv({noheader: true, headers: null, output: "csv"})
           .fromFile(csvFilePath)
           .then(lines=>{
             //header = lines.shift();
             // in csv output number remain as strings...?
             let data = lines.map(line=>line.map(map))
             //let result = { header: header, data: data}
             out.write('`');
             out.write(JSON.stringify(data).covid19js_compress());//.replace(/,0/g,','));
             out.write('`;');
           })
           .then(()=>{
              out.end();
              if(variables.indexOf(variable) === variables.length-1){
                writeValues();
              }
            });
    });
  });
}
git().submoduleUpdate(["--remote","--merge"],csv2js);

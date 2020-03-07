const git = require('simple-git')
const fs = require('fs');
const csv = require('csvtojson');
const variables = ["Confirmed","Deaths","Recovered"];

const csv2js = () => {
  var remaining = variables.length;
  variables.forEach(variable=>{
   let filename = "src/tmp/"+variable.toLowerCase()+".js";
   fs.unlink(filename, ()=>{
        let out = fs.createWriteStream(filename);
        let csvFilePath=`COVID-19/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-${variable}.csv`
        out.write("module.exports = ");
         csv({noheader: true, headers: null, output: "csv"})
           .fromFile(csvFilePath)
           .then(lines=>{
             header = lines.shift();
             // in csv output number remain as strings...?
             let data = lines.map(line=>line.map(el=>isNaN(el)?el===null?null:el.trim():parseFloat(el)))
             let result = { header: header, data: data}
             out.write(JSON.stringify(result));
           })
           .then(()=>{
              out.end();
            });
    });
  });
}
git().submoduleUpdate(["--remote","--merge"],csv2js);

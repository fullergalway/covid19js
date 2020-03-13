const git = require('simple-git')
const fs = require('fs');
const csv = require('csvtojson');
const isomap = require("../src/isomap");
const isomapout = {};
var isomap_changed = false;
const wc = require("which-country");
const getCountryISO3 = require("country-iso-2-to-3");
const getCountryISO2 = require("country-iso-3-to-2");
const country_continent = require("../src/country_continent");
const continents_out = {};

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
  const writeModule = (data,filepath,pretty) => {
    data = pretty?JSON.stringify(data,null,2):JSON.stringify(data);
    fs.unlink(filepath, ()=>{
        let out = fs.createWriteStream(filepath);
        out.write("module.exports = ");
        out.write(data);
        out.write(";");
        out.end();
      });
  }
  const writeModuleCompressed = (data,filepath) =>{
        let compressed = {}
        Object.keys(data).sort().forEach(key=>compressed[map(key)]=data[key]);
        writeModule(JSON.stringify(compressed).covid19js_compress(), filepath);
  }

  const writeValues = () => {
    let filename = "src/tmp/values.js";
    let data = values.slice(FIXED_VALUES-1);
    writeModule(JSON.stringify(data).covid19js_compress(), filename);
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
             var data = lines.map(line=>line.map(map))
             //let result = { header: header, data: data}
             out.write('`');
             out.write(JSON.stringify(data).covid19js_compress());//.replace(/,0/g,','));
             out.write('`;');
             for(var i=1; i<lines.length; i++){
                data = lines[i];
                let country = (""+data[1]).trim();
                let isocountry = country.toLowerCase()
                                .replace("st.","saint")
                                .replace(/ sar$/,"");
                if(!(isomap[isocountry]&&isomap[isocountry][0])){
                    let lat = parseFloat(data[2]);
                    let lng = parseFloat(data[3]);
                    var b = wc([lng,lat]);
                    var a;
                    if(b){
                       a = getCountryISO2(b);
                    }
                    isomap[isocountry] = [a,b];
                    isomap_changed = true;
                }
                isomapout[country] = isomap[country.toLowerCase()];
                continents_out[isomap[isocountry][0]] = country_continent[isomap[isocountry][0]];
             }
           })
           .then(()=>{
              out.end();
              if(variables.indexOf(variable) === variables.length-1){
                // compress isomap.js
                writeModuleCompressed(isomapout,"src/tmp/isomap.js");
                writeModuleCompressed(continents_out,"src/tmp/continents.js",true);
                writeValues();
                if(isomap_changed){
                  console.log(isomap);
                    writeModule(isomap, "src/isomap.js",true);
                }
              }
            });
    });
  });
}
git().submoduleUpdate(["--remote","--merge"],csv2js);

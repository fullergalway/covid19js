const fs = require('fs');
const covid19data = require('../src/covid19data');
const covid19data_json = __dirname + '/../dist/covid19data.json'
const covid19 = require('../dist/covid19')
const covid19_json = __dirname + '/../dist/covid19.json'
const writejson =(filename, data, pretty=false)=>{
fs.unlink(filename, ()=>{
        let out = fs.createWriteStream(filename);
        out.write(pretty?JSON.stringify(data,null,2):JSON.stringify(data));
        out.end();
      });
}
writejson(covid19data_json, covid19data)
writejson(covid19_json, covid19.data(),true)
const fs = require('fs');
const covid19data = require('../src/covid19data');
const covid19data_json = __dirname + '/../dist/covid19data.json'
const covid19 = require('../dist/covid19')
const covid19_json = __dirname + '/../dist/covid19.json'
const covid19latest_json = __dirname + '/../dist/covid19latest.json'
const writejson =(filename, write)=>{
fs.unlink(filename, ()=>{
        let out = fs.createWriteStream(filename);
        write(out);
        out.end();
      });
}
writejson(covid19data_json, (out)=>out.write(JSON.stringify(covid19data)));
const writeabitpretty = (data,out)=> {
    out.write("[\n");
    out.write(data.map(l=>JSON.stringify(l)).join(",\n"));
    out.write("\n]\n")
}
writejson(covid19_json, writeabitpretty.bind(null,covid19.data()))
writejson(covid19latest_json, writeabitpretty.bind(null,covid19.data().latest()));
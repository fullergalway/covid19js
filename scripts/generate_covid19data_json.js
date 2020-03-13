const fs = require('fs');
const covid19data = require('../src/covid19data');
const filename = __dirname + '/../dist/covid19data.json'
fs.unlink(filename, ()=>{
        let out = fs.createWriteStream(filename);
        out.write(JSON.stringify(covid19data));
        out.end();
      });

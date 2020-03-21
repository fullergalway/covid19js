const fs = require('fs');
const population19 = require("../scripts/population");
const population_json = __dirname + '/../dist/population.json';

const writejson = (filename, write) => {
  fs.unlink(filename, () => {
    let out = fs.createWriteStream(filename);
    write(out);
    out.end();
  });
}
writejson(population_json, (out) => out.write(JSON.stringify(population19.data())));

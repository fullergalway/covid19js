require('./decompress');
const unpack = (packed)=>{
    let _v = JSON.parse(packed.values.covid19js_decompress());
    while(_v[0]>0)_v.unshift(_v[0]-1);
    let unpackdata = (s)=>{
        let rows = JSON.parse(s.covid19js_decompress());
        let o = rows.map(keys=>keys.map(k=>k===null?null:k===""?"":_v[k]));
        return {header:o.shift(), data:o};
    }
    let unpackhash = (s)=>{
        let o = {};
        let hash = JSON.parse(s.covid19js_decompress());
        Object.keys(hash).forEach(k=>o[_v[k]]=hash[k]);
        return o;
    }

    let covid19data = {
        confirmed: unpackdata(packed.confirmed),
        recovered: unpackdata(packed.recovered),
        deaths: unpackdata(packed.deaths),
        isomap: unpackhash(packed.isomap),
        continents: unpackhash(packed.continents)
    };
    return covid19data;
}
module.exports = unpack;

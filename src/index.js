require('./decompress');
const _v = JSON.parse(require('./tmp/values').covid19js_decompress());
while(_v[0]>0)_v.unshift(_v[0]-1);
const u = (s)=>{
    let rows = JSON.parse(s.covid19js_decompress());
    let o = rows.map(keys=>keys.map(k=>k===null?null:k===""?"":_v[k]));
    return {header:o.shift(), data:o};
}
const covid19data = {
    confirmed: u(require('./tmp/confirmed')),
    recovered: u(require('./tmp/recovered')),
    deaths: u(require('./tmp/deaths'))
}

class Covid19Array extends Array{
    dates() {
        return this.__keys("date");
    }
    __keys(key){
        const keys = this.map(d=>d[key]);
        const result = keys.filter((d,i)=>keys.indexOf(d)===i);
        return result.sort();
    }
    __map(data,key,fn) {
        const result = [];
        for(var i=0;i<data.length;i++){
            result.push(fn(this.filter(d=>d[key]===data[i]),data[i]));
        }
        return result;
    }
    latest(){
        const dates = this.dates();
        const latest = dates.length?dates[dates.length-1]:null;
        return this.filter(d=>d.date===latest);
    }
    mapDates(fn) {
        return this.__map(this.dates(),"date",fn);
    }
    groupByDate() {
        return this.mapDates(data=>data.totals());
    }
    countryRegions() {
        return this.__keys("country_region");
    }
    mapCountryRegions(fn) {
        return this.__map(this.countryRegions(),"country_region",fn);
    }
    groupByCountryRegion() {
        if(this.dates().length > 1){
            throw new Error("developer: filter data to a single date before calling groupByCountryRegion.");
        }
        return this.mapCountryRegions(x=>x.totals());
    }
    totals() {
        if(this.dates().length > 1){
            throw new Error("developer: filter data to a single date before calling totals.");
        }
        const totals = {
                date: null,
                country_region: null,
                province_state: null,
                lat: null,
                lng: null,
                confirmed: 0,
                deaths: 0,
                recovered: 0,
                new: {
                    confirmed: 0,
                    deaths: 0,
                    recovered: 0,
                }
            };
        const n = this.length;
        for(var i=0;i<n;i++){
            let o = this[i];
            let most = 0;
            if(i===0){
                if(o.province_state){
                    totals.province_state = o.province_state;
                }
                totals.country_region = o.country_region;
                totals.lat = o.lat;
                totals.lng = o.lng;
                totals.date = o.date;
            }else{
                if(totals.province_state !== o.province_state){
                    delete totals.province_state;
                }
                if(totals.country_region !== o.country_region){
                    most = -1;
                    delete totals.country_region;
                    delete totals.lat;
                    delete totals.lng;
                }
                if(most >=0 && o.confirmed > most){
                    //hard to average these really.
                    totals.lat = o.lat;
                    totals.lng = o.lng;
                    most = o.confirmed;
                }
            }
            totals.deaths += o.deaths;
            totals.confirmed += o.confirmed;
            totals.recovered += o.recovered;
            totals.new.deaths += o.new.deaths;
            totals.new.confirmed += o.new.confirmed;
            totals.new.recovered += o.new.recovered;
        }
        if(totals.province_state === null){
            delete totals.province_state;
        }
        return totals;
    }
    on(date) {
        return this.filter(d=>d.date === date);
    }
}
const parseDate = function(date){
    const mdy = date.split("/").map(i=>parseInt(i));
    const d = new Date();
    d.setYear(mdy[2]+2000);
    d.setMonth(mdy[0]-1)
    d.setDate(mdy[1]);
    return d;
}
const a2o = function(a,key){
    const header = a.header;
    let n = header.length;
    let results = [];
    a.data.forEach(row=>{
        let province_state = row[0];
        let country_region = row[1];
        let lat = row[2];
        let lng = row[3];
        let prev = 0;
        for(let i=4; i<n;i++){
            let o = {
                date: parseDate(header[i]).toISOString().substring(0,10),
                country_region: country_region,
                province_state: province_state,
                lat: lat,
                lng: lng,
                deaths: 0,
                confirmed: 0,
                recovered: 0,
                new: {
                    deaths: 0,
                    confirmed: 0,
                    recovered: 0,
                }
            };
            if(province_state === null){
                delete o.province_state;
            }
            o[key] = row[i];
            o.new[key] = row[i] - prev;
            prev = row[i];
            results.push(o);
        }
    });
    return results;
}
var expandMergeCovid19Data = function(){
    const keyed = {};
    const key = o=>`${o.province_state}|${o.country_region}|${o.date}`;
    var results = a2o(covid19data.confirmed,"confirmed");
    results.forEach(o=>keyed[key(o)]=o);
    const deaths = a2o(covid19data.deaths,"deaths");
    deaths.forEach(o=>{
        if(!keyed[key(o)]){
            keyed[key(o)] = o;
            results.push(o);
        }
        keyed[key(o)].deaths = o.deaths;
        keyed[key(o)].new.deaths = o.new.deaths;
    });
    const recovered = a2o(covid19data.recovered,"recovered");
    recovered.forEach(o=>{
        if(!keyed[key(o)]){
            keyed[key(o)] = o;
            results.push(o);
        }
        keyed[key(o)].recovered = o.recovered;
        keyed[key(o)].new.recovered = o.new.recovered;
    });
    results = results.filter(o=>o.confirmed||o.recovered||o.deaths);
    results.sort((a,b)=>{
        if(a.date === b.date){
            if(a.country_region === b.country_region){
                return (a.province_state||"")<(b.province_state||"")?-1:1
            }
            return (a.country_region||"")<(b.country_region||"")?-1:1
        }
        return a.date<b.date?-1:1;
    })
    return results;
}
const expanded = expandMergeCovid19Data();
const covid19 = {
    last_updated: expanded[expanded.length-1].date,
    data: ()=>{
        let data = new Covid19Array();
        // make a deep copy
        JSON.parse(JSON.stringify(expanded)).forEach(x=>data.push(x));
        return data;
    }
}

module.exports = covid19; 
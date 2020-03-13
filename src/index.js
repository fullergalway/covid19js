const unpack = require('./unpack');

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
    _assertMaxOneDate(methodCalled) {
        if(this.dates().length > 1){
            throw new Error("developer: filter data to a single date before calling "+methodCalled+"()");
        }
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
    continents() {
        return this.__keys("continent");
    }
    mapContinents(fn) {
     return this.__map(this.continents(),"continent",fn);
    }
    groupByContinent() {
        this._assertMaxOneDate("groupByContinent")
        return this.mapContinents(x=>x.totals());
    }
    countryRegions() {
        return this.__keys("country_region");
    }
    mapCountryRegions(fn) {
        return this.__map(this.countryRegions(),"country_region",fn);
    }
    groupByCountryRegion() {
        this._assertMaxOneDate("groupByCountryRegion")
        return this.mapCountryRegions(x=>x.totals());
    }
    locations() {
        const locations = {};
        this.forEach(e=>locations[[e.lat,e.lng].join(",")] = {lat: e.lat, lng: e.lng});
        return Object.keys(locations).map(k=>locations[k]);
    }
    groupByLocation() {
        this._assertMaxOneDate("groupByLocation");
        const locations = this.locations();
        const result = [];
        for(var i=0;i<locations.length;i++){
            result.push(this.filter(d=>d.lat===locations[i].lat&&d.lng===locations[i].lng).totals());
        }
        return result;
    }
    totals() {
        this._assertMaxOneDate("totals");
        const totals = {
                date: null,
                country_iso2: null,
                country_iso3: null,
                continent: null,
                country_region: null,
                province_state: null,
                lat: null,
                lng: null,
                confirmed: 0,
                deaths: 0,
                recovered: 0,
                live: 0,
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
                totals.country_iso2 = o.country_iso2;
                totals.country_iso3 = o.country_iso3;
                totals.continent = o.continent;
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
                if(totals.country_iso2 !== o.country_iso2){
                    delete totals.country_iso2;
                    delete totals.country_iso3;
                }
                if(totals.continent !== o.continent){
                    delete totals.continent;
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
        if(totals.confirmed){
            totals.live = totals.confirmed - totals.deaths - totals.recovered;
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
const a2o = function(cv19d,a,key){
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
            let country_iso2 = cv19d.isomap[country_region]?cv19d.isomap[country_region][0]:null;
            let country_iso3 = cv19d.isomap[country_region]?cv19d.isomap[country_region][1]:null;
            let continent = cv19d.continents[country_iso2];
            let o = {
                date: parseDate(header[i]).toISOString().substring(0,10),
                country_iso2: country_iso2,
                country_iso3: country_iso3,
                continent: continent,
                country_region: country_region,
                province_state: province_state,
                lat: lat,
                lng: lng,
                deaths: 0,
                confirmed: 0,
                recovered: 0,
                live: 0,
                new: {
                    deaths: 0,
                    confirmed: 0,
                    recovered: 0,
                }
            };
            if(province_state === null || province_state === ""){
                delete o.province_state;
            }
            if(!country_iso2){
                delete o.country_iso2;
                delete o.country_iso3;
            }
            if(!continent){
                delete o.continent;
            }
            o[key] = row[i];
            o.new[key] = row[i] - prev;
            prev = row[i];
            results.push(o);
        }
    });
    return live(results);
}
const live = (data) => {
    return data.map(e=>{e.live=0;if(e.confirmed){e.live=e.confirmed-e.deaths-e.recovered}; return e;})
}
const expandMergeCovid19Data = function(cv19d){
    const keyed = {};
    const key = o=>`${o.province_state}|${o.country_region}|${o.date}`;
    var results = a2o(cv19d,cv19d.confirmed,"confirmed");
    results.forEach(o=>keyed[key(o)]=o);
    const deaths = a2o(cv19d,cv19d.deaths,"deaths");
    deaths.forEach(o=>{
        if(!keyed[key(o)]){
            keyed[key(o)] = o;
            results.push(o);
        }
        keyed[key(o)].deaths = o.deaths;
        keyed[key(o)].new.deaths = o.new.deaths;
    });
    const recovered = a2o(cv19d,cv19d.recovered,"recovered");
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
class Covid19 {
    constructor(covid19data){
        this.expanded = expandMergeCovid19Data(covid19data);
        this._lastrefresh = 0;
    }
    data(){
        var a = new Covid19Array();
                // make a deep copy
        JSON.parse(JSON.stringify(this.expanded)).forEach(x=>a.push(x));
        return a;
    }
    refresh(verbose){
        var now = new Date().getTime();
        // not more than once per minute
        if(now - this._lastrefresh < 60000){
            if(verbose) console.log("skipping refresh (too soon)");
            return this._fetchpromise;
        }
        this._lastrefresh = now;
        this._fetchpromise = fetch("/dist/updated.json?"+now)
            .then((response)=>{
                return response.json();
            })
            .then(function(last_updated){
                if(this.last_updated === undefined || this.last_updated === last_updated){
                    this.last_updated = last_updated;
                    if(verbose) console.log("skipping refresh (no new data)");
                    return this.data();
                }
                return fetch("/dist/covid19data.json?"+new Date().getTime())
                    .then(function(response){
                        return response.json();   
                    }).then(function(data){
                        let unpacked = unpack(data);
                        let other = new Covid19(unpacked);
                        this.expanded = other.expanded;
                        this.last_updated = last_updated;
                        if(verbose) console.log("covid19 refreshed "+last_updated)
                        return this.data();
                    }.bind(this));
            }.bind(this));
        return this._fetchpromise;
    }
}

const covid19data = unpack(require('./covid19data'));
const covid19 = new Covid19(covid19data);
covid19.refresh();
module.exports = covid19; 
# covid19js
Coronavirus COVID-19 outbreak data with zero dependencies, for web developers.

Data is generated from [2019 Novel Coronavirus COVID-19 (2019-nCoV) Data Repository by Johns Hopkins CSSE](https://github.com/CSSEGISandData/COVID-19)

[View the examples live](https://covid19js.com)

## Getting Started

Include this line in the head of your html page:

```
<script src="https://covid19js.com/dist/covid19.js"></script>
``` 

Afterwards you can use the covid19 data in your javascript. Some samples are below:

```
var data = covid19.data();

[
  {"date":"2020-01-22","country_region":"Japan","lat":36,"lng":138,"deaths":0,"confirmed":2,"recovered":0,"new":{"deaths":0,"confirmed":2,"recovered":0}},
  {"date":"2020-01-22","country_region":"Macau","province_state":"Macau","lat":22.1667,"lng":113.55,"deaths":0,"confirmed":1,"recovered":0,"new":{"deaths":0,"confirmed":1,"recovered":0}},
  {"date":"2020-01-22","country_region":"Mainland China","province_state":"Anhui","lat":31.8257,"lng":117.2264,"deaths":0,"confirmed":1,"recovered":0,"new":{"deaths":0,"confirmed":1,"recovered":0}},
  ...
]
```

```
data.latest();
data.latest();

[
  {"date":"2020-03-06","country_region":"Afghanistan","lat":33,"lng":65,"deaths":0,"confirmed":1,"recovered":0,"new":{"deaths":0,"confirmed":0,"recovered":0}},
  {"date":"2020-03-06","country_region":"Algeria","lat":28.0339,"lng":1.6596,"deaths":0,"confirmed":17,"recovered":0,"new":{"deaths":0,"confirmed":5,"recovered":0}},
  {"date":"2020-03-06","country_region":"Andorra","lat":42.5063,"lng":1.5218,"deaths":0,"confirmed":1,"recovered":0,"new":{"deaths":0,"confirmed":0,"recovered":0}},
  ...
]
```

```
data.latest().totals();
{
  "date": "2020-03-06",
  "confirmed": 101800,
  "deaths": 3460,
  "recovered": 55866,
  "new": { "confirmed": 3921, "deaths": 112, "recovered": 2070  }
}
```

Filter as you would with any javascript array

```
data.latest().filter(x=>x.country_region==="US");
[
  {"date":"2020-03-06","country_region":"US","province_state":"Bergen County, NJ","lat":40.9263,"lng":-74.077,"deaths":0,"confirmed":2,"recovered":0,"new":{"deaths":0,"confirmed":0,"recovered":0}},    
  {"date":"2020-03-06","country_region":"US","province_state":"Berkeley, CA","lat":37.8715,"lng":-122.273,"deaths":0,"confirmed":1,"recovered":0,"new":{"deaths":0,"confirmed":0,"recovered":0}},  
  {"date":"2020-03-06","country_region":"US","province_state":"Chatham County, NC","lat":35.7211,"lng":-79.1781,"deaths":0,"confirmed":1,"recovered":0,"new":{"deaths":0,"confirmed":1,"recovered":0}},
  ...
]
```

```
data.latest().filter(x=>x.country_region==="US").totals();

{
  "date": "2020-03-06",
  "country_region": "US",
  "lat": 38.7646,
  "lng": -121.9018,
  "confirmed": 278,
  "deaths": 14,
  "recovered": 8,
  "new": {
    "confirmed": 63,
    "deaths": 2,
    "recovered": 1
  }
}
```

Filter for leaflet map bounds

```
var bounds = L.latLngBounds(
        L.latLng(6.7499552751, 36.619987291),
        L.latLng(18.4802470232, 47.1153931748));
data.filter(x=>bounds.contains(L.latLng(x.lat,x.lng)));

[
  {"date":"2020-01-31","country_region":"Italy","lat":43,"lng":12,"deaths":0,"confirmed":2,"recovered":0,"new":{"deaths":0,"confirmed":2,"recovered":0}},
  {"date":"2020-02-01","country_region":"Italy","lat":43,"lng":12,"deaths":0,"confirmed":2,"recovered":0,"new":{"deaths":0,"confirmed":0,"recovered":0}},
  {"date":"2020-02-02","country_region":"Italy","lat":43,"lng":12,"deaths":0,"confirmed":2,"recovered":0,"new":{"deaths":0,"confirmed":0,"recovered":0}},
  ...
]
```

Group by country (must filter to a single date first)

```
data.latest().groupByCountryRegion();

[
  {"date":"2020-03-06","country_region":"Afghanistan","lat":33,"lng":65,"confirmed":1,"deaths":0,"recovered":0,"new":{"confirmed":0,"deaths":0,"recovered":0}},
  {"date":"2020-03-06","country_region":"Algeria","lat":28.0339,"lng":1.6596,"confirmed":17,"deaths":0,"recovered":0,"new":{"confirmed":5,"deaths":0,"recovered":0}},
  {"date":"2020-03-06","country_region":"Andorra","lat":42.5063,"lng":1.5218,"confirmed":1,"deaths":0,"recovered":0,"new":{"confirmed":0,"deaths":0,"recovered":0}},
  ...
]
```

Group by date with or without filtering first

```
data.filter(x=>x.country_region==="US").groupByDate();

[
  {"date":"2020-01-22","country_region":"US","province_state":"King County, WA","lat":47.6062,"lng":-122.3321,"confirmed":1,"deaths":0,"recovered":0,"new":{"confirmed":1,"deaths":0,"recovered":0}},
  {"date":"2020-01-23","country_region":"US","province_state":"King County, WA","lat":47.6062,"lng":-122.3321,"confirmed":1,"deaths":0,"recovered":0,"new":{"confirmed":0,"deaths":0,"recovered":0}},
  {"date":"2020-01-24","country_region":"US","lat":47.6062,"lng":-122.3321,"confirmed":2,"deaths":0,"recovered":0,"new":{"confirmed":1,"deaths":0,"recovered":0}},
  ...
]
```

```
data.groupByDate();

[
  {"date":"2020-01-22","confirmed":555,"deaths":17,"recovered":28,"new":{"confirmed":555,"deaths":17,"recovered":28}},
  {"date":"2020-01-23","confirmed":653,"deaths":18,"recovered":30,"new":{"confirmed":98,"deaths":1,"recovered":2}},
  {"date":"2020-01-24","confirmed":941,"deaths":26,"recovered":36,"new":{"confirmed":288,"deaths":8,"recovered":6}},
  ...
]
```


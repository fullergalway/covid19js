const isoMap = require("../src/isomap");

const stats = {
    totalPop: 'Population mid-year estimates (millions)',
    totalMale: 'Population mid-year estimates for males (millions)',
    totalFemale: 'Population mid-year estimates for females (millions)',
    percentBelow15: 'Population aged 0 to 14 years old (percentage)',
    percentOver59: 'Population aged 60+ years old (percentage)',
    density: 'Population density'
}
const rstats = {};
for (const key in stats) {
    rstats[stats[key]] = key;
};

function data() {
    const retVal = {};
    rawData()
        .map(row => {
            row["iso"] = (isoMap[row.Location.toLowerCase()] || [])[0];
            return row;
        })
        .filter(row => row.iso !== undefined)
        .forEach(row => {
            if (!retVal[row.iso]) {
                retVal[row.iso] = {
                    iso: row.iso,
                    name: row.Location
                };
            }
            const statID = rstats[row.What];
            if (statID) {
                retVal[row.iso][statID] = row.Value;
            }
        });
    return retVal;
}

module.exports = {
    data
}

function rawData() {
    //  Data from https://data.un.org/  ---
    return [
        {
            "ID": 1,
            "Location": "Total, all countries or areas",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 7713.4681,
            "Notes": ""
        },
        {
            "ID": 1,
            "Location": "Total, all countries or areas",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3889.0346,
            "Notes": ""
        },
        {
            "ID": 1,
            "Location": "Total, all countries or areas",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3824.4336,
            "Notes": ""
        },
        {
            "ID": 1,
            "Location": "Total, all countries or areas",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.6892,
            "Notes": ""
        },
        {
            "ID": 1,
            "Location": "Total, all countries or areas",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 25.6082,
            "Notes": ""
        },
        {
            "ID": 1,
            "Location": "Total, all countries or areas",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 13.2011,
            "Notes": ""
        },
        {
            "ID": 1,
            "Location": "Total, all countries or areas",
            "Year": 2019,
            "What": "Population density",
            "Value": 59.2915,
            "Notes": ""
        },
        {
            "ID": 2,
            "Location": "Africa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1308.0642,
            "Notes": ""
        },
        {
            "ID": 2,
            "Location": "Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 653.5137,
            "Notes": ""
        },
        {
            "ID": 2,
            "Location": "Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 654.5505,
            "Notes": ""
        },
        {
            "ID": 2,
            "Location": "Africa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.8416,
            "Notes": ""
        },
        {
            "ID": 2,
            "Location": "Africa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 40.5557,
            "Notes": ""
        },
        {
            "ID": 2,
            "Location": "Africa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.4575,
            "Notes": ""
        },
        {
            "ID": 2,
            "Location": "Africa",
            "Year": 2019,
            "What": "Population density",
            "Value": 44.1191,
            "Notes": ""
        },
        {
            "ID": 15,
            "Location": "Northern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 241.7808,
            "Notes": ""
        },
        {
            "ID": 15,
            "Location": "Northern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 121.4786,
            "Notes": ""
        },
        {
            "ID": 15,
            "Location": "Northern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 120.3021,
            "Notes": ""
        },
        {
            "ID": 15,
            "Location": "Northern Africa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.978,
            "Notes": ""
        },
        {
            "ID": 15,
            "Location": "Northern Africa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 32.6918,
            "Notes": ""
        },
        {
            "ID": 15,
            "Location": "Northern Africa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.6463,
            "Notes": ""
        },
        {
            "ID": 15,
            "Location": "Northern Africa",
            "Year": 2019,
            "What": "Population density",
            "Value": 31.1195,
            "Notes": ""
        },
        {
            "ID": 202,
            "Location": "Sub-Saharan Africa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1066.2834,
            "Notes": ""
        },
        {
            "ID": 202,
            "Location": "Sub-Saharan Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 532.035,
            "Notes": ""
        },
        {
            "ID": 202,
            "Location": "Sub-Saharan Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 534.2484,
            "Notes": ""
        },
        {
            "ID": 202,
            "Location": "Sub-Saharan Africa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.5857,
            "Notes": ""
        },
        {
            "ID": 202,
            "Location": "Sub-Saharan Africa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.3389,
            "Notes": ""
        },
        {
            "ID": 202,
            "Location": "Sub-Saharan Africa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.7344,
            "Notes": ""
        },
        {
            "ID": 202,
            "Location": "Sub-Saharan Africa",
            "Year": 2019,
            "What": "Population density",
            "Value": 48.7354,
            "Notes": ""
        },
        {
            "ID": 14,
            "Location": "Eastern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 433.9049,
            "Notes": ""
        },
        {
            "ID": 14,
            "Location": "Eastern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 215.2838,
            "Notes": ""
        },
        {
            "ID": 14,
            "Location": "Eastern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 218.6212,
            "Notes": ""
        },
        {
            "ID": 14,
            "Location": "Eastern Africa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.4734,
            "Notes": ""
        },
        {
            "ID": 14,
            "Location": "Eastern Africa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.1853,
            "Notes": ""
        },
        {
            "ID": 14,
            "Location": "Eastern Africa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.5424,
            "Notes": ""
        },
        {
            "ID": 14,
            "Location": "Eastern Africa",
            "Year": 2019,
            "What": "Population density",
            "Value": 65.0777,
            "Notes": ""
        },
        {
            "ID": 17,
            "Location": "Middle Africa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 174.3084,
            "Notes": ""
        },
        {
            "ID": 17,
            "Location": "Middle Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 86.9713,
            "Notes": ""
        },
        {
            "ID": 17,
            "Location": "Middle Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 87.3371,
            "Notes": ""
        },
        {
            "ID": 17,
            "Location": "Middle Africa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.5811,
            "Notes": ""
        },
        {
            "ID": 17,
            "Location": "Middle Africa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 45.2699,
            "Notes": ""
        },
        {
            "ID": 17,
            "Location": "Middle Africa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.3444,
            "Notes": ""
        },
        {
            "ID": 17,
            "Location": "Middle Africa",
            "Year": 2019,
            "What": "Population density",
            "Value": 26.8298,
            "Notes": ""
        },
        {
            "ID": 18,
            "Location": "Southern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 66.6299,
            "Notes": ""
        },
        {
            "ID": 18,
            "Location": "Southern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 32.793,
            "Notes": ""
        },
        {
            "ID": 18,
            "Location": "Southern Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 33.8369,
            "Notes": ""
        },
        {
            "ID": 18,
            "Location": "Southern Africa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.915,
            "Notes": ""
        },
        {
            "ID": 18,
            "Location": "Southern Africa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.6957,
            "Notes": ""
        },
        {
            "ID": 18,
            "Location": "Southern Africa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.1707,
            "Notes": ""
        },
        {
            "ID": 18,
            "Location": "Southern Africa",
            "Year": 2019,
            "What": "Population density",
            "Value": 25.137,
            "Notes": ""
        },
        {
            "ID": 11,
            "Location": "Western Africa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 391.4402,
            "Notes": "Including Saint Helena."
        },
        {
            "ID": 11,
            "Location": "Western Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 196.987,
            "Notes": "Including Saint Helena."
        },
        {
            "ID": 11,
            "Location": "Western Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 194.4532,
            "Notes": "Including Saint Helena."
        },
        {
            "ID": 11,
            "Location": "Western Africa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.303,
            "Notes": "Including Saint Helena."
        },
        {
            "ID": 11,
            "Location": "Western Africa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 43.356,
            "Notes": "Including Saint Helena."
        },
        {
            "ID": 11,
            "Location": "Western Africa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.5361,
            "Notes": "Including Saint Helena."
        },
        {
            "ID": 11,
            "Location": "Western Africa",
            "Year": 2019,
            "What": "Population density",
            "Value": 64.5508,
            "Notes": ""
        },
        {
            "ID": 19,
            "Location": "Americas",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1014.7219,
            "Notes": "Calculated by the UN Statistics Division."
        },
        {
            "ID": 19,
            "Location": "Americas",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 500.2554,
            "Notes": "Calculated by the UN Statistics Division."
        },
        {
            "ID": 19,
            "Location": "Americas",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 514.4665,
            "Notes": "Calculated by the UN Statistics Division."
        },
        {
            "ID": 19,
            "Location": "Americas",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.2377,
            "Notes": "Calculated by the UN Statistics Division."
        },
        {
            "ID": 19,
            "Location": "Americas",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.0644,
            "Notes": "Calculated by the UN Statistics Division."
        },
        {
            "ID": 19,
            "Location": "Americas",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 16.2317,
            "Notes": "Calculated by the UN Statistics Division."
        },
        {
            "ID": 19,
            "Location": "Americas",
            "Year": 2019,
            "What": "Population density",
            "Value": 23.9762,
            "Notes": "Calculated by the UN Statistics Division."
        },
        {
            "ID": 21,
            "Location": "Northern America",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 366.601,
            "Notes": "Including Bermuda, Greenland, and Saint Pierre and Miquelon."
        },
        {
            "ID": 21,
            "Location": "Northern America",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 181.4523,
            "Notes": "Including Bermuda, Greenland, and Saint Pierre and Miquelon."
        },
        {
            "ID": 21,
            "Location": "Northern America",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 185.1486,
            "Notes": "Including Bermuda, Greenland, and Saint Pierre and Miquelon."
        },
        {
            "ID": 21,
            "Location": "Northern America",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.0036,
            "Notes": "Including Bermuda, Greenland, and Saint Pierre and Miquelon."
        },
        {
            "ID": 21,
            "Location": "Northern America",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.2729,
            "Notes": "Including Bermuda, Greenland, and Saint Pierre and Miquelon."
        },
        {
            "ID": 21,
            "Location": "Northern America",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.6138,
            "Notes": "Including Bermuda, Greenland, and Saint Pierre and Miquelon."
        },
        {
            "ID": 21,
            "Location": "Northern America",
            "Year": 2019,
            "What": "Population density",
            "Value": 19.6551,
            "Notes": ""
        },
        {
            "ID": 419,
            "Location": "Latin America & the Caribbean",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 648.121,
            "Notes": ""
        },
        {
            "ID": 419,
            "Location": "Latin America & the Caribbean",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 318.8031,
            "Notes": ""
        },
        {
            "ID": 419,
            "Location": "Latin America & the Caribbean",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 329.3178,
            "Notes": ""
        },
        {
            "ID": 419,
            "Location": "Latin America & the Caribbean",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.8071,
            "Notes": ""
        },
        {
            "ID": 419,
            "Location": "Latin America & the Caribbean",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 24.2089,
            "Notes": ""
        },
        {
            "ID": 419,
            "Location": "Latin America & the Caribbean",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 12.6218,
            "Notes": ""
        },
        {
            "ID": 419,
            "Location": "Latin America & the Caribbean",
            "Year": 2019,
            "What": "Population density",
            "Value": 32.1818,
            "Notes": ""
        },
        {
            "ID": 29,
            "Location": "Caribbean",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 43.335,
            "Notes": ""
        },
        {
            "ID": 29,
            "Location": "Caribbean",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 21.4014,
            "Notes": "Including Anguilla, Bonaire, Sint Eustatius and Saba, British Virgin Islands, Cayman Islands, Dominica, Montserrat, Saint Kitts and Nevis, Sint Maarten (Dutch part) and Turks and Caicos Islands."
        },
        {
            "ID": 29,
            "Location": "Caribbean",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 21.9336,
            "Notes": "Including Anguilla, Bonaire, Sint Eustatius and Saba, British Virgin Islands, Cayman Islands, Dominica, Montserrat, Saint Kitts and Nevis, Sint Maarten (Dutch part) and Turks and Caicos Islands."
        },
        {
            "ID": 29,
            "Location": "Caribbean",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.5732,
            "Notes": "Including Anguilla, Bonaire, Sint Eustatius and Saba, British Virgin Islands, Cayman Islands, Dominica, Montserrat, Saint Kitts and Nevis, Sint Maarten (Dutch part) and Turks and Caicos Islands."
        },
        {
            "ID": 29,
            "Location": "Caribbean",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 24.161,
            "Notes": "Including Anguilla, Bonaire, Sint Eustatius and Saba, British Virgin Islands, Cayman Islands, Dominica, Montserrat, Saint Kitts and Nevis, Sint Maarten (Dutch part) and Turks and Caicos Islands."
        },
        {
            "ID": 29,
            "Location": "Caribbean",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 14.4866,
            "Notes": "Including Anguilla, Bonaire, Sint Eustatius and Saba, British Virgin Islands, Cayman Islands, Dominica, Montserrat, Saint Kitts and Nevis, Sint Maarten (Dutch part) and Turks and Caicos Islands."
        },
        {
            "ID": 29,
            "Location": "Caribbean",
            "Year": 2019,
            "What": "Population density",
            "Value": 191.7401,
            "Notes": ""
        },
        {
            "ID": 13,
            "Location": "Central America",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 177.5865,
            "Notes": ""
        },
        {
            "ID": 13,
            "Location": "Central America",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 87.0249,
            "Notes": ""
        },
        {
            "ID": 13,
            "Location": "Central America",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 90.5616,
            "Notes": ""
        },
        {
            "ID": 13,
            "Location": "Central America",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.0947,
            "Notes": ""
        },
        {
            "ID": 13,
            "Location": "Central America",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.2544,
            "Notes": ""
        },
        {
            "ID": 13,
            "Location": "Central America",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.4186,
            "Notes": ""
        },
        {
            "ID": 13,
            "Location": "Central America",
            "Year": 2019,
            "What": "Population density",
            "Value": 72.4172,
            "Notes": ""
        },
        {
            "ID": 5,
            "Location": "South America",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 427.1994,
            "Notes": ""
        },
        {
            "ID": 5,
            "Location": "South America",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 210.3768,
            "Notes": "Including Falkland Islands (Malvinas)."
        },
        {
            "ID": 5,
            "Location": "South America",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 216.8226,
            "Notes": "Including Falkland Islands (Malvinas)."
        },
        {
            "ID": 5,
            "Location": "South America",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.0272,
            "Notes": "Including Falkland Islands (Malvinas)."
        },
        {
            "ID": 5,
            "Location": "South America",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.9478,
            "Notes": "Including Falkland Islands (Malvinas)."
        },
        {
            "ID": 5,
            "Location": "South America",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 13.3484,
            "Notes": "Including Falkland Islands (Malvinas)."
        },
        {
            "ID": 5,
            "Location": "South America",
            "Year": 2019,
            "What": "Population density",
            "Value": 24.4658,
            "Notes": ""
        },
        {
            "ID": 142,
            "Location": "Asia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4601.3712,
            "Notes": ""
        },
        {
            "ID": 142,
            "Location": "Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2353.4662,
            "Notes": ""
        },
        {
            "ID": 142,
            "Location": "Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2247.905,
            "Notes": ""
        },
        {
            "ID": 142,
            "Location": "Asia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 104.696,
            "Notes": ""
        },
        {
            "ID": 142,
            "Location": "Asia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.7099,
            "Notes": ""
        },
        {
            "ID": 142,
            "Location": "Asia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 12.7377,
            "Notes": ""
        },
        {
            "ID": 142,
            "Location": "Asia",
            "Year": 2019,
            "What": "Population density",
            "Value": 148.2729,
            "Notes": ""
        },
        {
            "ID": 143,
            "Location": "Central Asia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 73.2121,
            "Notes": ""
        },
        {
            "ID": 143,
            "Location": "Central Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 36.2474,
            "Notes": ""
        },
        {
            "ID": 143,
            "Location": "Central Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 36.9647,
            "Notes": ""
        },
        {
            "ID": 143,
            "Location": "Central Asia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.0595,
            "Notes": ""
        },
        {
            "ID": 143,
            "Location": "Central Asia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 30.356,
            "Notes": ""
        },
        {
            "ID": 143,
            "Location": "Central Asia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.6227,
            "Notes": ""
        },
        {
            "ID": 143,
            "Location": "Central Asia",
            "Year": 2019,
            "What": "Population density",
            "Value": 18.6443,
            "Notes": ""
        },
        {
            "ID": 30,
            "Location": "Eastern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1672.6111,
            "Notes": ""
        },
        {
            "ID": 30,
            "Location": "Eastern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 852.917,
            "Notes": ""
        },
        {
            "ID": 30,
            "Location": "Eastern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 819.6941,
            "Notes": ""
        },
        {
            "ID": 30,
            "Location": "Eastern Asia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 104.0531,
            "Notes": ""
        },
        {
            "ID": 30,
            "Location": "Eastern Asia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.2143,
            "Notes": ""
        },
        {
            "ID": 30,
            "Location": "Eastern Asia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 18.364,
            "Notes": ""
        },
        {
            "ID": 30,
            "Location": "Eastern Asia",
            "Year": 2019,
            "What": "Population density",
            "Value": 144.6838,
            "Notes": ""
        },
        {
            "ID": 62,
            "Location": "South-central Asia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1991.4235,
            "Notes": ""
        },
        {
            "ID": 62,
            "Location": "South-central Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1025.7394,
            "Notes": ""
        },
        {
            "ID": 62,
            "Location": "South-central Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 965.6841,
            "Notes": ""
        },
        {
            "ID": 62,
            "Location": "South-central Asia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 106.2189,
            "Notes": ""
        },
        {
            "ID": 62,
            "Location": "South-central Asia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.9546,
            "Notes": ""
        },
        {
            "ID": 62,
            "Location": "South-central Asia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.2395,
            "Notes": ""
        },
        {
            "ID": 62,
            "Location": "South-central Asia",
            "Year": 2019,
            "What": "Population density",
            "Value": 192.8381,
            "Notes": ""
        },
        {
            "ID": 35,
            "Location": "South-eastern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 662.0118,
            "Notes": ""
        },
        {
            "ID": 35,
            "Location": "South-eastern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 330.673,
            "Notes": ""
        },
        {
            "ID": 35,
            "Location": "South-eastern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 331.3389,
            "Notes": ""
        },
        {
            "ID": 35,
            "Location": "South-eastern Asia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.799,
            "Notes": ""
        },
        {
            "ID": 35,
            "Location": "South-eastern Asia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 25.4248,
            "Notes": ""
        },
        {
            "ID": 35,
            "Location": "South-eastern Asia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.7554,
            "Notes": ""
        },
        {
            "ID": 35,
            "Location": "South-eastern Asia",
            "Year": 2019,
            "What": "Population density",
            "Value": 152.5127,
            "Notes": ""
        },
        {
            "ID": 34,
            "Location": "Southern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1918.2114,
            "Notes": ""
        },
        {
            "ID": 34,
            "Location": "Southern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 989.492,
            "Notes": ""
        },
        {
            "ID": 34,
            "Location": "Southern Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 928.7194,
            "Notes": ""
        },
        {
            "ID": 34,
            "Location": "Southern Asia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 106.5437,
            "Notes": ""
        },
        {
            "ID": 34,
            "Location": "Southern Asia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.863,
            "Notes": ""
        },
        {
            "ID": 34,
            "Location": "Southern Asia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.263,
            "Notes": ""
        },
        {
            "ID": 34,
            "Location": "Southern Asia",
            "Year": 2019,
            "What": "Population density",
            "Value": 299.7146,
            "Notes": ""
        },
        {
            "ID": 145,
            "Location": "Western Asia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 275.3248,
            "Notes": ""
        },
        {
            "ID": 145,
            "Location": "Western Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 144.1368,
            "Notes": ""
        },
        {
            "ID": 145,
            "Location": "Western Asia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 131.188,
            "Notes": ""
        },
        {
            "ID": 145,
            "Location": "Western Asia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 109.8704,
            "Notes": ""
        },
        {
            "ID": 145,
            "Location": "Western Asia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 28.3448,
            "Notes": ""
        },
        {
            "ID": 145,
            "Location": "Western Asia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.6266,
            "Notes": ""
        },
        {
            "ID": 145,
            "Location": "Western Asia",
            "Year": 2019,
            "What": "Population density",
            "Value": 57.299,
            "Notes": ""
        },
        {
            "ID": 150,
            "Location": "Europe",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 747.1828,
            "Notes": ""
        },
        {
            "ID": 150,
            "Location": "Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 360.7116,
            "Notes": ""
        },
        {
            "ID": 150,
            "Location": "Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 386.4712,
            "Notes": ""
        },
        {
            "ID": 150,
            "Location": "Europe",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.3347,
            "Notes": ""
        },
        {
            "ID": 150,
            "Location": "Europe",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.0517,
            "Notes": ""
        },
        {
            "ID": 150,
            "Location": "Europe",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.2673,
            "Notes": ""
        },
        {
            "ID": 150,
            "Location": "Europe",
            "Year": 2019,
            "What": "Population density",
            "Value": 33.7559,
            "Notes": ""
        },
        {
            "ID": 151,
            "Location": "Eastern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 293.4449,
            "Notes": ""
        },
        {
            "ID": 151,
            "Location": "Eastern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 138.024,
            "Notes": ""
        },
        {
            "ID": 151,
            "Location": "Eastern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 155.4209,
            "Notes": ""
        },
        {
            "ID": 151,
            "Location": "Eastern Europe",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 88.8066,
            "Notes": ""
        },
        {
            "ID": 151,
            "Location": "Eastern Europe",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.8588,
            "Notes": ""
        },
        {
            "ID": 151,
            "Location": "Eastern Europe",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 23.2775,
            "Notes": ""
        },
        {
            "ID": 151,
            "Location": "Eastern Europe",
            "Year": 2019,
            "What": "Population density",
            "Value": 16.2548,
            "Notes": ""
        },
        {
            "ID": 154,
            "Location": "Northern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 105.7685,
            "Notes": ""
        },
        {
            "ID": 154,
            "Location": "Northern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 52.217,
            "Notes": "Including the Faroe Islands and the Isle of Man."
        },
        {
            "ID": 154,
            "Location": "Northern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 53.5515,
            "Notes": "Including the Faroe Islands and the Isle of Man."
        },
        {
            "ID": 154,
            "Location": "Northern Europe",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.5081,
            "Notes": "Including the Faroe Islands and the Isle of Man."
        },
        {
            "ID": 154,
            "Location": "Northern Europe",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.5691,
            "Notes": "Including the Faroe Islands and the Isle of Man."
        },
        {
            "ID": 154,
            "Location": "Northern Europe",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 24.4795,
            "Notes": "Including the Faroe Islands and the Isle of Man."
        },
        {
            "ID": 154,
            "Location": "Northern Europe",
            "Year": 2019,
            "What": "Population density",
            "Value": 62.1284,
            "Notes": ""
        },
        {
            "ID": 39,
            "Location": "Southern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 152.4469,
            "Notes": ""
        },
        {
            "ID": 39,
            "Location": "Southern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 74.4516,
            "Notes": "Including Andorra, Gibraltar, Holy See, and San Marino."
        },
        {
            "ID": 39,
            "Location": "Southern Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 77.9953,
            "Notes": "Including Andorra, Gibraltar, Holy See, and San Marino."
        },
        {
            "ID": 39,
            "Location": "Southern Europe",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.4565,
            "Notes": "Including Andorra, Gibraltar, Holy See, and San Marino."
        },
        {
            "ID": 39,
            "Location": "Southern Europe",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.0383,
            "Notes": "Including Andorra, Gibraltar, Holy See, and San Marino."
        },
        {
            "ID": 39,
            "Location": "Southern Europe",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 27.3995,
            "Notes": "Including Andorra, Gibraltar, Holy See, and San Marino."
        },
        {
            "ID": 39,
            "Location": "Southern Europe",
            "Year": 2019,
            "What": "Population density",
            "Value": 117.7269,
            "Notes": ""
        },
        {
            "ID": 155,
            "Location": "Western Europe",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 195.5224,
            "Notes": ""
        },
        {
            "ID": 155,
            "Location": "Western Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 96.0189,
            "Notes": "Including Liechtenstein and Monaco."
        },
        {
            "ID": 155,
            "Location": "Western Europe",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 99.5035,
            "Notes": "Including Liechtenstein and Monaco."
        },
        {
            "ID": 155,
            "Location": "Western Europe",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.4981,
            "Notes": "Including Liechtenstein and Monaco."
        },
        {
            "ID": 155,
            "Location": "Western Europe",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.5895,
            "Notes": "Including Liechtenstein and Monaco."
        },
        {
            "ID": 155,
            "Location": "Western Europe",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 27.0174,
            "Notes": "Including Liechtenstein and Monaco."
        },
        {
            "ID": 155,
            "Location": "Western Europe",
            "Year": 2019,
            "What": "Population density",
            "Value": 180.2393,
            "Notes": ""
        },
        {
            "ID": 9,
            "Location": "Oceania",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 42.128,
            "Notes": ""
        },
        {
            "ID": 9,
            "Location": "Oceania",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 21.0877,
            "Notes": ""
        },
        {
            "ID": 9,
            "Location": "Oceania",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 21.0404,
            "Notes": ""
        },
        {
            "ID": 9,
            "Location": "Oceania",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.2247,
            "Notes": ""
        },
        {
            "ID": 9,
            "Location": "Oceania",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.6886,
            "Notes": ""
        },
        {
            "ID": 9,
            "Location": "Oceania",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 17.2497,
            "Notes": ""
        },
        {
            "ID": 9,
            "Location": "Oceania",
            "Year": 2019,
            "What": "Population density",
            "Value": 4.9641,
            "Notes": ""
        },
        {
            "ID": 53,
            "Location": "Australia and New Zealand",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 29.9863,
            "Notes": ""
        },
        {
            "ID": 53,
            "Location": "Australia and New Zealand",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 14.9025,
            "Notes": ""
        },
        {
            "ID": 53,
            "Location": "Australia and New Zealand",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 15.0838,
            "Notes": ""
        },
        {
            "ID": 53,
            "Location": "Australia and New Zealand",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.7979,
            "Notes": ""
        },
        {
            "ID": 53,
            "Location": "Australia and New Zealand",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 19.3219,
            "Notes": ""
        },
        {
            "ID": 53,
            "Location": "Australia and New Zealand",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 21.4864,
            "Notes": ""
        },
        {
            "ID": 53,
            "Location": "Australia and New Zealand",
            "Year": 2019,
            "What": "Population density",
            "Value": 3.7739,
            "Notes": ""
        },
        {
            "ID": 54,
            "Location": "Melanesia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 10.9185,
            "Notes": ""
        },
        {
            "ID": 54,
            "Location": "Melanesia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.5658,
            "Notes": ""
        },
        {
            "ID": 54,
            "Location": "Melanesia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.3527,
            "Notes": ""
        },
        {
            "ID": 54,
            "Location": "Melanesia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 103.9811,
            "Notes": ""
        },
        {
            "ID": 54,
            "Location": "Melanesia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 35.0168,
            "Notes": ""
        },
        {
            "ID": 54,
            "Location": "Melanesia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.3535,
            "Notes": ""
        },
        {
            "ID": 54,
            "Location": "Melanesia",
            "Year": 2019,
            "What": "Population density",
            "Value": 20.6169,
            "Notes": ""
        },
        {
            "ID": 57,
            "Location": "Micronesia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.5435,
            "Notes": ""
        },
        {
            "ID": 57,
            "Location": "Micronesia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.2746,
            "Notes": "Including Marshall Islands, Nauru, Northern Mariana Islands and Palau."
        },
        {
            "ID": 57,
            "Location": "Micronesia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2689,
            "Notes": "Including Marshall Islands, Nauru, Northern Mariana Islands and Palau."
        },
        {
            "ID": 57,
            "Location": "Micronesia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.1367,
            "Notes": "Including Marshall Islands, Nauru, Northern Mariana Islands and Palau."
        },
        {
            "ID": 57,
            "Location": "Micronesia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.5986,
            "Notes": "Including Marshall Islands, Nauru, Northern Mariana Islands and Palau."
        },
        {
            "ID": 57,
            "Location": "Micronesia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.463,
            "Notes": "Including Marshall Islands, Nauru, Northern Mariana Islands and Palau."
        },
        {
            "ID": 57,
            "Location": "Micronesia",
            "Year": 2019,
            "What": "Population density",
            "Value": 171.4467,
            "Notes": ""
        },
        {
            "ID": 61,
            "Location": "Polynesia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.6798,
            "Notes": "Including Pitcairn."
        },
        {
            "ID": 61,
            "Location": "Polynesia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.3448,
            "Notes": "Including American Samoa, Cook Islands, Niue, Pitcairn, Tokelau, Tuvalu, and Wallis and Futuna Islands."
        },
        {
            "ID": 61,
            "Location": "Polynesia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.335,
            "Notes": "Including American Samoa, Cook Islands, Niue, Pitcairn, Tokelau, Tuvalu, and Wallis and Futuna Islands."
        },
        {
            "ID": 61,
            "Location": "Polynesia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.9131,
            "Notes": "Including American Samoa, Cook Islands, Niue, Pitcairn, Tokelau, Tuvalu, and Wallis and Futuna Islands."
        },
        {
            "ID": 61,
            "Location": "Polynesia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.6337,
            "Notes": "Including American Samoa, Cook Islands, Niue, Pitcairn, Tokelau, Tuvalu, and Wallis and Futuna Islands."
        },
        {
            "ID": 61,
            "Location": "Polynesia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.8028,
            "Notes": "Including American Samoa, Cook Islands, Niue, Pitcairn, Tokelau, Tuvalu, and Wallis and Futuna Islands."
        },
        {
            "ID": 61,
            "Location": "Polynesia",
            "Year": 2019,
            "What": "Population density",
            "Value": 84.0261,
            "Notes": "Including Pitcairn."
        },
        {
            "ID": 4,
            "Location": "Afghanistan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 38.0418,
            "Notes": ""
        },
        {
            "ID": 4,
            "Location": "Afghanistan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 19.5297,
            "Notes": ""
        },
        {
            "ID": 4,
            "Location": "Afghanistan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 18.512,
            "Notes": ""
        },
        {
            "ID": 4,
            "Location": "Afghanistan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 105.4975,
            "Notes": ""
        },
        {
            "ID": 4,
            "Location": "Afghanistan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.4723,
            "Notes": ""
        },
        {
            "ID": 4,
            "Location": "Afghanistan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.1655,
            "Notes": ""
        },
        {
            "ID": 4,
            "Location": "Afghanistan",
            "Year": 2019,
            "What": "Population density",
            "Value": 58.2694,
            "Notes": ""
        },
        {
            "ID": 8,
            "Location": "Albania",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.8809,
            "Notes": ""
        },
        {
            "ID": 8,
            "Location": "Albania",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.4668,
            "Notes": ""
        },
        {
            "ID": 8,
            "Location": "Albania",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.4141,
            "Notes": ""
        },
        {
            "ID": 8,
            "Location": "Albania",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 103.7236,
            "Notes": ""
        },
        {
            "ID": 8,
            "Location": "Albania",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.3996,
            "Notes": ""
        },
        {
            "ID": 8,
            "Location": "Albania",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 20.4779,
            "Notes": ""
        },
        {
            "ID": 8,
            "Location": "Albania",
            "Year": 2019,
            "What": "Population density",
            "Value": 105.143,
            "Notes": ""
        },
        {
            "ID": 12,
            "Location": "Algeria",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 43.0531,
            "Notes": ""
        },
        {
            "ID": 12,
            "Location": "Algeria",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 21.7497,
            "Notes": ""
        },
        {
            "ID": 12,
            "Location": "Algeria",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 21.3034,
            "Notes": ""
        },
        {
            "ID": 12,
            "Location": "Algeria",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.0949,
            "Notes": ""
        },
        {
            "ID": 12,
            "Location": "Algeria",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 30.5504,
            "Notes": ""
        },
        {
            "ID": 12,
            "Location": "Algeria",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.6817,
            "Notes": ""
        },
        {
            "ID": 12,
            "Location": "Algeria",
            "Year": 2019,
            "What": "Population density",
            "Value": 18.0763,
            "Notes": ""
        },
        {
            "ID": 16,
            "Location": "American Samoa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0553,
            "Notes": ""
        },
        {
            "ID": 16,
            "Location": "American Samoa",
            "Year": 2019,
            "What": "Population density",
            "Value": 276.56,
            "Notes": ""
        },
        {
            "ID": 20,
            "Location": "Andorra",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0771,
            "Notes": ""
        },
        {
            "ID": 20,
            "Location": "Andorra",
            "Year": 2019,
            "What": "Population density",
            "Value": 164.1319,
            "Notes": ""
        },
        {
            "ID": 24,
            "Location": "Angola",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 31.8253,
            "Notes": ""
        },
        {
            "ID": 24,
            "Location": "Angola",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 15.7448,
            "Notes": ""
        },
        {
            "ID": 24,
            "Location": "Angola",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 16.0805,
            "Notes": ""
        },
        {
            "ID": 24,
            "Location": "Angola",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.9121,
            "Notes": ""
        },
        {
            "ID": 24,
            "Location": "Angola",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 46.622,
            "Notes": ""
        },
        {
            "ID": 24,
            "Location": "Angola",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.6243,
            "Notes": ""
        },
        {
            "ID": 24,
            "Location": "Angola",
            "Year": 2019,
            "What": "Population density",
            "Value": 25.5276,
            "Notes": ""
        },
        {
            "ID": 660,
            "Location": "Anguilla",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0149,
            "Notes": ""
        },
        {
            "ID": 660,
            "Location": "Anguilla",
            "Year": 2019,
            "What": "Population density",
            "Value": 165.2111,
            "Notes": ""
        },
        {
            "ID": 28,
            "Location": "Antigua and Barbuda",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0971,
            "Notes": ""
        },
        {
            "ID": 28,
            "Location": "Antigua and Barbuda",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0469,
            "Notes": ""
        },
        {
            "ID": 28,
            "Location": "Antigua and Barbuda",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0503,
            "Notes": ""
        },
        {
            "ID": 28,
            "Location": "Antigua and Barbuda",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.2099,
            "Notes": ""
        },
        {
            "ID": 28,
            "Location": "Antigua and Barbuda",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 21.9547,
            "Notes": ""
        },
        {
            "ID": 28,
            "Location": "Antigua and Barbuda",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 13.6164,
            "Notes": ""
        },
        {
            "ID": 28,
            "Location": "Antigua and Barbuda",
            "Year": 2019,
            "What": "Population density",
            "Value": 220.7227,
            "Notes": ""
        },
        {
            "ID": 32,
            "Location": "Argentina",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 44.7807,
            "Notes": ""
        },
        {
            "ID": 32,
            "Location": "Argentina",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 21.8414,
            "Notes": ""
        },
        {
            "ID": 32,
            "Location": "Argentina",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 22.9393,
            "Notes": ""
        },
        {
            "ID": 32,
            "Location": "Argentina",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.2141,
            "Notes": ""
        },
        {
            "ID": 32,
            "Location": "Argentina",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 24.5955,
            "Notes": ""
        },
        {
            "ID": 32,
            "Location": "Argentina",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 15.3941,
            "Notes": ""
        },
        {
            "ID": 32,
            "Location": "Argentina",
            "Year": 2019,
            "What": "Population density",
            "Value": 16.3631,
            "Notes": ""
        },
        {
            "ID": 51,
            "Location": "Armenia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.9577,
            "Notes": ""
        },
        {
            "ID": 51,
            "Location": "Armenia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.3913,
            "Notes": ""
        },
        {
            "ID": 51,
            "Location": "Armenia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.5665,
            "Notes": ""
        },
        {
            "ID": 51,
            "Location": "Armenia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 88.8162,
            "Notes": ""
        },
        {
            "ID": 51,
            "Location": "Armenia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 20.766,
            "Notes": ""
        },
        {
            "ID": 51,
            "Location": "Armenia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 17.9115,
            "Notes": ""
        },
        {
            "ID": 51,
            "Location": "Armenia",
            "Year": 2019,
            "What": "Population density",
            "Value": 103.8894,
            "Notes": ""
        },
        {
            "ID": 533,
            "Location": "Aruba",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1063,
            "Notes": ""
        },
        {
            "ID": 533,
            "Location": "Aruba",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0504,
            "Notes": ""
        },
        {
            "ID": 533,
            "Location": "Aruba",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0559,
            "Notes": ""
        },
        {
            "ID": 533,
            "Location": "Aruba",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 90.2912,
            "Notes": ""
        },
        {
            "ID": 533,
            "Location": "Aruba",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.6204,
            "Notes": ""
        },
        {
            "ID": 533,
            "Location": "Aruba",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 21.0612,
            "Notes": ""
        },
        {
            "ID": 533,
            "Location": "Aruba",
            "Year": 2019,
            "What": "Population density",
            "Value": 590.6333,
            "Notes": ""
        },
        {
            "ID": 36,
            "Location": "Australia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 25.2032,
            "Notes": "Including Christmas Island, Cocos (Keeling) Islands and Norfolk Island."
        },
        {
            "ID": 36,
            "Location": "Australia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 12.5513,
            "Notes": "Including Christmas Island, Cocos (Keeling) Islands and Norfolk Island."
        },
        {
            "ID": 36,
            "Location": "Australia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 12.6519,
            "Notes": "Including Christmas Island, Cocos (Keeling) Islands and Norfolk Island."
        },
        {
            "ID": 36,
            "Location": "Australia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.205,
            "Notes": "Including Christmas Island, Cocos (Keeling) Islands and Norfolk Island."
        },
        {
            "ID": 36,
            "Location": "Australia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 19.2754,
            "Notes": "Including Christmas Island, Cocos (Keeling) Islands and Norfolk Island."
        },
        {
            "ID": 36,
            "Location": "Australia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 21.4395,
            "Notes": "Including Christmas Island, Cocos (Keeling) Islands and Norfolk Island."
        },
        {
            "ID": 36,
            "Location": "Australia",
            "Year": 2019,
            "What": "Population density",
            "Value": 3.2807,
            "Notes": "Including Christmas Island, Cocos (Keeling) Islands and Norfolk Island."
        },
        {
            "ID": 40,
            "Location": "Austria",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 8.9551,
            "Notes": ""
        },
        {
            "ID": 40,
            "Location": "Austria",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.4094,
            "Notes": ""
        },
        {
            "ID": 40,
            "Location": "Austria",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.5457,
            "Notes": ""
        },
        {
            "ID": 40,
            "Location": "Austria",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.0005,
            "Notes": ""
        },
        {
            "ID": 40,
            "Location": "Austria",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.3619,
            "Notes": ""
        },
        {
            "ID": 40,
            "Location": "Austria",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.3214,
            "Notes": ""
        },
        {
            "ID": 40,
            "Location": "Austria",
            "Year": 2019,
            "What": "Population density",
            "Value": 108.6666,
            "Notes": ""
        },
        {
            "ID": 31,
            "Location": "Azerbaijan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 10.0477,
            "Notes": "Including Nagorno-Karabakh."
        },
        {
            "ID": 31,
            "Location": "Azerbaijan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.0158,
            "Notes": "Including Nagorno-Karabakh."
        },
        {
            "ID": 31,
            "Location": "Azerbaijan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.0319,
            "Notes": "Including Nagorno-Karabakh."
        },
        {
            "ID": 31,
            "Location": "Azerbaijan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.681,
            "Notes": "Including Nagorno-Karabakh."
        },
        {
            "ID": 31,
            "Location": "Azerbaijan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.4419,
            "Notes": "Including Nagorno-Karabakh."
        },
        {
            "ID": 31,
            "Location": "Azerbaijan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 11.0734,
            "Notes": "Including Nagorno-Karabakh."
        },
        {
            "ID": 31,
            "Location": "Azerbaijan",
            "Year": 2019,
            "What": "Population density",
            "Value": 121.5577,
            "Notes": "Including Nagorno-Karabakh."
        },
        {
            "ID": 44,
            "Location": "Bahamas",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.3895,
            "Notes": ""
        },
        {
            "ID": 44,
            "Location": "Bahamas",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1892,
            "Notes": ""
        },
        {
            "ID": 44,
            "Location": "Bahamas",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2003,
            "Notes": ""
        },
        {
            "ID": 44,
            "Location": "Bahamas",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.494,
            "Notes": ""
        },
        {
            "ID": 44,
            "Location": "Bahamas",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.0757,
            "Notes": ""
        },
        {
            "ID": 44,
            "Location": "Bahamas",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 11.7305,
            "Notes": ""
        },
        {
            "ID": 44,
            "Location": "Bahamas",
            "Year": 2019,
            "What": "Population density",
            "Value": 38.9093,
            "Notes": ""
        },
        {
            "ID": 48,
            "Location": "Bahrain",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.6412,
            "Notes": ""
        },
        {
            "ID": 48,
            "Location": "Bahrain",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.0548,
            "Notes": ""
        },
        {
            "ID": 48,
            "Location": "Bahrain",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.5864,
            "Notes": ""
        },
        {
            "ID": 48,
            "Location": "Bahrain",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 179.8868,
            "Notes": ""
        },
        {
            "ID": 48,
            "Location": "Bahrain",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.7187,
            "Notes": ""
        },
        {
            "ID": 48,
            "Location": "Bahrain",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.1096,
            "Notes": ""
        },
        {
            "ID": 48,
            "Location": "Bahrain",
            "Year": 2019,
            "What": "Population density",
            "Value": 2159.4368,
            "Notes": ""
        },
        {
            "ID": 50,
            "Location": "Bangladesh",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 163.0462,
            "Notes": ""
        },
        {
            "ID": 50,
            "Location": "Bangladesh",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 82.4738,
            "Notes": ""
        },
        {
            "ID": 50,
            "Location": "Bangladesh",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 80.5724,
            "Notes": ""
        },
        {
            "ID": 50,
            "Location": "Bangladesh",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.3599,
            "Notes": ""
        },
        {
            "ID": 50,
            "Location": "Bangladesh",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.2144,
            "Notes": ""
        },
        {
            "ID": 50,
            "Location": "Bangladesh",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.7418,
            "Notes": ""
        },
        {
            "ID": 50,
            "Location": "Bangladesh",
            "Year": 2019,
            "What": "Population density",
            "Value": 1252.5633,
            "Notes": ""
        },
        {
            "ID": 52,
            "Location": "Barbados",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.287,
            "Notes": ""
        },
        {
            "ID": 52,
            "Location": "Barbados",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1388,
            "Notes": ""
        },
        {
            "ID": 52,
            "Location": "Barbados",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1482,
            "Notes": ""
        },
        {
            "ID": 52,
            "Location": "Barbados",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.6609,
            "Notes": ""
        },
        {
            "ID": 52,
            "Location": "Barbados",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.0504,
            "Notes": ""
        },
        {
            "ID": 52,
            "Location": "Barbados",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.5412,
            "Notes": ""
        },
        {
            "ID": 52,
            "Location": "Barbados",
            "Year": 2019,
            "What": "Population density",
            "Value": 667.5,
            "Notes": ""
        },
        {
            "ID": 112,
            "Location": "Belarus",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 9.4524,
            "Notes": ""
        },
        {
            "ID": 112,
            "Location": "Belarus",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.3999,
            "Notes": ""
        },
        {
            "ID": 112,
            "Location": "Belarus",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.0525,
            "Notes": ""
        },
        {
            "ID": 112,
            "Location": "Belarus",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 87.0839,
            "Notes": ""
        },
        {
            "ID": 112,
            "Location": "Belarus",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.0363,
            "Notes": ""
        },
        {
            "ID": 112,
            "Location": "Belarus",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.185,
            "Notes": ""
        },
        {
            "ID": 112,
            "Location": "Belarus",
            "Year": 2019,
            "What": "Population density",
            "Value": 46.5843,
            "Notes": ""
        },
        {
            "ID": 56,
            "Location": "Belgium",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 11.5393,
            "Notes": ""
        },
        {
            "ID": 56,
            "Location": "Belgium",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.7115,
            "Notes": ""
        },
        {
            "ID": 56,
            "Location": "Belgium",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.8278,
            "Notes": ""
        },
        {
            "ID": 56,
            "Location": "Belgium",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.0032,
            "Notes": ""
        },
        {
            "ID": 56,
            "Location": "Belgium",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.0582,
            "Notes": ""
        },
        {
            "ID": 56,
            "Location": "Belgium",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.2634,
            "Notes": ""
        },
        {
            "ID": 56,
            "Location": "Belgium",
            "Year": 2019,
            "What": "Population density",
            "Value": 381.0875,
            "Notes": ""
        },
        {
            "ID": 84,
            "Location": "Belize",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.3904,
            "Notes": ""
        },
        {
            "ID": 84,
            "Location": "Belize",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1943,
            "Notes": ""
        },
        {
            "ID": 84,
            "Location": "Belize",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1961,
            "Notes": ""
        },
        {
            "ID": 84,
            "Location": "Belize",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.0876,
            "Notes": ""
        },
        {
            "ID": 84,
            "Location": "Belize",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.7044,
            "Notes": ""
        },
        {
            "ID": 84,
            "Location": "Belize",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.3987,
            "Notes": ""
        },
        {
            "ID": 84,
            "Location": "Belize",
            "Year": 2019,
            "What": "Population density",
            "Value": 17.1132,
            "Notes": ""
        },
        {
            "ID": 204,
            "Location": "Benin",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 11.8012,
            "Notes": ""
        },
        {
            "ID": 204,
            "Location": "Benin",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.8913,
            "Notes": ""
        },
        {
            "ID": 204,
            "Location": "Benin",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.9099,
            "Notes": ""
        },
        {
            "ID": 204,
            "Location": "Benin",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.6846,
            "Notes": ""
        },
        {
            "ID": 204,
            "Location": "Benin",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.2055,
            "Notes": ""
        },
        {
            "ID": 204,
            "Location": "Benin",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.0438,
            "Notes": ""
        },
        {
            "ID": 204,
            "Location": "Benin",
            "Year": 2019,
            "What": "Population density",
            "Value": 104.6572,
            "Notes": ""
        },
        {
            "ID": 60,
            "Location": "Bermuda",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0625,
            "Notes": ""
        },
        {
            "ID": 60,
            "Location": "Bermuda",
            "Year": 2019,
            "What": "Population density",
            "Value": 1250.12,
            "Notes": ""
        },
        {
            "ID": 64,
            "Location": "Bhutan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.7631,
            "Notes": ""
        },
        {
            "ID": 64,
            "Location": "Bhutan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.405,
            "Notes": ""
        },
        {
            "ID": 64,
            "Location": "Bhutan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.3581,
            "Notes": ""
        },
        {
            "ID": 64,
            "Location": "Bhutan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 113.1178,
            "Notes": ""
        },
        {
            "ID": 64,
            "Location": "Bhutan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 25.3402,
            "Notes": ""
        },
        {
            "ID": 64,
            "Location": "Bhutan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.7877,
            "Notes": ""
        },
        {
            "ID": 64,
            "Location": "Bhutan",
            "Year": 2019,
            "What": "Population density",
            "Value": 20.0197,
            "Notes": ""
        },
        {
            "ID": 68,
            "Location": "Bolivia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 11.5131,
            "Notes": ""
        },
        {
            "ID": 68,
            "Location": "Bolivia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.7796,
            "Notes": ""
        },
        {
            "ID": 68,
            "Location": "Bolivia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.7335,
            "Notes": ""
        },
        {
            "ID": 68,
            "Location": "Bolivia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.8044,
            "Notes": ""
        },
        {
            "ID": 68,
            "Location": "Bolivia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 30.6253,
            "Notes": ""
        },
        {
            "ID": 68,
            "Location": "Bolivia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.1862,
            "Notes": ""
        },
        {
            "ID": 68,
            "Location": "Bolivia",
            "Year": 2019,
            "What": "Population density",
            "Value": 10.6278,
            "Notes": ""
        },
        {
            "ID": 535,
            "Location": "Bonaire, St. Eustatius & Saba",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.026,
            "Notes": ""
        },
        {
            "ID": 535,
            "Location": "Bonaire, St. Eustatius & Saba",
            "Year": 2019,
            "What": "Population density",
            "Value": 79.2043,
            "Notes": ""
        },
        {
            "ID": 70,
            "Location": "Bosnia and Herzegovina",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 3.301,
            "Notes": ""
        },
        {
            "ID": 70,
            "Location": "Bosnia and Herzegovina",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.6168,
            "Notes": ""
        },
        {
            "ID": 70,
            "Location": "Bosnia and Herzegovina",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.6842,
            "Notes": ""
        },
        {
            "ID": 70,
            "Location": "Bosnia and Herzegovina",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.9981,
            "Notes": ""
        },
        {
            "ID": 70,
            "Location": "Bosnia and Herzegovina",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.6938,
            "Notes": ""
        },
        {
            "ID": 70,
            "Location": "Bosnia and Herzegovina",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 24.4739,
            "Notes": ""
        },
        {
            "ID": 70,
            "Location": "Bosnia and Herzegovina",
            "Year": 2019,
            "What": "Population density",
            "Value": 64.7255,
            "Notes": ""
        },
        {
            "ID": 72,
            "Location": "Botswana",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.3037,
            "Notes": ""
        },
        {
            "ID": 72,
            "Location": "Botswana",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.1141,
            "Notes": ""
        },
        {
            "ID": 72,
            "Location": "Botswana",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.1896,
            "Notes": ""
        },
        {
            "ID": 72,
            "Location": "Botswana",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.6557,
            "Notes": ""
        },
        {
            "ID": 72,
            "Location": "Botswana",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 33.765,
            "Notes": ""
        },
        {
            "ID": 72,
            "Location": "Botswana",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.8703,
            "Notes": ""
        },
        {
            "ID": 72,
            "Location": "Botswana",
            "Year": 2019,
            "What": "Population density",
            "Value": 4.0649,
            "Notes": ""
        },
        {
            "ID": 76,
            "Location": "Brazil",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 211.0495,
            "Notes": ""
        },
        {
            "ID": 76,
            "Location": "Brazil",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 103.7332,
            "Notes": ""
        },
        {
            "ID": 76,
            "Location": "Brazil",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 107.3164,
            "Notes": ""
        },
        {
            "ID": 76,
            "Location": "Brazil",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.6611,
            "Notes": ""
        },
        {
            "ID": 76,
            "Location": "Brazil",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 21.0092,
            "Notes": ""
        },
        {
            "ID": 76,
            "Location": "Brazil",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 13.5897,
            "Notes": ""
        },
        {
            "ID": 76,
            "Location": "Brazil",
            "Year": 2019,
            "What": "Population density",
            "Value": 25.2508,
            "Notes": ""
        },
        {
            "ID": 92,
            "Location": "British Virgin Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.03,
            "Notes": ""
        },
        {
            "ID": 92,
            "Location": "British Virgin Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 200.2,
            "Notes": ""
        },
        {
            "ID": 96,
            "Location": "Brunei Darussalam",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.4333,
            "Notes": ""
        },
        {
            "ID": 96,
            "Location": "Brunei Darussalam",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.225,
            "Notes": ""
        },
        {
            "ID": 96,
            "Location": "Brunei Darussalam",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2083,
            "Notes": ""
        },
        {
            "ID": 96,
            "Location": "Brunei Darussalam",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 108.0014,
            "Notes": ""
        },
        {
            "ID": 96,
            "Location": "Brunei Darussalam",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.6165,
            "Notes": ""
        },
        {
            "ID": 96,
            "Location": "Brunei Darussalam",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.9655,
            "Notes": ""
        },
        {
            "ID": 96,
            "Location": "Brunei Darussalam",
            "Year": 2019,
            "What": "Population density",
            "Value": 82.2173,
            "Notes": ""
        },
        {
            "ID": 100,
            "Location": "Bulgaria",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 7.0001,
            "Notes": ""
        },
        {
            "ID": 100,
            "Location": "Bulgaria",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.4001,
            "Notes": ""
        },
        {
            "ID": 100,
            "Location": "Bulgaria",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.6001,
            "Notes": ""
        },
        {
            "ID": 100,
            "Location": "Bulgaria",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.4443,
            "Notes": ""
        },
        {
            "ID": 100,
            "Location": "Bulgaria",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.6854,
            "Notes": ""
        },
        {
            "ID": 100,
            "Location": "Bulgaria",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 28.0121,
            "Notes": ""
        },
        {
            "ID": 100,
            "Location": "Bulgaria",
            "Year": 2019,
            "What": "Population density",
            "Value": 64.4816,
            "Notes": ""
        },
        {
            "ID": 854,
            "Location": "Burkina Faso",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 20.3214,
            "Notes": ""
        },
        {
            "ID": 854,
            "Location": "Burkina Faso",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 10.1478,
            "Notes": ""
        },
        {
            "ID": 854,
            "Location": "Burkina Faso",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 10.1736,
            "Notes": ""
        },
        {
            "ID": 854,
            "Location": "Burkina Faso",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.7461,
            "Notes": ""
        },
        {
            "ID": 854,
            "Location": "Burkina Faso",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 44.6778,
            "Notes": ""
        },
        {
            "ID": 854,
            "Location": "Burkina Faso",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.9008,
            "Notes": ""
        },
        {
            "ID": 854,
            "Location": "Burkina Faso",
            "Year": 2019,
            "What": "Population density",
            "Value": 74.274,
            "Notes": ""
        },
        {
            "ID": 108,
            "Location": "Burundi",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 11.5306,
            "Notes": ""
        },
        {
            "ID": 108,
            "Location": "Burundi",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.719,
            "Notes": ""
        },
        {
            "ID": 108,
            "Location": "Burundi",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.8116,
            "Notes": ""
        },
        {
            "ID": 108,
            "Location": "Burundi",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.4066,
            "Notes": ""
        },
        {
            "ID": 108,
            "Location": "Burundi",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 45.4006,
            "Notes": ""
        },
        {
            "ID": 108,
            "Location": "Burundi",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.0033,
            "Notes": ""
        },
        {
            "ID": 108,
            "Location": "Burundi",
            "Year": 2019,
            "What": "Population density",
            "Value": 449.0101,
            "Notes": ""
        },
        {
            "ID": 132,
            "Location": "Cabo Verde",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.5499,
            "Notes": ""
        },
        {
            "ID": 132,
            "Location": "Cabo Verde",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.276,
            "Notes": ""
        },
        {
            "ID": 132,
            "Location": "Cabo Verde",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2739,
            "Notes": ""
        },
        {
            "ID": 132,
            "Location": "Cabo Verde",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.7798,
            "Notes": ""
        },
        {
            "ID": 132,
            "Location": "Cabo Verde",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 28.4064,
            "Notes": ""
        },
        {
            "ID": 132,
            "Location": "Cabo Verde",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.3374,
            "Notes": ""
        },
        {
            "ID": 132,
            "Location": "Cabo Verde",
            "Year": 2019,
            "What": "Population density",
            "Value": 136.4603,
            "Notes": ""
        },
        {
            "ID": 116,
            "Location": "Cambodia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 16.4865,
            "Notes": ""
        },
        {
            "ID": 116,
            "Location": "Cambodia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 8.0474,
            "Notes": ""
        },
        {
            "ID": 116,
            "Location": "Cambodia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 8.4392,
            "Notes": ""
        },
        {
            "ID": 116,
            "Location": "Cambodia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.3572,
            "Notes": ""
        },
        {
            "ID": 116,
            "Location": "Cambodia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 31.0992,
            "Notes": ""
        },
        {
            "ID": 116,
            "Location": "Cambodia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.3537,
            "Notes": ""
        },
        {
            "ID": 116,
            "Location": "Cambodia",
            "Year": 2019,
            "What": "Population density",
            "Value": 93.3976,
            "Notes": ""
        },
        {
            "ID": 120,
            "Location": "Cameroon",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 25.8764,
            "Notes": ""
        },
        {
            "ID": 120,
            "Location": "Cameroon",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 12.9399,
            "Notes": ""
        },
        {
            "ID": 120,
            "Location": "Cameroon",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 12.9365,
            "Notes": ""
        },
        {
            "ID": 120,
            "Location": "Cameroon",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.0268,
            "Notes": ""
        },
        {
            "ID": 120,
            "Location": "Cameroon",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.3621,
            "Notes": ""
        },
        {
            "ID": 120,
            "Location": "Cameroon",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.2955,
            "Notes": ""
        },
        {
            "ID": 120,
            "Location": "Cameroon",
            "Year": 2019,
            "What": "Population density",
            "Value": 54.7405,
            "Notes": ""
        },
        {
            "ID": 124,
            "Location": "Canada",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 37.411,
            "Notes": ""
        },
        {
            "ID": 124,
            "Location": "Canada",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 18.5635,
            "Notes": ""
        },
        {
            "ID": 124,
            "Location": "Canada",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 18.8475,
            "Notes": ""
        },
        {
            "ID": 124,
            "Location": "Canada",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.4934,
            "Notes": ""
        },
        {
            "ID": 124,
            "Location": "Canada",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.8459,
            "Notes": ""
        },
        {
            "ID": 124,
            "Location": "Canada",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 24.3344,
            "Notes": ""
        },
        {
            "ID": 124,
            "Location": "Canada",
            "Year": 2019,
            "What": "Population density",
            "Value": 4.114,
            "Notes": ""
        },
        {
            "ID": 136,
            "Location": "Cayman Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0649,
            "Notes": ""
        },
        {
            "ID": 136,
            "Location": "Cayman Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 270.6167,
            "Notes": ""
        },
        {
            "ID": 140,
            "Location": "Central African Republic",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.7452,
            "Notes": ""
        },
        {
            "ID": 140,
            "Location": "Central African Republic",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.352,
            "Notes": ""
        },
        {
            "ID": 140,
            "Location": "Central African Republic",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.3932,
            "Notes": ""
        },
        {
            "ID": 140,
            "Location": "Central African Republic",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.2771,
            "Notes": ""
        },
        {
            "ID": 140,
            "Location": "Central African Republic",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 43.92,
            "Notes": ""
        },
        {
            "ID": 140,
            "Location": "Central African Republic",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.4808,
            "Notes": ""
        },
        {
            "ID": 140,
            "Location": "Central African Republic",
            "Year": 2019,
            "What": "Population density",
            "Value": 7.6169,
            "Notes": ""
        },
        {
            "ID": 148,
            "Location": "Chad",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 15.9469,
            "Notes": ""
        },
        {
            "ID": 148,
            "Location": "Chad",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 7.9605,
            "Notes": ""
        },
        {
            "ID": 148,
            "Location": "Chad",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 7.9864,
            "Notes": ""
        },
        {
            "ID": 148,
            "Location": "Chad",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.6765,
            "Notes": ""
        },
        {
            "ID": 148,
            "Location": "Chad",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 46.8209,
            "Notes": ""
        },
        {
            "ID": 148,
            "Location": "Chad",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.9384,
            "Notes": ""
        },
        {
            "ID": 148,
            "Location": "Chad",
            "Year": 2019,
            "What": "Population density",
            "Value": 12.6643,
            "Notes": ""
        },
        {
            "ID": 830,
            "Location": "Channel Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1723,
            "Notes": "Refers to Guernsey and Jersey."
        },
        {
            "ID": 830,
            "Location": "Channel Islands",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0853,
            "Notes": "Refers to Guernsey and Jersey."
        },
        {
            "ID": 830,
            "Location": "Channel Islands",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.087,
            "Notes": "Refers to Guernsey and Jersey."
        },
        {
            "ID": 830,
            "Location": "Channel Islands",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.9818,
            "Notes": "Refers to Guernsey and Jersey."
        },
        {
            "ID": 830,
            "Location": "Channel Islands",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.0674,
            "Notes": "Refers to Guernsey and Jersey."
        },
        {
            "ID": 830,
            "Location": "Channel Islands",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 23.6272,
            "Notes": "Refers to Guernsey and Jersey."
        },
        {
            "ID": 830,
            "Location": "Channel Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 906.6263,
            "Notes": "Refers to Guernsey and Jersey."
        },
        {
            "ID": 152,
            "Location": "Chile",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 18.952,
            "Notes": ""
        },
        {
            "ID": 152,
            "Location": "Chile",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 9.3418,
            "Notes": ""
        },
        {
            "ID": 152,
            "Location": "Chile",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 9.6103,
            "Notes": ""
        },
        {
            "ID": 152,
            "Location": "Chile",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.2062,
            "Notes": ""
        },
        {
            "ID": 152,
            "Location": "Chile",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 19.4943,
            "Notes": ""
        },
        {
            "ID": 152,
            "Location": "Chile",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 16.9431,
            "Notes": ""
        },
        {
            "ID": 152,
            "Location": "Chile",
            "Year": 2019,
            "What": "Population density",
            "Value": 25.4892,
            "Notes": ""
        },
        {
            "ID": 156,
            "Location": "China",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1433.7837,
            "Notes": "For statistical purposes, the data for China do not include those for the Hong Kong Special Administrative Region (Hong Kong SAR), Macao Special Administrative Region (Macao SAR) and Taiwan Province of China."
        },
        {
            "ID": 156,
            "Location": "China",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 735.6243,
            "Notes": "For statistical purposes, the data for China do not include those for the Hong Kong Special Administrative Region (Hong Kong SAR), Macao Special Administrative Region (Macao SAR) and Taiwan Province of China."
        },
        {
            "ID": 156,
            "Location": "China",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 698.1594,
            "Notes": "For statistical purposes, the data for China do not include those for the Hong Kong Special Administrative Region (Hong Kong SAR), Macao Special Administrative Region (Macao SAR) and Taiwan Province of China."
        },
        {
            "ID": 156,
            "Location": "China",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 105.3662,
            "Notes": "For statistical purposes, the data for China do not include those for the Hong Kong Special Administrative Region (Hong Kong SAR), Macao Special Administrative Region (Macao SAR) and Taiwan Province of China."
        },
        {
            "ID": 156,
            "Location": "China",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.8045,
            "Notes": "For statistical purposes, the data for China do not include those for the Hong Kong Special Administrative Region (Hong Kong SAR), Macao Special Administrative Region (Macao SAR) and Taiwan Province of China."
        },
        {
            "ID": 156,
            "Location": "China",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 16.8409,
            "Notes": "For statistical purposes, the data for China do not include those for the Hong Kong Special Administrative Region (Hong Kong SAR), Macao Special Administrative Region (Macao SAR) and Taiwan Province of China."
        },
        {
            "ID": 156,
            "Location": "China",
            "Year": 2019,
            "What": "Population density",
            "Value": 152.7217,
            "Notes": "For statistical purposes, the data for China do not include those for the Hong Kong Special Administrative Region (Hong Kong SAR), Macao Special Administrative Region (Macao SAR) and Taiwan Province of China."
        },
        {
            "ID": 344,
            "Location": "China, Hong Kong SAR",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 7.4362,
            "Notes": ""
        },
        {
            "ID": 344,
            "Location": "China, Hong Kong SAR",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.4185,
            "Notes": ""
        },
        {
            "ID": 344,
            "Location": "China, Hong Kong SAR",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.0177,
            "Notes": ""
        },
        {
            "ID": 344,
            "Location": "China, Hong Kong SAR",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 85.0863,
            "Notes": ""
        },
        {
            "ID": 344,
            "Location": "China, Hong Kong SAR",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 12.3267,
            "Notes": ""
        },
        {
            "ID": 344,
            "Location": "China, Hong Kong SAR",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.1708,
            "Notes": ""
        },
        {
            "ID": 344,
            "Location": "China, Hong Kong SAR",
            "Year": 2019,
            "What": "Population density",
            "Value": 7082.0514,
            "Notes": ""
        },
        {
            "ID": 446,
            "Location": "China, Macao SAR",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.6404,
            "Notes": ""
        },
        {
            "ID": 446,
            "Location": "China, Macao SAR",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.3077,
            "Notes": ""
        },
        {
            "ID": 446,
            "Location": "China, Macao SAR",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.3327,
            "Notes": ""
        },
        {
            "ID": 446,
            "Location": "China, Macao SAR",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 92.4764,
            "Notes": ""
        },
        {
            "ID": 446,
            "Location": "China, Macao SAR",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.0195,
            "Notes": ""
        },
        {
            "ID": 446,
            "Location": "China, Macao SAR",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 17.9191,
            "Notes": ""
        },
        {
            "ID": 446,
            "Location": "China, Macao SAR",
            "Year": 2019,
            "What": "Population density",
            "Value": 21419.5652,
            "Notes": ""
        },
        {
            "ID": 170,
            "Location": "Colombia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 50.3394,
            "Notes": ""
        },
        {
            "ID": 170,
            "Location": "Colombia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 24.7132,
            "Notes": ""
        },
        {
            "ID": 170,
            "Location": "Colombia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 25.6263,
            "Notes": ""
        },
        {
            "ID": 170,
            "Location": "Colombia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.437,
            "Notes": ""
        },
        {
            "ID": 170,
            "Location": "Colombia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.6208,
            "Notes": ""
        },
        {
            "ID": 170,
            "Location": "Colombia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 12.7695,
            "Notes": ""
        },
        {
            "ID": 170,
            "Location": "Colombia",
            "Year": 2019,
            "What": "Population density",
            "Value": 45.3713,
            "Notes": ""
        },
        {
            "ID": 174,
            "Location": "Comoros",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.8509,
            "Notes": ""
        },
        {
            "ID": 174,
            "Location": "Comoros",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.4292,
            "Notes": ""
        },
        {
            "ID": 174,
            "Location": "Comoros",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.4217,
            "Notes": ""
        },
        {
            "ID": 174,
            "Location": "Comoros",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.7855,
            "Notes": ""
        },
        {
            "ID": 174,
            "Location": "Comoros",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 39.2859,
            "Notes": ""
        },
        {
            "ID": 174,
            "Location": "Comoros",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.0362,
            "Notes": ""
        },
        {
            "ID": 174,
            "Location": "Comoros",
            "Year": 2019,
            "What": "Population density",
            "Value": 457.2198,
            "Notes": ""
        },
        {
            "ID": 178,
            "Location": "Congo",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 5.3805,
            "Notes": ""
        },
        {
            "ID": 178,
            "Location": "Congo",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.6874,
            "Notes": ""
        },
        {
            "ID": 178,
            "Location": "Congo",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.6931,
            "Notes": ""
        },
        {
            "ID": 178,
            "Location": "Congo",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.7851,
            "Notes": ""
        },
        {
            "ID": 178,
            "Location": "Congo",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 41.5372,
            "Notes": ""
        },
        {
            "ID": 178,
            "Location": "Congo",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.4386,
            "Notes": ""
        },
        {
            "ID": 178,
            "Location": "Congo",
            "Year": 2019,
            "What": "Population density",
            "Value": 15.7555,
            "Notes": ""
        },
        {
            "ID": 184,
            "Location": "Cook Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0175,
            "Notes": ""
        },
        {
            "ID": 184,
            "Location": "Cook Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 73.1167,
            "Notes": ""
        },
        {
            "ID": 188,
            "Location": "Costa Rica",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 5.0476,
            "Notes": ""
        },
        {
            "ID": 188,
            "Location": "Costa Rica",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.5225,
            "Notes": ""
        },
        {
            "ID": 188,
            "Location": "Costa Rica",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.525,
            "Notes": ""
        },
        {
            "ID": 188,
            "Location": "Costa Rica",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.9017,
            "Notes": ""
        },
        {
            "ID": 188,
            "Location": "Costa Rica",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 21.0786,
            "Notes": ""
        },
        {
            "ID": 188,
            "Location": "Costa Rica",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 14.4913,
            "Notes": ""
        },
        {
            "ID": 188,
            "Location": "Costa Rica",
            "Year": 2019,
            "What": "Population density",
            "Value": 98.8555,
            "Notes": ""
        },
        {
            "ID": 384,
            "Location": "Cote d'Ivoire",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 25.7165,
            "Notes": ""
        },
        {
            "ID": 384,
            "Location": "Cote d'Ivoire",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 12.9742,
            "Notes": ""
        },
        {
            "ID": 384,
            "Location": "Cote d'Ivoire",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 12.7423,
            "Notes": ""
        },
        {
            "ID": 384,
            "Location": "Cote d'Ivoire",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.8196,
            "Notes": ""
        },
        {
            "ID": 384,
            "Location": "Cote d'Ivoire",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 41.7147,
            "Notes": ""
        },
        {
            "ID": 384,
            "Location": "Cote d'Ivoire",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.6718,
            "Notes": ""
        },
        {
            "ID": 384,
            "Location": "Cote d'Ivoire",
            "Year": 2019,
            "What": "Population density",
            "Value": 80.8696,
            "Notes": ""
        },
        {
            "ID": 191,
            "Location": "Croatia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.1303,
            "Notes": ""
        },
        {
            "ID": 191,
            "Location": "Croatia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.99,
            "Notes": ""
        },
        {
            "ID": 191,
            "Location": "Croatia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.1403,
            "Notes": ""
        },
        {
            "ID": 191,
            "Location": "Croatia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 92.979,
            "Notes": ""
        },
        {
            "ID": 191,
            "Location": "Croatia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.5622,
            "Notes": ""
        },
        {
            "ID": 191,
            "Location": "Croatia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 27.8954,
            "Notes": ""
        },
        {
            "ID": 191,
            "Location": "Croatia",
            "Year": 2019,
            "What": "Population density",
            "Value": 73.8081,
            "Notes": ""
        },
        {
            "ID": 192,
            "Location": "Cuba",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 11.3335,
            "Notes": ""
        },
        {
            "ID": 192,
            "Location": "Cuba",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.6279,
            "Notes": ""
        },
        {
            "ID": 192,
            "Location": "Cuba",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.7056,
            "Notes": ""
        },
        {
            "ID": 192,
            "Location": "Cuba",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.6394,
            "Notes": ""
        },
        {
            "ID": 192,
            "Location": "Cuba",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.0423,
            "Notes": ""
        },
        {
            "ID": 192,
            "Location": "Cuba",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 20.6811,
            "Notes": ""
        },
        {
            "ID": 192,
            "Location": "Cuba",
            "Year": 2019,
            "What": "Population density",
            "Value": 106.4777,
            "Notes": ""
        },
        {
            "ID": 531,
            "Location": "Cura�ao",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1634,
            "Notes": ""
        },
        {
            "ID": 531,
            "Location": "Cura�ao",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0751,
            "Notes": ""
        },
        {
            "ID": 531,
            "Location": "Cura�ao",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0883,
            "Notes": ""
        },
        {
            "ID": 531,
            "Location": "Cura�ao",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 84.9953,
            "Notes": ""
        },
        {
            "ID": 531,
            "Location": "Cura�ao",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.4942,
            "Notes": ""
        },
        {
            "ID": 531,
            "Location": "Cura�ao",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 23.8741,
            "Notes": ""
        },
        {
            "ID": 531,
            "Location": "Cura�ao",
            "Year": 2019,
            "What": "Population density",
            "Value": 368.0721,
            "Notes": ""
        },
        {
            "ID": 196,
            "Location": "Cyprus",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.1986,
            "Notes": "Refers to the whole country."
        },
        {
            "ID": 196,
            "Location": "Cyprus",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.5993,
            "Notes": "Refers to the whole country."
        },
        {
            "ID": 196,
            "Location": "Cyprus",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.5993,
            "Notes": "Refers to the whole country."
        },
        {
            "ID": 196,
            "Location": "Cyprus",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.0033,
            "Notes": "Refers to the whole country."
        },
        {
            "ID": 196,
            "Location": "Cyprus",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.7071,
            "Notes": "Refers to the whole country."
        },
        {
            "ID": 196,
            "Location": "Cyprus",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 19.3335,
            "Notes": "Refers to the whole country."
        },
        {
            "ID": 196,
            "Location": "Cyprus",
            "Year": 2019,
            "What": "Population density",
            "Value": 129.7159,
            "Notes": "Refers to the whole country."
        },
        {
            "ID": 203,
            "Location": "Czechia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 10.6892,
            "Notes": ""
        },
        {
            "ID": 203,
            "Location": "Czechia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.2606,
            "Notes": ""
        },
        {
            "ID": 203,
            "Location": "Czechia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.4286,
            "Notes": ""
        },
        {
            "ID": 203,
            "Location": "Czechia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.9061,
            "Notes": ""
        },
        {
            "ID": 203,
            "Location": "Czechia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.723,
            "Notes": ""
        },
        {
            "ID": 203,
            "Location": "Czechia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.9381,
            "Notes": ""
        },
        {
            "ID": 203,
            "Location": "Czechia",
            "Year": 2019,
            "What": "Population density",
            "Value": 138.3896,
            "Notes": ""
        },
        {
            "ID": 408,
            "Location": "Dem. People's Rep. Korea",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 25.6662,
            "Notes": ""
        },
        {
            "ID": 408,
            "Location": "Dem. People's Rep. Korea",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 12.5528,
            "Notes": ""
        },
        {
            "ID": 408,
            "Location": "Dem. People's Rep. Korea",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 13.1134,
            "Notes": ""
        },
        {
            "ID": 408,
            "Location": "Dem. People's Rep. Korea",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.7247,
            "Notes": ""
        },
        {
            "ID": 408,
            "Location": "Dem. People's Rep. Korea",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 19.9933,
            "Notes": ""
        },
        {
            "ID": 408,
            "Location": "Dem. People's Rep. Korea",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 14.6316,
            "Notes": ""
        },
        {
            "ID": 408,
            "Location": "Dem. People's Rep. Korea",
            "Year": 2019,
            "What": "Population density",
            "Value": 213.1564,
            "Notes": ""
        },
        {
            "ID": 180,
            "Location": "Dem. Rep. of the Congo",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 86.7906,
            "Notes": ""
        },
        {
            "ID": 180,
            "Location": "Dem. Rep. of the Congo",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 43.3191,
            "Notes": ""
        },
        {
            "ID": 180,
            "Location": "Dem. Rep. of the Congo",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 43.4715,
            "Notes": ""
        },
        {
            "ID": 180,
            "Location": "Dem. Rep. of the Congo",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.6495,
            "Notes": ""
        },
        {
            "ID": 180,
            "Location": "Dem. Rep. of the Congo",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 46.0014,
            "Notes": ""
        },
        {
            "ID": 180,
            "Location": "Dem. Rep. of the Congo",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.6655,
            "Notes": ""
        },
        {
            "ID": 180,
            "Location": "Dem. Rep. of the Congo",
            "Year": 2019,
            "What": "Population density",
            "Value": 38.2835,
            "Notes": ""
        },
        {
            "ID": 208,
            "Location": "Denmark",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 5.7719,
            "Notes": ""
        },
        {
            "ID": 208,
            "Location": "Denmark",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.8697,
            "Notes": ""
        },
        {
            "ID": 208,
            "Location": "Denmark",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.9022,
            "Notes": ""
        },
        {
            "ID": 208,
            "Location": "Denmark",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.879,
            "Notes": ""
        },
        {
            "ID": 208,
            "Location": "Denmark",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.401,
            "Notes": ""
        },
        {
            "ID": 208,
            "Location": "Denmark",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.8219,
            "Notes": ""
        },
        {
            "ID": 208,
            "Location": "Denmark",
            "Year": 2019,
            "What": "Population density",
            "Value": 136.0329,
            "Notes": ""
        },
        {
            "ID": 262,
            "Location": "Djibouti",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.9736,
            "Notes": ""
        },
        {
            "ID": 262,
            "Location": "Djibouti",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.5119,
            "Notes": ""
        },
        {
            "ID": 262,
            "Location": "Djibouti",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.4616,
            "Notes": ""
        },
        {
            "ID": 262,
            "Location": "Djibouti",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 110.9047,
            "Notes": ""
        },
        {
            "ID": 262,
            "Location": "Djibouti",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.205,
            "Notes": ""
        },
        {
            "ID": 262,
            "Location": "Djibouti",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.1616,
            "Notes": ""
        },
        {
            "ID": 262,
            "Location": "Djibouti",
            "Year": 2019,
            "What": "Population density",
            "Value": 42,
            "Notes": ""
        },
        {
            "ID": 212,
            "Location": "Dominica",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0718,
            "Notes": ""
        },
        {
            "ID": 212,
            "Location": "Dominica",
            "Year": 2019,
            "What": "Population density",
            "Value": 95.744,
            "Notes": ""
        },
        {
            "ID": 214,
            "Location": "Dominican Republic",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 10.739,
            "Notes": ""
        },
        {
            "ID": 214,
            "Location": "Dominican Republic",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.3662,
            "Notes": ""
        },
        {
            "ID": 214,
            "Location": "Dominican Republic",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.3728,
            "Notes": ""
        },
        {
            "ID": 214,
            "Location": "Dominican Republic",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.8779,
            "Notes": ""
        },
        {
            "ID": 214,
            "Location": "Dominican Republic",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.7087,
            "Notes": ""
        },
        {
            "ID": 214,
            "Location": "Dominican Republic",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.7919,
            "Notes": ""
        },
        {
            "ID": 214,
            "Location": "Dominican Republic",
            "Year": 2019,
            "What": "Population density",
            "Value": 222.2466,
            "Notes": ""
        },
        {
            "ID": 218,
            "Location": "Ecuador",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 17.3737,
            "Notes": ""
        },
        {
            "ID": 218,
            "Location": "Ecuador",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 8.6905,
            "Notes": ""
        },
        {
            "ID": 218,
            "Location": "Ecuador",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 8.6832,
            "Notes": ""
        },
        {
            "ID": 218,
            "Location": "Ecuador",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.0843,
            "Notes": ""
        },
        {
            "ID": 218,
            "Location": "Ecuador",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.707,
            "Notes": ""
        },
        {
            "ID": 218,
            "Location": "Ecuador",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.7376,
            "Notes": ""
        },
        {
            "ID": 218,
            "Location": "Ecuador",
            "Year": 2019,
            "What": "Population density",
            "Value": 69.9535,
            "Notes": ""
        },
        {
            "ID": 818,
            "Location": "Egypt",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 100.3881,
            "Notes": ""
        },
        {
            "ID": 818,
            "Location": "Egypt",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 50.7226,
            "Notes": ""
        },
        {
            "ID": 818,
            "Location": "Egypt",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 49.6655,
            "Notes": ""
        },
        {
            "ID": 818,
            "Location": "Egypt",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.1285,
            "Notes": ""
        },
        {
            "ID": 818,
            "Location": "Egypt",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 33.8348,
            "Notes": ""
        },
        {
            "ID": 818,
            "Location": "Egypt",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.1171,
            "Notes": ""
        },
        {
            "ID": 818,
            "Location": "Egypt",
            "Year": 2019,
            "What": "Population density",
            "Value": 100.8469,
            "Notes": ""
        },
        {
            "ID": 222,
            "Location": "El Salvador",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 6.4536,
            "Notes": ""
        },
        {
            "ID": 222,
            "Location": "El Salvador",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.0234,
            "Notes": ""
        },
        {
            "ID": 222,
            "Location": "El Salvador",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.4302,
            "Notes": ""
        },
        {
            "ID": 222,
            "Location": "El Salvador",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 88.1393,
            "Notes": ""
        },
        {
            "ID": 222,
            "Location": "El Salvador",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 26.8584,
            "Notes": ""
        },
        {
            "ID": 222,
            "Location": "El Salvador",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 11.8282,
            "Notes": ""
        },
        {
            "ID": 222,
            "Location": "El Salvador",
            "Year": 2019,
            "What": "Population density",
            "Value": 311.4649,
            "Notes": ""
        },
        {
            "ID": 226,
            "Location": "Equatorial Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.356,
            "Notes": ""
        },
        {
            "ID": 226,
            "Location": "Equatorial Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.7538,
            "Notes": ""
        },
        {
            "ID": 226,
            "Location": "Equatorial Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.6022,
            "Notes": ""
        },
        {
            "ID": 226,
            "Location": "Equatorial Guinea",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 125.1867,
            "Notes": ""
        },
        {
            "ID": 226,
            "Location": "Equatorial Guinea",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 36.9568,
            "Notes": ""
        },
        {
            "ID": 226,
            "Location": "Equatorial Guinea",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.8681,
            "Notes": ""
        },
        {
            "ID": 226,
            "Location": "Equatorial Guinea",
            "Year": 2019,
            "What": "Population density",
            "Value": 48.3417,
            "Notes": ""
        },
        {
            "ID": 232,
            "Location": "Eritrea",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 3.4971,
            "Notes": ""
        },
        {
            "ID": 232,
            "Location": "Eritrea",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.7527,
            "Notes": ""
        },
        {
            "ID": 232,
            "Location": "Eritrea",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.7444,
            "Notes": ""
        },
        {
            "ID": 232,
            "Location": "Eritrea",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.4761,
            "Notes": ""
        },
        {
            "ID": 232,
            "Location": "Eritrea",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 41.5849,
            "Notes": ""
        },
        {
            "ID": 232,
            "Location": "Eritrea",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.4373,
            "Notes": ""
        },
        {
            "ID": 232,
            "Location": "Eritrea",
            "Year": 2019,
            "What": "Population density",
            "Value": 34.6249,
            "Notes": ""
        },
        {
            "ID": 233,
            "Location": "Estonia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.3256,
            "Notes": ""
        },
        {
            "ID": 233,
            "Location": "Estonia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.6266,
            "Notes": ""
        },
        {
            "ID": 233,
            "Location": "Estonia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.699,
            "Notes": ""
        },
        {
            "ID": 233,
            "Location": "Estonia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 89.6431,
            "Notes": ""
        },
        {
            "ID": 233,
            "Location": "Estonia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.4633,
            "Notes": ""
        },
        {
            "ID": 233,
            "Location": "Estonia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 26.5131,
            "Notes": ""
        },
        {
            "ID": 233,
            "Location": "Estonia",
            "Year": 2019,
            "What": "Population density",
            "Value": 31.2727,
            "Notes": ""
        },
        {
            "ID": 748,
            "Location": "Eswatini",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.1481,
            "Notes": ""
        },
        {
            "ID": 748,
            "Location": "Eswatini",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.5628,
            "Notes": ""
        },
        {
            "ID": 748,
            "Location": "Eswatini",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.5853,
            "Notes": ""
        },
        {
            "ID": 748,
            "Location": "Eswatini",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.147,
            "Notes": ""
        },
        {
            "ID": 748,
            "Location": "Eswatini",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 37.8314,
            "Notes": ""
        },
        {
            "ID": 748,
            "Location": "Eswatini",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.7235,
            "Notes": ""
        },
        {
            "ID": 748,
            "Location": "Eswatini",
            "Year": 2019,
            "What": "Population density",
            "Value": 66.7517,
            "Notes": ""
        },
        {
            "ID": 231,
            "Location": "Ethiopia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 112.0787,
            "Notes": ""
        },
        {
            "ID": 231,
            "Location": "Ethiopia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 56.069,
            "Notes": ""
        },
        {
            "ID": 231,
            "Location": "Ethiopia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 56.0097,
            "Notes": ""
        },
        {
            "ID": 231,
            "Location": "Ethiopia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.1059,
            "Notes": ""
        },
        {
            "ID": 231,
            "Location": "Ethiopia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 40.3364,
            "Notes": ""
        },
        {
            "ID": 231,
            "Location": "Ethiopia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.2979,
            "Notes": ""
        },
        {
            "ID": 231,
            "Location": "Ethiopia",
            "Year": 2019,
            "What": "Population density",
            "Value": 112.0787,
            "Notes": ""
        },
        {
            "ID": 238,
            "Location": "Falkland Islands (Malvinas)",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0034,
            "Notes": "A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas)."
        },
        {
            "ID": 238,
            "Location": "Falkland Islands (Malvinas)",
            "Year": 2019,
            "What": "Population density",
            "Value": 0.2775,
            "Notes": "A dispute exists between the Governments of Argentina and the United Kingdom of Great Britain and Northern Ireland concerning sovereignty over the Falkland Islands (Malvinas)."
        },
        {
            "ID": 234,
            "Location": "Faroe Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0487,
            "Notes": ""
        },
        {
            "ID": 234,
            "Location": "Faroe Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 34.8696,
            "Notes": ""
        },
        {
            "ID": 242,
            "Location": "Fiji",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.89,
            "Notes": ""
        },
        {
            "ID": 242,
            "Location": "Fiji",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.451,
            "Notes": ""
        },
        {
            "ID": 242,
            "Location": "Fiji",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.439,
            "Notes": ""
        },
        {
            "ID": 242,
            "Location": "Fiji",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.7251,
            "Notes": ""
        },
        {
            "ID": 242,
            "Location": "Fiji",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.2937,
            "Notes": ""
        },
        {
            "ID": 242,
            "Location": "Fiji",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.3197,
            "Notes": ""
        },
        {
            "ID": 242,
            "Location": "Fiji",
            "Year": 2019,
            "What": "Population density",
            "Value": 48.7112,
            "Notes": ""
        },
        {
            "ID": 246,
            "Location": "Finland",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 5.5322,
            "Notes": "Including �land Islands."
        },
        {
            "ID": 246,
            "Location": "Finland",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.7272,
            "Notes": "Including �land Islands."
        },
        {
            "ID": 246,
            "Location": "Finland",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.8049,
            "Notes": "Including �land Islands."
        },
        {
            "ID": 246,
            "Location": "Finland",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.2285,
            "Notes": "Including �land Islands."
        },
        {
            "ID": 246,
            "Location": "Finland",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.0163,
            "Notes": "Including �land Islands."
        },
        {
            "ID": 246,
            "Location": "Finland",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 28.6043,
            "Notes": "Including �land Islands."
        },
        {
            "ID": 246,
            "Location": "Finland",
            "Year": 2019,
            "What": "Population density",
            "Value": 18.2045,
            "Notes": "Including �land Islands."
        },
        {
            "ID": 250,
            "Location": "France",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 65.1297,
            "Notes": ""
        },
        {
            "ID": 250,
            "Location": "France",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 31.5245,
            "Notes": ""
        },
        {
            "ID": 250,
            "Location": "France",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 33.6052,
            "Notes": ""
        },
        {
            "ID": 250,
            "Location": "France",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.8083,
            "Notes": ""
        },
        {
            "ID": 250,
            "Location": "France",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.8022,
            "Notes": ""
        },
        {
            "ID": 250,
            "Location": "France",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 26.4596,
            "Notes": ""
        },
        {
            "ID": 250,
            "Location": "France",
            "Year": 2019,
            "What": "Population density",
            "Value": 118.946,
            "Notes": ""
        },
        {
            "ID": 254,
            "Location": "French Guiana",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.2908,
            "Notes": ""
        },
        {
            "ID": 254,
            "Location": "French Guiana",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1438,
            "Notes": ""
        },
        {
            "ID": 254,
            "Location": "French Guiana",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1471,
            "Notes": ""
        },
        {
            "ID": 254,
            "Location": "French Guiana",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.7621,
            "Notes": ""
        },
        {
            "ID": 254,
            "Location": "French Guiana",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 32.1213,
            "Notes": ""
        },
        {
            "ID": 254,
            "Location": "French Guiana",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.5544,
            "Notes": ""
        },
        {
            "ID": 254,
            "Location": "French Guiana",
            "Year": 2019,
            "What": "Population density",
            "Value": 3.5381,
            "Notes": ""
        },
        {
            "ID": 258,
            "Location": "French Polynesia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.2793,
            "Notes": ""
        },
        {
            "ID": 258,
            "Location": "French Polynesia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1415,
            "Notes": ""
        },
        {
            "ID": 258,
            "Location": "French Polynesia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1378,
            "Notes": ""
        },
        {
            "ID": 258,
            "Location": "French Polynesia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.6845,
            "Notes": ""
        },
        {
            "ID": 258,
            "Location": "French Polynesia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.5639,
            "Notes": ""
        },
        {
            "ID": 258,
            "Location": "French Polynesia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 13.0704,
            "Notes": ""
        },
        {
            "ID": 258,
            "Location": "French Polynesia",
            "Year": 2019,
            "What": "Population density",
            "Value": 76.3079,
            "Notes": ""
        },
        {
            "ID": 266,
            "Location": "Gabon",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.1726,
            "Notes": ""
        },
        {
            "ID": 266,
            "Location": "Gabon",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.1062,
            "Notes": ""
        },
        {
            "ID": 266,
            "Location": "Gabon",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.0664,
            "Notes": ""
        },
        {
            "ID": 266,
            "Location": "Gabon",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 103.7328,
            "Notes": ""
        },
        {
            "ID": 266,
            "Location": "Gabon",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 37.1795,
            "Notes": ""
        },
        {
            "ID": 266,
            "Location": "Gabon",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.3436,
            "Notes": ""
        },
        {
            "ID": 266,
            "Location": "Gabon",
            "Year": 2019,
            "What": "Population density",
            "Value": 8.4316,
            "Notes": ""
        },
        {
            "ID": 270,
            "Location": "Gambia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.3477,
            "Notes": ""
        },
        {
            "ID": 270,
            "Location": "Gambia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.1644,
            "Notes": ""
        },
        {
            "ID": 270,
            "Location": "Gambia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.1833,
            "Notes": ""
        },
        {
            "ID": 270,
            "Location": "Gambia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.3971,
            "Notes": ""
        },
        {
            "ID": 270,
            "Location": "Gambia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 44.1271,
            "Notes": ""
        },
        {
            "ID": 270,
            "Location": "Gambia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.939,
            "Notes": ""
        },
        {
            "ID": 270,
            "Location": "Gambia",
            "Year": 2019,
            "What": "Population density",
            "Value": 231.9868,
            "Notes": ""
        },
        {
            "ID": 268,
            "Location": "Georgia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 3.9968,
            "Notes": "Including Abkhazia and South Ossetia."
        },
        {
            "ID": 268,
            "Location": "Georgia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.9057,
            "Notes": "Including Abkhazia and South Ossetia."
        },
        {
            "ID": 268,
            "Location": "Georgia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.091,
            "Notes": "Including Abkhazia and South Ossetia."
        },
        {
            "ID": 268,
            "Location": "Georgia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 91.1394,
            "Notes": "Including Abkhazia and South Ossetia."
        },
        {
            "ID": 268,
            "Location": "Georgia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 20.0314,
            "Notes": "Including Abkhazia and South Ossetia."
        },
        {
            "ID": 268,
            "Location": "Georgia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 21.2072,
            "Notes": "Including Abkhazia and South Ossetia."
        },
        {
            "ID": 268,
            "Location": "Georgia",
            "Year": 2019,
            "What": "Population density",
            "Value": 57.5157,
            "Notes": "Including Abkhazia and South Ossetia."
        },
        {
            "ID": 276,
            "Location": "Germany",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 83.517,
            "Notes": ""
        },
        {
            "ID": 276,
            "Location": "Germany",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 41.2491,
            "Notes": ""
        },
        {
            "ID": 276,
            "Location": "Germany",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 42.2679,
            "Notes": ""
        },
        {
            "ID": 276,
            "Location": "Germany",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.5896,
            "Notes": ""
        },
        {
            "ID": 276,
            "Location": "Germany",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 13.7995,
            "Notes": ""
        },
        {
            "ID": 276,
            "Location": "Germany",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 28.3472,
            "Notes": ""
        },
        {
            "ID": 276,
            "Location": "Germany",
            "Year": 2019,
            "What": "Population density",
            "Value": 239.6059,
            "Notes": ""
        },
        {
            "ID": 288,
            "Location": "Ghana",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 30.4179,
            "Notes": ""
        },
        {
            "ID": 288,
            "Location": "Ghana",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 15.4161,
            "Notes": ""
        },
        {
            "ID": 288,
            "Location": "Ghana",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 15.0018,
            "Notes": ""
        },
        {
            "ID": 288,
            "Location": "Ghana",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.7618,
            "Notes": ""
        },
        {
            "ID": 288,
            "Location": "Ghana",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 37.3649,
            "Notes": ""
        },
        {
            "ID": 288,
            "Location": "Ghana",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.1552,
            "Notes": ""
        },
        {
            "ID": 288,
            "Location": "Ghana",
            "Year": 2019,
            "What": "Population density",
            "Value": 133.6814,
            "Notes": ""
        },
        {
            "ID": 292,
            "Location": "Gibraltar",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0337,
            "Notes": ""
        },
        {
            "ID": 292,
            "Location": "Gibraltar",
            "Year": 2019,
            "What": "Population density",
            "Value": 3370.1,
            "Notes": ""
        },
        {
            "ID": 300,
            "Location": "Greece",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 10.4735,
            "Notes": ""
        },
        {
            "ID": 300,
            "Location": "Greece",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.1405,
            "Notes": ""
        },
        {
            "ID": 300,
            "Location": "Greece",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.3329,
            "Notes": ""
        },
        {
            "ID": 300,
            "Location": "Greece",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.392,
            "Notes": ""
        },
        {
            "ID": 300,
            "Location": "Greece",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 13.8966,
            "Notes": ""
        },
        {
            "ID": 300,
            "Location": "Greece",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 28.298,
            "Notes": ""
        },
        {
            "ID": 300,
            "Location": "Greece",
            "Year": 2019,
            "What": "Population density",
            "Value": 81.2526,
            "Notes": ""
        },
        {
            "ID": 304,
            "Location": "Greenland",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0567,
            "Notes": ""
        },
        {
            "ID": 304,
            "Location": "Greenland",
            "Year": 2019,
            "What": "Population density",
            "Value": 0.1381,
            "Notes": ""
        },
        {
            "ID": 308,
            "Location": "Grenada",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.112,
            "Notes": ""
        },
        {
            "ID": 308,
            "Location": "Grenada",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0564,
            "Notes": ""
        },
        {
            "ID": 308,
            "Location": "Grenada",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0556,
            "Notes": ""
        },
        {
            "ID": 308,
            "Location": "Grenada",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.5294,
            "Notes": ""
        },
        {
            "ID": 308,
            "Location": "Grenada",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.7172,
            "Notes": ""
        },
        {
            "ID": 308,
            "Location": "Grenada",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 14.5898,
            "Notes": ""
        },
        {
            "ID": 308,
            "Location": "Grenada",
            "Year": 2019,
            "What": "Population density",
            "Value": 329.4206,
            "Notes": ""
        },
        {
            "ID": 312,
            "Location": "Guadeloupe",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.4001,
            "Notes": ""
        },
        {
            "ID": 312,
            "Location": "Guadeloupe",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1847,
            "Notes": ""
        },
        {
            "ID": 312,
            "Location": "Guadeloupe",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2154,
            "Notes": ""
        },
        {
            "ID": 312,
            "Location": "Guadeloupe",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 85.7561,
            "Notes": ""
        },
        {
            "ID": 312,
            "Location": "Guadeloupe",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.8479,
            "Notes": ""
        },
        {
            "ID": 312,
            "Location": "Guadeloupe",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.3527,
            "Notes": ""
        },
        {
            "ID": 312,
            "Location": "Guadeloupe",
            "Year": 2019,
            "What": "Population density",
            "Value": 245.7346,
            "Notes": ""
        },
        {
            "ID": 316,
            "Location": "Guam",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1673,
            "Notes": ""
        },
        {
            "ID": 316,
            "Location": "Guam",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0844,
            "Notes": ""
        },
        {
            "ID": 316,
            "Location": "Guam",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0829,
            "Notes": ""
        },
        {
            "ID": 316,
            "Location": "Guam",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.9057,
            "Notes": ""
        },
        {
            "ID": 316,
            "Location": "Guam",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 24.1342,
            "Notes": ""
        },
        {
            "ID": 316,
            "Location": "Guam",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 14.7405,
            "Notes": ""
        },
        {
            "ID": 316,
            "Location": "Guam",
            "Year": 2019,
            "What": "Population density",
            "Value": 309.8037,
            "Notes": ""
        },
        {
            "ID": 320,
            "Location": "Guatemala",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 17.5815,
            "Notes": ""
        },
        {
            "ID": 320,
            "Location": "Guatemala",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 8.66,
            "Notes": ""
        },
        {
            "ID": 320,
            "Location": "Guatemala",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 8.9215,
            "Notes": ""
        },
        {
            "ID": 320,
            "Location": "Guatemala",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.068,
            "Notes": ""
        },
        {
            "ID": 320,
            "Location": "Guatemala",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 33.8593,
            "Notes": ""
        },
        {
            "ID": 320,
            "Location": "Guatemala",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.1104,
            "Notes": ""
        },
        {
            "ID": 320,
            "Location": "Guatemala",
            "Year": 2019,
            "What": "Population density",
            "Value": 164.0675,
            "Notes": ""
        },
        {
            "ID": 324,
            "Location": "Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 12.7712,
            "Notes": ""
        },
        {
            "ID": 324,
            "Location": "Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 6.1661,
            "Notes": ""
        },
        {
            "ID": 324,
            "Location": "Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 6.6052,
            "Notes": ""
        },
        {
            "ID": 324,
            "Location": "Guinea",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.3522,
            "Notes": ""
        },
        {
            "ID": 324,
            "Location": "Guinea",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 43.45,
            "Notes": ""
        },
        {
            "ID": 324,
            "Location": "Guinea",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.7046,
            "Notes": ""
        },
        {
            "ID": 324,
            "Location": "Guinea",
            "Year": 2019,
            "What": "Population density",
            "Value": 51.9748,
            "Notes": ""
        },
        {
            "ID": 624,
            "Location": "Guinea-Bissau",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.9209,
            "Notes": ""
        },
        {
            "ID": 624,
            "Location": "Guinea-Bissau",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.9389,
            "Notes": ""
        },
        {
            "ID": 624,
            "Location": "Guinea-Bissau",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.9821,
            "Notes": ""
        },
        {
            "ID": 624,
            "Location": "Guinea-Bissau",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.602,
            "Notes": ""
        },
        {
            "ID": 624,
            "Location": "Guinea-Bissau",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.1537,
            "Notes": ""
        },
        {
            "ID": 624,
            "Location": "Guinea-Bissau",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.5766,
            "Notes": ""
        },
        {
            "ID": 624,
            "Location": "Guinea-Bissau",
            "Year": 2019,
            "What": "Population density",
            "Value": 68.3116,
            "Notes": ""
        },
        {
            "ID": 328,
            "Location": "Guyana",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.7828,
            "Notes": ""
        },
        {
            "ID": 328,
            "Location": "Guyana",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.3933,
            "Notes": ""
        },
        {
            "ID": 328,
            "Location": "Guyana",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.3895,
            "Notes": ""
        },
        {
            "ID": 328,
            "Location": "Guyana",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.9671,
            "Notes": ""
        },
        {
            "ID": 328,
            "Location": "Guyana",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.9299,
            "Notes": ""
        },
        {
            "ID": 328,
            "Location": "Guyana",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.4276,
            "Notes": ""
        },
        {
            "ID": 328,
            "Location": "Guyana",
            "Year": 2019,
            "What": "Population density",
            "Value": 3.9765,
            "Notes": ""
        },
        {
            "ID": 332,
            "Location": "Haiti",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 11.2631,
            "Notes": ""
        },
        {
            "ID": 332,
            "Location": "Haiti",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.5576,
            "Notes": ""
        },
        {
            "ID": 332,
            "Location": "Haiti",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.7055,
            "Notes": ""
        },
        {
            "ID": 332,
            "Location": "Haiti",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.408,
            "Notes": ""
        },
        {
            "ID": 332,
            "Location": "Haiti",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 32.8586,
            "Notes": ""
        },
        {
            "ID": 332,
            "Location": "Haiti",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.594,
            "Notes": ""
        },
        {
            "ID": 332,
            "Location": "Haiti",
            "Year": 2019,
            "What": "Population density",
            "Value": 408.6748,
            "Notes": ""
        },
        {
            "ID": 336,
            "Location": "Holy See",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0008,
            "Notes": ""
        },
        {
            "ID": 336,
            "Location": "Holy See",
            "Year": 2019,
            "What": "Population density",
            "Value": 1815.9091,
            "Notes": ""
        },
        {
            "ID": 340,
            "Location": "Honduras",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 9.7461,
            "Notes": ""
        },
        {
            "ID": 340,
            "Location": "Honduras",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.869,
            "Notes": ""
        },
        {
            "ID": 340,
            "Location": "Honduras",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.8771,
            "Notes": ""
        },
        {
            "ID": 340,
            "Location": "Honduras",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.8334,
            "Notes": ""
        },
        {
            "ID": 340,
            "Location": "Honduras",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 31.1594,
            "Notes": ""
        },
        {
            "ID": 340,
            "Location": "Honduras",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.1751,
            "Notes": ""
        },
        {
            "ID": 340,
            "Location": "Honduras",
            "Year": 2019,
            "What": "Population density",
            "Value": 87.1045,
            "Notes": ""
        },
        {
            "ID": 348,
            "Location": "Hungary",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 9.6847,
            "Notes": ""
        },
        {
            "ID": 348,
            "Location": "Hungary",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.6083,
            "Notes": ""
        },
        {
            "ID": 348,
            "Location": "Hungary",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.0764,
            "Notes": ""
        },
        {
            "ID": 348,
            "Location": "Hungary",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 90.7774,
            "Notes": ""
        },
        {
            "ID": 348,
            "Location": "Hungary",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.4332,
            "Notes": ""
        },
        {
            "ID": 348,
            "Location": "Hungary",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 26.5522,
            "Notes": ""
        },
        {
            "ID": 348,
            "Location": "Hungary",
            "Year": 2019,
            "What": "Population density",
            "Value": 106.9776,
            "Notes": ""
        },
        {
            "ID": 352,
            "Location": "Iceland",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.339,
            "Notes": ""
        },
        {
            "ID": 352,
            "Location": "Iceland",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1702,
            "Notes": ""
        },
        {
            "ID": 352,
            "Location": "Iceland",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1688,
            "Notes": ""
        },
        {
            "ID": 352,
            "Location": "Iceland",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.843,
            "Notes": ""
        },
        {
            "ID": 352,
            "Location": "Iceland",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 19.6472,
            "Notes": ""
        },
        {
            "ID": 352,
            "Location": "Iceland",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 21.0904,
            "Notes": ""
        },
        {
            "ID": 352,
            "Location": "Iceland",
            "Year": 2019,
            "What": "Population density",
            "Value": 3.3819,
            "Notes": ""
        },
        {
            "ID": 356,
            "Location": "India",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1366.4178,
            "Notes": ""
        },
        {
            "ID": 356,
            "Location": "India",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 710.1296,
            "Notes": ""
        },
        {
            "ID": 356,
            "Location": "India",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 656.2882,
            "Notes": ""
        },
        {
            "ID": 356,
            "Location": "India",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 108.2039,
            "Notes": ""
        },
        {
            "ID": 356,
            "Location": "India",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 26.6183,
            "Notes": ""
        },
        {
            "ID": 356,
            "Location": "India",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.8703,
            "Notes": ""
        },
        {
            "ID": 356,
            "Location": "India",
            "Year": 2019,
            "What": "Population density",
            "Value": 459.5797,
            "Notes": ""
        },
        {
            "ID": 360,
            "Location": "Indonesia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 270.6256,
            "Notes": ""
        },
        {
            "ID": 360,
            "Location": "Indonesia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 136.2698,
            "Notes": ""
        },
        {
            "ID": 360,
            "Location": "Indonesia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 134.3558,
            "Notes": ""
        },
        {
            "ID": 360,
            "Location": "Indonesia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.4245,
            "Notes": ""
        },
        {
            "ID": 360,
            "Location": "Indonesia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 26.2151,
            "Notes": ""
        },
        {
            "ID": 360,
            "Location": "Indonesia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.7169,
            "Notes": ""
        },
        {
            "ID": 360,
            "Location": "Indonesia",
            "Year": 2019,
            "What": "Population density",
            "Value": 149.3873,
            "Notes": ""
        },
        {
            "ID": 364,
            "Location": "Iran (Islamic Republic of)",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 82.9139,
            "Notes": ""
        },
        {
            "ID": 364,
            "Location": "Iran (Islamic Republic of)",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 41.8899,
            "Notes": ""
        },
        {
            "ID": 364,
            "Location": "Iran (Islamic Republic of)",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 41.024,
            "Notes": ""
        },
        {
            "ID": 364,
            "Location": "Iran (Islamic Republic of)",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.1107,
            "Notes": ""
        },
        {
            "ID": 364,
            "Location": "Iran (Islamic Republic of)",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 24.6547,
            "Notes": ""
        },
        {
            "ID": 364,
            "Location": "Iran (Islamic Republic of)",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.9872,
            "Notes": ""
        },
        {
            "ID": 364,
            "Location": "Iran (Islamic Republic of)",
            "Year": 2019,
            "What": "Population density",
            "Value": 50.9127,
            "Notes": ""
        },
        {
            "ID": 368,
            "Location": "Iraq",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 39.3098,
            "Notes": ""
        },
        {
            "ID": 368,
            "Location": "Iraq",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 19.8918,
            "Notes": ""
        },
        {
            "ID": 368,
            "Location": "Iraq",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 19.418,
            "Notes": ""
        },
        {
            "ID": 368,
            "Location": "Iraq",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.4402,
            "Notes": ""
        },
        {
            "ID": 368,
            "Location": "Iraq",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 38.0209,
            "Notes": ""
        },
        {
            "ID": 368,
            "Location": "Iraq",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.0917,
            "Notes": ""
        },
        {
            "ID": 368,
            "Location": "Iraq",
            "Year": 2019,
            "What": "Population density",
            "Value": 90.5088,
            "Notes": ""
        },
        {
            "ID": 372,
            "Location": "Ireland",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.8825,
            "Notes": ""
        },
        {
            "ID": 372,
            "Location": "Ireland",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.4224,
            "Notes": ""
        },
        {
            "ID": 372,
            "Location": "Ireland",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.4601,
            "Notes": ""
        },
        {
            "ID": 372,
            "Location": "Ireland",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.4691,
            "Notes": ""
        },
        {
            "ID": 372,
            "Location": "Ireland",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 21.1504,
            "Notes": ""
        },
        {
            "ID": 372,
            "Location": "Ireland",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 19.2596,
            "Notes": ""
        },
        {
            "ID": 372,
            "Location": "Ireland",
            "Year": 2019,
            "What": "Population density",
            "Value": 70.8738,
            "Notes": ""
        },
        {
            "ID": 833,
            "Location": "Isle of Man",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0846,
            "Notes": ""
        },
        {
            "ID": 833,
            "Location": "Isle of Man",
            "Year": 2019,
            "What": "Population density",
            "Value": 148.393,
            "Notes": ""
        },
        {
            "ID": 376,
            "Location": "Israel",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 8.5194,
            "Notes": ""
        },
        {
            "ID": 376,
            "Location": "Israel",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.2373,
            "Notes": ""
        },
        {
            "ID": 376,
            "Location": "Israel",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.282,
            "Notes": ""
        },
        {
            "ID": 376,
            "Location": "Israel",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.9557,
            "Notes": ""
        },
        {
            "ID": 376,
            "Location": "Israel",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.8856,
            "Notes": ""
        },
        {
            "ID": 376,
            "Location": "Israel",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 16.3395,
            "Notes": ""
        },
        {
            "ID": 376,
            "Location": "Israel",
            "Year": 2019,
            "What": "Population density",
            "Value": 393.6866,
            "Notes": ""
        },
        {
            "ID": 380,
            "Location": "Italy",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 60.5501,
            "Notes": ""
        },
        {
            "ID": 380,
            "Location": "Italy",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 29.461,
            "Notes": ""
        },
        {
            "ID": 380,
            "Location": "Italy",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 31.0891,
            "Notes": ""
        },
        {
            "ID": 380,
            "Location": "Italy",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.7634,
            "Notes": ""
        },
        {
            "ID": 380,
            "Location": "Italy",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 13.1667,
            "Notes": ""
        },
        {
            "ID": 380,
            "Location": "Italy",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 29.3835,
            "Notes": ""
        },
        {
            "ID": 380,
            "Location": "Italy",
            "Year": 2019,
            "What": "Population density",
            "Value": 205.8546,
            "Notes": ""
        },
        {
            "ID": 388,
            "Location": "Jamaica",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.9483,
            "Notes": ""
        },
        {
            "ID": 388,
            "Location": "Jamaica",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.4637,
            "Notes": ""
        },
        {
            "ID": 388,
            "Location": "Jamaica",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.4846,
            "Notes": ""
        },
        {
            "ID": 388,
            "Location": "Jamaica",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.5964,
            "Notes": ""
        },
        {
            "ID": 388,
            "Location": "Jamaica",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.5312,
            "Notes": ""
        },
        {
            "ID": 388,
            "Location": "Jamaica",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 12.9719,
            "Notes": ""
        },
        {
            "ID": 388,
            "Location": "Jamaica",
            "Year": 2019,
            "What": "Population density",
            "Value": 272.2326,
            "Notes": ""
        },
        {
            "ID": 392,
            "Location": "Japan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 126.8603,
            "Notes": ""
        },
        {
            "ID": 392,
            "Location": "Japan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 61.9503,
            "Notes": ""
        },
        {
            "ID": 392,
            "Location": "Japan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 64.91,
            "Notes": ""
        },
        {
            "ID": 392,
            "Location": "Japan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.4403,
            "Notes": ""
        },
        {
            "ID": 392,
            "Location": "Japan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 12.573,
            "Notes": ""
        },
        {
            "ID": 392,
            "Location": "Japan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 34.0143,
            "Notes": ""
        },
        {
            "ID": 392,
            "Location": "Japan",
            "Year": 2019,
            "What": "Population density",
            "Value": 347.9867,
            "Notes": ""
        },
        {
            "ID": 400,
            "Location": "Jordan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 10.1017,
            "Notes": ""
        },
        {
            "ID": 400,
            "Location": "Jordan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.1132,
            "Notes": ""
        },
        {
            "ID": 400,
            "Location": "Jordan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.9885,
            "Notes": ""
        },
        {
            "ID": 400,
            "Location": "Jordan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.5004,
            "Notes": ""
        },
        {
            "ID": 400,
            "Location": "Jordan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 33.5622,
            "Notes": ""
        },
        {
            "ID": 400,
            "Location": "Jordan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.9161,
            "Notes": ""
        },
        {
            "ID": 400,
            "Location": "Jordan",
            "Year": 2019,
            "What": "Population density",
            "Value": 113.7834,
            "Notes": ""
        },
        {
            "ID": 398,
            "Location": "Kazakhstan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 18.5514,
            "Notes": ""
        },
        {
            "ID": 398,
            "Location": "Kazakhstan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 8.9998,
            "Notes": ""
        },
        {
            "ID": 398,
            "Location": "Kazakhstan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 9.5517,
            "Notes": ""
        },
        {
            "ID": 398,
            "Location": "Kazakhstan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.2217,
            "Notes": ""
        },
        {
            "ID": 398,
            "Location": "Kazakhstan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 28.8812,
            "Notes": ""
        },
        {
            "ID": 398,
            "Location": "Kazakhstan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 11.8639,
            "Notes": ""
        },
        {
            "ID": 398,
            "Location": "Kazakhstan",
            "Year": 2019,
            "What": "Population density",
            "Value": 6.8717,
            "Notes": ""
        },
        {
            "ID": 404,
            "Location": "Kenya",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 52.574,
            "Notes": ""
        },
        {
            "ID": 404,
            "Location": "Kenya",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 26.1224,
            "Notes": ""
        },
        {
            "ID": 404,
            "Location": "Kenya",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 26.4516,
            "Notes": ""
        },
        {
            "ID": 404,
            "Location": "Kenya",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.7555,
            "Notes": ""
        },
        {
            "ID": 404,
            "Location": "Kenya",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 39.1934,
            "Notes": ""
        },
        {
            "ID": 404,
            "Location": "Kenya",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.0397,
            "Notes": ""
        },
        {
            "ID": 404,
            "Location": "Kenya",
            "Year": 2019,
            "What": "Population density",
            "Value": 92.3744,
            "Notes": ""
        },
        {
            "ID": 296,
            "Location": "Kiribati",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1176,
            "Notes": ""
        },
        {
            "ID": 296,
            "Location": "Kiribati",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0578,
            "Notes": ""
        },
        {
            "ID": 296,
            "Location": "Kiribati",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0598,
            "Notes": ""
        },
        {
            "ID": 296,
            "Location": "Kiribati",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.7149,
            "Notes": ""
        },
        {
            "ID": 296,
            "Location": "Kiribati",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 35.8383,
            "Notes": ""
        },
        {
            "ID": 296,
            "Location": "Kiribati",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.5014,
            "Notes": ""
        },
        {
            "ID": 296,
            "Location": "Kiribati",
            "Year": 2019,
            "What": "Population density",
            "Value": 145.1926,
            "Notes": ""
        },
        {
            "ID": 414,
            "Location": "Kuwait",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.2071,
            "Notes": ""
        },
        {
            "ID": 414,
            "Location": "Kuwait",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.5631,
            "Notes": ""
        },
        {
            "ID": 414,
            "Location": "Kuwait",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.644,
            "Notes": ""
        },
        {
            "ID": 414,
            "Location": "Kuwait",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 155.9015,
            "Notes": ""
        },
        {
            "ID": 414,
            "Location": "Kuwait",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 21.5698,
            "Notes": ""
        },
        {
            "ID": 414,
            "Location": "Kuwait",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.9971,
            "Notes": ""
        },
        {
            "ID": 414,
            "Location": "Kuwait",
            "Year": 2019,
            "What": "Population density",
            "Value": 236.0877,
            "Notes": ""
        },
        {
            "ID": 417,
            "Location": "Kyrgyzstan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 6.4159,
            "Notes": ""
        },
        {
            "ID": 417,
            "Location": "Kyrgyzstan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.1739,
            "Notes": ""
        },
        {
            "ID": 417,
            "Location": "Kyrgyzstan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.2419,
            "Notes": ""
        },
        {
            "ID": 417,
            "Location": "Kyrgyzstan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.901,
            "Notes": ""
        },
        {
            "ID": 417,
            "Location": "Kyrgyzstan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 32.5017,
            "Notes": ""
        },
        {
            "ID": 417,
            "Location": "Kyrgyzstan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.8433,
            "Notes": ""
        },
        {
            "ID": 417,
            "Location": "Kyrgyzstan",
            "Year": 2019,
            "What": "Population density",
            "Value": 33.4507,
            "Notes": ""
        },
        {
            "ID": 418,
            "Location": "Lao People's Dem. Rep.",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 7.1695,
            "Notes": ""
        },
        {
            "ID": 418,
            "Location": "Lao People's Dem. Rep.",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.599,
            "Notes": ""
        },
        {
            "ID": 418,
            "Location": "Lao People's Dem. Rep.",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.5704,
            "Notes": ""
        },
        {
            "ID": 418,
            "Location": "Lao People's Dem. Rep.",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.801,
            "Notes": ""
        },
        {
            "ID": 418,
            "Location": "Lao People's Dem. Rep.",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 32.303,
            "Notes": ""
        },
        {
            "ID": 418,
            "Location": "Lao People's Dem. Rep.",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.6353,
            "Notes": ""
        },
        {
            "ID": 418,
            "Location": "Lao People's Dem. Rep.",
            "Year": 2019,
            "What": "Population density",
            "Value": 31.0635,
            "Notes": ""
        },
        {
            "ID": 428,
            "Location": "Latvia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.9067,
            "Notes": ""
        },
        {
            "ID": 428,
            "Location": "Latvia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.8779,
            "Notes": ""
        },
        {
            "ID": 428,
            "Location": "Latvia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.0288,
            "Notes": ""
        },
        {
            "ID": 428,
            "Location": "Latvia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 85.3378,
            "Notes": ""
        },
        {
            "ID": 428,
            "Location": "Latvia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.3078,
            "Notes": ""
        },
        {
            "ID": 428,
            "Location": "Latvia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 27.1487,
            "Notes": ""
        },
        {
            "ID": 428,
            "Location": "Latvia",
            "Year": 2019,
            "What": "Population density",
            "Value": 30.655,
            "Notes": ""
        },
        {
            "ID": 422,
            "Location": "Lebanon",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 6.8557,
            "Notes": ""
        },
        {
            "ID": 422,
            "Location": "Lebanon",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.4492,
            "Notes": ""
        },
        {
            "ID": 422,
            "Location": "Lebanon",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.4065,
            "Notes": ""
        },
        {
            "ID": 422,
            "Location": "Lebanon",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.2559,
            "Notes": ""
        },
        {
            "ID": 422,
            "Location": "Lebanon",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 25.5722,
            "Notes": ""
        },
        {
            "ID": 422,
            "Location": "Lebanon",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.8001,
            "Notes": ""
        },
        {
            "ID": 422,
            "Location": "Lebanon",
            "Year": 2019,
            "What": "Population density",
            "Value": 670.1577,
            "Notes": ""
        },
        {
            "ID": 426,
            "Location": "Lesotho",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.1253,
            "Notes": ""
        },
        {
            "ID": 426,
            "Location": "Lesotho",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.0479,
            "Notes": ""
        },
        {
            "ID": 426,
            "Location": "Lesotho",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.0773,
            "Notes": ""
        },
        {
            "ID": 426,
            "Location": "Lesotho",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.273,
            "Notes": ""
        },
        {
            "ID": 426,
            "Location": "Lesotho",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 32.4669,
            "Notes": ""
        },
        {
            "ID": 426,
            "Location": "Lesotho",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.4737,
            "Notes": ""
        },
        {
            "ID": 426,
            "Location": "Lesotho",
            "Year": 2019,
            "What": "Population density",
            "Value": 70.0022,
            "Notes": ""
        },
        {
            "ID": 430,
            "Location": "Liberia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.9374,
            "Notes": ""
        },
        {
            "ID": 430,
            "Location": "Liberia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.4811,
            "Notes": ""
        },
        {
            "ID": 430,
            "Location": "Liberia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.4563,
            "Notes": ""
        },
        {
            "ID": 430,
            "Location": "Liberia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.012,
            "Notes": ""
        },
        {
            "ID": 430,
            "Location": "Liberia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 40.7529,
            "Notes": ""
        },
        {
            "ID": 430,
            "Location": "Liberia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.1859,
            "Notes": ""
        },
        {
            "ID": 430,
            "Location": "Liberia",
            "Year": 2019,
            "What": "Population density",
            "Value": 51.2601,
            "Notes": ""
        },
        {
            "ID": 434,
            "Location": "Libya",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 6.7775,
            "Notes": ""
        },
        {
            "ID": 434,
            "Location": "Libya",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.4226,
            "Notes": ""
        },
        {
            "ID": 434,
            "Location": "Libya",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.3548,
            "Notes": ""
        },
        {
            "ID": 434,
            "Location": "Libya",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.0205,
            "Notes": ""
        },
        {
            "ID": 434,
            "Location": "Libya",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 28.0683,
            "Notes": ""
        },
        {
            "ID": 434,
            "Location": "Libya",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.7482,
            "Notes": ""
        },
        {
            "ID": 434,
            "Location": "Libya",
            "Year": 2019,
            "What": "Population density",
            "Value": 3.8518,
            "Notes": ""
        },
        {
            "ID": 438,
            "Location": "Liechtenstein",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.038,
            "Notes": ""
        },
        {
            "ID": 438,
            "Location": "Liechtenstein",
            "Year": 2019,
            "What": "Population density",
            "Value": 237.6188,
            "Notes": ""
        },
        {
            "ID": 440,
            "Location": "Lithuania",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.7596,
            "Notes": ""
        },
        {
            "ID": 440,
            "Location": "Lithuania",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.2765,
            "Notes": ""
        },
        {
            "ID": 440,
            "Location": "Lithuania",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.4832,
            "Notes": ""
        },
        {
            "ID": 440,
            "Location": "Lithuania",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 86.065,
            "Notes": ""
        },
        {
            "ID": 440,
            "Location": "Lithuania",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.1355,
            "Notes": ""
        },
        {
            "ID": 440,
            "Location": "Lithuania",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 26.8613,
            "Notes": ""
        },
        {
            "ID": 440,
            "Location": "Lithuania",
            "Year": 2019,
            "What": "Population density",
            "Value": 44.0314,
            "Notes": ""
        },
        {
            "ID": 442,
            "Location": "Luxembourg",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.6157,
            "Notes": ""
        },
        {
            "ID": 442,
            "Location": "Luxembourg",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.3111,
            "Notes": ""
        },
        {
            "ID": 442,
            "Location": "Luxembourg",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.3046,
            "Notes": ""
        },
        {
            "ID": 442,
            "Location": "Luxembourg",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.1305,
            "Notes": ""
        },
        {
            "ID": 442,
            "Location": "Luxembourg",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.7072,
            "Notes": ""
        },
        {
            "ID": 442,
            "Location": "Luxembourg",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 19.72,
            "Notes": ""
        },
        {
            "ID": 442,
            "Location": "Luxembourg",
            "Year": 2019,
            "What": "Population density",
            "Value": 237.7332,
            "Notes": ""
        },
        {
            "ID": 450,
            "Location": "Madagascar",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 26.9693,
            "Notes": ""
        },
        {
            "ID": 450,
            "Location": "Madagascar",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 13.4529,
            "Notes": ""
        },
        {
            "ID": 450,
            "Location": "Madagascar",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 13.5164,
            "Notes": ""
        },
        {
            "ID": 450,
            "Location": "Madagascar",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.5306,
            "Notes": ""
        },
        {
            "ID": 450,
            "Location": "Madagascar",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 40.3668,
            "Notes": ""
        },
        {
            "ID": 450,
            "Location": "Madagascar",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.9353,
            "Notes": ""
        },
        {
            "ID": 450,
            "Location": "Madagascar",
            "Year": 2019,
            "What": "Population density",
            "Value": 46.3553,
            "Notes": ""
        },
        {
            "ID": 454,
            "Location": "Malawi",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 18.6287,
            "Notes": ""
        },
        {
            "ID": 454,
            "Location": "Malawi",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 9.1853,
            "Notes": ""
        },
        {
            "ID": 454,
            "Location": "Malawi",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 9.4435,
            "Notes": ""
        },
        {
            "ID": 454,
            "Location": "Malawi",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.2659,
            "Notes": ""
        },
        {
            "ID": 454,
            "Location": "Malawi",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 43.4687,
            "Notes": ""
        },
        {
            "ID": 454,
            "Location": "Malawi",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.0768,
            "Notes": ""
        },
        {
            "ID": 454,
            "Location": "Malawi",
            "Year": 2019,
            "What": "Population density",
            "Value": 197.5896,
            "Notes": ""
        },
        {
            "ID": 458,
            "Location": "Malaysia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 31.9498,
            "Notes": "Including Sabah and Sarawak."
        },
        {
            "ID": 458,
            "Location": "Malaysia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 16.4232,
            "Notes": "Including Sabah and Sarawak."
        },
        {
            "ID": 458,
            "Location": "Malaysia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 15.5266,
            "Notes": "Including Sabah and Sarawak."
        },
        {
            "ID": 458,
            "Location": "Malaysia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 105.7742,
            "Notes": "Including Sabah and Sarawak."
        },
        {
            "ID": 458,
            "Location": "Malaysia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.695,
            "Notes": "Including Sabah and Sarawak."
        },
        {
            "ID": 458,
            "Location": "Malaysia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.6166,
            "Notes": "Including Sabah and Sarawak."
        },
        {
            "ID": 458,
            "Location": "Malaysia",
            "Year": 2019,
            "What": "Population density",
            "Value": 97.2448,
            "Notes": "Including Sabah and Sarawak."
        },
        {
            "ID": 462,
            "Location": "Maldives",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.531,
            "Notes": ""
        },
        {
            "ID": 462,
            "Location": "Maldives",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.3361,
            "Notes": ""
        },
        {
            "ID": 462,
            "Location": "Maldives",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1949,
            "Notes": ""
        },
        {
            "ID": 462,
            "Location": "Maldives",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 172.4435,
            "Notes": ""
        },
        {
            "ID": 462,
            "Location": "Maldives",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 19.9097,
            "Notes": ""
        },
        {
            "ID": 462,
            "Location": "Maldives",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.7894,
            "Notes": ""
        },
        {
            "ID": 462,
            "Location": "Maldives",
            "Year": 2019,
            "What": "Population density",
            "Value": 1769.8433,
            "Notes": ""
        },
        {
            "ID": 466,
            "Location": "Mali",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 19.658,
            "Notes": ""
        },
        {
            "ID": 466,
            "Location": "Mali",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 9.8445,
            "Notes": ""
        },
        {
            "ID": 466,
            "Location": "Mali",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 9.8135,
            "Notes": ""
        },
        {
            "ID": 466,
            "Location": "Mali",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.3164,
            "Notes": ""
        },
        {
            "ID": 466,
            "Location": "Mali",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 47.3047,
            "Notes": ""
        },
        {
            "ID": 466,
            "Location": "Mali",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.8897,
            "Notes": ""
        },
        {
            "ID": 466,
            "Location": "Mali",
            "Year": 2019,
            "What": "Population density",
            "Value": 16.1106,
            "Notes": ""
        },
        {
            "ID": 470,
            "Location": "Malta",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.4404,
            "Notes": ""
        },
        {
            "ID": 470,
            "Location": "Malta",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.2208,
            "Notes": ""
        },
        {
            "ID": 470,
            "Location": "Malta",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2196,
            "Notes": ""
        },
        {
            "ID": 470,
            "Location": "Malta",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.5415,
            "Notes": ""
        },
        {
            "ID": 470,
            "Location": "Malta",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.3288,
            "Notes": ""
        },
        {
            "ID": 470,
            "Location": "Malta",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 27.6348,
            "Notes": ""
        },
        {
            "ID": 470,
            "Location": "Malta",
            "Year": 2019,
            "What": "Population density",
            "Value": 1376.1625,
            "Notes": ""
        },
        {
            "ID": 584,
            "Location": "Marshall Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0588,
            "Notes": ""
        },
        {
            "ID": 584,
            "Location": "Marshall Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 326.6167,
            "Notes": ""
        },
        {
            "ID": 474,
            "Location": "Martinique",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.3756,
            "Notes": ""
        },
        {
            "ID": 474,
            "Location": "Martinique",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.173,
            "Notes": ""
        },
        {
            "ID": 474,
            "Location": "Martinique",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2026,
            "Notes": ""
        },
        {
            "ID": 474,
            "Location": "Martinique",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 85.3824,
            "Notes": ""
        },
        {
            "ID": 474,
            "Location": "Martinique",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.9857,
            "Notes": ""
        },
        {
            "ID": 474,
            "Location": "Martinique",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 28.3783,
            "Notes": ""
        },
        {
            "ID": 474,
            "Location": "Martinique",
            "Year": 2019,
            "What": "Population density",
            "Value": 354.2962,
            "Notes": ""
        },
        {
            "ID": 478,
            "Location": "Mauritania",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.5257,
            "Notes": ""
        },
        {
            "ID": 478,
            "Location": "Mauritania",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.2718,
            "Notes": ""
        },
        {
            "ID": 478,
            "Location": "Mauritania",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.2539,
            "Notes": ""
        },
        {
            "ID": 478,
            "Location": "Mauritania",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.7981,
            "Notes": ""
        },
        {
            "ID": 478,
            "Location": "Mauritania",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 39.8889,
            "Notes": ""
        },
        {
            "ID": 478,
            "Location": "Mauritania",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.0351,
            "Notes": ""
        },
        {
            "ID": 478,
            "Location": "Mauritania",
            "Year": 2019,
            "What": "Population density",
            "Value": 4.3909,
            "Notes": ""
        },
        {
            "ID": 480,
            "Location": "Mauritius",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.2697,
            "Notes": "Including Agalega, Rodrigues and Saint Brandon."
        },
        {
            "ID": 480,
            "Location": "Mauritius",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.627,
            "Notes": "Including Agalega, Rodrigues and Saint Brandon."
        },
        {
            "ID": 480,
            "Location": "Mauritius",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.6427,
            "Notes": "Including Agalega, Rodrigues and Saint Brandon."
        },
        {
            "ID": 480,
            "Location": "Mauritius",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.5528,
            "Notes": "Including Agalega, Rodrigues and Saint Brandon."
        },
        {
            "ID": 480,
            "Location": "Mauritius",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.2597,
            "Notes": "Including Agalega, Rodrigues and Saint Brandon."
        },
        {
            "ID": 480,
            "Location": "Mauritius",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 17.7765,
            "Notes": "Including Agalega, Rodrigues and Saint Brandon."
        },
        {
            "ID": 480,
            "Location": "Mauritius",
            "Year": 2019,
            "What": "Population density",
            "Value": 625.4522,
            "Notes": "Including Agalega, Rodrigues and Saint Brandon."
        },
        {
            "ID": 175,
            "Location": "Mayotte",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.2662,
            "Notes": ""
        },
        {
            "ID": 175,
            "Location": "Mayotte",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1309,
            "Notes": ""
        },
        {
            "ID": 175,
            "Location": "Mayotte",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1353,
            "Notes": ""
        },
        {
            "ID": 175,
            "Location": "Mayotte",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.7307,
            "Notes": ""
        },
        {
            "ID": 175,
            "Location": "Mayotte",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 39.6355,
            "Notes": ""
        },
        {
            "ID": 175,
            "Location": "Mayotte",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.9775,
            "Notes": ""
        },
        {
            "ID": 175,
            "Location": "Mayotte",
            "Year": 2019,
            "What": "Population density",
            "Value": 709.7333,
            "Notes": ""
        },
        {
            "ID": 484,
            "Location": "Mexico",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 127.5755,
            "Notes": ""
        },
        {
            "ID": 484,
            "Location": "Mexico",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 62.4034,
            "Notes": ""
        },
        {
            "ID": 484,
            "Location": "Mexico",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 65.1721,
            "Notes": ""
        },
        {
            "ID": 484,
            "Location": "Mexico",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.7516,
            "Notes": ""
        },
        {
            "ID": 484,
            "Location": "Mexico",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 26.1851,
            "Notes": ""
        },
        {
            "ID": 484,
            "Location": "Mexico",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.9519,
            "Notes": ""
        },
        {
            "ID": 484,
            "Location": "Mexico",
            "Year": 2019,
            "What": "Population density",
            "Value": 65.627,
            "Notes": ""
        },
        {
            "ID": 583,
            "Location": "Micronesia (Fed. States of)",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1138,
            "Notes": ""
        },
        {
            "ID": 583,
            "Location": "Micronesia (Fed. States of)",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0579,
            "Notes": ""
        },
        {
            "ID": 583,
            "Location": "Micronesia (Fed. States of)",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0559,
            "Notes": ""
        },
        {
            "ID": 583,
            "Location": "Micronesia (Fed. States of)",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 103.4374,
            "Notes": ""
        },
        {
            "ID": 583,
            "Location": "Micronesia (Fed. States of)",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 31.4554,
            "Notes": ""
        },
        {
            "ID": 583,
            "Location": "Micronesia (Fed. States of)",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.5772,
            "Notes": ""
        },
        {
            "ID": 583,
            "Location": "Micronesia (Fed. States of)",
            "Year": 2019,
            "What": "Population density",
            "Value": 162.5929,
            "Notes": ""
        },
        {
            "ID": 492,
            "Location": "Monaco",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.039,
            "Notes": ""
        },
        {
            "ID": 492,
            "Location": "Monaco",
            "Year": 2019,
            "What": "Population density",
            "Value": 26150.3356,
            "Notes": ""
        },
        {
            "ID": 496,
            "Location": "Mongolia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 3.2252,
            "Notes": ""
        },
        {
            "ID": 496,
            "Location": "Mongolia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.5899,
            "Notes": ""
        },
        {
            "ID": 496,
            "Location": "Mongolia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.6352,
            "Notes": ""
        },
        {
            "ID": 496,
            "Location": "Mongolia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.2296,
            "Notes": ""
        },
        {
            "ID": 496,
            "Location": "Mongolia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 30.7983,
            "Notes": ""
        },
        {
            "ID": 496,
            "Location": "Mongolia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.005,
            "Notes": ""
        },
        {
            "ID": 496,
            "Location": "Mongolia",
            "Year": 2019,
            "What": "Population density",
            "Value": 2.076,
            "Notes": ""
        },
        {
            "ID": 499,
            "Location": "Montenegro",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.628,
            "Notes": ""
        },
        {
            "ID": 499,
            "Location": "Montenegro",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.3105,
            "Notes": ""
        },
        {
            "ID": 499,
            "Location": "Montenegro",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.3175,
            "Notes": ""
        },
        {
            "ID": 499,
            "Location": "Montenegro",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.8027,
            "Notes": ""
        },
        {
            "ID": 499,
            "Location": "Montenegro",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.1502,
            "Notes": ""
        },
        {
            "ID": 499,
            "Location": "Montenegro",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 21.7422,
            "Notes": ""
        },
        {
            "ID": 499,
            "Location": "Montenegro",
            "Year": 2019,
            "What": "Population density",
            "Value": 46.6905,
            "Notes": ""
        },
        {
            "ID": 500,
            "Location": "Montserrat",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.005,
            "Notes": ""
        },
        {
            "ID": 500,
            "Location": "Montserrat",
            "Year": 2019,
            "What": "Population density",
            "Value": 49.89,
            "Notes": ""
        },
        {
            "ID": 504,
            "Location": "Morocco",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 36.4718,
            "Notes": ""
        },
        {
            "ID": 504,
            "Location": "Morocco",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 18.0931,
            "Notes": ""
        },
        {
            "ID": 504,
            "Location": "Morocco",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 18.3787,
            "Notes": ""
        },
        {
            "ID": 504,
            "Location": "Morocco",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.4458,
            "Notes": ""
        },
        {
            "ID": 504,
            "Location": "Morocco",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 26.9695,
            "Notes": ""
        },
        {
            "ID": 504,
            "Location": "Morocco",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 11.4371,
            "Notes": ""
        },
        {
            "ID": 504,
            "Location": "Morocco",
            "Year": 2019,
            "What": "Population density",
            "Value": 81.7203,
            "Notes": ""
        },
        {
            "ID": 508,
            "Location": "Mozambique",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 30.366,
            "Notes": ""
        },
        {
            "ID": 508,
            "Location": "Mozambique",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 14.7459,
            "Notes": ""
        },
        {
            "ID": 508,
            "Location": "Mozambique",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 15.6202,
            "Notes": ""
        },
        {
            "ID": 508,
            "Location": "Mozambique",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.4025,
            "Notes": ""
        },
        {
            "ID": 508,
            "Location": "Mozambique",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 44.368,
            "Notes": ""
        },
        {
            "ID": 508,
            "Location": "Mozambique",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.4014,
            "Notes": ""
        },
        {
            "ID": 508,
            "Location": "Mozambique",
            "Year": 2019,
            "What": "Population density",
            "Value": 38.615,
            "Notes": ""
        },
        {
            "ID": 104,
            "Location": "Myanmar",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 54.0454,
            "Notes": ""
        },
        {
            "ID": 104,
            "Location": "Myanmar",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 26.0447,
            "Notes": ""
        },
        {
            "ID": 104,
            "Location": "Myanmar",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 28.0008,
            "Notes": ""
        },
        {
            "ID": 104,
            "Location": "Myanmar",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.0142,
            "Notes": ""
        },
        {
            "ID": 104,
            "Location": "Myanmar",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 25.9144,
            "Notes": ""
        },
        {
            "ID": 104,
            "Location": "Myanmar",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.7043,
            "Notes": ""
        },
        {
            "ID": 104,
            "Location": "Myanmar",
            "Year": 2019,
            "What": "Population density",
            "Value": 82.7281,
            "Notes": ""
        },
        {
            "ID": 516,
            "Location": "Namibia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.4945,
            "Notes": ""
        },
        {
            "ID": 516,
            "Location": "Namibia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.2089,
            "Notes": ""
        },
        {
            "ID": 516,
            "Location": "Namibia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.2857,
            "Notes": ""
        },
        {
            "ID": 516,
            "Location": "Namibia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.0264,
            "Notes": ""
        },
        {
            "ID": 516,
            "Location": "Namibia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 36.9059,
            "Notes": ""
        },
        {
            "ID": 516,
            "Location": "Namibia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.5853,
            "Notes": ""
        },
        {
            "ID": 516,
            "Location": "Namibia",
            "Year": 2019,
            "What": "Population density",
            "Value": 3.03,
            "Notes": ""
        },
        {
            "ID": 520,
            "Location": "Nauru",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0108,
            "Notes": ""
        },
        {
            "ID": 520,
            "Location": "Nauru",
            "Year": 2019,
            "What": "Population density",
            "Value": 537.8,
            "Notes": ""
        },
        {
            "ID": 524,
            "Location": "Nepal",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 28.6087,
            "Notes": ""
        },
        {
            "ID": 524,
            "Location": "Nepal",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 13.047,
            "Notes": ""
        },
        {
            "ID": 524,
            "Location": "Nepal",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 15.5618,
            "Notes": ""
        },
        {
            "ID": 524,
            "Location": "Nepal",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 83.8398,
            "Notes": ""
        },
        {
            "ID": 524,
            "Location": "Nepal",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.5704,
            "Notes": ""
        },
        {
            "ID": 524,
            "Location": "Nepal",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.5714,
            "Notes": ""
        },
        {
            "ID": 524,
            "Location": "Nepal",
            "Year": 2019,
            "What": "Population density",
            "Value": 199.5724,
            "Notes": ""
        },
        {
            "ID": 528,
            "Location": "Netherlands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 17.0971,
            "Notes": ""
        },
        {
            "ID": 528,
            "Location": "Netherlands",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 8.5148,
            "Notes": ""
        },
        {
            "ID": 528,
            "Location": "Netherlands",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 8.5823,
            "Notes": ""
        },
        {
            "ID": 528,
            "Location": "Netherlands",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.214,
            "Notes": ""
        },
        {
            "ID": 528,
            "Location": "Netherlands",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.8835,
            "Notes": ""
        },
        {
            "ID": 528,
            "Location": "Netherlands",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 26.0631,
            "Notes": ""
        },
        {
            "ID": 528,
            "Location": "Netherlands",
            "Year": 2019,
            "What": "Population density",
            "Value": 507.0323,
            "Notes": ""
        },
        {
            "ID": 540,
            "Location": "New Caledonia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.2828,
            "Notes": ""
        },
        {
            "ID": 540,
            "Location": "New Caledonia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1422,
            "Notes": ""
        },
        {
            "ID": 540,
            "Location": "New Caledonia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1405,
            "Notes": ""
        },
        {
            "ID": 540,
            "Location": "New Caledonia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.2061,
            "Notes": ""
        },
        {
            "ID": 540,
            "Location": "New Caledonia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.434,
            "Notes": ""
        },
        {
            "ID": 540,
            "Location": "New Caledonia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 13.7577,
            "Notes": ""
        },
        {
            "ID": 540,
            "Location": "New Caledonia",
            "Year": 2019,
            "What": "Population density",
            "Value": 15.4677,
            "Notes": ""
        },
        {
            "ID": 554,
            "Location": "New Zealand",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.7831,
            "Notes": ""
        },
        {
            "ID": 554,
            "Location": "New Zealand",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.3512,
            "Notes": ""
        },
        {
            "ID": 554,
            "Location": "New Zealand",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.4319,
            "Notes": ""
        },
        {
            "ID": 554,
            "Location": "New Zealand",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.68,
            "Notes": ""
        },
        {
            "ID": 554,
            "Location": "New Zealand",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 19.5666,
            "Notes": ""
        },
        {
            "ID": 554,
            "Location": "New Zealand",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 21.7338,
            "Notes": ""
        },
        {
            "ID": 554,
            "Location": "New Zealand",
            "Year": 2019,
            "What": "Population density",
            "Value": 18.1651,
            "Notes": ""
        },
        {
            "ID": 558,
            "Location": "Nicaragua",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 6.5455,
            "Notes": ""
        },
        {
            "ID": 558,
            "Location": "Nicaragua",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.226,
            "Notes": ""
        },
        {
            "ID": 558,
            "Location": "Nicaragua",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.3195,
            "Notes": ""
        },
        {
            "ID": 558,
            "Location": "Nicaragua",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.1823,
            "Notes": ""
        },
        {
            "ID": 558,
            "Location": "Nicaragua",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.8549,
            "Notes": ""
        },
        {
            "ID": 558,
            "Location": "Nicaragua",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.412,
            "Notes": ""
        },
        {
            "ID": 558,
            "Location": "Nicaragua",
            "Year": 2019,
            "What": "Population density",
            "Value": 54.3917,
            "Notes": ""
        },
        {
            "ID": 562,
            "Location": "Niger",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 23.3107,
            "Notes": ""
        },
        {
            "ID": 562,
            "Location": "Niger",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 11.7145,
            "Notes": ""
        },
        {
            "ID": 562,
            "Location": "Niger",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 11.5963,
            "Notes": ""
        },
        {
            "ID": 562,
            "Location": "Niger",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.0193,
            "Notes": ""
        },
        {
            "ID": 562,
            "Location": "Niger",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 49.8422,
            "Notes": ""
        },
        {
            "ID": 562,
            "Location": "Niger",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.1133,
            "Notes": ""
        },
        {
            "ID": 562,
            "Location": "Niger",
            "Year": 2019,
            "What": "Population density",
            "Value": 18.4027,
            "Notes": ""
        },
        {
            "ID": 566,
            "Location": "Nigeria",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 200.9636,
            "Notes": ""
        },
        {
            "ID": 566,
            "Location": "Nigeria",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 101.8319,
            "Notes": ""
        },
        {
            "ID": 566,
            "Location": "Nigeria",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 99.1317,
            "Notes": ""
        },
        {
            "ID": 566,
            "Location": "Nigeria",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.7238,
            "Notes": ""
        },
        {
            "ID": 566,
            "Location": "Nigeria",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 43.6875,
            "Notes": ""
        },
        {
            "ID": 566,
            "Location": "Nigeria",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.5025,
            "Notes": ""
        },
        {
            "ID": 566,
            "Location": "Nigeria",
            "Year": 2019,
            "What": "Population density",
            "Value": 220.6524,
            "Notes": ""
        },
        {
            "ID": 570,
            "Location": "Niue",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0016,
            "Notes": ""
        },
        {
            "ID": 570,
            "Location": "Niue",
            "Year": 2019,
            "What": "Population density",
            "Value": 6.2115,
            "Notes": ""
        },
        {
            "ID": 807,
            "Location": "North Macedonia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.0835,
            "Notes": ""
        },
        {
            "ID": 807,
            "Location": "North Macedonia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.0423,
            "Notes": ""
        },
        {
            "ID": 807,
            "Location": "North Macedonia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.0412,
            "Notes": ""
        },
        {
            "ID": 807,
            "Location": "North Macedonia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.1106,
            "Notes": ""
        },
        {
            "ID": 807,
            "Location": "North Macedonia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.3936,
            "Notes": ""
        },
        {
            "ID": 807,
            "Location": "North Macedonia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 20.2682,
            "Notes": ""
        },
        {
            "ID": 807,
            "Location": "North Macedonia",
            "Year": 2019,
            "What": "Population density",
            "Value": 82.6114,
            "Notes": ""
        },
        {
            "ID": 580,
            "Location": "Northern Mariana Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0572,
            "Notes": ""
        },
        {
            "ID": 580,
            "Location": "Northern Mariana Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 124.3826,
            "Notes": ""
        },
        {
            "ID": 578,
            "Location": "Norway",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 5.3789,
            "Notes": "Including Svalbard and Jan Mayen Islands."
        },
        {
            "ID": 578,
            "Location": "Norway",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.7168,
            "Notes": "Including Svalbard and Jan Mayen Islands."
        },
        {
            "ID": 578,
            "Location": "Norway",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.662,
            "Notes": "Including Svalbard and Jan Mayen Islands."
        },
        {
            "ID": 578,
            "Location": "Norway",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.0573,
            "Notes": "Including Svalbard and Jan Mayen Islands."
        },
        {
            "ID": 578,
            "Location": "Norway",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.413,
            "Notes": "Including Svalbard and Jan Mayen Islands."
        },
        {
            "ID": 578,
            "Location": "Norway",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.9632,
            "Notes": "Including Svalbard and Jan Mayen Islands."
        },
        {
            "ID": 578,
            "Location": "Norway",
            "Year": 2019,
            "What": "Population density",
            "Value": 14.7258,
            "Notes": "Including Svalbard and Jan Mayen Islands."
        },
        {
            "ID": 512,
            "Location": "Oman",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.975,
            "Notes": ""
        },
        {
            "ID": 512,
            "Location": "Oman",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.2844,
            "Notes": ""
        },
        {
            "ID": 512,
            "Location": "Oman",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.6905,
            "Notes": ""
        },
        {
            "ID": 512,
            "Location": "Oman",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 194.2835,
            "Notes": ""
        },
        {
            "ID": 512,
            "Location": "Oman",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.4184,
            "Notes": ""
        },
        {
            "ID": 512,
            "Location": "Oman",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.1578,
            "Notes": ""
        },
        {
            "ID": 512,
            "Location": "Oman",
            "Year": 2019,
            "What": "Population density",
            "Value": 16.0743,
            "Notes": ""
        },
        {
            "ID": 158,
            "Location": "Other non-specified areas",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 23.7739,
            "Notes": ""
        },
        {
            "ID": 158,
            "Location": "Other non-specified areas",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 11.8241,
            "Notes": ""
        },
        {
            "ID": 158,
            "Location": "Other non-specified areas",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 11.9498,
            "Notes": ""
        },
        {
            "ID": 158,
            "Location": "Other non-specified areas",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.9486,
            "Notes": ""
        },
        {
            "ID": 158,
            "Location": "Other non-specified areas",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 12.781,
            "Notes": ""
        },
        {
            "ID": 158,
            "Location": "Other non-specified areas",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.0731,
            "Notes": ""
        },
        {
            "ID": 158,
            "Location": "Other non-specified areas",
            "Year": 2019,
            "What": "Population density",
            "Value": 671.3888,
            "Notes": ""
        },
        {
            "ID": 586,
            "Location": "Pakistan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 216.5653,
            "Notes": ""
        },
        {
            "ID": 586,
            "Location": "Pakistan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 111.4476,
            "Notes": ""
        },
        {
            "ID": 586,
            "Location": "Pakistan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 105.1177,
            "Notes": ""
        },
        {
            "ID": 586,
            "Location": "Pakistan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 106.0217,
            "Notes": ""
        },
        {
            "ID": 586,
            "Location": "Pakistan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 35.0544,
            "Notes": ""
        },
        {
            "ID": 586,
            "Location": "Pakistan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.6394,
            "Notes": ""
        },
        {
            "ID": 586,
            "Location": "Pakistan",
            "Year": 2019,
            "What": "Population density",
            "Value": 280.9326,
            "Notes": ""
        },
        {
            "ID": 585,
            "Location": "Palau",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.018,
            "Notes": ""
        },
        {
            "ID": 585,
            "Location": "Palau",
            "Year": 2019,
            "What": "Population density",
            "Value": 39.1478,
            "Notes": ""
        },
        {
            "ID": 591,
            "Location": "Panama",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.2464,
            "Notes": ""
        },
        {
            "ID": 591,
            "Location": "Panama",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.1264,
            "Notes": ""
        },
        {
            "ID": 591,
            "Location": "Panama",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.12,
            "Notes": ""
        },
        {
            "ID": 591,
            "Location": "Panama",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.3032,
            "Notes": ""
        },
        {
            "ID": 591,
            "Location": "Panama",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 26.7791,
            "Notes": ""
        },
        {
            "ID": 591,
            "Location": "Panama",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 11.9273,
            "Notes": ""
        },
        {
            "ID": 591,
            "Location": "Panama",
            "Year": 2019,
            "What": "Population density",
            "Value": 57.1219,
            "Notes": ""
        },
        {
            "ID": 598,
            "Location": "Papua New Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 8.7761,
            "Notes": ""
        },
        {
            "ID": 598,
            "Location": "Papua New Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.48,
            "Notes": ""
        },
        {
            "ID": 598,
            "Location": "Papua New Guinea",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.2961,
            "Notes": ""
        },
        {
            "ID": 598,
            "Location": "Papua New Guinea",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 104.2807,
            "Notes": ""
        },
        {
            "ID": 598,
            "Location": "Papua New Guinea",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 35.486,
            "Notes": ""
        },
        {
            "ID": 598,
            "Location": "Papua New Guinea",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.8967,
            "Notes": ""
        },
        {
            "ID": 598,
            "Location": "Papua New Guinea",
            "Year": 2019,
            "What": "Population density",
            "Value": 19.3793,
            "Notes": ""
        },
        {
            "ID": 600,
            "Location": "Paraguay",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 7.0446,
            "Notes": ""
        },
        {
            "ID": 600,
            "Location": "Paraguay",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.5809,
            "Notes": ""
        },
        {
            "ID": 600,
            "Location": "Paraguay",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.4638,
            "Notes": ""
        },
        {
            "ID": 600,
            "Location": "Paraguay",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 103.3818,
            "Notes": ""
        },
        {
            "ID": 600,
            "Location": "Paraguay",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 29.1793,
            "Notes": ""
        },
        {
            "ID": 600,
            "Location": "Paraguay",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 9.6866,
            "Notes": ""
        },
        {
            "ID": 600,
            "Location": "Paraguay",
            "Year": 2019,
            "What": "Population density",
            "Value": 17.7313,
            "Notes": ""
        },
        {
            "ID": 604,
            "Location": "Peru",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 32.5105,
            "Notes": ""
        },
        {
            "ID": 604,
            "Location": "Peru",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 16.1482,
            "Notes": ""
        },
        {
            "ID": 604,
            "Location": "Peru",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 16.3622,
            "Notes": ""
        },
        {
            "ID": 604,
            "Location": "Peru",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.6922,
            "Notes": ""
        },
        {
            "ID": 604,
            "Location": "Peru",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 25.2545,
            "Notes": ""
        },
        {
            "ID": 604,
            "Location": "Peru",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 12.0793,
            "Notes": ""
        },
        {
            "ID": 604,
            "Location": "Peru",
            "Year": 2019,
            "What": "Population density",
            "Value": 25.3988,
            "Notes": ""
        },
        {
            "ID": 608,
            "Location": "Philippines",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 108.1166,
            "Notes": ""
        },
        {
            "ID": 608,
            "Location": "Philippines",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 54.3161,
            "Notes": ""
        },
        {
            "ID": 608,
            "Location": "Philippines",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 53.8006,
            "Notes": ""
        },
        {
            "ID": 608,
            "Location": "Philippines",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.9582,
            "Notes": ""
        },
        {
            "ID": 608,
            "Location": "Philippines",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 30.4759,
            "Notes": ""
        },
        {
            "ID": 608,
            "Location": "Philippines",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.341,
            "Notes": ""
        },
        {
            "ID": 608,
            "Location": "Philippines",
            "Year": 2019,
            "What": "Population density",
            "Value": 362.6006,
            "Notes": ""
        },
        {
            "ID": 616,
            "Location": "Poland",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 37.8878,
            "Notes": ""
        },
        {
            "ID": 616,
            "Location": "Poland",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 18.3605,
            "Notes": ""
        },
        {
            "ID": 616,
            "Location": "Poland",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 19.5272,
            "Notes": ""
        },
        {
            "ID": 616,
            "Location": "Poland",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.0253,
            "Notes": ""
        },
        {
            "ID": 616,
            "Location": "Poland",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.1854,
            "Notes": ""
        },
        {
            "ID": 616,
            "Location": "Poland",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.4113,
            "Notes": ""
        },
        {
            "ID": 616,
            "Location": "Poland",
            "Year": 2019,
            "What": "Population density",
            "Value": 123.7232,
            "Notes": ""
        },
        {
            "ID": 620,
            "Location": "Portugal",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 10.2262,
            "Notes": ""
        },
        {
            "ID": 620,
            "Location": "Portugal",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.8367,
            "Notes": ""
        },
        {
            "ID": 620,
            "Location": "Portugal",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.3895,
            "Notes": ""
        },
        {
            "ID": 620,
            "Location": "Portugal",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 89.7425,
            "Notes": ""
        },
        {
            "ID": 620,
            "Location": "Portugal",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 13.2521,
            "Notes": ""
        },
        {
            "ID": 620,
            "Location": "Portugal",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 28.8549,
            "Notes": ""
        },
        {
            "ID": 620,
            "Location": "Portugal",
            "Year": 2019,
            "What": "Population density",
            "Value": 111.6518,
            "Notes": ""
        },
        {
            "ID": 630,
            "Location": "Puerto Rico",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.9334,
            "Notes": ""
        },
        {
            "ID": 630,
            "Location": "Puerto Rico",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.392,
            "Notes": ""
        },
        {
            "ID": 630,
            "Location": "Puerto Rico",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.5414,
            "Notes": ""
        },
        {
            "ID": 630,
            "Location": "Puerto Rico",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 90.3031,
            "Notes": ""
        },
        {
            "ID": 630,
            "Location": "Puerto Rico",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.2608,
            "Notes": ""
        },
        {
            "ID": 630,
            "Location": "Puerto Rico",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 26.2342,
            "Notes": ""
        },
        {
            "ID": 630,
            "Location": "Puerto Rico",
            "Year": 2019,
            "What": "Population density",
            "Value": 330.7112,
            "Notes": ""
        },
        {
            "ID": 634,
            "Location": "Qatar",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.8321,
            "Notes": ""
        },
        {
            "ID": 634,
            "Location": "Qatar",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.1335,
            "Notes": ""
        },
        {
            "ID": 634,
            "Location": "Qatar",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.6986,
            "Notes": ""
        },
        {
            "ID": 634,
            "Location": "Qatar",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 305.4214,
            "Notes": ""
        },
        {
            "ID": 634,
            "Location": "Qatar",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 13.5959,
            "Notes": ""
        },
        {
            "ID": 634,
            "Location": "Qatar",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.2577,
            "Notes": ""
        },
        {
            "ID": 634,
            "Location": "Qatar",
            "Year": 2019,
            "What": "Population density",
            "Value": 243.9334,
            "Notes": ""
        },
        {
            "ID": 410,
            "Location": "Republic of Korea",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 51.2253,
            "Notes": ""
        },
        {
            "ID": 410,
            "Location": "Republic of Korea",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 25.6495,
            "Notes": ""
        },
        {
            "ID": 410,
            "Location": "Republic of Korea",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 25.5759,
            "Notes": ""
        },
        {
            "ID": 410,
            "Location": "Republic of Korea",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.2877,
            "Notes": ""
        },
        {
            "ID": 410,
            "Location": "Republic of Korea",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 12.7464,
            "Notes": ""
        },
        {
            "ID": 410,
            "Location": "Republic of Korea",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.1182,
            "Notes": ""
        },
        {
            "ID": 410,
            "Location": "Republic of Korea",
            "Year": 2019,
            "What": "Population density",
            "Value": 526.8467,
            "Notes": ""
        },
        {
            "ID": 498,
            "Location": "Republic of Moldova",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.0433,
            "Notes": "Including the Transnistria region."
        },
        {
            "ID": 498,
            "Location": "Republic of Moldova",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.9378,
            "Notes": "Including the Transnistria region."
        },
        {
            "ID": 498,
            "Location": "Republic of Moldova",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.1054,
            "Notes": "Including the Transnistria region."
        },
        {
            "ID": 498,
            "Location": "Republic of Moldova",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 92.0414,
            "Notes": "Including the Transnistria region."
        },
        {
            "ID": 498,
            "Location": "Republic of Moldova",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.8897,
            "Notes": "Including the Transnistria region."
        },
        {
            "ID": 498,
            "Location": "Republic of Moldova",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 18.4187,
            "Notes": "Including the Transnistria region."
        },
        {
            "ID": 498,
            "Location": "Republic of Moldova",
            "Year": 2019,
            "What": "Population density",
            "Value": 123.0826,
            "Notes": "Including the Transnistria region."
        },
        {
            "ID": 638,
            "Location": "R�union",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.8889,
            "Notes": ""
        },
        {
            "ID": 638,
            "Location": "R�union",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.4303,
            "Notes": ""
        },
        {
            "ID": 638,
            "Location": "R�union",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.4586,
            "Notes": ""
        },
        {
            "ID": 638,
            "Location": "R�union",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.8157,
            "Notes": ""
        },
        {
            "ID": 638,
            "Location": "R�union",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.7533,
            "Notes": ""
        },
        {
            "ID": 638,
            "Location": "R�union",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 17.6108,
            "Notes": ""
        },
        {
            "ID": 638,
            "Location": "R�union",
            "Year": 2019,
            "What": "Population density",
            "Value": 355.5708,
            "Notes": ""
        },
        {
            "ID": 642,
            "Location": "Romania",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 19.3646,
            "Notes": ""
        },
        {
            "ID": 642,
            "Location": "Romania",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 9.4183,
            "Notes": ""
        },
        {
            "ID": 642,
            "Location": "Romania",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 9.9463,
            "Notes": ""
        },
        {
            "ID": 642,
            "Location": "Romania",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.6916,
            "Notes": ""
        },
        {
            "ID": 642,
            "Location": "Romania",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.574,
            "Notes": ""
        },
        {
            "ID": 642,
            "Location": "Romania",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.6933,
            "Notes": ""
        },
        {
            "ID": 642,
            "Location": "Romania",
            "Year": 2019,
            "What": "Population density",
            "Value": 84.1315,
            "Notes": ""
        },
        {
            "ID": 643,
            "Location": "Russian Federation",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 145.8723,
            "Notes": ""
        },
        {
            "ID": 643,
            "Location": "Russian Federation",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 67.6029,
            "Notes": ""
        },
        {
            "ID": 643,
            "Location": "Russian Federation",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 78.2693,
            "Notes": ""
        },
        {
            "ID": 643,
            "Location": "Russian Federation",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 86.3722,
            "Notes": ""
        },
        {
            "ID": 643,
            "Location": "Russian Federation",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.1549,
            "Notes": ""
        },
        {
            "ID": 643,
            "Location": "Russian Federation",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 21.9565,
            "Notes": ""
        },
        {
            "ID": 643,
            "Location": "Russian Federation",
            "Year": 2019,
            "What": "Population density",
            "Value": 8.9072,
            "Notes": ""
        },
        {
            "ID": 646,
            "Location": "Rwanda",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 12.627,
            "Notes": ""
        },
        {
            "ID": 646,
            "Location": "Rwanda",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 6.2061,
            "Notes": ""
        },
        {
            "ID": 646,
            "Location": "Rwanda",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 6.4209,
            "Notes": ""
        },
        {
            "ID": 646,
            "Location": "Rwanda",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.6552,
            "Notes": ""
        },
        {
            "ID": 646,
            "Location": "Rwanda",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 39.766,
            "Notes": ""
        },
        {
            "ID": 646,
            "Location": "Rwanda",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.9602,
            "Notes": ""
        },
        {
            "ID": 646,
            "Location": "Rwanda",
            "Year": 2019,
            "What": "Population density",
            "Value": 511.8342,
            "Notes": ""
        },
        {
            "ID": 652,
            "Location": "Saint Barth�lemy",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0098,
            "Notes": ""
        },
        {
            "ID": 652,
            "Location": "Saint Barth�lemy",
            "Year": 2019,
            "What": "Population density",
            "Value": 447.5909,
            "Notes": ""
        },
        {
            "ID": 654,
            "Location": "Saint Helena",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0061,
            "Notes": "Including Ascension and Tristan da Cunha."
        },
        {
            "ID": 654,
            "Location": "Saint Helena",
            "Year": 2019,
            "What": "Population density",
            "Value": 15.5359,
            "Notes": "Including Ascension and Tristan da Cunha."
        },
        {
            "ID": 659,
            "Location": "Saint Kitts and Nevis",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0528,
            "Notes": ""
        },
        {
            "ID": 659,
            "Location": "Saint Kitts and Nevis",
            "Year": 2019,
            "What": "Population density",
            "Value": 203.1654,
            "Notes": ""
        },
        {
            "ID": 662,
            "Location": "Saint Lucia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1828,
            "Notes": ""
        },
        {
            "ID": 662,
            "Location": "Saint Lucia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.09,
            "Notes": ""
        },
        {
            "ID": 662,
            "Location": "Saint Lucia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0928,
            "Notes": ""
        },
        {
            "ID": 662,
            "Location": "Saint Lucia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.0326,
            "Notes": ""
        },
        {
            "ID": 662,
            "Location": "Saint Lucia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.2111,
            "Notes": ""
        },
        {
            "ID": 662,
            "Location": "Saint Lucia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 14.4116,
            "Notes": ""
        },
        {
            "ID": 662,
            "Location": "Saint Lucia",
            "Year": 2019,
            "What": "Population density",
            "Value": 299.6557,
            "Notes": ""
        },
        {
            "ID": 663,
            "Location": "Saint Martin (French part)",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.038,
            "Notes": ""
        },
        {
            "ID": 663,
            "Location": "Saint Martin (French part)",
            "Year": 2019,
            "What": "Population density",
            "Value": 717.0189,
            "Notes": ""
        },
        {
            "ID": 666,
            "Location": "Saint Pierre and Miquelon",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0058,
            "Notes": ""
        },
        {
            "ID": 666,
            "Location": "Saint Pierre and Miquelon",
            "Year": 2019,
            "What": "Population density",
            "Value": 25.313,
            "Notes": ""
        },
        {
            "ID": 670,
            "Location": "Saint Vincent & Grenadines",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1106,
            "Notes": ""
        },
        {
            "ID": 670,
            "Location": "Saint Vincent & Grenadines",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0561,
            "Notes": ""
        },
        {
            "ID": 670,
            "Location": "Saint Vincent & Grenadines",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0545,
            "Notes": ""
        },
        {
            "ID": 670,
            "Location": "Saint Vincent & Grenadines",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.9378,
            "Notes": ""
        },
        {
            "ID": 670,
            "Location": "Saint Vincent & Grenadines",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 22.1939,
            "Notes": ""
        },
        {
            "ID": 670,
            "Location": "Saint Vincent & Grenadines",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 14.317,
            "Notes": ""
        },
        {
            "ID": 670,
            "Location": "Saint Vincent & Grenadines",
            "Year": 2019,
            "What": "Population density",
            "Value": 283.5615,
            "Notes": ""
        },
        {
            "ID": 882,
            "Location": "Samoa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1971,
            "Notes": ""
        },
        {
            "ID": 882,
            "Location": "Samoa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.102,
            "Notes": ""
        },
        {
            "ID": 882,
            "Location": "Samoa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0951,
            "Notes": ""
        },
        {
            "ID": 882,
            "Location": "Samoa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 107.2721,
            "Notes": ""
        },
        {
            "ID": 882,
            "Location": "Samoa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 37.8641,
            "Notes": ""
        },
        {
            "ID": 882,
            "Location": "Samoa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.7941,
            "Notes": ""
        },
        {
            "ID": 882,
            "Location": "Samoa",
            "Year": 2019,
            "What": "Population density",
            "Value": 69.6456,
            "Notes": ""
        },
        {
            "ID": 674,
            "Location": "San Marino",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0339,
            "Notes": ""
        },
        {
            "ID": 674,
            "Location": "San Marino",
            "Year": 2019,
            "What": "Population density",
            "Value": 564.3333,
            "Notes": ""
        },
        {
            "ID": 678,
            "Location": "Sao Tome and Principe",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.2151,
            "Notes": ""
        },
        {
            "ID": 678,
            "Location": "Sao Tome and Principe",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.1076,
            "Notes": ""
        },
        {
            "ID": 678,
            "Location": "Sao Tome and Principe",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1074,
            "Notes": ""
        },
        {
            "ID": 678,
            "Location": "Sao Tome and Principe",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.162,
            "Notes": ""
        },
        {
            "ID": 678,
            "Location": "Sao Tome and Principe",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.1467,
            "Notes": ""
        },
        {
            "ID": 678,
            "Location": "Sao Tome and Principe",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.8838,
            "Notes": ""
        },
        {
            "ID": 678,
            "Location": "Sao Tome and Principe",
            "Year": 2019,
            "What": "Population density",
            "Value": 224.0167,
            "Notes": ""
        },
        {
            "ID": 682,
            "Location": "Saudi Arabia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 34.2685,
            "Notes": ""
        },
        {
            "ID": 682,
            "Location": "Saudi Arabia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 19.7835,
            "Notes": ""
        },
        {
            "ID": 682,
            "Location": "Saudi Arabia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 14.485,
            "Notes": ""
        },
        {
            "ID": 682,
            "Location": "Saudi Arabia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 136.5795,
            "Notes": ""
        },
        {
            "ID": 682,
            "Location": "Saudi Arabia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 24.866,
            "Notes": ""
        },
        {
            "ID": 682,
            "Location": "Saudi Arabia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.6917,
            "Notes": ""
        },
        {
            "ID": 682,
            "Location": "Saudi Arabia",
            "Year": 2019,
            "What": "Population density",
            "Value": 15.9411,
            "Notes": ""
        },
        {
            "ID": 686,
            "Location": "Senegal",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 16.2964,
            "Notes": ""
        },
        {
            "ID": 686,
            "Location": "Senegal",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 7.9464,
            "Notes": ""
        },
        {
            "ID": 686,
            "Location": "Senegal",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 8.3499,
            "Notes": ""
        },
        {
            "ID": 686,
            "Location": "Senegal",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 95.1677,
            "Notes": ""
        },
        {
            "ID": 686,
            "Location": "Senegal",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.8399,
            "Notes": ""
        },
        {
            "ID": 686,
            "Location": "Senegal",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.7973,
            "Notes": ""
        },
        {
            "ID": 686,
            "Location": "Senegal",
            "Year": 2019,
            "What": "Population density",
            "Value": 84.6432,
            "Notes": ""
        },
        {
            "ID": 688,
            "Location": "Serbia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 8.7722,
            "Notes": "Including Kosovo."
        },
        {
            "ID": 688,
            "Location": "Serbia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.2974,
            "Notes": "Including Kosovo."
        },
        {
            "ID": 688,
            "Location": "Serbia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.4748,
            "Notes": "Including Kosovo."
        },
        {
            "ID": 688,
            "Location": "Serbia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.0369,
            "Notes": "Including Kosovo."
        },
        {
            "ID": 688,
            "Location": "Serbia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.5409,
            "Notes": "Including Kosovo."
        },
        {
            "ID": 688,
            "Location": "Serbia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.1863,
            "Notes": "Including Kosovo."
        },
        {
            "ID": 688,
            "Location": "Serbia",
            "Year": 2019,
            "What": "Population density",
            "Value": 100.3,
            "Notes": "Including Kosovo."
        },
        {
            "ID": 690,
            "Location": "Seychelles",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0977,
            "Notes": ""
        },
        {
            "ID": 690,
            "Location": "Seychelles",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0502,
            "Notes": ""
        },
        {
            "ID": 690,
            "Location": "Seychelles",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0476,
            "Notes": ""
        },
        {
            "ID": 690,
            "Location": "Seychelles",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 105.4505,
            "Notes": ""
        },
        {
            "ID": 690,
            "Location": "Seychelles",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.7387,
            "Notes": ""
        },
        {
            "ID": 690,
            "Location": "Seychelles",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 12.4914,
            "Notes": ""
        },
        {
            "ID": 690,
            "Location": "Seychelles",
            "Year": 2019,
            "What": "Population density",
            "Value": 212.4761,
            "Notes": ""
        },
        {
            "ID": 694,
            "Location": "Sierra Leone",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 7.8132,
            "Notes": ""
        },
        {
            "ID": 694,
            "Location": "Sierra Leone",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.8984,
            "Notes": ""
        },
        {
            "ID": 694,
            "Location": "Sierra Leone",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.9149,
            "Notes": ""
        },
        {
            "ID": 694,
            "Location": "Sierra Leone",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.5783,
            "Notes": ""
        },
        {
            "ID": 694,
            "Location": "Sierra Leone",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 40.7243,
            "Notes": ""
        },
        {
            "ID": 694,
            "Location": "Sierra Leone",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.6314,
            "Notes": ""
        },
        {
            "ID": 694,
            "Location": "Sierra Leone",
            "Year": 2019,
            "What": "Population density",
            "Value": 108.2463,
            "Notes": ""
        },
        {
            "ID": 702,
            "Location": "Singapore",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 5.8043,
            "Notes": ""
        },
        {
            "ID": 702,
            "Location": "Singapore",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 3.0382,
            "Notes": ""
        },
        {
            "ID": 702,
            "Location": "Singapore",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.7661,
            "Notes": ""
        },
        {
            "ID": 702,
            "Location": "Singapore",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 109.8372,
            "Notes": ""
        },
        {
            "ID": 702,
            "Location": "Singapore",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 12.3315,
            "Notes": ""
        },
        {
            "ID": 702,
            "Location": "Singapore",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 19.863,
            "Notes": ""
        },
        {
            "ID": 702,
            "Location": "Singapore",
            "Year": 2019,
            "What": "Population density",
            "Value": 8291.91,
            "Notes": ""
        },
        {
            "ID": 534,
            "Location": "Sint Maarten (Dutch part)",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0424,
            "Notes": ""
        },
        {
            "ID": 534,
            "Location": "Sint Maarten (Dutch part)",
            "Year": 2019,
            "What": "Population density",
            "Value": 1246.7059,
            "Notes": ""
        },
        {
            "ID": 703,
            "Location": "Slovakia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 5.457,
            "Notes": ""
        },
        {
            "ID": 703,
            "Location": "Slovakia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.6565,
            "Notes": ""
        },
        {
            "ID": 703,
            "Location": "Slovakia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.8005,
            "Notes": ""
        },
        {
            "ID": 703,
            "Location": "Slovakia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.8586,
            "Notes": ""
        },
        {
            "ID": 703,
            "Location": "Slovakia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.5277,
            "Notes": ""
        },
        {
            "ID": 703,
            "Location": "Slovakia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.8402,
            "Notes": ""
        },
        {
            "ID": 703,
            "Location": "Slovakia",
            "Year": 2019,
            "What": "Population density",
            "Value": 113.4797,
            "Notes": ""
        },
        {
            "ID": 705,
            "Location": "Slovenia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 2.0787,
            "Notes": ""
        },
        {
            "ID": 705,
            "Location": "Slovenia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.0347,
            "Notes": ""
        },
        {
            "ID": 705,
            "Location": "Slovenia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.044,
            "Notes": ""
        },
        {
            "ID": 705,
            "Location": "Slovenia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.1105,
            "Notes": ""
        },
        {
            "ID": 705,
            "Location": "Slovenia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.1056,
            "Notes": ""
        },
        {
            "ID": 705,
            "Location": "Slovenia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 27.2352,
            "Notes": ""
        },
        {
            "ID": 705,
            "Location": "Slovenia",
            "Year": 2019,
            "What": "Population density",
            "Value": 103.2102,
            "Notes": ""
        },
        {
            "ID": 90,
            "Location": "Solomon Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.6698,
            "Notes": ""
        },
        {
            "ID": 90,
            "Location": "Solomon Islands",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.3406,
            "Notes": ""
        },
        {
            "ID": 90,
            "Location": "Solomon Islands",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.3292,
            "Notes": ""
        },
        {
            "ID": 90,
            "Location": "Solomon Islands",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 103.4452,
            "Notes": ""
        },
        {
            "ID": 90,
            "Location": "Solomon Islands",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 40.1312,
            "Notes": ""
        },
        {
            "ID": 90,
            "Location": "Solomon Islands",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.54,
            "Notes": ""
        },
        {
            "ID": 90,
            "Location": "Solomon Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 23.9308,
            "Notes": ""
        },
        {
            "ID": 706,
            "Location": "Somalia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 15.4429,
            "Notes": ""
        },
        {
            "ID": 706,
            "Location": "Somalia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 7.7002,
            "Notes": ""
        },
        {
            "ID": 706,
            "Location": "Somalia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 7.7427,
            "Notes": ""
        },
        {
            "ID": 706,
            "Location": "Somalia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.4509,
            "Notes": ""
        },
        {
            "ID": 706,
            "Location": "Somalia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 46.3795,
            "Notes": ""
        },
        {
            "ID": 706,
            "Location": "Somalia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.5498,
            "Notes": ""
        },
        {
            "ID": 706,
            "Location": "Somalia",
            "Year": 2019,
            "What": "Population density",
            "Value": 24.6165,
            "Notes": ""
        },
        {
            "ID": 710,
            "Location": "South Africa",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 58.5583,
            "Notes": ""
        },
        {
            "ID": 710,
            "Location": "South Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 28.8593,
            "Notes": ""
        },
        {
            "ID": 710,
            "Location": "South Africa",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 29.699,
            "Notes": ""
        },
        {
            "ID": 710,
            "Location": "South Africa",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.1728,
            "Notes": ""
        },
        {
            "ID": 710,
            "Location": "South Africa",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 28.9683,
            "Notes": ""
        },
        {
            "ID": 710,
            "Location": "South Africa",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.4053,
            "Notes": ""
        },
        {
            "ID": 710,
            "Location": "South Africa",
            "Year": 2019,
            "What": "Population density",
            "Value": 48.272,
            "Notes": ""
        },
        {
            "ID": 728,
            "Location": "South Sudan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 11.0621,
            "Notes": ""
        },
        {
            "ID": 728,
            "Location": "South Sudan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.5365,
            "Notes": ""
        },
        {
            "ID": 728,
            "Location": "South Sudan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.5256,
            "Notes": ""
        },
        {
            "ID": 728,
            "Location": "South Sudan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.1981,
            "Notes": ""
        },
        {
            "ID": 728,
            "Location": "South Sudan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 41.5681,
            "Notes": ""
        },
        {
            "ID": 728,
            "Location": "South Sudan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.1475,
            "Notes": ""
        },
        {
            "ID": 728,
            "Location": "South Sudan",
            "Year": 2019,
            "What": "Population density",
            "Value": 18.1064,
            "Notes": ""
        },
        {
            "ID": 724,
            "Location": "Spain",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 46.7368,
            "Notes": "Including Canary Islands, Ceuta and Melilla."
        },
        {
            "ID": 724,
            "Location": "Spain",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 22.9606,
            "Notes": "Including Canary Islands, Ceuta and Melilla."
        },
        {
            "ID": 724,
            "Location": "Spain",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 23.7761,
            "Notes": "Including Canary Islands, Ceuta and Melilla."
        },
        {
            "ID": 724,
            "Location": "Spain",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.5701,
            "Notes": "Including Canary Islands, Ceuta and Melilla."
        },
        {
            "ID": 724,
            "Location": "Spain",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.5769,
            "Notes": "Including Canary Islands, Ceuta and Melilla."
        },
        {
            "ID": 724,
            "Location": "Spain",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.7252,
            "Notes": "Including Canary Islands, Ceuta and Melilla."
        },
        {
            "ID": 724,
            "Location": "Spain",
            "Year": 2019,
            "What": "Population density",
            "Value": 93.6984,
            "Notes": "Including Canary Islands, Ceuta and Melilla."
        },
        {
            "ID": 144,
            "Location": "Sri Lanka",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 21.3237,
            "Notes": ""
        },
        {
            "ID": 144,
            "Location": "Sri Lanka",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 10.2334,
            "Notes": ""
        },
        {
            "ID": 144,
            "Location": "Sri Lanka",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 11.0903,
            "Notes": ""
        },
        {
            "ID": 144,
            "Location": "Sri Lanka",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 92.2734,
            "Notes": ""
        },
        {
            "ID": 144,
            "Location": "Sri Lanka",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.9565,
            "Notes": ""
        },
        {
            "ID": 144,
            "Location": "Sri Lanka",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 15.9322,
            "Notes": ""
        },
        {
            "ID": 144,
            "Location": "Sri Lanka",
            "Year": 2019,
            "What": "Population density",
            "Value": 340.0372,
            "Notes": ""
        },
        {
            "ID": 275,
            "Location": "State of Palestine",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 4.9814,
            "Notes": "Including East Jerusalem."
        },
        {
            "ID": 275,
            "Location": "State of Palestine",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.5264,
            "Notes": "Including East Jerusalem."
        },
        {
            "ID": 275,
            "Location": "State of Palestine",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 2.4551,
            "Notes": "Including East Jerusalem."
        },
        {
            "ID": 275,
            "Location": "State of Palestine",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.9033,
            "Notes": "Including East Jerusalem."
        },
        {
            "ID": 275,
            "Location": "State of Palestine",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 38.6497,
            "Notes": "Including East Jerusalem."
        },
        {
            "ID": 275,
            "Location": "State of Palestine",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.8313,
            "Notes": "Including East Jerusalem."
        },
        {
            "ID": 275,
            "Location": "State of Palestine",
            "Year": 2019,
            "What": "Population density",
            "Value": 827.4784,
            "Notes": "Including East Jerusalem."
        },
        {
            "ID": 729,
            "Location": "Sudan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 42.8132,
            "Notes": ""
        },
        {
            "ID": 729,
            "Location": "Sudan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 21.388,
            "Notes": ""
        },
        {
            "ID": 729,
            "Location": "Sudan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 21.4253,
            "Notes": ""
        },
        {
            "ID": 729,
            "Location": "Sudan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.8258,
            "Notes": ""
        },
        {
            "ID": 729,
            "Location": "Sudan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 40.1557,
            "Notes": ""
        },
        {
            "ID": 729,
            "Location": "Sudan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.599,
            "Notes": ""
        },
        {
            "ID": 729,
            "Location": "Sudan",
            "Year": 2019,
            "What": "Population density",
            "Value": 24.2561,
            "Notes": ""
        },
        {
            "ID": 740,
            "Location": "Suriname",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.5814,
            "Notes": ""
        },
        {
            "ID": 740,
            "Location": "Suriname",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.2923,
            "Notes": ""
        },
        {
            "ID": 740,
            "Location": "Suriname",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2891,
            "Notes": ""
        },
        {
            "ID": 740,
            "Location": "Suriname",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.0885,
            "Notes": ""
        },
        {
            "ID": 740,
            "Location": "Suriname",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 26.9119,
            "Notes": ""
        },
        {
            "ID": 740,
            "Location": "Suriname",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 10.4955,
            "Notes": ""
        },
        {
            "ID": 740,
            "Location": "Suriname",
            "Year": 2019,
            "What": "Population density",
            "Value": 3.7267,
            "Notes": ""
        },
        {
            "ID": 752,
            "Location": "Sweden",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 10.0364,
            "Notes": ""
        },
        {
            "ID": 752,
            "Location": "Sweden",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.0256,
            "Notes": ""
        },
        {
            "ID": 752,
            "Location": "Sweden",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.0108,
            "Notes": ""
        },
        {
            "ID": 752,
            "Location": "Sweden",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.2954,
            "Notes": ""
        },
        {
            "ID": 752,
            "Location": "Sweden",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.6255,
            "Notes": ""
        },
        {
            "ID": 752,
            "Location": "Sweden",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 25.7745,
            "Notes": ""
        },
        {
            "ID": 752,
            "Location": "Sweden",
            "Year": 2019,
            "What": "Population density",
            "Value": 24.4587,
            "Notes": ""
        },
        {
            "ID": 756,
            "Location": "Switzerland",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 8.5914,
            "Notes": ""
        },
        {
            "ID": 756,
            "Location": "Switzerland",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.2607,
            "Notes": ""
        },
        {
            "ID": 756,
            "Location": "Switzerland",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.3307,
            "Notes": ""
        },
        {
            "ID": 756,
            "Location": "Switzerland",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.3827,
            "Notes": ""
        },
        {
            "ID": 756,
            "Location": "Switzerland",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.9407,
            "Notes": ""
        },
        {
            "ID": 756,
            "Location": "Switzerland",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 24.8448,
            "Notes": ""
        },
        {
            "ID": 756,
            "Location": "Switzerland",
            "Year": 2019,
            "What": "Population density",
            "Value": 217.4148,
            "Notes": ""
        },
        {
            "ID": 760,
            "Location": "Syrian Arab Republic",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 17.0701,
            "Notes": ""
        },
        {
            "ID": 760,
            "Location": "Syrian Arab Republic",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 8.5546,
            "Notes": ""
        },
        {
            "ID": 760,
            "Location": "Syrian Arab Republic",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 8.5156,
            "Notes": ""
        },
        {
            "ID": 760,
            "Location": "Syrian Arab Republic",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.4576,
            "Notes": ""
        },
        {
            "ID": 760,
            "Location": "Syrian Arab Republic",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 31.058,
            "Notes": ""
        },
        {
            "ID": 760,
            "Location": "Syrian Arab Republic",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.2715,
            "Notes": ""
        },
        {
            "ID": 760,
            "Location": "Syrian Arab Republic",
            "Year": 2019,
            "What": "Population density",
            "Value": 92.9594,
            "Notes": ""
        },
        {
            "ID": 762,
            "Location": "Tajikistan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 9.321,
            "Notes": ""
        },
        {
            "ID": 762,
            "Location": "Tajikistan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.698,
            "Notes": ""
        },
        {
            "ID": 762,
            "Location": "Tajikistan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.6231,
            "Notes": ""
        },
        {
            "ID": 762,
            "Location": "Tajikistan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.6198,
            "Notes": ""
        },
        {
            "ID": 762,
            "Location": "Tajikistan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 37.0711,
            "Notes": ""
        },
        {
            "ID": 762,
            "Location": "Tajikistan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.5498,
            "Notes": ""
        },
        {
            "ID": 762,
            "Location": "Tajikistan",
            "Year": 2019,
            "What": "Population density",
            "Value": 66.5977,
            "Notes": ""
        },
        {
            "ID": 764,
            "Location": "Thailand",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 69.6256,
            "Notes": ""
        },
        {
            "ID": 764,
            "Location": "Thailand",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 33.9048,
            "Notes": ""
        },
        {
            "ID": 764,
            "Location": "Thailand",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 35.7207,
            "Notes": ""
        },
        {
            "ID": 764,
            "Location": "Thailand",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 94.9164,
            "Notes": ""
        },
        {
            "ID": 764,
            "Location": "Thailand",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 16.8235,
            "Notes": ""
        },
        {
            "ID": 764,
            "Location": "Thailand",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 18.4579,
            "Notes": ""
        },
        {
            "ID": 764,
            "Location": "Thailand",
            "Year": 2019,
            "What": "Population density",
            "Value": 136.2829,
            "Notes": ""
        },
        {
            "ID": 626,
            "Location": "Timor-Leste",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.2931,
            "Notes": ""
        },
        {
            "ID": 626,
            "Location": "Timor-Leste",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.6535,
            "Notes": ""
        },
        {
            "ID": 626,
            "Location": "Timor-Leste",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.6396,
            "Notes": ""
        },
        {
            "ID": 626,
            "Location": "Timor-Leste",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.1723,
            "Notes": ""
        },
        {
            "ID": 626,
            "Location": "Timor-Leste",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 37.2921,
            "Notes": ""
        },
        {
            "ID": 626,
            "Location": "Timor-Leste",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.4838,
            "Notes": ""
        },
        {
            "ID": 626,
            "Location": "Timor-Leste",
            "Year": 2019,
            "What": "Population density",
            "Value": 86.9616,
            "Notes": ""
        },
        {
            "ID": 768,
            "Location": "Togo",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 8.0824,
            "Notes": ""
        },
        {
            "ID": 768,
            "Location": "Togo",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 4.0206,
            "Notes": ""
        },
        {
            "ID": 768,
            "Location": "Togo",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 4.0617,
            "Notes": ""
        },
        {
            "ID": 768,
            "Location": "Togo",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.9889,
            "Notes": ""
        },
        {
            "ID": 768,
            "Location": "Togo",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 40.9984,
            "Notes": ""
        },
        {
            "ID": 768,
            "Location": "Togo",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.6528,
            "Notes": ""
        },
        {
            "ID": 768,
            "Location": "Togo",
            "Year": 2019,
            "What": "Population density",
            "Value": 148.6002,
            "Notes": ""
        },
        {
            "ID": 772,
            "Location": "Tokelau",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0013,
            "Notes": ""
        },
        {
            "ID": 772,
            "Location": "Tokelau",
            "Year": 2019,
            "What": "Population density",
            "Value": 134,
            "Notes": ""
        },
        {
            "ID": 776,
            "Location": "Tonga",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1045,
            "Notes": ""
        },
        {
            "ID": 776,
            "Location": "Tonga",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0523,
            "Notes": ""
        },
        {
            "ID": 776,
            "Location": "Tonga",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0522,
            "Notes": ""
        },
        {
            "ID": 776,
            "Location": "Tonga",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 100.1436,
            "Notes": ""
        },
        {
            "ID": 776,
            "Location": "Tonga",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 35.0728,
            "Notes": ""
        },
        {
            "ID": 776,
            "Location": "Tonga",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 8.6962,
            "Notes": ""
        },
        {
            "ID": 776,
            "Location": "Tonga",
            "Year": 2019,
            "What": "Population density",
            "Value": 145.1306,
            "Notes": ""
        },
        {
            "ID": 780,
            "Location": "Trinidad and Tobago",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 1.395,
            "Notes": ""
        },
        {
            "ID": 780,
            "Location": "Trinidad and Tobago",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.689,
            "Notes": ""
        },
        {
            "ID": 780,
            "Location": "Trinidad and Tobago",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.706,
            "Notes": ""
        },
        {
            "ID": 780,
            "Location": "Trinidad and Tobago",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.5913,
            "Notes": ""
        },
        {
            "ID": 780,
            "Location": "Trinidad and Tobago",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 20.2612,
            "Notes": ""
        },
        {
            "ID": 780,
            "Location": "Trinidad and Tobago",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 16.3734,
            "Notes": ""
        },
        {
            "ID": 780,
            "Location": "Trinidad and Tobago",
            "Year": 2019,
            "What": "Population density",
            "Value": 271.9246,
            "Notes": ""
        },
        {
            "ID": 788,
            "Location": "Tunisia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 11.6947,
            "Notes": ""
        },
        {
            "ID": 788,
            "Location": "Tunisia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 5.798,
            "Notes": ""
        },
        {
            "ID": 788,
            "Location": "Tunisia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 5.8967,
            "Notes": ""
        },
        {
            "ID": 788,
            "Location": "Tunisia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.3252,
            "Notes": ""
        },
        {
            "ID": 788,
            "Location": "Tunisia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 24.2261,
            "Notes": ""
        },
        {
            "ID": 788,
            "Location": "Tunisia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 13.061,
            "Notes": ""
        },
        {
            "ID": 788,
            "Location": "Tunisia",
            "Year": 2019,
            "What": "Population density",
            "Value": 75.275,
            "Notes": ""
        },
        {
            "ID": 792,
            "Location": "Turkey",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 83.4296,
            "Notes": ""
        },
        {
            "ID": 792,
            "Location": "Turkey",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 41.1737,
            "Notes": ""
        },
        {
            "ID": 792,
            "Location": "Turkey",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 42.2559,
            "Notes": ""
        },
        {
            "ID": 792,
            "Location": "Turkey",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.439,
            "Notes": ""
        },
        {
            "ID": 792,
            "Location": "Turkey",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 24.2908,
            "Notes": ""
        },
        {
            "ID": 792,
            "Location": "Turkey",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 12.7289,
            "Notes": ""
        },
        {
            "ID": 792,
            "Location": "Turkey",
            "Year": 2019,
            "What": "Population density",
            "Value": 108.4022,
            "Notes": ""
        },
        {
            "ID": 795,
            "Location": "Turkmenistan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 5.9421,
            "Notes": ""
        },
        {
            "ID": 795,
            "Location": "Turkmenistan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 2.9257,
            "Notes": ""
        },
        {
            "ID": 795,
            "Location": "Turkmenistan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.0164,
            "Notes": ""
        },
        {
            "ID": 795,
            "Location": "Turkmenistan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 96.9925,
            "Notes": ""
        },
        {
            "ID": 795,
            "Location": "Turkmenistan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 30.7583,
            "Notes": ""
        },
        {
            "ID": 795,
            "Location": "Turkmenistan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.8324,
            "Notes": ""
        },
        {
            "ID": 795,
            "Location": "Turkmenistan",
            "Year": 2019,
            "What": "Population density",
            "Value": 12.6446,
            "Notes": ""
        },
        {
            "ID": 796,
            "Location": "Turks and Caicos Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0382,
            "Notes": ""
        },
        {
            "ID": 796,
            "Location": "Turks and Caicos Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 40.2011,
            "Notes": ""
        },
        {
            "ID": 798,
            "Location": "Tuvalu",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0116,
            "Notes": ""
        },
        {
            "ID": 798,
            "Location": "Tuvalu",
            "Year": 2019,
            "What": "Population density",
            "Value": 388.2,
            "Notes": ""
        },
        {
            "ID": 800,
            "Location": "Uganda",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 44.2696,
            "Notes": ""
        },
        {
            "ID": 800,
            "Location": "Uganda",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 21.8072,
            "Notes": ""
        },
        {
            "ID": 800,
            "Location": "Uganda",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 22.4624,
            "Notes": ""
        },
        {
            "ID": 800,
            "Location": "Uganda",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.0829,
            "Notes": ""
        },
        {
            "ID": 800,
            "Location": "Uganda",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 46.5,
            "Notes": ""
        },
        {
            "ID": 800,
            "Location": "Uganda",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.1872,
            "Notes": ""
        },
        {
            "ID": 800,
            "Location": "Uganda",
            "Year": 2019,
            "What": "Population density",
            "Value": 221.5585,
            "Notes": ""
        },
        {
            "ID": 804,
            "Location": "Ukraine",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 43.9936,
            "Notes": "Including Crimea."
        },
        {
            "ID": 804,
            "Location": "Ukraine",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 20.379,
            "Notes": "Including Crimea."
        },
        {
            "ID": 804,
            "Location": "Ukraine",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 23.6146,
            "Notes": "Including Crimea."
        },
        {
            "ID": 804,
            "Location": "Ukraine",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 86.2983,
            "Notes": "Including Crimea."
        },
        {
            "ID": 804,
            "Location": "Ukraine",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 15.9397,
            "Notes": "Including Crimea."
        },
        {
            "ID": 804,
            "Location": "Ukraine",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 23.3712,
            "Notes": "Including Crimea."
        },
        {
            "ID": 804,
            "Location": "Ukraine",
            "Year": 2019,
            "What": "Population density",
            "Value": 75.9401,
            "Notes": "Including Crimea."
        },
        {
            "ID": 784,
            "Location": "United Arab Emirates",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 9.7705,
            "Notes": ""
        },
        {
            "ID": 784,
            "Location": "United Arab Emirates",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 6.7668,
            "Notes": ""
        },
        {
            "ID": 784,
            "Location": "United Arab Emirates",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 3.0037,
            "Notes": ""
        },
        {
            "ID": 784,
            "Location": "United Arab Emirates",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 225.2809,
            "Notes": ""
        },
        {
            "ID": 784,
            "Location": "United Arab Emirates",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 14.7126,
            "Notes": ""
        },
        {
            "ID": 784,
            "Location": "United Arab Emirates",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 2.7993,
            "Notes": ""
        },
        {
            "ID": 784,
            "Location": "United Arab Emirates",
            "Year": 2019,
            "What": "Population density",
            "Value": 116.8724,
            "Notes": ""
        },
        {
            "ID": 826,
            "Location": "United Kingdom",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 67.5302,
            "Notes": ""
        },
        {
            "ID": 826,
            "Location": "United Kingdom",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 33.3514,
            "Notes": ""
        },
        {
            "ID": 826,
            "Location": "United Kingdom",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 34.1787,
            "Notes": ""
        },
        {
            "ID": 826,
            "Location": "United Kingdom",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.5795,
            "Notes": ""
        },
        {
            "ID": 826,
            "Location": "United Kingdom",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 17.6957,
            "Notes": ""
        },
        {
            "ID": 826,
            "Location": "United Kingdom",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 24.135,
            "Notes": ""
        },
        {
            "ID": 826,
            "Location": "United Kingdom",
            "Year": 2019,
            "What": "Population density",
            "Value": 279.131,
            "Notes": ""
        },
        {
            "ID": 834,
            "Location": "Tanzania",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 58.0055,
            "Notes": "Including Zanzibar."
        },
        {
            "ID": 834,
            "Location": "Tanzania",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 28.9806,
            "Notes": "Including Zanzibar."
        },
        {
            "ID": 834,
            "Location": "Tanzania",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 29.0248,
            "Notes": "Including Zanzibar."
        },
        {
            "ID": 834,
            "Location": "Tanzania",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.8477,
            "Notes": "Including Zanzibar."
        },
        {
            "ID": 834,
            "Location": "Tanzania",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 43.8438,
            "Notes": "Including Zanzibar."
        },
        {
            "ID": 834,
            "Location": "Tanzania",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.184,
            "Notes": "Including Zanzibar."
        },
        {
            "ID": 834,
            "Location": "Tanzania",
            "Year": 2019,
            "What": "Population density",
            "Value": 65.4837,
            "Notes": "Including Zanzibar."
        },
        {
            "ID": 840,
            "Location": "United States of America",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 329.0649,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "United States of America",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 162.8263,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "United States of America",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 166.2386,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "United States of America",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.9473,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "United States of America",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.5493,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "United States of America",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.418,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "United States of America",
            "Year": 2019,
            "What": "Population density",
            "Value": 35.9735,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "US",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 329.0649,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "United States of America",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 162.8263,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "US",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 166.2386,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "US",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.9473,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "US",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 18.5493,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "US",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 22.418,
            "Notes": ""
        },
        {
            "ID": 840,
            "Location": "US",
            "Year": 2019,
            "What": "Population density",
            "Value": 35.9735,
            "Notes": ""
        },
        {
            "ID": 850,
            "Location": "United States Virgin Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.1046,
            "Notes": ""
        },
        {
            "ID": 850,
            "Location": "United States Virgin Islands",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.0497,
            "Notes": ""
        },
        {
            "ID": 850,
            "Location": "United States Virgin Islands",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.0549,
            "Notes": ""
        },
        {
            "ID": 850,
            "Location": "United States Virgin Islands",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 90.5768,
            "Notes": ""
        },
        {
            "ID": 850,
            "Location": "United States Virgin Islands",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 19.4936,
            "Notes": ""
        },
        {
            "ID": 850,
            "Location": "United States Virgin Islands",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 26.9349,
            "Notes": ""
        },
        {
            "ID": 850,
            "Location": "United States Virgin Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 298.7943,
            "Notes": ""
        },
        {
            "ID": 858,
            "Location": "Uruguay",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 3.4617,
            "Notes": ""
        },
        {
            "ID": 858,
            "Location": "Uruguay",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 1.6719,
            "Notes": ""
        },
        {
            "ID": 858,
            "Location": "Uruguay",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 1.7898,
            "Notes": ""
        },
        {
            "ID": 858,
            "Location": "Uruguay",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 93.4099,
            "Notes": ""
        },
        {
            "ID": 858,
            "Location": "Uruguay",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 20.4581,
            "Notes": ""
        },
        {
            "ID": 858,
            "Location": "Uruguay",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 20.012,
            "Notes": ""
        },
        {
            "ID": 858,
            "Location": "Uruguay",
            "Year": 2019,
            "What": "Population density",
            "Value": 19.7791,
            "Notes": ""
        },
        {
            "ID": 860,
            "Location": "Uzbekistan",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 32.9817,
            "Notes": ""
        },
        {
            "ID": 860,
            "Location": "Uzbekistan",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 16.4501,
            "Notes": ""
        },
        {
            "ID": 860,
            "Location": "Uzbekistan",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 16.5316,
            "Notes": ""
        },
        {
            "ID": 860,
            "Location": "Uzbekistan",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.5071,
            "Notes": ""
        },
        {
            "ID": 860,
            "Location": "Uzbekistan",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 28.7978,
            "Notes": ""
        },
        {
            "ID": 860,
            "Location": "Uzbekistan",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 7.962,
            "Notes": ""
        },
        {
            "ID": 860,
            "Location": "Uzbekistan",
            "Year": 2019,
            "What": "Population density",
            "Value": 77.5311,
            "Notes": ""
        },
        {
            "ID": 548,
            "Location": "Vanuatu",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.2999,
            "Notes": ""
        },
        {
            "ID": 548,
            "Location": "Vanuatu",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.152,
            "Notes": ""
        },
        {
            "ID": 548,
            "Location": "Vanuatu",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.1478,
            "Notes": ""
        },
        {
            "ID": 548,
            "Location": "Vanuatu",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 102.8368,
            "Notes": ""
        },
        {
            "ID": 548,
            "Location": "Vanuatu",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 38.7106,
            "Notes": ""
        },
        {
            "ID": 548,
            "Location": "Vanuatu",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 5.7569,
            "Notes": ""
        },
        {
            "ID": 548,
            "Location": "Vanuatu",
            "Year": 2019,
            "What": "Population density",
            "Value": 24.6007,
            "Notes": ""
        },
        {
            "ID": 862,
            "Location": "Venezuela (Boliv. Rep. of)",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 28.5158,
            "Notes": ""
        },
        {
            "ID": 862,
            "Location": "Venezuela (Boliv. Rep. of)",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 14.0452,
            "Notes": ""
        },
        {
            "ID": 862,
            "Location": "Venezuela (Boliv. Rep. of)",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 14.4706,
            "Notes": ""
        },
        {
            "ID": 862,
            "Location": "Venezuela (Boliv. Rep. of)",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 97.0604,
            "Notes": ""
        },
        {
            "ID": 862,
            "Location": "Venezuela (Boliv. Rep. of)",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.4042,
            "Notes": ""
        },
        {
            "ID": 862,
            "Location": "Venezuela (Boliv. Rep. of)",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 11.5782,
            "Notes": ""
        },
        {
            "ID": 862,
            "Location": "Venezuela (Boliv. Rep. of)",
            "Year": 2019,
            "What": "Population density",
            "Value": 32.329,
            "Notes": ""
        },
        {
            "ID": 704,
            "Location": "Viet Nam",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 96.4621,
            "Notes": ""
        },
        {
            "ID": 704,
            "Location": "Viet Nam",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 48.1514,
            "Notes": ""
        },
        {
            "ID": 704,
            "Location": "Viet Nam",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 48.3108,
            "Notes": ""
        },
        {
            "ID": 704,
            "Location": "Viet Nam",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 99.67,
            "Notes": ""
        },
        {
            "ID": 704,
            "Location": "Viet Nam",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 23.2138,
            "Notes": ""
        },
        {
            "ID": 704,
            "Location": "Viet Nam",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 11.8554,
            "Notes": ""
        },
        {
            "ID": 704,
            "Location": "Viet Nam",
            "Year": 2019,
            "What": "Population density",
            "Value": 311.0978,
            "Notes": ""
        },
        {
            "ID": 876,
            "Location": "Wallis and Futuna Islands",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.0114,
            "Notes": ""
        },
        {
            "ID": 876,
            "Location": "Wallis and Futuna Islands",
            "Year": 2019,
            "What": "Population density",
            "Value": 81.6571,
            "Notes": ""
        },
        {
            "ID": 732,
            "Location": "Western Sahara",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 0.5825,
            "Notes": ""
        },
        {
            "ID": 732,
            "Location": "Western Sahara",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 0.3048,
            "Notes": ""
        },
        {
            "ID": 732,
            "Location": "Western Sahara",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 0.2777,
            "Notes": ""
        },
        {
            "ID": 732,
            "Location": "Western Sahara",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 109.7413,
            "Notes": ""
        },
        {
            "ID": 732,
            "Location": "Western Sahara",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 27.4313,
            "Notes": ""
        },
        {
            "ID": 732,
            "Location": "Western Sahara",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 6.0364,
            "Notes": ""
        },
        {
            "ID": 732,
            "Location": "Western Sahara",
            "Year": 2019,
            "What": "Population density",
            "Value": 2.1897,
            "Notes": ""
        },
        {
            "ID": 887,
            "Location": "Yemen",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 29.1619,
            "Notes": ""
        },
        {
            "ID": 887,
            "Location": "Yemen",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 14.6923,
            "Notes": ""
        },
        {
            "ID": 887,
            "Location": "Yemen",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 14.4696,
            "Notes": ""
        },
        {
            "ID": 887,
            "Location": "Yemen",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 101.5387,
            "Notes": ""
        },
        {
            "ID": 887,
            "Location": "Yemen",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 39.2234,
            "Notes": ""
        },
        {
            "ID": 887,
            "Location": "Yemen",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.5849,
            "Notes": ""
        },
        {
            "ID": 887,
            "Location": "Yemen",
            "Year": 2019,
            "What": "Population density",
            "Value": 55.2341,
            "Notes": ""
        },
        {
            "ID": 894,
            "Location": "Zambia",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 17.861,
            "Notes": ""
        },
        {
            "ID": 894,
            "Location": "Zambia",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 8.8432,
            "Notes": ""
        },
        {
            "ID": 894,
            "Location": "Zambia",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 9.0178,
            "Notes": ""
        },
        {
            "ID": 894,
            "Location": "Zambia",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 98.0638,
            "Notes": ""
        },
        {
            "ID": 894,
            "Location": "Zambia",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 44.4625,
            "Notes": ""
        },
        {
            "ID": 894,
            "Location": "Zambia",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 3.3842,
            "Notes": ""
        },
        {
            "ID": 894,
            "Location": "Zambia",
            "Year": 2019,
            "What": "Population density",
            "Value": 24.0265,
            "Notes": ""
        },
        {
            "ID": 716,
            "Location": "Zimbabwe",
            "Year": 2019,
            "What": "Population mid-year estimates (millions)",
            "Value": 14.6455,
            "Notes": ""
        },
        {
            "ID": 716,
            "Location": "Zimbabwe",
            "Year": 2019,
            "What": "Population mid-year estimates for males (millions)",
            "Value": 6.9834,
            "Notes": ""
        },
        {
            "ID": 716,
            "Location": "Zimbabwe",
            "Year": 2019,
            "What": "Population mid-year estimates for females (millions)",
            "Value": 7.6621,
            "Notes": ""
        },
        {
            "ID": 716,
            "Location": "Zimbabwe",
            "Year": 2019,
            "What": "Sex ratio (males per 100 females)",
            "Value": 91.1413,
            "Notes": ""
        },
        {
            "ID": 716,
            "Location": "Zimbabwe",
            "Year": 2019,
            "What": "Population aged 0 to 14 years old (percentage)",
            "Value": 42.1581,
            "Notes": ""
        },
        {
            "ID": 716,
            "Location": "Zimbabwe",
            "Year": 2019,
            "What": "Population aged 60+ years old (percentage)",
            "Value": 4.5784,
            "Notes": ""
        },
        {
            "ID": 716,
            "Location": "Zimbabwe",
            "Year": 2019,
            "What": "Population density",
            "Value": 37.8583,
            "Notes": ""
        }
    ];
}

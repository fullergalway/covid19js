!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.covid19=t():e.covid19=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const o=n(1);class r extends Array{dates(){return this.__keys("date")}__keys(e){const t=this.map(t=>t[e]);return t.filter((e,n)=>t.indexOf(e)===n).sort()}__map(e,t,n){const o=[];for(var r=0;r<e.length;r++)o.push(n(this.filter(n=>n[t]===e[r]),e[r]));return o}_assertMaxOneDate(e){if(this.dates().length>1)throw new Error("developer: filter data to a single date before calling "+e+"()")}latest(){const e=this.dates(),t=e.length?e[e.length-1]:null;return this.filter(e=>e.date===t)}mapDates(e){return this.__map(this.dates(),"date",e)}groupByDate(){return this.mapDates(e=>e.totals())}continents(){return this.__keys("continent")}mapContinents(e){return this.__map(this.continents(),"continent",e)}groupByContinent(){return this._assertMaxOneDate("groupByContinent"),this.mapContinents(e=>e.totals())}countryRegions(){return this.__keys("country_region")}mapCountryRegions(e){return this.__map(this.countryRegions(),"country_region",e)}groupByCountryRegion(){return this._assertMaxOneDate("groupByCountryRegion"),this.mapCountryRegions(e=>e.totals())}locations(){const e={};return this.forEach(t=>e[[t.lat,t.lng].join(",")]={lat:t.lat,lng:t.lng}),Object.keys(e).map(t=>e[t])}groupByLocation(){this._assertMaxOneDate("groupByLocation");const e=this.locations(),t=[];for(var n=0;n<e.length;n++)t.push(this.filter(t=>t.lat===e[n].lat&&t.lng===e[n].lng).totals());return t}totals(){this._assertMaxOneDate("totals");const e={date:null,country_iso2:null,country_iso3:null,continent:null,country_region:null,province_state:null,confirmed:0,deaths:0,recovered:0,live:0,new:{confirmed:0,deaths:0,recovered:0},lat:null,lng:null,country_population:null},t=this.length;for(var n=0;n<t;n++){let t=this[n],o=0;0===n?(t.province_state&&(e.province_state=t.province_state),e.country_region=t.country_region,e.country_iso2=t.country_iso2,e.country_iso3=t.country_iso3,e.country_population=t.country_population,e.continent=t.continent,e.lat=t.lat,e.lng=t.lng,e.date=t.date):(e.province_state!==t.province_state&&delete e.province_state,e.country_region!==t.country_region&&(o=-1,delete e.country_region,delete e.lat,delete e.lng),e.country_iso2!==t.country_iso2&&(delete e.country_iso2,delete e.country_iso3,delete e.country_population),e.continent!==t.continent&&delete e.continent,o>=0&&t.confirmed>o&&(e.lat=t.lat,e.lng=t.lng,o=t.confirmed)),e.deaths+=t.deaths||0,e.confirmed+=t.confirmed||0,e.recovered+=t.recovered||0,e.new.deaths+=t.new.deaths||0,e.new.confirmed+=t.new.confirmed||0,e.new.recovered+=t.new.recovered||0}return null===e.province_state&&delete e.province_state,e.confirmed&&(e.live=e.confirmed-e.deaths-e.recovered),e}on(e){return this.filter(t=>t.date===e)}}const i=function(e){const t=e.split("/").map(e=>parseInt(e)),n=new Date;return n.setYear(t[2]+2e3),n.setMonth(t[0]-1),n.setDate(t[1]),n},s=function(e,t,n){const o=t.header;let r=o.length,s=[];return t.data.forEach(t=>{let a=t[0],c=t[1],u=t[2],l=t[3],d=0;for(let p=4;p<r;p++){let r=e.isomap[c]?e.isomap[c][0]:null,h=e.isomap[c]?e.isomap[c][1]:null,f=e.population[r],y=e.continents[r],g={date:i(o[p]).toISOString().substring(0,10),country_iso2:r,country_iso3:h,continent:y,country_region:c,province_state:a,confirmed:0,deaths:0,recovered:0,live:0,new:{deaths:0,confirmed:0,recovered:0},lat:u,lng:l,country_population:f};null!==a&&""!==a||delete g.province_state,r||(delete g.country_iso2,delete g.country_iso3),f||delete g.country_population,y||delete g.continent,g[n]=t[p],g.new[n]=t[p]-d,d=t[p],s.push(g)}}),a(s)},a=e=>e.map(e=>(e.live=0,e.confirmed&&(e.live=e.confirmed-e.deaths-e.recovered),e));class c{constructor(e){this.expanded=function(e){const t={},n=e=>`${e.province_state}|${e.country_region}|${e.date}`;var o=s(e,e.confirmed,"confirmed");return o.forEach(e=>t[n(e)]=e),s(e,e.deaths,"deaths").forEach(e=>{t[n(e)]||(t[n(e)]=e,o.push(e)),t[n(e)].deaths=e.deaths,t[n(e)].new.deaths=e.new.deaths}),(o=o.filter(e=>e.confirmed||e.recovered||e.deaths)).sort((e,t)=>e.date===t.date?e.country_region===t.country_region?(e.province_state||"")<(t.province_state||"")?-1:1:(e.country_region||"")<(t.country_region||"")?-1:1:e.date<t.date?-1:1),o}(e),this._lastrefresh=0}data(){var e=new r;return JSON.parse(JSON.stringify(this.expanded)).forEach(t=>e.push(t)),e}refresh(e){var t=(new Date).getTime();return"undefined"==typeof fetch?Promise.resolve(this.data()):t-this._lastrefresh<6e4?(e&&console.log("skipping refresh (too soon)"),this._fetchpromise):(this._lastrefresh=t,this._fetchpromise=fetch("https://covid19js.com/dist/updated.json?"+t).then(e=>e.json()).then(function(t){return void 0===this.last_updated||this.last_updated===t?(this.last_updated=t,e&&console.log("skipping refresh (no new data)"),this.data()):fetch("https://covid19js.com/dist/covid19data.json?"+(new Date).getTime()).then((function(e){return e.json()})).then(function(n){let r=o(n),i=new c(r);return this.expanded=i.expanded,this.last_updated=t,e&&console.log("covid19 refreshed "+t),this.data()}.bind(this))}.bind(this)),this._fetchpromise)}}const u=o(n(3)),l=new c(u);l.refresh(),e.exports=l},function(e,t,n){n(2);e.exports=e=>{let t=JSON.parse(e.values.covid19js_decompress());for(;t[0]>0;)t.unshift(t[0]-1);let n=e=>{let n=JSON.parse(e.covid19js_decompress()).map(e=>e.map(e=>null===e?null:""===e?"":t[e]));return{header:n.shift(),data:n}},o=e=>{let n={},o=JSON.parse(e.covid19js_decompress());return Object.keys(o).forEach(e=>n[t[e]]=o[e]),n};return{confirmed:n(e.confirmed),deaths:n(e.deaths),isomap:o(e.isomap),continents:o(e.continents),population:o(e.population)}}},function(e,t){String.prototype.covid19js_decompress=function(){"use strict";var e,t,n,o,r=[],i=[],s=this,a="",c=256;for(e=0;e<256;e+=1)i[e]=String.fromCharCode(e);if(s&&"string"==typeof s){for(e=0;e<s.length;e+=1)r.push(s[e].charCodeAt(0));s=r,r=null}for(n=t=String.fromCharCode(s[0]),e=1;e<s.length;e+=1){if(i[o=s[e]])a=i[o];else{if(o!==c)return null;a=t+t.charAt(0)}n+=a,i[c++]=t+a.charAt(0),t=a}return n}},function(e,t,n){e.exports={values:n(4),confirmed:n(5),deaths:n(6),isomap:n(7),continents:n(8),population:n(9)}},function(e,t){e.exports='[9ā9,"Province/State"ĄCountry/RegionĔ"LđĤLĢgĤ1/22Į0ĬĮ3ıĳ24ĶĄĭ25ĺ"ļ6Ŀļ7ŃĮ8ņ29ņ30ŌļĲĄİŐĤİŖő"İĵ2ŘİĹŜŕ/ľŠŒ/łŤř/ŅŨİňŬ/ŋů1ŎŲŔť1ŗš1śŝ/1şŽ1ţƁŧƁūƁŮƁűŽŜĿŖŶũįƎĴƓĸƕƃš2ƅƙƇƙƉƙƋĤĵƐśĿĵżƢ/ƀƩƘĄĵƛƮŪƦ/ƟƱơƱųƳ1ƤžŹƸƨƸƫƸƭ"ƣưǅžƝƸƵǈ1ƷǈƍŨśƼƒǒƔŨAfghanisĐģĄAlbǝiaĔ41.Ƃ33,Ŝǭ68ǰ"ǤgerǨĔ28.0ǯăǬ6596ǣndorrǩ,42.506ǰǬ5218ȉgolȏ-ƻ.Ŝ27,17.873ăǷęigua ǝd BarbudȏȩȀ60Ȝ-6Ǭ7ȇ4ǣrǹȱnȡ3ǿǫɇ,Ɇ3.ɇ6ȧǷrmeǞȏ40ɂ91Ȑ5Ȁɒ2ǣuǠȎlǨn CapiĐl TǺǻtȌyĤAɮĚaɱɑɩ4ȭ5Ȩ49ȀŸɋ"New Sėth WʆesĔ-ǯȫǴȜƂǬŜ9ǶNȌʚǺɳɼȍɸʀʡŸ.4ȖɋŻɤ845Ȉ"QueɠsȠȊʡǾʐɛȨ5ɘʒʘuʚ ʃɯʆǼɖ34.9ǾʌŻǿɃ0ɜTasmǧȡǫʷ5ʾʍɩ97ˣĄVicɿǻɑȪ8ŻȈſ˛ȇ3ɧ"WʟĒrɳ˕ʅʇʡ̂˜Ȕ˟Ƃʤ0ʌǷʄ˹ǪȪ516ɬſȓȔ̃AzǺǦijǝǪɤſ̂Ȑ̚76ȯȺǜ˨ʠǱɩȁ4ǰ-7ȪȮȖĄ̳ȎĊǽ6ȀȦʌȔ̠́ǝgȠdʟhǽɘǴʌ9ɤ3ʿǶȺȼaȋ̶Żǭʪă-Ȇȓ̺ɬ"BeȠrɮĔˎ.˲9ȜȦ̏˚́ͬĠumͰʼǯ͛ɠ̈́,ʏō̽Ǳ.̂5Ȝͪh˒̩Ǳ̚ſɬ͗ʷǯˀBȟiĉȡ̜Ȥ͗ɬɗȓ8Ȭ́osɡȶȊ HǺ̤ȞĉɐǪɘɦȆȨȪɛɦ́Ȏzilʵ˛2͙ɖ̛˜Ľ͛ͮneiǪȓ͙ȗ̟7ȦɜBulgȻ˘ȑͲȂ̷ʷ8΋́urkĊȵF˦oĔʶςǵɖȘɚĕabo VǺ͐ϫ͆ˎΤɖςȀǫΌɵmϴd˘ȣ5˟0̜̀ɜЃǺoĢĔɘʽʦȘ0ȚǣǥǺĐĤɵɐȿͰδ΀ϯΞ5̰̕BɾǟʛĖlͼbϚʏǾȦϯϿŸ˳"GȎΫĆĊČs̶3θ48ͤŸȒ6ȅ̕MǧɿǦТͲɃͤʹȫŻȯʔʖЪĘsw˶kǪϻȅ̻ъʷɇјʕfėȊˇȸȷ ĦbȎȋrёŻЉτθɃʒʬvȵScotϚ˛ǴΡȖͲ4̺ĄOęϙϪ,υχɅϠΉςͩоċe EdwȻȸIˆȷѡȓųȧ΢ɔΌ˂ebecͰȒͣͤȭͧκ"S˦kđchʕΐȢȕˬ0ȯCɠ̋˔fǻcǝ ĞpubɱҰ,͆ɇƻǱɤͣʒCǜdϫʉ˭̞ǿȭįĕhξē˙ɩɛ̛ɖ7ȘҋȰΎόӧϦГǬ8ĽȧƻȪį6ʒ̧ͫĊīȐ̫ӺʺΞǫȑӧĪqԄГɤ̔ϒȨˣȫ7ʒFujɲͅȀ7цȨɁʹԘĄGǝsuГ˻ӄȃ0Ǭ̔ϮкȴngȋԵ͓ΉǫӼ͡ȑҊԦԴgxӵϿӺʹԕӤΤ̃GuizhėԞ˼˭ԕ͆ȬхĄHaϦǢǎ͢ζųʏԘˎՙҭϋГʏ˭ȃΞʻˀέξĪԜ͍̙ʤ̞Ͷ̰ƂեɐǢʣΤ̞͡ɇʒHĪ KĪǽȒϐρՙӑէ,ō˜7ʿԢȒȦйHĘΐͶɇЋԢɈɄΌInϊr MĪΚɢ˛ӄσƻδҊΌJɲgԩГҲӰɧƻʏʾֲ͍̕ՃǽθſԢɩϒЙ"ֲɱǢ̺əъֹƚ͢ςĄLǨĢԐȐʨ9֓шəɄьaӌԪǱȒ̜ˌ֮͋ʓԄՃȏуȤ̱̞ӂ̜ѸˁԄǜӵ͙҉ș΄˰ךˀSǜǝ׀֏ɩǎȩՈԗԯĄ׿ȷև֏͆˚еƻǿſՇҸǜԵ׶ӸȤИȨȚʷʎ̃؋n؂׭Ч·ƻ֕˝ͩS˶Ύΐ֐ɇӰԕȒӰȁĄTɲԜռ΅̔ԉ̾ג"ظҮtؚׯȧΤȀ˝ʒXĊղԸטǭŸăҕĸ؉"YĘջǽ̀ԥųǬхɜZҾَԅŊǭǵնԒʪӜȟoЄϚȓͳӯρ˱ǶĖԵϵ(Ъazzaĉlle)ʡ֫ɒǰ؞֒Υ"ٷȞ (KĊsǜsaڄĕΧĐӎ˶ȏբхͤǵͲˎ٬Ē d\'IvoirӪ̚ɋͥͧزڌćđϚ؄ˍȤĄDǨmĢȸҙр̶ڴՍsқ׿ipОӑȡ80ĕypͮт؄ƚɋʣȑāĕ̤ҽві֒ڹʊǶϨćқҢѭۃDɠ˨ϤĔɇȫ˝ȈɆ˜ؒԦڭɠѭĔӰͲȕͤϛѻǰʿ׮Ȯ΄ȓԯΌDԜϴ˒ӵȣӺӮϛȆض"DٮĊڜɳӏӑӓϫӤ͙Ҩ˲ǳе"EcȴѴʵȫ̂ΡԠ٧͸ܤgۑلĄEɺҹlѾܨȨɘɉԌ-وцȅܴqȴ˸ǨɺՌĊeɀȓܴɾڭɀ؄ܽ֏բӺǶEǠזȏ΋ȓךڈ̸˽ܴѝڶǞˉϻįʌ̎ʸζܤʚġɷڝǭˮɣϟ˱ĄFԃʵȪӰ͸ȩǿȕ̕ݸn۹ݷڭċʛ݉ǝȏ"FмČГ˜ϝͥɘŸϡތކҽ Pȟyϊs˘ȢθɉӼʎʷȕΌՌͬ͞ėpӪΞĽɖۯ΋ǯĄэy҂ĒʵȒӺ۠ʾǳ̝ĄљɴʞԷޠǲ͗ҋײəțĄĞĘġǢ-؞ѷɧЉȤʊء՛ęȹȻʮڂmʁη˜ޱ޻ФҸt֦ߝ΃țԟɄޱɘٖ̔эr҃Ǟ݄ޮ҅ǫʌɆ԰ĸɬʸȤȦȈ֕ŻɜԧϴߑʼȁԼם9ʒԧٯɀˏͨϯɩٖ̂GeȌĠɢ։Ƃɋ׌͙̱ԦǺ˨nߡкؗȏȪࠎ݂Ȣ͇3ͩл˄ޏݔԟԌ؞ԈǶީĒ˨ȠӠͲǵ߻Ες߮Գ݊ݱࠎ֓-ʏ̱ъՀyފʡݜ۠"՚ɸ܍ǿ˱Ÿӯ֕Ϡͩփlyʗ˄ǪǬΠȃȒʾܯփȊϣ˦ʡ8͆ĸǎ֌ԵȻߡʊܢ˟թȁǶIČބԀ˜ȖɧȢʏИࡆ֢ІދࢋĢʟޠɤԠʪԢδȚࡿмĤIȎq࢚ڭބͱΓڰθ˝̃ҢȎ࢚ͬɹࠨJa˨ڜܝǭӄ۲̽Οࡕࢭpΐ׈Ȍȿռʨۗϻ̃KټakhǠΐхʐȇӕ͆˝уĄKɠࡑʡԒςȈ׭͗߀"ֆݐ,ʗʙ࣑͒uҟɸǽթ̮ڢ࣑yɍyzࣈ׋ʨЋɋԘђɕĥđΜͰՖɉࠃ҅ȁͩLҭǝВ֏Д˭ȧ׸ࡲـהҮ̘ӕʷǾࢆֻŊ̕הүhĒnǠϋ׋Ȫ׃թखɸخɡͰ؄̱ɋՅ˼ǶLuxeЄėɍǪʏՓǰْ͆ˀэȿϘsӌѵϯӤъăࠀࡲҷэȠyޟȏȒ्̑޵ʆІvʟސȥȜҵįйैН؃ޑ̟۠уՔ"эϣɸ˩ǽ԰ˣԮ˜ɣΌ।ЫͯϾɤɬЧݍॣeՃҁԹʹ߻ų्ș८ȟȋѾմǫ̜Ǳǿ3̱ȯ֧ɐॺȐܼФȪɔɜ঍Ȟ̌ȐՖ̝ЊДʸকĢचğćǪॏ՞Ƕ֧ćcএ̎ɉ؆̼ىƚ߁ࢮiбȡį̰̏Ȩɓ߈߁eࢹοঈ޿هρ̕Aͮѐঽʮrۨϫ्țࢴԒ͙Ђ࡯ӌҐʶ̜࣌Ɇ࡚ȯجߛэߝɠࢱЋް΢ؽȜșǭ࠱ȈɩŊŻঽʖZ݋ބ-ݴ͗ȕη˛ΤˀNڜȎȳɀ޻ȅڰٔˣͩৼǹीɁɃԠ,ݿ˼ɜਇǺ˘࢈Ӻ਍ə֒ʫʭʛэČ߅ɢȄɄࠃɈ࡫߁ȌҟߡɃʷԔɓǴȯOࠦĤPࣅǟǡԑΉਘӕ΅ʾ̃ਲɐ˨ĔǿϼɖێࡁׇਲӐȵ߂݉ϊȡ؏չ̬̏׳ਲ৾ȴߡߒࠓ৤ݜҊɒĄPǺעࡌ͢ӯݠ׺ąӨɱpɷޞ਱ȟҤґࡧǎʺʏſӮąʭuϘীȮΉĂ੃ࠁˮˁđȻǽࠖ˭১Ǭț܄"Rٮ१ɨ६࠱Ǳ̀ъΌRɮोĤRҟȊΝ६ض٦ȬઊҹĊߨभcЇδӄڰ਩˱ԡҸߚߨ˵Қߛѯʮ ࠳Р݊͠ҲʽѤʨȬثӍ߳ĊҐ׌ࠎĸ؝ˬ਌યȾi˔Ȏ঵ĤSɠğʆϫ˛ʎԥȢ૘șː̥҄ˋʌ؞0̔ড়eyҽͬڂ̶৴ਗ࣌ߖʎثԄɶȌޮȤǵȗȁܪ޴ҸlĈਲ਼ɢˡࠣ՞ঋ؊૾॓थঙǭ̛̞̀ך̕ʘ࠾˘؄șɧࠀǎ࣌Ҹ࣡ӉӋɑɤЉךףफ़ଐࢹ΃৴؊ǻѰǝһ૒ȾΐʶऋȜ֐ȚহҸ॥ਾӪδǎ̻܂ИોSwe͐ǢҸўt̤ো੮ॅțɬǿįࡕ˥iછ*Թˤǝپଉ۳ঊă˚ȫΤΌT׶ބفoȞੀߋଡʼĸୠǻǞȿѮΫToǦ୦ԕəɦɅۯįްفߏઘطϣk૧Г࡚Ȗउ৬̺ǶUϘજĤUk̓ϊǪউݓ̎ײˀUǞĒȸ৆ϳҜmڬđ॔͹ɞମஎசୂօԄȋͽ֏։ˣ୹˛֒̔ϲyࠦ ۧȷ͠΅Ż̻˼Ȥ˭ˀӝǝϊɺஹȊ̶ޥуגߒΉԀࠏ঴ɰĐीঊݲ߮ڱϏˀۧқofߩǢ˭Ȥঊࢆ˛આ̃঍tۆȍħȨ͆Ԙ৤̝٧ԥߖу˼˙Ζ஘ͮ৿੖࠱ȓįɅߖШΌUSԫى؜ࡌْׅĄUzҮϥࣰࡦ਷۠ࢃ΋դ"Ϸϊz˃࠿ऐȑੜɆϻцɜ˵etਾĤZࢮ૑ࠕʷЍুǾૼZiЄϳୁˉۏܔܖǞӌࡀߺޱǬуՋކ͞਀ّ࠮ۯι޵oپٯ߷ʵଂʿଡ׸ș׽ث࣬˘ଢ଼ێŜ۠ɒ˜ȇՓطఴȌ-ंजࡱԗȑ؆ޕͲ͈ઊͫɱ̤ϫӽӼ͙Ӧץ਌ǎъૢȚ࡜ĸݞΑųۏŊࢅ֏ȩǾआঊȈхŜ৫Ҋ৷ʿ౿ґ˼ਕȆʹăɚਕ̝ȁɧ̝Ҋɬ̝ъಠ७ɋԀǾȧԀԠȈȅțನଠಫȆ׃ъǯನ̱˳ɛųषϒ؆ɛǯಠԘࡏӭ˝ӕ̰ು̽ಷ̽ҋɛ̰ۏೋȭೄԠಝ̽ࡲ೐͗ೕಥ̽ՇೋۚɛێۏųȬ׏ɇ଍д௭܇ȨʹכҗӼˎŜ೨Еףࢗ઒ડǱ͗כ૤य़˽ʺȦŊܻʪʦʎκ̜৘η௣঺ɣӼɊऩȕųǱ̜ੜࡅʎԕؔ؝ʸ̞೅ಃƻЧ઒ԘȧȦʹۏΊ৷ܟ৮ǫȁʌʊИߕܟ১ɦੜȖ˝ԼԘʦȮ഍ȩ́әദ̷уऩȬǴ؃ݡ˽اɦ૤̷ڟआࠂঐʽɜADʂEʂFʂGʂLʂMʂOʂRʂTʂUʂZĤBAൣBൣൎ́൐́൒́ൔ́HൣJൣNൣ൚́൜́అ́൞́Yൣൢĕ൥ĕ൩ڌ൭ڌ൱ĕIОൖĕ൘ĕ൵ĕ൷ڌ൹ڌൠĕൿĕඁܔ൫ܔ൳ڻKĤDඏܔඓDඛECĤEඝE൯ܤඕEൻܤൽތඋݷඟތඕGඃк൧ԦඅGඝGඉкඤGඑкQĤGරඵG඙ࡖ෉HඕHඵH඗"IඅIඝIඍේ෉I෋ĄIඕIඳIඵJඤJඓJPĤKඝKදKළKඕKWෲඛL඿ĥඪדභĥඡדඕLඵLෙLVĤMලMขॣඅMඝMදMฆॣ෉MඕMඵMෙMฎ޵XฏෑMඛNලNඝNදNคN෠NඓN෱߁ඛOඤPලPඝPදPළPปP෠PඵPෑQලRඓRඳRෙR෼؊ලSณSඅSඝSදSคSปSඤS෉SඓSඕSลҸෑSඛTඅTදTළT෠T෉TඕTඵT๗فඛUලUදUෑUඛVලVඝV෉ZලZඤZ຃Ę͐f݊ӟǣคAඳA຃BคBඤB຃CදCปEළFඓGඇGคG෠GูкෙG຃IඤKคKເ෉KෑLඳMළM෠MඤM຺M෤ॣ້຃NณNඕNෙPඇP฽ඕP຃S฀SළS෠SກณTඹTปTඤTඓT๯VෙWඳYඝY൞]'},function(e,t){e.exports='[[10ă0,Ăă1ĆĄ2Ċă3č04Đ5Đ6Đ7Đ8Đ9čĂĝĉć1ČġďġĒġĔġĖġĘġĚġĜć2ąĲĠă2ģķĥķħķĩķīķĭķįķıĎĴĎĶ03ĹŌĻŌĽŌĿŌŁŌŃŌŅŌŇđŉđŋ4Ŏ4Ő4Œ4Ŕ4Ŗ4Ř4Ś4Ŝ5Ş5ŋ5Ŏ5Ő5Œ5Ŕ5Ŗ5Ř5Ś5Ŝ6Ş6ŋ6Ŏ6Ő6Œ65],[""č6Ė3ďƏ,ąƝƜƟƞơƠƣƢƥƤƧƦƞĠĆƬƫƮƭưĒĒĔĘƵĆĠĖ2ĉĸ,ƼƾĒ2Ʋą40ƑƓƕć6Ř6Ś6ĜƩƨǑǐǓǒǕǔǗƽĊĆČ2ďƙ,3Ěš,ųǤĔƃ,ƍ,7ą7Ė8Ň4ǆƔčǬǵŋ7ČǘǻǖǽǘƯƯďĩģģĭĭĜĳƽąȉǁƽƘĘŭǤĒƅǫĒ8Ę9Ĵ3Ȉ0ƻ3ǅƒǴć7Ő7Œ7ĔǼȪǾȬȫȀưȯȯČțǠĜŷǫĔ8į1ĥƙǳǈăǮǵŘ7ĚȫɇȭɉɈɋƣƻǙ3ȿǵŜ8Ş8ĉɌɘɊɚɈȱȰưɐȡɀ08Ŏ8Ő8ĒəɪɛǽƯČįȄĆȇĆĜ3ĉ3ƲǧĖǌǫĜ9ĭ2įƁȎƘȝɑć8Ŕ8ŖȗɬɫʏɍɞɝƫȖĆĚ2ĖŵǫĚɨƷĩ3īȔ19ǀ3ƐƒʈŚǰčșʬɗʎʰʐʐɮɏ,ȓ,ıɵ2ǆć9ɥŜ9ŐʤǑďƲʶˇˆˉˈˋˊˍˌˏˎˎɻĆďƾǜƹĚǡʶĚŻǩĔƛʾƷģɸɲƻĞʘĘȟ˩ȷţɻǎǩǎʼă9ʊˀŖɿʱ˹ʲƧƫƦʓʒǠ́ǧ˲09ʪˀŇćȬɷʵǜ́˅Ǥ̑ǧ̖̘̗̒̔̓̕ɾʸƷ̝ȼ˔̠1ĩĩʗȋąʦʶɻĉɼɅʸħťʖǀƺƽǨɶ9˲Ăŋʫ̹0ĹĂďɜǙ͇͉͈̎̓͂̈́͆ͅǞ̏̔ƶ͏̜ıīȜƽȈɵȐČűǩŘ˔ǲʨȝđč̻͠ĿĂĖ˻ͨɚ˿̈́͌̓ĖƶĞͱĴƹǜ8̸0ŘͣĂŅĂǏ˼ɞȳː΂ˑ΃΅΄ƶ̛Ͳǚ1ĠĠ̤ƽ˦ǠĖůǤƵĉ˃ĢĠ̳Ιƽ2ɵ˝ʦʧāȝͲɣ̉ΌĊΌǺ˺άɌ͈΁͌̐ĖΉħȆƽ˙ɷǧČǪʭĢĴǄʇΤĻΌĽΌȩέψǐ̎͌ıħʗƻĜ4ĉ˝7Ǳ˔ĠɤƽũǠ̽Ǥ͡Əȹʢȝįƙģƍƹȝ˕ǡʗɖĒʦϙťȦρΌŁΌŃΌɆωϺǼά˓̛ı΍̞̣ƽ˕ϬηʶƲƳƚƴʻɡΩʣΩȉ̹̳ͩЖϻǕȁ́ˉϳƼДσȍЗͩȞǠǞǞΓĉūʶϑȶ͙˟ąʉ,б˴ƷĴдʣĩдƺȋ1ǀнΝʗŽƽ̭ʁĔȟцˤ377НͥʘВĘТИəϽѕ̑ŅĆεȊ̴уХНͼΞΩȟѓѤђƢ̎ͮљɲϳɶѢ̾ǟѦѥ̫̀ǩѵ˓γ̜Ģѝ2ĘѼΒѿǥǥ˯ɂɂɖѬυ̨ɩ˹˿ҌѳҎʴϤЅϞĊ͒Ȝȋȴ˨ǠпɶƳǨǌĜȺŁʃĢţљʋɲк2ſη̢ǠǄɷȦɠǇѢϵъѢϹѱҹψƫίǤѬ̉ǄΩϒѲҺǔҍҍ͇ϳǣ̹ҥӌҊӅӄɉϋ΋ĴЂѺӗйϚуӊͥϛӌёӑӐƞӓͭǫ̞ĥʗǀĔя˚Ƌвɾĥяȼ6ӊͼΔ̹͚Ӣάʴ̈́ˆ̟̟Ȍцɷ˜ģǥ̢ƸǜăǠ̳ъλ̳ϕĻΛŹ͓ǁϳԆȝʚӸ̀ӡԜӆƭЂҶӁ͚ŹǤɻĚȨʛвďȺʸ1Ԗυ˝ӸͧԝԴƢˊƶǝʶϓϓλȘČΘѾ1Ӯ1ʍĳԮЏӸϷңԘ;ӺՎʑ͋ĆЄȉǟӁǪԨ9̷ՈȝϢՂĶՂΫՏբɬ̌ǞϳՃ՜υƛǐӇҏծխհ̀ͬ̂Ӧƶą̈̄ҶҁԫȖь՛ՂϵǊΩɼգҺҼ͉͊Ľ΋˕ȋȐąŽ̸˯̹Ƕ֒՟ǹԵ֗ɎĒͰʹ͕֝ȴтȦʸĭБн͓ӫ̵ʆ͟1ȤΩ֓ȝ֡֒χլկͅ΄΄̗˟Ѷѵ͐ĘʜвѹˣΐׂѾōԋȵ̩ǩȓ֚Ļ׌ʖƹѭѼЩȍšƲǹ̸ɂ֒ŉ֫Ϸ̭ք֗Ʀ͈ĚΉŉ̡Ҳ֮֒̉Մךɖן׭ǐԷֿҭ֫ɲʖћĳ̸ϙיΩɦ׻ӏ׮׭ȲѵȻ̞Ġζ֫׸ͥשҧ̹ʍמ؎ʑեЛѵȈ͞ΣՄͼ؊̉ʭ؏؜ƟƴǛѪҭ̳ʁԺ̸9֕ךˡ̹ˁǑɝіد͍ذز͍ˊ˓Ψײ̥׶ǜӫʗɵϮШʶČ֡ϕĊεĭбĸƻҫȟ˙ыفǧŌئυשзȝ9Գ؝מ؁Ӥئלةͼՙ׿ɫͫʵˊע״׳ȍ͚֡ՀĠȴՄ˦ĜƉͶ͟ĳךٔŅՆ٢ٻȋͅƶįϨȎǤλӴ՛ĳĹĳԑٙ͡ٻخرρĳĿĳŁĳӠڌڌȱڐɣĊĳŇлټϺʔˋ־ԀϪʶƚĉְ˝ٺǝʗ˚ţЋĘƋقũ˲ƺĶƺڈӿ̽пΗՒׇȔ֮īʚٶЅѽ˸ɸǃڛŭ֎ѣƃ̫ƛȤďыҠѣʋаʫاąˁĒ˴ۛƉ֢ď̆Կҧ̆ȘԬ̆ɾ۪ۭۙ۫ʸʭՙۛ۰۳۲۵ۯ۶۱۷ۺ۹ۼ۴ۻ۾۽۸܀șڶײڼںڔ׳пƼʠԺǩʜۛ΍΍ħٯɼʣ˦ǜؤҪ˕֡Ξ˩ҭōƘҶɸȳʚʠȏȳԨǡ̧׬ǡ˩جțцٗȵɵ١țϑԊǄǃĞϒܻЩ̟ϒƲпϒǢՄفČšΓؤšǢѡţĔݏڧΓԡǣŧ݈тũϑɔЫϓ͡ŵ͙ъ܅ٹӗڼڞȉѸѾҫԨΌȚģЪՄǜΨǁ˩Ԋƙ˩ƗǠʫϒג݊Ǣɼŭʙ0ǧ݆ŵȶչ̰ŻϓȷŻɺ֎ցſ͙֬ſǧɂſʙޕޘޗޚΕޛޖޜޟޞޡޙޠޣޢޝޥިޗĘſٴΣىڜݤĸڈԹϓ΋˙ǧҠаυǛοħǨ֫ʹǀނΐӫȍǝȈ͚ʘƻցѼǜلʁƻوՅʭΞǜجΞ˕ߗߚߙߙǀ˃Ξƹܳߠ͕ߡߥߤߧߣߩߢ߫ߦߪ߭߬ߨ߰ΞɵŌҚǞȼڶȍĂڹڜҪ߽Գ֚̎ءؔڂݎ֎ފΕǩԎ͛ɽԪࠎҧʍ۰ۛࠓԭࠕاࠖΗ࠙࠘ࠛࠗࠝࠚࠞڜƷıГߺࠥȃʀࠨǛıǟȼȽ࠮͝࠰ȼܔīʠ߹Ń߼߻ؤ࠹ȈƘݠԩΌΎƻ͸у˫Ʋ܍ŷ˟ׅǹȹ̟ǰĔɿŉˤͽĩȼ΍޿כǛ֤ǁΚƇࠪܔՂ˔ОōϤѭ࠭ˣࠬƙࠫӋɸʟݯɸĭ࡯͝Ϥӷɸ͚ࠫȼࡷʦȚԆʦˣԙࡽ˔ࡿȷࡸ࠴тࢄࢁ࠴ʢʠٮǪȼ֓ъϤзܺљӿϒ΢߻ѣ߻ޱࡥׅ͙̽ҒԹ܍ϛҁԧʜ͜ࡀǛࡰıࡷܖ֖Մĥк˧آ˖ܙ׏ӫҶڭϚṵ̈̀ǁӫϛǁؔ߈يػࣄ̴ࣅҪࣇۄ࣊ࣉ࣌ࣆ࣎ࣈ࣏࣑࣋˕ȷܛ̴Ӫࣘࣗڶࠬ܇ڜࡒ࢝ĩش̑Ș׀֝ѡگʙĚ՗ĉ׬ۙŇࠣࡰȽĩӁнĥ̰֥љīӞࣺࣹࣻࣽࣿࣸँࣼऀःंࣾआऄइअऋࣺĭऌउࣹࣛ܉ڈҶ࢘ǢїɴΝХʶǃ˅ʙࠋ՗ɯ۲Ċī܊ߺࡥ˚н޾ĭҫ̢͒ϦϦĥՃܖऴڀशĆवसषՂऻह़ऺीिूाॄऽॆुॅैशࣛڞޱࣴ̽Ӄֆґ݆Օ࣪ȹԿŁħӿӲ̨̢Ȇģк0ƹ݆߇̴ߋؼߙɷݵȝϜʅʅݴ˙̅ҚɷΨɶॴȳ׳ɶθॻҚॼॺॽঀॿং॔঄ॾঅঁইঃআθɵʣڶӋࣝ߻ӍॐҊ݈ѹӫɷǞǢƳ޹ʸȃΎйȋѾѼۇцࡃƙɷȔ࢐ȵݐБšݐŧʶҫũוǃɂūϑلی˛ǃݛ঻িাুঽৃ়˛Щ׬ŭে৊৆˛݈ϰ৏ৎ৑্৓ŭ˅ʝŭƲৗɨএڒॎڔЪ̓ʺࠎĢषړу޷݈ƼůȂݸǊƴǪʉ࠙۝׬̿Ļ֬ݬࡔढ़ՂЁʝΙȄࡥǁīҪʀ۠ĢƛਆࠨĴבࢩΚ7਍਍Ȅࢮߍࢩ਑ਕਔਗĢ਒ਚਖਙ਑ӱ৷ѼਟਢࢩਣਙਥਡਤࢩħѼؕ঒ݣڈӷ̽ӹͅȹֿјͱׁײĩѽƻӪࠅɵǢȶۍԥ੄ҫȔ۠Ӯɼ੊ĜكҠ۝ΗԿ۝ࡏŖčĊĿĿŃȻग़ȃਊਂࡪљο̣ĩਅ׬ĳсƹ֬ɶ˫څޮԗ࠸ਲڈˬ̰ťƳΔǮĶңšǞŻϮ੼ЫߵƁॢǫ̢৶О͸޴ઇĽࡋĊǹŁǹŃǹŅǹŇȤŉȤĶગઌׅĂےચઊढ़͸܍જकડ઒ٯ͸ॏȦઘ॑નĹұઌࣷન੘Ӟનઐȑજ਱ȨખԗȨમࢃ͸ԤજԱી઎भી઒޿͸Ϣ੷ઌਅ૊৶ࢍ૊੘ਇ૒્૓૗ڶુ঑ਲڒݘ̜דƚŜљ˕أَϥݹϑӮŵϓجƗکΨыढԫ˚ȗɾѺʤγɼ̆ŚŠƖǵ͢Ωך՟σրւଆ֭֒׻ଊ،ଋϣ଍݆ଌ଑଎଒ଐଓଖକଘͼଚଏଛଔޭ߻૆੯ҪٹǨƪյЃसङȌܜҮǠݐ݈ށڃȒǤ˜࣪ą࡝ƛ̬ǭقۓƴାȸୀԨୂିୃୁୄେ୆୉୅ୋୈୌ୊ࢗ̽Ϣଢ࡝߻ਅ̑ı˙˅ƵणĢ̥͒ǜ܍਋ٌҮҰ˅ۋȴũੁ͙ҭŹȂǶƃƚϟ׳ƉɻѡƋ̫ѭ୷ǩ୹୼୸୾୻୿୺ஂ୽஀அஃ஁஄இஆஉ஌ஈஈƚȾٵը୓ĽʘӫӦଐ˙ͯĹ࣯सࢻȋҧƙǞࠗūʙȑƅଷସ̆ȕǭ਎в͡ɨռԿԊاۢ߾ˁۛǟۜʸˤ஻ா஽ீ۝ு஼ࡏ̨ˁ௅ை௄ொேோெ௎௉ௌ௑௏்ௐ௓௒γ࠵ஒओڜց୕Ϲ̌ˆǯѹ̯״ࢡגଳҞ˟ੌܐв࣬ջвǯʜҠ௳ʸܑࠜΗۢ௹஼௻ج௽௺௾௼௿ంఁఄఀఆఃˁڶ֑૛Ѽŉ਋΁њ૥ଭ୨ে׉ǫǭȖ࣬ɾ۝Ň੘ĊȻ΍थ֣ЁࠣΚద࡙నΜపΛబధఫమОఱȃళǛఴĢశ߾షవ఻఺ఽహిసਂਂࠨڶࢮఌ৷ְֹּ͉̽ӦڤפΊ౑౐౓Ӕౕ౒ౖ౔౗ౚౙ౜ౘౖΚڿ܊هӚԕٵݫేڔَֆ֣̐ؠ٩ߋЈѭщǂڧল౶Δދ࣪ȓ୛గ౽Ƕமಀ૯ઃಃಁǫق଼ǫۓ୍֚֚಍୏ಏ୎಑୐Ѽਯڜل߻ݛƢƫѷਸ਼ѹٮౡౣங׵ಢತįದಣಧಥನಫಪಭ಩ಯಬರಮಱಱڶ৴ఌ׹̽׼̧̑ࢳମ׈тӮʍ̹ƷਂįӋਇ৷৽ॡϏ˕Бĸ߅ȈѣǝୠƹӁǁȋǣࢽϚࢾೝ೜೟೛ೡ঱ೢೞ೤ೠೣ೨೥೩೧೪೪ೖ೯Ϛѽȑǁөଟ಺கޱбಘƹѵآȐͯࡏʟĴңʝ০ǝȋǨѼদ˩ЪǡШΓੳݸŭȐ˸űЭȂׅŷޫӃ୭Ȓੵͯ੶٫ԤȨାഀദȸധȨԧʃപȸഫയമറഭളہവǭശǫവک࡝ૌǮق՗ցǮ೶ʁ࠷೹ٹۙ଩Ք୦Ǥƚૹˢࢁस୘ԉ೎ؔࣔѽَʁߡߙߴ߷ॴԂ˙Ӭؤ஢ХЦЦϮщո൩шܢ˩ܣ൮൭൰Х୙୙ؾȳǣܤҮ൶Ϯ̰ɸൻƘȷʦ੻цʃࢋΒǞமܫजǂਭ̽νఌࠗ߻تưѸԀൗಿ୨ڲഠ௭ඛܳĂਜ਼ࠢචҤǛూࢩǛɰࠫȚٮٮˣඬࡡ˔࠯࠭ද඲නපࡨධබඳමඵභ඼ඹලරඹඌߘްڈΘඍ̓ʂЈ̰˯ඎೇȅѽࡃǝيǀϙȟɷԌർǪഎजভȐࢢǥũ୚ঽЩдű˜пŵ֎߾ŵटटޫѡŷϓˤŷ˜˚෴ൌ෵෹ൌކ෼෻෾ŷ෽฀෿֟คȶԢง֎ജǣഝ୭ڶඝඏ࠷஫ˆ਷ʥ౤ܟ׆Ӄ஧ଷڲੌҠ࣬עΗĿथģ࡚ਊȄਫȃϤඩථࡸ൐อฯढ़ઢาࢉ˔ิӳีุืฺำู฼฻ึ฾कโࡰऎՇޮ١࢚Ĺȟࡑ६Ǽձ๏ִ๐๒կ˲ȟں๊ߵ̿ڋ̐ͅĿ̡њ।਽֞ȳƘϑݗЫǦǤٲЌ౾ک৯ഹ๰҄ͯ๳๱๴๲๵๸๷๺๶๼๹๽๻๵๕߃้ĊȟŁ˪Ƭ࢟طƹഐ๩Ƕ׼جĂࡔʀȄࡤ˔ϤೇĠӷࢃુࢆਅࢭ؅؅ȅȅεລɲ຦֫ຨְຫສອວຯຩະຬາຮັ֫īטູຸົɲົຂಕ๚ŇɶפѾҥ૎ਫį֬ߣ݌෸๪ٲ഼ȍɤ௳ഁƎمૈҔฤ܊ࡕƷ঱φࡔਅՂ֣ம϶ฤְ֫ੜӱ຃ڑ޼ੜ໭໬໯ξ໮ξਂज़໵ট໷࡙໸Ι໺ƺ໼ՁිǛ਀છ೔༁ӱࡒǝਂऩڭρॶ຅ݤɶԛڗһɞۢѹ૤ଭԤˠԑඦɴ׏ƻы༌ڽŌ܆ɶ٘ڠٚ༔رʶ༡ŃɶĿ༥༧֘ຉ͉̐ڽڮϜΒ༡Ņ̶຅ȉ༒˻ƫࡏ༖चԹяׄভғ˯̻܊ࡒƁ༌ΛŌઆō༑༱օҎֹδѪҪཏĽō༯я༿ح͍ౌӦŇ΋ౠӗݮङБׅگȶڲࡌ੖༜ആԤ༮๕ՁདҸИସ̫ܔʟ਻ྀΐϬඃݐԤŹԎ୸ȓˤƋȓࠗǎ̫ࠗǬƴ߃ྒగྒྷྗగͯંǬྚྜྷྙྟྜྠྛྣྞྡྦѺ਎قྨྫྪЎҳ̿ѡདྷѣཡҺ̐ˊ؟຋ׂ҉ȠྯŏĶ૧৵པྴψ΁ضǀຌछϛΔցցʝзՂ༌ࣟƙ༯܍࿃ϼմɰಣ঍Қ܎̯ࠝϘ߈ߙ˙ܳ঴ǩ˃ɦۢ࿏ࠤ௙Σݶ຅ऩŏໂӁ࿖դ΀և༕طǢޫԧढʸฤࡔ೶ɸ྿࿰൸̿ҥ࿴ӺӼǙƲ࿑༻઱࡬ཕɉƫྶ೽ໄڦெȋ۠ťλҭɔ࣬Ѿʋ੏۝౪ނ֣ԆҪʟड़࢒ű༌઴ࡱဆེဈԴخိໂࡷœʯဲֳ̙ٛ̔طЂأɷ֚ฤԉࢻ΢Ȣœ๊િʦ׾်Ƨ˓Ńץ๟ౡ਻٨ѽЇչఠɴɵޏྛ۫ๆ၈Ρڂླ༲๓ြӓ਺๨˝ҞปயҔеՒж͓ƹтх͕ϮׄƗ༌ࢆœ༭ʃ၎Տဓ̏ၻໂϢထ༨ڢಜγ༌୔ŕ๊Ӯႀ׿Ʈႌཝ૔ܧႇ̋ղʵ౛౮ʡࠍφ˥Ȋ߅֧ʗߌ׼ຆԋൿྮၡ௝ŕ༻˯႑Зխဌ՛ъࡑ໣ŗա႘བཁ̑ϿಞƷ༌ైъཝԨႱဳưȳჂɻ࿇႙ၦ๑ִճႊ౮ՓǞۊ๪ი̢ႣϚǀ૦ԌࢢܹԣԹ୴గྼ̿ဤফყໂಙႻψָွ౭ဿନಢ׷͟ǡ྿̭̿ಹǡ࿂ჭђسथౡದ๕৽ŗ༻೺ř༦Ⴧ٣Ƭƚ׵ׄ˅ǧȂ࣪ྮჺ༭ჹřᄇՍჾԜКᄎ౭౥࿭ඎჩś྿ˡᄋԜࠁˇခຑᄆ຅ෆܱᄜђႽͯ͑౮ු౶࣫๕ฏᄤț༭஫ᄨǐذҍسզჶ่ᄮඞԊᅊ္ᄲάҽՑྷв˲Ǆ๊ᄘǄĻǄ၍ᅎɈՑόগ଩೏Ǟȳ݈ЋჂŅǄĿǄ༦ΰ̗ؒდಜჲᅲӖཨɱཀྵ౮ᅶᅶώݹࠉ̊ȼжࡂුцَƏۢӷਆ޼ıɅ̲੥ߐΒ࡝ť˯ť١ƗǟǮʚșওǮ઎Ⴍൂ્ઔǬρǄŃǄᅨॲᅁ༓ڎƳҾ՛ܽمطşႺᆨཀҎႫɀϒᅙ༢࢖ᅜؐɟ༪ˊӿՓǀਾѣշǞϮǢझၪȓၠᆷࡠǥᄛಚˏਵਸᅸ౮Ƚءħ႞ࡠᇜᇛᇞᅡᇟᇜඖ࿊ԧඨՒʹຌ৒Ǌǭᅈࣴືљभș̥̭ʠԨŧбſдએԿਃઌႸ૱ᇾ৶ְ͸౧ы੬၈ϒᆤକϒᇑᆼͩᄎᄵჱ͓ࢠս྽šŉšĶšᆲᅎ௠ˇ͐࿛঱ϛ࣮֬֬ۯɴঢ୙ঙԃȐ݆݄Ыᄒଷȍǎ၇ᆷઈהم߾ᆳӻ༳ႿӗɳჵሖӲđླྀ໌ሻəխࠁᆢ෰مၤቇͪƱሟଧ֛Ȋᆢ࢜ţĹţჽ቏˻̈́ሇᆷࣟݑඞ࿕ሎቐ჏ڙᆭતܡቍေብəՑ௢ࠣ౤ჍȟቖǱॏťᅍ቏ӽཥགྷӿߴ׆֟֎ԧԫ༯ϗसሕለঐťᅙ̰ᄨႂᄁӬࡆғԣ࣪Ҡኆ࠲ՒຸϘঢഈ̧ѣǄহ৬ଵޭኊঘԩ๎჉༪ᅅካክኬϽ̓ൢ̧၂ׇҥುಈಹฤĥ֤Ӌࢆߟർᇅ࿤ՙᆢ઴ϱمȑቻֈˇሓׄൻ࿦ʸఢ࠱֖ĸܟ঩ϑԣ෨ϕዄৢȷڌຊЇໆม˔ؔцԬ୰֢ʂ६ǝୡʾܥ݀Ȧ࿻უŽͯ՞யǣșᅋሄઐᄘ۔ઌݛજಷɅમ׼ጀઊᄈɅ઎ೃ͸Ⱥᆢ͚ՕᅛཡႽͰࢰၣܥಿงǩଷǭಂႸ΍ӕਂ޾ᇚħˡ੦ΐʥ˕ၺᆭԗݖمዝቮᆽɎض಩Ȉኴҥҥνѡଢ଼൑ΝߙЮڲ׼ɅࡏંΪስጭϮιჭɝఐ஘౐ԅћԡڨǩ௮ၯ໛ድʣࣔيшෞƚَྕȺ৶ບšግݐӱɚᅐʵኯኮћਅګࣧ৪ȷϠвԬΪڀߟŕ̴ϝٌੀʃ෡ࣩፀъࡏ֫ጃઔඎϕખඐ͸تᎉ৶ෆϕ੘ฏϕઐ஫જᅈɔŉသግख़૆ᇷጯʳǙ౏΋ਹ੣ᅡʹግၜທևˆͰΎ׶̦ངܙќ߾ཆ࿈ܚؽ౵Ҟක࿎ĽȃݮबᆊĴʫƺᆌϚي੨ߞЦ঩ǃȉũݝ୫ϓ׬Ƌ๫ੌ६ы૳ەҠ̭Ⱥɾȍٗȥе΍ʁᆢϢᏌم۠ቜაȯ້༘λኗвࡔ਑Ꮲᅙ૑ũֲ᎝άʷསշরၪୱࠊᏢख़Ⴍ୩᏶ᆴؑ͌͐ײ቟ᏥᎧ৤ኪፋᇀཨЄᇜ೒ታᎱၗЈᎵᐗኀ౲ሚȊࡆୱɯ஺౪ߊຽ׏ܣ̢̧Ȥݓ̨ųҧŽ̳ƅԬƏجǬӃગಋ̭Ȩ̟ыϔʋฝلɔࠐՠв༈ԪȉɨࡍŽϡʚ૵௳࡝ǰƇᆢ֮ūሚ֖ဲ၀ݓ౷྅੅ʙࣩ଴ፒఖǪ҃࿽ዿ͡Ϊ༁˔οݮʂᆊī፳ǰᑑᅙሃūᏵᏧɫࣺ͌ءᐉඞטđဤūቭ኏ᆵ؂ౖѽʅଭ੶࣬थΚܔ୘ྼለಗđᑤ৉ፉႚᄪͱᇘӿʹच཭݈̫ᒞǫȘኻӕਊȚĥभՃՅೳǊᆢಹ৕໖ጐᐃሼɎӤǠᒬᅪ؋ᒑږᒱᇒձװᐘൢ˩ޫᇍ໖ᅨͣůᆨ჏ᑷױȅᐕѿΔጄӍዚᆭᎈů቙جᓈᒂᅭྸؾǤ૬ᒠ੠ȊЦݐʝᇫɽࢦፅඞෆůᅪܳᑵИϽĢᆢ˸ᓩᅨ١Ƣနࠂ־ᓺᎡᇖᇝ಴֤ȈᎰ˖ᎯᔄᔃᔆڦᎲ͖Ҁ֎а௿Ёʀύᔑɴѽگؤዳ͛ۓࠒ์ƷጄႨԇእɀűŉű੸ϝᓮƦ௡ಝསӿᒘᔭၒ߸՛űĻűᎻ߃ᔧƣኰֺӗϏ༸˚෶ƚ׋௵ઌρűҢࡃຒڛᔷȮᒕ͆ᕄॲຒͲųቺᒻϺ͌ӗᄸ࿬၈ųĹųᔳпᒁᆫჯၐଧ࿙ѺяജԫԿኻڀ߂ፘҚᑺނ܆ųҢ׳ᕊᆽϽਂࢠზ༸࿋ǯۛĽ՚྽ᐬ੖֤ނ༾ᒱ჏్͈ჲཅҲᕚཐݟ੖Թᕶ˾ծֹض౓ᕄߺᖆ੗འᕔͩၨ௤૥ᖚŃŵŅޅᖟƟညճཤ٩Ꮆ཮୻ᓟඝײţᕄ࢙ނ࢜ŷሜᖔǑҽіؕᕚࣜŷᎻ̨ᒼᏨᗇቧᗈᗊፊ˲ŷҢત෷ຒȴᖼǔᅑˇৡʸᗍॏച੖બ྇ᖩᄌႂذඌഝᗒᖥ઱Źᑴᗠڡ჉ᖶᗧҢЪჇಛ޶Ӛ૴ຕʖႥцԌϙᔲϞԫ͡˴Ёढ़ᆸɲ߃ڑ਽Ȕ߳ؿѭሗוůᕄષނ਱Żᓘȯ͌ᕡွֹڤԉ౱Эࠡ߻ᕄԗŻᕜጮᗔ࿵ᒳƽᘡᎻૃŻᄊᗫᐄɏᘡᖥՋŻል၎๐፧ӓᘛᒛۊᕄϢŽ੸Ꮶብձіᐇ௤༶ၣᓣࠌ೺ײᕙᔡըŽᎻիᙃƬۃପᗺ੄ጊೇȆϨݐԊƃԧϝՙŁጸΛൣ֥ᒦࡷȦ͓܋ϸЅوƉᓃຒݸ̳ҫဲᄪᔩضፎᓾᙼᑭಬ֜ᔆϮݚ˛ଲ˝ጩᖂႭŽᖧႰብቼˆᅯֺᇛ͔ൢෲุᑄ߳লƳᏔѣሆвȨᕄ֮ſ੸ᑕᘯɭױ༟ᓎȂ௪௰ፔࢸݵ̟࡬ᚠᔳሃޓᚥႲȰᚠҢဤެᚶརႽᖗᒃЁӧᄏܙᚠఝᑤƁᕓᏧᗳჱᎬൢǢԫዑнࢷʥፇசணᓨނ׹ӱᖻᚾ༳ᅞ፪፩ᛢክֹ˧ኟၪλग़ບᑩʖැݱᔔ̧ধাƉᕄጄᛚᎻбᓮᚿ̞ᒚᘌٲ༻ඡ൘˚ҪιଯᄒɻˤȦᖁᕚᒸƁᖥԬዉ࢟ґՔᛱ܎ǨࡗϦዤХЩȑťࢥڒਊዿநȊƅᛵఝඎۏᕔֽؑಝ෉।࿇˗ᅤኟ֍Щ୨୨ʚũশ෣Ыᚚᙲނᎊዧຒ˃႑ᗢᆿؓᅠآᑚᓏࠣȽΎದ࿇֌॰Β፛ޜᕄдȔ؛Ӓևᘹ᝛᝝᝜ᒴ༵ᒘζȌ஠౶Ҟۢӕ̯ȇ࿡७ᝓڧᔠ੖ฏƃᖥᅀᚽᕋ޵ᜬᏪ܊ၜ᝖Ňᜣͦํ᝶ဒ᝞๜ρƅĹƅĻƅᒰᘦଦհឆ຃ॢፃធᒺᘷɞ਷ॣ׃ЧҀ̫ᏬၮᑤĶ஝Όతљ̯ε̤኉ɀᐰӚ঱቏Ư̗طӫм౶ᒸ׍᙮֫ມуൻᚂᏎԥᆶतᕏॢͲƇᛊ᏶֙ΆˋΊ߆ቴॴᅼЪുᜋឪݤƇដᕟគȯȃङ҉Γ˜˟ȹាढ़ம޲Ϛ៑त܆ƇŁƇផគᗕ٥ዋቓǫឆକƇ᝾ᖇؑᆫͰȚᅡಧ߆ၘᛧӁሢޫኃࠌ֖ୂֽ࣬ȖȖȹȹ௴ࠝః߻तటၰݬƷࡰȚዩၱसĴჹфԊ߼ĸೖጨƘᚰ঱ǡ፤ݗِ៥ͦཐƉឈᖓៗᄍ́ၑࡠׅވྊಆིĢȽȆದ̤ᕰƉĽƉยᖞᓮق஘႞ѭҫ̻॑੥೏ࣕԨഊηƘӃჼԺЊឿᠫŃٳतѡឍ჎ҏឆᖷ୺ׅͦᔷᄞ஘ĥೲᅼ҂ࠋϴ᠙ڇϚ֌ǂᡘॢՕŉྌᘧծ᝟ង̎࠴ڿᠵȹਫͳ߅ػܸᔌป৶लҩ൘তڃׅᏑکϕעʤĹɔᢕ๙ɣᑥᢙĿɔŁɔਖ਼ɣᡡ؟׬ျᗋᢦᗉӈǙŁᄏছᓝጙಉᓟϙɿᡡ៩તƋᒀ៬Ϳၧᕍ՛ᏑतॏƍៅᡞĴҎᚏᆬ྽ƍλलቦᢧᣍᡆʀءኧெ޻ድډϚ޷ِ֎١ϭዐڸฤ๙ʣਊಗţ͒ٯǮࢰˤĳڵᢽওƍᡁឭᆼƫڤʗ͘੄ν᙭࿇୙ᓁƲྎʚƏኺࡶᔁ᠞ۅ఍ᛱ݋ીڃ˃Əୂūռ˴ឆ઴ƍʀᡧᆫ־ᔫౙӖᇛಡಲರȌᔂ˕Ⴭཆॱ࿜ᒜఓܸ܎ݕᅥᑙᤫЪ᜝ੂൌიുࢧڛฯࢃ֑ᤏᣬŅƍ᝾ਲ਼ᣃЙᠱᅱȄឆԆͥʵᢣױᙇጣཫ ֧Ꮁᙘᤥᇆछᥑщඃ඗ᥕոᥗ֍जᤨ৩౵ጶ୚ᚄԣᔌᤰǨ౿ॗໜљȆ਼ߎᅤᒝ૬ੌƺ᥃ឈિƏឌᖩᢨѹᇛᝰͦૃƏ៩ᙶᢹǘᄪ؟̛౸ࠇ᥃˙۝ᚽြ؟ĭᙾ।೙֞ฆ᢯ԨᑯᢽૉƗᡷ࡝᤾ᣄ޵ᛥ࿺ʸįˡʦٲ֓ᑄ̢ΞឆୖᡥᦁᒲᗙᢽըƗᡁᙓឮᗇϽऎᑹ֝ЪሤᖎឪᙴੵȬˎჯ̓ٿᜭᔪᄶЀᔯᔮቿ׃ΑণۇᦺᝊƴಋᏮ᧕гע᧘Ʒࣶοഃᒦࢰ೶Ɨᡚܖॢఋᓥᦜ᝚᡽ǩ˲ǊĶƗ᤺ెǊቛ᦭ណ̀і୐Ǌᦳ᧯ยɂ᤾ᘨӓᅱບኁ๤᧫ဤ᧮तᄘǊᘶᜪᣍԫ౞਺᧫ᑤᨆͦಷǌᛝ᧧ᢥʟᨐដ᧣ǌᡁ᛹᧳ᣌȀᦪ᤺ᒸǌ៫៭፧ϽᤖᧈᨬᧉΉ᧋ឲҒრ᢮ᙌ੣֋੨ᅣԃݗΓ֠᎓нᝩഃӍ۞ȎᎳʫț׼ᔤ˜ǌ്ာᢽ፳ॢͣǎᨗƧณ֝٫ఛ᠓ңᛴᢽᎈǎឈຑᛟᘙ౎ᚧ؄ᩥᅳᓽ᧋ᩩ̡ᐑރ᢮ҫʃੇԧ৳ᔜљጴᒅ݈ϝᖃƁۢ޿ᆎտ೎ߏએҮ١෡ᛩԏɅĻɔŇɖ᎗ᆰɖᢕᔰᣈෆሴतᓭᨠԞ᢫آЦᥞञឆᓳॢ᎓᪠ᨊ᤾Ĺ״շ݊ف౾஭ρǬͳ᠒ٽ᡻˓ᓻ౑ᒘ޾ౡᇡ᪸ᇠ᪺ᙽ᜕᪹᪻᪼॔౲࿣ʶޫ৬ᑟݸᦕᎁ̮᧚༁᪬६જϝ᫐᧲ᩓӣ༴ᒵ՛ᐴઌ߃቎᪗ቐαཷٞ᫝Жᫎ઎ᕇ͸ᕉ᫢ʰƻᫎઔͲ਎ᣂ᫩ǿĆ᪬ݤ਎፠᥶᫔ᚾ᫴੘ᇜ͸ᕵ᫱ᘧ᫴઒ᖅǹ᫹́᜾ǹ՟ጹϩᬆդ]]'},function(e,t){e.exports='[[10ă0,Ăă1ĆĄ2Ċă3č04Đ5Đ6Đ7Đ8Đ9čĂĝĉć1ČġďġĒġĔġĖġĘġĚġĜć2ąĲĠă2ģķĥķħķĩķīķĭķįķıĎĴĎĶ03ĹŌĻŌĽŌĿŌŁŌŃŌŅŌŇđŉđŋ4Ŏ4Ő4Œ4Ŕ4Ŗ4Ř4Ś4Ŝ5Ş5ŋ5Ŏ5Ő5Œ5Ŕ5Ŗ5Ř5Ś5Ŝ6Ş6ŋ6Ŏ6Ő6Œ65],[""č6Ė3ďƏ,ąƝƜƟƞơƠƣƢƥƤƧƦƩƨƫƪƭƬĆĆƑƓƕć6Ř6Ś6ĜƮƼƯƽƿƾǁƦĠưǄǄČǈ,ǉ4ƲƔč7Ş7ŋ7ČǀǖǂǘǗǚưČďĒǟ,ĘıĠĩĭ7Ǎƴă7Ő7Œ7ĔǛǱǙǳǲǵǅǨǏŖ7Ř7ĚǶǿǴȁȀƭǸć7Ŝ8Ş8ĉȃȂȎȍȃȅă8Ŏ8Ő8ĒȐȏțǗǆǅǊȠǉǉďǞ,ǟȒ08Ŕ8Ŗ8ĘȚȰȜȲƼƲć8Ś8Ŝ9Ş9ȌȳȿȱɁƠȵă9ȕȺŐ9șɀɌȀȞĉȢȡɒǋ,ĔĔĖɘ,6Ʉ09ȫȺŖ9ȯɍɤɂȑƒć9ȸȺŇćɥɯɦȜɄĂŋȹĊĂĹĂďɱɼɰǙɳđčɶɴ0ĿĂĖɽʉɾȄɨ0ĂŘʃʎȩɷɝʋʖʊʌāʎĞȶɭ1ĶʟǕʗʣɏȟʥʧʦʩĠȒʟĻʟĽʟǰʣʘȁʥȤȦɚʹįĖ21ʬ1ŁʟŃʟǾʳˆǛʨˉʿɭĳɷʽˇːʉʬĸˎʮ2ɋʴ˙Ȏˉȡ˓ʆ2ˁ2ɣ˚ˤ˛ȟȣ˓ŅĢɭ3˥ˮɥʬ3ʠōɷƙˑ˷ɦ˱ʰ3Ĕ˘˸˿ąʷȥĒĿĆĒˏ3ĘƶǡĔȷ˱ˁ̉˵˅˯̔ɲƒǎɴ3ɭ4ŉ14Ⱦ̡̕Ȃʬšɷţ̦˾̢̪ǂ̤ʆũ̦ˣ̲̀ȝǷ̗ǩ̞˪ůɷű̳̽ƪĉƚĆǤǊĔ3ǌ̶̻ʠŵ̻ɻ͎̾ǖʬŹ̻ʆŽ͏˷Ȟɑȣ,̂͛͑˃Ɓ̻ƻ͖̫Ĵ˧ʸ͇ƳɷƅͪʠƉͣͯʙ̘ʎƋͪʰƛͤͰƬʬƗͪ˃Ƹ͹͸Ʃɳƺɷǐ΅ʠǔ΀ͯɏɳǫ΅̝ǭ΅ʲ΁ɾ˜ĉǠĘĘŅĊĆ3΍ˁΆɴǻ΅̓ΊΔ0΍ɭΡʎȉɷȋΦΦɳȔΏήʮȘΰΧƜβʆΫ1Ȭή̱ιΧβ˪νʑ1Ȼθ΀ɳȽδɴɆɷ9͍ς˿͛͘ɕɚόʰνɞϑʈϊ΁ό˃Ϝ˪9͢ϔ̕Ǆ˽ȦɄĳΐ̝ɪĊĳ̠Ϡ͏ȒĳĹĳĻĳ̩ϵ̡Ϸʅϲ0ŁĳρϾ̳ЀŅĳŇʽϨ͹ɐϭʟϲĢГϻ̞ʖ̀ͧϘəМʹНПОСРУТХФɘБĿʽϹˀГІƞΖʪǜɒ̃͜КǠизϘΚ,ĚонрптсфуцсБЊДɸψϲˍˈɓёɑʷ̄ϘɖіЦљЧњќћМϭˏьϹ˔ɸ2ϓ͖бѩвѪˊʍĸĽЫюЪˠΕђѶ͙ѷѹѸѻѺѽ2ѠŃѱѥЊ2ϧɌ˜ѸǠїїəΙǡҏҎґҐғчҕххϭ˭ГϹ˲ϲ˴ɱʥѼҢѾҤңҦ˝Ѯ˶ѢҞѰ˼҇ѫҰǇҥҳҧҵɓҙЄы0Ѧҁ3ΥƢѬͦǝϗжйӆКҋјӉӉўѝѝҙЌҺ˗ŉ˗ȾӁѪѸеϗҊЛӎӍӟӞОϭ̥ҫɸ̧Ӧ˾҈ѽʷɗҏпǣ͂ӱВӳģӵĆӶыӸĥӻΝӽ1ӼӿӾԀԃԂԅԁԇԄԈΝӣЪӒ̯ӦЯʩҶӃĒҍрʜĠԀīıԜĆԝэԠԝˍԣɐǈԦǊԧ˔ԪԩԬԨԮԫԯԭ԰ĸӣъϹ̺ɸ̼ɎұԼҲԓҳӚӅкӇͨԹĶ҂һ͋ԹĥǦǊǟą͋7ī2ĩՔĆͮϼՎĜ˼ą̟ǟȇɕ̺ƇĚƺĜǽąȮĉɢĽͿʇį˲ĴŧĭƃīƺīǽԜˏϸĜʽťǊ̞̇͆ʼւ՚ĔՔʹˠ1ֆƍɐƸǈǔĘˢƇǊȉď2ȖֆթǊȻǈϒɐɞռɪƘȓ͛һĒ˭̯˭͕˭ͮ˭ǯ֥Ȫ֥Ϧ͛ʟ̀Ģǝӿ́ӿȤӿ՛֊ּŷϭ͒ӥՉЪ͕ɂҡёєՃ׌Մ׍׏׎בׂҁӒ͠Թ҆ЎƽӗԽʪϭͫׄ։ϲͮיͰמЖϹƍעΓѵכ׭ל׮ǆמҹרҁͿȱװׯ׹׸ѭʚˠӑϹΫˢϴɽ׻׺؆ӪȢϭΉנΎɸΑפϡѮ֯،ЄΣؐͣ؊Զϲՠɸέؗͤϭίנγ؝ѧ̫؅ӘѶՁӄءѰӒֱ؝ϟ׈ӂتӛкӭӠӠҒػғΙءהϹȷϲɶǃ؇نϖ͚ثيӄًٌَͧϭωנύɸϐ؟϶ѮϒқϲɊٜ׫̿هԼُ٣ٍ٥٤٣ّ׳ٜҁϱȍ؈٦ٰ٧ٱٳٲеّ׿Ċ˭ŉ˭؃Ї̔Ʉ˭ЬĹ˭Ļ֨͗׹ңٵٴڋ̂ڀЁׄ֬ٹ0ԑ˯ɐҴڗԿѻڎؚɺʕɺĞΔب١ѩȒ˲Ķ˲ڃԁٗ̕ǝڥЗڟĿ˲زپЈ͈ڟŃ˲ڱЭګϕ̵ͩڟŅ˲Ňōڼ˚ԾǊڥѡŌѤۋئڴˮۉĽōڱѴۅˆʧڀˢٹ֗ΰѓٌǠعХؼۣӮшڶۋռڃҚۖ؄ѫڥҝɺ˴۱ێ۬ʤƱۧƙےҮ۱ڳ۵ʊʫʍƙڸҾٹ̚ٹ̜ۏ̾ڀ̟܅ہӤő۴܉˙ۯ܎ےŧܒɤږжĖıӼ˗ڥԏőڸŭܘٿ۸Ըœٻųܥ׬׊͝۸Պœڅ͒۾ȿѼďĔĭħ8ڥŻǊ֣ܬǀʨ҉СΛگ9ܽŁ˼ڸܵ͠ˤܽۃןݎ˸ڥ֓ɺͮݗܑݓ˹۸שݗڱͼݛˇݕڸխŕט݁ʳڥΫ̉ڧΉݢʘݫڅΑɺ֯ݰݪ۸Ւɚ̇۽ݩس܀ʚ̉ڸǽٹ؜řݷݱ܁آŗہؤřݚݾɰڀηݵލڱοވ׬ޓރލލݨޙȰڀْތٹٔśʢޠޒ܁ٚޕޥےϝީݜށ9݊ބɺɢޥҿޑɼޢۃ޶ŝŉ̜ٽޱɀɄ̜ڃ޿̜Ļ̜Ͻ߄ƮڤݹŅ̜Ŀ̜ݽʴ׮ܷКܜӲԝ˶ܤܤՠύٔܤ̸̆Ě˗Ǟ̼ŽČƶĒȬΨ̜ۧŃ̜ߒʕߎȲΌ߱ʜşĶ̟ި޻ИȒ̟ߋگşٟࠀ޲Ͳ̟ĖܫޟࠈƟىҏӰ1֑̇Ěվ̋ηٝĢΞߺ߳ξĊ̟ࠎ߷̴А߱ˍĂš߽˔ࠤƣȞжҌʹԇǥࠂѦࠡ˗࠷ࠇ࠭مΖ࠵Łš߳ۜ࠻߅ࠧĜߔ۫ࠏךهࠂ۰đ۲ࡎސࡃ͐߱͆ࠡۻࡎߖࡉɍࡌڸѴࠩ܄ࡒȳࡌŇť߁܌ࡡ࠼ʩȥĖǧ߱܏ťߋվࡨƧʲȞͥހࠊܗˏބࡡۇࠑѕĒŃࠂܡť߳ܤࡽưѕӉэՖ˴܄ߟ݈࡮՛Čŷͯɔ̍ӷ՗Ԟܿ͛ǟܸԕ࡬ǢĹĭ࠸̞ĩٝҼ֛̀͒šࡆЗƇĉǔ߮࢕ɪįӿՕޔţĥŻյذȋѿ̼߱ߞߍܬ͚ԕʹҎĚŇΜԘ࢙ԇՍԣࠝڿđܫܱࠩŧࡑ࡚وܮ׋ɛࣁ֧ࢫ࡚׷ھࠊܾӧ߿͸ܚҏʜģ֑֟࢝ɕČކܺį޸ѦȤͼũƚҝȔΚۚĢͼրĠȉռ֊ߧű֖ɢĚ͆ЁߊČŭՖŹݺƅǻࠂ͕ࣖ߳ݍ࣢߸םࣁ՛īࡠː؅एʸظӎ߻ĆĩԛԱǊ֑֛֡͛Ȥ˽Ηࣀ࣓ũ߁ݖđףछɁࠂʹࠩݞऺ࠺़ȁئा࠿̋ी޺ࡳࡓश΄3Փो̽ږ߬ԗĴģԚĆ֑ߧऋͅ˽ए̄Ր࢟ɚąͼͼΉ֯֯ίࠚժѰ͂ĠʟࠂΫū߽ݯॄޡ߱؍đݴॻृौ̬ॹ࠿Σࠩࡼॷ࡛ॹࡤέࠩίࡃЙُՄࠂގŭߋηॿǱ঑ߔοঋڔআগ߱قঋࡤωখǘױ߱ަůĹůࣙ߷׉Ǡтࠂࠛđϝࠩ޴ঝইश޸঵ߒֳতƢ۞Ľ̆ȒűŉűĶűࣨষǵৃŌĊűĽűॾ৊ǴৌŁűŃű॒াͺۧűŇų৅В৛ߏҨ࣓ųĹųĻųࣄ৛ۇ࣒ͲųĿų৖ࠔ৓݂ۮঢ়ࠠĂųয়я৶̖০ۊŵ২࠶ৣɿঢ়ࢥʅՖ৻ە৿ǲʾਈ৘ۜ਌ࠣࣚԼ۞̃ৃҚ৻ࡍŷ৉ਆ΂ঢ়Ҫʅࡕਜ৒ਠɃʍŷ৖̑ਜŅŷਕਨƝɄŹ৅ਭʅ܌৻̥ਲƟۘਪӧਤ৘վ਺ਧ਎ƾਚੂ৖ūछǄ׋ї࣬Ǌą࠸̧͠ݺʇΝշअ৯ǩŹਯܨŻ਼ȴঢ়ࣕʅܱŻব੆ਡ০׃੥৲ׇ੩̣੣৘ז੥਱ੰǃৃݒŽেऻ੡࠮ۈঢ়िʅुŽ੅߷Ӛ࡬ؽĊ੹ʼĉſ੷ੱ০ॉઃਯ΄੾Ӄܸϙঢ়Ϋſেॶ঍نƚৃॺſ৐ݶઐ्ৰ੖ʅঃબ৚ન਽ࣤੜކƁ৅ঌરƦઙɖৃؤĥࠬ˦ڢુ؆࢔ԗĠӸıĭࣵ̈́ऱ઼৪ޔʅֱࡳ࣪ȥӋлн઼৖Ȯৎقਨ࣪Փ̆Ǌਜ਼૛য়ޣƃ߃સƨৃϐ৻ެʅٝ੾Ƣď࡭০ϝͫণ૨аझ૴৖঺૮ય੡૪Ňƅŉƅ૧૰ȒƅĹƅĻƅ৬૸਩࣓ƅĿƅŁऔࠀб͚ӉҎӳĠ̇੒ଟଈʓ੓આ૸ଡଂ߻ࢰଏ੢଑ҺƇଌЗ૰ͦૢʇ֊ĊƇକ৵଱ƥଈ৺ЃԠЃ৾଱؉ۧƉĶƉଊਅଏʥਲ਼ୄਉƉଓ਍ॿةଳୀŃƉŅƉ੶ਲଈਛЃࡍƋਟପଐͲƋǞ଄ࡕݢ࣪̅৵ۜҮֻܾ͒Ԟ֙՛̥ŷƚ࠶Ȗ߁ӻؓǻǈڦଡ଼ܹнଆୢ߰଑ॐଶ਷Ƌ૿ॄ׭ଡ଼ଂ܈ʇࡧ஄૩ୄ̥ि࡙߄ϖ́ŃӲʼ੒ɐƐகଌ੃Ѓܗޙࣛжӳĥħ̇ज़Ȧ઎ࢁĔϱĢஅ୤ܡƍࢤஃۿڣ஼ةୃ଑ߤ஥ଂԺஓ଻ୄࣕʆݩૂߐ଑ܱƏଌܴ௅Ƥଈ୰Ѓग௖জ଀ேऋĒ୚੆࠯ܯ்ଂݒƗ஺৿੍ʸ՛́૳୤ݘ͛ୡଇୄંƗլͷ௟Ԓдٍଈͼ࠸௑ગҷʍƗୖݦƗଂΆ଺௓ఁǒଶఄ؋ЃΎਆௌʇॼƗ୘ؓఏ஘஄Ʉƶఃఖఖ௞ਠఛঊЃఄދ֎௒ெʚƸଌథլ૑నୣǩకଶচЃ૚஧௹ࣇуպ઎ɖܹԙǦ֑˶֗̀˼ଈঠశଂ૷ఈୌ଑ަƺଊٚ۵ǄઉӴૠ୬ԥ֔͛Ė܈ੋ͒ʹذʓ˄ੑ੒վ֮யĘŻ௬లলƺଓশౌఱଶ૽ƺ୘ঽర్ͲǐĴŁ஋୛ۧǐĶǐࢣ্౱౹ǩǐĽǐͅಆ਽ۙϣ಍ૹਐ࣓ǐŁǐŃǐ౾ଥಀڞړ߻ǒ௦౿ಔҺǒĻǒ଎௚ಣĿǒಖହ౸κಀଽǒŇǔ಑ರಔۊ˫˵ಶΨ]'},function(e,t){e.exports='{"10066":["AF",ĊFG"]ĎĂĄ7ćĉALčĊLBĒĔă70Ę"DZĜħAĠāĢ3ĥADĜANĲēĭ07ĆĈĊOĳGľķĕ79İđĎATđłă82İRĳRŋġ085İMŒŚŌŖŅļAUĳUSĬĂ11įŠTţŬŌŨĻęĨňZEŦ0ŨşĉBťĎBHťů2ŏļſĜſőƂŘƅĲžGĶġ128ĥBğžRğů31ƕYƇLƉƑ34ƕŶžEěƛű"BJƇENŷũźƭŬžTƲů4ƄŻľžOƪƑ4ƋŻīžIHƳ4ƔƅőƘīů5ƝƅƲƘƺƑ5ƥƅŇƭGƢĭ15ėƅČžFǑƑ6ĤĈnull,Ǯǰů6ŪĉKǊĎǹŜǪƬCŚĎȀǠŧģĥCǇ"Ȉǘĭ20ƽȊǦȊċŷȎǅ"TƍȘCƐȍŖȇěȂHǂȍƒȇǖȊHȌĂƜǔĉCƿȊǁŷƜǛȯȚȰȝȬ1ǤȷĜȹȴ1ǍȯǏȊRIȴ2ȮȊɈȂIVɉȶ"HɅɔɐŌ3ƓĥJPĜɜȫ0əƵCŢȂUƚġ3ƜȇƟȂYɝɘƤȇųȊŵȴ3ɃĦKĩNɻɘ4ƬDƯĎʂɈɿƵDȱʉǽĭ35ȐECĜʑŢɘ5ȗEǝʙƟʖƬSɐĎSLɗɩ5ƵGQĜGNʩɘ6ɋEɅʱʆɩ6ɒEƧ"ESŮʵȽ"SɴSWĨɘȆļEƷʺTǊˆǷ"FʃːJʴʍĺĥFɍːIɠ37ɹFɅˡǩĭ4ĹĥGȉ˩ɨ˥Ă˨ȁ"GMˬĂ4ũ˨ʹGEŁġ˶ʁʹDEʕ˽ȼ˨Ǻ˱Hˤ˵Ȏ˨ɅǟʒŌƼˏGˊ̔ʌ̋Ƭʫʪ˜ŷƼʧɭ˱Uʜ˽ɫļHˊ̧˕˵ɲļVȉ̮ʽ˥˞ĥȪĜȪȺ043ƵHɥɓUɠ4ƼĥIŽ"ͅȤ˵Ǆ̈́Ȩ˜̸͂ƬIȚ͒́4ƵIɅ́͘5ǬĉIʩĎ͘ʭ˽Ǔ̈́ʹ͉̹͘ǚ̈́ȡ͇SȄͪȗIˊͳ̊ͪƬJ˰JA̗ͪƵɜɞṔǫɛȱJOͰʀˏKɴKA˅˽ąĥKʹΔ΃ƵKɅKΈ̝ˇǸWĜKW̱˵7΋ǝKGΐ˥˗ļʣĜʣͶ4ńĥĞΰB́ŎεɅĞΉŗε˚LIŶ̑8ɹLˊψ̃˥9ɋL̾ϏX̝9ɒMǝMDŔόʿM̠ϝƁġ͜͝"MʠϤDʤĭ͜ˏMˊMψŷ͜ƬMɅϴΤ0͜ƵM̾ϻϠϪȦļMϒĎMEϒŌǓȗϘĜϘͶǓɹMʒЄȰϱɊĥMȨИϚĂʏϕʹИτϡ2ϜȉMAͰ53ϣNȉЬͽЩˏNɝĎвͩЩʿNͭй̸ǚɹNɴпжͥļN˚х̐ϡͫфʹNʱϱǣĥNǝђЎ΄ЁɻЄKмǶёȱNΜЈΒļO˰Ѥɠ56ʿPј"PAɾϡΞѭȉѮѧΦĥPǝ΂ЛϸέĉP̠PṚϪδļPʹ҈Шκ҇̇Pȣϱ8ˏPͭPȳЈ8ƬPˊ҂Ϸ58ƵQȉҢҞ9ȐRȱҨϋМ9ȗR̾үϾҬƬRΠĎҵЎ9ƵLВ"ҼͶǫȐˁčǳlŌǫȗS˰ӊͰǫɹSȉӐҫĄ0ƵSȨSƱŷʯҧ͆ͯ˴ĄǢĥSҽSYшĭʯӏǝSGɰġ6ЖļSѬʟѰө2ɒS˚ʟɠӱʿSȱԁͽǶϣZȉԇČӇɪĥʻʓSӯөʎεѬLΎӛ3ʞȚSDӾ̻ӣɅSUӍ̓ӳʹ˃Сө̺ȇ̇CHԩĂʶƬTҶȘWӾǌĥTɴԻӀуĉˌĜˌԾȐŊՂŀӛʗԺˊTT˼өҟԺȨT̀ՉƵTɅՔӍӱĥUǝ՞ӀќļUȉUΙӛѢęʹЧ԰Ą6ɹGƗ˱BӍφ՝̠ԣ҄Աύ՝͆ŤӀϔ՝ɴUZӠ69ʿVʹ֊ɠģϣVȨ֐ͽģɋZ˰֖ӠģɒZԵ֜խģʁ˰DЦŷģʧȚǟ̸7ЀĉMɴMOΫĂ֫Ӊ̠ӦͰ֫ɹTֻͭҲĹӲŻɴBL˅}'},function(e,t){e.exports='{"10691":"NA",ā0814ć"EUČĎĐ5ēASėĂĐ6ěĝčğ17ēĊĞď18ēĕĪĐ9Ģİ20ěFĴĆĈSċĤď22ĮĖľ823ēOCĴĒĈĜĴĚĈįń2ġĈĩœħōģĘ2ĭőŃŜĲōĸń3Ķşİ3ĺ"ŎťŁţũŇŚũŌ"ļũŐŶĽĘ3ŕĉŻğ3řŬśƁŞĔŠƁŢſİ4ŧƌń4ūAŤĘ4ůŬƕğ4ŲƈƍŵƔƍŹŷƑžơƑƃŭƖƇƤƖƋŗĘ5Əưğ5Ɠƅď5ƘŒƱƝƼƵƠƚƹŹƿƹžƴƹƃǈ85ƇƧƱƋƭğ6Əǅ86ƓǂǗƘǏǓƾƉď6ǁİ6ǄǠǗžŉǤƃǖ6ǎǚĄłİ7Ƴƀď7Ʒǳǜǚ7ƝǝǷǣń7Źǿ87žǖ7ǊǶȆƬȌ7ƯȌ8ǕǧĐĨȒƻȕǾƸ88ŵǖǌĳńǗȢĘȆȥğȝȨď8Ƌǖ9ȔİąȗȲǜȜ9țȲȁĘ9ȄȷƦȷƩȷǎȷƋƪĂȰƏɇ0ȰūǈȰșĪȰȹľȰȻɈ0Ǧɒăǲɕ0ǬǠȰǯɛȮɡĂɝĎąūǅąǻɒ1ǟɯƠƸąȄǂąȈɦƩɷĬȫąȑɒĵɾ2ǙʁɮɕņķʁɗɌ2ŹɏŔɨɈ2ɠʁɄʁƋǪɕŦɾŪȴʛƘǒɌ3Ɲʚɩ3ɳɒ3ȾʪɹʪʕʛȎʪɆɴƎʒɌƒʷ9ƗʺƜʊɕ4ʩˀɶɒ4Ʀɷ4ʰɩ4ʗˀɥɒƲʺƶ˒ʇɩ5Ǿɷ5ŵʢȽʏǶȽɀːɻːɣɕ5Ɇɷǔɾǘ˫˕Ɉ6ɱɕǢʟɩǥ˫ˇɒ6ˊ˯˥˵Ǒ˟ǴɾǸʺ7ʡ̀ɔɩ7ʌ9ȃʿ̉˸}'},function(e,t){e.exports='{"10691":Āisoć"US","namečďđ"totalPopć329.ă49ĒĜĞlFemğė:166.2386ĒpercentBelow15ć18.5Ī3ľŀłńOvŀ59ć22.4ŎĒdŃsityĤ5.9735}ĒĂ814ćĉċčADĚĔĖźndorraĚĭğġģ:0Ĩ771ţťŧũĵ64.1319űā0ŴŌĈ"ĊČ:"AEŽĕĴĎnŧed Aƅb EmiƅtesƇĝƉĢćħƏ05ĬǀlMĳćĸ7ķ8ǈĮİĲlĴ3Ĩ037ŔŁŃŅŇŉŋōƘƐ2Ľ"ĿǞŗřrśŝ.799œ"ŤnŦŨōĶ.8724ƞųĶŷƤŹƧAFƫſȈfghaƯsĞnƿĮƊĤŏ0šǑěǉǋǖōħ5ĦǜȞǓıǌĵŏ512ǝŖǠňŊƢ4ş4ǿǵǪȱŘŚŜ:ƘĶ5ǇǶƓǺ:5ŏǧ9ȁŲƠ17ȅƥźGȋƭAńigua ȑƲBarbudƆǒǁƋƍ0ŭƑȧğȠĴɫ4ĄɨįȩȡƌĨ5ǚȰǟņȳǣ:21ŬőȦȻǟȽǮȿƚ.6Ķ4ƒǸƔŝ2ƍǿ27Ȃɏ8ɒȇƨLɖźlbȑiɧɯĠǂʃǽ8ɬɶɱōŠǐɶǔȪʅššɾńʀǢƢɐ.3ǳǨʉǬȾŝƍȸǲʓǹƕĂūŵ3ʜŴȿŸƦƨMʣȈrĖƯʩƈʫƋş95Əʱʸ˂ąǵˡʷɹʅ5ķɄˆȲʿˉǱķʼtʋǯĵ7Ŭ1ŋˍʕĵǚʮɌ˔ʗʟ˘AO˛ƨngolˠǉȘ:ƛǽ25ˬȟʸū744ȝ˭ɸĴǼƠǆ˺ʾȴćɴʏŞ˺˼ȿǘ6ȀǵǷˎŝūȤǏ̉ĆƣɓȈȐƴgǟiĔȖɩ̮ǥʯȦˡʲʃʅ8ʺʶ̦ʖŬ˃Ⱥŕɿǡ̭ʃƘśɃ̲ǭ˽ŋ˪ʻɅʔɇǼ36ƛ̉2̋źTͅuȓrʨ͋ˢćŏ˥ȭ˨ɹƘ4ɬʒʪˮĴ͢4˦̫͟ʂŵ˂ʐīǩ͝ˇʌ̻˂ʄ·̹̄ųʏķ6̉3ʹȈUͷ͹ğͻɶ̛̗Ĺǚȯʪ͒ȮŐȭ̝ȨǕ̧ş6ȭΔ˴̬ΐħʚőͥˈ͓Š˃ɄΝɇǘ2͏̉Ŷ́ʠAZͅzŀʦijȑͼ̗ĂĨˋ΂Ĵū0ŋ̤ǉΉćϤƛξΖ˵͠ĺŠšϭǫ˻ͦʍʅ0ŮΜɆˏʄεƏ̉Ƣ˗čBȀBos˟ɞƁ Hŀϗ̒v͉̕ȗʬǘ3ϥϢʳʐ6ϧθ˩ПȶΎʁˀƘĄĻυΘ͡ŠŮΔϋƕƗǱ̛ŰɎ8ǧΥ"BBЈɢʦƂƾάʬƍώ̞͐ɹƍƚ8РğϩɺŵиХ˶˾ɻțЫ˽ŞŐšαбǍ6˿жƟиɑϒ˘BżĒžƭɡ̑̔ŤshϝʬĶǘț̶М:иЮЪΈ͘Ѻƍ˦Ȁѓϰ˿Λ·˴̳ć˿̡Ţ̺ͫĵ̛ş˱3˓зώкBƪѪƬЅŇgiumѳƋ́Ő͛ѹ̠́Ʉ̥ιϪ̚7ȝοΏˀ˿ǆђΕϵҊʃūǧ3ϼͬƕĻϹǾѢųĦҙȊҜȌлurkЕ FaŹуˣƍĥŵѹϟŵұ͗Ү̅ƙŮ˅ϮπȵШƏҲϮһǘ90Ỡɇ̡Ĺ̡˔КҙɕӋѬulgɢΫʪ̗Ҷӯɮ͑Ȫǘ΅ЛѾӠ̵Ԅ҄ΐШ8τҹȼϷŝȚȮɮў:г̣ĶӶ̀ЄƧBHоhƅ͉ҤНќӛɻ̣ӟȪҁļ҈ӥҴōŏƐǾјȿˑɬǨԛʄśψПӶͳѦЅJЈŃԩӖǻǽϥαԆɹū8˫԰ՓŬɬϴȱӦ̮şʗͤԔʊԖɈϠѽԛĂШ҂ӶΤՇԣNЈrunei Dɢ͸sğĕԪɺ4ҕηɰԱĹ̛՗ɲί8͜ϵ՝ʃλɂԻ;ŬμϊϽ;՟ɐҖѣҿҙ̎ӺЅ̓iДЖ͌ĵ˰ƚԅшϣǱǲǨҭȪ̠ҕ˳ԵЦĤƍ̶̜֑ӡŎѸҏΞַʚ8ӶЃȆѧ̈́֟ԣƅzilվʄϹĪҬ֪ō̆Ůĥևה˿ƛƗԏƢϿӯ9α҉դʎɉŭӱƕή̛ƠӶ6ҙĐ׈лaȐĲтԁф˂ՕגĮ͒ъՕՑϨѿхӯ֋՜Զ֎Ǝ΍բΗͧʅŮ̪־όͿɬ֚ųǛҙͶױBhuȔվʘͰ֩׼ք΅׻ю؂˂ɉɮҳֵҼ˂΅עӫդԸǾȦՀɫƜʛзĻҙYՊ̔ղ׶ˡ̗ħΌ҃βȪƘ˃ǳטեǆֆ؋ϯΐҶͯ؅գφњŎ֕Ӂ̮ĸɉրӶ˖ׅЅϕؚŇiϗ؟˪їوщƙɌւɷӠъ9ʐםŝǄțԴҺդך9Ժؑˏ˿́ĥ˔΅кCЇױCȑaɦվǛŠ́ӛȬͰئٲʸŏ͕7ֳ֌؇͕ͨśֺȀ˂ҿӀҐɁŵچՆԢ"CӊēҝƧCǟƅlƳfͺcȑ Republicվǥنѹşů؀СɹۊǴرڞحրŬۑԕφ΄ʯȝԛ˿ОƝзրڈԥױSwŧϗr̔ƁվȬą·ՒΊĹ6ϺٍيКʈִєΑɌ۴ّһڤ͕ԯځŝˁʺׂ۠ϑڭCȈCĝe d\'IvoƺėՍخƐμӛˤ̡یاӠδܟٖʽ؇šǱӝֺӨҎԛʯǽĄ΢۠ׄ͂ڮʢڋh׌ܘ׷ҥͿȤѹħҿҎ֯ɹħʐɽّ֍ƜŠֺٰǼٰԚ֖خ̣סچ׮ծڮ˚ڋƬrooȕܙήǾל٭κٌ͚ԋʸˤͯڝ؆ۓۊ̶ثزۘĹ΀רϪۇǆچѥ܊հܸЕվ˒ǘұǛѹŮū̶րٍĄŏŋɌٷѕʯΌݎĸ͕ʰ܃ĵȤдɐچʞݘC֞ڱӌ܎ňmbԀكʬɼڥޏݥŝǥƚܠژێވҾސњ̶Ӱ۾פşǏ˥ݷɀūǛƚچ٢ܵCׇޢƭ܎ȓɝRۄ֤ͽَȸ֮דʭȤِ݄ĴғِجєןұӤټφΑĪƚ߀ٿǽɃӆƠɼڈΧڋہߑϞʅցڗ͒޵ˌݩ՘7ǆߢݮۺĸțĺڣַŴݑٜ̅ĸˋغѣȭڈؾڋypفށٯļѹҁǳٱяࠚǴސǼ߽Ɛݎֲ݁߀ȮǄގ˔Ȥڈ٥ߊčCϗcܹ߳Ѵࠆסҩ۲ăٍūȶ࠘݉ڟ̠ࠄ޻٘ūǴŴࠧĻ׹ٵࠫխڭDқ࠯ƧGŀĲnũܙ֊ŐɐѹܨȀą۵՟Ѡ՛͞حʎǲ޿ࡄЬώدǿ߀ĺ݆ǆ۟ࠎ܉٣ƧDՉױDjibo؝i٪ŭ࡛ͯ࠙ƜٍˊО޷ςؐףφڃࢊޘȶܴࠫʠDK̏DŃĲӏվ̠ƐΔ۰ǰļק߻ߛՙ̱ࡀࡦࠋԊࢎ࡫Քʄаݒƚࠂĥࡳų˱кDݚࡒ"DoƹƯڻ٪Ϻܭݒ˥Ǳ̢ࠫݼࡶࢾޡѫčࢿࣁߐnڽڿہۃۅܙϟЯ࠹ֽͯߚүǛώ޷ҌƠ۸ߣЬࣜąࢲࠉŞ՟ɴܲࠎޞࡏ࠮࣐Ȉӽŀި̖ʬ۔ǆƛۉ؎Īчۍߛߵǚٻࠀ͠Кε٬ࢮ˽݆ŴضࢳȚǏؕ߭߆ʠEC̏EcɜƂrށךŮऄփɹŏĄؐ࣡Ѻʏ֊ۖࡥߟࣦࣨۗ࣪ʘǛԿݒĄʆů˔۳кEࡑࣷ"EȓݟࣻЗҥΚ˱ࢅ̶˹ࢦćַݨߞ͠Ǽɴҕڣٞ֨߀̙ʚʚाԡ࣍EӹࢽEgࠓtށӯ׹ࡈޮɈʘŞߕअ̮݆֔ސҕǽҿӪࣩ˽ލɐࠈҐĂƍ͕Ąाڬॢ߉ृEͺtre࠵ƋԈɭԭڜʚٍं̢ސܨٟࡤ،ȿࠋǛ̸ݒҿ̰ĪाࡎॢװࢽSpaՌܼٝǱͯэǊȪњٵ࠻ॐʃރǏݲےۺ͢޾ڣࡂܿޘǴʏٿɍѣƗीؙ॥tܹĢै֥́şϺڀࢢɈࠂɵ঺˱Ǚࢥ॔ʂ΅ڥݤएԼݵߺըδৗࠍųμкF܌ױF͉۪d࢞ҧࢩ৙޽फ़ٍşޒঝْˀࠂѵڣऩțঢࠉŎίΌाݗڭFࡹࢽ৴ࡼ٪ՕࢅΌآܡؤ˃ࢋݵޅࡪऐ˂ع߀̣ܩȮा࣌ܵFউڲ"Fƅnłվμƙȥѹ̙Ȥޓ঺ॸ۳৅ৡҵՏࢩ০ŝࠋśहਊ਋Ɍࣲ৮ࣴ࣍GڊࢽGaࡾݠরʭɐǧԭĂ࣠؁ܢĨķउऱऋڃǲݭٗЬ߂րੈҐŏրԟзĄкGнܸȑմڷIs৶قࣼƋѠҧ0޲͒ॸůӚ਼Ɂұऴ੣ٓৈ؊੄ЭƚٛҐʚħ֨˔߽ੳѩ੒঎ĔڏܙъȮࢅ߾ۯਫ਼քǆौࢪߟރਖ਼ݎ͢ՕۛণĦŠʗੌࣧॡܵGूਮࡔƃҠঐĤŬٵ঴γՙ؊ब৖ࡠપϰɫƛ੢ঞ܄ί࡮ޘ˦࡛˦ઘইહۣ੒Ȑ͊ܙऌšߺ৙ͨšٶ঺ͨԄॻऊʂڑͯĪֺˑɃѝࢳ਽Ŵ৊ųŮੳࢼृ੓ަ৓ߒۊϡ८ʅʑથॳĵƙ֊ܥਂ͍ਸ਼ࠣਡ̴ݧ࡯̙ٿՄз̡ੳݾ੒u͉এށ޽ǦѹĸĶ૦बĸਾरܦۓԈ੧ૐɀǱѷ߀ȭŬ̡܇ѣڜੳQझqɜĜͺğ Gଜմીଈůॲधֈڜѽबַં଩ଌ̘ĸ˥Пֺǘļ७ԛਦ݂৭ࣧਏ੏ਭӌG঎eਲ਼ࣛˊއ࠹ŵफદ՘ҕĦࠠୗٵ߿੨љɊٿ߀ŴĹȤશصੳৎૼଽɸ୅ˁت߷Ȫऩୈ޳ĴͿՁॷୗśଋһڃթࠧгăڜઘ੎હࠑଛyڍ٪ұࣤ८ӘǴࠜبĻࡩੀŝ˿ס॓ݳश઴Ǐड़଴μઘङ˘HଚृHݟdӎӔվǄɴਚ঵΃ܰࢡ୭۱صা૫Ƣ̙ގ૏϶࢏Ӣ΁ޘǾƙț߬ь0кHୡߋݝat૿̗ɁКٱૅݨૈƙ΅ଋ̶݊͢୐ۿ˿׺ڧ̄ŮՏŴ˔Ŵ௞஀ਮHম௤ށʅҾ௅߸Ѐஊя̠નॷ৿ɉ୴ମѡޭ୚Ơʏଵ௼૙ʠH߰ࢽHճӾrࡘ੗ऑȸ࡝ʏƠ஧ӠϤǏ௒௰ψחଐ੅εࢩըă଴̾з֊кIછृIƁݟƽ௥ʬʚ׀઩ૣͯ۲୸૧তůɉ޷ĸՁ்୵ȿࠩড়ըĪ׹Ů௼ࡵܵI઻ӌI঎৶ۆʮߙߖȷŞଆਛێʴࢭ۹ϰ଄ɼ௒һ݋̛ٵ߀߽ǽŮଶųԒ఼ܷࢽ੺ƅŇ࡛۬ޭ৙ƘĺŮ۵ĹҸ஫ʃ௵Ԓ఑௓࣪ĸҕࡩԛ͛मķ௼ୟ౟஻ਮీdౄҥࣟڒӞ८ƐъĦఊѿμ౒ь୐֍ǧʏŎஒդħǾ݈୚Ղ˦ŭ௼ਪʠI଺ױౣaqڐ݁ɬૄʸ಻ą঴я݋ȜॷȚʗਁһϤąओࠉӮŐƠ౾ೡ஛ೄ௠čೈࣕ(੺̔ƹcࣖۀۂۄ of)۬ˤƚ௉أ΃͔Օ೺౭ΊϹه಑ڤμదల:ħٿ૓ԛޫąय़఺ஸ೧পిł౥ઠެࢅɐં࢈ƙП૪ઌˀ݆ȸ௳դןӮ௷ό׹Ɯ˔Ӯ఼௿ౢĮణީ੿ҁɼఇশمଥொĤӄ૊಑ʎତઋମળĻů࡯ǆߪɴഭસʠJૻਮJĕমࣃݡỤ̆௩˩ॗद஋ʳ̣ɴ޷ǘ̜ઢഈδɭ࣭ઔǿĹĥ୽סкJ࣏൑ƃɦ੖ഴה௙࡜८ˑޱಎٿԒஏŐ௲૰̀૦৪ރ֊૷ƠǴ൯P̏൒ভ൵੾ōಶļ݈৙ʐʆඖ഼ԜƘി౱ΐғ಍ഈতϥފޘҿ஭ļଢ଼Օ౞ʠKౡƭKŃட࢞ඡ౬ெߛଣ౫৾੆ĶॷખǴ౵դƘǚࢥԛס˂̡ඉ׺кK।ृKyr१zߍඑॉǍڒڢ८ǘ֙೿൝̘Ĺϳఎೠ൹ઐ௵րਉҐॸΌϺഭಠථ૛ृڌަoಥ஄ࠋļஇनϠٍ̡੮˃಴؇̙՚ഥ௔ůਠ෇Йŭ൭ೃ˘K೦Ƨھ೰ࣙೳf KƃଞܙଳŞֹ८ήƗࡩૈ̼ڜਁ݊޽ɴෂ٘ş́Ҹ഍ඔɴණٿ෍W̏Kuwం౦ʗଏ৻ඁऀ૧ʏঙોʂϿ˱ౌઐࡆওޘĺࠂصഭഒƧKࣶਮKazakhූށȬȭභ͒Ϳǳ೒ѿȣȭൃ୑࡬ь൤ઐҦļਝޘޕƐଢ଼Ӯ௝ݘLੵࢽLeʦnݟ਴ߪેߖԈĪ޲яԈăଭ๪ล੃ரͧঃԎ๲౻ŋЁɎӮ്˘Lजۤমń Lucದ॑ଉண৙ɫෟࠝĨסഠପۺɊ́౔ମߥ́੬̄Ħ݆Ƀ๵ંкL৲๻i୥hƼǸƼয൶ɺǚ઱࣮ڑʐьʜӮনܵL࢘ۤͺຠȑk୅Ͽĥਠૣхҕභ೓Ϲ໒ൡʆܜ൥ࡆĥ૳ࠉҿ્ǿ໑ț຾ฑ"Lࡽࣺ୅ඝǛ๡শŠࠇ৾ŠҔচʘȤ೙դˑԒ൨̄ฝ۳1໲࢕ບരƭ໷৐ɜ˟׎Ǳੇԭʚ໩बʹयࠠˑ౏ख़ܰߧ࢒හ૎໲෰ບఝृມxıࡾӎg٪ʐ຃೻ֈƛړ঺Ә଱ๅˀఌ૓๮Ǆ໭ઔڑז2໲ฎčLV̏L௣֣ࠖӮѠࢅصສѿംьࠠಘৗڣڃ̣ೝ෫ַɃ໲೤˘MੑृMƃoccČ૟ࠋԹڔຬแ༟ŏǛڀഄ୓Ą຋౶ʹ߃୹؎ʗगӮ๒"Mຜࢽ཭Ĕཱࣄ๱Հ༷Әେ໑ĂкMాਮณࣘೲ೴ ཭lƂv໺զ൙˯͚ಪ௬ːమࡁ̇๩౶੮ŎལΞϱƠǧྗນčMධྼݟ໅egݝ༶ວߖӘːഝƛڜࠠލɼฆ࡫ंవݒ̯प߬ഏྙාਮǋɦӾsڻढݡཾࠟଃବ୰్࡛৥ඟȵӘʵഈ໻ฟ୚ಘɃ྇ƚྙ໖ࢽNƃ৐ྡałƂ༘ൖ఩෻̧Ϡࡃ༟Ϡ๭࿫ōಘǴಕۿхПཆ̄ѻʐڪທŵྙಢӌྎ̒ۃ୅ύҒԭצཙ੟ږขحऌǲ֊ֺԃઓຸƎશą༑ྼ໵ǋӎŧʧྦȤ༸୉ǰʚ݃ඛ՟̜วฃ಻ь༇φϫ௖୚٫ࢷɬȄݘM༓ྼğĞ٪̢٬ຨօ޺୍ĹƜಕయĥཛྷഈʚʏॺࡉǏഞ̛ྗཌƧM༮࿛aး௤͸ࠖɋ൜׽̰൜ຫƗখཀō҆śྱפҌǏုɇָ༂ŞྗཨྼཏױȠಥř੽ෘɺൣࢅҕ഻ଇٴ૯ႀĵഊɬႄ၊Ǳඬࠧ޾ǽ෩ྗྉMX̏Mexۄི੗ȮѡڜငǍȷईދˑǿຳ๪ଣԒჀ౶ƍ˥ࢇ๲߹໑̊ၒ஝ཬռyŦဠʅɌౌૣࠋĺງཚ̼ǧၡ؇ϱཿݎַତߨ̢҆ೢסྻၯ๕လo๙૾଼້ܻऌࣟӛۇෛ༟޵ജ႟̢Βຮಖ˽΄ඥड़ऩŋ჋చ˘NཫਮNĕࡽ຤ʭĪ਻ૣ։ဥ˩ώએဋ୒૆၉੩ŐԒ෪̄Ѷ྇ĺкN྾ƧNɚŀ׎ЙĂၹʸ؎ŵڗ໤Őٵ௯ܧ಻ȶ࿐ᄁƙƚᄡͭ੮ં๵Ȁᄦ࿚ӌᄪ͇ି׎५ᄷஊγϥॹ჈बǳƙ࿋চ̵ӅܫೠِՀʗʏ਺჋ဴᄩເृᄪ࿠aɛ୅ٞΌႹ෡ॱٍᄮபᄚળԒ႞ઐླဓɇő˪ޜທйݘNಂᅦe৐ŀ੼णຬ฾ߖȬё෿ᄟࡃീՔ֊ྀദ৛แ഍ϺĨໞ჋ၮ"N൱ᅈƃฺളඒեཻෟ͒޽Ķ๥Ӡλֽീ˿šಹฬ֓ఱౙдɉ჋ႎᄩඍױNڿğ׎ਇ৘ߖʎțၼმඁҎഄȣ߽หЬȬƐഩˏᅕ҂ඉமᄦწƭᇀw Zএഗ੗͎ླྀ౩ة൤௬੯၅ࡦȣΡڣ؎ҕ໌ঁލμ༏ທӷݘO൐ӌOࡖ౦ŭᅮύ܁গৈࢍᅴȷŎᇐᄽຕᇲΞࠂ̡྇ƛкPᄋӌPڍĲ฼สۉਸ਼ݤྫྷဨߟǎǲჄפეʚᅀƕ૕ԙ၏ېሓᄨ"Pŀuڐғ࿉ଃଣ̣ლܢಘං႟תőᆕߤ৖ǲረΙ˃໐ᇷ໓ʠPᅇƭሗۀɝᇝୁୃป੗Ըঽధ܂बಋٵჀ֍ů໿ဏ༈ǽٵྵͭ݁ቄ໑֜ݘPෲਮPܹۃppଝ႕৔ఖຶᅏְيĶ௅ఋୗӯპဩ୨ෛᅸدঀᄢ̶నăቪᅣሰ࿸ृሗӐ๝ݡǼ˱ฟૣҦ̢ள૧൉́˧႟በǆไઐଧ˃ᇔԗ჆൬ቪ༬čPᆃቯ̓ɟڐಓྫᇆེਾগȣ৽႟ͨٚሊȿήš༧ըϱȹཊᇷᆞPၔƧġrtuӾ׍୧օ੝༹̮ॹབঢ়ࡋ຋݊ύȤሤ٘ښő་ͭҦᇵშؼቬ჎ቯɢᅩɜᆥ႖Ҷ̢ቺɹൢʯᄖዶʴѽᇍӢ࿤ઐऑॏըҌƛሑྉQሕƭQ௣ɢ༙यസ౮ᄿᄴبތኂۺൢ˥ᄝ˽ዟአՀ۔஦ᇘڇݘRᆡƭRࣀ်ށ݁ƗድĴمಸٍഊॗ༢Ő෾ၥވ஦୹௧ᄆທšкRഔਮSϘᄐ቗৺ߖቜጶቛЮ܂ᆒћޗઐήּቅ̅Ә໑ȶጿၱӌRպʨࣕİŤƻi຀ࣛΌ౼ဇߖ઀۳࿧बұోᄸࡦ࿎ᅷຏ዁ეኗ୹ՙ໱ጽቊ˘RึױRฺƁ஄λၿ඗ίႛഀෙȶፐᄚ˃˸ቢݴসᅺሩ๯ҿወƟɌත˘SጉčSၳಥƳƵᄐতǧൿଃǄᆔগۙዝჟƘļ᎑ᄞĄ൹ըࡆዃፗ኎Sྌृፃy࠳Ňǖቶߒຩአၛǆ჻ၞᇈ጖ϰރĻႣ࣪ȷۮ࡯δߔᇶ᎙ɴкSྛӌSɥϜܙȶǽർภߵၤૈʹ̛፰єৣŋᄙॼ১śዥשಋ˱ᏗĂɌᆞSሯۥƱŃ४ᆛሞߖϤ̛ಯఫĨųࠠ۝еৃ֬਻ጞ༂Ǿፗᆼ"Sቍ᎟͉Ӿpบ৸ޒྨǗᆛҸ௬Ǐ૦ീۊƛቁ࣪಻Ͱ୹Ħე᏷ΆྉSᅥፂňřခ੗ቃᇅ዗ଈईᇉ੟ٺጴːᎲљ҆ۋࠧ̆ʄં໑߮ݘSነᐵoྥӐ୅࠽ွමǰಱጓᆮՏሆিॕნአፑ৿ذࠧʎȸುທࠏᑎᇻƭᎠࣕǋͺ๿ྑྒݒ˱۶ҕᑌᄈ᎟ရᑮŃ࿂ᇂࣛ౒ٵ໽ɹ஭ማ঺ེĪᇫᏬ৿ًᅛǲජܮШր᎘ᏸ̜Ꮪጥ᎟ጨဟށ࠽ȶᆩȪࣦᏉඛҌȶ๩֍̯ǛᅳᏰዘዤልɇഅɂᑌ᎛᎟໵ᏞᑲҝഘتᒅֈĦ፨ႜಏඞᑟๆ୓́ጚʍˊݶටдѠᑌᎺ႐॥ڷᎠlྥडກΌࢄොĨĺ໣ѿԈКሠϰޕٟݎ͔ώ᎔ഽʹยᑌክƧSዬᏝි፞Ꭳ੔೯ྞࣚႵҶ߽ጐ஌εൠᒉ૖Ꮜ૬Ϲ౐ഈ҆Ɛႈƕ෈ጙᇘ˦Ꮪᇛčॅฺ௤Ưࠖёᓽລ˱࿆ᓁɉฟ಑ڑ֊ઇ๊дേ๲ǎ๨ᑌᐔTᏜߋȐ৷ࣛᎷড়৙஭ኹ঺ඩ࿪ᓄȵޕ೘ୖ͚͕ࠧᆯ٠ᑪྉTᐗƧTo̒ಇྸᒽዘંহፋă෦ᄚৣ๤ዀዘμணౙਇᑋທिݘTቮӌTȐ׌ኳܙऻָጭĤӭțᆭԇࡂ۽ീᔼᔦ๮੮ೀࡉಲĦ໑ʐкTኰᕤimƃ-๼ȓჲᆦఅǴᔙɺμᔦၞͰ౹ኡ҆ჩֺ෹էݒļ֓ੰ᎙̶ᕿᑽčTճĊᄐዧᏹ࠹ါ࠼ቤዚഄಋǧዡ࣪ѶඅݒڜӴ࿗Ͱᕿ໵ᖣӏeዱ֥࡚ᒠᕬɀ଄थࡡ୻ኅᅴቜ޺๮ৼਗޘΟذᒖԾᒵᕈዌ"TᑲiɦƲɟ ᕉʦᕋࣛ˪ᅮ࠷ഝ߽ᔃמထညᒭƖ෉ҿ࡯Ɛەോᕟᓮᗘᔑᕈȑ๙ᐸ້ɉǙա৻ͿʯᐆഹᓜፍᕕୗրჿһɁᕀ჉໿ǛᕽᆞU᎞ƧUkԨմۆӭဎۉӘૢ၂̵ŵᗩō໫ৠ፴ŝЙଡޘᖶۼᐰૃкUᕇĎӾᎃۆಋܱँՏ૓ૈȷމচٞᔾྴᓩ֎˰ᔞᕽྉUᓱƭUղᅪᖿߒԈʐᄰྩѠᅓඛ؎ર޷ˊتࠅᐈᙄ݋Əą໑ઙݘUᗸĎzbeና؞૟ˤऒӛ੆Ԋ༟ٞכ޷Ըŭᘋٽ֓ᙄƏҧ́ᙤც"Vᘕ"஽ly ፃᖉ႖ɫӯᒰˏơՙᙣທૹݘVᖡƧVໂt ᄍңܙٵʴʄ࡝࿎ઇቛེᐉሾύыᓦຂከ̘ҦႢშଘݘZᚆSࡿ࿼Aڹߐ࢞๟ာภዣ࿤ૈ݆யᔺԗ֓ᛂኆإፔਦफ़ᙤ኎ZᑭčZĕާ஄௵ᎉᑘभ͕ఱᅔᐈಪ಑ჽɴߝᘨ෡ĻФํහǧ࿗ǏкZ፿ࢽZᖃʦbwᚍ৔ᒔᘀ፩Ŭඈٍ۝ݱচอᙝ࿯ጵᘎಛ௵ɉ྇ұкAᐴӌɘɛ׌̔ࣄŵᏳဌҽາᙤྉAፁᜒĖںڼᎠᖄ୅ɫ࿴ᗱٞဲʯᜏᛳृƴ߲٪ੜᐟລᏈᓞٳɻᗉᛉѕ޹ᕘχᕓᙄśַց໑௽ݘBᜑӻղƁࢁࣛ˰КᗃҪዹ֫ࠇᘤ߁Šኁᅛ؄ᛏౚϥϥᝆᑻԣᛕԣࡕᏟࣄָᕁޫਨທ఻ᝈᜯਮЉtsᎂໜ˂ǚᙔစ́ͪဈŎᖓᔠރ໩እ౼ಽ࿔੠দ᝭ᗕڮᘳ܎̑Ⴔᗽ׹୬ᐼλǾ᜸໾Щ቞ܧᝐགྷᛨ΄Ļື̠ͭ߫ᝆ኎Cᑐޣݞk ೫ɟᏃ̗ظ࿌ᘬෝĶ๵ļीᕣƭWƽƼrࣕᎠȐƅ٪ɉ౨ᐼ༾ቚඛхƏᒨჟᆲጅᖗᐁᚱอՕ឵ᆞFᒚƧӓݝܐឬƁឮ׸ᕯቦӂᎰܱᝆᐔGڰृਰŃ࠳ቓ፞ᜧݵၝ࿇௭ୌៈ௭ଏᔠอʄᆴᇑᓿᚱൢӃᝆྉGᝊčGࡽڶĞ࿡੗્ฉণǛъ໑മݘGᖁƭୣeŃᇢ້ᜨዚԛъ᠀ທąੳᆾଛڎǡuĿၘຒၛሉᐿքՁྮ፱Ⴉߺፑ߂̽࡯፦ϻဲ൮᠓ፚ᠖ɜᚡ᠋ഞජᏇሃ༽Ĩиᒌϰ௧᛫๮ݹᔊֶ಻᝸᠑፼᠅ᝰୢቔa-BĊջሳᗣסޗၛࡇ᝔ລٿᚥჼᜅਠઐুጂऺᚪᖝᏸɌ఼ᝤ"೫ܐྠǋ෗֥ɫ঄ࠧ୛Ǵ᠑኎K᠄๓ƺࡽ௣ᝎᡂኟᗃᜨ኶ᓁࡲჿ቟Քെ៏ഷᚱᄳٯྐྵᠡᗶKᡵ܎ᖄݝ៞ɪߪᡢ៲ᒠሺؤʄ់ဩς༊ඃǚֽಾ҆Ɯშŭ෍ᚚᐕພ᚞KŧᝳЍƲᇀДᢣ᜶Ȥᚑˉෝആ᠑ᐔKᙋ࠰ayࡖឫ੻ឭᝨ႞Հ౻О๵ǳ຾ᜠ༔ƽĝhតᆦ៹ኘᇆ෽ᡥᐽƏᏫऋᘾড়෧Ѽ១ҋᚏႌŲং๷ڭMីၕrѱğ੹ᣔ៝ࣄɉᣇ̘ಶᣚȂংᚃM᠕ၕۃጪᅠ೎݅Ⴉᄓඛ಻઒চךᇈᔾ၈ᣲᗮ́ኌ᣶ӯᝢྊᡵMடn࢜࢞හΌᕎʃࠂኛ৾Țᚐ޷ࡆŵ᜿ٹඦܮᗎ᏷ংᡕၯᠤᅦ࿻hŀᑰӿڍᣓᆈഘǆഌࢳڤĻᢛāংដMೆྍɢᔕiჱ٪Ǜై៲֙ഝʗਗ਼ኽࡆԒᏐ୶෉ᛂಛᅼಮᒖং኎Mᣞ྿ńsŀƻࣄؐ୚೐ᤉኁྙᡗƭȠaۦ๞̰ᐻှഉଉᣦଇمրᎮଫʴོឝေᤅعᄟࡌᤢϺᄦᎼᄌeᇞڌǖကᄐхиᤒֈŵፇᓁ୫ᦎߟȷᗰ൥ރ˦ᤞ૤Ѡ৭ংᐔN໵ᄍӎᡟᡂ᝟ᤅ̜௵᥼ɬᄦᠾčᄪu᛺ᏄǙ඾๲ၟጼᥒ᝟ሓ៨ਮ៪ਲh ġᚉմგ٪ક᜵ѐšᑛքƚᛣሇเᓈōѶᇏ౺ཞǲ᥼́ሓᡵᎠ͉᚞PໂƄܐᗞMᥚᧈň᡻᧊ӯᔆՀ߂߄ᤢȮሓ໵PᧈዏoڽႳ༙ጠԭกሄőᔣᄚǼǧᗌᛨಶᓝᙄҕʘ৕᧯᤿ሰ᥿ኮռᦼ᠛ᐈᤅᎏӝ౾Ăမᑎ๺Ꮍ̓ࣀݟ᥉ᣕഘķზ៲໯ᘄٮࢶᓢৢ᠟ᗬव˽̼៑ӭКᨮϥᎺ᣻ᓯᢻЏŇŃ៯ኁኈឡҧś᧯ᗶSᤍᓯ᧷ƅຠeూվ௵Ꮴ৙୲ᘎबӭ᜘༄дඦᡬၧઇశɊॗ᧯ᏺᗗᎠᨍᕉĖᣀ᧘ᑲຣᠩഘ౓ചϺᨾᦦϺᠱᒍ௭ᖭᦒьᖙ࣮ڤϥᓎᨆᔫᦛᕤӎks᩽ڌႳ᪚ៜdᣄ໊ᥐਥ؃ᚁᨆᕅ਒ृTaࡼ᙭ᏠతΚᖍШᨻଇШĺយဩᓻ༼ᔤᒯ߀ķᄶຖ᧐჌ڭTឧƭᕉkŇၳ᥸ዄ૴૷Ăʄᕿᡵᖼk˞Ċ᙮੗Ꮇᡨ฿סᑗຈᐈᔹ௎ֶ༚ᛌᛨ௵ĥᢘλዴ᥼ŞᕿៗᗘݟӾᜳ௚ણȤపધߘॷబணኆܱᙠ፦ƚᤡ᫂ᨣTᓑ᪪uྥlᨨᆦظ᧌ಛьĹ᫬ដVᧅ᚛ȑଽᬋᚎݵ௫ᥟ৅ၞᨭೖܩহᔤڜౘݒഅӯᦵં኎Wᥲᩏᜦᜳ์ᠬᒤᢐჇॷᛛͪᣰǲͪԛᕪΌੌ᫐ᗶYሯYı᏿ݡખΓჶৈᓀᎊĵ΄ᘹኡςᓝᅛজଲҽ݂᫬ᆞYᗗǋyĝƼ᧝ķઃ᧣Кᣩ᠟ᔟᎎ݆༤ഈࡆƏᡐ:߽Ǆᝅ}'}])}));
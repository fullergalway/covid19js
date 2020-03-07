//https://gist.github.com/fliptopbox/6990878
String.prototype.covid19js_compress = function (asArray) {
    "use strict";
    asArray = (asArray === true);
    var i,
        dictionary = {},
        uncompressed = this,
        c,
        wc,
        w = "",
        result = [],
        ASCII = '',
        dictSize = 256;
    for (i = 0; i < 256; i += 1) {
        dictionary[String.fromCharCode(i)] = i;
    }

    for (i = 0; i < uncompressed.length; i += 1) {
        c = uncompressed.charAt(i);
        wc = w + c;
        if (dictionary.hasOwnProperty(wc)) {
            w = wc;
        } else {
            result.push(dictionary[w]);
            ASCII += String.fromCharCode(dictionary[w]);
            // Add wc to the dictionary.
            dictionary[wc] = dictSize++;
            w = String(c);
        }
    }
    if (w !== "") {
        result.push(dictionary[w]);
        ASCII += String.fromCharCode(dictionary[w]);
    }
    return asArray ? result : ASCII;
};

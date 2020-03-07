//https://gist.github.com/fliptopbox/6990878
String.prototype.covid19js_decompress = function () {
    "use strict";
    // Build the dictionary.
    var i, tmp = [],
        dictionary = [],
        compressed = this,
        w,
        result,
        k,
        entry = "",
        dictSize = 256;
    for (i = 0; i < 256; i += 1) {
        dictionary[i] = String.fromCharCode(i);
    }

    if(compressed && typeof compressed === 'string') {
        // convert string into Array.
        for(i = 0; i < compressed.length; i += 1) {
            tmp.push(compressed[i].charCodeAt(0));
        }
        compressed = tmp;
        tmp = null;
    }

    w = String.fromCharCode(compressed[0]);
    result = w;
    for (i = 1; i < compressed.length; i += 1) {
        k = compressed[i];
        if (dictionary[k]) {
            entry = dictionary[k];
        } else {
            if (k === dictSize) {
                entry = w + w.charAt(0);
            } else {
                return null;
            }
        }

        result += entry;

        // Add w+entry[0] to the dictionary.
        dictionary[dictSize++] = w + entry.charAt(0);

        w = entry;
    }
    return result;
};
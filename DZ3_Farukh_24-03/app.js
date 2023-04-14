var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var results = {}
for (var i = 0; i < tags.length; i++) {
    var a = tags[i];
    if (results[a] != undefined)
        ++results[a];
    else
        results[a] = 1;
}
for (var key in results)
    console.log(key + '' + ':' + '' + results[key]);
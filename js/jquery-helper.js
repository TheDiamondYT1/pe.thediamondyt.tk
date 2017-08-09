var $ = window.jQuery || {};

$.getParam = function(name) {
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) { 
        return undefined;
    }
    return results[1] || undefined;
}

$.error = function(text) {
	$.writeJSON({'error': text});
}

$.writeJSON = function(name, minify) {
    if(minify) {
        document.write(JSON.stringify(name));
        return;
    }
	document.write('<pre>' + JSON.stringify(name, null, 4) + '</pre>');
}

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
	$('#page').html('<pre>' + JSON.stringify(name, null, 4) + '</pre>');
}

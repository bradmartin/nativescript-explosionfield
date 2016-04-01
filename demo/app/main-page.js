var observable = require('data/observable');
var pages = require('ui/page');
var app = require("application");
var platform = require("platform");
var color = require("color");
// ExplosionField is our amazing plugin
var explosion = require("nativescript-explosionfield");
 
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
 
    // Change statusbar color on Lollipop
    if (app.android && platform.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new color.Color("#1976D2").android);
        window.setNavigationBarColor(new color.Color("#1976D2").android);
    }
}
exports.pageLoaded = pageLoaded;

function goBoom(args) {    
    explosion.explode(args.object);
}
exports.goBoom = goBoom;
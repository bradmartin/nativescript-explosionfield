 /***************************************************************************************
 * Made for the {N} community by Brad Martin @BradWayneMartin                 
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * http://bradmartin.net
 * Open Source Lib : https://github.com/tyrantgit/ExplosionField
 *************************************************************************************/

var app = require("application");

function explode (view) {
    if (!view) {
        return;
    }
    
    if (!app.android) {
        console.log('tyrantgit.explosionfield.ExplosionField is an Android only library.');
        return;
    }
    
    var explosion = tyrantgit.explosionfield.ExplosionField.attach2Window(app.android.foregroundActivity);
    explosion.explode(view.android);
    
}
exports.explode = explode;
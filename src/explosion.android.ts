/***************************************************************************************
 * Made for the {N} community by Brad Martin @BradWayneMartin
 * https://twitter.com/BradWayneMartin
 * https://github.com/bradmartin
 * http://bradmartin.net
 * Open Source Lib : https://github.com/tyrantgit/ExplosionField
 *************************************************************************************/

import * as app from 'tns-core-modules/application';

declare const tyrantgit: any;

export function explode(view) {
  if (!view) {
    return;
  }

  const activity = app.android.foregroundActivity || app.android.startActivity;
  const explosion = tyrantgit.explosionfield.ExplosionField.attach2Window(
    activity
  );
  explosion.explode(view.android);
}

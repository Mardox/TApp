import {Page, NavController, Platform} from 'ionic-angular';
import {GoogleAnalytics} from 'ionic-native';

/*
  Generated class for the HelpPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/help/help.html',
})
export class HelpPage {
  constructor(public nav: NavController, public platform:Platform) {
    this.platform.ready().then(() => {
      GoogleAnalytics.trackView("Help Page");
    });
  }
}

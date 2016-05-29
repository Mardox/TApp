import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  notificationState = true;
  notificationStateValue;
  notificationDelayValue;

  constructor(public nav: NavController) {

    this.notificationStateValue = localStorage.getItem('notificationState');
    if (this.notificationStateValue == "true")
      this.notificationState = true;
    else
      this.notificationState = false;

    this.notificationDelayValue = localStorage.getItem('notificationDelay');

  }


  notificationToggle(){
    if(!this.notificationState){
      localStorage.setItem('notificationState', 'true');
    }else{
      localStorage.setItem('notificationState', 'false');
    }
  }

  notificationDelay(){
    localStorage.setItem('notificationDelay', this.notificationDelayValue);
  }

}

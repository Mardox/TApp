import {ViewChild} from '@angular/core';
import {App, Platform} from 'ionic-angular';
import {StatusBar, LocalNotifications, Device, GoogleAnalytics} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {IntroPage} from './pages/intro/intro';
import {SettingsPage} from './pages/settings/settings';
import {HelpPage} from './pages/help/help';
import {Service} from './providers/service/service';

@App({
  templateUrl: 'build/app.html',
  providers: [Service],
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  queries: {
      nav: new ViewChild('mainmenu')
    }
})
export class MyApp {
  rootPage: any = HomePage;
  items = [];

  constructor(platform: Platform, public service:Service) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // StatusBar.styleBlackTranslucent();
      // StatusBar.styleBlackOpaque();

      //Initialize Google Analytics
      GoogleAnalytics.startTrackerWithId("UA-49038013-23");

      this.service = service;

      //load the tasks data
      this.loadData();

    });
  }

  loadData(){
    this.service.getData().then((todos)=>{
      this.items = JSON.parse(todos) || [];
      // this.nextItem = this.items[0];
    });
  }

  introPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(IntroPage);

  }


}

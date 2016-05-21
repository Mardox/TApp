import {App, Platform} from 'ionic-angular';
import {StatusBar, Keyboard} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {NewItem} from './pages/newItem/newItem';
import {IntroPage} from './pages/intro/intro';
import {Service} from './providers/service/service';

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Service],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // StatusBar.styleBlackTranslucent();
      // StatusBar.styleBlackOpaque();
    });
  }
}

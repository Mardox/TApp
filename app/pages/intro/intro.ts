import {Page, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

/*
  Generated class for the IntroPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/intro/intro.html',
})
export class IntroPage {

  slides = [
     {
       title: "Welcome to the Do It!",
       description: "The <b>Do It App</b> helps you to be way more productive and focus.",
       image: "img/ica-slidebox-img-1.png",
     },
     {
       title: "Just Add Your Tasks",
       description: "<b>Add Your Taks</b> and stay focused on one task at the time.",
       image: "img/ica-slidebox-img-2.png",
     },
     {
       title: "Can't Finish a Task?",
       description: "Just press the <b>Delay Task</b> button and it goes back to the end of the queue.",
       image: "img/ica-slidebox-img-3.png",
     }
   ];


  constructor(public nav: NavController) {
    this.nav = nav;
  }

  goHomePage(){
    this.nav.setRoot(HomePage);
  }

}

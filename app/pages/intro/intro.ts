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
       title: "Welcome to the Docs!",
       description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
       image: "img/ica-slidebox-img-1.png",
     },
     {
       title: "What is Ionic?",
       description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
       image: "img/ica-slidebox-img-2.png",
     },
     {
       title: "What is Ionic Platform?",
       description: "The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
       image: "img/ica-slidebox-img-3.png",
     }
   ];


  constructor(public nav: NavController) {
    this.nav = nav;
  }

  goHomePage(){
    this.nav.pop();
  }

}

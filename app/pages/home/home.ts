import {Page,NavController,NavParams} from 'ionic-angular';
import {Keyboard, LocalNotifications, Device} from 'ionic-native';
import {NewItem} from '../newItem/newItem';
import {IntroPage} from '../intro/intro';
import {Service} from '../../providers/service/service';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [Keyboard]
})
export class HomePage {
  items = [];
  newItems = [];
  createdItem = '';
  addText = 'Add One Above';
  new;
  list;
  isAndroid;

  constructor(public nav:NavController, public service:Service) {
    // this.item = 'test is viable';
    // this.items = [];
    this.nav = nav;
    // this.nextItem = '';

    this.service = service;

    // this.nav.setRoot(IntroPage);

    //show the intro of the App
    this.showIntro();

    //load the tasks data
    this.loadData();
    
    if (Device.device.platform == 'Android')
     this.isAndroid = true;
    // this.addText = 'Hi ' + Device.device.platform;


  }


  pushNotification(){
    LocalNotifications.schedule({
      id: 1,
      title: "You Are Falling Behind",
       text: "It's been 3 hours since your last task!",
       at: new Date(new Date().getTime() + 10800000),
       icon: "http://sciactive.com/pnotify/includes/github-icon.png",
       sound: this.isAndroid ? 'file://files/jingle-bells-sms.mp3' : 'file://files/jingle-bells-sms.m4r'
    });

    // at: new Date(new Date().getTime() + 30000),
  }

  newItemFocus(){
    this.new = true;
  }

  newItemBlur(){
    this.new = false;
    this.newItems = [];
    Keyboard.close();
  }

  listView(){
    if (this.list){
      this.list = false;
    }else {
      this.list = true;
    }
  }


  showIntro(){

    var firstTime = localStorage.getItem('firstTime');
    if (firstTime === null) {
      console.log('was null setting to false');
      firstTime = 'true';
    }

    //adding demo tasks and the intro pages
    if (firstTime == 'true'){

      this.createdItem = "This is a task. Press the green button to complete it";
      this.addItem();
      this.createdItem = "This is a hard task. Do it later by pressing the yellow button";
      this.addItem();
      this.createdItem = "This is another task. Do it now!";
      this.addItem();

      localStorage.setItem('firstTime', 'fasle');

      this.loadData();

      this.nav.push(IntroPage);
    }

  }

  loadData(){
    this.service.getData().then((todos)=>{
      this.items = JSON.parse(todos) || [];
      // this.nextItem = this.items[0];
    });
  }

  newItemPage(){

    //this.nav.push(NewItem, {items: this.items});
  }

  doneItem(item){
    this.service.remove(item).then((todos) => {
      this.items = JSON.parse(todos) || [];
    });
  }

  selectItem(item){
    this.service.selectItem(item).then((todos) => {
      this.items = JSON.parse(todos) || [];
      this.list = false;
    });
  }

  deferItem(item){
    this.pushNotification();
    this.service.deferItem(item).then((todos) => {
      this.items = JSON.parse(todos) || [];
      this.list = false;
    });
  }


  addItem(){
    if (this.createdItem){
      this.service.save(this.createdItem);
      this.newItems.push(this.createdItem);
      this.createdItem ='';
      // if(this.new == true){
      //   this.new = false;
      // }
    }
    else{
      this.new = true;
    }
    this.loadData();


    // Keyboard.close();
    //cordova.plugins.Keyboard.close();
  }


  // deleteItem(item){
  //   this.service.remove(item).then((todos) => {
  //     this.items = JSON.parse(todos) || [];
  //   });
  // }


}

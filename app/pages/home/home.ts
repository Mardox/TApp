import {Page,NavController,NavParams} from 'ionic-angular';
import {NewItem} from '../newItem/newItem';
import {IntroPage} from '../intro/intro';
import {Service} from '../../providers/service/service';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items = [];
  createdItem = '';
  new;


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


  }

  showIntro(){

    var firstTime = localStorage.getItem('firstTime');
    if (firstTime === null) {
      console.log('was null setting to false');
      firstTime = 'true';
    }

    //adding demo tasks and the intro pages
    if (firstTime == 'true'){

      this.createdItem = "this is a task. Press the green button to complete it";
      this.addItem();
      this.createdItem = "this is a hard task. Do it later by pressing the yello button";
      this.addItem();
      this.createdItem = "this is another task. Do it now";
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

  doneItem(){
    this.service.remove(this.items[0]).then((todos) => {
      this.items = JSON.parse(todos) || [];
    });
  }

  deferItem(){
    this.service.deferItem().then((todos) => {
      this.items = JSON.parse(todos) || [];
    });
  }

  addItem(){
    if (this.createdItem){
      this.new = false;
      if (this.createdItem){
        this.service.save(this.createdItem);
        this.createdItem ='';
      }
    }
    else{
      this.new = true;
    }
    this.loadData();
  }


  // deleteItem(item){
  //   this.service.remove(item).then((todos) => {
  //     this.items = JSON.parse(todos) || [];
  //   });
  // }


}

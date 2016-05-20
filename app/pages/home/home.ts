import {Page,NavController,NavParams} from 'ionic-angular';
import {NewItem} from '../newItem/newItem';
import {Service} from '../../providers/service/service';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items = [];
  createdItem;
  new;

  constructor(public nav:NavController, public service:Service) {
    // this.item = 'test is viable';
    this.items = [];
    this.nav = nav;
    // this.nextItem = '';

    this.service = service;

    this.loadData();

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
    if (this.new == true){
      this.new = false;
      this.service.save(this.createdItem);
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

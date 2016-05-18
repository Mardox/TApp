import {Page,NavController,NavParams} from 'ionic-angular';
import {NewItem} from '../newItem/newItem';
// import {TodoService} from '../data/todoService';
import {Service} from '../../providers/service/service';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  items = [];
  constructor(nav:NavController, service:Service) {
    // this.item = 'test is viable';
    this.items = [];
    this.nav = nav;
    // this.nextItem = '';

    this.service = service;

    this.service.getData().then((todos)=>{
      this.items = JSON.parse(todos) || [];
      // this.nextItem = this.items[0];
    });
  }

  newItemPage(){
    this.nav.push(NewItem, {items: this.items});
  }

  doneItem(){
    this.service.remove(this.items[0]).then((todos) => {
      this.items = JSON.parse(todos) || [];
      // this.nextItem = this.items[0];
    });
  }

  deferItem(){
    this.service.deferItem().then((todos) => {
      this.items = JSON.parse(todos) || [];
    });
  }

  deleteItem(item){
    this.service.remove(item).then((todos) => {
      this.items = JSON.parse(todos) || [];
      // this.nextItem = this.items[0];
    });
  }
}

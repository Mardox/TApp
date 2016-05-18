import {Page,NavController,NavParams} from 'ionic-angular';
import {NewItem} from '../newItem/newItem';
// import {TodoService} from '../data/todoService';
import {Service} from '../../providers/service/service';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(nav:NavController, service:Service) {
    // this.item = 'test is viable';
    this.items = [];
    this.nav = nav;

    this.service = service;

    this.service.getData().then((todos)=>{
      this.items = JSON.parse(todos) || [];
    });
  }

  nextPage(){
    this.nav.push(NewItem, {items: this.items});
  }

  deleteItem(item){
    this.service.remove(item).then((todos) => {
      this.items = JSON.parse(todos) || [];
    });
  }
}

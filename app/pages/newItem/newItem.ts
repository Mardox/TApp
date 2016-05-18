import {Page,NavController,NavParams} from 'ionic-angular';
// import {TodoService} from '../data/todoService';
import {Service} from '../../providers/service/service';

@Page({
  templateUrl: 'build/pages/newItem/newItem.html'
})
export class NewItem {
  createdItem;
  constructor(nav:NavController, navParams:NavParams, service:Service) {
    this.nav = nav;
    this.navParams = navParams;
    this.service = service;
  }

  save(){
    this.navParams.data.items.push(this.createdItem);
    this.service.save(this.createdItem);
    this.nav.pop();

  }
}

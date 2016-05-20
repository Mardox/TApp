import {Page,NavController,NavParams} from 'ionic-angular';
import {Service} from '../../providers/service/service';

@Page({
  templateUrl: 'build/pages/newItem/newItem.html'
})
export class NewItem {

  createdItem;

  constructor(public nav:NavController, public navParams:NavParams, public service:Service) {
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

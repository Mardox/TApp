import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {
  data: any = null;
  storage;

  constructor() {
    this.storage = new Storage(SqlStorage, {name: 'todoStorage'});
    this.data = null;

    this.storage.get('todoStorage').then((todos) => {
      this.data = JSON.parse(todos);
    });
  }

  getData(){
    return this.storage.get('todoStorage');
  }


  save(item){
    if(!this.data){
      this.data = [item];

      let newData = JSON.stringify(this.data);
      this.storage.set('todoStorage', newData);
    }
    else{
      this.data.push(item);
      let newData = JSON.stringify(this.data);
      this.storage.set('todoStorage', newData);
    }
  }

  deferItem(){
    this.data.push(this.data.shift());
    let newData = JSON.stringify(this.data);
    this.storage.set('todoStorage', newData);
    return this.getData();
  }

  remove(item){
    for (var i=0; i < this.data.length; i++){
      if(item == this.data[i]){
        this.data.splice(i,1);
        break;
      }
    }
    let newData = JSON.stringify(this.data);
    this.storage.set('todoStorage', newData);
    return this.getData();
  }
}

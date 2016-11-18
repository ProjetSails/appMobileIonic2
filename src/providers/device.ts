import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Device provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Device {

  constructor(public http: Http) {
    console.log('Hello Device Provider');
  }

  myDevices(token: String) {
      return this.http.get('https://gestioncameraapi.herokuapp.com/device/mine',
          { headers: new Headers({ 'Authorization': 'JWT ' + token }) })
          .map(response => response.json());
  }

}

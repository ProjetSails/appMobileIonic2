import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Group provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Group {

  constructor(public http: Http) {
    console.log('Hello Group Provider');
  }

  myGroup(token: String, id: String) {
      return this.http.get('https://gestioncameraapi.herokuapp.com/groupuserrole?user=' + id,
          { headers: new Headers({'Authorization': 'JWT ' + token}) })
          .map(response => response.json());
  }

}

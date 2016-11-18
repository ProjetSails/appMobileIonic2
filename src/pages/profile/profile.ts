import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

    user: any;

    constructor(public navCtrl: NavController, private navParams: NavParams) {
        this.user = this.navParams.get('User');
    }

  Back() {
      this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('Hello Profile Page');
  }

}

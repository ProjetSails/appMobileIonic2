import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {

    camera: any;

    constructor(public navCtrl: NavController, private navParams: NavParams) {
        //this.camera = navParams.get('Camera');
    }

  ionViewDidLoad() {
    console.log('Hello Camera Page');
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Group } from '../../providers/group';
import { Device } from '../../providers/device';
import { ProfilePage } from '../../pages/profile/profile';
import { CameraPage } from '../../pages/camera/camera';


/*
  Generated class for the Main page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
    token: String;
    user: any
    groups: any;
    devices: any;

    constructor(public navCtrl: NavController, private navParams: NavParams, public group: Group,
            public device: Device, public alertCtrl: AlertController, ) {
        this.token = this.navParams.get('Token');
        this.user = this.navParams.get('User');
        console.log('Toekn: ' + this.token);

        this.group.myGroup(this.token, this.user.id).subscribe(response => this.groups = response,
            error => this.alertCtrl.create({
                title: 'Error get Groups',
                subTitle: 'Connection went Wrong!',
                buttons: ['Dismiss']
            }));

        this.device.myDevices(this.token).subscribe(response => this.devices = response,
            error => this.alertCtrl.create({
                title: 'Error get Groups',
                subTitle: 'Connection went Wrong!',
                buttons: ['Dismiss']
            }));
    }

    ViewProfil() {
        this.navCtrl.push(ProfilePage, {User: this.user});
    }

    LogOut() {
        this.navCtrl.pop();
    }

    DetailDevice(device: any) {
        this.navCtrl.push(CameraPage, {Camera: device});
    }

    DetailGroup(group: any) {
        console.log(group);
    }

  ionViewDidLoad() {
    console.log('Hello Main Page');
  }

}

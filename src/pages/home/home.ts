import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MainPage } from '../../pages/main/main';
import { AlertController  } from 'ionic-angular';
import { FORM_DIRECTIVES } from '@angular2/common';
import { Auth } from '../../providers/auth';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    response: any;
    login = { username: '', pwd: '' };
    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController, public auth: Auth) {
    }
    

    Login(login: String, pass: String) {
        this.auth.signin(this.login.username, this.login.pwd).subscribe(response => this.response = response,
            error => this.alertCtrl.create({
                title: 'Error Credentials',
                subTitle: 'Connection went Wrong!',
                buttons: ['Dismiss']
            }).present(),
            () => this.navCtrl.push(MainPage, {Token: this.response.token, User:this.response.user}));
    }
}

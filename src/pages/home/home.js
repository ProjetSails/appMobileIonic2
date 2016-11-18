var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
export var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.login = { username: '', pwd: '' };
    }
    HomePage.prototype.Login = function (login, pass) {
        var _this = this;
        this.auth.signin(this.login.username, this.login.pwd).subscribe(function (response) { return _this.token = response.token; }, function (error) { return _this.alertCtrl.create({
            title: 'Error Credentials',
            subTitle: 'Connection went Wrong!',
            buttons: ['Dismiss']
        }).present(); }, function () { return _this.navCtrl.push(AboutPage); });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [NavController, AlertController, Auth])
    ], HomePage);
    return HomePage;
}());

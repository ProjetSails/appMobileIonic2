import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
export declare class HomePage {
    navCtrl: NavController;
    alertCtrl: AlertController;
    auth: Auth;
    token: String;
    login: {
        username: string;
        pwd: string;
    };
    constructor(navCtrl: NavController, alertCtrl: AlertController, auth: Auth);
    Login(login: String, pass: String): void;
}

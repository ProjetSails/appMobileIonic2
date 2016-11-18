import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { ProfilePage } from '../pages/profile/profile';
import { CameraPage } from '../pages/camera/camera';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { Auth } from '../providers/auth';
import { Group } from '../providers/group';
import { Device } from '../providers/device';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ContactPage,
      HomePage,
      ProfilePage,
      CameraPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ContactPage,
      HomePage,
      ProfilePage,
      CameraPage
  ],
  providers: [
      Auth,
      Group,
      Device
  ]
})
export class AppModule {}

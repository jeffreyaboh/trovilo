import { Component, NgZone } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { FcmService } from 'src/app/services/fcm.service';
import { ToastController } from '@ionic/angular';

import { AngularFireAuth } from 'angularfire2/auth'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  public loading: HTMLIonLoadingElement
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private zone: NgZone,
    public afAuth: AngularFireAuth,

    private navCtrl: NavController,
    private authService: AuthenticationService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router,

    private fcm: FcmService,
    public toastController: ToastController
 
  ) {
    this.initializeApp();
  }


  private async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }

  private notificationSetup() {
    this.fcm.getToken();
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          this.presentToast(msg.aps.alert);
        } else {
          this.presentToast(msg.body);
        }
      });
  }




  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.notificationSetup();
    });
  }

  goToProfile() {
    this.navCtrl.navigateForward('/profile');
    
  }

  logOut(): void {
    this.authService.logoutUser().then(() => {
      this.router.navigateByUrl('login');
    });
  }


  
}

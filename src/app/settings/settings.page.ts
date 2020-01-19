import { Component, OnInit } from '@angular/core';


import { NavController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Observable } from 'rxjs';

import { ProfileService } from 'src/app/services/user/profile.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

 fullName: any;
 userEmail: string;
 user: string;

 eventListRef: firebase.firestore.CollectionReference;
  itemsCollection: AngularFirestoreCollection<unknown>;
  items: Observable<unknown[]>;



  
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private profileService: ProfileService,
    private firestore: AngularFirestore,
    private router: Router,
    private fireStore: AngularFirestore
  ) {





   }

  async ngOnInit() {

        
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
      this.user = this.authService.userDetails().uid;
    }else{
      this.navCtrl.navigateBack('/'); //remember to remove /dashboard
    }


   
  



  }



  logOut(): void {
    this.authService.logoutUser().then(() => {
      this.router.navigateByUrl('login');
    });
  }


  goToProfile() {
    this.navCtrl.navigateForward('/profile');
    
  }

}





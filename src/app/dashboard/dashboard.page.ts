import { Component, OnInit, NgModule } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
 
 
  userEmail: string;
  
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private firestore: AngularFirestore
  ) {

    

  }
 
  ngOnInit(){
    
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('/'); //remember to remove /dashboard
    }


  }

 
}
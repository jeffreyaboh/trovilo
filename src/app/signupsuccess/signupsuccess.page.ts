import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupsuccess',
  templateUrl: './signupsuccess.page.html',
  styleUrls: ['./signupsuccess.page.scss'],
})
export class SignupsuccessPage implements OnInit {
  navCtrl: any;

  constructor() { }

  ngOnInit() {
  }


  goToLoginPage(){
    this.navCtrl.navigateForward('/login');
  }

}

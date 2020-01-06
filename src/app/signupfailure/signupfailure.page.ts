import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupfailure',
  templateUrl: './signupfailure.page.html',
  styleUrls: ['./signupfailure.page.scss'],
})
export class SignupfailurePage implements OnInit {
  navCtrl: any;

  constructor() { }

  ngOnInit() {
  }

  goToRegisterPage(){
    this.navCtrl.navigateForward('/register');
  }

}

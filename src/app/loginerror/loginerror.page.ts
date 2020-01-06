import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginerror',
  templateUrl: './loginerror.page.html',
  styleUrls: ['./loginerror.page.scss'],
})
export class LoginerrorPage implements OnInit {
  navCtrl: any;

  constructor() { }

  ngOnInit() {
  }

  goToLoginPage(){
    this.navCtrl.navigateForward('login');
  }

}

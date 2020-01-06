import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
 
  validations_form: FormGroup;
  public loading: HTMLIonLoadingElement;
  errorMessage: string = '';
  successMessage: string = '';
 
  validation_messages = {
   'email': [
     { type: 'required', message: 'Email is required.' },
     { type: 'pattern', message: 'Enter a valid email.' }
   ],
   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
   ]
 };

 
 
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
 
  ngOnInit(){
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
 
  async tryRegister(value){
    this.loading = await this.loadingCtrl.create();
    await this.loading.present();

    this.authService.registerUser(value)
    
     .then(res => {
       console.log(res);
       this.errorMessage = "";
       this.loading.dismiss().then(() => {
        this.router.navigateByUrl('signupsuccess');
      });
     }, 
     
     err => {
       console.log(err);
       this.loading.dismiss();
       this.router.navigateByUrl('signupfailure');
       this.successMessage = "";
      });


      }

 
  goLoginPage(){
    this.navCtrl.navigateBack('');
  }
}
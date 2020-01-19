import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { ToastController } from '@ionic/angular';
 

import { LoadingController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.page.html',
  styleUrls: ['./idea-details.page.scss'],
})
export class IdeaDetailsPage implements OnInit {
 
  public loading: HTMLIonLoadingElement;

  idea: Idea = {
    name: '',
    notes: ''
  };
 
  constructor( public loadingCtrl: LoadingController, private activatedRoute: ActivatedRoute, private ideaService: IdeaService,
    private toastCtrl: ToastController, private router: Router) { }
 
  ngOnInit() { }
 
  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.ideaService.getIdea(id).subscribe(idea => {
        this.idea = idea;
      });
    }
  }
 
  async addIdea() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'bubbles',
      translucent: true,
      animated: true,
  keyboardClose: true,
  });
    this.ideaService.addIdea(this.idea).then(() => {
      this.router.navigateByUrl('/idea-list');
      this.loading.dismiss();
      this.showToast('Idea added');
    }, err => {
      this.showToast('There was a problem adding your idea :(');
    });
  }
 
  async deleteIdea() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'bubbles',
      translucent: true,
      animated: true,
  keyboardClose: true,
  });
  await this.loading.present();
    this.ideaService.deleteIdea(this.idea.id).then(() => {
      this.router.navigateByUrl('/idea-list');
      this.loading.dismiss();
      this.showToast('Idea deleted');
    }, err => {
      this.showToast('There was a problem deleting your idea :(');
    });
  }
 
  async updateIdea() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...',
      spinner: 'bubbles',
      translucent: true,
      animated: true,
  keyboardClose: true,
  });
  await this.loading.present();
    this.ideaService.updateIdea(this.idea).then(() => {
      this.router.navigateByUrl('/idea-list');
      this.loading.dismiss();
      this.showToast('Idea updated');
    }, err => {
      this.showToast('There was a problem updating your idea :(');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
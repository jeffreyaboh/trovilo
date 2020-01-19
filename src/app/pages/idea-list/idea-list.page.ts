import { Component, OnInit } from '@angular/core';
import { IdeaService, Idea } from 'src/app/services/idea.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router'; 
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.page.html',
  styleUrls: ['./idea-list.page.scss'],
})
export class IdeaListPage implements OnInit {
  public loading: HTMLIonLoadingElement;
  private ideas: Observable<Idea[]>;
 
  idea: Idea = {
    name: '',
    notes: ''
  };

  constructor( public loadingCtrl: LoadingController, private ideaService: IdeaService, private toastCtrl: ToastController, private router: Router) { }
 
  async ngOnInit() {
  setTimeout(() => {
    this.ideas = this.ideaService.getIdeas();
  }, 2500);
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

  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}

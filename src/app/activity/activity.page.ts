import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service'
import { ProfileService } from 'src/app/services/user/profile.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { NavController, ModalController } from '@ionic/angular';


export interface MyData {
  name: string;
  filepath: string;
  email: string;
  size: number;
  userId: string;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {


  userEmail: string;
  // Upload Task 
  task: AngularFireUploadTask;
 
  // Progress in percentage
  percentage: Observable<number>;
 
  // Snapshot of uploading file
  snapshot: Observable<any>;
 
  // Uploaded File URL
  UploadedFileURL: Observable<string>;
 
  //Uploaded Image List
  images: Observable<MyData[]>;
 
  //File details  
  fileName:string;
  fileSize:number;
 


  
 
  //Status check 
  isUploading:boolean;
  isUploaded:boolean;
 
  private imageCollection: AngularFirestoreCollection<MyData>;
  
  public userProfile: firebase.firestore.DocumentReference;
  public currentUser: firebase.User;
  afAuth: any;
  uid: any;
  user: string;
  userDoc: any;

  

  constructor(private navCtrl: NavController,  private profileService: ProfileService, private authService: AuthenticationService, private storage: AngularFireStorage, private database: AngularFirestore) {

    this.isUploading = false;
    this.isUploaded = false;
    

    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('freakyImages');
    this.images = this.imageCollection.valueChanges();

   }

   ngOnInit(){
    
    if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
      this.user = this.authService.userDetails().uid;
    }else{
      this.navCtrl.navigateBack('/'); //remember to remove /dashboard
    }

    



  }


   uploadFile(event: FileList) {
    
 
    // The File object
    const file = event.item(0)
 
    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( ')
     return;
    }
 
    this.isUploading = true;
    this.isUploaded = false;
 
 
    this.fileName = file.name;
 
    // The storage path
    const path = `userFiles/${this.user}/uploads/${new Date().getTime()}_${file.name}`;
 

    // Totally optional metadata
    const customMetadata = { app: 'Trovilo File Hosting Service - Powered by Ethion' };
 
    //File reference
    const fileRef = this.storage.ref(path);

 
    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });
 
    // Get file progress percentage
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
        
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
            filepath: resp,
            email: this.userEmail,
            size: this.fileSize,
            userId: this.user,
          });
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
  }
 
  addImagetoDB(image: MyData) {



    //Create an ID for document
    const id = this.database.createId();
 
    //Set document id with value in database
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

  



}

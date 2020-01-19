import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  email: string;
  public userId: string;
  currentUser: any;
  database: any;
  uid: string;
  user: string;
  fullname: string;
  company: string;

  constructor(private afAuth: AngularFireAuth) { }



  registerUser(value): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(value.email, value.password)
      .then((newUserCredential: firebase.auth.UserCredential) => {
        firebase
          .firestore()
          .doc(`/userProfile/${newUserCredential.user.uid}`)
          .set ({ fullname: value.first, company: value.last, email: value.email, UserId: newUserCredential.user.uid });
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  
   loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
   }

   getUser(): Promise<firebase.User> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if (user) {
            resolve(user);
          } else {
            reject(null);
          }
        },
        error => {
          reject(error);
        }
      );
    });
  }
  
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           console.log("LOG Out");
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     })
   }
  
   userDetails(){
     return firebase.auth().currentUser;
   }

   updateimage(imageurl) {
    var promise = new Promise((resolve, reject) => {
        firebase.auth().currentUser.updateProfile({
            displayName: firebase.auth().currentUser.displayName,
            photoURL: imageurl      
        }).then(() => {
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
            displayName: firebase.auth().currentUser.displayName,
            photoURL: imageurl,
            uid: firebase.auth().currentUser.uid
            }).then(() => {
                resolve({ success: true });
                }).catch((err) => {
                    reject(err);
                })
        }).catch((err) => {
              reject(err);
           })  
    })
    return promise;
}



}
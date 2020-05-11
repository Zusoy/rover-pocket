import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    public alertController: AlertController,
    private navCtrl: NavController,
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    ) {}
dataUser = {
        email: '',
        password: '',
        newPassword: '',
        oldPassword: '',
        pseudo: '',
        uid: ''
      };

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerte',
      subHeader: 'Voulez-vous vraiment supprimer votre compte ?',
      buttons: ['NON', 'OUI'],
    });
    await alert.present();
  }

  deleteUser() {
    var user = firebase.auth().currentUser;

    user.delete().then(() => {
      this.navCtrl.navigateRoot('pages/login');
    }).catch(function(error) {
      // An error happened.
    });
  }

  resetPassword() {
    var user = firebase.auth().currentUser;
    var newPassword = this.dataUser.newPassword;
    var oldPassword = this.dataUser.oldPassword;
    /*var password = this.dataUser.password;*/

    //if (oldPassword === password) {*/
    user.updatePassword(newPassword).then(function() {
        // Update successful.
        console.log('passwordReset');
      }).catch(function(error) {
        // An error happened.
    });
 // }
 //   else{console.log('mdp différent');}
  }

resetPseudo() {
  this.afAuth.authState.subscribe(auth => {
          var postData = {
    pseudo: this.dataUser.pseudo,
  };
          var newPostKey = firebase.database().ref().child('Users').push().key;
          var updates = {};
          updates['/Users/' + auth.uid ] = postData;

          return firebase.database().ref().update(updates);
})

}

  // Write the new post's data simultaneously in the posts list and the user's post list.

}

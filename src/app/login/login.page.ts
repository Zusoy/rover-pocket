import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  providerFb: firebase.auth.FacebookAuthProvider;

  dataUser = {
      email: '',
      password: ''
    };
  connected: boolean;
  userId: string;
  mail: string;
  method: any;

  constructor(
    public afDB: AngularFireDatabase,
    public toastController: ToastController,
    public afAuth: AngularFireAuth,
    private fb: Facebook,
    public platform: Platform
  ) {
    this.providerFb = new firebase.auth.FacebookAuthProvider();

    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connect&eacute;');
        this.connected = false;
      } else {
        console.log('connect&eacute;: ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
      }
    });
  }

/* --- --- CHARGEMENT DE LA PAGE --- --- */

  ngOnInit() {
    this.logout();
  }

/* --- --- CONNECTION EMAIL --- --- */

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
    .then(() => {
      console.log('Connexion r&eacute;ussie');
      this.loginSuccess();
      this.dataUser = {
        email: '',
        password: ''
      };
    }).catch(err => {
      this.loginError();
      console.log('Erreur: ' + err);
    });
  }

  async loginError() {
    const toast = await this.toastController.create({
      message: 'Adresse email ou mot de passe incorrect.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async loginSuccess() {
    const toast = await this.toastController.create({
      message: 'Vous &ecirc;tes maintenant connect&eacute;.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

/* --- --- CONNECTION FACEBOOK --- --- */

  facebookLogin() {
      if (this.platform.is('cordova')) {
        console.log('PLateforme cordova');
        this.facebookCordova();
      } else {
        console.log('PLateforme Web');
        this.facebookWeb();
      }
  }



  facebookCordova() {
      this.fb.login(['email']).then( (response) => {
          const facebookCredential = firebase.auth.FacebookAuthProvider
              .credential(response.authResponse.accessToken);
          firebase.auth().signInWithCredential(facebookCredential)
          .then((success) => {
              console.log('Info Facebook: ' + JSON.stringify(success));
          }).catch((error) => {
              console.log('Erreur: ' + JSON.stringify(error));
          });
      }).catch((error) => { console.log(error); });
    }

  facebookWeb() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((success) => {
        console.log('Info Facebook: ' + JSON.stringify(success));
      }).catch((error) => {
        console.log('Erreur: ' + JSON.stringify(error));
      });
  }

/* --- --- DECONNECTION --- --- */

  logout() {
    this.afAuth.auth.signOut();
  }
}


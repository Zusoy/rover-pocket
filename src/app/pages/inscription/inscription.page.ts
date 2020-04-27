import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

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
    public menuCtrl: MenuController

  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connect�');
        this.connected = false;
      } else {
        console.log('connect�: ' + auth.uid);
        this.connected = true;
        this.userId = auth.uid;
        this.mail = auth.email;
        this.method = auth.providerData[0].providerId;
      }
    });
  }

  ngOnInit() {
  }

signUp() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
    .then(() => {
      console.log('Connexion r�ussie');
      this.dataUser = {
        email: '',
        password: ''
      };
      this.loginSuccess();
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
      message: 'Vous �tes maintenant inscrit.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
}

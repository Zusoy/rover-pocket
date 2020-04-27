import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth"; 
import * as firebase from "firebase"; 
import { ToastController } from '@ionic/angular';
import {  MenuController } from '@ionic/angular';


@Component({
  selector: 'app-mdpperdu',
  templateUrl: './mdpperdu.page.html',
  styleUrls: ['./mdpperdu.page.scss'],
})
export class MdpperduPage implements OnInit {

    dataUser = {
        email: '',
    };

    constructor(
        private afAuth: AngularFireAuth,
        public toastController: ToastController,
        public menuCtrl: MenuController

    ) { }

  ngOnInit() {
  }

  getAuth() { 
    return this.afAuth.auth; 
  }

  async resetPwdError() {
    const toast = await this.toastController.create({
      message: 'Une erreur s\'est produite lors de l\'envoie du mail de réinitialisation du mot de passe.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async resetPwdSuccess() {
    const toast = await this.toastController.create({
      message: 'Un lien pour réinitialiser votre mot de passe à été envoyé dans votre boîte mail.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async resetPwdNoEmail() {
    const toast = await this.toastController.create({
      message: 'Veuillez insérer une adresse mail s\'il vous plaît.',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  /** 
   * Initiate the password reset process for this user 
   * @param email email of the user 
   */ 
    resetPasswordInit(email: string) { 
        return this.afAuth.auth.sendPasswordResetEmail(
        email, 
        { url: 'https://coincoininsolite-1cf37.firebaseapp.com/__/auth/action' }); 
    }

    resetPassword() { 
        if (!this.dataUser.email) { 
          this.resetPwdNoEmail(); 
        }
        else
        {
            this.resetPasswordInit(this.dataUser.email)
            .then(
            () => this.resetPwdSuccess(), 
            (rejectionReason) => alert(rejectionReason))
            .catch(e => this.resetPwdError()); 
        }
    }

    ionViewWillEnter() {
      this.menuCtrl.enable(false);
     }
}

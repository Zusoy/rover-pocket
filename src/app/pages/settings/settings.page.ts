import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerte',
      subHeader: 'Voulez-vous vraiment supprimer votre compte ?',
      buttons: ['NON', 'OUI'],
    });
    await alert.present();
  }

}

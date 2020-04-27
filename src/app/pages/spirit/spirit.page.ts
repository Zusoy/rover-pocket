import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { MarsService } from 'src/app/services/MarsService';
import { Rover } from 'src/app/models/Rover';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.page.html',
  styleUrls: ['./spirit.page.scss'],
})
export class SpiritPage {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;


  dataList: any;

  constructor(private roverapi: MarsService) {
    this.dataList = [];
    let rover_name = this.roverapi.getRovers();
    this.getRoverData(rover_name[0])
  }



  loadData(event) {

    setTimeout(() => {
      console.log('Done');
      const rovers = this.roverapi.getRovers();
      this.getRoverData(rovers[0]);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  getRoverData(rover: Rover) {
    for (let i = 0; i < 25; i++) {
      this.dataList.push(this.roverapi.getRoverLastPhotos(rover));
    }
  }
}

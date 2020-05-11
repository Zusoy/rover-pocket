import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { MarsService } from 'src/app/services/MarsService';
import { Rover } from 'src/app/models/Rover';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.page.html',
  styleUrls: ['./spirit.page.scss'],
})
export class SpiritPage  implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;


  /**
	 * Mars Rovers Array
	 */
  private rovers;
  private count = 1;
  data: any[] = [];

	/**
	 * RoversPage Constructor
	 * @param mars              Injected Mars Service
	 * @param loadingController Injected Loading Controller
	 * @param modalController   Injected Modal Controller
	 * @param galleryContainer  Injected Gallery Container
	 */
	constructor(
		private mars: MarsService,
		private loadingController: LoadingController,
	  private roverapi: MarsService) {

  }

 ngOnInit(){
  this.rovers = this.roverapi.getRovers(this.count);
  this.rovers.then(spirit =>this.getRoverData( spirit[1], this.count));
 }


  loadData(event) {

    setTimeout(() => {
      this.rovers = this.roverapi.getRovers(this.count);
      this.rovers.then(spirit =>this.getRoverData( spirit[1], this.count));
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 25) {
        event.target.disabled = true;
      }
    }, this.data.length);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  getRoverData(rover: Rover, count: number) {
    let roveri = this.roverapi.getRoverLastPhotos(rover, count)
    roveri.then(rovers => {
      this.data = [...this.data, ...rovers];
    });
    this.count = this.count + 1;
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MarsService } from 'src/app/services/MarsService';
import { LoadingController, IonInfiniteScroll } from '@ionic/angular';
import { Rover } from 'src/app/models/Rover';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.page.html',
  styleUrls: ['./curiosity.page.scss'],
})
export class CuriosityPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

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
    private roverapi: MarsService,
    private router: Router) {

  }

 ngOnInit(){
  this.rovers = this.roverapi.getRovers(this.count);
  this.rovers.then(curiosity =>this.getRoverData( curiosity[0], this.count));
 }


  loadData(event) {

    setTimeout(() => {
      this.rovers = this.roverapi.getRovers(this.count);
      this.rovers.then(curiosity =>this.getRoverData( curiosity[0], this.count));
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

  redirectToCuriosity(){
    this.router.navigate(['curiosity']);
  }

  redirectToSpirit(){
    this.router.navigate(['spirit']);
  }

  redirectToOpportunity(){
    this.router.navigate(['opportunity']);
  }

}

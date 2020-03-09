import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { RoverService } from '../services/rover.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage {


  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  dataList:any;

  constructor(private rover_service: RoverService) {
    this.dataList = [];
    this.getRoverData();
  }



  loadData(event) {

    setTimeout(() => {
      console.log('Done');
      this.getRoverData();
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.dataList.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  getRoverData() {
    let rover_name = "opportunity";
    let camera = "navcam";
    let page = "1";
    let sol = "1000";
    for (let i = 0; i < 25; i++) {
      this.dataList.push(this.rover_service.requestRover(rover_name, camera, page, sol));
    }
  }
}

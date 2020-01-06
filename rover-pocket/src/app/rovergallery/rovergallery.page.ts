import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-rovergallery',
  templateUrl: './rovergallery.page.html',
  styleUrls: ['./rovergallery.page.scss'],
})


export class RovergalleryPage {
  constructor(public http: HttpClient,public loadingController: LoadingController) {
    this.getRoverDataList()
  }
  roverdataList:any[]=[]
  async getRoverDataList()
  {
    this.http.get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&camera=navcam&api_key=Xir2W2pGbpExcRdf95vtHb99iE6BQgpm7XA33mnx')
      .subscribe(data=>{
        this.roverdataList=data["photos"]
      })
    }
  }
import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public http: HttpClient,public loadingController: LoadingController) {
    this.getRoverDataList()
  }
  roverdataList:any[]=[]
  async getRoverDataList()
  {
    this.http.get(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=Xir2W2pGbpExcRdf95vtHb99iE6BQgpm7XA33mnx')
      .subscribe(data=>{
        this.roverdataList=data["photos"]
      })
    }
  }
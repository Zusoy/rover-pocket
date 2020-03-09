import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {plainToClass} from "class-transformer";
import { Rover } from '../models/Rover';

@Injectable({
  providedIn: 'root'
})
export class RoverService {

  constructor(private http: HttpClient) { }

  requestRover(rover_name: string, camera: string, page: string, sol: string): Observable<any>{

    const url = `${environment.nasa.baseUrl}`+ rover_name + "/photos";
    let params = new HttpParams();
    params = params.set('api_key', `${environment.nasa.apiKey}`);
    params = params.set('camera', camera);
    params = params.set('page', page);
    params = params.set('sol', sol);
    return this.http.get( url, {responseType:'json', params}).pipe(
      map(data=> console.log("pepito")));
  }
}
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rover } from '../models/rover.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoverService {

  constructor(private http: HttpClient) { }

  getAllfromOneRover(rover_name: string, camera: string, page: string, sol: string): Observable<Array<Rover>> {

    const url = `${environment.nasa.baseUrl}`+ rover_name + "/photos";
    let params = new HttpParams();
    params = params.set('api_key', `${environment.nasa.apiKey}`);
    params = params.set('camera', camera);
    params = params.set('page', page);
    params = params.set('sol', sol);
    return this.http.get(url, {params}).pipe(
      map((body: any) => {
        if (body && body.count >= 0) {
          return body.results as Array<Rover>;
        }
        return [];
      })
    );
  }
}
import {Injectable} from '@angular/core';
import {NasaAPI} from './NasaAPI';

import {Rover} from '../models/Rover';
import {Camera} from '../models/Camera';
import { Photo } from '../models/Photo';


@Injectable({
    providedIn: 'root'
})
export class MarsService
{
    /**
     * MarsService Constructor
     * @param api
     */
    constructor(private api: NasaAPI)
    {

    }


    /**
     * Get Rover last photos
     * @param rover
     */
    public async getRoverLastPhotos(rover: Rover, count: number)
    {
        let response = await this.api.request(`rovers/${rover.getName().toLowerCase()}/photos`, count);
        let latestPhotos = [];
        response.photos.map(photoJson => {
            let photo = new Photo();
            photo.setId(photoJson.id);
            photo.setSol(photoJson.sol);
            photo.setEarthDate(new Date(photoJson.earth_date));
            photo.setSrc(photoJson.img_src);
            photo.setRover(rover);
            photo.setCamera(rover.getCameraByName(photoJson.camera.name));

            latestPhotos.push(photo);
        });
        return latestPhotos;
    }

    public async getRovers(count: number): Promise<any>
    {
        let rovers = [];

        let response = await this.api.request('rovers/', count);

        response.rovers.map(roverJson => {
            let rover = new Rover();
            rover.setId(roverJson.id);
            rover.setName(roverJson.name);
            rover.setLandingDate(new Date(roverJson.landing_date));
            rover.setLaunchDate(new Date(roverJson.launch_date));
            rover.setStatus(roverJson.status);
            rover.setMaxDate(roverJson.max_date);
            rover.setTotalPhotos(roverJson.total_photos);

            roverJson.cameras.map(cam => {
                let camera = new Camera();
                camera.setName(cam.name);
                camera.setFullName(cam.full_name);

                rover.addCamera(camera);
            });

            //push new rover object into array
            rovers.push(rover);
        });

        return rovers;
    }
}
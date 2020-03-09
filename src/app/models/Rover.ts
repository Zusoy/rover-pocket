import {BaseModel} from './BaseModel';
import {Camera} from './Camera';


export class Rover extends BaseModel
{
    /**
     * Rover Name
     */
    protected name: string;

    /**
     * Rover Landing Date
     */
    protected landingDate: Date;

    /**
     * Rover Launch Date
     */
    protected launchDate: Date;

    /**
     * Rover Max Date to get Informations
     */
    protected maxDate: Date;

    /**
     * Rover Status
     */
    protected status: string;

    /**
     * Rover Total Photos
     */
    protected totalPhotos: number;

    /**
     * Rover Cameras
     */
    protected cameras: Camera[] = [];


    /**
     * Set Rover Name
     * @param name
     */
    public setName(name: string): void
    {
        this.name = name;
    }


    /**
     * Get Rover Name
     */
    public getName(): string
    {
        return this.name
    }


    /**
     * Set Rover Landing Date
     * @param date
     */
    public setLandingDate(date: Date): void
    {
        this.landingDate = date;
    }


    /**
     * Get Rover Landing Date
     */
    public getLandingDate(): Date
    {
        return this.landingDate;
    }


    /**
     * Set Rover Launch Date
     * @param date
     */
    public setLaunchDate(date: Date): void
    {
        this.launchDate = date;
    }


    /**
     * Get Rover Launch Date
     */
    public getLaunchDate(): Date
    {
        return this.launchDate;
    }


    /**
     * Set Rover Max Date
     * @param maxDate
     */
    public setMaxDate(maxDate: Date): void
    {
        this.maxDate = maxDate;
    }


    /**
     * Get Rover Max Date
     */
    public getMaxDate(): Date
    {
        return this.maxDate;
    }


    /**
     * Set Rover Status
     * @param status
     */
    public setStatus(status: string): void
    {
        this.status = status;
    }


    /**
     * Get Rover Status
     */
    public getStatus(): string
    {
        return this.status;
    }


    /**
     * Set Rover Total Photos
     * @param total
     */
    public setTotalPhotos(total: number): void
    {
        this.totalPhotos = total;
    }


    /**
     * Get Rover Total Photos
     */
    public getTotalPhotos(): number
    {
        return this.totalPhotos;
    }


    /**
     * Add Rover Camera
     * @param camera
     */
    public addCamera(camera: Camera): void
    {
        this.cameras.push(camera);
    }


    /**
     * Get All Rover Cameras
     */
    public getCameras(): Camera[]
    {
        return this.cameras;
    }


    /**
     * Get Rover Camera by Name
     * @param camName
     */
    public getCameraByName(camName: string): Camera
    {
        return this.cameras.find(cam => {
            return cam.getName() == camName;
        });
    }
}

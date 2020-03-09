import { BaseModel } from './BaseModel';
import { Rover } from './Rover';
import { Camera } from './Camera';

export class Photo extends BaseModel
{
    /**
     * Photo Sol Number
     */
    protected sol: number;

    /**
     * Photo Earth Date
     */
    protected earthDate: Date;

    /**
     * Photo Src Link
     */
    protected src: string;

    /**
     * Photo Rover
     */
    protected rover: Rover;

    /**
     * Photo Camera
     */
    protected camera: Camera;


    /**
     * Set Photo Sol number
     * @param sol
     */
    public setSol(sol: number): void
    {
        this.sol = sol;
    }


    /**
     * Get Photo Sol Number
     */
    public getSol(): number
    {
        return this.sol;
    }


    /**
     * Set Photo Earth Date
     * @param date
     */
    public setEarthDate(date: Date): void
    {
        this.earthDate = date;
    }


    /**
     * Get Photo Earth Date
     */
    public getEarthDate(): Date
    {
        return this.earthDate;
    }


    /**
     * Set Photo Source Link
     * @param src
     */
    public setSrc(src: string): void
    {
        this.src = src;
    }


    /**
     * Get Photo Source Link
     */
    public getSrc(): string
    {
        return this.src;
    }


    /**
     * Set Photo Rover
     * @param rover
     */
    public setRover(rover: Rover): void
    {
        this.rover = rover;
    }


    /**
     * Get Photo Rover
     */
    public getRover(): Rover
    {
        return this.rover;
    }


    /**
     * Set Photo Camera
     * @param cam
     */
    public setCamera(cam: Camera): void
    {
        this.camera = cam;
    }


    /**
     * Get Photo Camera
     */
    public getCamera(): Camera
    {
        return this.camera;
    }
}

import {BaseModel} from './BaseModel';

export class Camera
{
    /**
     * Camera Name
     */
    protected name: string;

    /**
     * Camera Full Name
     */
    protected fullName: string;


    /**
     * Set Camera Name
     * @param name
     */
    public setName(name: string): void
    {
        this.name = name;
    }


    /**
     * Get Camera Name
     */
    public getName(): string
    {
        return this.name;
    }


    /**
     * Set Camera Full Name
     * @param fullName
     */
    public setFullName(fullName: string): void
    {
        this.fullName = fullName;
    }


    /**
     * Get Camera Full Name
     */
    public getFullName(): string
    {
        return this.fullName;
    }
}

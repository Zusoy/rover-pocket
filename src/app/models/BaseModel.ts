export class BaseModel
{
    /**
     * Model ID
     */
    protected id: number;


    /**
     * Set Model ID
     * @param id
     */
    public setId(id: number): void
    {
        this.id = id;
    }


    /**
     * Get Model ID
     */
    public getId(): number
    {
        return this.id;
    }
}
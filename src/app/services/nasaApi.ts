import {Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class NasaAPI
{

    /**
    * Send request to NASA API
    * @param url
    * @param method
    */
    public async request(url: string, method: string = 'GET')
    {
        let apiURL = this.makeNasaApiURL(url);
        let options = {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        }

        let result = await fetch(apiURL, options).then(response => {
            let json = response.json()
            return json;
        });

        return result;
    }


    /**
    * Make NASA API URL
    * @param url
    */
    public makeNasaApiURL(url: string): string
    {
        let apiUrl = environment.nasa.baseUrl + url;
        let querySeparator = (apiUrl.indexOf('?') != -1)
        ? '&'
        : '?';

        return (apiUrl + querySeparator + `api_key=${environment.nasa.apiKey}`);
    }
}
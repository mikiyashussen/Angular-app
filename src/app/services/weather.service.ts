import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = "https://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=c38f156eeb8a0dfd31a2f55e6f7dd30e";

  constructor(private _http: HttpClient) { }

  getDailyForecast(): Observable<any>{
    return this._http.get(this.url);
  }
}

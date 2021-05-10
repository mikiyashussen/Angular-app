import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url = 'http://ipwhois.app/json/8.8.4.4';
  constructor(private http: HttpClient) { }

  getLocation(): Observable<any>{
    return this.http.get(this.url);
  }
}

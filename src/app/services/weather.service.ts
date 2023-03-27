import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.models';

const baseurl = 'http://localhost:3000/api/weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(baseurl, {
      params: new HttpParams().set('q', cityName),
    });
  }
}

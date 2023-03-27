import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

const CITY = 'Nairobi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;
  cityName?: string;

  ngOnInit(): void {
    this.fetchWeatherData(CITY);
  }

  private fetchWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (res) => {
        this.weatherData = res;
      },
      error(err) {
        console.log({ err });
      },
    });
  }

  public clearCityName(): void {
    this.cityName = '';
  }

  public onSubmit(): void {
    if (this.cityName) {
      this.fetchWeatherData(this.cityName);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather(cityName: string, countryCode: string) {
    this.weatherService.getWeather(cityName, countryCode).subscribe(
      (res) => {
        console.log(res);
        this.weather = res;
      },
      (err) =>
        alert(
          'No obtuvimos resultados. ¿Has escrito bien la ciudad y su código?'
        )
    );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);
      console.log(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please, insert some values');
    }

    cityName.focus();
    return false;
  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../services/weather.service";
import { data } from "../../models/data";
import { Chart } from "chart.js";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart: any;

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(){
    this.weather.getDailyForecast().subscribe(data => {
      console.log(data);
      let temp_max = data['list'].map((_element: any) =>
       _element.main.temp_max);
       console.log(temp_max);
       let temp_min = data['list'].map((_element: any) =>
       _element.main.temp_min);
       console.log(temp_min);
       let allDates= data['list'].map((_element: any) =>
       _element.dt);

       let weatherDates: any = [];
       allDates.forEach((_element: any) => {
         let jsDate = new Date(_element * 1000)
         weatherDates.push(jsDate.toLocaleTimeString(
           'en', { year: 'numeric', month: 'short', day: 'numeric'}))

             this.chart = new Chart('canvas', {
             type: 'line',
             data: {
               labels: weatherDates,
               datasets: [
                 {
                   data: temp_max,
                   borderColor: "#3cba9f",
                   fill: false,

                 },
                 {
                  data: temp_min,
                  borderColor: "#ffcc00",
                  fill: false,
                 },
               ]
             },
            //  options: {
            //    legend: {
            //      display: false
            //    },
            //    scales: {
            //      xAxes: [{
            //        display: true
            //      }],
            //      yAxes: [{
            //        display: true
            //      }],
            //    }
            //  }
           });

         
       });
    
    } )
}
}

import { Component } from '@angular/core';
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent {

  public chart: any;

  ngOnInit(): void {
    this.chart = new Chart("chart", {
      type: 'line',
      data: {// values on X-Axis
        labels: ['1','2','3','4','5','6','7','8', ],
        datasets: [
          {
            label: "One",
            data: ['467','576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Two",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:3
      }
    });
  }


}

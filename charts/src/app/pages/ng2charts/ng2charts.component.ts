import { Component } from '@angular/core';
import {ChartConfiguration, ChartOptions} from "chart.js";

@Component({
  selector: 'app-ng2charts',
  templateUrl: './ng2charts.component.html',
  styleUrls: ['./ng2charts.component.scss']
})
export class Ng2chartsComponent {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['1','2','3','4','5','6','7','8'],
    datasets: [
      {
        data: [467,576,572,79,92,574,573,576],
        label: 'One',
      },
      {
        data: [542,542,536,327,17,0.00,538,541],
        label: 'Two',
      },

    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartLegend = true;
}

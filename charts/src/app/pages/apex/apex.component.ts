import {Component, ViewChild} from '@angular/core';
import {ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartComponent} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss']
})
export class ApexComponent {

  @ViewChild('chart', { static: false }) chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "One",
          data: [467,576,572,79,92,574,573,576]
        },
        {
          name: "Two",
          data: [542,542,536,327,17,0.00,538,541]
        }

      ],
      chart: {
        height: 400,
        type: "line"
      },
      title: {
        text: "My First Angular Chart"
      },
      xaxis: {
        categories: [1,2,3,4,5,6,7,8]
      }
    };
  }


}

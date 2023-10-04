import { Component } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent {

  ngOnInit() {
    let chart = echarts.init(document.getElementById('echarts'));
    chart.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1','2','3','4','5','6','7','8',]
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      series: [
        {
          name:'one',
          type:'line',
          data: ['467','576', '572', '79', '92','574', '573', '576']
        },
        {
          name:'two',
          type:'line',
          data: ['542', '542', '536', '327', '17','0.00', '538', '541']
        }
      ]
    })
  }
}

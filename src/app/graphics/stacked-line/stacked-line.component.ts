import { AfterViewInit, Component, Input } from '@angular/core';
import * as echarts from 'echarts';
import { StackedLineData } from '../interfaces/stacked-line-data.interface';

@Component({
  selector: 'app-stacked-line',
  templateUrl: './stacked-line.component.html',
  styleUrls: ['./stacked-line.component.css']
})
export class StackedLineComponent implements AfterViewInit {
  @Input() stackedLineData!: StackedLineData;
  echartsInstance?: echarts.ECharts;

  domId:string = Math.floor(Math.random() * 1000000).toString().padStart(6, '0') + String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  ngAfterViewInit(): void {        
    this.initChart();
  }

  initChart(): void {
    this.echartsInstance = echarts.init(document.getElementById(this.domId) as HTMLDivElement);
    this.echartsInstance.setOption({            
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Actual', 'Pasada']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Actual',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Pasada',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    });
  }
}

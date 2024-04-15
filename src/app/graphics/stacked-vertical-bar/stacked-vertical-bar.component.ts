import { AfterViewInit, Component, Input } from '@angular/core';
import * as echarts from 'echarts';
import { StackedHorizontalBarData } from '../interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-stacked-vertical-bar',
  templateUrl: './stacked-vertical-bar.component.html',
  styleUrls: ['./stacked-vertical-bar.component.css']
})
export class StackedVerticalBarComponent {
  @Input() data!: StackedHorizontalBarData;

  echartsInstance?: echarts.ECharts;
  domId:string = Math.floor(Math.random() * 1000000).toString().padStart(6, '0') + String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  ngAfterViewInit(): void {        
    this.initChart();
  }

  initChart(): void {
    this.echartsInstance = echarts.init(document.getElementById(this.domId) as HTMLDivElement);
    this.echartsInstance.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        legend: {
          textStyle: {
            color: this.data.text_color
          },
          bottom: '0%' 
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '15%',
          top: '0%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: this.data.graphic.categories,
          axisLabel: { // Configurar el estilo del texto para el eje x
            color: this.data.text_color
          }
        },
        series: this.data.graphic.series,                
    });
  }
}


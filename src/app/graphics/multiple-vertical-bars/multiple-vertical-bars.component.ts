import { Component, Input, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';
import { GraphicData } from '../interfaces/multiple-vertical-bars.interface';

@Component({
  selector: 'app-multiple-vertical-bars',
  templateUrl: './multiple-vertical-bars.component.html',
  styleUrls: ['./multiple-vertical-bars.component.css']
})
export class MultipleVerticalBarsComponent implements AfterViewInit {
  @Input() data!: GraphicData;
  echartsInstance?: echarts.ECharts;
  domId:string = Math.floor(Math.random() * 1000000).toString().padStart(6, '0') + String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  ngAfterViewInit(): void {        
    this.initChart();
  }

  initChart(): void {
    this.echartsInstance = echarts.init(document.getElementById(this.domId) as HTMLDivElement);
    this.echartsInstance.setOption({        
        legend: {
          textStyle: {
            color: this.data.text_color
          },
          bottom: '0%' 
        },
        tooltip: {},
        dataset: {
          source: this.data.graphic.source
        },
        xAxis: { type: 'category' },
        yAxis: {},        
        series: this.data.graphic.series           
    });
  }

}

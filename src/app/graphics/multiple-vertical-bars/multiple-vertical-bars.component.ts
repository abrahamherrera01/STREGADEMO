import { Component, Input, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-multiple-vertical-bars',
  templateUrl: './multiple-vertical-bars.component.html',
  styleUrls: ['./multiple-vertical-bars.component.css']
})
export class MultipleVerticalBarsComponent implements AfterViewInit {
  @Input() data!: any;
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
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]//this.data.graphic.source
        },
        xAxis: { type: 'category' },
        yAxis: {},        
        series: [
          { 
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              formatter: function(params: any) {
                return params.value[1] + '%'; 
              }
            }
          }, 
          { 
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              formatter: function(params: any) {
                return params.value[2] + '%'; 
              }
            }
          }, 
          { 
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              formatter: function(params: any) {                
                return params.value[3] + '%'; 
              }
            }
          }
        ]             
    });
  }

}

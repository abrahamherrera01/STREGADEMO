import { AfterViewInit, Component, Input } from '@angular/core';
import * as echarts from 'echarts';
import { DatasetBarData } from '../interfaces/dataset-bar.interface';

@Component({
  selector: 'app-dataset-bar',
  templateUrl: './dataset-bar.component.html',
  styleUrls: ['./dataset-bar.component.css']
})
export class DatasetBarComponent implements AfterViewInit {
  
  @Input() datasetBarData!: DatasetBarData;

  echartsInstance?: echarts.ECharts;
  domId:string = Math.floor(Math.random() * 1000000).toString().padStart(6, '0') + String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  ngAfterViewInit(): void {        
    this.initChart();
  }

  initChart(): void {
    this.echartsInstance = echarts.init(document.getElementById(this.domId) as HTMLDivElement);
    this.echartsInstance.setOption({
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
          { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
          { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
        ]
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    });
  }
}

import { AfterViewInit, Component, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-basic-treemap',
  templateUrl: './basic-treemap.component.html',
  styleUrls: ['./basic-treemap.component.css']
})
export class BasicTreemapComponent implements AfterViewInit {
  @Input() data!: any;

  echartsInstance?: echarts.ECharts;
  domId:string = Math.floor(Math.random() * 1000000).toString().padStart(6, '0') + String.fromCharCode(Math.floor(Math.random() * 26) + 97);

  ngAfterViewInit(): void {        
    this.initChart();
  }

  initChart(): void {
    this.echartsInstance = echarts.init(document.getElementById(this.domId) as HTMLDivElement);
    this.echartsInstance.setOption({        
        series: [
          {
            type: 'treemap',
            data: [
              {
                name: 'nodeA', // First tree
                value: 10,
                children: [
                  {
                    name: 'nodeAa', // First leaf of first tree
                    value: 4
                  },
                  {
                    name: 'nodeAb', // Second leaf of first tree
                    value: 6
                  }
                ]
              },
              {
                name: 'nodeB', // Second tree
                value: 20,
                children: [
                  {
                    name: 'nodeBa', // Son of first tree
                    value: 5,
                    children: [
                      {
                        name: 'nodeBa1', // Granson of first tree
                        value: 5
                      }
                    ]
                  },
                  {
                    name: 'nodeBb', // Son of first tree
                    value: 15,
                    children: [
                      {
                        name: 'nodeBb1', // Granson of first tree
                        value: 15
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
    });
  }
}

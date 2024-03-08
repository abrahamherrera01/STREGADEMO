import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/shared/nav/nav.component';
import * as echarts from 'echarts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  echartsInstance?: echarts.ECharts;
  
  navItems:NavItem[] = [
    {
      name: "Mis leads",
      path: ""
    },
    {
      name: "Mi cartera",
      path: ""
    },
    {
      name: "Cartera asignada a vendedor",
      path: ""
    }
  ];

  ngOnInit(): void {
    this.initECharts();
  }

  initECharts(): void {
    this.echartsInstance = echarts.init(document.getElementById('doughnut-chart') as HTMLDivElement);
    this.echartsInstance.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    });
  }
}

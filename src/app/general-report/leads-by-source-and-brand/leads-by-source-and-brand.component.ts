import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-leads-by-source-and-brand',
  templateUrl: './leads-by-source-and-brand.component.html',
  styleUrls: ['./leads-by-source-and-brand.component.css']
})
export class LeadsBySourceAndBrandComponent {
  percentagesLeadIncidents:string[] =[];
  leadIncidents!:StackedHorizontalBarData;
  constructor(){    
    this.percentagesLeadIncidents = ['1998, 17%', '9725, 83%'];
    
    this.leadIncidents = {    
      title: '',
      width: '90%',
      height: '240px',
      text_color: '#000',
      graphic: {
        categories: [          
          'Z-ONLINE LEADS',
          'INHOUSE LEADS'
        ],      
        series: [
          {
            name: 'BMW',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,               
            },
            emphasis: {
              focus: 'series'
            },
            data: [747, 695],            
          },
          {
            name: 'MINI',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [658, 554]
          },
          {
            name: 'MOTO',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [593, 2727]
          },
          {
            name: 'SEMINUEVO',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'right',                            
              formatter: (params: any) => {
                if (this.percentagesLeadIncidents !== undefined) {
                  return `${this.percentagesLeadIncidents[params.dataIndex]}%`;
                } else {
                  return '  ';
                } 
              }, 
              color: '#000'
            },
            emphasis: {
              focus: 'series'
            },
            data: [0.000001, 5749]
          },        
        ]
      }
    }        
  }
}

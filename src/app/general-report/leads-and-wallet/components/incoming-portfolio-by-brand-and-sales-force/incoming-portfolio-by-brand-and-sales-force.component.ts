import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-incoming-portfolio-by-brand-and-sales-force',
  templateUrl: './incoming-portfolio-by-brand-and-sales-force.component.html',
  styleUrls: ['./incoming-portfolio-by-brand-and-sales-force.component.css']
})
export class IncomingPortfolioByBrandAndSalesForceComponent {
  percentagesLeadIncidents:string[] =[];
  leadIncidents!:StackedHorizontalBarData;
  constructor(){    
    this.percentagesLeadIncidents = ['20%','329, 15%','1491, 66%','435, 19%','329, 15%','1491, 66%'];
    
    this.leadIncidents = {    
      title: '',
      width: '90%',
      height: '240px',
      text_color: '#000',
      graphic: {
        categories: [ 
          'FUERZA MOVIL',
          'PISO ZACATELCO',
          'SEMINUEVO',
          'MATRIZ PISO',         
          'FORANEOS DIGITAL',
          'ADMINISTRATIVO'
        ],      
        series: [
          {
            name: 'Be-back',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,               
              position: 'right',
              formatter: (params: any) => {
                if (this.percentagesLeadIncidents !== undefined) {
                  return `${this.percentagesLeadIncidents[params.dataIndex]}%`;
                } else {
                  return '';
                } 
              }, 
              color: '#000'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0, 0, 1, 0, 0, 0]
          },
          {
            name: 'Llamada a recepción',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [0, 17, 5, 4, 3, 0]
          },
          {
            name: 'Internet',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [0, 30, 3, 5, 0, 0]
          },
          {
            name: 'Visita a piso',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [0, 8, 135, 38, 28, 0]
          },
          {
            name: 'Base de datos',
            type: 'bar',
            stack: 'total',
            label: {
              show:false
            },
            emphasis: {
              focus: 'series'
            },
            data: [33, 95, 77, 36, 17, 32],            
          }  
        ]        
      }
    }        
  }
}

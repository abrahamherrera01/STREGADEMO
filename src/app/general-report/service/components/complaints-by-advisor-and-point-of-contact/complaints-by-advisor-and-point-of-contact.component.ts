import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-complaints-by-advisor-and-point-of-contact',
  templateUrl: './complaints-by-advisor-and-point-of-contact.component.html',
  styleUrls: ['./complaints-by-advisor-and-point-of-contact.component.css']
})
export class ComplaintsByAdvisorAndPointOfContactComponent {

  complaints!:StackedHorizontalBarData;
  constructor(){    
     
    this.complaints = {    
      title: '',
      width: '100%',
      height: '540px',
      text_color: '#000',
      graphic: {
        categories: [
          'ADRIA SALINAS FERIA',
          'ASENCION TECPOYOTL TOCHIHUITL',
          'CRISTIAN JUAREZ FUENTES',
          'LUIS CARLOS DE LA LUZ',
          'MINELIA LIZETH NAJERA CHI', 
          'SANDRA MARITZA ALONSO BECERRA'
        ].reverse(),      
        series: [        
          {
            name: 'Taller',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [1,2,0,3,1,0].reverse()
          },
          {
            name: 'Asesor',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [4,1,0,2,1,2].reverse()
          },
          {
            name: 'Garantías',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,2,0,1,3,0].reverse()
          },
          {
            name: 'Entregas',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,1,0,0,0,0].reverse()
          },
          {
            name: 'Lavado',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [2,0,0,0,0,0].reverse()
          },
          {
            name: 'Servicio General',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [1,1,0,0,0,0].reverse()
          },
          {
            name: 'Citas',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,1,0].reverse()
          },
          {
            name: 'Ventas',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,1,0,0,0].reverse()
          },
        ]        
      }
    }        
  }
}

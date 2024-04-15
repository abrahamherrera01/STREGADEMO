import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-untraceable-by-type-and-executive',
  templateUrl: './untraceable-by-type-and-executive.component.html',
  styleUrls: ['./untraceable-by-type-and-executive.component.css']
})
export class UntraceableByTypeAndExecutiveComponent {

   untraceables!:StackedHorizontalBarData;
  constructor(){    
     
    this.untraceables = {    
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
            name: 'Buzón directo',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,1,1,1,3,1].reverse()
          },
          {
            name: 'Número equivocado',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,2,1,0,0,0].reverse()
          },         
          {
            name: 'Número no Existe',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0].reverse()
          }
        ]        
      }
    }        
  }
}

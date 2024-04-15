import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-follow-up-on-workshop-complaints',
  templateUrl: './follow-up-on-workshop-complaints.component.html',
  styleUrls: ['./follow-up-on-workshop-complaints.component.css']
})
export class FollowUpOnWorkshopComplaintsComponent {

  untraceables!:StackedHorizontalBarData;
  constructor(){    
     
    this.untraceables = {    
      title: '',
      width: '100%',
      height: '540px',
      text_color: '#000',
      graphic: {
        categories: [ 
          'Mar-28',
          'Feb-28',
          'Jan-28'
        ].reverse(),      
        series: [        
          {
            name: 'Nueva falla despues de la reparación',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [4,7,3].reverse()
          },
          {
            name: 'Falla persisitente',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [3,5,3].reverse()
          },
          {
            name: 'Daño generado en servicio',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [3,1,3].reverse()
          },
          {
            name: 'Demora en diagnostico',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,1,1].reverse()
          },
          {
            name: 'Demora en reparación/mantenimiento',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,2,0].reverse()
          },
          {
            name: 'Fallo en diagnostico',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [1,3,0].reverse()
          },
        ]        
      }
    }        
  }
}

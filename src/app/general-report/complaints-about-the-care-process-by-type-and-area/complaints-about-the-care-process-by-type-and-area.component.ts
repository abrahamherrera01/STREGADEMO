import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-complaints-about-the-care-process-by-type-and-area',
  templateUrl: './complaints-about-the-care-process-by-type-and-area.component.html',
  styleUrls: ['./complaints-about-the-care-process-by-type-and-area.component.css']
})
export class ComplaintsAboutTheCareProcessByTypeAndAreaComponent {

  percentagesLeadIncidents:string[] =[];
  leadIncidents!:StackedHorizontalBarData;
  constructor(){    
    this.percentagesLeadIncidents = ['20%','329, 15%','1491, 66%','435, 19%','329, 15%','1491, 66%'];
    
    this.leadIncidents = {    
      title: '',
      width: '100%',
      height: '540px',
      text_color: '#000',
      graphic: {
        categories: [ 
          'Administrativo',
          'Foraneos digital',
          'Matriz Piso',
          'Seminuevo',
          'Piso Zacatelco',
          'Fuerza Movil'

        ].reverse(),      
        series: [
          {
            name: 'No Fue Contactado',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,6,0,5,0,0].reverse()
          },
          {
            name: 'Ejecutivo No Brindo Seguimiento',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,4,0,5,0,1].reverse()
          },
          {
            name: 'Mala Atencion del Ejecutivo',
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
          },
          {
            name: 'No Se Comunico En El Horario Acordado',
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
          },
          {
            name: 'Solicita Cambio De Ejecutivo',
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

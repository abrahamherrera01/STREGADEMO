import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-complaints-about-the-service-process-by-type-and-executive',
  templateUrl: './complaints-about-the-service-process-by-type-and-executive.component.html',
  styleUrls: ['./complaints-about-the-service-process-by-type-and-executive.component.css']
})
export class ComplaintsAboutTheServiceProcessByTypeAndExecutiveComponent {

  leadIncidents!:StackedHorizontalBarData;
  constructor(){    
     
    this.leadIncidents = {    
      title: '',
      width: '100%',
      height: '540px',
      text_color: '#000',
      graphic: {
        categories: [ 
          'FUENTES FLORES MONSERRAT',
          'GOMEZ RAMIREZ JOSE RAMON',
          'CALDERON CARCAÑO LUIS ARTURO',
          'BARDESI ZAMORA EDUARDO',
          'NAHUACATL HERNANDEZ HECTOR URIEL',
          'PERALTA DIAZ RAFAEL',
          'RAMIREZ RAMIREZ SALVADOR',
          'TORRES CRUZ JORGE AMBROSIO',
          'HERRERA HERNANDEZ GERARDO',
          'FONSECA FLORES MARIA BELEN',
          'PEREZ HERNANDEZ CARLOS IVAN',
          'GIL TELLEZ CINTYA JACQUELINE'
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
            data: [2,1,1,1,2,1,1,0,0,1,1,0].reverse()
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
            data: [1,1,1,1,0,0,0,1,1,0,0,1].reverse()
          },
          {
            name: 'Mala Atención Del Ejectivo',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0,0,0,0,0,0,0].reverse()
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
            data: [0,0,0,0,0,0,0,0,0,0,0,0].reverse()
          },
          {
            name: 'Solicita Cambio De ejecutivo',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0,0,0,0,0,0,0].reverse()
          }
          
        ]        
      }
    }        
  }

}
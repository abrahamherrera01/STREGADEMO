import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-prospects-in-portfolio-by-source-and-executive',
  templateUrl: './prospects-in-portfolio-by-source-and-executive.component.html',
  styleUrls: ['./prospects-in-portfolio-by-source-and-executive.component.css']
})
export class ProspectsInPortfolioBySourceAndExecutiveComponent {
  percentagesLeadIncidents:string[] =[];
  leadIncidents!:StackedHorizontalBarData;
  constructor(){    
    this.percentagesLeadIncidents = ['1998, 17%', '9725, 83%'];
    
    this.leadIncidents = {    
      title: '',
      width: '90%',
      height: '600px',
      text_color: '#000',
      graphic: {
        categories: [          
          'RAMIREZ RAMIREZ SALVADOR',
          'CHACON OROZCO GABRIEL',
          'DE BOTTON ORUE FLOR SUSANA',
          'FLORES VERA CIRILO GUADALUPE',
          'CALIXTO ROMERO MARCO ANTONIO',	
          'HERRERA HERNANDEZ GERARDO',	
          'AGUILAR ALONSO MIGUEL ANGEL ELEAZAR',
          'MARCIAL OSORIO ALBERTO',
          'ROMERO CERON MARCOS',	
          'RIVERA CONTRERAS ALBERTO',	
          'CASTILLO CONDE ERICK',	
          'FONSECA FLORES MARIA BELEN',	
          'MARQUEZ ACOSTA HECTOR ALBERTO',	
          'LUNA AGUILAR HUGO EMILIO',	
          'TORRES CRUZ JORGE AMBROSIO',	
          'GOMEZ RAMIREZ JOSE RAMON',	
          'JIMENEZ GONZALEZ CARLOS',	
          'DOMINGUEZ ESCAMILLA EDUARDO GAUDENCIO',	
          'FLORES CUATEPITZI JOSE',	
          'PERALTA DIAZ RAFAEL',	
          'FUENTES FLORES MONSERRAT',	
          'REYES CUAUTLE FROYLAN',	
          'BARRALES GARCIA JESUS DANIEL'
        ].reverse(),   
        series: [
          {
            name: 'Base de datos',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,               
            },
            emphasis: {
              focus: 'series'
            },
            data: [71,13,10,10,11,4,8,4,10,6,4,5,5,6,3,5,4,4,1,1,1,1,1].reverse()
          },
          {
            name: 'Visita a piso',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,23,19,16,16,4,14,17,11,13,13,0,6,3,2,1,0,3,5,0,1,3,1].reverse()
          },
          {
            name: 'Internet',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series'
            },
            data: [1,1,0,0,1,14,0,1,0,0,0,5,0,0,4,2,0,0,0,2,2,0,0].reverse()
          },
          {
            name: 'Llamada a recepción',
            type: 'bar',
            stack: 'total',
            label: {
              show: true             
            },
            emphasis: {
              focus: 'series'
            },
            data: [1,0,0,3,0,3,0,0,0,0,1,3,2,2,1,1,4,0,0,3,1,0,0].reverse()
          },    
          {
            name: 'Be-back',
            type: 'bar',
            stack: 'total',
            label: {
              show: true             
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse()
          },        
        ]
      }
    }        
  }
}

import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-new-nps-and-incidents',
  templateUrl: './new-nps-and-incidents.component.html',
  styleUrls: ['./new-nps-and-incidents.component.css']
})
export class NewNpsAndIncidentsComponent {

  Incidents!:StackedHorizontalBarData;
  not_contactedData!:StackedHorizontalBarData;
  ilocalizables!:StackedHorizontalBarData;

  colors:string[] = [
    '#2F3033',/*administrativo*/
    '#8A8C8F',/*foraneos digital*/
    '#576E9F',/*matriz piso*/
    '#A4C97C',/*seminuevos*/
    '#68B0E0'/*zacatelco piso*/
  ];


  constructor(){
    this.Incidents = {    
      title: 'Incidencias: 9',
      width: '100%',
      height: '340px',
      text_color: '#fff',
      graphic: {
        categories: [ 
          'Baja calificación',
          'Comentario',
          'Felicitación',
          'Clientes con queja',  
          'Solicitud de contacto / información',
          'Sugerencia',  
        ].reverse() ,      
        series: [

          {
            name: 'Administrativo',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#fff'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0].reverse(),
            itemStyle: {
              color: this.colors[0]
            }
 
          },
          {
            name: 'Foráneos dígital',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#fff'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,1,0,0,0,0].reverse(),
            itemStyle: {
              color: this.colors[1]
            }
          },
          {
            name: 'Matriz piso',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#fff'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,1,6,0].reverse(),
            itemStyle: {
              color: this.colors[2]
            }
          },
          {
            name: 'Seminuevos',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#fff'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0].reverse(),
            itemStyle: {
              color: this.colors[3]
            }
          },
          {
            name: 'Zacatelco piso',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#fff'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,1,0,0].reverse(),
            itemStyle: {
              color: this.colors[4]
            }
          },
 
        ]        
      }
    }  

    this.not_contactedData = {    
      title: 'No contactados: 2/2%',
      width: '100%',
      height: '150px',
      text_color: '#fff',
      graphic: {
        categories: [ 
          'Cuelga llamada',
          'Enlaza no contesta',
         ].reverse(),      
        series: [
          {
            name: 'Administrativo',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,1].reverse(),
            itemStyle: {
              color: this.colors[0]
            }
 
          },
          {
            name: 'Foráneos dígital',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [1,0].reverse(),
            itemStyle: {
              color: this.colors[1]
            }
          }
        ]        
      }
    }   
    this.ilocalizables = {    
      title: 'Ilocalizables:9  8/8%',
      width: '100%',
      height: '150px',
      text_color: '#fff',
      graphic: {
        categories: [ 
          '# No disponible ',
          '# Equivocado',
          '# No existe',
          'Buzón directo'
          ].reverse(),      
        series: [
          {
            name: 'Administrativo',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,1,0,2].reverse(),
            itemStyle: {
              color: this.colors[0]
            }
 
          },
          {
            name: 'Foráneos dígital',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,1,1,0].reverse(),
            itemStyle: {
              color: this.colors[1]
            }
          },
          {
            name: 'Matriz piso',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [2,0,0,1].reverse(),
            itemStyle: {
              color: this.colors[2]
            }
          }
        ]        
      }
    }   
 
  }
}

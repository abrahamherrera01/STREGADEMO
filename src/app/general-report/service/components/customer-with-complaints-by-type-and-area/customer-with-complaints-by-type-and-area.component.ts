import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-customer-with-complaints-by-type-and-area',
  templateUrl: './customer-with-complaints-by-type-and-area.component.html',
  styleUrls: ['./customer-with-complaints-by-type-and-area.component.css']
})
export class CustomerWithComplaintsByTypeAndAreaComponent {
  show:boolean = false;

  constructor(
    private _serviceService:ServiceService
  ){
    this.initGraphic();
  }
  data = {    
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

  initGraphic():void {
    this.show = true;
  }
}

import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-performance-and-incidents-per-advisor',
  templateUrl: './performance-and-incidents-per-advisor.component.html',
  styleUrls: ['./performance-and-incidents-per-advisor.component.css']
})
export class PerformanceAndIncidentsPerAdvisorComponent {


  complaints!:StackedHorizontalBarData;
  constructor(){    
     
    this.complaints = {    
      title: '',
      width: '100%',
      height: '340px',
      text_color: '#000',
      graphic: {
        categories: [
          'Falla después de la reparación',
          'Falta de credibilidad',
          'No recibió seguimiento del asesor',
          'Retrazo en la entrega',
          'Demora en el diagnostico',
          'Mal lavado',
          'Daño generado en servicio',
          'Precio alto'
        ].reverse(),      
        series: [        
          {
            name: '',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [3,3,1,1,1,1,1,1].reverse()
          },
 
        ]        
      }
    }        
  }
}

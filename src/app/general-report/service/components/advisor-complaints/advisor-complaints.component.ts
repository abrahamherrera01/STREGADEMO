import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-advisor-complaints',
  templateUrl: './advisor-complaints.component.html',
  styleUrls: ['./advisor-complaints.component.css']
})
export class AdvisorComplaintsComponent {
  complaints!:StackedHorizontalBarData;
  constructor(){    
     
    this.complaints = {    
      title: '',
      width: '100%',
      height: '540px',
      text_color: '#000',
      graphic: {
        categories: [ 
          'Falta de credibilidad',
          'Realizaron reparaciones no autorizadas',
          'Mala atención del asesor',
          'No ofreció movilidad',
          'No realizaron servicios acordados',
          'Error en las cotizaciones',
        ].reverse(),      
        series: [        
 
          {
            name: 'quejas',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [2,2,2,1,1,1].reverse()
          },
        ]        
      }
    }        
  }
}

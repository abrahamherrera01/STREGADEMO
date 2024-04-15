import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-guarantees',
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.css']
})
export class GuaranteesComponent {
  guarantes!:StackedHorizontalBarData;
  constructor(){    
     
    this.guarantes = {    
      title: '',
      width: '100%',
      height: '540px',
      text_color: '#000',
      graphic: {
        categories: [ 
          'No validaron garantía',
          'Tiempo de resolición garantías',
        ].reverse(),      
        series: [        
 
          {
            name: 'garantías',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [3,2].reverse()
          },
        ]        
      }
    }        
  }
}

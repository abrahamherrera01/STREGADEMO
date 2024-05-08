import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-guarantees',
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.css']
})
export class GuaranteesComponent {
  guarantes!:StackedHorizontalBarData;
  public show=false
  constructor(
    private _serviceService:ServiceService
  ){    
     
     this.getguarantes()
  }

  getguarantes(){
      this._serviceService.getguarantes().subscribe({
        next: ({ data, code, status }) => {
          if( code === 200 && status == "success" ){ 
            this.guarantes = {    
              title: '',
              width: '100%',
              height: '540px',
              text_color: '#000',
              graphic: {
                categories: [ 
                  'No validaron Garantía',
                  'Tiempo de Resolución Garantías',
                ].reverse(),      
                series: [        
         
                  {
                    name: 'Garantías',
                    type: 'bar',
                    stack: 'total',
                    label: {
                      show: true,   
                      color: '#fff'            
                    },
                    emphasis: {
                      focus: 'series'
                    },
                    data: [parseInt(data.adviserDidNotValidateWarranty),parseInt(data.adviserResolutionTimeGuarantees)].reverse(),
                    itemStyle: {
                      color: '#000'
                    }
                  },
                ]        
              }
            }   
            this.show=true

          }          
        },
        error: ( error ) => {
          console.log( error );
        }
      })
  }
}

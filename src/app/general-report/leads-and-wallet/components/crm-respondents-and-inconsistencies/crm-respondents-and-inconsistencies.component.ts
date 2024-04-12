import { Component } from '@angular/core';
import { GraphicData } from 'src/app/graphics/interfaces/multiple-vertical-bars.interface';

@Component({
  selector: 'app-crm-respondents-and-inconsistencies',
  templateUrl: './crm-respondents-and-inconsistencies.component.html',
  styleUrls: ['./crm-respondents-and-inconsistencies.component.css']
})
export class CrmRespondentsAndInconsistenciesComponent {
  data!:GraphicData;

  constructor(){        
    this.data = {    
      title: '',
      width: '90%',
      height: '600px',
      text_color: '#000',
      graphic: {
        source: [          
          ['product', 'Entrantes', 'Encuestados', 'Inconsistencias CRM'],
          ['Administrativo', 40 ,24 ,1],
          ['Foraneos digital', 424, 290, 4],          
          ['Matriz Piso', 242, 184, 2],
          ['Seminuevo', 205, 155, 1],
          ['Piso Zacatelco', 107, 72, 3],         
          ['Fuerza Movil' , 32 , 20 , 0]
        ],
        series: [
          { 
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              formatter: function(params: any) {
                return params.value[1] + '%'; 
              }
            }
          }, 
          { 
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              formatter: function(params: any) {
                return params.value[2] + '%'; 
              }
            }
          }, 
          { 
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              formatter: function(params: any) {                
                return params.value[3] + '%'; 
              }
            }
          }
        ]  
      }
    }        
  }
}

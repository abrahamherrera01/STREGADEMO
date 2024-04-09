import { Component } from '@angular/core';
import { GraphicData } from 'src/app/graphics/interfaces/multiple-vertical-bars.interface';
@Component({
  selector: 'app-surveyed-and-unlocatable-by-brand',
  templateUrl: './surveyed-and-unlocatable-by-brand.component.html',
  styleUrls: ['./surveyed-and-unlocatable-by-brand.component.css']
})
export class SurveyedAndUnlocatableByBrandComponent {
  percentages:string[] =[];
  data!:GraphicData;

  constructor(){    
    this.percentages = ['1998, 17%', '9725, 83%'];
    
    this.data = {    
      title: '',
      width: '90%',
      height: '600px',
      text_color: '#000',
      graphic: {
        source: [          
          ['product', 'Entrantes', 'Encuestados', 'Ilocalizables'],
          ['Administrativo', 33 ,23 ,2],
          ['Foraneos digital', 150, 112, 1],          
          ['Matriz Piso', 221, 184, 6],
          ['Seminuevo', 83, 64, 0],
          ['Piso Zacatelco', 48, 37, 3],         
          ['Fuerza Movil' , 32 , 20 , 2]
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

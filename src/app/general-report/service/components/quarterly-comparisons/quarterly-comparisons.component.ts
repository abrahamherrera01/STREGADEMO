import { Component } from '@angular/core';
import { GraphicData } from 'src/app/graphics/interfaces/multiple-vertical-bars.interface';

@Component({
  selector: 'app-quarterly-comparisons',
  templateUrl: './quarterly-comparisons.component.html',
  styleUrls: ['./quarterly-comparisons.component.css']
})
export class QuarterlyComparisonsComponent {

  data!:GraphicData;
  nps!:GraphicData;

  constructor(){        
    this.data = {    
      title: 'Encuestas/Cientes con queja',
      width: '90%',
      height: '600px',
      text_color: '#000',
      graphic: {
        source: [          
          ['product', 'Órdenes', 'Encuestados', 'Clientes con queja'],
          ['Enero', 904 ,814 ,35],
          ['Febrero', 795 ,717 ,47],
          ['Marzo', 598 ,513 ,30], 
        ],
        series: [
          { 
            type: 'bar',
            label: {
              show: false,
              position: 'top',
              formatter: function(params: any) {
                return params.value[1] + '%'; 
              }
            }
          }, 
          { 
            type: 'bar',
            label: {
              show: false,
              position: 'top',
              formatter: function(params: any) {
                return params.value[2] + '%'; 
              }
            }
          }, 
          { 
            type: 'bar',
            label: {
              show: false,
              position: 'top',
              formatter: function(params: any) {                
                return params.value[3] + '%'; 
              }
            }
          }
        ]  
      }
    }  
    this.nps = {    
      title: 'NPS',
      width: '90%',
      height: '600px',
      text_color: '#000',
      graphic: {
        source: [          
          ['product', 'Públicas', 'Encuestados', 'Garantias'],
          ['Enero', 84 ,81 ],
          ['Febrero', 78 ,79 ],
          ['Marzo', 79.1183294663573 ,71.9512195121951 ], 
        ],
        series: [
          { 
            type: 'bar',
            label: {
              show: false,
              position: 'top',
              formatter: function(params: any) {
                return params.value[1] + '%'; 
              }
            }
          }, 
          { 
            type: 'bar',
            label: {
              show: false,
              position: 'top',
              formatter: function(params: any) {
                return params.value[2] + '%'; 
              }
            }
          }, 
          { 
            type: 'bar',
            label: {
              show: false,
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

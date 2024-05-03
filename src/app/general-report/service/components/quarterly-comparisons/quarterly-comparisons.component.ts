import { Component } from '@angular/core';
import { GraphicData } from 'src/app/graphics/interfaces/multiple-vertical-bars.interface';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-quarterly-comparisons',
  templateUrl: './quarterly-comparisons.component.html',
  styleUrls: ['./quarterly-comparisons.component.css']
})
export class QuarterlyComparisonsComponent {

  data!:GraphicData;
  nps!:GraphicData;

  show1=false
  i=0

  constructor(private _serviceService:ServiceService){        
 
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
    
    this.getDashboardVentas();
  }

  //encuestas
  getDashboardVentas(){
    this._serviceService.getQuarterlyComparison().subscribe({
      next: ({ data, code, status }) => {
        if( code === 200 && status == "success" ){ 
          
         const product = data.category;
          product.unshift('product');
          let newseries=Array();
            newseries.push([data.series[0].name, data.series[0].data[0], data.series[0].data[1], data.series[0].data[2]]);
            newseries.push([data.series[1].name, data.series[1].data[0], data.series[1].data[1], data.series[1].data[2]]);
            newseries.push([data.series[2].name, data.series[2].data[0], data.series[2].data[1], data.series[2].data[2]]);

          this.data = {    
            title: 'Encuestas/Cientes con queja',
            width: '100%',
            height: '600px',
            text_color: '#000',
            graphic: {
              source: [          
                product,
                newseries[0],
                newseries[1],
                newseries[2]
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
          this.show1=true;
        
        }          
      },
      error: ( error ) => {
        console.log( error );
      }
    })
  }        
}

import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-detail-of-unlocatables-by-brand',
  templateUrl: './detail-of-unlocatables-by-brand.component.html',
  styleUrls: ['./detail-of-unlocatables-by-brand.component.css']
})
export class DetailOfUnlocatablesByBrandComponent {

  percentagesLeadIncidents:string[] =[];
  leadIncidents!:StackedHorizontalBarData;
  constructor(){    
    this.percentagesLeadIncidents = ['20%','329, 15%','1491, 66%','435, 19%','329, 15%','1491, 66%'];
    
    this.leadIncidents = {    
      title: '',
      width: '100%',
      height: '540px',
      text_color: '#000',
      graphic: {
        categories: [ 
          'HERNANDEZ MARTINEZ ISAAC',
          'CAZARES CRUZ AURORA',
          'CALIXTO ROMERO MARCO ANTONIO',
          'AGUILAR ALONSO MIGUEL ANGEL ELEAZAR',
          'DE BOTTON ORUE FLOR SUSANA',
          'MARCIAL OSORIO ALBERTO',
          'ROMERO CERON MARCOS',
          'RAMIREZ RAMIREZ SALVADOR',
          'FLORES CUATEPITZI JOSE',
          'LUNA AGUILAR HUGO EMILIO'
        ].reverse(),      
        series: [
          {
            name: 'Buzon directo',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [1,1,0,0,0,1,0,0,0,0].reverse()
          },
          {
            name: '# No disponible',
            type: 'bar',
            stack: 'total',
            label: {
              show:false
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,1,0,0,0,0,0].reverse(),            
          },  
          {
            name: '# No existe',
            type: 'bar',
            stack: 'total',
            label: {
              show:false
            },
            emphasis: {
              focus: 'series'
            },
            data: [1,1,1,1,0,0,0,1,1,1].reverse(),            
          },          
          {
            name: '# Equivocado',
            type: 'bar',
            stack: 'total',
            label: {
              show:false
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0,1,0,0,0].reverse(),            
          }  
        ]        
      }
    }        
  }

}

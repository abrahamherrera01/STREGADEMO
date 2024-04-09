import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-crm-inconsistencies-by-executive',
  templateUrl: './crm-inconsistencies-by-executive.component.html',
  styleUrls: ['./crm-inconsistencies-by-executive.component.css']
})
export class CrmInconsistenciesByExecutiveComponent {

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
          'RAMIREZ RAMIREZ SALVADOR',
          'FLORES CUATEPITZI JOSE',
          'CHACON OROZCO GABRIEL',
          'ROMERO CERON MARCOS',
          'LUNA AGUILAR HUGO EMILIO',
          'FLORES QUIROZ VIRIDIANA ITZEL',
          'CAZARES CRUZ AURORA'
        ].reverse(),      
        series: [
          {
            name: 'Actividad pendiente en CRM',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0,0].reverse()
          },
          {
            name: 'Datos erroneos',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,2,1,1,1,0,1].reverse()
          },
          {
            name: 'No solicito informes',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [4,0,0,0,0,1,0].reverse()
          },
          {
            name: 'Sin actividad a futuro en CRM',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0,0].reverse()
          },
          {
            name: 'Sin comentarios en CRM',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,   
              color: '#8896ae'            
            },
            emphasis: {
              focus: 'series'
            },
            data: [0,0,0,0,0,0,0].reverse()
          },
        ]        
      }
    }        
  }

}

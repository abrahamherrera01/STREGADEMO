import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-csi-and-nps-summary-and-incidents',
  templateUrl: './csi-and-nps-summary-and-incidents.component.html',
  styleUrls: ['./csi-and-nps-summary-and-incidents.component.css']
})
export class CsiAndNpsSummaryAndIncidentsComponent 


  {

    Incidents!:StackedHorizontalBarData;
    not_contactedData!:StackedHorizontalBarData;
    contactedData!:StackedHorizontalBarData;
    constructor(){
      this.contactedData = {    
        title: 'Localizables:14/2%',
        width: '100%',
        height: '150px',
        text_color: '#ffff',
        graphic: {
          categories: [ 
            'Buzón directo',
            'Número no disponible',
            'Número equivocado',
            'Número no existe'
          ].reverse(),      
          series: [
            {
              name: 'Públicas',
              type: 'bar',
              stack: 'total',
              label: {
                show: true,   
                color: '#0000'            
              },
              emphasis: {
                focus: 'series'
              },
              data: [6,4,2,0].reverse()
            },
            {
              name: 'Garantias',
              type: 'bar',
              stack: 'total',
              label: {
                show: true,   
                color: '#8896ae'            
              },
              emphasis: {
                focus: 'series'
              },
              data: [1,0,1,0].reverse()
            }
          ]        
        }
      }    

      this.not_contactedData = {    
        title: 'No contactados: 68/11%',
        width: '100%',
        height: '150px',
        text_color: '#fff',
        graphic: {
          categories: [ 
            'Enlaza no contesta',
            'Cuelga llamada',
            'No desea ser encuestado'
          ].reverse(),      
          series: [
            {
              name: 'Públicas',
              type: 'bar',
              stack: 'total',
              label: {
                show: true,   
                color: '#8896ae'            
              },
              emphasis: {
                focus: 'series'
              },
              data: [54,3,1].reverse()
            },
            {
              name: 'Garantias',
              type: 'bar',
              stack: 'total',
              label: {
                show: true,   
                color: '#8896ae'            
              },
              emphasis: {
                focus: 'series'
              },
              data: [7,3,0].reverse()
            }
          ]        
        }
      }    
      
      this.Incidents = {    
        title: 'Incidencias: 71',
        width: '100%',
        height: '340px',
        text_color: '#fff',
        graphic: {
          categories: [ 
            '',
            'comentario',
            '',
            'Baja calificación',  
            '',
            'Solicitud de info/contacto',  
          ].reverse() ,      
          series: [
 
            {
              name: 'publicas',
              type: 'bar',
              stack: 'total',
              label: {
                show: true,   
                color: '#8896ae'            
              },
              emphasis: {
                focus: 'series'
              },
              data: [3,1,8,3,23,18].reverse()
            },
            {
              name: 'Garantias',
              type: 'bar',
              stack: 'total',
              label: {
                show: true,   
                color: '#8896ae'            
              },
              emphasis: {
                focus: 'series'
              },
              data: [0,0,3,2,7,3].reverse()
            }
          ]        
        }
      } 
    }

 
  
 
  
    OrdersData = [
      { category: 'Públicas', value: 503 },
      { category: 'Garantías', value: 95 },
      ];
  
    surveyedData = [
      { category: 'Públicas', value: 431, percentage: '86%' },
      { category: 'Garantías', value: 92, percentage: '86%' }, 
    ]; 
  
    promoterData = [
      { category: 'Públicas', value: 355, percentage: '82%' },
      { category: 'Garantías', value: 65, percentage: '79%' },
    ];
  
    neutroData = [
      { category: 'Públicas', value: 58, percentage: '13%' },
      { category: 'Garantías', value: 10, percentage: '12%' },
    ];

    detractorData = [
      { category: 'Públicas', value: 14, percentage: '3%' },
      { category: 'Garantías', value: 6, percentage: '7%' },
    ];

    npsData = [
      { category: 'Públicas', value: 79},
      { category: 'Garantías', value: 72 },
    ];

  
    incomingWallet = [
      { category: 'BMW', value: 621 },
      { category: 'MINI', value: 262 },
      { category: 'MOTO', value: 515 },
      { category: 'SEMI', value: 313 }
    ];

    
  
    surveyedWallet = [
      { category: 'BMW', value: 496, percentage: '80%' },
      { category: 'MINI', value: 212, percentage: '80%' },
      { category: 'MOTO', value: 398, percentage: '77%' },
      { category: 'SEMI', value: 261, percentage: '83%' }
    ];
    
    prospectsCompletelySatisfied = [
      { category: 'BMW', value: 467, percentage: '81%' },
      { category: 'MINI', value: 392, percentage: '83%' },
      { category: 'MOTO', value: 1018, percentage: '70%' },
      { category: 'SEMI', value: 1926, percentage: '74%' }
    ]  
  
    
    
  }



import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
interface LeadData {
  category: string;
  value: number;
}

interface LeadDataWithPercentage extends LeadData {
  percentage: string;
}

@Component({
  selector: 'app-lead-and-portfolio-management',
  templateUrl: './lead-and-portfolio-management.component.html',
  styleUrls: ['./lead-and-portfolio-management.component.css']
})
export class LeadAndPortfolioManagementComponent {
  // Incidencias leads
  percentagesLeadIncidents:number[] =[];
  leadIncidents!:StackedHorizontalBarData;

  // Incidencias cartera
  percentagesWalletIncidents:number[] =[];
  walletIncidents!:StackedHorizontalBarData;

  constructor(){
    this.percentagesLeadIncidents = [199, 200, 201, 202, 203, 204, 295];
    
    this.leadIncidents = {    
      title: 'Incidencias leads: 1368',
      width: '90%',
      height: '240px',
      text_color: '#fff',
      graphic: {
        categories: [
          'Inconsistencia CRM',
          'Leads con Queja',
          'Solicitud de info/contacto',
          'Baja calificación',
          'Oportunidad perdida',
          'Negociación diferida',
          'No desea ser encuestado'
        ],      
        series: [
          {
            name: 'BMW',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,               
            },
            emphasis: {
              focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320],            
          },
          {
            name: 'MINI',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'MOTO',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'SEMINUEVO',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'right',                            
              formatter: (params: any) => {
                if (this.percentagesLeadIncidents !== undefined) {
                  return `${this.percentagesLeadIncidents[params.dataIndex]}%`;
                } else {
                  return 'el moro se la come cruda';
                } 
              }, 
              color: '#fff'
            },
            emphasis: {
              focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },        
        ]
      }
    }
    
    this.percentagesWalletIncidents = [199, 200, 201, 202, 203, 204, 295];

    this.walletIncidents = {    
      title: 'Incidencias cartera: 226',
      width: '90%',
      height: '240px',
      text_color: '#fff',
      graphic: {
        categories: [
          'Inconsistencia CRM',
          'Prospectos con Queja',
          'Solicitud de info/contacto',
          'Oportunidad perdida',
          'Baja calificación',
          'No desea ser encuestado',
          'Negociación diferida'
        ],      
        series: [
          {
            name: 'BMW',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,               
            },
            emphasis: {
              focus: 'series'
            },
            data: [120, 280, 172, 300, 280, 130, 80],            
          },
          {
            name: 'MINI',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [99, 80, 200, 280, 50, 200, 180]
          },
          {
            name: 'MOTO',
            type: 'bar',
            stack: 'total',
            label: {
              show: false,
            },
            emphasis: {
              focus: 'series'
            },
            data: [140, 200, 299, 392, 100, 70, 80]
          },
          {
            name: 'SEMINUEVO',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'right',                            
              formatter: (params: any) => {
                if (this.percentagesLeadIncidents !== undefined) {
                  return `${this.percentagesLeadIncidents[params.dataIndex]}%`;
                } else {
                  return 'el moro se la come cruda';
                } 
              }, 
              color: '#fff'
            },
            emphasis: {
              focus: 'series'
            },
            data: [20, 300, 182, 68, 71, 94, 200]
          },        
        ]
      }
    }
  }

  incomingLeadsData = [
    { category: 'BMW', value: 1442 },
    { category: 'MINI', value: 1212 },
    { category: 'MOTO', value: 3324 },
    { category: 'SEMI', value: 5749 }
  ];

  assignedLeadsData = [
    { category: 'BMW', value: 701, percentage: '49%' },
    { category: 'MINI', value: 589, percentage: '49%' },
    { category: 'MOTO', value: 1789, percentage: '54%' },
    { category: 'SEMI', value: 3049, percentage: '53%' }
  ]; 

  surveyedLeads = [
    { category: 'BMW', value: 576, percentage: '82%' },
    { category: 'MINI', value: 474, percentage: '80%' },
    { category: 'MOTO', value: 1446, percentage: '81%' },
    { category: 'SEMI', value: 2615, percentage: '86%' }
  ];

  LeadsCompletelySatisfied = [
    { category: 'BMW', value: 467, percentage: '81%' },
    { category: 'MINI', value: 392, percentage: '83%' },
    { category: 'MOTO', value: 1018, percentage: '70%' },
    { category: 'SEMI', value: 1926, percentage: '74%' }
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

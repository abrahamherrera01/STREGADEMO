import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { GeneralReportService } from '../../../services/general-report.service';

export interface LeadData {
  category: string;
  value:    number;
  percentage?: string | number;
}


@Component({
  selector: 'app-lead-and-portfolio-management',
  templateUrl: './lead-and-portfolio-management.component.html',
  styleUrls: ['./lead-and-portfolio-management.component.css']
})
export class LeadAndPortfolioManagementComponent {
  // Incidencias leads
  percentagesLeadIncidents:number[] = [];  
  leadIncidents!:StackedHorizontalBarData;
  showLeadIncidents:boolean = false;

  // Incidencias cartera
  percentagesWalletIncidents:number[] =[];
  walletIncidents!:StackedHorizontalBarData;

  incomingLeadsData?:LeadData[];
  assignedLeadsData?:LeadData[];
  surveyedLeads?:LeadData[];
  LeadsCompletelySatisfied?:LeadData[];

  constructor(private generalReportService:GeneralReportService){            
    this.incidentsLeads();
    this.percentagesWalletIncidents = [199, 200, 201, 202, 203, 204, 295];

    this.walletIncidents = {    
      title: 'Incidencias cartera: 226',
      width: '90%',
      height: '225px',
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
                if (this.percentagesWalletIncidents !== undefined) {
                  return `${this.percentagesWalletIncidents[params.dataIndex]}%`;
                } else {
                  return ' ';
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

  incidentsLeads(){
    this.generalReportService.getCalculatedMetrics().subscribe(
      {
        next: ({ code, status, data}) => {
          if (code === 200 && status === 'success') {
            this.percentagesLeadIncidents = data.departmentPercentages;
            // Transformar data
            const transformedData = data.series.map((item, index) => {
              const additionalConfig = index === this.percentagesLeadIncidents.length - 1 ? {
                label: {
                  show: true,
                  position: 'right',
                  formatter: (params: any) => {
                    if (this.percentagesLeadIncidents !== undefined) {
                      return `${this.percentagesLeadIncidents[params.dataIndex]}%`;
                    } else {
                      return ' ';
                    } 
                  }
                }
              } : {};

              return {
                name: item.name,
                type: 'bar',
                stack: 'total',
                label: {
                  show: false
                },
                emphasis: {
                  focus: 'series'
                },
                data: item.data,
                ...additionalConfig
              };
            });    
            // Fin transformar data        
            
            this.leadIncidents = {    
              title: 'Incidencias leads: ' + data.totalGlobalLeads,
              width: '90%',
              height: '350px',
              text_color: '#fff',
              graphic: {
                categories: data.categories,      
                series: transformedData
              }
            }
            this.showLeadIncidents = true;

            // Fin grafica
            this.incomingLeadsData = data.totalLeadsByDepartment;
            this.assignedLeadsData = data.totalLeadsAssignedByDepartment;
            this.surveyedLeads = data.totalLeadsContactedByDepartment;
            this.LeadsCompletelySatisfied = data.totalLeadsSatisfiedByDepartment;
          }
        },

        error: (error) => {
          console.error('Error:' + error);               
        }
      }        
    );
  }
    

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
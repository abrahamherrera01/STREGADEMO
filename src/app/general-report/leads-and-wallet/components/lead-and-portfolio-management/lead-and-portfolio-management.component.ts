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
  showWalletIncidents:boolean = false;
  incomingLeadsData?:LeadData[];
  sumincomingLeads?:any;
  totalincomingLeadsData = 0;
  assignedLeadsData?:LeadData[];
  sumincomingassignedLeads?:any;
  totalassignedLeads = 0;
  surveyedLeads?:LeadData[];
  sumincomsurveyedLeads?:any;
  totalsurveyedLeads = 0;
  LeadsCompletelySatisfied?:LeadData[];
  sumLeadsCompletelySatisfied?:any;
  totalLeadsCompletelySatisfied = 0;

  //wallet
  incomingWallet?:LeadData[];
  sumincomingWallet?:any;
  totalsumincomingWallet = 0;
  surveyedWallet?:LeadData[];
  sumsurveyedWallet?:any;
  totalsurveyedWallet = 0;

  prospectsCompletelySatisfied?:LeadData[];
  sumprospectsCompletelySatisfied?:any;
  totalprospectsCompletelySatisfied = 0;

  


  constructor(private generalReportService:GeneralReportService){            
    this.incidentsLeads();
    this.incidentsWallet();
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
              title: 'Incidencias leads: ' + data.totalIncidences,
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
            this.sumincomingLeads=this.incomingLeadsData.forEach(department => {
              this.totalincomingLeadsData += department.value; 
            });
            this.assignedLeadsData = data.totalLeadsAssignedByDepartment;
            this.sumincomingassignedLeads=this.assignedLeadsData.forEach(department => {
              this.totalassignedLeads += department.value; 
            });
            this.surveyedLeads = data.totalLeadsContactedByDepartment;
            this.sumincomsurveyedLeads=this.surveyedLeads.forEach(department => {
              this.totalsurveyedLeads += department.value; 
            });
            this.LeadsCompletelySatisfied = data.totalLeadsSatisfiedByDepartment;
            this.sumLeadsCompletelySatisfied=this.LeadsCompletelySatisfied.forEach(department => {
              this.totalLeadsCompletelySatisfied += department.value; 
            }); 
          }
        },

        error: (error) => {
          console.error('Error:' + error);               
        }
      }        
    );
  }

  incidentsWallet(){

    this.generalReportService.getCalculatedMetricsWallet().subscribe(
      {
        next: ({ code, status, data}) => {
          if (code === 200 && status === 'success') {
            this.percentagesWalletIncidents = data.departmentPercentages;
            // Transformar data
            const transformedData = data.series.map((item, index) => {
              const additionalConfig = index === this.percentagesWalletIncidents.length - 1 ? {
                label: {
                  show: true,
                  position: 'right',
                  formatter: (params: any) => {
                    if (this.percentagesWalletIncidents !== undefined) {
                      return `${this.percentagesWalletIncidents[params.dataIndex]}%`;
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
            
            this.walletIncidents = {    
              title: 'Incidencias cartera: ' + data.totalIncidences,
              width: '90%',
              height: '350px',
              text_color: '#fff',
              graphic: {
                categories: data.categories,      
                series: transformedData
              }
            }
            this.showWalletIncidents = true;
            this.incomingWallet = data.totalsByDepartment;
            this.sumincomingWallet=this.incomingWallet.forEach(department => {
              this.totalsumincomingWallet += department.value;
             });
            this.surveyedWallet=data.totalCarteraContactedByDepartment

            this.sumsurveyedWallet=this.surveyedWallet.forEach(department => {
              this.totalsurveyedWallet += department.value;
             });
            this.prospectsCompletelySatisfied=data.totalCarteraSatisfiedByDepartment


            this.sumprospectsCompletelySatisfied=this.prospectsCompletelySatisfied.forEach(department => {
              this.totalprospectsCompletelySatisfied += department.value;
             });
  
          }
        },

        error: (error) => {
          console.error('Error:' + error);               
        }
      }        
    );
    
  }
    
}

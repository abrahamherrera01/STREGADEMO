import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { GeneralReportService } from '../../services/general-report.service';

@Component({
  selector: 'app-crm-inconsistencies-by-executive',
  templateUrl: './crm-inconsistencies-by-executive.component.html',
  styleUrls: ['./crm-inconsistencies-by-executive.component.css']
})
export class CrmInconsistenciesByExecutiveComponent {

  public leadIncidents!:StackedHorizontalBarData;
  public show:boolean =false;

    constructor(private getCrmInconsistenciesByExecutive:GeneralReportService ){   
      this.incidentsLeads();
    }
  
    incidentsLeads(){
      this.getCrmInconsistenciesByExecutive.getCrmInconsistenciesByExecutive().subscribe(
        {
          next: ({ code, status, data}) => {
    
            if (code === 200 && status === 'success') {
  
    
              const series = data.executivesIncidences

              console.log(series)
            
    
              // Fin transformar data        
              
              this.leadIncidents = {    
                title: '',
                width: '100%',
                height: '650px',
                text_color: '#000',
                graphic: {
                  categories: data.categories,      
                  series: [
                    {
                      name: 'Incidencias',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.executivesIncidences.reverse()
                    },
                    {
                      name: 'datos erroneos',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.executivesWrongData.reverse()
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
                      data: data.executivesNotRequestReports.reverse()
                    },
                    {
                      name: 'sin actividad en CRM',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.executivesNoActivityCRM.reverse()
                    },
                    {
                      name: 'sin comentarios en CRM',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.executivesNoComentaryCRM.reverse()
                    },
                  ] 
                }
              }

              this.show =true;
            }
          },
    
          error: (error) => {
            console.error('Error:' + error);               
          }
        }        
      );
    }












     
      
  

}

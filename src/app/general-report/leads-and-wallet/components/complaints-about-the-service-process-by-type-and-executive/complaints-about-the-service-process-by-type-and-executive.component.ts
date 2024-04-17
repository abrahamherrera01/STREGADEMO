import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { GeneralReportService } from '../../services/general-report.service';

@Component({
  selector: 'app-complaints-about-the-service-process-by-type-and-executive',
  templateUrl: './complaints-about-the-service-process-by-type-and-executive.component.html',
  styleUrls: ['./complaints-about-the-service-process-by-type-and-executive.component.css']
})
export class ComplaintsAboutTheServiceProcessByTypeAndExecutiveComponent {

  leadIncidents!:StackedHorizontalBarData;
  constructor(
    private _generalReportService: GeneralReportService
  ){    
     this.getComplaintProcessByTypeAndExecutive();
  }

  public getComplaintProcessByTypeAndExecutive(){
    this._generalReportService.getComplainsByExecutive()
      .subscribe(
        {
          next: ({ code, status, data}) => {
            // console.log(data);
            if (code === 200 && status === 'success') {
              this.leadIncidents = {
                title: '',
                width: '100%',
                height: '840px',
                text_color: '#000',
                graphic: {
                  categories: data.categories.reverse(),
                  series: [
                    {
                      name: 'No Fue Contactado',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.prospectsExecutiveNoContact.reverse()
                    },
                    {
                      name: 'Ejecutivo No Brindo Seguimiento',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.prospectsExecutiveNoFollowUp.reverse()
                    },
                    {
                      name: 'Mala Atención Del Ejectivo',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.prospectsExecutiveBadAttention.reverse()
                    },
                    {
                      name: 'No Se Comunico En El Horario Acordado',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.prospectsExecutiveContactBadSchedule.reverse()
                    },
                    {
                      name: 'Solicita Cambio De ejecutivo',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.prospectsExecutiveChangeExecutive.reverse()
                    }
                  ]
                }
              }
            }
          }
        }
      );
  }
}
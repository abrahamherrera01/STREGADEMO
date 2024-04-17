import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { GeneralReportService } from '../../services/general-report.service';

@Component({
  selector: 'app-complaints-about-the-care-process-by-type-and-area',
  templateUrl: './complaints-about-the-care-process-by-type-and-area.component.html',
  styleUrls: ['./complaints-about-the-care-process-by-type-and-area.component.css']
})
export class ComplaintsAboutTheCareProcessByTypeAndAreaComponent {

  percentagesLeadIncidents:string[] =[];
  leadIncidents!:StackedHorizontalBarData;
  constructor(
    private _generalReportService: GeneralReportService
  ){    
    this.getComplainsByDepartment();
    // this.percentagesLeadIncidents = ['20%','329, 15%','1491, 66%','435, 19%','329, 15%','1491, 66%'];   
  }

  public getComplainsByDepartment(){
    this._generalReportService.getComplainsByDepartment()
      .subscribe(
        {
          next: ({ code, status, data}) => {
            console.log(data);
            if (code === 200 && status === 'success') {
              this.leadIncidents = {
                title: '',
                width: '100%',
                height: '540px',
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
                      data: data.prospectsDeparmentNoContact.reverse()
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
                      data: data.prospectsDeparmentNoFollowUp.reverse()
                    },
                    {
                      name: 'Mala Atencion del Ejecutivo',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.prospectsDeparmentBadAttention.reverse()
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
                      data: data.prospectsDeparmentContactBadSchedule.reverse()
                    },
                    {
                      name: 'Solicita Cambio De Ejecutivo',
                      type: 'bar',
                      stack: 'total',
                      label: {
                        show: true,   
                        color: '#8896ae'            
                      },
                      emphasis: {
                        focus: 'series'
                      },
                      data: data.prospectsDeparmentChangeExecutive.reverse()
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

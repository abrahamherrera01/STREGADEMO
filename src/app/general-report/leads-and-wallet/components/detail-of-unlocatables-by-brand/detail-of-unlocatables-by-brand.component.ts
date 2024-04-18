import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { GeneralReportService } from '../../services/general-report.service';

@Component({
  selector: 'app-detail-of-unlocatables-by-brand',
  templateUrl: './detail-of-unlocatables-by-brand.component.html',
  styleUrls: ['./detail-of-unlocatables-by-brand.component.css']
})
export class DetailOfUnlocatablesByBrandComponent {
  public show:boolean = false;
  percentagesLeadIncidents:string[] =[];
  leadIncidents!:StackedHorizontalBarData;
  constructor(
    private _generalReportService: GeneralReportService
  ){    
    this.getCarteraUntraceableByExecutive();
    // this.percentagesLeadIncidents = ['20%','329, 15%','1491, 66%','435, 19%','329, 15%','1491, 66%'];    
  }

  public getCarteraUntraceableByExecutive(){
    this._generalReportService.getCarteraUntraceableByExecutive()
      .subscribe(
        {
          next: ({code, status, data}) => {
            if (code === 200 && status === 'success') {
              this.leadIncidents = {
                title: '',
                width: '100%',
                height: '740px',
                text_color: '#000',
                graphic: {
                  categories: data.categories.reverse(),
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
                        data: data.carteraExecutivesVoicemail.reverse()
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
                        data: data.carteraExecutivesUnavailable.reverse()            
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
                        data: data.carteraExecutivesNon_existent.reverse()            
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
                        data: data.carteraExecutivesWrong.reverse()            
                      }  
                    ]
                }
              }
              this.show = true;
            }
            
          }
        }
      );
  }

}

import { Component } from '@angular/core';
import { GraphicData } from 'src/app/graphics/interfaces/multiple-vertical-bars.interface';
import { GeneralReportService } from '../../services/general-report.service';

@Component({
  selector: 'app-crm-respondents-and-inconsistencies',
  templateUrl: './crm-respondents-and-inconsistencies.component.html',
  styleUrls: ['./crm-respondents-and-inconsistencies.component.css']
})
export class CrmRespondentsAndInconsistenciesComponent {
  data!:GraphicData;
  show:boolean = false;
  public i=0;

  constructor(
    private generalReportService:GeneralReportService
  ){        
    this.getInconsistenciesByDepartment();    
  }

  getInconsistenciesByDepartment(){
    this.generalReportService.getInconsistenciesByDepartment().subscribe({
      next:({ status, code, data }) => {
        if( status === 'success' && code == 200 ){

          console.log(data.completo)

  






          const newseries=Array();

          const names= data.completo.forEach(dat => {
       
            newseries.push(
              [dat[0],dat[1] ,dat[2], dat[3],data.percentagesSurveyed[this.i],
              ,data.percentagesInconsistency[this.i]
  
            ]); 
   
             this.i=this.i+1;
  
            });
  
  
  
            newseries.unshift(data.categories)









          this.data = {    
            title: '',
            width: '90%',
            height: '600px',
            text_color: '#000',
            graphic: {
              source: newseries,
              series: [
                { 
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {
                      return  ''; 
                    }
                  }
                }, 
                { 
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {
                      return params.value[4] + '%'; 
                    }
                  }
                }, 
                { 
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {                
                      return params.value[6] + '%'; 
                    }
                  }
                }
              ]  
            }
          } 
          this.show = true;
        }
      }
    })    
  }
}

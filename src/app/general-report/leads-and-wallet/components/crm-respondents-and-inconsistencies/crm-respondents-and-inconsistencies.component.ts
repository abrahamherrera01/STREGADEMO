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

  constructor(
    private generalReportService:GeneralReportService
  ){        
    this.getInconsistenciesByDepartment();    
  }

  getInconsistenciesByDepartment(){
    this.generalReportService.getInconsistenciesByDepartment().subscribe({
      next:({ status, code, data }) => {
        if( status === 'success' && code == 200 ){
          data.completo.unshift( data.categories );
          this.data = {    
            title: '',
            width: '90%',
            height: '600px',
            text_color: '#000',
            graphic: {
              source: data.completo,
              series: [
                { 
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {
                      return params.value[1] + ''; 
                    }
                  }
                }, 
                { 
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {
                      return params.value[2] + ''; 
                    }
                  }
                }, 
                { 
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {                
                      return params.value[3] + ''; 
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

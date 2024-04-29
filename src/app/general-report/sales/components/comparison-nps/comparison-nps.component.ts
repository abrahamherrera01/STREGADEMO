import { Component } from '@angular/core';
import { GraphicData } from 'src/app/graphics/interfaces/multiple-vertical-bars.interface';
import { ReportSalesServiceService } from '../../services/report-sales.service.service';

@Component({
  selector: 'app-comparison-nps',
  templateUrl: './comparison-nps.component.html',
  styleUrls: ['./comparison-nps.component.css']
})
export class ComparisonNpsComponent {

  data!:GraphicData;
  show:boolean = false;
  public i=0;

  constructor(
    private generalReportService:ReportSalesServiceService
  ){        
    this.getInconsistenciesByDepartment();    
  }

  getInconsistenciesByDepartment(){
    this.generalReportService.getComparativeNps().subscribe({
      next:({ status, code, data }) => {
        if( status === 'success' && code == 200 ){

            
          const newseries = Array();
          data.seriesFormat_NPS.forEach(element => {
            newseries.push(
              element.data
            )
              this.i++
          });

  
          this.data = {    
            title: '',
            width: '100%',
            height: '600px',
            text_color: '#000',
            graphic: {
              source:[
               ["product","Enero","Febrero","Marzo"],
               newseries[0],
               newseries[1],
               newseries[2],
               newseries[3],
               newseries[4],           
              ] 
              ,
              series: [
                { 
                  type: 'bar',
                  label: {
                    
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {
                      return params.value[1]; 
                    }
                  }
                }, 
                { 
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {
                      return params.value[2]; 
                    }
                  }
                }, 
                { 
                  type: 'bar',
                  label: {
                    show: true,
                    position: 'top',
                    formatter: function(params: any) {                
                      return params.value[3]; 
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

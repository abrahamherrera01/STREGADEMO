import { Component } from '@angular/core';
import { GraphicData } from 'src/app/graphics/interfaces/multiple-vertical-bars.interface';
import { GeneralReportService } from '../../services/general-report.service';
@Component({
  selector: 'app-surveyed-and-unlocatable-by-brand',
  templateUrl: './surveyed-and-unlocatable-by-brand.component.html',
  styleUrls: ['./surveyed-and-unlocatable-by-brand.component.css']
})
export class SurveyedAndUnlocatableByBrandComponent {  
  data!:GraphicData;
  show:boolean = false;

  public i=0;

  constructor(
    private generalReportService:GeneralReportService
  ){        
    this.getIncommingCarteraSurveyedUntraceableByDepartment();
  }

  getIncommingCarteraSurveyedUntraceableByDepartment(){
    this.generalReportService.getIncommingCarteraSurveyedUntraceableByDepartment().subscribe({
      next:({code, status, data}) => {


        console.log(data.percentagesSurveyed)

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
          width: '100%',
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
                    return   ''; 
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
    })    
  }
}

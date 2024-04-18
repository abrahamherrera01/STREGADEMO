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

  constructor(
    private generalReportService:GeneralReportService
  ){        
    this.getIncommingCarteraSurveyedUntraceableByDepartment();
  }

  getIncommingCarteraSurveyedUntraceableByDepartment(){
    this.generalReportService.getIncommingCarteraSurveyedUntraceableByDepartment().subscribe({
      next:({code, status, data}) => {
        data.completo.unshift( data.categories );        
        this.data = {    
          title: '',
          width: '100%',
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
    })    
  }
}

import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { GeneralReportService } from '../../services/general-report.service';

@Component({
  selector: 'app-prospects-in-portfolio-by-source-and-executive',
  templateUrl: './prospects-in-portfolio-by-source-and-executive.component.html',
  styleUrls: ['./prospects-in-portfolio-by-source-and-executive.component.css']
})
export class ProspectsInPortfolioBySourceAndExecutiveComponent {
  percentages:number[] =[];
  data!:StackedHorizontalBarData;
  show:boolean = false;
  constructor(
    private generalReportService:GeneralReportService
  ){      
    this.getAssignedCarteraBySourceAndExecutive();         
  }

  getAssignedCarteraBySourceAndExecutive(){

    this.generalReportService.getAssignedCarteraBySourceAndExecutive().subscribe(
      {
        next:({ code, status, data}) => {
          if (code === 200 && status === 'success') {
            this.percentages = data.percentages;
            this.data = {    
              title: '',
              width: '90%',
              height: '600px',
              text_color: '#000',
              graphic: {
                categories: data.categories,  
                series: [
                  {
                    name: 'No',
                    type: 'bar',
                    stack: 'total',
                    label: {
                      show: true,               
                    },
                    emphasis: {
                      focus: 'series'
                    },
                    data: data.series.NO
                  },
                  {
                    name: 'Si',
                    type: 'bar',
                    stack: 'total',
                    label: {
                      show: true,
                    },
                    emphasis: {
                      focus: 'series'
                    },
                    data: data.series.SI
                  }     
                ]
              }
            } 
            this.show = true;
          }
        },
        error: (error) => {
          console.error('Error:' + error);               
        }
      }
    );    
  }
}

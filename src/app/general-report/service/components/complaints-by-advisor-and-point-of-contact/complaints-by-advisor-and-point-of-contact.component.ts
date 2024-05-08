import { Component } from '@angular/core';
import { Serie, StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { ServiceService } from '../../services/service.service';
import { SeriesFormat } from '../../interfaces/untraceable-type-executive';

@Component({
  selector: 'app-complaints-by-advisor-and-point-of-contact',
  templateUrl: './complaints-by-advisor-and-point-of-contact.component.html',
  styleUrls: ['./complaints-by-advisor-and-point-of-contact.component.css']
})
export class ComplaintsByAdvisorAndPointOfContactComponent {

  complaints!:StackedHorizontalBarData;
  show:boolean = false;
  colors:string[] = [
    '#586E9F',
    '#EBEEF1',
    '#6A7C9A',
    '#9CA8BC',
    '#68B0E0',
    '#8A8C8F',      
  ];

  constructor(
    private _serviceService:ServiceService
  ){    
    this.initGraph();               
  }

  initGraph(){
    this._serviceService.getComplaintsAdvisorPointContact().subscribe({
      next:({status, code, data}) => {
        if( status == 'success' && code == 200 ){
          const series = this.formatSeries( data.seriesFormat );
          this.complaints = {    
            title: '',
            width: '100%',
            height: '540px',
            text_color: '#000',
            graphic: {
              categories: data.executives,     
              series: series      
            }
          }  
          this.show = true;
        }
      }
    })
  }

  formatSeries(series: any[]): Serie[] {
    return series.map((item: any, index: number) => {
      return {
        name: item.name.toLowerCase(),
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
          color: index === 0 ? '#fff' : '#8896ae'
        },
        emphasis: {
          focus: 'series'
        },
        data: item.data.slice(),
        itemStyle: {
          color: this.colors[index]
        }
      };
    });
  }   
}

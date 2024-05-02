import { Component } from '@angular/core';
import { Serie, StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { ServiceService } from '../../services/service.service';
import { SeriesFormat } from '../../interfaces/untraceable-type-executive';

@Component({
  selector: 'app-untraceable-by-type-and-executive',
  templateUrl: './untraceable-by-type-and-executive.component.html',
  styleUrls: ['./untraceable-by-type-and-executive.component.css']
})
export class UntraceableByTypeAndExecutiveComponent {
  show:boolean = false;
  untraceables!:StackedHorizontalBarData;

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
    this.initGraphic();          
  }

  initGraphic(){    
    this._serviceService.getUntraceableTypeExecutive().subscribe({
      next: ({data, status, code}) => {
        if( status == "success" && code == 200 ){
          const formatData = this.formatSeries( data.seriesFormat );
          this.untraceables = {    
            title: '',
            width: '100%',
            height: '540px',
            text_color: '#000',
            graphic: {
              categories: data.executives,      
              series: formatData    
            }
          }
          this.show = true;
        }
      }
    })    
  }

  formatSeries(series: SeriesFormat[]): Serie[] {
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

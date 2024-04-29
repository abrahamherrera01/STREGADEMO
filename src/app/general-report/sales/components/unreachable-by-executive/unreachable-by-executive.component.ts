import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { ReportSalesServiceService } from '../../services/report-sales.service.service';

@Component({
  selector: 'app-unreachable-by-executive',
  templateUrl: './unreachable-by-executive.component.html',
  styleUrls: ['./unreachable-by-executive.component.css']
})
export class UnreachableByExecutiveComponent {
  data!:StackedHorizontalBarData;
  show:boolean = false;

  constructor(
    private _reportSalesServiceService: ReportSalesServiceService
  ){
    this.graphicInit();
  }

  graphicInit():void{
    this._reportSalesServiceService.getUntraceablesByExecutives().subscribe({
      next:({ data, status, code}) => {
        this.data = {    
          title: 'Incidencias leads: ',
          width: '90%',
          height: '600px',
          text_color: '#000',
          graphic: {
            categories: data.categories,      
            series: [
              {
                name: 'Buzon directo',
                type: 'bar',
                stack: 'total',
                label: {
                  show: false
                },
                emphasis: {
                  focus: 'series'
                },
                data: data.ventasExecutivesVoicemail,
              },
              {
                name: 'Numero no disponible',
                type: 'bar',
                stack: 'total',
                label: {
                  show: false
                },
                emphasis: {
                  focus: 'series'
                },
                data: data.ventasExecutivesUnavailable,
              },
              {
                name: 'Numero equivocado',
                type: 'bar',
                stack: 'total',
                label: {
                  show: false
                },
                emphasis: {
                  focus: 'series'
                },
                data: data.ventasExecutivesWrong,
              },
              {
                name: 'Numero no existe',
                type: 'bar',
                stack: 'total',
                label: {
                  show: false
                },
                emphasis: {
                  focus: 'series'
                },
                data: data.ventasExecutivesNon_existent,
              },
            ]
          }
        }
        this.show = true;
      }
    })
  }
}

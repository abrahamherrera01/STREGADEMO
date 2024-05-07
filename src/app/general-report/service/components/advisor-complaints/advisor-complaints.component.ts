import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-advisor-complaints',
  templateUrl: './advisor-complaints.component.html',
  styleUrls: ['./advisor-complaints.component.css']
})
export class AdvisorComplaintsComponent {
  show:boolean = false;
  complaints!:StackedHorizontalBarData;
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

  initGraphic():void{
    this._serviceService.getCustomerComplaintsByTypeAreaAdviser().subscribe({
      next:({ code, status, data }) => {
        if( code == 200 && status == 'success' ){
          this.complaints = {    
            title: '',
            width: '100%',
            height: '540px',
            text_color: '#000',
            graphic: {
              categories: [ 
                'Falta de credibilidad',
                'Realizaron reparaciones no autorizadas',
                'Mala atención del asesor',
                'No ofreció movilidad',
                'No realizaron servicios acordados',
                'Error en las cotizaciones',
              ].reverse(),      
              series: [        
       
                {
                  name: '',
                  type: 'bar',
                  stack: 'total',
                  label: {
                    show: true,   
                    color: '#fff'            
                  },
                  emphasis: {
                    focus: 'series'
                  },
                  data: [
                    +data.adviserLackCredibility,
                    +data.adviserUnauthorizedRepairs,
                    +data.adviserBadAttention,
                    +data.adviserDidNotOfferMobility,
                    +data.adviserTheyDidNotPerformAgreedServices,
                    +data.adviserErrorInQuotes
                  ].reverse(),
                  itemStyle: {
                    color: this.colors[0]
                }
                },
              ]        
            }
          }      
          this.show = true;
        }
      }
    });    
  }

}

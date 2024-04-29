import { Component } from '@angular/core';
import { Serie, StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { ServiceService } from '../../services/service.service';
import { Data, Service, Series } from '../../interfaces/dashboard-ventas.interface';

@Component({
  selector: 'app-csi-and-nps-summary-and-incidents',
  templateUrl: './csi-and-nps-summary-and-incidents.component.html',
  styleUrls: ['./csi-and-nps-summary-and-incidents.component.css']
})
export class CsiAndNpsSummaryAndIncidentsComponent {
    dataVentas!:Data;
    loading:boolean = false;
    OrdersData:Service[] = [];    
    surveyedData:Service[] = [];    
    promoterData:Service[] = [];  
    neutroData:Service[] = [];  
    detractorData:Service[] = [];  
    npsData:Service[] = [];  

    colors:string[] = [
      '#586E9F',
      '#EBEEF1',
      '#6A7C9A',
      '#9CA8BC',
      '#68B0E0',
      '#8A8C8F',      
    ];
    Incidents!:StackedHorizontalBarData;
    not_contactedData!:StackedHorizontalBarData;
    contactedData!:StackedHorizontalBarData;
    constructor(
      private _serviceService:ServiceService
    ){
      this.getDashboardVentas();                               
    }

 
    getDashboardVentas(){
      this._serviceService.getDashboardVentas().subscribe({
        next: ({ data, code, status }) => {
          if( code === 200 && status == "success" ){ 
            this.dataVentas = data;
            // Primer bloque           
            this.OrdersData = data.ordersService;            
            this.loading = true;

            // Segundo bloque 
            this.surveyedData = data.surveyedService;
            this.surveyedData.forEach( ( element ) => {
              if( element.tipo_orden == 'Públicas' ){
                element['percentage'] = data.percentPublicSurvey;
              }else if( element.tipo_orden == 'Garantias' ){
                element['percentage'] = data.percentGarantiesSurvey;
              }            
            });    
            
            // Tercer bloque
            this.promoterData = data.promotersPublicService;
            this.promoterData.forEach( ( element ) => {
              if( element.tipo_orden == 'Públicas' ){
                element['percentage'] = data.percentPromotersPublic;
              }else if( element.tipo_orden == 'Garantias' ){
                element['percentage'] = data.percentPromotersGaranties;
              }            
            });   
            // Cuarto bloque
            this.neutroData = data.neutralPublicService;
            this.neutroData.forEach( ( element ) => {
              if( element.tipo_orden == 'Públicas' ){
                element['percentage'] = data.$percentNeutralPublic;
              }else if( element.tipo_orden == 'Garantias' ){
                element['percentage'] = data.$percentNeutralGaranties;
              }            
            });   

            // Quinto bloque 
            this.detractorData = data.detractorPublicService;
            this.detractorData.forEach( ( element ) => {
              if( element.tipo_orden == 'Públicas' ){
                element['percentage'] = data.percentDetractorPublic;
              }else if( element.tipo_orden == 'Garantias' ){
                element['percentage'] = data.percentDetractorGaranties;
              }            
            });  

            // Sexto bloque
            this.npsData.push({              
                tipo_orden: "Públicas",
                count: +data.npsPublic           
            });
            this.npsData.push({              
              tipo_orden: "Garantias",
              count: +data.npsGaranties           
            });   
            
            this.graphics();
          }          
        },
        error: ( error ) => {
          console.log( error );
        }
      })
    }                 
    
    graphics():void{
      // Grafica de incidencias 
      const formattedData = this.formatSeries(this.dataVentas.series);
      
      this.Incidents = {    
        title: `Incidencias: ${this.dataVentas.totalIncidentsSummary}`,
        width: '100%',
        height: '340px',
        text_color: '#fff',
        graphic: {
          categories: this.dataVentas.categoryIncidents,    
          series: formattedData 
        }
      } 

      // Grafica no contactados

      const seriesFormatNoContacted = this.formatSeries(this.dataVentas.seriesFormatNoContacted);

      this.not_contactedData = {    
        title: `No contactados: ${this.dataVentas.totalReasonNotContacted}/${this.dataVentas.percentNotContacted}`,
        width: '100%',
        height: '150px',
        text_color: '#fff',
        graphic: {
          categories: this.dataVentas.reasonNoContacted,     
          series: seriesFormatNoContacted     
        }
      }

      // Grafica Localizables
      const seriesFormatUntraceable = this.formatSeries(this.dataVentas.seriesFormatUntraceable);

      this.contactedData = {    
        title: `Localizables:${this.dataVentas.totalUntraceable}/${this.dataVentas.percentUntraceable}`,
        width: '100%',
        height: '150px',
        text_color: '#ffff',
        graphic: {
          categories: this.dataVentas.sourceUntraceable,     
          series: seriesFormatUntraceable    
        }
      }
    }
    
    formatSeries(series: Series[]): Serie[] {
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



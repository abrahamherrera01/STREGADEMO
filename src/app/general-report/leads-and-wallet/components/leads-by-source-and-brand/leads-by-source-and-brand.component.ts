import { Component } from '@angular/core';
import { InboundLeadsBySourceAndBrandService } from 'src/app/general-report/services/inbound-leads-by-source-and-brand.service.service';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';

@Component({
  selector: 'app-leads-by-source-and-brand',
  templateUrl: './leads-by-source-and-brand.component.html',
  styleUrls: ['./leads-by-source-and-brand.component.css']
})
export class LeadsBySourceAndBrandComponent {

  show:boolean=false;
  percentagesLeadIncidents:number[] =[];
  leadIncidents!:StackedHorizontalBarData;
  seriesseminuevo:any;
  seriesnuevo:any

   
  constructor(private ReportService:InboundLeadsBySourceAndBrandService){    
     this.incidentsLeads();
 
  }

  incidentsLeads(){
    this.ReportService.getleadsincoming().subscribe(
      {
        next: ({ code, status, data}) => {

          if (code === 200 && status === 'success') {
            this.percentagesLeadIncidents = data.percentages;


            this.seriesseminuevo={
              name: 'Seminuevo',
              type: 'bar',
              stack: 'total',
              label: {
                show: true,               
                position: 'right',
                formatter: (params: any) => {
                  if (this.percentagesLeadIncidents !== undefined) {
                    return `${this.percentagesLeadIncidents[params.dataIndex]}%`;
                  } else {
                    return '';
                  } 
                }, 
                color: '#0000'            
              },
              emphasis: {
                focus: 'series'
              },
              data: data.series.SEMINUEVO
            }

            
            this.seriesnuevo={
              name: 'Nuevo',
              type: 'bar',
              stack: 'total',
              label: {
                show: true,               
                position: 'right',
                formatter: (params: any) => {
                  if (this.percentagesLeadIncidents !== undefined) {
                    return `${this.percentagesLeadIncidents[params.dataIndex]}%`;
                  } else {
                    return '';
                  } 
                }, 
                color: '#000'            
              },
              emphasis: {
                focus: 'series'
              },
              data: data.series.NUEVO
            }
             
            // Fin transformar data        
            
            this.leadIncidents = {    
              title: 'Incidencias leads:'+ data.total ,
              width: '90%',
              height: '350px',
              text_color: '#000',
              graphic: {
                categories: data.categories,      
                series: [
                  this.seriesseminuevo,
                  this.seriesnuevo,              
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
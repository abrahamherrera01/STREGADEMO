import { Component } from '@angular/core';
import { LeadsAssignedByExecutiveAndBrandServiceService } from 'src/app/general-report/services/leads-assigned-by-executive-and-brand.service.service';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
 
@Component({
  selector: 'app-leads-assigned-by-executive-and-brand',
  templateUrl: './leads-assigned-by-executive-and-brand.component.html',
  styleUrls: ['./leads-assigned-by-executive-and-brand.component.css']
})
export class LeadsAssignedByExecutiveAndBrandComponent {
  percentagesLeadIncidents:number[] =[];
  leadIncidents!:StackedHorizontalBarData;

  seriesseminuevo:any;
  seriesnuevo:any;


  constructor(private leadsincomming:LeadsAssignedByExecutiveAndBrandServiceService){   
    this.incidentsLeads();
  }

  incidentsLeads(){
    this.leadsincomming.getleadbyejecutive().subscribe(
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
              width: '100%',
              height: '650px',
              text_color: '#000',
              graphic: {
                categories: data.categories,      
                series: [
                  this.seriesseminuevo,
                  this.seriesnuevo,              
                ]
              }
            }
  

          }
        },

        error: (error) => {
          console.error('Error:' + error);               
        }
      }        
    );
  }
}

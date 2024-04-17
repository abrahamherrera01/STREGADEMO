import { Component } from '@angular/core';
import { IncomingPortfolioByBrandAndSalesForceService } from 'src/app/general-report/services/incoming-portfolio-by-brand-and-sales-force.service';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
 
@Component({
  selector: 'app-incoming-portfolio-by-brand-and-sales-force',
  templateUrl: './incoming-portfolio-by-brand-and-sales-force.component.html',
  styleUrls: ['./incoming-portfolio-by-brand-and-sales-force.component.css']
})
export class IncomingPortfolioByBrandAndSalesForceComponent {
  percentagesLeadIncidents:number[] =[];
  leadIncidents!:StackedHorizontalBarData;
  array1:any;
  

  constructor(private walletincommingservice:IncomingPortfolioByBrandAndSalesForceService){   
    this.incidentsLeads();
  }

  incidentsLeads(){
    this.walletincommingservice.getAssignedCarteraBySourceAndDepartment().subscribe(
      {
        next: ({ code, status, data}) => {
  
          if (code === 200 && status === 'success') {
            this.percentagesLeadIncidents = data.percentages;
  
            const series = data.series;
            const seriesActualizado = [];
  
            for (const categoria in series) {
              if (series.hasOwnProperty(categoria)) {
                  const valores = series[categoria];
                  const serieActualizada = {
                      name: categoria,
                      type: 'bar',
                      stack: 'total',
                      label: {
                          show: false
                      },
                      emphasis: {
                          focus: 'series'
                      },
                      data: valores
                  };
                  seriesActualizado.push(serieActualizada);
              }
            }
  
            console.log(seriesActualizado);
  
            // Fin transformar data        
            
            this.leadIncidents = {    
              title: 'Incidencias leads:'+ data.total ,
              width: '100%',
              height: '650px',
              text_color: '#000',
              graphic: {
                categories: data.categories,      
                series: seriesActualizado 
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

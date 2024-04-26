import { Component } from '@angular/core';
import { StackedHorizontalBarData } from 'src/app/graphics/interfaces/stacked-horizontal-bar.interface';
import { ReportSalesServiceService } from '../../services/report-sales.service.service';

@Component({
  selector: 'app-new-nps-and-incidents',
  templateUrl: './new-nps-and-incidents.component.html',
  styleUrls: ['./new-nps-and-incidents.component.css']
})


export class NewNpsAndIncidentsComponent {

  

  allVentasByDepartment?:any[];
  sumallVentasByDepartment?:any;
  totalsumallVentasByDepartment = 0;

  ventasContactedByDepartment?:any[];
  sumventasContactedByDepartment?:any;
  totalventasContactedByDepartment= 0;

  ventasPromotorsByDepartment?:any[];
  sumventasPromotorsByDepartment:any;
  totalventasPromotorsByDepartment= 0;

  ventasNeutralsByDepartment?:any[];
  sumventasNeutralsByDepartment:any;
  totalventasNeutralsByDepartment= 0;

  ventasDetractorsByDepartment?:any[];
  sumventasDetractorsByDepartment:any;
  totalventasDetractorsByDepartment= 0;

  nps?:any
  newnps?:any;
  totalnps=0



  Incidents!:StackedHorizontalBarData;
  not_contactedData!:StackedHorizontalBarData;
  ilocalizables!:StackedHorizontalBarData;

  colors:string[] = [
    '#576E9F',/*matriz piso*/
    '#2F3033',/*administrativo*/
    '#8A8C8F',/*foraneos digital*/
    '#A4C97C',/*seminuevos*/
    '#68B0E0'/*zacatelco piso*/
  ];


  color=0
  color2=0
  color3=0

  

  constructor(private generalReportService:ReportSalesServiceService){
 

 
 
    this.incidentssales();
  }


  incidentssales(){
    this.generalReportService.getVentasIncidencesMetrics().subscribe(
      {
        next: ({ code, status, data}) => {
          if (code === 200 && status === 'success') {

          const newseries = Array();

          data.series_incidences.forEach(element => {
              newseries.push({
                  name: element.name,
                  type: 'bar',
                  stack: 'total',
                  label: {
                      show: true,
                      color: '#fff'
                  },
                  emphasis: {
                      focus: 'series'
                  },
                  data: element.data.reverse(),
                  itemStyle: {
                      color: this.colors[this.color]
                  }
              });

              this.color++
          });

            this.Incidents = {    
              title: 'Incidencias: '+ data.total_incidences,
              width: '100%',
              height: '340px',
              text_color: '#fff',
              graphic: {
                categories:  data.categories_incidences
                .reverse() ,      
                series: newseries      
              }
            } 

            /////////

            const no_contacted = Array();

            data.series_no_contacted.forEach(element => {
              no_contacted.push({
                    name: element.name,
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true,
                        color: '#fff'
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: element.data.reverse(),
                    itemStyle: {
                        color: this.colors[this.color2]
                    }
                });
  
                this.color2++
            });

            this.not_contactedData = {    
              title: 'No contactados: '+data.total_no_contacted,
              width: '100%',
              height: '150px',
              text_color: '#fff',
              graphic: {
                categories: data.categories_no_contacted.reverse(),      
                series: no_contacted.reverse()    
              }
            }  


            const ilocalizabes = Array();
 

            data.seriesFormat_untraceable.forEach(element => {
              ilocalizabes.push({
                  name: element.name,
                  type: 'bar',
                  stack: 'total',
                  label: {
                      show: true,
                      color: '#fff'
                  },
                  emphasis: {
                      focus: 'series'
                  },
                  data: element.data.reverse(),
                  itemStyle: {
                      color: this.colors[this.color3]
                  }
              });

              this.color3++
          });

            this.ilocalizables = {    
              title: 'Ilocalizables:'+data.totalUntraceable,
              width: '100%',
              height: '150px',
              text_color: '#fff',
              graphic: {
                categories:  data.categories_untraceable.reverse(),      
                series: ilocalizabes.reverse()      
              }
            }  
 
            //INICIO DE DASHBOARD
            //entragas
            this.allVentasByDepartment = data.allVentasByDepartment;
            this.sumallVentasByDepartment=this.allVentasByDepartment.forEach(department => {
              this.totalsumallVentasByDepartment += department.total_ordenes; 
            });

            //encuestados
            this.ventasContactedByDepartment = data.ventasContactedByDepartment;
            this.sumventasContactedByDepartment=this.ventasContactedByDepartment.forEach(department => {
              this.totalventasContactedByDepartment += department.total_ordenes; 
            });

            //promotores
            this.ventasPromotorsByDepartment = data.ventasPromotorsByDepartment;
            this.sumventasPromotorsByDepartment=this.ventasPromotorsByDepartment.forEach(department => {
              this.totalventasPromotorsByDepartment += department.total_promotors; 
            });
 
            //neutros
            this.ventasNeutralsByDepartment = data.ventasNeutralsByDepartment;
            this.sumventasNeutralsByDepartment=this.ventasNeutralsByDepartment.forEach(department => {
              this.totalventasNeutralsByDepartment += department.total_neutrals; 
            });

            //detractores
            this.ventasDetractorsByDepartment = data.ventasDetractorsByDepartment;
            this.sumventasDetractorsByDepartment=this.ventasDetractorsByDepartment.forEach(department => {
              this.totalventasDetractorsByDepartment += department.total_detractors; 
            });
 
            //nps
            this.nps=data.NPS;
            const claves = Object.keys(this.nps);
            const valores = Object.values(this.nps);
            this.newnps=Array();

            for (let i = 0; i < claves.length; i++) {
                  const nuevoObjeto = {
                      name: claves[i],
                      valor: valores[i]
                  };
                  this.newnps.push(nuevoObjeto);
            }

            for (const dato of this.newnps) {
              this.totalnps += dato.valor;
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

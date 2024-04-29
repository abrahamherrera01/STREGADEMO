import { Component } from '@angular/core';
import { ReportSalesServiceService } from '../../services/report-sales.service.service';

@Component({
  selector: 'app-comparison-customers-with-complaints',
  templateUrl: './comparison-customers-with-complaints.component.html',
  styleUrls: ['./comparison-customers-with-complaints.component.css']
})
export class ComparisonCustomersWithComplaintsComponent {
  data: any;  
  show: boolean = false;

  i=0

  constructor(private generalReportService: ReportSalesServiceService) {        
    this.getInconsistenciesByDepartment();    
  }

  getInconsistenciesByDepartment() {
    this.generalReportService.getCustomersWithComplaints().subscribe({
      next: ({ status, code, data }) => {
        if (status === 'success' && code == 200) {
          const newData1:any = [];
          const newData2:any = [];
          const newData3:any = [];

           data.ventasComplaintsByDepartment_january.forEach(element => {
            const entry = [element.sucursal, element.total_complaints];
            newData1.push(entry);
         });


         data.ventasComplaintsByDepartment_february.forEach(element => {
          const entry = [ element.sucursal,element.total_complaints];
          newData2.push(entry);
        });

        data.ventasComplaintsByDepartment_march.forEach(element => {
          const entry = [ element.sucursal,element.total_complaints];
          newData3.push(entry);
        });

 
        const series=Array();

        const total =newData1.length

 
        series.push(
          [newData1[0][0], newData1[0][1],newData2[0][1],newData3[0][1]]
        )
        series.push(
          [newData1[1][0], newData1[1][1],newData2[1][1],newData3[1][1]]
        )
        series.push(
          [newData1[2][0], newData1[2][1],newData2[2][1],newData3[2][1]]
        )
        series.push(
          [newData1[3][0], newData1[3][1],newData2[3][1],newData3[3][1]]
        )
        series.push(
          [newData1[4][0], newData1[4][1],newData2[4][1],newData3[4][1]]
        )
        series.push(
          [newData1[5][0], newData1[5][1],newData2[5][1]]
        )

        console.log(series)

           this.data = {
            title: '',
            width: '100%',
            height: '600px',
            text_color: '#000',
            graphic: {
              source: [
                ["sucursal", "Enero", "Febrero", "Marzo"],
                series[0],series[1],series[2],series[3],series[4],series[5],

            
              ],
              series: [
                { type: 'bar', label: { show: true, position: 'top' } },
                { type: 'bar', label: { show: true, position: 'top' } },
                { type: 'bar', label: { show: true, position: 'top' } }
              ]
            }
          };

          this.show = true; 
        }
      }
    });    
  }
}

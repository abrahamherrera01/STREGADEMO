import { Component, OnInit } from '@angular/core';
import { PieData } from 'src/app/graphics/interfaces/pie-data.interface';
import { DoughnutData } from '../../../graphics/interfaces/doughnut-data.interface';
import { StackedLineData } from '../../../graphics/interfaces/stacked-line-data.interface';
import { DatasetBarData } from 'src/app/graphics/interfaces/dataset-bar.interface';
import { HorizontalBarData } from 'src/app/graphics/interfaces/horizontal-bar.interface';
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  breadcrumbItems = [
    { text: 'Dashboard', link: '/administrator/dashboard' },    
    { text: 'Gestion' }
  ];
  
  pieData1: PieData = {    
    title: 'Leads Atendidos',
    width: '90%'
  }

  pieData2: PieData = {    
    title: 'Clientes encuestados',
    width: '90%'
  }

  doughnutData:DoughnutData = {    
    title: 'Citas agendadas',
    width: '90%'
  }

  stackedLineData:StackedLineData = {    
    title: 'Comparación semana anterior',
    width: '90%'
  }

  datasetBarData:DatasetBarData = {    
    title: 'Desempeño gestores',
    width: '90%'
  }

  horizontalBarData:HorizontalBarData = {    
    title: 'Tickets atendidos',
    width: '90%'
  }

  ngOnInit(): void {}

}

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
  
  pieData1: PieData = {    
    title: 'Leads Atendidos'
  }

  pieData2: PieData = {    
    title: 'Clientes encuestados'
  }

  doughnutData:DoughnutData = {    
    title: 'Citas agendadas'
  }

  stackedLineData:StackedLineData = {    
    title: 'Comparación semana anterior'
  }

  datasetBarData:DatasetBarData = {    
    title: 'Desempeño gestores'
  }

  horizontalBarData:HorizontalBarData = {    
    title: 'Tickets atendidos'
  }

  ngOnInit(): void {}

}

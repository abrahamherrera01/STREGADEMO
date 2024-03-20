import { Component } from '@angular/core';
import { HorizontalBarData } from 'src/app/graphics/interfaces/horizontal-bar.interface';
import { PieData } from 'src/app/graphics/interfaces/pie-data.interface';
import { StackedLineData } from 'src/app/graphics/interfaces/stacked-line-data.interface';

@Component({
  selector: 'app-manager-performance',
  templateUrl: './manager-performance.component.html',
  styleUrls: ['./manager-performance.component.css']
})
export class ManagerPerformanceComponent {
  loading:boolean = false;

  pieData1: PieData = {    
    title: 'Leads Atendidos primer contacto',
    width: '100%'
  }

  pieData2: PieData = {    
    title: 'Clientes encuestados',
    width: '100%'
  }

  horizontalBarData:HorizontalBarData = {    
    title: 'Tickets atendidos',
    width: '90%'
  }

  stackedLineData:StackedLineData = {    
    title: 'Comparación semana anterior',
    width: '90%'
  }
}

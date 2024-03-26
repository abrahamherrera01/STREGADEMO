import { Component } from '@angular/core';
import { HorizontalBarData } from 'src/app/graphics/interfaces/horizontal-bar.interface';
import { PieData } from 'src/app/graphics/interfaces/pie-data.interface';
import { StackedLineData } from 'src/app/graphics/interfaces/stacked-line-data.interface';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {
  breadcrumbItems = [
    { text: 'Dashboard', link: '/manager/dashboard' },    
    { text: 'Gestion' }
  ];

  pieData1: PieData = {    
    title: 'Leads Atendidos primer contacto',
    width: '90%'
  }

  pieData2: PieData = {    
    title: 'Clientes encuestados',
    width: '90%'
  }

  stackedLineData:StackedLineData = {    
    title: 'Comparación semana anterior',
    width: '90%'
  }

  horizontalBarData:HorizontalBarData = {    
    title: 'Tickets atendidos',
    width: '90%'
  }
}

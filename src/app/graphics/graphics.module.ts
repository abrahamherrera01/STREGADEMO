import { NgModule } from '@angular/core';
import { PieComponent } from './pie/pie.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { StackedLineComponent } from './stacked-line/stacked-line.component';
import { DatasetBarComponent } from './dataset-bar/dataset-bar.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { StackedHorizontalBarComponent } from './stacked-horizontal-bar/stacked-horizontal-bar.component';



@NgModule({
  declarations: [
    PieComponent,
    DoughnutComponent,
    StackedLineComponent,
    DatasetBarComponent,
    HorizontalBarComponent,
    StackedHorizontalBarComponent
  ],
  imports: [
    AngularMaterialModule
  ],
  exports: [
    PieComponent,
    DoughnutComponent,
    StackedLineComponent,
    DatasetBarComponent,
    HorizontalBarComponent,
    StackedHorizontalBarComponent
  ]
})
export class GraphicsModule { }

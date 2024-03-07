import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesExecutiveRoutingModule } from './sales-executive-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SalesExecutiveRoutingModule,
    SharedModule,
    AngularMaterialModule
  ]
})
export class SalesExecutiveModule { }

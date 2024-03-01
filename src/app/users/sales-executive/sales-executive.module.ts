import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesExecutiveRoutingModule } from './sales-executive-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SalesExecutiveRoutingModule
  ]
})
export class SalesExecutiveModule { }

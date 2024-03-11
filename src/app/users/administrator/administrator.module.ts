import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ManagementComponent } from './management/management.component';
import { GraphicsModule } from 'src/app/graphics/graphics.module';


@NgModule({
  declarations: [
    DashboardComponent,    
    ManagementComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SharedModule,
    AngularMaterialModule,
    GraphicsModule
  ]
})
export class AdministratorModule { }

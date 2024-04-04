import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralReportRoutingModule } from './general-report-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LeadAndPortfolioManagementComponent } from './lead-and-portfolio-management/lead-and-portfolio-management.component';
import { GraphicsModule } from '../graphics/graphics.module';


@NgModule({
  declarations: [
    PrincipalComponent,
    LeadAndPortfolioManagementComponent
  ],
  imports: [
    CommonModule,
    GeneralReportRoutingModule,
    MatFormFieldModule,
    AngularMaterialModule,
    FormsModule,
    SharedModule,
    GraphicsModule
  ]
})
export class GeneralReportModule { }

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
import { LeadsBySourceAndBrandComponent } from './leads-by-source-and-brand/leads-by-source-and-brand.component';
import { LeadsAssignedByExecutiveAndBrandComponent } from './leads-assigned-by-executive-and-brand/leads-assigned-by-executive-and-brand.component';
import { IncomingPortfolioByBrandAndSalesForceComponent } from './incoming-portfolio-by-brand-and-sales-force/incoming-portfolio-by-brand-and-sales-force.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    LeadAndPortfolioManagementComponent,
    LeadsBySourceAndBrandComponent,
    LeadsAssignedByExecutiveAndBrandComponent,
    IncomingPortfolioByBrandAndSalesForceComponent
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

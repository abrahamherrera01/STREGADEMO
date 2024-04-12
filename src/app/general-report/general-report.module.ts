import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralReportRoutingModule } from './general-report-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { GraphicsModule } from '../graphics/graphics.module';
import { PrincipalComponent } from './leads-and-wallet/components/principal/principal.component';
import { LeadAndPortfolioManagementComponent } from './leads-and-wallet/components/lead-and-portfolio-management/lead-and-portfolio-management.component';
import { LeadsBySourceAndBrandComponent } from './leads-and-wallet/components/leads-by-source-and-brand/leads-by-source-and-brand.component';
import { LeadsAssignedByExecutiveAndBrandComponent } from './leads-and-wallet/components/leads-assigned-by-executive-and-brand/leads-assigned-by-executive-and-brand.component';
import { IncomingPortfolioByBrandAndSalesForceComponent } from './leads-and-wallet/components/incoming-portfolio-by-brand-and-sales-force/incoming-portfolio-by-brand-and-sales-force.component';
import { ProspectsInPortfolioBySourceAndExecutiveComponent } from './leads-and-wallet/components/prospects-in-portfolio-by-source-and-executive/prospects-in-portfolio-by-source-and-executive.component';
import { CrmRespondentsAndInconsistenciesComponent } from './leads-and-wallet/components/crm-respondents-and-inconsistencies/crm-respondents-and-inconsistencies.component';
import { SurveyedAndUnlocatableByBrandComponent } from './leads-and-wallet/components/surveyed-and-unlocatable-by-brand/surveyed-and-unlocatable-by-brand.component';
import { DetailOfUnlocatablesByBrandComponent } from './leads-and-wallet/components/detail-of-unlocatables-by-brand/detail-of-unlocatables-by-brand.component';
import { CrmInconsistenciesByExecutiveComponent } from './leads-and-wallet/components/crm-inconsistencies-by-executive/crm-inconsistencies-by-executive.component';
import { ComplaintsAboutTheCareProcessByTypeAndAreaComponent } from './leads-and-wallet/components/complaints-about-the-care-process-by-type-and-area/complaints-about-the-care-process-by-type-and-area.component';
import { ComplaintsAboutTheServiceProcessByTypeAndExecutiveComponent } from './leads-and-wallet/components/complaints-about-the-service-process-by-type-and-executive/complaints-about-the-service-process-by-type-and-executive.component';
import { UploadDataComponent } from './leads-and-wallet/components/upload-data/upload-data.component';
import { PerformanceAndMainIncidentsByAdvisorComponent } from './leads-and-wallet/components/performance-and-main-incidents-by-advisor/performance-and-main-incidents-by-advisor.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    LeadAndPortfolioManagementComponent,
    LeadsBySourceAndBrandComponent,
    LeadsAssignedByExecutiveAndBrandComponent,
    IncomingPortfolioByBrandAndSalesForceComponent,
    ProspectsInPortfolioBySourceAndExecutiveComponent,
    CrmRespondentsAndInconsistenciesComponent,
    SurveyedAndUnlocatableByBrandComponent,
    DetailOfUnlocatablesByBrandComponent,
    CrmInconsistenciesByExecutiveComponent,
    ComplaintsAboutTheCareProcessByTypeAndAreaComponent,
    ComplaintsAboutTheServiceProcessByTypeAndExecutiveComponent,
    UploadDataComponent,
    PerformanceAndMainIncidentsByAdvisorComponent
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

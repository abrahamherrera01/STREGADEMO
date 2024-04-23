import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './leads-and-wallet/components/principal/principal.component';
import { UploadDataComponent } from './leads-and-wallet/components/upload-data/upload-data.component';
import { PrincipalServiceComponent } from './service/components/principal-service/principal-service.component';
import { PrincipalSaleComponent } from './sales/components/principal-sale/principal-sale.component';


const routes: Routes = [
  { path: 'leads', component: PrincipalComponent },
  { path: 'service', component: PrincipalServiceComponent },
  { path: 'sale', component: PrincipalSaleComponent },
  { path: 'upload', component: UploadDataComponent },
  { path: '**', redirectTo: 'leads' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralReportRoutingModule { }

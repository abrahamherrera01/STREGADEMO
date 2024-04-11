import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { UploadDataComponent } from './upload-data/upload-data.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'upload', component: UploadDataComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralReportRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavComponent,
    BreadcrumbComponent,    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }

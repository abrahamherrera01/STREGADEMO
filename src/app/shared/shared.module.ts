import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';




@NgModule({
  declarations: [
    NavComponent,
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }

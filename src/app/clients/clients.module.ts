import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './components/cards/cards.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { DatosComponent } from './components/datos/datos.component';
import { SharedModule } from '../shared/shared.module';


 

@NgModule({
  declarations: [
    ProfileComponent,
    SearchComponent,
    CardsComponent,    
    DatosComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatFormFieldModule,
    AngularMaterialModule,
    FormsModule,
    SharedModule
  ]
})
export class ClientsModule { }

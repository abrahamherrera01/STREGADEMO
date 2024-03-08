import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
 import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

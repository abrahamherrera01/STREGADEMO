import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: 'search' }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }

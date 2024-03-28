import { Component } from '@angular/core';

@Component({
  selector: 'app-my-leads',
  templateUrl: './my-leads.component.html',
  styleUrls: ['./my-leads.component.css']
})
export class MyLeadsComponent {
  breadcrumbItems = [
    { text: 'Dashboard', link: '/manager/dashboard' },    
    { text: 'Mis leads' }
  ];
}

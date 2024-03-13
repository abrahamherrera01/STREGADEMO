import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-leads',
  templateUrl: './manage-leads.component.html',
  styleUrls: ['./manage-leads.component.css']
})
export class ManageLeadsComponent {
  breadcrumbItems = [
    { text: 'Dashboard', link: '/administrator/dashboard' },    
    { text: 'Asignación de leads' }
  ];
}

import { Component } from '@angular/core';
import { NavItem } from 'src/app/shared/nav/nav.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {  
  
  navItems:NavItem[] = [
    {
      name: "Mis leads",
      path: "my-leads"
    },
    {
      name: "Mi cartera",
      path: "my-wallet"
    },
    {
      name: "Cartera asignada a vendedor",
      path: ""
    }
  ];

  
}

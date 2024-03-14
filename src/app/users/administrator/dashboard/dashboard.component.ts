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
      name: "Subida manual de cartera de leads",
      path: "load-leads-and-wallet"
    },
    {
      name: "Asignar/Desasignar leads",
      path: "manage-leads"
    },
    {
      name: "Asignar/Desasignar cartera",
      path: "manage-wallet"
    },
    {
      name: "Administrar gestor",
      path: "manage-managers"
    },
    {
      name: "Administrar ejecutivo de ventas",
      path: ""
    },
    {
      name: "Generar reportes",
      path: ""
    },
  ]
}

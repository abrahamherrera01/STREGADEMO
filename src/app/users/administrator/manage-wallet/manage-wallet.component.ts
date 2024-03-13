import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-wallet',
  templateUrl: './manage-wallet.component.html',
  styleUrls: ['./manage-wallet.component.css']
})
export class ManageWalletComponent {
  breadcrumbItems = [
    { text: 'Dashboard', link: '/administrator/dashboard' },    
    { text: 'Asignación de cartera' }
  ];
}

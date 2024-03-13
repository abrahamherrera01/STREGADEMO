import { Component } from '@angular/core';
import { LoadCsv } from '../interfaces/load-csv.interface';

@Component({
  selector: 'app-load-leads-and-wallet',
  templateUrl: './load-leads-and-wallet.component.html',
  styleUrls: ['./load-leads-and-wallet.component.css']
})
export class LoadLeadsAndWalletComponent {
  

  breadcrumbItems = [
    { text: 'Dashboard', link: '/administrator/dashboard' },    
    { text: 'Subida manual de leads y cartera' }
  ];

  leadsData: LoadCsv = {
    'title':'Leads',
    'type': 'leads'
  }

  walletData: LoadCsv = {
    'title':'Cartera',
    'type': 'cartera'
  }

  
}

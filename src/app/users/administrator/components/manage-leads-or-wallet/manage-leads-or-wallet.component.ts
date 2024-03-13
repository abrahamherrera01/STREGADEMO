import { Component, Input } from '@angular/core';
export interface Lead {
  name: string;
  age: number;  
  email: string;
}

const ELEMENT_DATA1: Lead[] = [
  { name: 'Hydrogen', age: 12, email: 'H282@gmail.com'},
  { name: 'Helium', age: 42, email: 'He282@gmail.com'},
  { name: 'Lithium', age: 62, email: 'Li282@gmail.com'},
  { name: 'Beryllium', age: 92, email: 'Be282@gmail.com'},
  { name: 'Boron', age: 12, email: 'B282@gmail.com'},  
];
const ELEMENT_DATA2: Lead[] = [  
  { name: 'Carbon', age: 12, email: 'C282@gmail.com'},
  { name: 'Nitrogen', age: 17, email: 'N282@gmail.com'},
  { name: 'Oxygen', age: 14, email: 'O282@gmail.com'},
  { name: 'Fluorine', age: 14, email: 'F282@gmail.com'},
  { name: 'Neon', age: 22, email: 'Ne282@gmail.com'},
];

@Component({
  selector: 'app-manage-leads-or-wallet',
  templateUrl: './manage-leads-or-wallet.component.html',
  styleUrls: ['./manage-leads-or-wallet.component.css']
})
export class ManageLeadsOrWalletComponent {
  @Input() type!: string;

  loading:boolean = false;  
  displayedColumns: string[] = ['add', 'nombre', 'edad', 'email'];
  dataSource1 = ELEMENT_DATA1;
  dataSource2 = ELEMENT_DATA2;
}

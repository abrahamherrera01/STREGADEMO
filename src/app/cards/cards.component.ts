import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatosComponent } from '../datos/datos.component';
import { CustomerInterface } from '../../interfaces/customer-interface';
 
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(public dialog: MatDialog) {}

  @Input() full_name!: string;
  @Input() rfc!: any;
  @Input() id!: number;
  @Input() picture!: any;
  @Input() sum_orders!: number;

 

  abrirModal() {
    console.log(this.full_name);
    
    console.log(this.sum_orders);
    
    const dialogRef = this.dialog.open(DatosComponent, {
      width: '100%', 
      data: { 
        full_name: this.full_name,
        id: this.id,
        sum_orders: this.sum_orders
      }
    });
  }
}

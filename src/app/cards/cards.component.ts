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
  @Input() id_client_bp!: string;
  @Input() gender!: string | undefined;
  @Input() phone_1!: string;
  @Input() phone_2!: string;
  @Input() cellphone!: string;
  @Input() email_1!: string;
  @Input() city!: string | undefined;
  @Input() delegacy!: string;
  @Input() colony!: string;
  @Input() address!: string;
  @Input() zip_code!: string;

 

  abrirModal() {
    
    const dialogRef = this.dialog.open(DatosComponent, {
      width: '100%', 
      data: { 
        full_name: this.full_name,
        id: this.id,
        sum_orders: this.sum_orders,
        id_client_bp: this.id_client_bp,
        rfc: this.rfc,
        gender: this.gender,
        phone_1: this.phone_1,
        phone_2: this.phone_2,
        cellphone: this.cellphone,
        email_1: this.email_1,
        city: this.city,
        delegacy: this.delegacy,
        colony: this.colony,
        address: this.address,
        zip_code: this.zip_code
      }
    });
  }
}

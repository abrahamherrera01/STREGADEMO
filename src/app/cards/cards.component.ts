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
  @Input() picture!: any;

 

  abrirModal() {
    const dialogRef = this.dialog.open(DatosComponent, {
      width: '100%', 
    });
  }
}

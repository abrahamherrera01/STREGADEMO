import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatosComponent } from '../datos/datos.component';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(public dialog: MatDialog) {}

 

  abrirModal(): void {
    const dialogRef = this.dialog.open(DatosComponent, {
      width: '100%', 
    });
  }
}

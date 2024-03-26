import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatosComponent } from '../datos/datos.component';
import { ProfileComponent } from '../profile/profile.component';
 

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


  handleImageError() {
    this.picture = '../../assets/logo/ICON.svg';
  }

  getProfile(id: number, picture: string, name: string) {
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '1700px',
      maxHeight: '80vh',
      data: { 
        id: id, 
        picture: picture,
        name: name, 
        email: this.email_1,
        id_bp: this.id_client_bp,
        rfc: this.rfc,
        phone1: this.phone_1,
        phone2: this.cellphone,
        address: this.address+' '+this.colony+' '+this.zip_code+' '+this.city,
        sum_orders: this.sum_orders,
      } 
    });
  }

}

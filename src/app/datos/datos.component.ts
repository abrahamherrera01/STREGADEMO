import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerserviceService } from '../services/customerservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/interfaces/vehicles-order-by-customer.interface';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit{
  public displayedColumns: string[] = ['id']; /** , 'orderId', 'serviceDate', 'totalPrice', 'orderKm', 'observations' */
  public dataSource!: MatTableDataSource<Order>

  public fullName: string = '';
  public name!: string;
  public vin!: number;

  public datos!: any[];

  public sum_order!: number;

  public id_client_bp!: string;
  public rfc!: string;
  public gender!: string;
  public phone_1!: string;
  public phone_2!: string;
  public cellphone!: string;
  public email_1!: string;
  public city!: string;
  public delegacy!: string;
  public colony!: string;
  public address!: string;
  public zip_code!: string;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _customerserviceServices: CustomerserviceService
  ) {}

  ngOnInit(): void {
    this.fullName = this.data.full_name;
    this.id_client_bp = this.data.id_client_bp;
    this.rfc = this.data.rfc;
    this.gender = this.data.gender;
    this.phone_1 = this.data.phone_1;
    this.phone_2 = this.data.phone_2;
    this.cellphone = this.data.cellphone;
    this.email_1 = this.data.email_1;
    this.city = this.data.city;
    this.delegacy = this.data.delegacy;
    this.colony = this.data.colony;
    this.address = this.data.address;
    this.zip_code = this.data.zip_code;
    
    console.log(this.data.id);
    this.getVehiclesWithOrdersByCustomer(this.data.id);
    this.sum_order = this.data.sum_orders;
    
  }

  public getVehiclesWithOrdersByCustomer(id: number){
    this._customerserviceServices.getVehiclesWithOrdersByCustomer(id)
      .subscribe({
        next: (response) => {
          // console.log(response.data);
          this.datos = response.data;
          console.log(this.datos);
          // if (this.datos.length > 1) {
          //   console.log('Entro');
          //   for (let i = 0; i < this.datos.length; i++) {
          //     // console.log(response.data[i].orders);
          //     console.log(this.datos[i].orders);
          //     // this.dataSource = new MatTableDataSource(response.data[i].orders[i]);
          //     this.dataSource = new MatTableDataSource(this.datos[i].orders);
          //   }
          // }else{
          //   for (let i = 0; i < this.datos.length; i++) {
          //     // console.log(response.data[i].orders);
          //     console.log(this.datos[i].orders[i]);
          //     // this.dataSource = new MatTableDataSource(response.data[i].orders);
          //     this.dataSource = new MatTableDataSource(this.datos[i].orders);
          //   }
          // }

          // if (this.datos.length > 1) {
          //     for (let i = 0; i < this.datos.length; i++) {
          //       for (let j = 0; j < this.datos[i].orders.length; j++) {
          //         console.log(this.datos[i].orders[j].id);
          //         this.dataSource = new MatTableDataSource(this.datos[i].orders[j]);
          //       }
          //     }
          //   }
            // console.log(this.datos[1].orders[0].id);
            
        }
      });
  }
}

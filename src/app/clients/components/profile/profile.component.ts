import { Component, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from "sweetalert2";
import { CustomerserviceService } from 'src/app/services/customerservice.service';
import { Datum } from 'src/interfaces/vehicles-order-by-customer.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public picture!:string;
  public id!:string;
  public name!:string;
  public email!:string;
  public id_bp!:string;
  public rfc!:string;
  public phone1!:number;
  public phone2!:number;
  public address!:string;

  public datos!: Datum[];
  public saleVehicles!: Datum[];
  public aftersaleVehicles!: Datum[];
  public sum_order:number;
  public order_loading:boolean = false;

  public inputValue!:File;
  fileSelected: boolean = false;
  message_picture=false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _customerserviceService:CustomerserviceService) {
    this.picture =this.data.picture;
    this.id =  this.data.id;
    this.name =  this.data.name;
    this.email =  this.data.email;
    this.id_bp =  this.data.id_bp;
    this.rfc =  this.data.rfc;
    this.phone1=this.data.phone1;
    this.phone2=this.data.phone2;
    this.address=this.data.address; 

    this.getVehiclesWithOrdersByCustomer( +this.id );
    this.sum_order = this.data.sum_orders;    
  }

  checkFileInput(event: any, value: any) {
    this.fileSelected = event.target.files && event.target.files.length > 0;  
    this.message_picture=true;
    const imagev = value.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      const imgElement = document.getElementById('ImageUpload') as HTMLImageElement;
      if (imgElement && e.target) { 
        imgElement.src = e.target.result as string;
      }
    };
    reader.readAsDataURL(imagev);
 
  }

  upload(value: any) {
    const archivo = value.files[0];
    Swal.fire({
      title: "¿Quieres actualizar la Imagen?",
      showCancelButton: true,
      confirmButtonText: "Actualizar"
    }).then((result) => {
      if (result.isConfirmed) {        
        this._customerserviceService.uploadImage(this.id, archivo).subscribe(
          (resp) => {
            if (resp.status === "success") {
              Swal.fire("Imagen Actualizada Correctamente", "", "success");

              const reader = new FileReader();
              reader.onload = (e) => {
                const imgElement = document.getElementById('avatarImage') as HTMLImageElement;
                if (imgElement && e.target) { // Verificar que tanto imgElement como e.target no sean nulos
                  imgElement.src = e.target.result as string;
                }
              };
              reader.readAsDataURL(archivo);

              setTimeout(() => {
                window.location.reload();
              }, 2000);
            } else {
              Swal.fire(resp.message != undefined ? resp.message : resp.errors != undefined && resp.errors.length > 0 ? resp.errors[0] : 'Ocurrió un problema', "", "error");
            }
          }              
        );  
      }
    });
  }

  public getVehiclesWithOrdersByCustomer(id: number){
    this.order_loading = true;
    this._customerserviceService.getVehiclesWithOrdersByCustomer(id)
      .subscribe({
        next: (response) => {
          this.datos = response.data;
          this.saleVehicles = response.saleVehicles;
          this.aftersaleVehicles = response.aftersaleVehicles;
          this.order_loading = false;          
        }
      });
  }

}

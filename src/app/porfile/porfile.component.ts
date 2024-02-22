import { Component, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import Swal from "sweetalert2";
import { CustomerserviceService } from '../services/customerservice.service';

@Component({
  selector: 'app-porfile',
  templateUrl: './porfile.component.html',
  styleUrls: ['./porfile.component.css']
})
export class PorfileComponent {

  public picture!:string;
  public id!:string;
  public name!:string;
  public email!:string;
  public id_bp!:string;
  public rfc!:string;
  public phone1!:number;
  public address!:string;

  public inputValue!:File;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private _customerserviceService:CustomerserviceService) {
     this.picture =this.data.picture;
     this.id =  this.data.id;
     this.name =  this.data.name;
     this.email =  this.data.email;
     this.id_bp =  this.data.id_bp;
     this.rfc =  this.data.rfc;
     this.phone1=this.data.phone1;
     this.address=this.data.address;
    
     

  }

  upload(value:any){
    // console.log(this.inputValue);
    const archivo = value.files[0];
    console.log(archivo);
 

    
    Swal.fire({
        title: "¿Quieres actualizar la Imagen?",
        showCancelButton: true,
        confirmButtonText: "Actualizar"
    }).then((result) => {
        if (result.isConfirmed) {        
            this._customerserviceService.uploadImage(this.id,archivo)
            .subscribe(
              ( resp ) => {
                if(resp.status === "success"){
                  Swal.fire("Imagen Actualizada Correctamente", "", "success");
 
                }else{
                  Swal.fire(resp.message != undefined ? resp.message : resp.errors != undefined && resp.errors.length > 0 ? resp.errors[0] : 'Ocurrió un problema', "", "error");
                }
 
               }              
            )  
        }
    });
  }

}

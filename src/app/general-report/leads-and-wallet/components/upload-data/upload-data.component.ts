import { Component, ViewChild } from '@angular/core';
import { GeneralReportService } from '../../../services/general-report.service';
import Swal from 'sweetalert2';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent {
  @ViewChild('select') select?: MatSelect;

  file?: File | null;
  show:boolean = false;
  loading:boolean = false;
  
  constructor(private generalReportService:GeneralReportService) {}

  uploadFile(input: HTMLInputElement) {
    this.show = false;
    this.loading = true;
    this.file = input.files ? input.files[0] : null;
    if (this.file) {
      this.generalReportService.uploadFile(this.file, this.select?.value).subscribe(
        {
          next: ({ code, status, respuesta}) => {
            if (code === 200 && status === 'success') {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: "Carga completada",
                showConfirmButton: true,
                confirmButtonColor: '#008bcc',
                timer: 3500
              });
              this.loading = false;
            } else {
              Swal.fire({
                icon: "error",            
                text: 'Ocurrió un error'        
              });     
              this.loading = false;           
            }
          },

          error: (error) => {
            Swal.fire({
              icon: "error",            
              text: 'Error:' + error            
            });    
            this.loading = false;        
          }
        }        
      );
    } else {
      console.log('Ningún archivo seleccionado');
    }
  }

  changeLabel(event: any) {    
    const fileInput: HTMLInputElement = event.target;
    this.file = fileInput.files ? fileInput.files[0] : null;
    const label = document.querySelector('.upload-label');
    if (this.file) {            
      this.show = true;
      if (label) {
        label.textContent = this.file.name;
      }        
    }else{
      this.show = false;
      if (label) {
        label.textContent = "Selecciona un archivo";
      }         
    }
  }

  optionSelected() {
    console.log("dato:" + this.select?.value);
  }
  
}

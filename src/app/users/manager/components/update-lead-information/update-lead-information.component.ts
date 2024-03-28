import { Component, ElementRef, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface Data {    
  title: string;
  text_button:string;
  manager_id: number;  
}
@Component({
  selector: 'app-update-lead-information',
  templateUrl: './update-lead-information.component.html',
  styleUrls: ['./update-lead-information.component.css']
})
export class UpdateLeadInformationComponent {
  form!: FormGroup;
  loading:boolean = false;
  constructor(    
    private elementRef: ElementRef,
    private dialogRef: MatDialogRef<UpdateLeadInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data
  ) {
    this.formInit();
  }

  formInit():void {
    this.form = new FormGroup({
      branch: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      vehicleOfInterest: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone1: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),      
      phone2: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),       
    });
  }

  updateLead(){
    if (this.form.valid) {
      this.loading = true;
      console.log('Formulario válido, datos:', this.form.value);
      setTimeout(() => {
        this.loading = false;
        this.dialogRef.close();
      }, 3000)            
    } else {
      console.error('El form no es válido. Por favor, verifica los campos.');
    }
  }

}

import { Component, ElementRef, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent {
  form: FormGroup;
  passwordCorrect:boolean = false;
  loading: boolean = false;

  title = 'Dar de alta a gestor';
  text_button = 'Agregar';

  constructor(
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private dialogRef: MatDialogRef<AddManagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //this.title = data.title;
    if( data.manager_id != null ){
      this.title = 'Actualizar gestor';
      this.text_button = 'Actualizar';
    }
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),      
      confirmPassword: new FormControl('', { validators: Validators.required, updateOn: 'blur' })

    }, {
      validators: this.passwordMatchValidator
    });

    this.form.valueChanges.subscribe(() => {
      // Verificar si el formulario es válido
      if (this.form.valid) {
        const button = this.elementRef.nativeElement.querySelector('.appear-animation');
        button.classList.remove('animate__headShake');
        void button.offsetWidth;
        button.classList.add('animate__headShake');
      }      
    });
  }

  addManager() {    
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

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
  
    if (passwordControl && confirmPasswordControl && passwordControl.value === confirmPasswordControl.value) {            
      confirmPasswordControl.setErrors(null); // Marcar el control como válido
      return null;
    } else {   
      confirmPasswordControl?.setErrors({ passwordMismatch: true }); // Marcar el control como inválido
      return { passwordMismatch: true }; 
    }
  };
}

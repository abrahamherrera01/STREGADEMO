import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {    
    this.loading = true;
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (response) => {
          if( response.status === "success" ){
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            this.loading = false;
          }else {
            Swal.fire({
              icon: "error",            
              text: 'Error al iniciar sesión: ' + response.message            
            });
            this.loading = false;
          }      
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          Swal.fire({
            icon: "error",            
            text: 'Error al iniciar sesión:' + error            
          });
          this.loading = false;
        }
      );
    } else {      
      Swal.fire({
        icon: "error",            
        text: 'Formulario inválido. Por favor, complete todos los campos correctamente.'           
      });   
      this.loading = false;   
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

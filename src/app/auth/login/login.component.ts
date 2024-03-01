import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

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
    private authService:AuthService,
    private router: Router
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
            this.redirectTo( response.user.type );
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

  redirectTo(role: string) {
    switch (role) {
      case 'Customer':
        this.router.navigate(['/customer']);
        break;
      case 'Sales_executive':
        this.router.navigate(['/sales-executive']);
        break;
      case 'Manager':
        this.router.navigate(['/manager']);
        break;
      case 'Administrator':
        this.router.navigate(['/administrator']);
        break;
      default:
        console.log('Role not recognized');
        break;
    }
  }
}

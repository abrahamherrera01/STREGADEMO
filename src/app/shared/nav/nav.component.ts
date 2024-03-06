import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
export interface NavItem {  
  name:              string;
  path:             string;  
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Input() navItems!: NavItem[];
  
  isMenuOpen: boolean = false;
  

  constructor(    
    private router: Router
  ) {}

  toggleSidenav() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(){    
    Swal.fire({
      title: "¿Estás seguro de que quieres cerrar la sesión?",       
      showCancelButton: true,
      confirmButtonText: "Confirmar",      
    }).then((result) => {      
      if (result.isConfirmed) {
        localStorage.removeItem('user');    
        localStorage.removeItem('token');
        this.router.navigate(['/auth/iniciar-sesion']);                
      }
    });    
  }


}

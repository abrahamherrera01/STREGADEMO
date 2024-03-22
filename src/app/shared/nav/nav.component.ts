import { Component, Input, OnDestroy } from '@angular/core';
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
export class NavComponent implements OnDestroy {
  @Input() navItems!: NavItem[];
  logged:boolean;
  
  isMenuOpen: boolean = false;

  private clickListener: (event: MouseEvent) => void;
  
  constructor(    
    private router: Router
  ) {
    this.clickListener = this.onDocumentClick.bind(this);
    document.addEventListener('click', this.clickListener);
    this.logged = this.isLogged();
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.clickListener);
  }

  toggleSidenav() {
    this.isMenuOpen = !this.isMenuOpen;    
  }
  
  logout( event: MouseEvent ){   
    event.stopPropagation(); 
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

  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    
    if (!target.closest('.mat-sidenav') && !target.closest('.mat-mdc-button-touch-target') && this.isMenuOpen) {
      this.isMenuOpen = false;      
    }
  }

  isLogged():boolean {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if( user == undefined && token == undefined ){
      return false;
    }else{
      return true;
    }
  }
}

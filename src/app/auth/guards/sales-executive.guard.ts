import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class salesExecutiveGuard {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return this.authService.isLoggedIn().pipe(
      map((response) => {        
        if (response.status === "success") {          
          if( response.user.type === "Sales_executive"){
            return true;
          }else{
            this.router.navigate(['/auth/iniciar-sesion']);
            return false;
          }   
        } else {
          this.router.navigate(['/auth/iniciar-sesion']);
          return false;
        }
      }),
      catchError(() => {
        this.router.navigate(['/auth/iniciar-sesion']);
        return of(false);
      })
    );
  }
}

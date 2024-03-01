import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/api/login`, { email, password });
  }
}

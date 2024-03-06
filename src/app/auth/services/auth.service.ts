import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login.interface';
import { GetUser } from '../interfaces/get-user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Login> {
    return this.http.post<Login>(`${this.apiUrl}/api/login`, { email, password });
  }

  isLoggedIn(): Observable<GetUser> {
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });    
    return this.http.get<GetUser>(`${this.apiUrl}/api/getUser`, { headers });    
  }
}

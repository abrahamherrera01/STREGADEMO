import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInterface } from '../../interfaces/customer-interface';
 

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
 

  constructor(private http: HttpClient) { }

  getCustomers(  page:number, search?:string): Observable<CustomerInterface> {

    if(search ==null){
      //carga por defecto
      return this.http.get<CustomerInterface>(`http://127.0.0.1:8000/api/customers/getCustomersByWord?page=${page}`);
    }
    else{
      //carga en la busqueda
      return this.http.get<CustomerInterface>(`http://127.0.0.1:8000/api/customers/getCustomersByWord/${search}?page=${page}`);
    }

   }
}

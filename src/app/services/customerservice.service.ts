import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInterface } from '../../interfaces/customer-interface';
import { VehiclesOrderByCustomer } from 'src/interfaces/vehicles-order-by-customer.interface';
import { environment } from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  private baseUrl:string = environment.baseUrl;      

  constructor(private http: HttpClient) { }

  getCustomers(  page:number, search?:string): Observable<CustomerInterface> {

    if(search ==null){
      //carga por defecto
      return this.http.get<CustomerInterface>(`${ this.baseUrl }/api/customers/getCustomersByWord?page=${page}`);
    }
    else{
      //carga en la busqueda
      return this.http.get<CustomerInterface>(`${ this.baseUrl }/api/customers/getCustomersByWord/${search}?page=${page}`);
    }

   }

   public getVehiclesWithOrdersByCustomer(id: number): Observable<VehiclesOrderByCustomer>{       
    return this.http.get<VehiclesOrderByCustomer>(`${ this.baseUrl }/api/customers/getVehiclesWithOrdersByCustomer/${ id }`);
   }
}

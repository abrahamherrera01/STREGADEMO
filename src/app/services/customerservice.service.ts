import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerInterface } from '../../interfaces/customer-interface';
import { VehiclesOrderByCustomer } from 'src/interfaces/vehicles-order-by-customer.interface';
import { environment } from 'src/environments/environment';
import { UntypedFormGroup } from '@angular/forms';
 

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  private baseUrl:string = environment.baseUrl;      

  constructor(private http: HttpClient) { }
  

  getCustomers(  page:number, form?:UntypedFormGroup ): Observable<CustomerInterface> {

      return this.http.post<CustomerInterface>(`${ this.baseUrl }/api/customers/getCustomersByWord?page=${page}`,form);
    
   }

   public getVehiclesWithOrdersByCustomer(id: number): Observable<VehiclesOrderByCustomer>{       
    return this.http.get<VehiclesOrderByCustomer>(`${ this.baseUrl }/api/customers/getVehiclesWithOrdersByCustomer/${ id }`);
   }

   public uploadImage(customer_id:any,path: any ): Observable<any>{
    let formData: FormData = new FormData();
    formData.append('customer_id', customer_id);
    formData.append('path', path);

    return this.http.post<any>(`${this.baseUrl}/api/customers/uploadImageCustomer`, formData);
  }
}

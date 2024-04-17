import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
 import { Observable } from 'rxjs';
import { IncomingPortfolioByBrandAndSalesForceInterface } from '../interfaces/incoming-portfolio-by-brand-and-sales-force.interface';

@Injectable({
  providedIn: 'root'
})
export class IncomingPortfolioByBrandAndSalesForceService {

  private baseUrl:string = environment.baseUrl;   

  constructor(private http: HttpClient) { }

  getAssignedCarteraBySourceAndDepartment():Observable<IncomingPortfolioByBrandAndSalesForceInterface>{
    return this.http.get<IncomingPortfolioByBrandAndSalesForceInterface>(`${this.baseUrl}/api/getAssignedCarteraBySourceAndDepartment`);
  }
}

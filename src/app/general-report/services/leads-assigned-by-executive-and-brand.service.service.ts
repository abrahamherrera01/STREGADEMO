import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { HttpClient } from '@angular/common/http';
import { LeadsAssignedByExecutiveAndBrand } from '../interfaces/leads-assigned-by-executive-and-brand.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadsAssignedByExecutiveAndBrandServiceService {
  private baseUrl:string = environment.baseUrl;   

  constructor(private http: HttpClient) { }

  getleadbyejecutive():Observable<LeadsAssignedByExecutiveAndBrand>{
    return this.http.get<LeadsAssignedByExecutiveAndBrand >(`${this.baseUrl}/api/getAssignedLeadsByExecutiveMetrics`);
  }
}

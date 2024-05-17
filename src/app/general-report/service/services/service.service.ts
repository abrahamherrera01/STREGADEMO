import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardVentas } from '../interfaces/dashboard-ventas.interface';
import { UntraceableTypeExecutive } from '../interfaces/untraceable-type-executive';
import { getQuarterlyComparisonInterface } from '../interfaces/get-quarterly-comparison.interface';
import { GetCustomerComplaintsByTypeAreaWorkshop } from '../interfaces/customer-complaints-by-type-area-workshop.interface';
 
import { GetguarantesInterface } from '../interfaces/getguarantes.interface';
 
import { GetCustomerComplaintsByTypeAreaAdviser } from '../interfaces/customer-complaints-type-area-adviser.interface';
import { GetguarantesInterface } from '../interfaces/getguarantes.interface';
import { GetComplaintsAdvisorPointContact } from '../interfaces/complaints-advisor-point-contact.interface';
 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url:string = environment.baseUrl;

  constructor(
    private _http: HttpClient
  ) { }

  getDashboardVentas():Observable<DashboardVentas>{
    return this._http.get<DashboardVentas>(`${this.url}/api/getCsiNpsSummaryAndIncidents`);
  }

  getUntraceableTypeExecutive():Observable<UntraceableTypeExecutive>{
    return this._http.get<UntraceableTypeExecutive>(`${this.url}/api/untraceableTypeExecutive`);
  }

  getQuarterlyComparison():Observable<getQuarterlyComparisonInterface>{
    return this._http.get<getQuarterlyComparisonInterface>(`${this.url}/api/quarterlyComparisons`);
  }
  getCustomerComplaintsByTypeAreaWorkshop():Observable<GetCustomerComplaintsByTypeAreaWorkshop>{
    return this._http.get<GetCustomerComplaintsByTypeAreaWorkshop>(`${this.url}/api/customerComplaintsByTypeAreaWorkshop`);
  }

  getNps():Observable<getQuarterlyComparisonInterface>{
    return this._http.get<getQuarterlyComparisonInterface>(`${this.url}/api/npsComparisons`);
  }
 
  
  getCustomerComplaintsByTypeAreaAdviser():Observable<GetCustomerComplaintsByTypeAreaAdviser>{
    return this._http.get<GetCustomerComplaintsByTypeAreaAdviser>(`${this.url}/api/customerComplaintsByTypeAreaAdviser`);
  }
 

  getguarantes():Observable<GetguarantesInterface>{
    return this._http.get<GetguarantesInterface>(`${this.url}/api/customerComplaintsByTypeAreaWarranty`);
  }
 


  getComplaintsAdvisorPointContact():Observable<GetComplaintsAdvisorPointContact>{
    return this._http.get<GetComplaintsAdvisorPointContact>(`${this.url}/api/complaintsAdvisorPointContact`);
  }
 
}

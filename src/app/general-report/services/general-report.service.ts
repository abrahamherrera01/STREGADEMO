import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreLeadsTemp } from '../interfaces/store-leads-temp.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetCalculatedMetrics } from '../interfaces/get-calculate-metrics.interface';
import { GetCalculateMetricsWallet } from '../interfaces/get-calculate-metrics-wallet';

@Injectable({
  providedIn: 'root'
})
export class GeneralReportService {
  private baseUrl:string = environment.baseUrl;   

  constructor(private http: HttpClient) { }

  uploadFile(file: File, type:string ):Observable<StoreLeadsTemp>{
    const formData = new FormData();
    formData.append('file', file);   
    let url = ''; 
    switch (type) {
      case 'leads':
          url = `${this.baseUrl}/api/storeLeadsTemp`;
        break;      
      case 'wallet':
          url = `${this.baseUrl}/api/storeCarteraTemp`;
        break;      
    }   
    return this.http.post<StoreLeadsTemp>(url, formData); 
  }

  getCalculatedMetrics():Observable<GetCalculatedMetrics>{
    return this.http.get<GetCalculatedMetrics>(`${this.baseUrl}/api/getLeadsIncidencesMetrics`);
  }
  getCalculatedMetricsWallet():Observable<GetCalculateMetricsWallet>{
    return this.http.get<GetCalculateMetricsWallet>(`${this.baseUrl}/api/getCarteraIncidencesMetrics`);
  }
}

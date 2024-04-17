import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreLeadsTemp } from '../../interfaces/store-leads-temp.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetCalculatedMetrics } from '../../interfaces/get-calculate-metrics.interface';
import { GetComplaintProcessByTypeAndExecutive } from '../../interfaces/get-compliant-type-executive.interface';
import { GetComplainsByDepartment } from '../../interfaces/get-complians-by-department.interface';
import { GetCarteraUntraceableByExecutive } from '../../interfaces/get-cartera-untraceable-executive.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneralReportService {
  private baseUrl:string = environment.baseUrl;   

  constructor(private http: HttpClient) { }

  uploadFile(file: File):Observable<StoreLeadsTemp>{
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<StoreLeadsTemp>(`${this.baseUrl}/api/storeLeadsTemp`, formData);
  }

  getCalculatedMetrics():Observable<GetCalculatedMetrics>{
    return this.http.get<GetCalculatedMetrics>(`${this.baseUrl}/api/getCalculatedMetrics`);
  }

  getComplainsByExecutive():Observable<GetComplaintProcessByTypeAndExecutive>{
    return this.http.get<GetComplaintProcessByTypeAndExecutive>(`${this.baseUrl}/api/getComplainsByExecutive`);
  }

  getComplainsByDepartment():Observable<GetComplainsByDepartment>{
    return this.http.get<GetComplainsByDepartment>(`${this.baseUrl}/api/getComplainsByDepartment`);
  }

  getCarteraUntraceableByExecutive():Observable<GetCarteraUntraceableByExecutive>{
    return this.http.get<GetCarteraUntraceableByExecutive>(`${this.baseUrl}/api/getCarteraUntraceableByExecutive`);
  }
}

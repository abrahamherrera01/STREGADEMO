import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreLeadsTemp } from '../../interfaces/store-leads-temp.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetCalculatedMetrics } from '../../interfaces/get-calculate-metrics.interface';
import { GetAssignedCarteraBySourceAndExecutive } from '../../interfaces/get-assigned-cartera-by-source-and-executive.interface';
import { GetIncommingCarteraSurveyedUntraceableByDepartment } from '../../interfaces/get-incomming-cartera-surveyedUntraceable-by-department.interface';
import { GetInconsistenciesByDepartment } from '../../interfaces/get-inconsistencies-by-department.interface';

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

  getAssignedCarteraBySourceAndExecutive():Observable<GetAssignedCarteraBySourceAndExecutive>{
    return this.http.get<GetAssignedCarteraBySourceAndExecutive>(`${this.baseUrl}/api/getAssignedCarteraBySourceAndExecutive`);
  }

  getIncommingCarteraSurveyedUntraceableByDepartment():Observable<GetIncommingCarteraSurveyedUntraceableByDepartment>{
    return this.http.get<GetIncommingCarteraSurveyedUntraceableByDepartment>(`${this.baseUrl}/api/getIncommingCarteraSurveyedUntraceableByDepartment`);
  }

  getInconsistenciesByDepartment():Observable<GetInconsistenciesByDepartment>{
    return this.http.get<GetInconsistenciesByDepartment>(`${this.baseUrl}/api/getInconsistenciesByDepartment`);
  }
}

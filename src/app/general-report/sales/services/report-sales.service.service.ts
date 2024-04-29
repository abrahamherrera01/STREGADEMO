import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetVentasIncidencesMetricsInterface } from '../interfaces/get-ventas-incidences-metrics.interface';
import { Observable } from 'rxjs';
import { GetComparativeNpsInterface } from '../interfaces/get-comparativeNps.interface';
import { GetUntraceablesByExecutives } from '../interfaces/get-untraceables-by-executives.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportSalesServiceService {
  private baseUrl:string = environment.baseUrl;   

  constructor(private http: HttpClient) { }


  getVentasIncidencesMetrics():Observable<GetVentasIncidencesMetricsInterface>{
    return this.http.get<GetVentasIncidencesMetricsInterface>(`${this.baseUrl}/api/getVentasIncidencesMetrics`);
  }

  getComparativeNps():Observable<GetComparativeNpsInterface>{
    return this.http.get<GetComparativeNpsInterface>(`${this.baseUrl}/api/getNPSbyCurrentQuarter`);
  }

  getUntraceablesByExecutives():Observable<GetUntraceablesByExecutives>{
    return this.http.get<GetUntraceablesByExecutives>(`${this.baseUrl}/api/getUntraceablesByExecutives`);
  }
}

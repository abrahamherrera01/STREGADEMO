import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetVentasIncidencesMetricsInterface } from '../interfaces/get-ventas-incidences-metrics.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportSalesServiceService {
  private baseUrl:string = environment.baseUrl;   

  constructor(private http: HttpClient) { }


  getVentasIncidencesMetrics():Observable<GetVentasIncidencesMetricsInterface>{
    return this.http.get<GetVentasIncidencesMetricsInterface>(`${this.baseUrl}/api/getVentasIncidencesMetrics`);
  }
}

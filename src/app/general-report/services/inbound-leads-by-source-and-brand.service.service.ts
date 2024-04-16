import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetSourceLeadMetricsInterface } from '../interfaces/get-source-lead-metrics.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class InboundLeadsBySourceAndBrandService {
  private baseUrl:string = environment.baseUrl;   

  constructor(private http: HttpClient) { }

  getleadsincoming():Observable<GetSourceLeadMetricsInterface>{
    return this.http.get<GetSourceLeadMetricsInterface>(`${this.baseUrl}/api/getSourceLeadMetrics`);
  }
}



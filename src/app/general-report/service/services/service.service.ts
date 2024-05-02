import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DashboardVentas } from '../interfaces/dashboard-ventas.interface';
import { UntraceableTypeExecutive } from '../interfaces/untraceable-type-executive';

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

}

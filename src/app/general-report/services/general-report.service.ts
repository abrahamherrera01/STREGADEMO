import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreLeadsTemp } from '../interfaces/store-leads-temp.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralReportService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File):Observable<StoreLeadsTemp>{
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<StoreLeadsTemp>('http://strega-backend.test/api/storeLeadsTemp', formData);
  }
}

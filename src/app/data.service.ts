
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('assets/communes-nc_v1.json');
  }
}

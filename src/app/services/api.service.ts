import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected API = environment.api;

  constructor(
    private http: HttpClient
  ) { }
  
  post(url: string, params: any): Promise<any> {
    return this.http.post(`${this.API}${url}`, params, { headers: { } }).toPromise();
  }

  get(url: string, params: string): Promise<any> {
    return this.http.get(`${this.API}${url}/${params}`, { headers: { } }).toPromise();
  }

  list(url: string): Promise<any> {
    return this.http.get(`${this.API}${url}`, { headers: { } }).toPromise();
  }

  put(url: string, params: any): Promise<any> {
    return this.http.put(`${this.API}${url}/${params.id}`, params, { headers: { } }).toPromise();
  }
  update(url: string, params: any): Promise<any> {
    return this.http.put(`${this.API}${url}`, params, { headers: { } }).toPromise();
  }

  delete(url: string): Promise<any> {
    return this.http.delete(`${this.API}${url}`, { headers: { } }).toPromise();
  }

}

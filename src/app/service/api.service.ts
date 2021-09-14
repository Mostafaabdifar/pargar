import { code, signUp, Sms, Token } from './../model/login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl:string = environment.baseUrl;
const storeId:number = environment.storeID;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http :HttpClient
  ) { }

  getVerification(data:signUp):Observable<Sms>{
  return this.http.post<Sms>(`${baseUrl}/mobile_login_step1/${storeId}`,data);
  }

  getCode(data:code):Observable<Token>{
    return this.http.post<Token>(`${baseUrl}/mobile_login_step2/${storeId}`,data);
  }
  
  getUserProfile():Observable<any>{
     return this.http.get(`${baseUrl}/profile`);
  }
}

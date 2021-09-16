import { code, signUp, Sms, Token } from './../model/login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import { MainObject, ParentCategory } from '../model/category.model';
import { Profile } from '../model/client.model';

const baseUrl:string = environment.baseUrl;
const storeId:number = environment.storeID;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private currentUserSubject: BehaviorSubject<Token>;
  // public currentUser: Observable<Token>;

  constructor(
    private http :HttpClient,
    private router:Router,
    private local:LocalStorageService
  ) { 
    // this.currentUserSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('Token') | undefined));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  getVerification(data:signUp):Observable<Sms>{
  return this.http.post<Sms>(`${baseUrl}/mobile_login_step1/${storeId}`,data);
  }

  getCode(data:code):Observable<Token>{
    return this.http.post<Token>(`${baseUrl}/mobile_login_step2/${storeId}`,data);
  }
  
  getUserProfile():Observable<Profile>{
     return this.http.get<Profile>(`${baseUrl}/profile`);
  }

  getHomeData():Observable<MainObject>{
    return this.http.get<MainObject>(`${baseUrl}/store/${storeId}`);
  }

  getCategoriesList():Observable<ParentCategory>{
    return this.http.get<ParentCategory>(`${baseUrl}/category/${storeId}/0`);
  }

  logout(){
    localStorage.removeItem('Token');
    this.router
  }

}

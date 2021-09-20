import { code, signUp, Sms, Token } from './../model/login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MainObject, ParentCategory, ProductItem } from '../model/category.model';
import { Profile } from '../model/client.model';

const baseUrl:string = environment.baseUrl;
const storeId:number = environment.storeID;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public logInUser = new BehaviorSubject<string>('');
  public existToken = new Subject

  constructor(
    private http :HttpClient,
  ) {}

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

  getCategoriesList():Observable<ParentCategory[]>{
    return this.http.get<ParentCategory[]>(`${baseUrl}/category/${storeId}/0`);
  }

  getFeature(product_id:number):Observable<ProductItem>{
    return this.http.get<ProductItem>(`${baseUrl}/product/${product_id}`)
  }

  logout(){
    localStorage.clear();
    localStorage.removeItem("Token");
    window.location.reload();  
    // this.logInUser.next('');
  }
  
  // uploadIcon(file:File):Observable<{
  //    this.http.post('https://api.vasapi.click/profile',file)
  // }
}

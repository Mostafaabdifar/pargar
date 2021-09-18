import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators'
import { LocalStorageService } from './local-storage.service';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private local:LocalStorageService,
    private loader:SpinnerService,
  ) { }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    const token = this.local.Token;
    if(token){
      req = req.clone({
        setHeaders:{
          Authorization:`Token ${token}`,
          'Accept-Language':'fa-IR',
        }
     });
    }
    this.loader.show()
    return next.handle(req).pipe(
      finalize(()=> this.loader.hide()),
      tap(
        event =>{
          return event
        },
        error =>{
          return error;
  
        }
      )
    )
  }
}


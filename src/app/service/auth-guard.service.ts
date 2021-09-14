import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private local:LocalStorageService,
    private router:Router
  ) { }

  canActivate():boolean{
    let canView:boolean = false;
    if(this.local.Token){
      canView = true;
    }else{
      this.router.navigate(['/'])
    }
    return canView;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Profile } from 'src/app/model/client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:Profile | undefined ;
  Tab:boolean = true;

  constructor(
    private api :ApiService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.api.getUserProfile().subscribe(
      data =>{
        this.user = data;
      }
    )
  }

  
  changeTab(){
    this.Tab = !this.Tab;
    return this.Tab;
  }
  logout(){
    this.api.logout();
  }
  edit(){
    this.router.navigate(['/profile/edit'])
  }
  
}

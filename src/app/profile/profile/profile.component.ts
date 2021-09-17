import { LocalStorageService } from '../../service/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Profile } from 'src/app/model/client.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:Profile | undefined 

  constructor(
    private local:LocalStorageService,
    private api :ApiService
  ) { }

  ngOnInit(): void {
    this.api.getUserProfile().subscribe(
      data =>{
        this.user = data;
      }
    )
  }

  logout(){
    this.local.setItem("token","");
  }

}

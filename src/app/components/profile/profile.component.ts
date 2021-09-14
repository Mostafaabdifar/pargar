import { LocalStorageService } from './../../service/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { Token } from '../../model/login.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input('user') user: Token |undefined;

  constructor(
    private local:LocalStorageService
  ) { }

  ngOnInit(): void {
    console.log('user',this.user)
  }

  logout(){
    this.local.setItem("token","");
    

  }

}

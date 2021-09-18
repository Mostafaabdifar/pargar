import { Profile } from './../../model/client.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  avatar:string | undefined;
  phoneNumber:string | undefined;
  info: FormGroup = new FormGroup({});
  data:Profile | undefined;
  name:string |undefined;


  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.api.getUserProfile().subscribe(
      response =>{
        this.data = response;
        this.avatar = response.avatar;
        this.phoneNumber = response.mobile;
        this.name = response.nickname;
      }
    )
  }

  initForm(): void {
    this.info = new FormGroup({
      name:new FormControl(this.name,Validators.required),
      phoneNumber:new FormControl(this.phoneNumber,Validators.required)
    })
  }

  save(){
    
  }
}

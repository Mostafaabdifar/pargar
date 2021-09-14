import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Token } from '../model/login.model';
import { LoaderState } from '../model/spinner.model';
import { ApiService } from '../service/api.service';
import { LocalStorageService } from '../service/local-storage.service';
import { SpinnerService } from '../service/spinner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tokenForm:FormGroup = new FormGroup({})
  step1:FormGroup = new FormGroup({});
  step2:FormGroup = new FormGroup({});
  current:number = 0;
  user: Token | undefined;

  constructor(
    private api: ApiService,
    private local:LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.tokenForm = new FormGroup({
      token:new FormControl('',Validators.required)
    });
    this.step1 = new FormGroup({
      mobile:new FormControl('', [
        Validators.required,
        Validators.maxLength(11),
        Validators.max(11)]),
      device_id:new FormControl('Desktop',Validators.required),
      device_model:new FormControl('Chrome',Validators.required),
      device_os:new FormControl('AngularJs',Validators.required)
    });

    this.step2 = new FormGroup({
      mobile:new FormControl('', [
        Validators.required,
        Validators.maxLength(11),
        Validators.max(11)]),
      device_id:new FormControl('Desktop',Validators.required),
      verification_code:new FormControl('',Validators.required),
      nickname:new FormControl('',)
    });

  }

  login(){
    this.current = 1;
  }
  teach(){
    this.current = 0;
    console.log(this.user)
  }

  saveToken(){
    this.local.setItem('auth',this.tokenForm.value.token);
  }

  getVerification(){
    this.api.getVerification(this.step1.value).subscribe(
      () =>{
        this.current = 2;
        this.step2.get('mobile')?.patchValue(this.step1.value.mobile);
      },
      error =>{
        this.current = 1; 
      }
    )
  }

  getToken(){
    this.api.getCode(this.step2.value).subscribe(
      data =>{ 
        this.current = -1; //login profile
        this.local.Token = data.token;
        this.getProfile();
        this.user = data;
      },
      error =>{
      }
    )
  }

  getProfile(){
    this.api.getUserProfile().subscribe(
      data =>{
        console.log(data);
      }
    )
  }
}


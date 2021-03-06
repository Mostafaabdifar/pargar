import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../service/local-storage.service';
import { HomeItem, ParentCategory } from 'src/app/model/category.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
// import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-header',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  avatar:string = "";
  existToken:boolean | undefined;
  tokenForm: FormGroup = new FormGroup({})
  step1: FormGroup = new FormGroup({});
  step2: FormGroup = new FormGroup({});
  current: number = 0;
  errorApi:string = "";
  isLogInUser: string | undefined;

  constructor(
    private api: ApiService,
    private local: LocalStorageService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  checkToken(){
    if(localStorage.getItem('token')){
      this.current = -1
      this.Profile()
    }else{
      this.current = 0;
    }
  }

  initForm(): void {
    this.tokenForm = new FormGroup({
      token: new FormControl('', Validators.required)
    });
    this.step1 = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.maxLength(11),
        Validators.max(11)
      ]),
      device_id: new FormControl('Desktop', Validators.required),
      device_model: new FormControl('Chrome', Validators.required),
      device_os: new FormControl('AngularJs', Validators.required)
    });

    this.step2 = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.maxLength(11),
        Validators.max(11)
      ]),
      device_id: new FormControl('Desktop', Validators.required),
      verification_code: new FormControl('', Validators.required),
      nickname: new FormControl('', )
    });
  }

  login() {
    this.current = 1;
  }

  logout(){
    this.api.logout();
  }

  teach() {
    this.current = 0;
  }

  getVerification() {
    this.api.getVerification(this.step1.value).subscribe(
      () => {
        this.current = 2;
        this.step2.get('mobile')?.patchValue(this.step1.value.mobile);
      },
      (error) => {
        if(error.status == 406){
          this.errorApi = "???????? ?????????? ???????????? ?????? ???? ???? ???????? ???????? ???????? ????????????.";
        }else if(error.status == 502 || error.status == 504){
          this.errorApi = "???????? ???????? ???????? ????????";
        }
        this.current = 1;
        this.openDialog();
      }
    )
  }

  getToken() {
    this.api.getCode(this.step2.value).subscribe(
      data => {
        this.current = -1; //login profile
        this.local.Token = data.token;
        this.isLogInUser = data.token;
        this.Profile();
      },
      (error) => {
        if(error.status == 401){
          this.errorApi = "???? ???????????? ??????";
        }
        this.openDialog();
      }
    )
  }

  Profile() {
    this.api.getUserProfile().subscribe(
      ()=>{
        this.api.logInUser.subscribe(
          data =>{
            this.isLogInUser =data;
          }
        )
      }
    )
  }
  getProfile(){
    this.router.navigate(['/profile'])
  }

  resendCode(){
    this.getVerification();
  }

  showOverlay() {
    this.current = 0;
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: { error:this.errorApi },
    });
  }
}
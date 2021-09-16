import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Token } from '../../model/login.model';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
import { HomeItem, ParentCategory } from 'src/app/model/category.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  avatar:string = "";
  tokenForm: FormGroup = new FormGroup({})
  step1: FormGroup = new FormGroup({});
  step2: FormGroup = new FormGroup({});
  current: number = 0;
  user: Token | undefined;
  homeItem:HomeItem[] = [];
  parentItem:ParentCategory[] = [];

  constructor(
    private api: ApiService,
    private local: LocalStorageService,
    private router: Router,
    public dialog: MatDialog
  ) {}



  ngOnInit(): void {
    this.initForm();
    this.api.getHomeData().subscribe(
      data =>{
        console.log("home data:",data)
        this.homeItem = data.homeitem;

      }
    )
    this.api.getCategoriesList().subscribe(
      response =>{
        console.log("response:",response);
        // this.parentItem = response;
      }
    )
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
    this.router.navigate(['/login'])
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
      error => {
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
        this.getProfile();
        this.user = data;
      },
      error => {}
    )
  }

  getProfile() {
    this.api.getUserProfile().subscribe(
      data => {
        console.log(data);
        this.avatar = data.avatar;
      }
    )
  }

  showOverlay() {
    this.current = 0;
  }

  resendCode(){
    this.getVerification();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }
}


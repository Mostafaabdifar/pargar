import { LoaderState } from './../model/spinner.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  subjectLoader: Subject<LoaderState> = new Subject();
  counter:number = 0;

  constructor() { }


  show(){
    this.counter = this.counter + 1;
    if(this.counter > 0 ){
      this.subjectLoader.next(<LoaderState>{loader:true})
    }
  }
  
  hide(){
    this.counter = Math.max(this.counter - 1,0)
    if(this.counter <= 0){
      this.subjectLoader.next(<LoaderState>{loader:false})
    }
  }
}

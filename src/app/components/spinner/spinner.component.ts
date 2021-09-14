import { Component, OnInit } from '@angular/core';
import { LoaderState } from 'src/app/model/spinner.model';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  loader :boolean = false;

  constructor(
    private loaderSpinner: SpinnerService
  ) { }

  ngOnInit(): void {
    this.loaderSpinner.subjectLoader.subscribe(
      (state :LoaderState) =>{
        this.loader = state.loader;
      }
    )
  }

}

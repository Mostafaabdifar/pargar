import { Component, OnInit } from '@angular/core';
import { LoaderState } from './model/spinner.model';
import { SpinnerService } from './service/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pargar';
}

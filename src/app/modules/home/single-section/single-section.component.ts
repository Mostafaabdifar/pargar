import { Product } from 'src/app/model/category.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-section',
  templateUrl: './single-section.component.html',
  styleUrls: ['./single-section.component.scss']
})
export class SingleSectionComponent implements OnInit {
  @Input("itemProduct") itemProduct:Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

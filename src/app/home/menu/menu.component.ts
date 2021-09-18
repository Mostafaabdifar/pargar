import { RootMenu } from '../../model/category.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('list') listData: RootMenu | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  
}

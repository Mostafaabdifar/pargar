import { Child } from './../../../model/category.model';
import { ParentCategory} from '../../../model/category.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categoryItem:ParentCategory | undefined;
  constructor(
    private api:ApiService,

  ) { }

  ngOnInit(): void {
    this.api.getCategoriesList().subscribe(
      data =>{
        this.categoryItem = data;
        console.log(this.categoryItem)
        console.log(this.categoryItem)
      }
    )
  }

  
}

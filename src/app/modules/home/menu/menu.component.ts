import { Child } from './../../../model/category.model';
import { ParentCategory} from '../../../model/category.model';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input("category") categoryItem:ParentCategory[] | undefined
  constructor(

  ) { }

  ngOnInit(): void {
    // this.api.getCategoriesList().subscribe(
    //   data =>{ 
    //     this.categoryItem = data;
    //     console.log(this.categoryItem)
    //     console.log(this.categoryItem)
    //   }
    // )
  }

  
}

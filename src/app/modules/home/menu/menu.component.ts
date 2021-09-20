import { ParentCategory} from '../../../model/category.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  category:ParentCategory[] =[];

  constructor(
    private api:ApiService
  ) { }

  ngOnInit(): void {
    this.api.getCategoriesList().subscribe(
      response =>{
        this.category = response;
      }
    )
  }
}

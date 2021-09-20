import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeItem, ParentCategory, ProductItem } from 'src/app/model/category.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  fix:boolean =false;
  home:HomeItem[] = [];
  parent:ParentCategory[] =[]
  header:ProductItem[] =[];
  itemProduct:[] =[]

  constructor(
    private api:ApiService

  ) {
    this.home.filter(data => data.products =this.itemProduct)
   }

  ngOnInit(): void {
    this.api.getHomeData().subscribe(
      data =>{
        this.parent = data.parent_categories;
        this.home = data.homeitem;
        this.header = data.headeritem;
        this.home.filter(el => el.products);
      }
    );

  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      if(window.scrollY >= 130){
        this.fix = true;
    } else {
        this.fix = false;
    }
    }
}

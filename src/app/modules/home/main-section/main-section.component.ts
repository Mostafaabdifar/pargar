import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeItem, ParentCategory, ProductItem } from 'src/app/model/category.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  home:HomeItem[] = [];
  parent:ParentCategory[] =[]
  header:ProductItem[] =[];


  constructor(
    private route:ActivatedRoute,
    private api:ApiService

  ) { }

  ngOnInit(): void {
  }
}
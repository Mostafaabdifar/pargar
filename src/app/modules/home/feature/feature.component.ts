import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from 'src/app/model/category.model';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input("itemProduct") itemProduct:Product[] = [];
  
  feature: OwlOptions = {
    loop: false,
    margin: 20,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText:  ["<div class='nav-button owl-prev'><i class=\"fa fa-angle-left\"></i></div>", "<div class='nav-button owl-next'><i class=\"fa fa-angle-right\"></i></div>"],
      responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      900: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
    nav: true,  
  }
   
    slides = [
      {id: "1", img: "../../../assets/img/asdasd.jpg"},
      {id: "2", img: "../../../assets/img/3.jpg"},
      {id: "3", img: "../../../assets/img/2.jpg"},
      {id: "4", img: "../../../assets/img/1.jpg"},
      {id: "5", img: "../../../assets/img/1.jpg"},
    ];

  constructor() { }

  ngOnInit(): void {
  }

}

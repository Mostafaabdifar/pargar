import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeItem, Product } from 'src/app/model/category.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input("homeList") home:HomeItem[] = [];

  product: OwlOptions = {
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
        items: 4
      },
      1200: {
        items: 4
      }
    },
    nav: true,  
  }
   
  constructor( ) {
  }

  ngOnInit(): void {
    
  }

}

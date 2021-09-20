import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductItem } from 'src/app/model/category.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  {

  @Input("headerList") header:ProductItem[] =[];

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    stagePadding:50,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1800: {
        items: 4
      }
    },
    nav: true
  }
}

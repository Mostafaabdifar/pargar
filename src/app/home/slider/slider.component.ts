import { Component } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent  {

  customOptions: OwlOptions = {
    loop: false,
    margin: 10,
    stagePadding:50,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
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
   
    slides = [
      {id: "1", img: "../../../assets/img/dasdada.jpg"},
      {id: "2", img: "https://dummyimage.com/350x150/2a2b7a/fff"},
      {id: "3", img: "https://dummyimage.com/350x150/1a2b7a/fff"},
      {id: "4", img: "https://dummyimage.com/350x150/7a2b7a/fff"},
    ];
}

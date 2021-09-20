import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProductComponent } from './product/product.component';
import { SingleSectionComponent } from './single-section/single-section.component';
import { FeatureComponent } from './feature/feature.component';


@NgModule({
  declarations: [
    MainSectionComponent,
    SliderComponent,
    MenuComponent,
    ProductComponent,
    SingleSectionComponent,
    FeatureComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    HomeRoutingModule, 
  ],
})
export class HomeModule { }

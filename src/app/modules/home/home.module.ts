import { AppRoutingModule } from './../../app-routing.module';
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


@NgModule({
  declarations: [
    MainSectionComponent,
    SliderComponent,
    MenuComponent,
    ProductComponent,
    SingleSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule
  ],
})
export class HomeModule { }

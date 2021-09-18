import { SliderComponent } from './home/slider/slider.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path:"",
    component:SliderComponent
  },
  {
    path:"profile",
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule),
  },
  {
    path:"**",
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { MainSectionComponent } from './modules/home/main-section/main-section.component';
  

const routes: Routes = [
  {
    path:"",
    // loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
    component:MainSectionComponent
  },
  {
    path:"profile",
    loadChildren: () => import('./modules/profile/profile.module').then(mod => mod.ProfileModule),
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

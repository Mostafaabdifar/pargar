import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { MainComponent } from './layout/MainHeader/main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './service/auth-guard.service';
import { ResolverService } from './service/resolver.service';

const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },
  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[AuthGuardService],
    resolve:[ResolverService]
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

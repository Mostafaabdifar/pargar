import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../service/auth-guard.service';
import { ResolverService } from '../../service/resolver.service';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {
    path: '',
    component:ProfileComponent,
    canActivate:[AuthGuardService],
    resolve:[ResolverService]
  },
  {
    path: 'edit',
    component:EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
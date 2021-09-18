import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { ProfileRoutingModule} from './profile.routing.module'


@NgModule({
  declarations: [
    ProfileComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTabsModule,
    RouterModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }

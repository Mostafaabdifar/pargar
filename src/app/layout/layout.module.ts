import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from './MainFooter/main-footer.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MainComponent } from './MainHeader/main.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    MainFooterComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  
  exports: [
    MainComponent,
    MainFooterComponent
  ]
})
export class LayoutModule { }
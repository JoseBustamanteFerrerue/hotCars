import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenderFormComponent } from './vender-form/vender-form.component';
import { VenderPageComponent } from './vender-page/vender-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VenderFormComponent,
    VenderPageComponent
  ],
  exports: [
    VenderPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VenderModule { }

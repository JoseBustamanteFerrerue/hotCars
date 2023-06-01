import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenderFormComponent } from './vender-form/vender-form.component';
import { VenderPageComponent } from './vender-page/vender-page.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

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
    FormsModule,
    NgbProgressbarModule,
    ReactiveFormsModule
  ]
})
export class VenderModule { }

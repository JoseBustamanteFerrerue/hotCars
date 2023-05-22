import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';
import { ContactoFormComponent } from './contacto-form/contacto-form.component';



@NgModule({
  declarations: [
    ContactoPageComponent,
    ContactoFormComponent,
  ],
  exports: [
    ContactoPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContactoModule { }

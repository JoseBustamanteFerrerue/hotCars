import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { ContactoPageComponent } from './contacto-page/contacto-page.component';
import { ContactoFormComponent } from './contacto-form/contacto-form.component';
import { LoginRegisterModule } from '../login-register/login-register.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './contacto-form//filter.pipe';



@NgModule({
  declarations: [
    ContactoPageComponent,
    ContactoFormComponent,
    FilterPipe
  ],
  exports: [
    ContactoPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginRegisterModule,
    NgxPaginationModule
  ]
})
export class ContactoModule { }

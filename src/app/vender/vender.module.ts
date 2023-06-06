import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenderFormComponent } from './vender-form/vender-form.component';
import { VenderPageComponent } from './vender-page/vender-page.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from './vender-form/filter.pipe';

@NgModule({
  declarations: [
    VenderFormComponent,
    VenderPageComponent,
    FilterPipe
  ],
  exports: [
    VenderPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbProgressbarModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    FontAwesomeModule
  ]
})
export class VenderModule { }

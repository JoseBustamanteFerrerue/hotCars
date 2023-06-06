import { Component, OnInit } from '@angular/core';
import { VerYComprarService } from '../ver-y-comprar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-editar-coche',
  templateUrl: './editar-coche.component.html',
  styleUrls: ['./editar-coche.component.css']
})
export class EditarCocheComponent implements OnInit{
  car: any;
  data: any;
  selectedFile: File | null = null;

  constructor (private verYcomprar: VerYComprarService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.verYcomprar.getCarPorId(id)
        .subscribe(resp => {
          this.car = resp;
          this.data = {
            item: this.car[0],
          }
        });
    });


  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit(item: any) {
    if (this.selectedFile) {
      this.verYcomprar.subirFotoCoche(this.selectedFile, item)
    }
    this.verYcomprar.editarCoche(item)

  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldValue = this.car[fieldName];
    return fieldValue === null || fieldValue === undefined || fieldValue === '';
  }

  isFormInvalid(): boolean {
    return Object.keys(this.car).some(fieldName => this.isFieldInvalid(fieldName));
  }

}

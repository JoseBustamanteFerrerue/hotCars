import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoServiceService } from '../contacto-service.service';

@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private contactoService: ContactoServiceService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      fecha_nacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);
    this.contactoService.registro(this.userForm.value)
  }

  get name() { return this.userForm.get('name'); }
  get primerApellido() { return this.userForm.get('primerApellido'); }
  // get segundoApellido() { return this.userForm.get('segundoApellido'); }
  get fecha_nacimiento() { return this.userForm.get('fecha_nacimiento'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
}


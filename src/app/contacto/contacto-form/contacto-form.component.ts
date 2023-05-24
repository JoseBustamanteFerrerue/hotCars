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
  usuario: any;

  constructor(private formBuilder: FormBuilder, private contactoService: ContactoServiceService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      message: ['', [Validators.required, Validators.minLength(5)]],
      terms: [false, Validators.requiredTrue]
    });

    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      this.usuario = JSON.parse(usuario);
      console.log('Usuario autenticado:', this.usuario);
    } else {
      // El usuario no ha iniciado sesión
      console.log('Usuario no autenticado');
    }
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);
    this.contactoService.consulta(this.userForm.value)
  }

  get message() { return this.userForm.get('message'); }
  get terms() { return this.userForm.get('terms'); }
}


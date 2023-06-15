import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginRegisterServiceService } from '../login-register-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  userForm!: FormGroup;
  mensajeError: string = '';

  constructor(private formBuilder: FormBuilder, private loginService: LoginRegisterServiceService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, this.sinSignosValidator, Validators.minLength(4)]],
      primerApellido: ['', [Validators.required, this.sinSignosValidator, Validators.minLength(4)]],
      segundoApellido: ['', [this.sinSignosValidator, Validators.minLength(4)]],
      fecha_nacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, this.phoneLengthValidator]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator]]
    });

    this.loginService.mensajeError$.subscribe((mensajeError) => {
      this.mensajeError = mensajeError;
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);
    this.loginService.comprobarEmail(this.userForm.value)
  }
  
  phoneLengthValidator(control: AbstractControl): ValidationErrors | null {
    const phone = control.value as number;
    const minLength = 9;
    const maxLength = 9;
  
    if (phone.toString().length < minLength || phone.toString().length > maxLength) {
      return { phoneLength: true };
    }
  
    return null;
  }

  sinSignosValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const sinSignos = /^[a-zA-Z0-9\s]*$/;
  
    if (value && !sinSignos.test(value)) {
      return { sinSignos: true };
    }
  
    return null;
  }
  
  passwordValidator(control: FormControl) {
    const value = control.value;

    // Aquí puedes definir tu propia lógica de validación de contraseña
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (value && !pattern.test(value)) {
      return { invalidPassword: true };
    }

    return null;
  }

  get name() { return this.userForm.get('name'); }
  get primerApellido() { return this.userForm.get('primerApellido'); }
  get segundoApellido() { return this.userForm.get('segundoApellido'); }
  get fecha_nacimiento() { return this.userForm.get('fecha_nacimiento'); }
  get email() { return this.userForm.get('email'); }
  get telefono() { return this.userForm.get('telefono'); }
  get password() { return this.userForm.get('password'); }
}

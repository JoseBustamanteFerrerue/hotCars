import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRegisterServiceService } from '../login-register-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userForm!: FormGroup;
  registrarse: boolean = false;
  constructor(private formBuilder: FormBuilder, private loginService: LoginRegisterServiceService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.passwordValidator]]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.loginService.inicioSesion(this.userForm.value)
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
  
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
}

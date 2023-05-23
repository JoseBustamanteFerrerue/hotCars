import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.loginService.inicioSesion(this.userForm.value)
  }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }
}

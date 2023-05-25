import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterServiceService {
  mensajeErrorSubject: Subject<string> = new Subject<string>();
  mensajeError$ = this.mensajeErrorSubject.asObservable();

  constructor(private http: HttpClient) {}


  comprobarEmail (data: any)  {
    const jsonData = JSON.stringify(data);
    this.http.post<any>('http://localhost/rest/post.php/comprobarEmail', jsonData).subscribe(
      response => {
        if (response[0].count == 0) {
          this.registro(data);
        } else {
          this.mensajeErrorSubject.next('El email ya existe');     
        }       
      },
      error => {
        console.log('Mal')
      })

  }

  // Registrarse un usuario nuevo
  registro(data: any) {
    const jsonData = JSON.stringify(data);
    console.log(jsonData)
    this.http.post<any>('http://localhost/rest/post.php/registro', jsonData).subscribe(
      response => {
        // Se redirige a contacto
        window.location.href = 'contacto';
      },
      error => {
        // Maneja los errores en caso de falla
        console.error(error);
      })
  }

  // Registrarse un usuario nuevo
  inicioSesion(data: any) {
    const jsonData = JSON.stringify(data);
    this.http.post<any>('http://localhost/rest/post.php/login', jsonData).subscribe(
      response => {
        const usuario = {
          id: response[0].id,
          email: data.email,
          rol: response[0].rol
        }

        // Almacenar el estado de inicio de sesión en localStorage
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = '';
      },
      error => {
        // Maneja los errores en caso de falla
        console.error('Los datos no son correctos');
      })
  }
}

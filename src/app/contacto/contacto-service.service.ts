import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {

  constructor(private http: HttpClient) {}


  // Registrarse un usuario nuevo
  registro(data: any) {
    const jsonData = JSON.stringify(data);
    console.log(jsonData)
    this.http.post<any>('http://localhost/rest/post.php/registro', jsonData).subscribe(
      response => {
        // Maneja la respuesta de la API en caso de éxito
        console.log(response);
      },
      error => {
        // Maneja los errores en caso de falla
        console.error(error);
      })
  }
}

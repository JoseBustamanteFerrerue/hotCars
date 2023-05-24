import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {

  constructor(private http: HttpClient) {}


  // Registrarse un usuario nuevo
  consulta(data: any) {
    const usuario = JSON.parse(localStorage.getItem('usuario')!);
    data.idUser = usuario!.id
    const jsonData = JSON.stringify(data);
    console.log(jsonData)
    this.http.post<any>('http://localhost/rest/post.php/consulta', jsonData).subscribe(
      response => {
        // Maneja la respuesta de la API en caso de éxito
        console.log(response);
        window.alert('Tu consulta ha sido exitosa, muchas gracias. ' + 
        'Cuanto antes se pondrá un técnico en contacto con usted.')
        window.location.href = ''
      },
      error => {
        // Maneja los errores en caso de falla
        console.error(error);
      })
  }
}

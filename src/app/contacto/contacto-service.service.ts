import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {
  textoDinamico: string = '';
  resp: any;
  constructor(private http: HttpClient) {
    this.getConsultas()
  }


  // Registrarse un usuario nuevo
  consulta(data: any) {
    const usuario = JSON.parse(localStorage.getItem('usuario')!);
    data.idUser = usuario!.id
    const jsonData = JSON.stringify(data);
    console.log(jsonData)
    this.http.post<any>('http://localhost/rest/post.php/consulta', jsonData).subscribe(
      response => {
        Swal.fire({
          title: '¡La consulta ha sido un exito!',
          text: 'Su consulta ha sido exitosa, muchas gracias.' +
          ' En cuanto sea posible un técnico se pondrá en contacto con usted.',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
          allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = ''
          }
        });
        
        
      },
      error => {
        Swal.fire({
          title: 'Algo malo ha ocurrido',
          text: 'En su consulta ha habido un error, por favor inténtelo más tarde.',
          icon: 'error',
          showConfirmButton: true,
          allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
          allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = ''
          }
        });
      })
  }

  getConsultas():any {
    this.http.get<any>('http://localhost/rest/post.php?consultas')
      .subscribe( (resp) => {
        this.resp = resp
      })
  }
}

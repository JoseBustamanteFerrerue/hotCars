import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
interface CocheTasado {
  name: string;
  primer_apellido: string;
  fecha_nacimiento: Date;
  email: string;
  nameMark: string;
  nameModel: string;
  nameVersion: string;
  cv: number;
  valor: number;
  provincia: string;
}
@Injectable({
  providedIn: 'root'
})
export class VenderServiceService {
  desplegableProvincias:any
  desplegableModelo: any
  desplegableMarca: any
  desplegableVersionCoche: any
  marcaIdPropiedad: any
  provinciaIdPropiedad: any
  cochesTasados: any

  constructor(private http: HttpClient) { 
    this.getDesplegableProvincias()
    this.desplegableMarcas()
    this.getCocheTasado()
  }

  getDesplegableProvincias () {
      this.http.get<any>('http://localhost/rest/post.php?desplegableProvincia')
        .subscribe( (resp) => {
          this.desplegableProvincias = resp
        })
    }

  desplegableModelos (item:any) {
    this.http.get<any>('http://localhost/rest/post.php?desplegableModelo&&nameMark='+ item)
      .subscribe( (resp) => {
        // Para que no se dupliquen
        let array:any = []
        for (const item of resp) {
          if (!array.includes(item.nameModel)) {
            array.push(item.nameModel)
          } 
        }
        this.desplegableModelo = array
      })
  }

  desplegableMarcas () {
    this.http.get<any>('http://localhost/rest/post.php?desplegableMarcas')
      .subscribe( (resp) => {
        // Para que no se dupliquen
        let array:any = []
        for (const item of resp) {
          if (!array.includes(item.nameMark)) {
            array.push(item.nameMark)
          } 
        }
        this.desplegableMarca = array
      })
  }

  desplegableVersion (nameMark: any, nameModel:any) {
    this.http.get<any>('http://localhost/rest/post.php?desplegableVersion&&nameMark=' + nameMark + '&&nameModel=' + nameModel)
      .subscribe( (resp) => {
        this.desplegableVersionCoche = resp
        console.log(this.desplegableVersionCoche)
      })
  }

  
  marcaId(nameMark: any, nameModel: any, nameVersion: any): Observable<any> {
    return this.http.get<any>('http://localhost/rest/post.php?marcaId&&nameMark=' + nameMark + '&&nameModel=' 
      + nameModel + '&&nameVersion=' + nameVersion)
  }
  

  provinciaId (provincia: any): Observable<any> {
    return this.http.get<any>('http://localhost/rest/post.php?provinciaId&&provincia=' + provincia )
  }

  guadarCocheTasado (cocheTasado: any) {
    const cocheTasadoJson = JSON.stringify(cocheTasado)
    console.log(cocheTasadoJson)
    this.http.post<any>('http://localhost/rest/post.php/tasar', cocheTasadoJson).subscribe(
      response => {

      })
  }

  tasarCoche (cocheTasado: any, marcaId: any): any {
    const anyos = 2023 - cocheTasado.anyo;
    const km = cocheTasado.km;
    const estadoCoche = cocheTasado.estadoCoche
    let restarValorAnyos = anyos * 250;
    let restarValorKm;
    let restarValorEstado = 0;
    
    switch (true) {
      case km > 150000:
        restarValorKm = 1000;
        break;
      case km > 100000:
        restarValorKm = 700;
        break;
      case km > 80000:
        restarValorKm = 600;
        break;
      case km > 40000:
        restarValorKm = 400;
        break;
      case km > 20000:
        restarValorKm = 300;
        break;
      case km > 5000:
        restarValorKm = 250;
        break;
      default:
        restarValorKm = 100;
        break;
    }

    switch (estadoCoche) {
      case 'Bien':
        restarValorEstado = 400;
        break;
      case 'Regular':
        restarValorEstado = 600;
        break;
      case 'Con desperfectos':
        restarValorEstado = 1000;
        break;
      case 'Mal':
        restarValorEstado = 1500;
        break;
    }

    return marcaId[0].valor - restarValorAnyos - restarValorEstado - restarValorKm
  }

  getCocheTasado () {
    this.http.get<any>('http://localhost/rest/post.php?coche_tasado')
    .subscribe( (resp) => {
      this.cochesTasados = resp
    })
  }

  deleteCoche (item: any) {
    
    this.http.delete<any>('http://localhost/rest/post.php?coche_tasado&&idTasado=' + item.id).subscribe(
      response => {
        this.getCocheTasado()
        Swal.fire({
          title: 'Borrado exitoso',
          text: 'El coche tasado se ha borrado exitosamente.',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
          allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
        }).then((result) => {
          if (result.isConfirmed) {
            
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
            console.log(error)
          }
          return 0
        });
      })
  }
}

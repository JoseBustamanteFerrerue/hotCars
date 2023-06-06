import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class VerYComprarService {

  public resp: any[] = []
  public desplegableMarca: any[] = []
  public desplegableModelo: any[] = []
  public desplegableCombustible: any[] = []
  public desplegableCarroceria: any[] = []
  public carPorId: any[] = []

  constructor (private http: HttpClient) {
    this.api(); 
    this.desplegableMarcas();
    this.desplegableCombustibles();
    this.desplegableCarrocerias();   
  }

  ngOnInit(): void {
    
  }
  api():any {
    this.http.get<any>('http://localhost/rest/post.php')
      .subscribe( (resp) => {
        this.resp = resp
        this.resp = this.resp.map( function (item: any) {
          if (item.rutas != null) {
            const rutas = item.rutas.split('|')
            item.rutas = rutas
          }
          
          return item
        })
        this.conseguirFavoritos();
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

  desplegableModelos (item:any) {
    this.http.get<any>('http://localhost/rest/post.php?desplegableModelo&&nameMark='+ item)
      .subscribe( (resp) => {
        console.log(resp)
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

  conseguirFavoritos () {
    const usuarioString = localStorage.getItem('usuario');
    let usuario: any;
    if (usuarioString) {
      usuario = JSON.parse(usuarioString);
    } else {
      return
    }
    this.http.get<any>('http://localhost/rest/post.php?favoritos=' + usuario.id)
    .subscribe( (response) => {
      this.resp = this.resp.map(function (item) {
        item.idCar = response
        return item
      })

      this.resp = this.resp.map(function (item) {
        for (const ite of item.idCar) {
          
          if (ite.idCar === item.id) {
            item.esFavorito = true;
          }
        }
        return item
      })
      console.log(this.resp)
    })
  }

  desplegableCombustibles () {
    this.http.get<any>('http://localhost/rest/post.php?combustibles')
      .subscribe( (resp) => {
        // Para que no se dupliquen
        let array:any = []
        for (const item of resp) {
          if (!array.includes(item.combustible)) {
            array.push(item.combustible)
          } 
        }
        this.desplegableCombustible = array
      })
  }

  desplegableCarrocerias () {
    this.http.get<any>('http://localhost/rest/post.php?desplegableCarroceria')
      .subscribe( (resp) => {
        // Para que no se dupliquen
        let array:any = []
        for (const item of resp) {
          if (!array.includes(item.carroceria)) {
            array.push(item.carroceria)
          } 
        }
        this.desplegableCarroceria = array
      })
  }

  getCarPorId(item: any): Observable<any> {
    return this.http.get<any>('http://localhost/rest/post.php?carPorId=' + item);
  }


  filtrar (item:any) {
    let consulta = ''
    if (item.carName != '' && item.carName != 'Seleccione una Marca') {
      consulta += 'carName='+ item.carName + '&&'
    }

    if (item.nameModel != '' && item.nameModel != 'Seleccione un modelo') {
      consulta += 'nameModel='+ item.nameModel + '&&'
    }

    if (item.price != 0) {
      consulta += 'price='+ item.price + '&&'
    }

    if (item.km != 0) {
      consulta += 'km='+ item.km + '&&'
    }

    if (item.combustible != '' && item.combustible != 'Seleccione un combustible') {
      consulta += 'combustible='+ item.combustible + '&&'
    }

    if (item.cajaDeCambios != '') {
      consulta += 'caja='+ item.cajaDeCambios + '&&'
    }
    
    if (item.carroceria != '' && item.carroceria != 'Seleccione una carroceria') {
      consulta += 'carroceria='+ item.carroceria + '&&'
    }
    

    console.log(consulta)
    this.http.get<any>('http://localhost/rest/post.php?' + consulta)
      .subscribe( (resp) => {
          this.resp = resp
          this.resp = this.resp.map( function (item: any) {
            if (item.rutas != null) {
              const rutas = item.rutas.split('|')
              item.rutas = rutas
            }
            
            return item
          })
          this.conseguirFavoritos();
      })
      

    consulta = ''
  }

  anyadirFavorito (item: any) {
    const usuarioString = localStorage.getItem('usuario');
    let usuario: any;
    if (usuarioString) {
      usuario = JSON.parse(usuarioString);
    } else {
      Swal.fire({
        title: '¡Inicie sesión!',
        text: '¡Por favor, inicie sesión para poder añadir favoritos!',
        icon: 'error',
        showConfirmButton: true,
        allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
        allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'contacto'
          return
        }
      });
    }

    const paramsObject = {
      idUser: usuario.id,
      idCar:  item.id
    }

    const params = JSON.stringify(paramsObject);

    this.http.post<any>('http://localhost/rest/post.php/anyadirFavorito', params).subscribe(
      response => {
        this.api()
        return 1     
        
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

  deleteFavorito (item: any) {
    const usuarioString = localStorage.getItem('usuario');
    let usuario: any;
    if (usuarioString) {
      usuario = JSON.parse(usuarioString);
    }
    console.log(usuario.id + ' ' + item.id)
    
    this.http.delete<any>('http://localhost/rest/post.php?favorito&&idUser=' + usuario.id + '&&idCar=' + item.id).subscribe(
      response => {
        this.api()
        return 1     
        
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

  reservar (item:any) {
    const usuarioString = localStorage.getItem('usuario');
    let usuario: any;
    if (usuarioString) {
      usuario = JSON.parse(usuarioString);
    } else {
      Swal.fire({
        title: '¡Inicie sesión!',
        text: '¡Por favor, inicie sesión para poder reservar el vehículo!',
        icon: 'error',
        showConfirmButton: true,
        allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
        allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'contacto'
          return
        }
      });
    }

    const paramsObject = {
      idUser: usuario.id,
      idCar:  item.id
    }

    const params = JSON.stringify(paramsObject);

    this.http.post<any>('http://localhost/rest/post.php/reservar', params).subscribe(
      response => {
        this.api() 
        Swal.fire({
          title: '¡Su reserva ha sido exitosa!',
          text: 'El vehículo se ha reservado correctamente, un comercial se pondrá pronto en contacto con usted.',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
          allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'ver'
          }
          return 0
        });   
      },
      error => {
        Swal.fire({
          title: 'Algo malo ha ocurrido',
          text: 'En su reserva ha habido un error, por favor inténtelo más tarde.',
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

  deleteCoche (item: any) {
    
    this.http.delete<any>('http://localhost/rest/post.php?coche&&idCar=' + item.id).subscribe(
      response => {
        this.api()
        Swal.fire({
          title: 'Borrado exitoso',
          text: 'El coche se ha borrado exitosamente.',
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

  editarCoche (item:any) {
    const paramsObject = {
      idCar: item.id,
      anyo: item.anyo,
      km: item.km,
      stateCar: item.stateCar,
      price: item.price,
      combustible: item.combustible,
      caja_de_cambios: item.caja_de_cambios,
      distintivo_ambiental: item.distintivo_ambiental,
      peso: item.peso,
      deposito: item.deposito,
      maletero: item.maletero,
      medida_ancho: item.medida_ancho,
      medida_altura: item.medida_altura,
      medida_largo: item.medida_largo,
      carroceria: item.carroceria,
      num_plazas: item.num_plazas,
      bastidor: item.bastidor,
      matricula: item.matricula,
      estadoReserva: item.estadoReserva,
      extras: item.extras
    }

    const params = JSON.stringify(paramsObject);
    console.log(params)
    this.http.post<any>('http://localhost/rest/post.php/editarCoche', params).subscribe(
      response => {
        this.api() 
        Swal.fire({
          title: '¡Ha editado el vehículo con exito!',
          text: 'El vehículo se ha editado correctamente.',
          icon: 'success',
          showConfirmButton: true,
          allowOutsideClick: false, // Evita que el usuario cierre el modal haciendo clic fuera de él
          allowEscapeKey: false // Evita que el usuario cierre el modal presionando la tecla Escape
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'ver'
          }
          return 0
        });   
      },
      error => {
        Swal.fire({
          title: 'Algo malo ha ocurrido',
          text: 'Al editar ha habido un error, por favor inténtelo más tarde o consulte con el departamento IT.',
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

  subirFotoCoche (selectedFile: File, item: any) {
    const formData = new FormData();
      formData.append('imagen', selectedFile, selectedFile.name);
      formData.append('idCar', item.id);
      // Realizar la solicitud HTTP al servidor
      this.http.post('http://localhost/rest/post.php/subirFoto', formData).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        }
      );
  }
}

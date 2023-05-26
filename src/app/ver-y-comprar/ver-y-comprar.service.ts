import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    this.http.get<any>('http://localhost/rest/post.php?favoritos=1')
    .subscribe( (response) => {
      // console.log(response)
      this.resp = this.resp.map(function (item) {
        item.idCar = response
        item.isStarred = false
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
        console.log(array)
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
        console.log(array)
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
      })

    consulta = ''
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerYComprarService {

  public resp: any[] = []
  public desplegableMarca: any[] = []
  public desplegableModelo: any[] = []

  constructor (private http: HttpClient) {
    this.api(); 
    this.desplegableMarcas();
  }

  ngOnInit(): void {
    
  }
  api() {
    this.http.get<any>('http://localhost/rest/post.php')
      .subscribe( (resp) => {
        this.resp = resp
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
    console.log(item)
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

  filtrar (item:any) {
    let consulta = ''
    if (item.carName != '' && item.carName != 'Seleccione una Marca') {
      consulta += 'carName='+ item.carName + '&&'
    }

    if (item.nameModel != '' && item.nameModel != 'Seleccione un modelo') {
      console.log('es aqui ' + item.nameModel)
      consulta += 'nameModel='+ item.nameModel + '&&'
    }

    this.http.get<any>('http://localhost/rest/post.php?' + consulta)
      .subscribe( (resp) => {
        this.resp = resp
    })

    consulta = ''
  }
}

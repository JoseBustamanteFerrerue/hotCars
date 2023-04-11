import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
// import { FormControl } from '@angular/forms';
import { VerYComprarService } from '../ver-y-comprar.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent {
  seleccionado:string = '';
  hayMarca:boolean = true;

  filtrar = {
    carName: 'Seleccione una Marca',
    nameModel: 'Seleccione un modelo'
  }

  get desplegableMarca () {
    return this.verYcomprar.desplegableMarca
  }

  get desplegableModelo () {
    return this.verYcomprar.desplegableModelo
  }

  get resultados () {
    return this.verYcomprar.resp
  }

  constructor (private http: HttpClient, private verYcomprar: VerYComprarService) {}

  cambio () {
    this.hayMarca = false;
    this.filtrar.nameModel = 'Seleccione un modelo'
    this.verYcomprar.desplegableModelos(this.filtrar.carName)
  }
 
  buscarFiltrando () {
    this.verYcomprar.filtrar(this.filtrar)
  }

  clean () {

  }
}

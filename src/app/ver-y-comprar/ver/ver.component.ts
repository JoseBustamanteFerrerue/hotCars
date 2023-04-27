import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
//import { Ng5SliderModule } from 'ng5-slider';
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
  maxValue: number = 0;
  value: number = 0;
  valueKm: number = 0;

  filtrar = {
    carName: 'Seleccione una Marca',
    nameModel: 'Seleccione un modelo',
    price: this.value,
    km: this.valueKm,
    combustible: 'Seleccione un combustible',
    // cajaDeCambios: ''
  }
  
  options: any = {
    floor: 0,
    ceil: 100000,
    step: 1000,
    translate: (value: number, label: string) => {
      return this.formatCurrency(value, 'EUR');
    }
  };

  optionsKm: any = {
    floor: 0,
    ceil: 300000,
    step: 1000,
    translate: (valueKm: number, label: string) => {
      return valueKm;
    }
  };

  formatCurrency(value: number, currency: string) {
    const formatter = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency
    });
    return formatter.format(value);
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

  get desplegableCombustible () {
    return this.verYcomprar.desplegableCombustible
  }

  constructor (private http: HttpClient, private verYcomprar: VerYComprarService) {}

  cajaDeCambios (caja: string) {
    if (caja === 'manual') { 
      console.log(caja)
      // this.filtrar.cajaDeCambios = 'manual'
    } else {
      // this.filtrar.cajaDeCambios = 'automatico'
    }
  }

  cambio () {
    this.hayMarca = false;
    this.filtrar.nameModel = 'Seleccione un modelo'
    this.verYcomprar.desplegableModelos(this.filtrar.carName)
  }
 
  buscarFiltrando () {
    this.filtrar.price = this.value
    this.filtrar.km = this.valueKm
    this.verYcomprar.filtrar(this.filtrar)
  }

  // Limpiar filtros
  clean () {
    this.seleccionado = '';
    this.hayMarca = true;
    this.maxValue= 0;
    this.value = 0;
    this.valueKm = 0;
  
    this.filtrar = {
      carName: 'Seleccione una Marca',
      nameModel: 'Seleccione un modelo',
      price: this.value,
      km: this.valueKm,
      combustible: 'Seleccione un combustible',
      // cajaDeCambios: ''
    }
    console.log(this.filtrar.combustible)
    this.buscarFiltrando()
  }
}

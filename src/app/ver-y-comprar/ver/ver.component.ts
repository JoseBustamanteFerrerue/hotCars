import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
//import { Ng5SliderModule } from 'ng5-slider';
// import { FormControl } from '@angular/forms';
import { VerYComprarService } from '../ver-y-comprar.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit{
  seleccionado:string = '';
  hayMarca:boolean = true;
  maxValue: number = 0;
  value: number = 0;
  valueKm: number = 0;

  filtrar = {
    id: 0,
    carName: 'Seleccione una Marca',
    nameModel: 'Seleccione un modelo',
    price: this.value,
    km: this.valueKm,
    combustible: 'Seleccione un combustible',
    cajaDeCambios: '',
    carroceria: 'Seleccione una carroceria'
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      
      const currentUrlSegments: UrlSegment[] = this.route.snapshot.url;

    // Realiza la comprobación de la ruta aquí
    if (this.containsCarroceriaSegment(currentUrlSegments)) {
      const nombre = params['nombre'];
      this.filtrar.carroceria = nombre;
      this.buscarFiltrando();

    } else if (this.containsCocheSegment(currentUrlSegments)) {
      const nombre = params['id'];
      this.filtrar.id = nombre;
      this.buscarFiltrando();
    }
    });
  }

  containsCarroceriaSegment(urlSegments: UrlSegment[]): boolean {
    // Verifica si alguno de los segmentos de la URL es "carroceria"
    return urlSegments.some(segment => segment.path === 'carroceria');
  }

  containsCocheSegment(urlSegments: UrlSegment[]): boolean {
    // Verifica si alguno de los segmentos de la URL es "carroceria"
    return urlSegments.some(segment => segment.path === 'coche');
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

  get desplegableCarroceria () {
    return this.verYcomprar.desplegableCarroceria
  }

  constructor (private http: HttpClient, private verYcomprar: VerYComprarService, private route: ActivatedRoute, private router: Router) {}

  cajaDeCambios (caja: string) {
    if (caja === 'manual') { 
      this.filtrar.cajaDeCambios = 'manual'
    } else {
      this.filtrar.cajaDeCambios = 'automatico'
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
      id: 0,
      carName: 'Seleccione una Marca',
      nameModel: 'Seleccione un modelo',
      price: this.value,
      km: this.valueKm,
      combustible: 'Seleccione un combustible',
      cajaDeCambios: '',
      carroceria: 'Seleccione una carroceria'
    }
    this.buscarFiltrando()
  }
}

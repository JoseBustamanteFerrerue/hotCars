import { Component, OnInit } from '@angular/core';
import { VerYComprarService } from '../ver-y-comprar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit{
  car: any;
  ruta: any;
  constructor (private verYcomprar: VerYComprarService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.verYcomprar.getCarPorId(id)
        .subscribe(resp => {
          this.car = resp;
          this.car = this.car.map( function (item: any) {
            if (item.rutas != null) {
              const rutas = item.rutas.split('|')
              item.rutas = rutas
            }
            
            return item
          })
          this.ruta = this.car[0].rutas[0]
        });
    });
  }

  consulta () {
    window.location.href = 'contacto'
  }

  reservar (item:any) {
    this.verYcomprar.reservar(item)
  }
}

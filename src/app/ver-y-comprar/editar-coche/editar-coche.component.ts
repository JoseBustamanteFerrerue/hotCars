import { Component, OnInit } from '@angular/core';
import { VerYComprarService } from '../ver-y-comprar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editar-coche',
  templateUrl: './editar-coche.component.html',
  styleUrls: ['./editar-coche.component.css']
})
export class EditarCocheComponent implements OnInit{
  car: any;
  sanitizedUrl: any;
  data: any;
  constructor (private verYcomprar: VerYComprarService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.verYcomprar.getCarPorId(id)
        .subscribe(resp => {
          this.car = resp;
          this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.car[0].localizacion);
          this.data = {
            item: this.car[0],
            sanitizedUrl: this.sanitizedUrl
          }
        });
    });
  }
 
}

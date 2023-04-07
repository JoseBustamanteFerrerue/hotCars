import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-coches-ocasion-carousel',
  templateUrl: './coches-ocasion-carousel.component.html',
  styleUrls: ['./coches-ocasion-carousel.component.css']
})
export class CochesOcasionCarouselComponent {
  get resultados () {
    return this.mainService.resp
  }
  constructor ( private mainService: MainServiceService ) {}
}

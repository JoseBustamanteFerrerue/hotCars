import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerYComprarService } from '../ver-y-comprar.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {
  car: any;
  constructor(private route: ActivatedRoute, private verYcomprar: VerYComprarService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.verYcomprar.getCarPorId(id)
        .subscribe(resp => {
          this.car = resp;
          console.log(this.car)
        });
    });
  }
}

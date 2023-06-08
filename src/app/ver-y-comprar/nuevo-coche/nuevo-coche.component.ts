import { Component } from '@angular/core';
import { VerYComprarService } from '../ver-y-comprar.service';

@Component({
  selector: 'app-nuevo-coche',
  templateUrl: './nuevo-coche.component.html',
  styleUrls: ['./nuevo-coche.component.css']
})
export class NuevoCocheComponent {
  selectedFile: File | null = null;
  hayMarca: any = true;
  hayVersion: any = true;
  car: any = {}

  constructor (private verYcomprar: VerYComprarService) {}

  onSubmit() {   
    this.verYcomprar.marcaId(this.car.carName, this.car.nameModel, this.car.nameVersion).subscribe(
      idMark => {
        this.verYcomprar.nuevoCoche(this.car, idMark[0].id)
      }
    )
  }

  cambio() {
    this.hayMarca = false;
    this.verYcomprar.desplegableModelos(this.car.carName)
  }

  cambioVersion() {
    this.hayVersion = false;
    this.verYcomprar.desplegableVersion(this.car.carName, this.car.nameModel)
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  get desplegableModelo() {
    return this.verYcomprar.desplegableModelo
  }

  get desplegableVersion() {
    return this.verYcomprar.desplegableVersionCoche
  }

  get desplegableMarca() {
    return this.verYcomprar.desplegableMarca
  }

}

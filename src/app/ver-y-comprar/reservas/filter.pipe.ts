import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
  })
  export class FilterPipe implements PipeTransform {
    transform(items: any[], filtro: string): any[] {
      if (!filtro || filtro.trim() === '') {
        return items;
      }
  
      filtro = filtro.toLowerCase();
      return items.filter(item =>
        item.nombreUsuario.toLowerCase().includes(filtro) ||
        item.primerApellido.toLowerCase().includes(filtro) ||
        item.segundoApellido.toLowerCase().includes(filtro) ||
        item.fecha_nacimiento.toLowerCase().includes(filtro) ||
        item.email.toLowerCase().includes(filtro) ||
        item.telefono.toString().includes(filtro) ||
        item.fecha_reserva.toLowerCase().includes(filtro) ||
        item.nameMark.toLowerCase().includes(filtro) ||
        item.nameModel.toLowerCase().includes(filtro) ||
        item.nameVersion.toLowerCase().includes(filtro) ||
        item.anyo.toString().includes(filtro) ||
        item.km.toString().includes(filtro) ||
        item.stateCar.toLowerCase().includes(filtro) ||
        item.price.toString().includes(filtro) ||
        item.combustible.toLowerCase().includes(filtro) ||
        item.nombreConcesionario.toLowerCase().includes(filtro) ||
        item.caja_de_cambios.toLowerCase().includes(filtro) ||
        item.distintivo_ambiental.toLowerCase().includes(filtro) ||
        item.peso.toString().includes(filtro) ||
        item.deposito.toString().includes(filtro) ||
        item.maletero.toString().includes(filtro) ||
        item.medida_ancho.toString().includes(filtro) ||
        item.medida_altura.toString().includes(filtro) ||
        item.medida_largo.toString().includes(filtro) ||
        item.num_plazas.toString().includes(filtro) ||
        item.extras.toLowerCase().includes(filtro)
      );
    }
  }
  
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
        item.name.toLowerCase().includes(filtro) ||
        item.primer_apellido.toLowerCase().includes(filtro) ||
        item.fecha_nacimiento.toLowerCase().includes(filtro) ||
        item.email.toLowerCase().includes(filtro) ||
        item.telefono.toString().includes(filtro) ||
        item.nameMark.toLowerCase().includes(filtro) ||
        item.nameModel.toLowerCase().includes(filtro) ||
        (item.nameVersion + ' ' + item.cv).toLowerCase().includes(filtro) ||
        item.valor_tasado.toString().includes(filtro) ||
        item.valor.toString().includes(filtro) ||
        item.provincia.toLowerCase().includes(filtro)
      );
    }
  }
  
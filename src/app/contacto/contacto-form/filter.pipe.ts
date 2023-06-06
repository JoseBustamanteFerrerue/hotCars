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
      item.primerApellido.toLowerCase().includes(filtro) ||
      item.segundoApellido.toLowerCase().includes(filtro) ||
      item.email.toLowerCase().includes(filtro) ||
      item.telefono.toString().includes(filtro) ||
      item.motivo.toLowerCase().includes(filtro) ||
      item.fecha_consulta.toString().includes(filtro) ||
      item.fecha_nacimiento.toString().includes(filtro)
    );
  }
}

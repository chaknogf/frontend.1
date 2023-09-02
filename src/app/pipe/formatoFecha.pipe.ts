import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {
  transform(fecha: string): string {
    if (!fecha) return ''; // Manejo de fecha nula o vacía

    // Divide la fecha en año, mes y día
    const partes = fecha.split('-');
    if (partes.length !== 3) return fecha; // Comprueba si la fecha tiene el formato esperado

    const [anio, mes, dia] = partes;

    // Formatea la fecha en el formato 'dd-MM-yyyy'
    return `${dia}-${mes}-${anio}`;
  }
}

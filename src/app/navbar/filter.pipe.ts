import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../city/city.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: City[], filterText?: string): City[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null

    return filterText ? value.filter((p: City) => p.cityName
      .toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../interfaces/address';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: Address): string {
    return (value.direction) ? `${value.ext} ${value.int} ${value.direction}, ${value.municipality}, ${value.state} ${value.zipcode
    }, ${value.country}` : '';
  }

}

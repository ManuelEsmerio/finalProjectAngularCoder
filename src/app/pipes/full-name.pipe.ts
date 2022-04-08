import { Pipe, PipeTransform } from '@angular/core';
import { Students } from '../interfaces/students';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Students): string {
    let student:string = `${value.name} ${value.lastname}`
    return student;
  }

}

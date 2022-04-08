import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Students } from '../interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  id:number = 0;
  students: Students[] = [
    {
      "id": this.makeid(),
      "name": "Manuel",
      "lastname": "Esmerio Garcia",
      "occupation": "Software Developer",
      "birthday": new Date(),
      "email": "manuel_esmerio@hotmail.com",
      "phone": "3321305110",
      "address": {
        "direction": "Toluca",
        "ext": "146",
        "int": "",
        "municipality": "Tequila",
        "zipcode": "46400",
        "state": "Jalisco",
        "country": "México"
      }
    },
    {
      "id": this.makeid(),
      "name": "Manuel",
      "lastname": "Esmerio Garcia",
      "occupation": "Software Developer",
      "birthday": new Date(),
      "email": "manuel_esmerio@hotmail.com",
      "phone": "3321305110",
      "address": {
        "direction": "Toluca",
        "ext": "146",
        "int": "",
        "municipality": "Tequila",
        "zipcode": "46400",
        "state": "Jalisco",
        "country": "México"
      }
    }
  ];

  constructor() { }

  getStudents(): Observable<Students[]> {
    return of(this.students);
  }

  addStudent(student:Students): void{
    student.id = this.makeid();
    this.students.push(student);
  }

  deleteStudent(id:string){
    let index = this.students.findIndex(item => item.id == id);
    this.students.splice(index, 1);
  }

  getStudentById(id:string): any {
    return this.students.find(item => item.id == id);
  }

  makeid():string {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 50; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}

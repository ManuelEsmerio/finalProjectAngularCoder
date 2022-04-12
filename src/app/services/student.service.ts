import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Students } from '../interfaces/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  id: number = 0;
  students: Students[] = [
    {
      "id": this.makeid(),
      "name": "Ronaldo Ivan",
      "lastname": "Esmerio Garcia",
      "occupation": "Estudiante",
      "birthday": new Date("08/02/2000"),
      "email": "ronaldo_esmerio@hotmail.com",
      "phone": "3352879120",
      "image": "https://avatars.githubusercontent.com/u/15385855?v=4",
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
      "birthday": new Date("08/30/1955"),
      "email": "manuel_esmerio@hotmail.com",
      "phone": "3321305110",
      "image": "https://avatars.githubusercontent.com/u/15385854?v=4",
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
      "name": "Irene",
      "lastname": "Garcia Hernandez",
      "occupation": "Comerciante",
      "birthday": new Date("12/09/1965"),
      "email": "irene_garcia@hotmail.com",
      "phone": "3314744009",
      "image": "https://avatars.githubusercontent.com/u/15385824?v=4",
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
      "name": "Jose Manuel",
      "lastname": "Esmerio Rivera",
      "occupation": "Agricultor",
      "birthday": new Date("07/10/1963"),
      "email": "manuel_rivera@hotmail.com",
      "phone": "3314744001",
      "image": "https://avatars.githubusercontent.com/u/15385834?v=4",
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
  ];
  students$: Observable<Students[]>;

  constructor() {
    this.students$ = new Observable((suscripcion) => {
      if(this.students.length > 0){
        suscripcion.next(this.students);
        suscripcion.complete();
      }else{
        suscripcion.error("Obvservable no tiene datos para enviar");
      }
    });
  }

  getStudents(): Observable<Students[]> {
    return of(this.students);
  }

  addStudent(student: Students): void {
    student.id = this.makeid();
    this.students.push(student);
  }

  updateStudent(student: Students) {
    for (let index = 0; index < this.students.length; index++) {
      if (this.students[index]['id'] == student.id) {
        this.students[index] = {...student};
      }
    }
  }

  deleteStudent(id: string) {
    let index = this.students.findIndex(item => item.id == id);
    this.students.splice(index, 1);
  }

  // Find the student that will be updated
  getStudentById(id: string) {
    return this.students.find(item => item.id == id);
  }

  makeid(): string {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 50; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}

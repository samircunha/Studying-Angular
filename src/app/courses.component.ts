import { Component } from '@angular/core';
// import { CoursesService } from './courses.service';

//Working with pipes.
@Component({
  selector: 'courses',
  template: `
  {{course.title | uppercase | lowercase}} <br>
  {{course.students | number}} <br>
  {{course.rating | number:"2.1-2"}} <br>
  {{course.price | currency:'BRL':true:'3.1-1'}} <br>
  {{course.releaseDate | date:'longDate'}} <br>
  `
  })

export class CoursesComponent {
  course = {
    title: 'The complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  }
}




//Stydies: Event Filtering, template variables, two-way binding
// @Component({
//   selector: 'courses',
//   template: `
//     <input #name (keyup.backspace)="getName(name.value)"/>
//     <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
//   `,
// })
// export class CoursesComponent {
//   email: string = 'samir@email.com';

//   onKeyUp() { //maneira certa de pegar dados. 
//     console.log(this.email);
//   }

//   getName(name: string) {
//     console.log(name)
//   }
// }



//Studies: Class binding, style binding, event binding
// @Component({
//   selector: 'courses',
//   template: `
//     <button class="btn btn-primary" [class.active]="isActive">save</button>
//     <div>
//     <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Ok!</button> 
//     <div (click)="onDivClicked()">
//     <button class="btn btn-secondary" (click)="onSave($event)">save</button> 
//     </div>
//   `,
// })
// export class CoursesComponent {
//     isActive = false
//     onDivClicked() {
//         console.log("clicked")
//     }

//     onSave ($event: any) {
//         $event.stopPropagation(); // Não deixa que o click na div ocorra. 
//         console.log('Saved', $event)
//     }
// }




// @Component({
//   selector: 'courses',
//   template: ` <h2>{{ title }}</h2>
//     <ul>
//       <li *ngFor="let course of courses">
//         {{ course }}
//       </li>
//     </ul>
//     `,
// })
// export class CoursesComponent {
//     title: string = 'Courses'
//     courses;
//     constructor(service: CoursesService) { //Com essa linha desvinculamos a classe de serviço desta classe criamos uma dependência, isso facilita inclusive na hora de fazer testes
//         this.courses = service.getCourses();
//     }
// }

import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <button class="btn btn-primary" [class.active]="isActive">save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Ok!</button>
    <div (click)="onDivClicked()">
    <button class="btn btn-secondary" (click)="onSave($event)">save</button>
    </div>
  `,
})
export class CoursesComponent {
    isActive = false
    onDivClicked() {
        console.log("clicked")
    }

    onSave ($event: any) {
        $event.stopPropagation(); // Não deixa que o click na div ocorra. 
        console.log('Saved', $event)
    }
}




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

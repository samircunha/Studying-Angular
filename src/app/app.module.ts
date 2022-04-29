import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule //Permite trabalharmos com formulários, inputs, etc.
  ],
  providers: [
    CoursesService // com esta linha dizemos ao angular que esse service é um provedor de nossas classes. 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

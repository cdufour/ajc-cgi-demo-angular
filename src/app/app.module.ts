import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter.component';
import { StudentsComponent } from './students/students.component';
import { CitationComponent } from './citation/citation.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentGradeComponent } from './student-grade/student-grade.component';
import { ChoiceComponent } from './choice/choice.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityShowComponent } from './city-show/city-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    StudentsComponent,
    CitationComponent,
    StudentListComponent,
    StudentCardComponent,
    StudentGradeComponent,
    ChoiceComponent,
    CityChoiceComponent,
    CityShowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

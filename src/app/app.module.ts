import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TodoModule } from './todo/todo.module';
import { ExosModule } from './exos/exos.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './intro/hello.component';
import { CounterComponent } from './intro/counter.component';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentGradeComponent } from './student-grade/student-grade.component';
import { ChoiceComponent } from './choice/choice.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCardComponent } from './article-card/article-card.component';
//import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CounterComponent,
    StudentsComponent,
    StudentListComponent,
    StudentCardComponent,
    StudentGradeComponent,
    ChoiceComponent,
    ArticleListComponent,
    ArticleCardComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ExosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { DbmealModule } from './exos/dbmeal/dbmeal.module';
import { RformComponent } from './rform/rform.component';
import { DemoRouteModule } from './demo-route/demo-route.module';


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
    ArticleCardComponent,
    RformComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ExosModule,
    DbmealModule,
    ReactiveFormsModule,
    DemoRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

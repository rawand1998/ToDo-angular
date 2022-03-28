import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import {TodoServiceService} from './service/todo-service.service'
import { FormsModule } from '@angular/forms';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [TodoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

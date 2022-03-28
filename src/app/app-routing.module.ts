import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoComponent} from './components/todo/todo.component'
import {EditTodoComponent} from './components/edit-todo/edit-todo.component'

const routes: Routes = [
  {path: '', component:TodoComponent},
  {path:'edit',component:EditTodoComponent},
  {path:'delete/:id',component:TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

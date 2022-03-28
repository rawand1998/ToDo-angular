import { Component, OnInit } from '@angular/core';

import {TodoServiceService} from '../../service/todo-service.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

model:any={}
creating=false;
editing=false;
id=4
todo=[
  {name: 'Finish Angular Screencast',id:1,completed:false},
  { 'id': 2,
  'name': 'Take over world',
  'completed': false,},
  {    'id': 3,
  'name': 'One more thing',
  'completed': false,}
]
editChaneg:any;
  constructor( ) { }

  ngOnInit(): void {
  
    
  }
  addPosts(){
   this.todo.push({
     name:this.model.name,
     completed:this.model.completed,
     id:this.id
   });
   this.id++
   this.model=''
   
  }
  delete(id:number){
   this.todo= this.todo.filter(todo=>todo.id !==id)
  }
  editText(data:any){
    this.editChaneg= data
    this.editing=true;
    
    this.model={...data}
  }
  submit(){
    if(this.editing){
     this.upDateText()
    }else{
      this.addPosts()
    }
  }
  upDateText(){
    this.editChaneg.name=this.model.name
    this.editChaneg.completed=this.model.completed
    this.model={}
  }
  cancel(){
    this.creating=false
    this.editing=false
  }
  
}

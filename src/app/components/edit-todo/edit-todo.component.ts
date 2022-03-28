import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  constructor() { }
@Input() model:{name:string} ={name:'rawand'} 
data:any;
  ngOnInit(): void {
    this.data = this.model
  }


 
}

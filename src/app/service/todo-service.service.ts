import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
posts:any = [];
model:any = {}
  constructor() { }
  getPosts():Observable<any>{
    return this.posts=this.model;

  }
  addPosts(form:any){
    return this.posts.push(this.model);
  }
}

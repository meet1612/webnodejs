import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Task } from './todolist/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url:string='http://localhost:3000/todo/';
  constructor(private _http:HttpClient) { }
  getAlltask(){
    return this._http.get(this.url);
  }
  addTask(item:Task){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteTask(item:Task){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.Id,{headers:head1});
  }
  updateTask(item:Task){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.Id,body,{headers:head1});
  }
}

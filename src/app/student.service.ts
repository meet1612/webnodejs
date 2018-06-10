import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Student } from './studentapp/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url:string='http://localhost:3000/stud/';
  constructor(private _http:HttpClient) { }
  getAllStudent(){
    return this._http.get(this.url);
  }
  addStudent(item:Student){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteStudent(item:Student){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.Id,{headers:head1});
  }
  updateStudent(item:Student){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.Id,body,{headers:head1});
  }
}

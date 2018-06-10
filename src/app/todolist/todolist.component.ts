import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  statusarr:string[]=[
    'done','pending'
  ];
  tasks:Task[]=[];
  str1:number;
  str2:string;
  str3:string;
  idno:number;
  constructor(private _xyz:TodoService) { }

  ngOnInit() {
    this._xyz.getAlltask().subscribe(
      (data:Task[])=>{
        this.tasks=data;
        console.log(this.tasks);
      }
    );
  }
  onclick1(){
    this._xyz.addTask(new Task(this.str1,this.str2,this.str3)).subscribe(
      (data:any)=>{
        this.tasks.push(new Task(this.str1,this.str2,this.str3));
      }
    );

  }
  onDel(item:Task){
    this._xyz.deleteTask(item).subscribe(
     (data:any)=>{
      this.tasks.splice(this.tasks.indexOf(item),1);
     }
    );

  }
  onUpdate(item:Task){
    if(item.Status=='done'){
      item.Status='pending';
    }
    else{
      item.Status='done';
    }
  }
}

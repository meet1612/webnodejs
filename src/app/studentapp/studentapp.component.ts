import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentapp',
  templateUrl: './studentapp.component.html',
  styleUrls: ['./studentapp.component.css']
})
export class StudentappComponent implements OnInit {
  rollno:number;
  name:string;
  rbtn1:string='MALE';
  cb1:string;
  cb2:string;
  cb3:string;
  cit:string='AMD';
  fee:number;
  mob:string;
  flag:boolean=false;
  constructor(private _xyz:StudentService) { }
  citarr:string[]=[
    'AMD',
    'MUMBAI','SURAT','DHANDHUKA'
  ];
  hob:string;

  stud:Student[]=[];
  ngOnInit() {
    this._xyz.getAllStudent().subscribe(
      (data:Student[])=>{
        this.stud=data;
      }
    );
  }
  onaddclick(){
    if(this.flag)
    {
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
  onAdd(){
    console.log(this.cb1);
    this._xyz.addStudent(new Student(this.rollno,this.name,this.mob,this.rbtn1,this.cit,this.fee)).subscribe(
      (data:any)=>{
        this.stud.push(new Student(this.rollno,this.name,this.mob,this.rbtn1,this.cit,this.fee));
      }
    );

  }
  onDel(item){
    this._xyz.deleteStudent(item).subscribe(
      (data:any)=>{
        this.stud.splice(this.stud.indexOf(item),1);
      }
    );
  }
}

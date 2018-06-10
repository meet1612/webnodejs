import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc1',
  templateUrl: './calc1.component.html',
  styleUrls: ['./calc1.component.css']
})
export class Calc1Component implements OnInit {
  no1:number;
  no2:number;
  f:number;
  ans:number;
  constructor() { }

  ngOnInit() {
  }
  onclickplus(m)
  {
    this.no1=parseInt(m);
    this.f=1;
  }
  onclicksub(m)
  {
    this.no1=parseInt(m);
    this.f=2;
  }
  onclickmul(m)
  {
    this.no1=parseInt(m);
    this.f=3;
  }
  onclickdiv(m)
  {
    this.no1=parseInt(m);
    this.f=4;
  }
  onclickequ(n){
    this.no2=parseInt(n);
    if(this.f==1){
      this.ans=this.no1+this.no2;
    }
    else if(this.f==2){
      this.ans=this.no1-this.no2;
    }
    else if(this.f==3){
      this.ans=this.no1*this.no2;
    }
    else if(this.f==4){
      this.ans=this.no1/this.no2;
    }
  }
}

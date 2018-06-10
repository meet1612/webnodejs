import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  y="";
  no1:number;
  no2:number;
  ans:number;
  f:number;
  constructor() { }

  ngOnInit() {
  }
  onclickce(){
    this.y="";
    this.no1=0;
    this.no2=0;
    this.ans=0;
  }
  onclickeq(){
    this.no2=parseInt(this.y);
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
    this.y=this.ans+"";
  }
  onclickp(){
    this.no1=parseInt(this.y);
    this.y=""
    this.f=1;
  }
  onclicks(){
    this.no1=parseInt(this.y);
    this.y=""
    this.f=2;
  }
  onclickm(){
    this.no1=parseInt(this.y);
    this.y=""
    this.f=3;
  }
  onclickd(){
    this.no1=parseInt(this.y);
    this.y=""
    this.f=4;
  }
  onclick1(){
    this.y+=1;
  }
  onclick2(){
    this.y+=2;
  }
  onclick3(){
    this.y+=3;
  }
  onclick4(){
    this.y+=4;
  }
  onclick5(){
    this.y+=5;
  }
  onclick6(){
    this.y+=6;
  }
  onclick7(){
    this.y+=7;
  }
  onclick8(){
    this.y+=8;
  }
  onclick9(){
    this.y+=9;
  }
  onclick0(){
    this.y+=0;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  {

  constructor() { }

  ngOnInit() {
  }
  a:number=10;
  x:string="meet";
  ans:number=0;
  f:boolean=true;
  str:string="meet";
  onvisible(){
    if(this.f){
      this.f=false;
    }
    else
    {
      this.f=true;
    }
  }
  onclick(m,n)
  {
    this.ans=parseInt(m)+parseInt(n);
  }
  onclick1(m,n)
  {
    this.ans=parseInt(m)-parseInt(n);
  }
  onclick2(m,n)
  {
    this.ans=parseInt(m)*parseInt(n);
  }
  onclick3(m,n)
  {
    this.ans=parseInt(m)/parseInt(n);
  }

}

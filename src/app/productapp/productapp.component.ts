import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-productapp',
  templateUrl: './productapp.component.html',
  styleUrls: ['./productapp.component.css']
})
export class ProductappComponent implements OnInit {

  i:number;
  a:string='../assets/demo.png';
  b:string='../assets/demo1.png';
  noarr:number[]=[];
  txtid:number;
  txtname:string;
  txtprice:number;
  txtmfg:string;
  txtsoh:number;
  flag:boolean=false;
  imagearr:string[]=[
    '../assets/demo.png',
    '../assets/demo1.png',
    '../assets/demo.png'
  ];
  j:number=0;
   prod:Product[]=[];


  constructor(private _xyz:ProductService) { }

  ngOnInit()  {
    this._xyz.getAllProduct().subscribe(
      (data:Product[])=>{
        this.prod=data;
        console.log(this.prod);
    }
    );
    for(this.i=1;this.i<=50;this.i++){
      this.noarr.push(this.i);
    }

  }
  onabc()
  {
    if(this.flag)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }
  }
  onDelete(item){
    this._xyz.deleteProduct(item).subscribe(
      (data:any)=>{
        this.prod.splice(this.prod.indexOf(item),1);
      }
    );
  }
  onAdd(){
    this._xyz.addProduct(new Product(this.txtid,this.txtname,this.txtprice,this.imagearr[this.j],this.txtmfg,this.txtsoh)).subscribe(
      (data:any)=>{
        this.prod.push(new Product(this.txtid,this.txtname,this.txtprice,this.imagearr[this.j],this.txtmfg,this.txtsoh));
      }
    );

    this.j=this.j+1;
    if(this.j>2){
      this.j=0;
    }
  }
 }

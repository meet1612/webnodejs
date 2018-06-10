import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Product } from './productapp/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string='http://localhost:3000/pro/';
  constructor(private _http:HttpClient) { }
  getAllProduct(){
    return this._http.get(this.url);
  }
  addProduct(item:Product){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }
  deleteProduct(item:Product){
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+item.Id,{headers:head1});
  }
  updateProduct(item:Product){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+item.Id,body,{headers:head1});
  }
}

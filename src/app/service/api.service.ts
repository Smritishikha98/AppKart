import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private htttp : HttpClient) { }
  getProduct(){
    return this.htttp.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res}))
    
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../interfaces/product-model';
import { CrModel } from '../interfaces/cr-model';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  myUrl: string = "https://localhost:7148/api/Product/  "

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.myUrl);
  }

  create(data:CrModel) : Observable<ProductModel>{
    return this.http.post<ProductModel>(this.myUrl, data);
  }

  getById(id:number) : Observable<ProductModel>{
    return this.http.get<ProductModel>(this.myUrl + id);
  }

  delByid(id:number) : Observable<boolean>{
    return this.http.delete<boolean>(this.myUrl + id);
  }

  update(id:number, data:CrModel) : Observable<ProductModel>{
    return this.http.put<ProductModel>(this.myUrl + id, data);
  }
}
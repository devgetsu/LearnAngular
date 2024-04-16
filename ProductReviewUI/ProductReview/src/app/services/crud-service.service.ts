import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../interfaces/product-model';
import { CrModel } from '../interfaces/cr-model';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  myUrl: string = "https://localhost:7148/api/Product"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.myUrl);
  }

  create(data:CrModel) : Observable<ProductModel>{
    return this.http.post<ProductModel>(this.myUrl, data);
  }
}
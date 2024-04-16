import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { CrModel } from '../interfaces/cr-model';

@Injectable({
  providedIn: 'root'
})
export class MsCrudService {

  myUrl = "https://localhost:7148/api/Product"
  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.myUrl);
  }

  create(data:CrModel) : Observable<Product>{
    return this.http.post<Product>(this.myUrl, data);
  }
}

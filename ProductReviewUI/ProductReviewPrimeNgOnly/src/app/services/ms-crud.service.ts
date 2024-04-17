import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { CrModel } from '../interfaces/cr-model';

@Injectable({
  providedIn: 'root'
})
export class MsCrudService {

  myUrl = "https://localhost:7148/api/Product/"
  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.myUrl);
  }

  getById(id:number) : Observable<Product>{
    return this.http.get<Product>(this.myUrl + id);
  }

  delByid(id:number) : Observable<boolean>{
    return this.http.delete<boolean>(this.myUrl + id);
  }

  update(id:number, data:CrModel) : Observable<Product>{
    return this.http.put<Product>(this.myUrl + id, data);
  }

  create(data:CrModel) : Observable<Product>{
    return this.http.post<Product>(this.myUrl, data);
  }
}

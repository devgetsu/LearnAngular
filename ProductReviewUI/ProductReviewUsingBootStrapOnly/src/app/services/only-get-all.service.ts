import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrModel } from '../interfaces/pr-model';
import { CrModel } from '../interfaces/cr-model';

@Injectable({
  providedIn: 'root'
})
export class OnlyGetAllService {

  baseUrl = "https://localhost:7148/api/Product"
  constructor(private http : HttpClient) { }

  getAll() : Observable<PrModel[]> {
    return this.http.get<PrModel[]>(this.baseUrl);
  }

  getById(id:number) : Observable<PrModel>{
    return this.http.get<PrModel>(this.baseUrl + "/" + id);
  }

  delByid(id:number) : Observable<boolean>{
    return this.http.delete<boolean>(this.baseUrl + "/" + id);
  }

  update(id:number, data:PrModel) : Observable<PrModel>{
    return this.http.put<PrModel>(this.baseUrl + "/" + id, data);
  }

  create(data:CrModel) : Observable<PrModel>{
    return this.http.post<PrModel>(this.baseUrl, data);
  }
}

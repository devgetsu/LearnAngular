import { PrView } from './../interfaces/pr-view';
import { GetAllComponent } from './../components/get-all/get-all.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrModel } from '../interfaces/cr-model';

@Injectable({
  providedIn: 'root'
})
export class CrGetAllService {

  mainUrl = "https://localhost:7148/api/Product/"
  constructor( private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.mainUrl);
  }

  create(data:CrModel) : Observable<PrView>{
    return this.http.post<PrView>(this.mainUrl, data);
  }

  getById(id:number) : Observable<PrView>{
    return this.http.get<PrView>(this.mainUrl + id);
  }

  delByid(id:number) : Observable<boolean>{
    return this.http.delete<boolean>(this.mainUrl + id);
  }

  update(id:number, data:CrModel) : Observable<PrView>{
    return this.http.put<PrView>(this.mainUrl + id, data);
  }
}

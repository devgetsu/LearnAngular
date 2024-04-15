import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MsCrudService {

  myUrl = "https://localhost:7148/api/Product"
  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.myUrl);
  }
}

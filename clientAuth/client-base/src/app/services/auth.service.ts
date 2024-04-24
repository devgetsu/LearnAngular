import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Login } from '../interfaces/login';
import { LoginResponse } from '../interfaces/responce';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router : Router) { }
  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';

  login(data: Login): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.apiUrl}Auth/Login`, data).pipe(
      map((response)=>{
        if(response.isSuccess){
          //localStorage.clear();
          localStorage.setItem(this.tokenKey, response.token)
        }
        this.router.navigate(['/register'])
        return response
      })
    );
}

  register(data: Register): Observable<string>{
    return this.http.post<string>(`${this.apiUrl}Auth`,data).pipe(
      map((response)=>{
        if(response == "Qilichdek Qilichbek"){
          this.router.navigate(['/login'])
        }
        this.router.navigate(['/register'])
        return response
      })
    );
}
}
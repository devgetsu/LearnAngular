import { Component, OnInit } from '@angular/core';
import { MsCrudService } from '../../services/ms-crud.service';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{

  products! : Product[];

  constructor (private _crud : MsCrudService, private router : Router) {}
  
  ngOnInit(): void {
    this.getAllProds();
  }

  getAllProds(){
    this._crud.getAll().subscribe({
      next : (data) => {
        this.products = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  redirectToCR7(){
    this.router.navigateByUrl('/cr');
  }
}

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

  Delete(id:number){
    this._crud.delByid(id).subscribe(result =>
      console.log(result)
      )
    }

  redirectToCR7(){
    this.router.navigateByUrl('/cr');
  }

  redirectToMS10(){
    this.router.navigateByUrl('/gbi');
  }
  redirectToNyJR(){
    this.router.navigateByUrl('/update');
  }
}

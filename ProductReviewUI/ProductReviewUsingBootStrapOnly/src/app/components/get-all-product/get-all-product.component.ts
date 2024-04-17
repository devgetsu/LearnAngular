import { PrModel } from './../../interfaces/pr-model';
import { Component, OnInit } from '@angular/core';
import { OnlyGetAllService } from '../../services/only-get-all.service';
import { CrModel } from '../../interfaces/cr-model';
import { Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-get-all-product',
  templateUrl: './get-all-product.component.html',
  styleUrl: './get-all-product.component.css'
})


export class GetAllProductComponent implements OnInit {

  products! : PrModel[];
    
  constructor (private _crud : OnlyGetAllService, private router: Router) {}
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this._crud.getAll().subscribe({
      next : (data) => {
        this.products = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })}

    Delete(id:number){
      this._crud.delByid(id).subscribe(result =>
        console.log(result)
        )
      }
    Update(id:number){
      this.router.navigateByUrl('/up');
    }
    redirectToCR7(){
      this.router.navigateByUrl('/cr');
    }
}

import { PrModel } from './../../interfaces/pr-model';
import { Component, OnInit } from '@angular/core';
import { OnlyGetAllService } from '../../services/only-get-all.service';

@Component({
  selector: 'app-get-all-product',
  templateUrl: './get-all-product.component.html',
  styleUrl: './get-all-product.component.css'
})


export class GetAllProductComponent implements OnInit {

  products! : PrModel[];
  
  constructor (private _crud : OnlyGetAllService) {}
  
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
    })

  }
  }

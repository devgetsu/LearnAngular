import { Component, OnInit } from '@angular/core';
import { PrView } from '../../interfaces/pr-view';
import { CrGetAllService } from '../../services/cr-get-all.service';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent implements OnInit{
  products !: PrView[];
  
  constructor(private _crP : CrGetAllService) {}


  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this._crP.getAll().subscribe({
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

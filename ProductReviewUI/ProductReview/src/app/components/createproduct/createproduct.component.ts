import { Component } from '@angular/core';
import { CrModel } from '../../interfaces/cr-model';
import { CrudServiceService } from '../../services/crud-service.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrl: './createproduct.component.css'
})
export class CreateproductComponent {
  createdProduct : CrModel = {
    name : "",
    description : ""
  };

  isSubmitted: boolean = false;

  constructor(private _crud : CrudServiceService){}

  createproduct(product:CrModel){
    this._crud.create(product).subscribe({
      next : (data) => {
        console.log(data);
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  

myFn(){
  if(this.createdProduct.name == null || this.createdProduct.description  == null || this.createdProduct.name == "" || this.createdProduct.description  == "")
  {
    return;
  }
  this.createproduct(this.createdProduct);
}
}

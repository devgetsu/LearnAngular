import { CrModel } from '../../interfaces/cr-model';
import { CrGetAllService } from '../../services/cr-get-all.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  createdProduct : CrModel = {
    name : "",
    description : ""
  };

  isSubmitted: boolean = false;

  constructor(private _crud : CrGetAllService){}

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

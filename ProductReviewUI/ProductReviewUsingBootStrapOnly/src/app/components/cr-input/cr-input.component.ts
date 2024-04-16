import { Component } from '@angular/core';
import { CrModel } from '../../interfaces/cr-model';
import { OnlyGetAllService } from '../../services/only-get-all.service';

@Component({
  selector: 'app-cr-input',
  templateUrl: './cr-input.component.html',
  styleUrl: './cr-input.component.css'
})
export class CrInputComponent {
  createdProduct : CrModel = {
    name : "",
    description : ""
  };

  isSubmitted: boolean = false;

  constructor(private _crud : OnlyGetAllService){}

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

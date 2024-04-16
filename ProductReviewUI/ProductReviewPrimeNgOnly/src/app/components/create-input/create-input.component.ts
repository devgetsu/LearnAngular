import { Component } from '@angular/core';
import { CrModel } from '../../interfaces/cr-model';
import { MsCrudService } from '../../services/ms-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-input',
  templateUrl: './create-input.component.html',
  styleUrl: './create-input.component.css'
})
export class CreateInputComponent {
  createdProduct : CrModel = {
    name : "",
    description : ""
  };

  isSubmitted: boolean = false;

  constructor(private _crud : MsCrudService, private router: Router){}

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

back(){
  this.router.navigateByUrl('/home');
}
}

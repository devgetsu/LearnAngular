import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CrModel } from '../../interfaces/cr-model';
import { MsCrudService } from '../../services/ms-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  myid : number = 1;

  user : Product = {};

  existProduct : CrModel = {
    name : "", 
    description : ""}

    constructor(private crud : MsCrudService,private router : Router) { }

    updateProduct(id:number ,product : CrModel){
      this.crud.update(id,product).subscribe({
        next : (data) => {
          this.existProduct = data;
          console.log(data);
        },
        error : (err) => {
          console.log(err);
        }
      })
    }

    back(){
      this.router.navigateByUrl('/home');
    }

    update(){
      if(this.existProduct.name == null || this.existProduct.description  == null || this.existProduct.name == "" || this.existProduct.description  == "")
      {
              return;
      }
      this.updateProduct(this.myid, this.existProduct);
    }

    getById(){
      this.crud.getById(this.myid).subscribe({next : (data)=>
        {
          this.user = data;
          console.log(data);
        },
        error : (err)=>{
          console.log(err);
        },
      })
    }
    clickedById(){
      this.getById();
    }
}

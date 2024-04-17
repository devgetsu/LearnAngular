import { Component } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { CrModel } from '../../interfaces/cr-model';
import { ProductModel } from '../../interfaces/product-model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {
  myid : number = 1;

  user : ProductModel = {};

  existProduct : CrModel = {
    name : "", 
    description : ""}

    constructor(private crud : CrudServiceService) { }

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

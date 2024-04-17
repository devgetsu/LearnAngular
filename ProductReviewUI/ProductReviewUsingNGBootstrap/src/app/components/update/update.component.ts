import { Component } from '@angular/core';
import { CrModel } from '../../interfaces/cr-model';
import { CrGetAllService } from '../../services/cr-get-all.service';
import { PrView } from '../../interfaces/pr-view';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  myid : number = 1;

  user : PrView = {};

  existProduct : CrModel = {
    name : "", 
    description : ""}

    constructor(private crud : CrGetAllService) { }

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

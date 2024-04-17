import { Component } from '@angular/core';
import { ProductModel } from '../../interfaces/product-model';
import { CrudServiceService } from '../../services/crud-service.service';

@Component({
  selector: 'app-get-product-by-id',
  templateUrl: './get-product-by-id.component.html',
  styleUrl: './get-product-by-id.component.css'
})
export class GetProductByIdComponent {
  myId : number = 37;
  user : ProductModel = {};
  
  constructor(private ser : CrudServiceService) { }
  ngOnInit(): void {
    this.getById()
  }

  getById(){
    this.ser.getById(this.myId).subscribe({next : (data)=>
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

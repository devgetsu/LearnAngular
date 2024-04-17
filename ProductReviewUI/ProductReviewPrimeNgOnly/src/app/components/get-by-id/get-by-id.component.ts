import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { MsCrudService } from '../../services/ms-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent {
  uuid : number = 37;
  user : Product = {};
  
  constructor(private ser : MsCrudService,private router :Router) { }
  ngOnInit(): void {
    this.getById()
  }

  getById(){
    this.ser.getById(this.uuid).subscribe({next : (data)=>
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

  back(){
    this.router.navigateByUrl('/home');
  }
}

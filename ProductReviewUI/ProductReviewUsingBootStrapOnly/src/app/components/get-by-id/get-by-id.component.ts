import { Component } from '@angular/core';
import { OnlyGetAllService } from '../../services/only-get-all.service';
import { PrModel } from '../../interfaces/pr-model';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent {
  myId : number = 37;
  user : PrModel = {};
  
  constructor(private ser : OnlyGetAllService) { }
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

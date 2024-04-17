import { Component } from '@angular/core';
import { CrGetAllService } from '../../services/cr-get-all.service';
import { PrView } from '../../interfaces/pr-view';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent {
  myId : number = 37;
  user : PrView = {};
  
  constructor(private ser : CrGetAllService) { }
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

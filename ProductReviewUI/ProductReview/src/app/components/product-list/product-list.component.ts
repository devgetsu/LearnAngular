import { Component } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private crudService: CrudServiceService, private router : Router){}
  displayedColumns: string[] = ['Id', 'name', 'description', 'action'];
  dataSource = this.crudService.getProducts();

  Delete(id:number){
    this.crudService.delByid(id).subscribe(result =>
      console.log(result)
      )
    }

  redirectToCR7(){
    this.router.navigateByUrl('/create');
  }
}

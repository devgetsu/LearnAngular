import { Component } from '@angular/core';
import { CrudServiceService } from '../../services/crud-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private crudService: CrudServiceService){}
  displayedColumns: string[] = ['Id', 'name', 'description'];
  dataSource = this.crudService.getProducts();
}

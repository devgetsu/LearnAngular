import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DeleteproductComponent } from './components/deleteproduct/deleteproduct.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';

const routes: Routes = [
  {path: 'pr',component : ProductListComponent},
  {path: 'delete',component : DeleteproductComponent},
  {path: 'update',component : UpdateProductComponent},
  {path: 'create',component : CreateproductComponent},
  {path: '', component : ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

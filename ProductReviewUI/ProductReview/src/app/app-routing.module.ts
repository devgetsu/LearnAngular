import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { GetProductByIdComponent } from './components/get-product-by-id/get-product-by-id.component';

const routes: Routes = [
  {path: 'pr',component : ProductListComponent},
  {path: 'update',component : UpdateProductComponent},
  {path: 'create',component : CreateproductComponent},
  {path: 'gbi',component : GetProductByIdComponent},
  {path: '', component : ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

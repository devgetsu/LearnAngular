import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllProductComponent } from './components/get-all-product/get-all-product.component';

const routes: Routes = [
  {path : 'gt', component : GetAllProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllProductComponent } from './components/get-all-product/get-all-product.component';
import { CrInputComponent } from './components/cr-input/cr-input.component';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path : 'gt', component : GetAllProductComponent},
  {path : 'cr', component : CrInputComponent},
  {path : 'gb', component : GetByIdComponent},
  {path : 'up', component : UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

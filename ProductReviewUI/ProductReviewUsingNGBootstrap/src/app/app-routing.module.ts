import { GetAllComponent } from './components/get-all/get-all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path: 'gt',component : GetAllComponent},
  {path: 'cr',component : CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

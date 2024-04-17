import { GetAllComponent } from './components/get-all/get-all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';

const routes: Routes = [
  {path: 'gt',component : GetAllComponent},
  {path: 'cr',component : CreateComponent},
  {path: 'byId',component : GetByIdComponent},
  {path: 'update',component : UpdateComponent},
  {path: '',component : GetAllComponent},
  {path: '**',component : GetAllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

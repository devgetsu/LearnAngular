import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInputComponent } from './components/create-input/create-input.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path :"cr",title:"Create", component : CreateInputComponent},
  {path :"home",title:"Create", component : HomeComponent},
  {path :"",title:"Create", component : HomeComponent},
  {path :"**",title:"Create", component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

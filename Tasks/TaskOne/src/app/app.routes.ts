import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SecondComponent } from './components/second/second.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'sec',component:SecondComponent}

];

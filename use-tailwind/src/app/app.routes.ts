import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashComponent } from './components/dash/dash.component';
import { BirthComponent } from './components/birth/birth.component';

export const routes: Routes = [
    {path : "home", component : HomeComponent},
    {path : "dashboard", component : DashComponent},
    {path : 'birth',component : BirthComponent}
];

import { Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { HomebarComponent } from './homebar/homebar.component';

export const routes: Routes = [
    {path:'' , component : HomebarComponent},
    {path: 'profile', component : ProfileComponent},
    {path: 'home', component : HomebarComponent},
    {path:'**' , component : HomebarComponent}
];

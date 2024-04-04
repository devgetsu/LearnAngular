import { AboutComponent } from './components/pages/about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { InfoComponent } from './components/pages/info/info.component';

export const routes: Routes = [
    {path : "",title : "Home",component : HomeComponent},
    {path : "home",title : "Home",component : HomeComponent},
    {path : "info",title : "Info",component : InfoComponent},
    {path : "about",title : "About",component : AboutComponent},
    {path : "login",title : "Login",component : LoginComponent},
    {path : "profile",title : "Profile",component : ProfileComponent},
    {path : "contact",title : "Contact",component : ContactComponent},
    {path : "register",title : "Register",component : SignUpComponent},
    {path : "settings",title : "Settings",component : SettingsComponent},
    {path : "dashboard",title : "Dashboard",component : DashboardComponent},
    {path : "**",title : "Home",component : HomeComponent}
];

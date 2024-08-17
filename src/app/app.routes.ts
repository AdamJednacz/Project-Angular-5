import { Routes } from '@angular/router';
import {WelcomeComponent} from "./layout/welcome/welcome.component";

export const routes: Routes = [
  {
    path:"",
    component:WelcomeComponent
  },
  {
    path:"main",
    loadComponent:()=>import('./layout/main/main.component').then(mod=>mod.MainComponent)
  },
  {
    path:"admin",
    loadComponent:()=>import('./layout/admin/admin.component').then(mod=>mod.AdminComponent)
  }
];

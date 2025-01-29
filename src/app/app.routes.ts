import { Routes } from '@angular/router';
import { MainPageComponent } from './myComponents/main-page/main-page.component';
import { SignupComponent } from './myComponents/signup/signup.component';
import { HomeComponent } from './myComponents/home/home.component';
import { TeamPageComponent } from './myComponents/team-page/team-page.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'auth', component: SignupComponent },
  { path: 'team-page', component: TeamPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

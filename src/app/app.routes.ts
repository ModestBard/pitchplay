import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'auth', component: SignupComponent },
  { path: 'team-page', component: TeamPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

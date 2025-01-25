import { Routes } from '@angular/router';
import { MainPageComponent } from './myComponents/main-page/main-page.component';
import { SignupComponent } from './myComponents/signup/signup.component';
export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

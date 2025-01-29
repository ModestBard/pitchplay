import { Routes } from '@angular/router';
import { HomeComponent } from './myComponents/main-page/main-page.component';
import { SignupComponent } from './myComponents/signup/signup.component';
import { MatchComponent } from './myComponents/match/match.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', component: SignupComponent },
    {path:  'match/:matchId', component: MatchComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

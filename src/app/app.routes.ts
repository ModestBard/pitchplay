import { Routes } from '@angular/router';
import { HomePageComponent } from './myComponents/main-page/main-page.component';
import { SignupComponent } from './myComponents/signup/signup.component';
import { MatchComponent } from './myComponents/match/match.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'auth', component: SignupComponent },
    {path:  'match/:matchId', component: MatchComponent},
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

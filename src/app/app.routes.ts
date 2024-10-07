import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path: 'app-explore', component: ExploreComponent},
    {path: 'app-signup', component: SignupComponent },
    {path: 'app-home', component: HomeComponent}
];

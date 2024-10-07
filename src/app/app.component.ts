import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";
import { ExploreComponent } from './explore/explore.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ExploreComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dostodon';
}

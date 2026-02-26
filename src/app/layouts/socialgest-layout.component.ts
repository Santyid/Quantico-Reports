import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialgestNavbarComponent } from '../components/socialgest/navbar/socialgest-navbar.component';

@Component({
  selector: 'app-socialgest-layout',
  standalone: true,
  imports: [RouterOutlet, SocialgestNavbarComponent],
  template: `
    <app-socialgest-navbar></app-socialgest-navbar>
    <main class="socialgest-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    .socialgest-content {
      padding-top: 80px;
    }
  `]
})
export class SocialgestLayoutComponent {}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-quantico-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar
      userAvatarUrl=""
      currentLanguage="ES">
    </app-navbar>
    <main class="quantico-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    .quantico-content {
      padding-top: 80px;
    }
  `]
})
export class QuanticoLayoutComponent {}

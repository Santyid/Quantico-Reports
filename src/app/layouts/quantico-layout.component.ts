import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent, Platform } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-quantico-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar
      [platforms]="platforms"
      userAvatarUrl=""
      currentLanguage="ES"
      (languageClick)="goToComponentsDemo()">
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
export class QuanticoLayoutComponent {
  readonly platforms: Platform[] = [
    { id: 'quantico', name: 'Quantico', route: '/', icon: 'quantico' },
    { id: 'advocatespro', name: 'AdvocatesPro', route: '/advocatespro', icon: 'advocatespro' },
    { id: 'tikket', name: 'Tikket', route: '/tikket', icon: 'tikket' },
    { id: 'socialgest', name: 'SocialGest', route: '/socialgest/metricas', icon: 'socialgest' }
  ];

  constructor(private router: Router) {}

  goToComponentsDemo(): void {
    this.router.navigate(['/components-demo']);
  }
}

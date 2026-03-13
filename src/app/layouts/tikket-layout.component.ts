import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, Platform, NavItem } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-tikket-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar
      [platforms]="platforms"
      [navItems]="navItems"
      userAvatarUrl=""
      currentLanguage="ES">
    </app-navbar>
    <main class="tikket-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    .tikket-content {
      padding-top: 80px;
    }
  `]
})
export class TikketLayoutComponent {
  readonly platforms: Platform[] = [
    { id: 'tikket', name: 'Tikket', route: '/tikket', icon: 'tikket' },
    { id: 'quantico', name: 'Quantico', route: '/', icon: 'quantico' },
    { id: 'advocatespro', name: 'AdvocatesPro', route: '/advocatespro', icon: 'advocatespro' },
    { id: 'socialgest', name: 'SocialGest', route: '/socialgest/metricas', icon: 'socialgest' }
  ];

  readonly navItems: NavItem[] = [];
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, NavItem } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar
      [navItems]="clientNavItems"
      [showPlatformSelector]="false"
      userAvatarUrl=""
      currentLanguage="ES">
    </app-navbar>
    <main class="client-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    .client-content {
      padding-top: 80px;
    }
  `]
})
export class ClientLayoutComponent {
  readonly clientNavItems: NavItem[] = [
    {
      label: 'Reportes',
      children: [
        { label: 'Reporte de impacto', path: '/cliente/reportes/impacto' },
        { label: 'Reportes generales', path: '/cliente/reportes' }
      ]
    },
    { label: 'Menciones', path: '/cliente/menciones' }
  ];
}

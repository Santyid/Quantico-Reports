import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialgestNavbarComponent } from '../components/socialgest/navbar/socialgest-navbar.component';
import { NotificacionesSidebarComponent } from '../components/socialgest/notificaciones-sidebar/notificaciones-sidebar.component';

@Component({
  selector: 'app-socialgest-layout',
  standalone: true,
  imports: [RouterOutlet, SocialgestNavbarComponent, NotificacionesSidebarComponent],
  template: `
    <app-socialgest-navbar (notificationsClick)="toggleNotificationsSidebar()"></app-socialgest-navbar>
    <main class="socialgest-content">
      <router-outlet />
    </main>
    <app-notificaciones-sidebar
      [isOpen]="notificationsSidebarOpen"
      (closed)="notificationsSidebarOpen = false">
    </app-notificaciones-sidebar>
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
export class SocialgestLayoutComponent {
  notificationsSidebarOpen = false;

  toggleNotificationsSidebar(): void {
    this.notificationsSidebarOpen = !this.notificationsSidebarOpen;
  }
}

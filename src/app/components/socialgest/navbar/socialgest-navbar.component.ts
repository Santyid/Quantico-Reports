import { Component, inject, HostListener, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LucideAngularModule, ChevronDown, User, Bell, Plus, Sparkles, CalendarClock, Zap } from 'lucide-angular';
import { ButtonComponent } from '../../ui/button/button.component';

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

interface Platform {
  id: string;
  name: string;
  route: string;
  icon: 'socialgest' | 'quantico' | 'advocatespro' | 'tikket';
}

@Component({
  selector: 'app-socialgest-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule, ButtonComponent],
  templateUrl: './socialgest-navbar.component.html',
  styleUrl: './socialgest-navbar.component.scss'
})
export class SocialgestNavbarComponent {
  private readonly router = inject(Router);

  readonly ChevronDownIcon = ChevronDown;
  readonly UserIcon = User;
  readonly BellIcon = Bell;
  readonly PlusIcon = Plus;
  readonly SparklesIcon = Sparkles;
  readonly CalendarClockIcon = CalendarClock;
  readonly ZapIcon = Zap;

  // TODO: reemplazar por el saldo real de créditos de IA cuando exista esa fuente de datos
  readonly aiCreditsLabel = '3.5K';
  readonly aiCreditsUsed = 35;
  readonly aiCreditsTotal = 3500;
  readonly aiCreditsPlanLabel = 'Plan Activo';
  readonly aiCreditsRenewalDate = '7 de sep.';

  get aiCreditsAvailable(): number {
    return this.aiCreditsTotal - this.aiCreditsUsed;
  }

  get aiCreditsAvailablePercent(): number {
    return Math.round((this.aiCreditsAvailable / this.aiCreditsTotal) * 100);
  }

  creditsPopoverOpen = false;

  readonly platforms: Platform[] = [
    { id: 'socialgest', name: 'SocialGest', route: '/socialgest', icon: 'socialgest' },
    { id: 'quantico', name: 'Quantico', route: '/', icon: 'quantico' },
    { id: 'advocatespro', name: 'AdvocatesPro', route: '/advocatespro', icon: 'advocatespro' },
    { id: 'tikket', name: 'Tikket', route: '/tikket', icon: 'tikket' }
  ];

  selectedPlatform: Platform = this.platforms[0];
  platformDropdownOpen = false;

  // Orden y etiquetas alineadas al diseño de referencia. El enlace de "Metricas"
  // (dentro de "Analizar") se mantiene igual — es la única ruta real de este menú.
  readonly navItems: NavItem[] = [
    { label: 'Publicar', path: '/socialgest/publicar' },
    { label: 'Crear', path: '/socialgest/crear' },
    {
      label: 'Analizar',
      children: [
        { label: 'Metricas', path: '/socialgest/metricas' }
      ]
    },
    { label: 'Colaborar', path: '/socialgest/equipos' },
    { label: 'Redes sociales', path: '/socialgest/canales' }
  ];

  openDropdown: string | null = null;

  @Output() notificationsClick = new EventEmitter<void>();

  togglePlatformDropdown(): void {
    this.platformDropdownOpen = !this.platformDropdownOpen;
  }

  selectPlatform(platform: Platform): void {
    this.selectedPlatform = platform;
    this.platformDropdownOpen = false;
    this.router.navigate([platform.route]);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.sg-navbar__platform-selector')) {
      this.platformDropdownOpen = false;
    }
  }

  toggleDropdown(label: string): void {
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  closeDropdown(): void {
    this.openDropdown = null;
  }

  onNotificationsClick(): void {
    this.notificationsClick.emit();
  }
}

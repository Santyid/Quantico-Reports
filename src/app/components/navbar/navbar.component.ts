import { Component, Input, Output, EventEmitter, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LucideAngularModule, ChevronDown, User } from 'lucide-angular';

export interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

export interface Platform {
  id: string;
  name: string;
  route: string;
  icon: 'socialgest' | 'quantico';
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly router = inject(Router);

  readonly ChevronDownIcon = ChevronDown;
  readonly UserIcon = User;

  @Input() platforms: Platform[] = [
    { id: 'quantico', name: 'Quantico', route: '/', icon: 'quantico' },
    { id: 'socialgest', name: 'SocialGest', route: '/socialgest/metricas', icon: 'socialgest' }
  ];

  @Input() navItems: NavItem[] = [
    { label: 'Crear cuenta/contrato', path: '/crear-cuenta' },
    { label: 'Configurar Keywords', path: '/configurar-keywords' },
    {
      label: 'Reportes',
      children: [
        { label: 'Reporte de impacto', path: '/reportes/impacto' },
        { label: 'Reportes generales', path: '/reportes' }
      ]
    },
    { label: 'Menciones', path: '/menciones' },
    { label: 'Alertas', path: '/alertas' }
  ];

  @Input() showPlatformSelector: boolean = true;
  @Input() userAvatarUrl: string = '';
  @Input() currentLanguage: string = 'ES';

  selectedPlatform: Platform = this.platforms[0];
  platformDropdownOpen = false;
  openDropdown: string | null = null;

  @Output() languageClick = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();

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
    if (!target.closest('.navbar__platform-selector')) {
      this.platformDropdownOpen = false;
    }
  }

  toggleDropdown(label: string): void {
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  closeDropdown(): void {
    this.openDropdown = null;
  }

  onLanguageClick(): void {
    this.languageClick.emit();
  }

  onProfileClick(): void {
    this.profileClick.emit();
  }
}

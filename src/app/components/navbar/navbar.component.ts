import { Component, Input, Output, EventEmitter, inject, HostListener, OnInit } from '@angular/core';
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
  icon: 'socialgest' | 'quantico' | 'advocatespro' | 'tikket';
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  private readonly router = inject(Router);

  readonly ChevronDownIcon = ChevronDown;
  readonly UserIcon = User;

  @Input() platforms: Platform[] = [
    { id: 'quantico', name: 'Quantico', route: '/', icon: 'quantico' },
    { id: 'advocatespro', name: 'AdvocatesPro', route: '/advocatespro', icon: 'advocatespro' },
    { id: 'tikket', name: 'Tikket', route: '/tikket', icon: 'tikket' },
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
    { label: 'Alertas', path: '/alertas' },
    { label: 'Segmentos', path: '/segmentos' }
  ];

  @Input() showPlatformSelector: boolean = true;
  @Input() userAvatarUrl: string = '';
  @Input() currentLanguage: string = 'ES';

  selectedPlatform!: Platform;
  platformDropdownOpen = false;
  openDropdown: string | null = null;

  ngOnInit(): void {
    const currentUrl = this.router.url;
    const matched = this.platforms.find(p =>
      p.route !== '/' && currentUrl.startsWith(p.route)
    );
    this.selectedPlatform = matched || this.platforms[0];
  }

  @Output() languageClick = new EventEmitter<void>();
  @Output() profileClick = new EventEmitter<void>();

  togglePlatformDropdown(): void {
    this.platformDropdownOpen = !this.platformDropdownOpen;
  }

  selectPlatform(platform: Platform, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedPlatform = platform;
    this.platformDropdownOpen = false;
    this.router.navigateByUrl(platform.route);
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

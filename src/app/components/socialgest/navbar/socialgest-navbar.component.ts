import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LucideAngularModule, ChevronDown, User, Bell, CircleHelp, Plus } from 'lucide-angular';
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
  readonly HelpIcon = CircleHelp;
  readonly PlusIcon = Plus;

  readonly platforms: Platform[] = [
    { id: 'socialgest', name: 'SocialGest', route: '/socialgest/metricas', icon: 'socialgest' },
    { id: 'quantico', name: 'Quantico', route: '/', icon: 'quantico' },
    { id: 'advocatespro', name: 'AdvocatesPro', route: '/advocatespro', icon: 'advocatespro' },
    { id: 'tikket', name: 'Tikket', route: '/tikket', icon: 'tikket' }
  ];

  selectedPlatform: Platform = this.platforms[0];
  platformDropdownOpen = false;

  readonly navItems: NavItem[] = [
    { label: 'Crear', path: '/socialgest/crear' },
    { label: 'Publicar', path: '/socialgest/publicar' },
    {
      label: 'Analizar',
      children: [
        { label: 'Metricas', path: '/socialgest/metricas' }
      ]
    },
    { label: 'Equipos', path: '/socialgest/equipos' },
    { label: 'Canales', path: '/socialgest/canales' }
  ];

  openDropdown: string | null = null;

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
}

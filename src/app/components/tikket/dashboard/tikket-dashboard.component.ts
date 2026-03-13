import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search, X, ChevronDown } from 'lucide-angular';

interface NavSection {
  id: string;
  label: string;
}

@Component({
  selector: 'app-tikket-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './tikket-dashboard.component.html',
  styleUrl: './tikket-dashboard.component.scss'
})
export class TikketDashboardComponent {
  readonly SearchIcon = Search;
  readonly XIcon = X;
  readonly ChevronDownIcon = ChevronDown;

  searchQuery = '';
  headerScrolled = false;
  navDropdownOpen = false;

  readonly sections: NavSection[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'tickets', label: 'Tickets' },
    { id: 'analytics', label: 'Analytics' }
  ];

  get navSelectLabel(): string {
    return 'Secciones';
  }

  get filteredSections(): NavSection[] {
    if (!this.searchQuery) return this.sections;
    const q = this.searchQuery.toLowerCase();
    return this.sections.filter(s => s.label.toLowerCase().includes(q));
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.headerScrolled = window.scrollY > 20;
  }

  clearSearch(): void {
    this.searchQuery = '';
  }

  toggleNavDropdown(): void {
    this.navDropdownOpen = !this.navDropdownOpen;
  }

  scrollToSection(sectionId: string): void {
    this.navDropdownOpen = false;
    const el = document.getElementById('tk-' + sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

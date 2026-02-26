import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchInputComponent } from '../../ui/search-input/search-input.component';

export interface SidebarChannel {
  id: string;
  name: string;
  platform: string;
  icon: string;
}

const PLATFORM_ROUTES: Record<string, string> = {
  'Facebook': '/socialgest/metricas-facebook',
  'Instagram': '/socialgest/metricas',
  'X (Twitter)': '/socialgest/metricas',
  'Meta Ads': '/socialgest/metricas',
  'TikTok': '/socialgest/metricas',
  'YouTube': '/socialgest/metricas',
  'LinkedIn': '/socialgest/metricas'
};

@Component({
  selector: 'app-socialgest-sidebar',
  standalone: true,
  imports: [CommonModule, SearchInputComponent],
  templateUrl: './socialgest-sidebar.component.html',
  styleUrl: './socialgest-sidebar.component.scss'
})
export class SocialgestSidebarComponent {
  private readonly router = inject(Router);

  @Input() channels: SidebarChannel[] = [];
  @Input() selectedChannelId: string = 'all';
  @Output() channelSelected = new EventEmitter<string>();

  searchTerm: string = '';

  get filteredChannels(): SidebarChannel[] {
    if (!this.searchTerm) return this.channels;
    const term = this.searchTerm.toLowerCase();
    return this.channels.filter(c =>
      c.name.toLowerCase().includes(term) || c.platform.toLowerCase().includes(term)
    );
  }

  onSearchChange(value: string): void {
    this.searchTerm = value;
  }

  selectChannel(id: string): void {
    this.selectedChannelId = id;
    this.channelSelected.emit(id);

    if (id === 'all') {
      this.router.navigate(['/socialgest/metricas']);
      return;
    }

    const channel = this.channels.find(c => c.id === id);
    if (channel) {
      const route = PLATFORM_ROUTES[channel.platform] || '/socialgest/metricas';
      const currentUrl = this.router.url.split('?')[0];
      if (currentUrl !== route) {
        this.router.navigate([route]);
      }
    }
  }
}

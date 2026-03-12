import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LucideIconData, ChevronRight, Check } from 'lucide-angular';
import { AvatarSocialComponent } from '../avatar-social/avatar-social.component';

export type MenuType = 'icon' | 'avatar' | 'radio' | 'checkbox';

export interface MenuItem {
  id: string;
  label: string;
  icon?: LucideIconData;
  avatarUrl?: string;
  platformIconUrl?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, AvatarSocialComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  @Input() type: MenuType = 'icon';
  @Input() items: MenuItem[] = [];
  @Input() selectedIds: string[] = [];
  @Output() itemClick = new EventEmitter<MenuItem>();
  @Output() selectionChange = new EventEmitter<string[]>();

  readonly ChevronRightIcon = ChevronRight;
  readonly CheckIcon = Check;

  hoveredId: string | null = null;

  isSelected(id: string): boolean {
    return this.selectedIds.includes(id);
  }

  onItemClick(item: MenuItem): void {
    if (item.disabled) return;

    if (this.type === 'radio') {
      this.selectedIds = [item.id];
      this.selectionChange.emit(this.selectedIds);
    } else if (this.type === 'checkbox') {
      if (this.isSelected(item.id)) {
        this.selectedIds = this.selectedIds.filter(id => id !== item.id);
      } else {
        this.selectedIds = [...this.selectedIds, item.id];
      }
      this.selectionChange.emit(this.selectedIds);
    }

    this.itemClick.emit(item);
  }
}

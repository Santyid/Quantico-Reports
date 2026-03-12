import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSocialComponent } from '../avatar-social/avatar-social.component';

export interface SelectUserOption {
  id: string;
  name: string;
  avatarUrl: string;
  platformIconUrl?: string;
}

@Component({
  selector: 'app-select-user',
  standalone: true,
  imports: [CommonModule, AvatarSocialComponent],
  templateUrl: './select-user.component.html',
  styleUrl: './select-user.component.scss'
})
export class SelectUserComponent {
  @Input() options: SelectUserOption[] = [];
  @Input() selectedId: string | null = null;
  @Input() size: 'large' | 'medium' = 'large';
  @Output() selectedIdChange = new EventEmitter<string | null>();
  @Output() selectionChange = new EventEmitter<SelectUserOption>();

  hoveredId: string | null = null;

  isSelected(option: SelectUserOption): boolean {
    return this.selectedId === option.id;
  }

  onSelect(option: SelectUserOption): void {
    this.selectedId = option.id;
    this.selectedIdChange.emit(option.id);
    this.selectionChange.emit(option);
  }

  onMouseEnter(id: string): void {
    this.hoveredId = id;
  }

  onMouseLeave(): void {
    this.hoveredId = null;
  }
}

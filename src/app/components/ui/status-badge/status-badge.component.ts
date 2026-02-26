import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type StatusBadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.scss'
})
export class StatusBadgeComponent {
  @Input() label: string = '';
  @Input() variant: StatusBadgeVariant = 'success';
  @Input() showDot: boolean = true;

  get badgeClasses(): string[] {
    return [
      'status-badge',
      `status-badge--${this.variant}`
    ];
  }
}

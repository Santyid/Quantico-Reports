import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TrendingUp, TrendingDown, LucideIconData } from 'lucide-angular';

export type KpiCardVariant = 'default' | 'success' | 'warning' | 'error';
export type KpiCardSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss'
})
export class KpiCardComponent {
  readonly TrendingUpIcon = TrendingUp;
  readonly TrendingDownIcon = TrendingDown;

  @Input() label: string = '';
  @Input() value: string | number = '';
  @Input() change?: number;
  @Input() changeLabel?: string;
  @Input() icon?: LucideIconData;
  @Input() variant: KpiCardVariant = 'default';
  @Input() size: KpiCardSize = 'medium';

  get isPositiveChange(): boolean {
    return (this.change ?? 0) >= 0;
  }

  get formattedChange(): string {
    if (this.change === undefined) return '';
    const sign = this.change >= 0 ? '+' : '';
    return `${sign}${this.change}%`;
  }

  get changeIcon(): LucideIconData {
    return this.isPositiveChange ? this.TrendingUpIcon : this.TrendingDownIcon;
  }
}

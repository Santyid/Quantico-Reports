import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BarVerticalSize = 'large' | 'medium' | 'small' | 'x-small';
export type BarChartVariant = 'primary' | 'secondary';

export interface BarVerticalItem {
  value: number;
  label?: string;
}

@Component({
  selector: 'app-bar-vertical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-vertical.component.html',
  styleUrl: './bar-vertical.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BarVerticalComponent {
  @Input() size: BarVerticalSize = 'large';
  @Input() variant: BarChartVariant = 'primary';
  @Input() items: BarVerticalItem[] = [];
  @Input() maxValue: number = 0;
  @Input() height: number = 350;
  @Input() gap: number = 8;
  @Input() showLabels: boolean = true;
  @Input() labels: string[] = [];

  get effectiveMax(): number {
    if (this.maxValue > 0) return this.maxValue;
    return Math.max(...this.items.map(i => i.value), 1);
  }

  get showValue(): boolean {
    return this.size === 'large' || this.size === 'medium';
  }

  getFillPercent(item: BarVerticalItem): number {
    return Math.min((item.value / this.effectiveMax) * 100, 100);
  }

  getDisplayValue(item: BarVerticalItem): string {
    return item.label ?? item.value.toString();
  }
}

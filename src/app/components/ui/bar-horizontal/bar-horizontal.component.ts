import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BarHorizontalSize = 'large' | 'medium' | 'small' | 'x-small';
export type BarHorizontalVariant = 'primary' | 'secondary';

export interface BarHorizontalItem {
  value: number;
  label?: string;
}

@Component({
  selector: 'app-bar-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-horizontal.component.html',
  styleUrl: './bar-horizontal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BarHorizontalComponent {
  @Input() size: BarHorizontalSize = 'large';
  @Input() variant: BarHorizontalVariant = 'primary';
  @Input() items: BarHorizontalItem[] = [];
  @Input() maxValue: number = 0;
  @Input() width: number = 350;
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

  getFillPercent(item: BarHorizontalItem): number {
    return Math.min((item.value / this.effectiveMax) * 100, 100);
  }

  getDisplayValue(item: BarHorizontalItem): string {
    return item.label ?? item.value.toString();
  }
}

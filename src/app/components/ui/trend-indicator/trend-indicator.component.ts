import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TrendingUp, TrendingDown } from 'lucide-angular';

export type TrendDirection = 'up' | 'down';

@Component({
  selector: 'app-trend-indicator',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './trend-indicator.component.html',
  styleUrl: './trend-indicator.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TrendIndicatorComponent {
  @Input() value: number = 0;
  @Input() direction: TrendDirection = 'up';
  @Input() suffix: string = '%';

  readonly TrendingUpIcon = TrendingUp;
  readonly TrendingDownIcon = TrendingDown;

  get isPositive(): boolean {
    return this.direction === 'up';
  }

  get displayValue(): string {
    return `${this.value}${this.suffix}`;
  }
}

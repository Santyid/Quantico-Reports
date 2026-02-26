import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Minus, Plus } from 'lucide-angular';

export interface KeywordSentiment {
  positive: number;
  neutral: number;
  negative: number;
}

export interface KeywordResult {
  keyword: string;
  sentiment: KeywordSentiment;
  total: number;
}

@Component({
  selector: 'app-keyword-results',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './keyword-results.component.html',
  styleUrl: './keyword-results.component.scss'
})
export class KeywordResultsComponent {
  readonly MinusIcon = Minus;
  readonly PlusIcon = Plus;

  @Input() results: KeywordResult[] = [];
  @Input() title: string = 'Resultados de Keywords';
  @Input() isCollapsed: boolean = false;

  @Output() collapse = new EventEmitter<boolean>();

  // Legend items
  readonly legendItems = [
    { label: 'Positivo', color: '#3ace76' },
    { label: 'Neutro', color: '#a8d5e5' },
    { label: 'Negativo', color: '#f07070' }
  ];

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapse.emit(this.isCollapsed);
  }

  getPercentage(value: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
  }

  getBarWidth(value: number, total: number): string {
    if (total === 0) return '0%';
    return `${(value / total) * 100}%`;
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, LucideIconData } from 'lucide-angular';

export type InsightCardVariant = 'default' | 'highlight' | 'warning' | 'success';

@Component({
  selector: 'app-insight-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './insight-card.component.html',
  styleUrl: './insight-card.component.scss'
})
export class InsightCardComponent {
  readonly SparklesIcon = Sparkles;

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() icon?: LucideIconData;
  @Input() variant: InsightCardVariant = 'default';
  @Input() showAiBadge: boolean = true;

  get displayIcon(): LucideIconData {
    return this.icon ?? this.SparklesIcon;
  }

  get actionPrefix(): string | null {
    const match = this.content.match(/^(ACCIÓN:)\s*/i);
    return match ? match[1] : null;
  }

  get actionContent(): string {
    return this.content.replace(/^ACCIÓN:\s*/i, '');
  }
}

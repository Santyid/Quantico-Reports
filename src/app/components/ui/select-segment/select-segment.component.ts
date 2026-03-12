import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Check } from 'lucide-angular';

export interface SelectSegmentOption {
  id: string;
  title: string;
  description: string;
  recommended?: boolean;
}

@Component({
  selector: 'app-select-segment',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './select-segment.component.html',
  styleUrl: './select-segment.component.scss'
})
export class SelectSegmentComponent {
  @Input() options: SelectSegmentOption[] = [];
  @Input() selectedId: string | null = null;
  @Output() selectedIdChange = new EventEmitter<string | null>();
  @Output() selectionChange = new EventEmitter<SelectSegmentOption>();

  readonly CheckIcon = Check;
  hoveredId: string | null = null;

  isSelected(option: SelectSegmentOption): boolean {
    return this.selectedId === option.id;
  }

  onSelect(option: SelectSegmentOption): void {
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

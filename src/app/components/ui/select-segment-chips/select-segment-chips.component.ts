import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X } from 'lucide-angular';

export interface ChipData {
  label: string;
  removable?: boolean;
}

export interface SelectSegmentChipsOption {
  id: string;
  name: string;
  chips?: ChipData[];
}

@Component({
  selector: 'app-select-segment-chips',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './select-segment-chips.component.html',
  styleUrl: './select-segment-chips.component.scss'
})
export class SelectSegmentChipsComponent {
  @Input() options: SelectSegmentChipsOption[] = [];
  @Input() selectedId: string | null = null;
  @Input() size: 'large' | 'medium' | 'small' = 'large';
  @Output() selectedIdChange = new EventEmitter<string | null>();
  @Output() selectionChange = new EventEmitter<SelectSegmentChipsOption>();
  @Output() chipRemoved = new EventEmitter<{ option: SelectSegmentChipsOption; chip: ChipData }>();

  readonly XIcon = X;
  hoveredId: string | null = null;

  isSelected(option: SelectSegmentChipsOption): boolean {
    return this.selectedId === option.id;
  }

  onSelect(option: SelectSegmentChipsOption): void {
    this.selectedId = option.id;
    this.selectedIdChange.emit(option.id);
    this.selectionChange.emit(option);
  }

  onRemoveChip(event: Event, option: SelectSegmentChipsOption, chip: ChipData): void {
    event.stopPropagation();
    this.chipRemoved.emit({ option, chip });
  }

  onMouseEnter(id: string): void {
    this.hoveredId = id;
  }

  onMouseLeave(): void {
    this.hoveredId = null;
  }
}

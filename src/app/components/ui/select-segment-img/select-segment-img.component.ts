import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectSegmentImgOption {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-select-segment-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-segment-img.component.html',
  styleUrl: './select-segment-img.component.scss'
})
export class SelectSegmentImgComponent {
  @Input() options: SelectSegmentImgOption[] = [];
  @Input() selectedId: string | null = null;
  @Output() selectedIdChange = new EventEmitter<string | null>();
  @Output() selectionChange = new EventEmitter<SelectSegmentImgOption>();

  hoveredId: string | null = null;

  isSelected(option: SelectSegmentImgOption): boolean {
    return this.selectedId === option.id;
  }

  onSelect(option: SelectSegmentImgOption): void {
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

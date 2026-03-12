import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectColorpickerOption {
  id: string;
  name: string;
  color: string;
}

@Component({
  selector: 'app-select-colorpicker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-colorpicker.component.html',
  styleUrl: './select-colorpicker.component.scss'
})
export class SelectColorpickerComponent {
  @Input() options: SelectColorpickerOption[] = [];
  @Input() selectedId: string | null = null;
  @Output() selectedIdChange = new EventEmitter<string | null>();
  @Output() selectionChange = new EventEmitter<SelectColorpickerOption>();

  hoveredId: string | null = null;

  isSelected(option: SelectColorpickerOption): boolean {
    return this.selectedId === option.id;
  }

  getColorGradient(color: string): string {
    return `linear-gradient(180deg, ${color}80 0%, ${color} 100%)`;
  }

  onSelect(option: SelectColorpickerOption): void {
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

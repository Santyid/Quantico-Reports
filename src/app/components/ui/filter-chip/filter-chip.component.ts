import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, ChevronDown } from 'lucide-angular';

@Component({
  selector: 'app-filter-chip',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './filter-chip.component.html',
  styleUrl: './filter-chip.component.scss'
})
export class FilterChipComponent {
  readonly XIcon = X;
  readonly ChevronDownIcon = ChevronDown;

  @Input() label: string = '';
  @Input() value: string = '';
  @Input() removable: boolean = true;
  @Input() hasDropdown: boolean = false;
  @Input() disabled: boolean = false;

  @Output() remove = new EventEmitter<void>();
  @Output() clicked = new EventEmitter<void>();

  onRemove(event: Event): void {
    event.stopPropagation();
    this.remove.emit();
  }

  onClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}

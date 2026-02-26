import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, X } from 'lucide-angular';

export type ChipInputSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-chip-input',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './chip-input.component.html',
  styleUrl: './chip-input.component.scss'
})
export class ChipInputComponent {
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() size: ChipInputSize = 'small';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;

  @Output() chipsChange = new EventEmitter<string[]>();

  readonly XIcon = X;

  chips: string[] = [];
  inputValue = '';
  isFocused = false;

  get containerClasses(): string[] {
    const classes = ['chip-input__container'];
    classes.push(`chip-input__container--${this.size}`);
    if (this.isFocused) classes.push('chip-input__container--focused');
    if (this.disabled) classes.push('chip-input__container--disabled');
    return classes;
  }

  addChip(event: Event): void {
    event.preventDefault();
    const val = this.inputValue.trim();
    if (val && !this.chips.includes(val)) {
      this.chips.push(val);
      this.inputValue = '';
      this.chipsChange.emit([...this.chips]);
    }
  }

  removeChip(index: number): void {
    this.chips.splice(index, 1);
    this.chipsChange.emit([...this.chips]);
  }

  onBackspace(): void {
    if (this.inputValue === '' && this.chips.length > 0) {
      this.chips.pop();
      this.chipsChange.emit([...this.chips]);
    }
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
    const val = this.inputValue.trim();
    if (val && !this.chips.includes(val)) {
      this.chips.push(val);
      this.inputValue = '';
      this.chipsChange.emit([...this.chips]);
    }
  }
}

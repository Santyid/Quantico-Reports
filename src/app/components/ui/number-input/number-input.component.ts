import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Minus, Plus, ChevronUp, ChevronDown } from 'lucide-angular';

export type NumberInputVariant = 'buttons' | 'spinner';
export type NumberInputSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NumberInputComponent {
  @Input() value: number = 0;
  @Input() min?: number;
  @Input() max?: number;
  @Input() step: number = 1;
  @Input() variant: NumberInputVariant = 'buttons';
  @Input() size: NumberInputSize = 'large';
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<number>();

  readonly MinusIcon = Minus;
  readonly PlusIcon = Plus;
  readonly ChevronUpIcon = ChevronUp;
  readonly ChevronDownIcon = ChevronDown;

  get iconSize(): number {
    switch (this.size) {
      case 'small': return 14;
      case 'medium': return 16;
      case 'large': return 18;
    }
  }

  get canDecrement(): boolean {
    if (this.disabled) return false;
    if (this.min !== undefined) return this.value - this.step >= this.min;
    return true;
  }

  get canIncrement(): boolean {
    if (this.disabled) return false;
    if (this.max !== undefined) return this.value + this.step <= this.max;
    return true;
  }

  increment(): void {
    if (!this.canIncrement) return;
    this.value += this.step;
    this.valueChange.emit(this.value);
  }

  decrement(): void {
    if (!this.canDecrement) return;
    this.value -= this.step;
    this.valueChange.emit(this.value);
  }
}

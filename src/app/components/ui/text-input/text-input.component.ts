import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

export type TextInputType = 'text' | 'email' | 'number' | 'date' | 'password';
export type TextInputSize = 'small' | 'medium' | 'large';

export interface TextInputConfig {
  type?: TextInputType;
  size?: TextInputSize;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  leftIcon?: LucideIconData;
  rightIcon?: LucideIconData;
  min?: number | string;
  max?: number | string;
  step?: number;
  errorMessage?: string;
}

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() type: TextInputType = 'text';
  @Input() size: TextInputSize = 'large';
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() leftIcon?: LucideIconData;
  @Input() rightIcon?: LucideIconData;
  @Input() min?: number | string;
  @Input() max?: number | string;
  @Input() step?: number;
  @Input() errorMessage?: string;
  @Input() ariaLabel?: string;
  @Input()
  set value(val: string | number | null) {
    this._value = val ?? '';
  }
  get value(): string | number {
    return this._value;
  }

  @Output() valueChange = new EventEmitter<string | number>();
  @Output() blur = new EventEmitter<void>();
  @Output() rightIconClick = new EventEmitter<void>();

  private _value: string | number = '';
  isFocused: boolean = false;

  private onChange: (value: string | number) => void = () => {};
  private onTouched: () => void = () => {};

  get iconSize(): number {
    return this.size === 'small' ? 16 : 20;
  }

  get inputClasses(): string[] {
    const classes = ['app-text-input'];

    classes.push(`app-text-input--${this.size}`);

    if (this.disabled) {
      classes.push('app-text-input--disabled');
    }

    if (this.isFocused) {
      classes.push('app-text-input--focused');
    }

    if (this.errorMessage) {
      classes.push('app-text-input--error');
    }

    if (this.value) {
      classes.push('app-text-input--has-value');
    }

    return classes;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = this.type === 'number' ? Number(target.value) : target.value;
    this.value = newValue;
    this.onChange(newValue);
    this.valueChange.emit(newValue);
  }

  onFocus(): void {
    this.isFocused = true;
  }

  onBlur(): void {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit();
  }

  onRightIconClick(): void {
    this.rightIconClick.emit();
  }

  // ControlValueAccessor implementation
  writeValue(value: string | number | null): void {
    this._value = value ?? '';
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

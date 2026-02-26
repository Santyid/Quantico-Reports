import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, LucideIconData, ChevronDown } from 'lucide-angular';

export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
  icon?: LucideIconData;
}

export interface SelectConfig {
  size?: SelectSize;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  leftIcon?: LucideIconData;
  showChevron?: boolean;
  options?: SelectOption[];
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  // Lucide icons
  readonly ChevronDownIcon = ChevronDown;

  @Input() size: SelectSize = 'large';
  @Input() placeholder: string = 'Placeholder input';
  @Input() label?: string;
  @Input() disabled: boolean = false;
  @Input() leftIcon?: LucideIconData;
  @Input() showChevron: boolean = true;
  @Input() options: SelectOption[] = [];
  @Input() ariaLabel?: string;
  @Input() set value(val: string | number | null) {
    this.writeValue(val);
  }

  @Output() selectionChange = new EventEmitter<SelectOption | null>();

  // Internal state
  isOpen: boolean = false;
  selectedOption: SelectOption | null = null;

  // ControlValueAccessor
  private onChange: (value: string | number | null) => void = () => {};
  private onTouched: () => void = () => {};

  get iconSize(): number {
    return this.size === 'small' ? 16 : 20;
  }

  get selectClasses(): string[] {
    const classes = ['app-select'];

    classes.push(`app-select--${this.size}`);

    if (this.disabled) {
      classes.push('app-select--disabled');
    }

    if (this.isOpen) {
      classes.push('app-select--open');
    }

    if (this.selectedOption) {
      classes.push('app-select--has-value');
    }

    return classes;
  }

  get displayValue(): string {
    return this.selectedOption ? this.selectedOption.label : this.placeholder;
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      this.onTouched();
    }
  }

  selectOption(option: SelectOption): void {
    if (option.disabled) return;

    this.selectedOption = option;
    this.isOpen = false;
    this.onChange(option.value);
    this.selectionChange.emit(option);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (this.disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.toggleDropdown();
        break;
      case 'Escape':
        this.isOpen = false;
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen) {
          this.isOpen = true;
        } else {
          this.focusNextOption();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (this.isOpen) {
          this.focusPreviousOption();
        }
        break;
    }
  }

  private focusNextOption(): void {
    const currentIndex = this.selectedOption
      ? this.options.findIndex(o => o.value === this.selectedOption!.value)
      : -1;
    const nextIndex = currentIndex + 1;
    if (nextIndex < this.options.length && !this.options[nextIndex].disabled) {
      this.selectOption(this.options[nextIndex]);
    }
  }

  private focusPreviousOption(): void {
    const currentIndex = this.selectedOption
      ? this.options.findIndex(o => o.value === this.selectedOption!.value)
      : this.options.length;
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0 && !this.options[prevIndex].disabled) {
      this.selectOption(this.options[prevIndex]);
    }
  }

  onClickOutside(event: Event): void {
    this.isOpen = false;
  }

  // ControlValueAccessor implementation
  writeValue(value: string | number | null): void {
    if (value === null || value === undefined) {
      this.selectedOption = null;
    } else {
      this.selectedOption = this.options.find(o => o.value === value) || null;
    }
  }

  registerOnChange(fn: (value: string | number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

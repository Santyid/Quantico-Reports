import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

export interface ChannelOption {
  value: string;
  label: string;
  description?: string;
  icon?: LucideIconData;
  image?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-channel-selector',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './channel-selector.component.html',
  styleUrl: './channel-selector.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChannelSelectorComponent),
      multi: true
    }
  ]
})
export class ChannelSelectorComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() options: ChannelOption[] = [];
  @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
  @Input() disabled: boolean = false;

  selectedValues: string[] = [];

  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};

  isSelected(value: string): boolean {
    return this.selectedValues.includes(value);
  }

  toggleOption(option: ChannelOption): void {
    if (option.disabled || this.disabled) return;

    const index = this.selectedValues.indexOf(option.value);
    if (index > -1) {
      this.selectedValues = this.selectedValues.filter(v => v !== option.value);
    } else {
      this.selectedValues = [...this.selectedValues, option.value];
    }

    this.onChange(this.selectedValues);
    this.onTouched();
  }

  onKeyDown(event: KeyboardEvent, option: ChannelOption): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleOption(option);
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: string[]): void {
    this.selectedValues = value || [];
  }

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

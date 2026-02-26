import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CheckboxComponent } from '../checkbox/checkbox.component';

export interface CheckboxOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-checkbox-group',
  standalone: true,
  imports: [FormsModule, CheckboxComponent],
  template: `
    <div class="checkbox-group">
      @if (label) {
        <label class="checkbox-group__label">{{ label }}</label>
      }
      <div class="checkbox-group__options" [class.checkbox-group__options--horizontal]="layout === 'horizontal'">
        @for (option of options; track option.value) {
          <app-checkbox
            [label]="option.label"
            [disabled]="disabled"
            [ngModel]="isSelected(option.value)"
            (change)="onOptionChange(option.value, $event)">
          </app-checkbox>
        }
      </div>
    </div>
  `,
  styles: [`
    @import '../../../../styles/tokens';

    .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 12px;

      &__label {
        font-family: $select-font-family;
        font-size: 14px;
        font-weight: 600;
        color: $grey-500;
      }

      &__options {
        display: flex;
        flex-direction: column;
        gap: 12px;

        &--horizontal {
          flex-direction: row;
          flex-wrap: wrap;
          gap: 24px;
        }
      }
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGroupComponent),
      multi: true
    }
  ]
})
export class CheckboxGroupComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() options: CheckboxOption[] = [];
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
  @Input() disabled = false;

  selectedValues: string[] = [];

  private onChange: (value: string[]) => void = () => {};
  private onTouched: () => void = () => {};

  isSelected(value: string): boolean {
    return this.selectedValues.includes(value);
  }

  onOptionChange(value: string, checked: boolean): void {
    if (checked) {
      if (!this.selectedValues.includes(value)) {
        this.selectedValues = [...this.selectedValues, value];
      }
    } else {
      this.selectedValues = this.selectedValues.filter(v => v !== value);
    }
    this.onChange(this.selectedValues);
    this.onTouched();
  }

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

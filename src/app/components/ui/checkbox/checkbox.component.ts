import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, Check } from 'lucide-angular';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <label class="checkbox" [class.checkbox--disabled]="disabled">
      <button
        type="button"
        class="checkbox__box"
        [class.checkbox__box--checked]="checked"
        [class.checkbox__box--disabled]="disabled"
        [attr.aria-checked]="checked"
        [attr.aria-disabled]="disabled"
        role="checkbox"
        (click)="toggle()"
        (keydown.space)="toggle(); $event.preventDefault()">
        @if (checked) {
          <lucide-icon [img]="CheckIcon" [size]="14" [strokeWidth]="3" class="checkbox__icon"></lucide-icon>
        }
      </button>
      @if (label) {
        <span class="checkbox__label">{{ label }}</span>
      }
    </label>
  `,
  styles: [`
    @import '../../../../styles/tokens';

    .checkbox {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      user-select: none;

      &--disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      &__box {
        position: relative;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        border: 1px solid #c3c3c3;
        background-color: $white-500;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;

        &:hover:not(.checkbox__box--disabled) {
          border-color: #9e54e2;
        }

        &:focus-visible {
          outline: 2px solid #9e54e2;
          outline-offset: 2px;
        }

        &--checked {
          background-color: #9e54e2;
          border-color: #9e54e2;
        }

        &--disabled {
          cursor: not-allowed;
        }
      }

      &__icon {
        color: $white-500;
      }

      &__label {
        font-family: $table-body-font-family;
        font-size: 14px;
        font-weight: 500;
        color: $grey-500;
      }
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() disabled = false;
  @Output() change = new EventEmitter<boolean>();

  readonly CheckIcon = Check;
  checked = false;

  private onChange: (value: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  toggle(): void {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
    this.change.emit(this.checked);
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

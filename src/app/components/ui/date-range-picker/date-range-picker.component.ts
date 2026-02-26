import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, ChevronLeft, ChevronRight, Calendar } from 'lucide-angular';

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true
    }
  ]
})
export class DateRangePickerComponent implements ControlValueAccessor {
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  readonly CalendarIcon = Calendar;

  @Input() disabled: boolean = false;
  @Input() set value(val: DateRange) {
    if (val) {
      this._value = val;
    }
  }
  get value(): DateRange {
    return this._value;
  }

  @Output() rangeChange = new EventEmitter<DateRange>();

  private _value: DateRange = {
    startDate: new Date(),
    endDate: new Date()
  };

  private onChange: (value: DateRange) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    // Initialize with today's date range
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 0, 0);

    this._value = {
      startDate: today,
      endDate: endOfDay
    };
  }

  writeValue(value: DateRange): void {
    if (value) {
      this._value = value;
    }
  }

  registerOnChange(fn: (value: DateRange) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  previousDay(): void {
    if (this.disabled) return;

    const newStart = new Date(this._value.startDate);
    newStart.setDate(newStart.getDate() - 1);
    const newEnd = new Date(this._value.endDate);
    newEnd.setDate(newEnd.getDate() - 1);

    this._value = { startDate: newStart, endDate: newEnd };
    this.onChange(this._value);
    this.rangeChange.emit(this._value);
  }

  nextDay(): void {
    if (this.disabled) return;

    const newStart = new Date(this._value.startDate);
    newStart.setDate(newStart.getDate() + 1);
    const newEnd = new Date(this._value.endDate);
    newEnd.setDate(newEnd.getDate() + 1);

    this._value = { startDate: newStart, endDate: newEnd };
    this.onChange(this._value);
    this.rangeChange.emit(this._value);
  }

  onStartDateClick(): void {
    if (this.disabled) return;
    this.onTouched();
    // Could open a date picker modal here
  }

  onEndDateClick(): void {
    if (this.disabled) return;
    this.onTouched();
    // Could open a date picker modal here
  }
}

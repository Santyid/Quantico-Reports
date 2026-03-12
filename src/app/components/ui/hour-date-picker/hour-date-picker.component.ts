import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ElementRef,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown
} from 'lucide-angular';

export type HourDatePickerSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-hour-date-picker',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hour-date-picker.component.html',
  styleUrl: './hour-date-picker.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HourDatePickerComponent {
  readonly CalendarIcon = Calendar;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  readonly ChevronUpIcon = ChevronUp;
  readonly ChevronDownIcon = ChevronDown;

  @Input() label: string = '';
  @Input() size: HourDatePickerSize = 'large';
  @Input() disabled: boolean = false;

  @Input() set value(val: Date | null) {
    if (val) {
      this._value = new Date(val);
      this.syncTimeFromValue();
    } else {
      this._value = null;
    }
  }
  get value(): Date | null {
    return this._value;
  }

  @Output() valueChange = new EventEmitter<Date>();

  private _value: Date | null = null;

  isOpen: boolean = false;
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  hours: number = 12;
  minutes: number = 0;
  period: 'AM' | 'PM' = 'AM';

  readonly weekDays: string[] = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
  readonly monthNames: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.isOpen = false;
  }

  get iconSize(): number {
    return this.size === 'small' ? 16 : 20;
  }

  get triggerClasses(): string {
    const classes = ['hour-date-picker__trigger'];
    classes.push(`hour-date-picker__trigger--${this.size}`);
    if (this.disabled) classes.push('hour-date-picker__trigger--disabled');
    if (this.isOpen) classes.push('hour-date-picker__trigger--open');
    if (this._value) classes.push('hour-date-picker__trigger--has-value');
    return classes.join(' ');
  }

  get displayValue(): string {
    if (!this._value) return '';
    const day = String(this._value.getDate()).padStart(2, '0');
    const month = String(this._value.getMonth() + 1).padStart(2, '0');
    const year = this._value.getFullYear();
    const h = this.hours;
    const m = String(this.minutes).padStart(2, '0');
    const hStr = String(h).padStart(2, '0');
    return `${day}-${month}-${year}  ${hStr}:${m} ${this.period}`;
  }

  get currentMonthName(): string {
    return `${this.monthNames[this.currentMonth]} ${this.currentYear}`;
  }

  get calendarDays(): (number | null)[] {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();

    // Monday = 0, Sunday = 6
    let startDayOfWeek = firstDay.getDay() - 1;
    if (startDayOfWeek < 0) startDayOfWeek = 6;

    const days: (number | null)[] = [];

    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      days.push(d);
    }

    return days;
  }

  get formattedHours(): string {
    return String(this.hours).padStart(2, '0');
  }

  get formattedMinutes(): string {
    return String(this.minutes).padStart(2, '0');
  }

  toggleDropdown(): void {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;

    if (this.isOpen && this._value) {
      this.currentMonth = this._value.getMonth();
      this.currentYear = this._value.getFullYear();
    }
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
  }

  selectDay(day: number): void {
    const selected = new Date(this.currentYear, this.currentMonth, day);
    this.applyTimeToDate(selected);
    this._value = selected;
    this.valueChange.emit(new Date(this._value));
  }

  isDaySelected(day: number): boolean {
    if (!this._value) return false;
    return (
      this._value.getDate() === day &&
      this._value.getMonth() === this.currentMonth &&
      this._value.getFullYear() === this.currentYear
    );
  }

  isToday(day: number): boolean {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === this.currentMonth &&
      today.getFullYear() === this.currentYear
    );
  }

  // Time spinner methods
  incrementHours(): void {
    this.hours = this.hours >= 12 ? 1 : this.hours + 1;
    this.emitUpdatedValue();
  }

  decrementHours(): void {
    this.hours = this.hours <= 1 ? 12 : this.hours - 1;
    this.emitUpdatedValue();
  }

  incrementMinutes(): void {
    this.minutes = this.minutes >= 59 ? 0 : this.minutes + 1;
    this.emitUpdatedValue();
  }

  decrementMinutes(): void {
    this.minutes = this.minutes <= 0 ? 59 : this.minutes - 1;
    this.emitUpdatedValue();
  }

  togglePeriod(): void {
    this.period = this.period === 'AM' ? 'PM' : 'AM';
    this.emitUpdatedValue();
  }

  private syncTimeFromValue(): void {
    if (!this._value) return;
    let h = this._value.getHours();
    this.minutes = this._value.getMinutes();
    if (h === 0) {
      this.hours = 12;
      this.period = 'AM';
    } else if (h === 12) {
      this.hours = 12;
      this.period = 'PM';
    } else if (h > 12) {
      this.hours = h - 12;
      this.period = 'PM';
    } else {
      this.hours = h;
      this.period = 'AM';
    }
  }

  private applyTimeToDate(date: Date): void {
    let h = this.hours;
    if (this.period === 'AM') {
      h = h === 12 ? 0 : h;
    } else {
      h = h === 12 ? 12 : h + 12;
    }
    date.setHours(h, this.minutes, 0, 0);
  }

  private emitUpdatedValue(): void {
    if (!this._value) return;
    const updated = new Date(this._value);
    this.applyTimeToDate(updated);
    this._value = updated;
    this.valueChange.emit(new Date(this._value));
  }
}

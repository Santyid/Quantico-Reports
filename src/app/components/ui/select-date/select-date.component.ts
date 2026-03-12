import { Component, Input, Output, EventEmitter, HostListener, ViewEncapsulation, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Calendar, ChevronLeft, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-select-date',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SelectDateComponent {
  @Input() label = '';
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  @Input() disabled = false;

  @Input()
  set value(val: string) {
    if (val) {
      const date = new Date(val);
      if (!isNaN(date.getTime())) {
        this._selectedDate = date;
        this.currentMonth = date.getMonth();
        this.currentYear = date.getFullYear();
      }
    } else {
      this._selectedDate = null;
    }
  }

  @Output() valueChange = new EventEmitter<string>();

  readonly CalendarIcon = Calendar;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;

  isOpen = false;
  currentMonth = new Date().getMonth();
  currentYear = new Date().getFullYear();

  private _selectedDate: Date | null = null;

  readonly dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  readonly monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  toggle(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  get formattedDate(): string {
    if (!this._selectedDate) {
      return '';
    }
    const day = this._selectedDate.getDate().toString().padStart(2, '0');
    const month = (this._selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const year = this._selectedDate.getFullYear();
    return `${month}/${day}/${year}`;
  }

  get currentMonthName(): string {
    return this.monthNames[this.currentMonth];
  }

  prevMonth(): void {
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

  getDaysInMonth(): { day: number; currentMonth: boolean; date: Date }[] {
    const days: { day: number; currentMonth: boolean; date: Date }[] = [];
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const startDayOfWeek = firstDay.getDay();

    // Previous month days
    const prevMonthLastDay = new Date(this.currentYear, this.currentMonth, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const d = prevMonthLastDay - i;
      days.push({
        day: d,
        currentMonth: false,
        date: new Date(this.currentYear, this.currentMonth - 1, d)
      });
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        day: i,
        currentMonth: true,
        date: new Date(this.currentYear, this.currentMonth, i)
      });
    }

    // Next month days to fill 6 rows (42 cells)
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({
        day: i,
        currentMonth: false,
        date: new Date(this.currentYear, this.currentMonth + 1, i)
      });
    }

    return days;
  }

  selectDay(dayObj: { day: number; currentMonth: boolean; date: Date }): void {
    this._selectedDate = dayObj.date;
    this.currentMonth = dayObj.date.getMonth();
    this.currentYear = dayObj.date.getFullYear();
    const iso = dayObj.date.toISOString().split('T')[0];
    this.valueChange.emit(iso);
    this.isOpen = false;
  }

  isSelected(date: Date): boolean {
    if (!this._selectedDate) return false;
    return (
      date.getDate() === this._selectedDate.getDate() &&
      date.getMonth() === this._selectedDate.getMonth() &&
      date.getFullYear() === this._selectedDate.getFullYear()
    );
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
}

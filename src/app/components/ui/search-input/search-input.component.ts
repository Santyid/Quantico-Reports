import { Component, Input, Output, EventEmitter, forwardRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LucideAngularModule, Search, X } from 'lucide-angular';

export type SearchInputSize = 'small' | 'medium' | 'large';

export interface SearchInputConfig {
  size?: SearchInputSize;
  placeholder?: string;
  showClearIcon?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  expandable?: boolean;
}

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchInputComponent),
      multi: true
    }
  ]
})
export class SearchInputComponent implements ControlValueAccessor, AfterViewInit {
  // Lucide icons
  readonly SearchIcon = Search;
  readonly XIcon = X;

  @Input() size: SearchInputSize = 'large';
  @Input() placeholder: string = 'Buscar...';
  @Input() showClearIcon: boolean = true;
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() expandable: boolean = false;
  @Input() ariaLabel?: string;

  @ViewChild('textareaRef') textareaRef!: ElementRef<HTMLTextAreaElement>;

  @Output() valueChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();
  @Output() cleared = new EventEmitter<void>();

  // Internal state
  value: string = '';
  isFocused: boolean = false;

  // ControlValueAccessor
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  get searchIconSize(): number {
    return 24;
  }

  get clearIconSize(): number {
    return 20;
  }

  get inputClasses(): string[] {
    const classes = ['search-input'];

    classes.push(`search-input--${this.size}`);

    if (this.disabled) {
      classes.push('search-input--disabled');
    }

    if (this.isFocused) {
      classes.push('search-input--focused');
    }

    if (this.value) {
      classes.push('search-input--has-value');
    }

    if (this.fullWidth) {
      classes.push('search-input--full-width');
    }

    if (this.expandable) {
      classes.push('search-input--expandable');
    }

    return classes;
  }

  ngAfterViewInit(): void {
    if (this.expandable) {
      this.adjustHeight();
    }
  }

  private adjustHeight(): void {
    if (this.textareaRef) {
      const textarea = this.textareaRef.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

  get showClear(): boolean {
    return this.showClearIcon && this.value.length > 0 && !this.disabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    if (this.expandable) {
      this.adjustHeight();
    }
  }

  onFocus(): void {
    this.isFocused = true;
    this.onTouched();
  }

  onBlur(): void {
    this.isFocused = false;
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !this.disabled) {
      this.search.emit(this.value);
    }

    if (event.key === 'Escape' && this.value) {
      this.clearValue();
    }
  }

  clearValue(): void {
    this.value = '';
    this.onChange(this.value);
    this.valueChange.emit(this.value);
    this.cleared.emit();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

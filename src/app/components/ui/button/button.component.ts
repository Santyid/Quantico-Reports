import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { LucideAngularModule, LucideIconData } from 'lucide-angular';

export type ButtonVariant = 'primary' | 'secondary' | 'white' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

export interface ButtonConfig {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: ButtonType;
  leftIcon?: LucideIconData;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() type: ButtonType = 'button';
  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() leftIcon?: LucideIconData;
  @Input() ariaLabel?: string;

  @Output() clicked = new EventEmitter<MouseEvent>();

  get iconSize(): number {
    switch (this.size) {
      case 'small': return 16;
      case 'large': return 20;
      default: return 18;
    }
  }

  get buttonClasses(): string[] {
    const classes = ['app-button'];

    // Add variant class
    classes.push(`app-button--${this.variant}`);

    // Add size class
    classes.push(`app-button--${this.size}`);

    // Add full width class if needed
    if (this.fullWidth) {
      classes.push('app-button--full-width');
    }

    // Add disabled class if needed
    if (this.disabled) {
      classes.push('app-button--disabled');
    }

    // Add icon class if icon is present
    if (this.leftIcon) {
      classes.push('app-button--with-icon');
    }

    return classes;
  }

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    // Handle Enter and Space keys for accessibility
    if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
      event.preventDefault();
      const mouseEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      this.clicked.emit(mouseEvent);
    }
  }
}

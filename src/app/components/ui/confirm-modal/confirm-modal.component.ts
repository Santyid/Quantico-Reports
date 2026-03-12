import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TriangleAlert, CircleCheckBig, CircleX, X, LucideIconData } from 'lucide-angular';
import { ButtonComponent } from '../button/button.component';

export type ConfirmModalVariant = 'general' | 'confirmation' | 'alert' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmModalComponent {
  @Input() variant: ConfirmModalVariant = 'general';
  @Input() title = '';
  @Input() message = '';
  @Input() cancelText = 'Cancelar';
  @Input() confirmText = 'Confirmar';
  @Input() visible = false;

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  readonly XIcon = X;

  private readonly iconMap: Record<string, LucideIconData> = {
    general: CircleCheckBig,
    confirmation: CircleCheckBig,
    alert: TriangleAlert,
    error: CircleX,
    warning: TriangleAlert,
    info: CircleCheckBig,
  };

  get variantIcon(): LucideIconData {
    return this.iconMap[this.variant] || CircleCheckBig;
  }

  get resolvedVariant(): string {
    // Map legacy variants to the new variant system for CSS
    if (this.variant === 'info') return 'general';
    if (this.variant === 'warning') return 'alert';
    return this.variant;
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  onConfirm(): void {
    this.confirmed.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('confirm-modal__overlay')) {
      this.cancelled.emit();
    }
  }
}

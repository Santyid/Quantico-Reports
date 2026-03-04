import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TriangleAlert, X } from 'lucide-angular';
import { ButtonComponent } from '../button/button.component';

export type ConfirmModalVariant = 'warning' | 'error' | 'info';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmModalComponent {
  @Input() variant: ConfirmModalVariant = 'warning';
  @Input() title = '';
  @Input() message = '';
  @Input() cancelText = 'Cancelar';
  @Input() confirmText = 'Confirmar';
  @Input() visible = false;

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  readonly TriangleAlertIcon = TriangleAlert;
  readonly XIcon = X;

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

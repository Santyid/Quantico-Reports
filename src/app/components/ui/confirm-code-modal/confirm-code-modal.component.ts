import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, TriangleAlert, X, Copy, Check } from 'lucide-angular';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-confirm-code-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, ButtonComponent],
  templateUrl: './confirm-code-modal.component.html',
  styleUrl: './confirm-code-modal.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmCodeModalComponent {
  @Input() title = '¿Estás seguro de eliminar (X)?';
  @Input() message = '';
  @Input() code = '01234';
  @Input() inputPlaceholder = 'Escribe aquí el código de confirmación';
  @Input() cancelText = 'Cancelar';
  @Input() confirmText = 'Eliminar';
  @Input() visible = false;

  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  readonly TriangleAlertIcon = TriangleAlert;
  readonly XIcon = X;
  readonly CopyIcon = Copy;
  readonly CheckIcon = Check;

  inputValue = '';
  codeCopied = false;

  get isCodeValid(): boolean {
    return this.inputValue.trim() === this.code;
  }

  copyCode(): void {
    navigator.clipboard.writeText(this.code);
    this.codeCopied = true;
    setTimeout(() => this.codeCopied = false, 1500);
  }

  onCancel(): void {
    this.inputValue = '';
    this.cancelled.emit();
  }

  onConfirm(): void {
    if (this.isCodeValid) {
      this.inputValue = '';
      this.confirmed.emit();
    }
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('confirm-code-modal__overlay')) {
      this.onCancel();
    }
  }
}

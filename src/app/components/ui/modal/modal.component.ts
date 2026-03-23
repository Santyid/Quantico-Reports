import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule, X } from 'lucide-angular';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [LucideAngularModule, ButtonComponent],
  template: `
    @if (isOpen) {
      <div class="modal-overlay" (click)="onOverlayClick($event)">
        <div class="modal" [style.max-width]="maxWidth" role="dialog" aria-modal="true">
          <!-- Header -->
          <div class="modal__header">
            <div class="modal__header-content">
              <h2 class="modal__title">{{ title }}</h2>
              @if (subtitle) {
                <p class="modal__subtitle">{{ subtitle }}</p>
              }
            </div>
            <button
              type="button"
              class="modal__close-btn"
              (click)="close.emit()"
              aria-label="Cerrar modal">
              <lucide-icon [img]="CloseIcon" [size]="20" [strokeWidth]="2"></lucide-icon>
            </button>
          </div>

          <!-- Content -->
          <div class="modal__content">
            <ng-content></ng-content>
          </div>

          <!-- Custom Footer Slot -->
          <ng-content select="[modal-footer]"></ng-content>

          <!-- Footer -->
          @if (showFooter) {
            <div class="modal__footer">
              <app-button
                variant="white"
                size="medium"
                type="button"
                (clicked)="cancel.emit()">
                {{ cancelText }}
              </app-button>
              <app-button
                variant="primary"
                size="medium"
                type="button"
                [disabled]="confirmDisabled"
                (clicked)="confirm.emit()">
                {{ confirmText }}
              </app-button>
            </div>
          }
        </div>
      </div>
    }
  `,
  styles: [`
    @import '../../../../styles/tokens';

    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
      animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .modal {
      background-color: $white-500;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      width: 100%;
      max-height: calc(100vh - 40px);
      display: flex;
      flex-direction: column;
      animation: slideIn 0.2s ease;

      &__header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 24px 24px 16px;
        gap: 16px;
      }

      &__header-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      &__title {
        font-family: $table-title-font-family;
        font-size: 20px;
        font-weight: 700;
        color: $grey-600;
        margin: 0;
        line-height: 1.3;
      }

      &__subtitle {
        font-family: $table-body-font-family;
        font-size: 14px;
        font-weight: 400;
        color: $grey-300;
        margin: 0;
        line-height: 1.4;
      }

      &__close-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        padding: 0;
        border: none;
        border-radius: 8px;
        background-color: transparent;
        color: $grey-400;
        cursor: pointer;
        transition: all 0.2s ease;
        flex-shrink: 0;

        &:hover {
          background-color: #f0f0f0;
          color: $grey-500;
        }

        &:focus-visible {
          outline: 2px solid $primary-500;
          outline-offset: 2px;
        }
      }

      &__content {
        padding: 0 24px 24px;
        overflow-y: auto;
        flex: 1;
      }

      &__footer {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        padding: 16px 24px 24px;
        border-top: 1px solid #ececec;
      }
    }

    @media (max-width: 480px) {
      .modal {
        &__header {
          padding: 20px 20px 12px;
        }

        &__content {
          padding: 0 20px 20px;
        }

        &__footer {
          padding: 12px 20px 20px;
          flex-direction: column-reverse;

          app-button {
            width: 100%;
          }
        }
      }
    }
  `]
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() maxWidth = '500px';
  @Input() showFooter = true;
  @Input() cancelText = 'Cancelar';
  @Input() confirmText = 'Confirmar';
  @Input() confirmDisabled = false;
  @Input() closeOnOverlayClick = true;

  @Output() close = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  readonly CloseIcon = X;

  onOverlayClick(event: MouseEvent): void {
    if (this.closeOnOverlayClick && event.target === event.currentTarget) {
      this.close.emit();
    }
  }
}

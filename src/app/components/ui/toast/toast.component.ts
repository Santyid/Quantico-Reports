import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Check, X, AlertCircle, Info } from 'lucide-angular';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    @if (visible) {
      <div class="toast" [class]="'toast--' + type" [@fadeInOut]>
        <div class="toast__icon">
          <lucide-icon [img]="getIcon()" [size]="18" [strokeWidth]="2"></lucide-icon>
        </div>
        <span class="toast__message">{{ message }}</span>
        <button class="toast__close" (click)="close()">
          <lucide-icon [img]="XIcon" [size]="16" [strokeWidth]="2"></lucide-icon>
        </button>
      </div>
    }
  `,
  styles: [`
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      z-index: 9999;
      animation: slideIn 0.3s ease;
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .toast__icon { display: flex; }
    .toast--success .toast__icon { color: #3ace76; }
    .toast--error .toast__icon { color: #f44336; }
    .toast--warning .toast__icon { color: #f4b137; }
    .toast--info .toast__icon { color: #0061fe; }
    .toast__message { font-family: 'DM Sans', sans-serif; font-size: 14px; color: #262626; }
    .toast__close { display: flex; background: none; border: none; cursor: pointer; color: #7d7d7d; padding: 0; }
    .toast__close:hover { color: #262626; }
  `]
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() type: ToastType = 'success';
  @Input() visible: boolean = false;
  @Input() duration: number = 3000;
  @Output() visibleChange = new EventEmitter<boolean>();

  readonly CheckIcon = Check;
  readonly XIcon = X;
  readonly AlertIcon = AlertCircle;
  readonly InfoIcon = Info;

  private timeoutId: any;

  ngOnChanges(): void {
    if (this.visible && this.duration > 0) {
      this.startAutoClose();
    }
  }

  getIcon() {
    switch (this.type) {
      case 'success': return this.CheckIcon;
      case 'error': return this.XIcon;
      case 'warning': return this.AlertIcon;
      default: return this.InfoIcon;
    }
  }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private startAutoClose(): void {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.close(), this.duration);
  }
}

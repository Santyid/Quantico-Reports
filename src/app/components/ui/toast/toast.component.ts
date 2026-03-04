import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CircleCheckBig, X } from 'lucide-angular';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnDestroy {
  @Input() message = '';
  @Input() variant: ToastVariant = 'success';
  @Input() autoDismissMs = 4000;

  @Input() set visible(val: boolean) {
    if (val === this._visible) return;
    this._visible = val;

    if (val) {
      this.animVisible = true;
      this.cdr.detectChanges();
      if (this.autoDismissMs > 0) {
        if (this.timer) clearTimeout(this.timer);
        this.timer = setTimeout(() => this.dismiss(), this.autoDismissMs);
      }
    } else {
      this.animVisible = false;
      this.cdr.detectChanges();
      if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    }
  }
  get visible(): boolean { return this._visible; }

  @Output() visibleChange = new EventEmitter<boolean>();

  readonly CircleCheckBigIcon = CircleCheckBig;
  readonly XIcon = X;

  animVisible = false;
  private _visible = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  dismiss(): void {
    this.animVisible = false;
    this.cdr.detectChanges();
    setTimeout(() => this.visibleChange.emit(false), 300);
  }
}

import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X, Info } from 'lucide-angular';

export interface PublicationMetric {
  label: string;
  value: string | number;
}

export interface PublicationCollaborator {
  username: string;
  avatar?: string;
}

export interface PublicationDetailData {
  image: string;
  accountName: string;
  accountIcon?: string;
  date: string;
  type: string;
  description: string;
  collaborators?: PublicationCollaborator[];
  metrics: PublicationMetric[];
  profileActivity?: PublicationMetric[];
  postUrl?: string;
}

@Component({
  selector: 'app-publication-detail-modal',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './publication-detail-modal.component.html',
  styleUrl: './publication-detail-modal.component.scss'
})
export class PublicationDetailModalComponent {
  @Input() isOpen = false;
  @Input() data: PublicationDetailData | null = null;

  @Output() closed = new EventEmitter<void>();

  readonly CloseIcon = X;
  readonly InfoIcon = Info;

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isOpen) {
      this.closed.emit();
    }
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closed.emit();
    }
  }
}

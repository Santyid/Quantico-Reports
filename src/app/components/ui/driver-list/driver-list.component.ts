import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ThumbsUp, ThumbsDown, Quote, LucideIconData } from 'lucide-angular';

export interface Driver {
  driver: string;
  emotion: string;
  percentage: number;
  exampleComment: string;
  source: string;
  sourceHandle?: string;
}

export type DriverType = 'positive' | 'negative';

@Component({
  selector: 'app-driver-list',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './driver-list.component.html',
  styleUrl: './driver-list.component.scss'
})
export class DriverListComponent {
  readonly ThumbsUpIcon = ThumbsUp;
  readonly ThumbsDownIcon = ThumbsDown;
  readonly QuoteIcon = Quote;

  // Social media icon paths (same SVGs used in other components)
  private readonly socialIconPaths: Record<string, string> = {
    'instagram': 'images/instagram-icon.svg',
    'facebook': 'images/facebook-icon.svg',
    'twitter': 'images/x-twitter-icon.svg',
    'youtube': 'images/youtube-icon.svg',
    'linkedin': 'images/linkedin-icon.svg',
    'tiktok': 'images/tiktok-icon.svg',
    'google reviews': 'images/google-business-icon.svg',
    'google': 'images/google-business-icon.svg'
  };

  getSocialIconPath(source: string): string {
    const key = source.toLowerCase();
    return this.socialIconPaths[key] || 'images/instagram-icon.svg';
  }

  @Input() drivers: Driver[] = [];
  @Input() type: DriverType = 'positive';
  @Input() title?: string;
  @Input() maxItems: number = 5;

  get displayDrivers(): Driver[] {
    return this.drivers.slice(0, this.maxItems);
  }

  get headerIcon(): LucideIconData {
    return this.type === 'positive' ? this.ThumbsUpIcon : this.ThumbsDownIcon;
  }

  get defaultTitle(): string {
    return this.title ?? (this.type === 'positive' ? 'Drivers Positivos' : 'Drivers Negativos');
  }
}

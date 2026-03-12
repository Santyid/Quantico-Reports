import { Component, Input, ViewEncapsulation } from '@angular/core';

export type AvatarSocialSize = 'small' | 'medium' | 'large' | 'xlarge';

@Component({
  selector: 'app-avatar-social',
  standalone: true,
  templateUrl: './avatar-social.component.html',
  styleUrl: './avatar-social.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AvatarSocialComponent {
  @Input() avatarUrl = '';
  @Input() platformIconUrl?: string;
  @Input() size: AvatarSocialSize = 'large';
  @Input() alt = '';
  @Input() showBadge = true;
}

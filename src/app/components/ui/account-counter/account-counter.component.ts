import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LucideAngularModule, Users } from 'lucide-angular';

@Component({
  selector: 'app-account-counter',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './account-counter.component.html',
  styleUrls: ['./account-counter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AccountCounterComponent {
  @Input() count: number = 1;
  @Input() size: 'small' | 'medium' | 'large' = 'large';

  readonly UsersIcon = Users;
}

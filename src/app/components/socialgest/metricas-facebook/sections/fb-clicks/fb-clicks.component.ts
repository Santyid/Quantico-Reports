import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info, ArrowUpRight, MoreHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-fb-clicks',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-clicks.component.html',
  styleUrl: './fb-clicks.component.scss'
})
export class FbClicksComponent {
  readonly InfoIcon = Info;
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly MoreHorizontalIcon = MoreHorizontal;

  readonly actions = [
    { label: 'Clicks en publicaciones', value: '1.250', change: 12 },
    { label: 'Clicks en enlace', value: '890', change: 5 }
  ];
}

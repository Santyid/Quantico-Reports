import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowUpRight, Info } from 'lucide-angular';

@Component({
  selector: 'app-fb-movimiento-fans',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-movimiento-fans.component.html',
  styleUrl: './fb-movimiento-fans.component.scss'
})
export class FbMovimientoFansComponent {
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly InfoIcon = Info;

  readonly total = '12.450';
  readonly change = 8;
  readonly gained = '320';
  readonly lost = '45';
}

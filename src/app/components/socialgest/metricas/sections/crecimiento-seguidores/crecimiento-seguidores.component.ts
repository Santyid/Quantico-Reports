import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowUpRight, Info } from 'lucide-angular';

@Component({
  selector: 'app-crecimiento-seguidores',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './crecimiento-seguidores.component.html',
  styleUrl: './crecimiento-seguidores.component.scss'
})
export class CrecimientoSeguidoresComponent {
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly InfoIcon = Info;

  readonly total = '65.643';
  readonly change = 10;
  readonly gained = '1.500';
  readonly lost = '24';
}

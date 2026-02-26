import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info, ArrowUpRight, MoreHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-acciones-negocio',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './acciones-negocio.component.html',
  styleUrl: './acciones-negocio.component.scss'
})
export class AccionesNegocioComponent {
  readonly InfoIcon = Info;
  readonly ArrowUpRightIcon = ArrowUpRight;
  readonly MoreHorizontalIcon = MoreHorizontal;

  readonly actions = [
    { label: 'Visitas al perfil', value: '643', change: 10 },
    { label: 'Click en website', value: '340', change: 10 }
  ];
}

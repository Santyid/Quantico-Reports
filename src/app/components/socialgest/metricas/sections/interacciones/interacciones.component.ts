import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info, MoreHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-interacciones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './interacciones.component.html',
  styleUrl: './interacciones.component.scss'
})
export class InteraccionesComponent {
  readonly InfoIcon = Info;
  readonly MoreHorizontalIcon = MoreHorizontal;

  readonly total = '10.500';
  readonly types = [
    { label: 'Likes', value: 24, count: '2.500', color: '#0061fe' },
    { label: 'Comentarios', value: 14, count: '1.500', color: '#f47a37' },
    { label: 'Compartidos', value: 9, count: '900', color: '#3ace76' },
    { label: 'Guardados', value: 24, count: '2.500', color: '#9e54e2' },
    { label: 'Cuentas que interactuaron', value: 14, count: '1.500', color: '#f4b137' }
  ];
}

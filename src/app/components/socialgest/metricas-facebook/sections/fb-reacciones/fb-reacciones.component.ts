import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info, MoreHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-fb-reacciones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-reacciones.component.html',
  styleUrl: './fb-reacciones.component.scss'
})
export class FbReaccionesComponent {
  readonly InfoIcon = Info;
  readonly MoreHorizontalIcon = MoreHorizontal;

  readonly total = '8.340';
  readonly types = [
    { label: 'Me gusta', value: 40, count: '3.336', color: '#0061fe' },
    { label: 'Me encanta', value: 22, count: '1.835', color: '#f44336' },
    { label: 'Jaja', value: 15, count: '1.251', color: '#f4b137' },
    { label: 'Asombro', value: 10, count: '834', color: '#f47a37' },
    { label: 'Triste', value: 8, count: '667', color: '#9e54e2' },
    { label: 'Enfado', value: 5, count: '417', color: '#3ace76' }
  ];
}

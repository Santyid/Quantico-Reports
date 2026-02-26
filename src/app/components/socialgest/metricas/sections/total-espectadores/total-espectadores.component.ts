import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info, MoreHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-total-espectadores',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './total-espectadores.component.html',
  styleUrl: './total-espectadores.component.scss'
})
export class TotalEspectadoresComponent {
  readonly InfoIcon = Info;
  readonly MoreHorizontalIcon = MoreHorizontal;

  readonly total = '10.500';
  readonly segments = [
    { label: 'Seguidores', value: 51, color: '#0061fe', count: '2.500' },
    { label: 'No seguidores', value: 31, color: '#f47a37', count: '1.500' },
    { label: 'Desconocidos', value: 18, color: '#dae1ed', count: '900' }
  ];
}

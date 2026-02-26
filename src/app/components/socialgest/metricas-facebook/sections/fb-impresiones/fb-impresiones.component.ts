import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info, MoreHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-fb-impresiones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-impresiones.component.html',
  styleUrl: './fb-impresiones.component.scss'
})
export class FbImpresionesComponent {
  readonly InfoIcon = Info;
  readonly MoreHorizontalIcon = MoreHorizontal;

  readonly total = '85.200';
  readonly segments = [
    { label: 'Orgánicas', value: 55, color: '#0061fe', count: '46.860' },
    { label: 'Pagadas', value: 30, color: '#f47a37', count: '25.560' },
    { label: 'Virales', value: 15, color: '#3ace76', count: '12.780' }
  ];
}

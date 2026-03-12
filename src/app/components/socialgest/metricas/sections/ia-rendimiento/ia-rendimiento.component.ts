import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TrendingUp, TrendingDown, CircleCheck } from 'lucide-angular';

interface IaKpi {
  label: string;
  value: string;
  change: number;
}

@Component({
  selector: 'app-ia-rendimiento',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ia-rendimiento.component.html',
  styleUrl: './ia-rendimiento.component.scss'
})
export class IaRendimientoComponent {
  readonly TrendingUpIcon = TrendingUp;
  readonly TrendingDownIcon = TrendingDown;
  readonly CheckIcon = CircleCheck;

  readonly score = 'A';
  readonly scoreLabel = 'Rendimiento excelente';
  readonly scoreDescription = 'Tu cuenta muestra un rendimiento superior al 85% de cuentas similares. Las métricas de engagement y alcance están en tendencia positiva.';

  readonly kpis: IaKpi[] = [
    { label: 'Acciones en perfil', value: '643', change: 50 },
    { label: 'Alcance no seguidores', value: '340', change: -10 },
    { label: 'Total de guardados', value: '185', change: 10 },
    { label: 'Tasa de acción', value: '2.3%', change: 10 },
    { label: 'Posts con CTA', value: '64%', change: 50 },
  ];
}

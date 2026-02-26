import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';

interface DayData {
  day: string;
  value: number;
}

@Component({
  selector: 'app-fb-mejores-dias',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-mejores-dias.component.html',
  styleUrl: './fb-mejores-dias.component.scss'
})
export class FbMejoresDiasComponent {
  readonly MoreIcon = MoreHorizontal;

  readonly days: DayData[] = [
    { day: 'Lunes', value: 12400 },
    { day: 'Martes', value: 10200 },
    { day: 'Miércoles', value: 11800 },
    { day: 'Jueves', value: 13600 },
    { day: 'Viernes', value: 11200 },
    { day: 'Sábado', value: 9800 }
  ];

  readonly yAxisLabels = ['14,00', '12,00', '8,00', '4,00', '0,00'];

  get maxValue(): number {
    return 14000;
  }

  getBarHeight(value: number): number {
    return (value / this.maxValue) * 100;
  }
}

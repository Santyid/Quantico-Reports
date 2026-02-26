import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';

interface EstimadoData {
  date: string;
  value: number;
}

@Component({
  selector: 'app-fb-estimado-fans',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-estimado-fans.component.html',
  styleUrl: './fb-estimado-fans.component.scss'
})
export class FbEstimadoFansComponent {
  readonly MoreIcon = MoreHorizontal;

  activeRange = 'Diario';

  readonly data: EstimadoData[] = [
    { date: '15 nov', value: 61 }, { date: '16 nov', value: 60 },
    { date: '17 nov', value: 59 }, { date: '18 nov', value: 60 },
    { date: '19 nov', value: 58 }, { date: '20 nov', value: 59 },
    { date: '21 nov', value: 60 }, { date: '22 nov', value: 61 },
    { date: '23 nov', value: 59 }, { date: '24 nov', value: 58 },
    { date: '25 nov', value: 57 }, { date: '26 nov', value: 58 },
    { date: '27 nov', value: 59 }, { date: '28 nov', value: 60 },
    { date: '29 nov', value: 58 }, { date: '30 nov', value: 57 },
    { date: '1 dic', value: 58 }, { date: '2 dic', value: 59 },
    { date: '3 dic', value: 60 }, { date: '4 dic', value: 61 },
    { date: '5 dic', value: 59 }, { date: '6 dic', value: 58 },
    { date: '7 dic', value: 57 }, { date: '8 dic', value: 58 },
    { date: '9 dic', value: 59 }, { date: '10 dic', value: 60 },
    { date: '11 dic', value: 58 }, { date: '12 dic', value: 59 },
    { date: '13 dic', value: 60 }, { date: '14 dic', value: 61 }
  ];

  readonly yAxisLabels = ['61', '60', '59', '58', '57', '56'];

  setRange(range: string): void {
    this.activeRange = range;
  }

  getBarHeight(value: number): number {
    return ((value - 55) / 7) * 100;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoreHorizontal, UserPlus, UserMinus } from 'lucide-angular';

interface FanDayData {
  date: string;
  gained: number;
  lost: number;
}

@Component({
  selector: 'app-fb-fans-dia',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-fans-dia.component.html',
  styleUrl: './fb-fans-dia.component.scss'
})
export class FbFansDiaComponent {
  readonly MoreIcon = MoreHorizontal;
  readonly UserPlusIcon = UserPlus;
  readonly UserMinusIcon = UserMinus;

  activeRange = 'Diario';

  readonly data: FanDayData[] = [
    { date: '15 nov', gained: 0, lost: 0 },
    { date: '16 nov', gained: 0, lost: 0 },
    { date: '17 nov', gained: 0, lost: 0 },
    { date: '18 nov', gained: 0, lost: 0 },
    { date: '19 nov', gained: 0, lost: 0 },
    { date: '20 nov', gained: 0, lost: 0 },
    { date: '21 nov', gained: 0, lost: 0 },
    { date: '22 nov', gained: 0, lost: 0 },
    { date: '23 nov', gained: 0, lost: 0 },
    { date: '24 nov', gained: 0, lost: 0 },
    { date: '25 nov', gained: 0, lost: 0 },
    { date: '26 nov', gained: 0, lost: 0 },
    { date: '27 nov', gained: 0, lost: 0 },
    { date: '28 nov', gained: 0, lost: 0 },
    { date: '29 nov', gained: 0, lost: 0 },
    { date: '30 nov', gained: 0, lost: 0 },
    { date: '1 dic', gained: 0, lost: 0 },
    { date: '2 dic', gained: 0, lost: 0 },
    { date: '3 dic', gained: 0, lost: 0 },
    { date: '4 dic', gained: 0, lost: 0 },
    { date: '5 dic', gained: 0, lost: 0 },
    { date: '6 dic', gained: 0, lost: 0 },
    { date: '7 dic', gained: 0, lost: 0 },
    { date: '8 dic', gained: 0, lost: 0 },
    { date: '9 dic', gained: 0, lost: 0 },
    { date: '10 dic', gained: 0, lost: 0 },
    { date: '11 dic', gained: 0, lost: 0 },
    { date: '12 dic', gained: 0, lost: 0 },
    { date: '13 dic', gained: 0, lost: 0 },
    { date: '14 dic', gained: 0, lost: 0 },
    { date: '15 dic', gained: 0, lost: 0 },
    { date: '16 dic', gained: 0, lost: 0 }
  ];

  readonly yAxisLabels = ['2.0', '1.5', '1.0', '0.5', '0.0'];

  setRange(range: string): void {
    this.activeRange = range;
  }

  get totalGained(): number {
    return this.data.reduce((sum, d) => sum + d.gained, 0);
  }

  get totalLost(): number {
    return this.data.reduce((sum, d) => sum + d.lost, 0);
  }
}

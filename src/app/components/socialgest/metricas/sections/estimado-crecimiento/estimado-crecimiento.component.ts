import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-estimado-crecimiento',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './estimado-crecimiento.component.html',
  styleUrl: './estimado-crecimiento.component.scss'
})
export class EstimadoCrecimientoComponent {
  readonly MoreHorizontalIcon = MoreHorizontal;
  readonly data = [120, 180, 150, 220, 200, 280, 260, 310, 290, 350, 330, 380, 360, 420];
  readonly labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
  readonly yAxisLabels = [100, 80, 60, 40, 20];

  getLinePath(): string {
    const width = 600;
    const height = 200;
    const padding = 10;
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    const range = max - min || 1;
    const step = (width - padding * 2) / (this.data.length - 1);

    return this.data.map((val, i) => {
      const x = padding + i * step;
      const y = height - padding - ((val - min) / range) * (height - padding * 2);
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join(' ');
  }

  getAreaPath(): string {
    const width = 600;
    const height = 200;
    const padding = 10;
    const linePath = this.getLinePath();
    return `${linePath} L${width - padding},${height - padding} L${padding},${height - padding} Z`;
  }
}

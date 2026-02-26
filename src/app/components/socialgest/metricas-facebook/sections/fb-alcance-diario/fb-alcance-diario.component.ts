import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';

@Component({
  selector: 'app-fb-alcance-diario',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-alcance-diario.component.html',
  styleUrl: './fb-alcance-diario.component.scss'
})
export class FbAlcanceDiarioComponent {
  readonly MoreHorizontalIcon = MoreHorizontal;
  readonly data = [2500, 3200, 2800, 4100, 3600, 5200, 4800, 5500, 5100, 6200, 5800, 6500, 6100, 7200];
  readonly labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
  readonly yAxisLabels = ['8K', '6K', '4K', '2K', '0'];

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

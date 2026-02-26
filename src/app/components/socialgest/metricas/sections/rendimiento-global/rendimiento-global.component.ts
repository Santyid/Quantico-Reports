import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TrendingUp, TrendingDown, Info } from 'lucide-angular';

interface MetricKpi {
  label: string;
  value: string;
  change: number;
  sparklineData: number[];
}

@Component({
  selector: 'app-rendimiento-global',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './rendimiento-global.component.html',
  styleUrl: './rendimiento-global.component.scss'
})
export class RendimientoGlobalComponent {
  readonly TrendingUpIcon = TrendingUp;
  readonly TrendingDownIcon = TrendingDown;
  readonly InfoIcon = Info;

  readonly metrics: MetricKpi[] = [
    { label: 'Alcance', value: '25.630', change: 50, sparklineData: [10, 15, 12, 20, 18, 25, 22, 30, 28, 35] },
    { label: 'Engagement', value: '30%', change: -10, sparklineData: [35, 30, 32, 28, 25, 22, 24, 20, 18, 15] },
    { label: 'Interacciones', value: '2.500', change: 10, sparklineData: [5, 8, 12, 10, 15, 18, 16, 20, 22, 25] }
  ];

  getSparklinePath(data: number[]): string {
    const width = 100;
    const height = 40;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const step = width / (data.length - 1);

    return data.map((val, i) => {
      const x = i * step;
      const y = height - ((val - min) / range) * height;
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    }).join(' ');
  }

  getSparklineAreaPath(data: number[]): string {
    const linePath = this.getSparklinePath(data);
    const width = 100;
    const height = 40;
    return `${linePath} L${width},${height} L0,${height} Z`;
  }
}

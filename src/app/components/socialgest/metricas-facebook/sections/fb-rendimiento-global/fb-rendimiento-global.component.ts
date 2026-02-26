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
  selector: 'app-fb-rendimiento-global',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-rendimiento-global.component.html',
  styleUrl: './fb-rendimiento-global.component.scss'
})
export class FbRendimientoGlobalComponent {
  readonly TrendingUpIcon = TrendingUp;
  readonly TrendingDownIcon = TrendingDown;
  readonly InfoIcon = Info;

  readonly metrics: MetricKpi[] = [
    { label: 'Likes de Página', value: '12.450', change: 8, sparklineData: [30, 35, 32, 40, 38, 45, 42, 50, 48, 55] },
    { label: 'Alcance', value: '45.320', change: 15, sparklineData: [20, 25, 30, 28, 35, 40, 38, 45, 50, 55] },
    { label: 'Engagement', value: '4.2%', change: -3, sparklineData: [50, 48, 45, 42, 40, 38, 35, 32, 30, 28] }
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

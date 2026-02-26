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
  selector: 'app-fb-pub-rendimiento',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-pub-rendimiento.component.html',
  styleUrl: './fb-pub-rendimiento.component.scss'
})
export class FbPubRendimientoComponent {
  readonly TrendingUpIcon = TrendingUp;
  readonly TrendingDownIcon = TrendingDown;
  readonly InfoIcon = Info;

  readonly metrics: MetricKpi[] = [
    { label: 'Alcance publicaciones', value: '32.450', change: 18, sparklineData: [12, 18, 15, 22, 20, 28, 25, 32, 30, 35] },
    { label: 'Reacciones', value: '4.280', change: -5, sparklineData: [30, 28, 32, 25, 22, 20, 24, 18, 16, 14] },
    { label: 'Clicks', value: '2.140', change: 12, sparklineData: [8, 10, 14, 12, 16, 20, 18, 22, 24, 28] }
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

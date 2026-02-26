import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Flame } from 'lucide-angular';

@Component({
  selector: 'app-pub-por-dia',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './pub-por-dia.component.html',
  styleUrl: './pub-por-dia.component.scss'
})
export class PubPorDiaComponent {
  readonly FlameIcon = Flame;
  readonly data = [25, 30, 28, 35, 32, 45, 40, 55, 50, 65, 60, 70, 68, 75];
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

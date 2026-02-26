import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TrendingUp, TrendingDown, Info } from 'lucide-angular';

export interface KpiItem {
  value: string | number;
  label: string;
  change?: number;
  changeLabel?: string;
  showSparkline?: boolean;
  sparklineData?: number[];
}

@Component({
  selector: 'app-kpi-group-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './kpi-group-card.component.html',
  styleUrl: './kpi-group-card.component.scss'
})
export class KpiGroupCardComponent {
  readonly TrendingUpIcon = TrendingUp;
  readonly TrendingDownIcon = TrendingDown;
  readonly InfoIcon = Info;

  @Input() title: string = '';
  @Input() kpis: KpiItem[] = [];
  @Input() compact: boolean = false;

  isPositiveChange(change: number | undefined): boolean {
    return change !== undefined && change >= 0;
  }

  formatChange(change: number | undefined): string {
    if (change === undefined) return '';
    return `${Math.abs(change)}%`;
  }

  private getPoints(data: number[]): { x: number; y: number }[] {
    const width = 138;
    const height = 50;
    const padding = 4;

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    return data.map((value, index) => ({
      x: padding + (index / (data.length - 1)) * (width - 2 * padding),
      y: height - padding - ((value - min) / range) * (height - 2 * padding)
    }));
  }

  // Cardinal spline - creates smooth curves through all points
  private cardinalSpline(points: { x: number; y: number }[], tension: number = 0.5): string {
    if (points.length < 2) return '';

    let path = `M ${points[0].x},${points[0].y}`;

    if (points.length === 2) {
      path += ` L ${points[1].x},${points[1].y}`;
      return path;
    }

    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];

      // Cardinal spline control points
      const cp1x = p1.x + (p2.x - p0.x) / 6 * tension;
      const cp1y = p1.y + (p2.y - p0.y) / 6 * tension;
      const cp2x = p2.x - (p3.x - p1.x) / 6 * tension;
      const cp2y = p2.y - (p3.y - p1.y) / 6 * tension;

      path += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
    }

    return path;
  }

  getSparklinePath(data: number[] | undefined): string {
    if (!data || data.length < 2) return '';
    const points = this.getPoints(data);
    return this.cardinalSpline(points, 1);
  }

  getSparklineAreaPath(data: number[] | undefined): string {
    if (!data || data.length < 2) return '';

    const height = 50;
    const padding = 4;
    const points = this.getPoints(data);

    // Get the curve path
    let path = this.cardinalSpline(points, 1);

    // Close the path for area fill
    const lastPoint = points[points.length - 1];
    const firstPoint = points[0];
    path += ` L ${lastPoint.x.toFixed(2)},${height}`;
    path += ` L ${firstPoint.x.toFixed(2)},${height}`;
    path += ` Z`;

    return path;
  }
}

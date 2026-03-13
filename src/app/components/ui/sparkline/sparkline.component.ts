import { Component, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SparklineVariant = 'primary' | 'secondary';
export type SparklineSize = 'large' | 'small';

@Component({
  selector: 'app-sparkline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sparkline.component.html',
  styleUrl: './sparkline.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SparklineComponent implements OnChanges {
  @Input() data: number[] = [];
  @Input() variant: SparklineVariant = 'primary';
  @Input() size: SparklineSize = 'large';
  @Input() showArea: boolean = true;

  svgWidth = 559;
  svgHeight = 188;
  linePath = '';
  areaPath = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['size']) {
      this.updateDimensions();
      this.buildPaths();
    }
  }

  private updateDimensions(): void {
    if (this.size === 'small') {
      this.svgWidth = 138;
      this.svgHeight = 46;
    } else {
      this.svgWidth = 559;
      this.svgHeight = 188;
    }
  }

  private buildPaths(): void {
    if (!this.data.length) return;

    const padding = 2;
    const w = this.svgWidth - padding * 2;
    const h = this.svgHeight - padding * 2;
    const max = Math.max(...this.data);
    const min = Math.min(...this.data);
    const range = max - min || 1;

    const points = this.data.map((val, i) => ({
      x: padding + (i / (this.data.length - 1)) * w,
      y: padding + h - ((val - min) / range) * h
    }));

    // Build smooth cubic bezier path
    this.linePath = this.smoothPath(points);

    // Area path: line path + close at bottom
    const lastPoint = points[points.length - 1];
    const firstPoint = points[0];
    this.areaPath = `${this.linePath} L ${lastPoint.x},${this.svgHeight} L ${firstPoint.x},${this.svgHeight} Z`;
  }

  private smoothPath(points: { x: number; y: number }[]): string {
    if (points.length < 2) return '';

    let path = `M ${points[0].x},${points[0].y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const prev = i > 0 ? points[i - 1] : curr;
      const afterNext = i < points.length - 2 ? points[i + 2] : next;

      const tension = 0.3;
      const cp1x = curr.x + (next.x - prev.x) * tension;
      const cp1y = curr.y + (next.y - prev.y) * tension;
      const cp2x = next.x - (afterNext.x - curr.x) * tension;
      const cp2y = next.y - (afterNext.y - curr.y) * tension;

      path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${next.x},${next.y}`;
    }

    return path;
  }
}

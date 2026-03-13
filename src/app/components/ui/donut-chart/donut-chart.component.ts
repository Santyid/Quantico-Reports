import { Component, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DonutChartSize = 'large' | 'medium' | 'small';

export interface DonutSegment {
  value: number;
  color: string;
  gradientTo?: string;
  label?: string;
}

interface ComputedArc {
  path: string;
  gradientId: string;
  color: string;
  gradientTo: string;
  startAngle: number;
  endAngle: number;
  midX1: number;
  midY1: number;
  midX2: number;
  midY2: number;
}

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DonutChartComponent implements OnChanges {
  @Input() segments: DonutSegment[] = [];
  @Input() size: DonutChartSize = 'large';
  @Input() strokeWidth: number = 0;

  arcs: ComputedArc[] = [];
  viewBoxSize = 100;
  center = 50;

  get outerRadius(): number {
    return 48;
  }

  get innerRadius(): number {
    return this.outerRadius - this.effectiveStrokeWidth;
  }

  get effectiveStrokeWidth(): number {
    if (this.strokeWidth > 0) return this.strokeWidth;
    switch (this.size) {
      case 'large': return 16;
      case 'medium': return 14;
      case 'small': return 12;
    }
  }

  get containerSize(): number {
    switch (this.size) {
      case 'large': return 276;
      case 'medium': return 213;
      case 'small': return 142;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['segments'] || changes['size'] || changes['strokeWidth']) {
      this.buildArcs();
    }
  }

  private buildArcs(): void {
    const total = this.segments.reduce((sum, s) => sum + s.value, 0) || 1;
    const cx = this.center;
    const cy = this.center;
    const r1 = this.outerRadius;
    const r2 = this.innerRadius;

    let currentAngle = -90; // start at top

    this.arcs = this.segments.map((seg, i) => {
      const sweepDeg = (seg.value / total) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sweepDeg;
      currentAngle = endAngle;

      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;

      // Outer arc points
      const ox1 = cx + r1 * Math.cos(startRad);
      const oy1 = cy + r1 * Math.sin(startRad);
      const ox2 = cx + r1 * Math.cos(endRad);
      const oy2 = cy + r1 * Math.sin(endRad);

      // Inner arc points
      const ix1 = cx + r2 * Math.cos(endRad);
      const iy1 = cy + r2 * Math.sin(endRad);
      const ix2 = cx + r2 * Math.cos(startRad);
      const iy2 = cy + r2 * Math.sin(startRad);

      const largeArc = sweepDeg > 180 ? 1 : 0;

      // Build annular sector path (flat/straight edges)
      const path = [
        `M ${ox1} ${oy1}`,
        `A ${r1} ${r1} 0 ${largeArc} 1 ${ox2} ${oy2}`,
        `L ${ix1} ${iy1}`,
        `A ${r2} ${r2} 0 ${largeArc} 0 ${ix2} ${iy2}`,
        'Z'
      ].join(' ');

      // Gradient direction: along the arc from start to end
      const midRad = ((startAngle + endAngle) / 2 * Math.PI) / 180;
      const gradStart = this.polarToPercent(startRad);
      const gradEnd = this.polarToPercent(endRad);

      return {
        path,
        gradientId: `donut-arc-${i}-${this.size}`,
        color: seg.color,
        gradientTo: seg.gradientTo || seg.color,
        startAngle,
        endAngle,
        midX1: gradStart.x,
        midY1: gradStart.y,
        midX2: gradEnd.x,
        midY2: gradEnd.y
      };
    });
  }

  private polarToPercent(rad: number): { x: number; y: number } {
    return {
      x: Math.round((Math.cos(rad) + 1) / 2 * 100),
      y: Math.round((Math.sin(rad) + 1) / 2 * 100)
    };
  }
}

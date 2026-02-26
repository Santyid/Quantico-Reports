import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexTooltip,
  ApexGrid,
  ApexStroke,
  ApexFill
} from 'ng-apexcharts';
import { InsightCardComponent } from '../insight-card/insight-card.component';

export interface HorizontalBarData {
  label: string;
  icon?: string;
  segments: { value: number; color: string; label?: string }[];
  total: number;
  insight?: string;
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  colors: string[];
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: 'app-horizontal-bar-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, InsightCardComponent],
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrl: './horizontal-bar-chart.component.scss'
})
export class HorizontalBarChartComponent implements OnChanges {
  @ViewChild('chart') chart!: ChartComponent;

  @Input() data: HorizontalBarData[] = [];
  @Input() showLabels: boolean = true;
  @Input() showValues: boolean = true;
  @Input() showInsights: boolean = false;
  @Input() barHeight: number = 24;
  @Input() legend: { label: string; color: string }[] = [];
  @Input() showLegend: boolean = true;

  chartOptions: Partial<ChartOptions> = {};
  chartHeight: number = 200;
  hasIcons: boolean = false;
  hasInsights: boolean = false;
  insightsContent: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['legend'] || changes['barHeight']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (!this.data.length) return;

    // Check if any data has icons
    this.hasIcons = this.data.some(d => !!d.icon);

    // Build insights content from data
    const insights = this.data.filter(d => d.insight).map(d => `${d.label}: ${d.insight}`);
    this.hasInsights = insights.length > 0;
    this.insightsContent = insights.join('\n');

    // Calculate chart height based on number of bars
    this.chartHeight = Math.max(200, this.data.length * (this.barHeight + 24) + 60);

    // Extract categories (labels)
    const categories = this.data.map(d => d.label);

    // Get all unique segment labels
    const segmentLabels = this.legend.length
      ? this.legend.map(l => l.label)
      : [...new Set(this.data.flatMap(d => d.segments.map(s => s.label || '')))];

    // Get colors
    const colors = this.legend.length
      ? this.legend.map(l => l.color)
      : [...new Set(this.data.flatMap(d => d.segments.map(s => s.color)))];

    // Build series data for stacked horizontal bars
    const series = segmentLabels.map((label, segmentIndex) => ({
      name: label,
      data: this.data.map(d => d.segments[segmentIndex]?.value || 0)
    }));

    this.chartOptions = {
      series,
      chart: {
        type: 'bar',
        height: this.chartHeight,
        stacked: true,
        stackType: '100%',
        toolbar: { show: false },
        fontFamily: 'DM Sans, sans-serif'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: `${this.barHeight}px`,
          borderRadius: 4,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last'
        }
      },
      xaxis: {
        labels: {
          show: this.showValues,
          style: {
            fontSize: '12px',
            colors: '#7d7d7d'
          },
          formatter: (val: string) => `${parseFloat(val).toFixed(0)}%`
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          show: this.showLabels && !this.hasIcons,
          style: {
            fontSize: '13px',
            colors: '#3d3d3d',
            fontWeight: 500
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: this.showLegend,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '12px',
        markers: {
          width: 10,
          height: 10,
          radius: 12,
          shape: 'circle'
        } as any
      },
      tooltip: {
        y: {
          formatter: (val: number, opts: { seriesIndex: number; dataPointIndex: number }) => {
            const total = this.data[opts.dataPointIndex].total;
            const percentage = ((val / total) * 100).toFixed(1);
            return `${this.formatNumber(val)} (${percentage}%)`;
          }
        }
      },
      grid: {
        borderColor: '#ececec',
        strokeDashArray: 4,
        yaxis: { lines: { show: false } },
        xaxis: { lines: { show: true } }
      },
      colors,
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.1,
          opacityFrom: 1,
          opacityTo: 0.75,
          stops: [0, 100]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      }
    };
  }

  formatNumber(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  }

  // Keep these methods for backwards compatibility if needed
  getSegmentWidth(value: number, total: number): string {
    if (total === 0) return '0%';
    return `${(value / total) * 100}%`;
  }

  getPercentage(value: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
  }
}

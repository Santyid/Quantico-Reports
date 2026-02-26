import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexPlotOptions,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexFill
} from 'ng-apexcharts';

export interface PieChartData {
  label: string;
  value: number;
  color: string;
  isHighlighted?: boolean;
}

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  fill?: ApexFill;
};

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnChanges {
  @ViewChild('chart') chart!: ChartComponent;

  @Input() data: PieChartData[] = [];
  @Input() size: number = 200;
  @Input() donut: boolean = true;
  @Input() donutWidth: number = 40;
  @Input() showLegend: boolean = true;
  @Input() centerLabel?: string;
  @Input() centerValue?: string;
  @Input() useGradient: boolean = false;

  chartOptions: Partial<ChartOptions> = {};
  total: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['size'] || changes['donut'] || changes['useGradient']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (!this.data.length) return;

    this.total = this.data.reduce((sum, item) => sum + item.value, 0);

    const series = this.data.map(d => d.value);
    const labels = this.data.map(d => d.label);
    const colors = this.data.map(d => d.color);

    // Calculate donut hollow percentage based on donutWidth
    const hollowSize = this.donut
      ? Math.round(((this.size / 2 - this.donutWidth) / (this.size / 2)) * 100)
      : 0;

    this.chartOptions = {
      series,
      chart: {
        type: this.donut ? 'donut' : 'pie',
        height: this.size,
        fontFamily: 'DM Sans, sans-serif'
      },
      labels,
      colors,
      plotOptions: {
        pie: {
          donut: {
            size: `${hollowSize}%`,
            labels: {
              show: this.centerLabel || this.centerValue ? true : false,
              name: {
                show: true,
                fontSize: '12px',
                fontWeight: 400,
                color: '#7d7d7d',
                offsetY: this.centerValue ? -8 : 0
              },
              value: {
                show: true,
                fontSize: '24px',
                fontWeight: 700,
                color: '#222222',
                offsetY: this.centerLabel ? 8 : 0,
                formatter: () => this.centerValue || ''
              },
              total: {
                show: this.centerLabel || this.centerValue ? true : false,
                label: this.centerLabel || '',
                color: '#7d7d7d',
                formatter: () => this.centerValue || ''
              }
            }
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
        formatter: (seriesName: string, opts: { seriesIndex: number }) => {
          const percentage = ((this.data[opts.seriesIndex].value / this.total) * 100).toFixed(1);
          return `${seriesName}: ${percentage}%`;
        }
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            const percentage = ((val / this.total) * 100).toFixed(1);
            return `${val} (${percentage}%)`;
          }
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 250
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    };

    // Add gradient fill if enabled
    if (this.useGradient) {
      this.chartOptions.fill = {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.1,
          gradientToColors: colors.map(c => this.adjustColorOpacity(c, 0.5)),
          opacityFrom: 1,
          opacityTo: 0.75,
          stops: [0, 100]
        }
      };
    }
  }

  private adjustColorOpacity(color: string, opacity: number): string {
    // Return the same color - ApexCharts handles the opacity through gradientToColors
    return color;
  }
}

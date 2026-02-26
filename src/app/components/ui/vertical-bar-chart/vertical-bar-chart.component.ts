import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexStroke,
  ApexFill,
  ApexLegend,
  ApexTooltip,
  ApexGrid,
  ApexPlotOptions
} from 'ng-apexcharts';

export interface VerticalBarData {
  label: string;
  segments: { value: number; color: string; label?: string }[];
  total: number;
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  fill: ApexFill;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  colors: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-vertical-bar-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './vertical-bar-chart.component.html',
  styleUrl: './vertical-bar-chart.component.scss'
})
export class VerticalBarChartComponent implements OnChanges {
  @ViewChild('chart') chart!: ChartComponent;

  @Input() data: VerticalBarData[] = [];
  @Input() height: number = 250;
  @Input() showLegend: boolean = true;
  @Input() showLabels: boolean = true;
  @Input() showValues: boolean = true;
  @Input() legend: { label: string; color: string }[] = [];
  @Input() chartColor: string = '#3ECC80';
  @Input() stacked: boolean = false;
  @Input() useGradient: boolean = true;

  chartOptions: Partial<ChartOptions> = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['height'] || changes['legend'] || changes['stacked']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (!this.data.length) return;

    // Extract categories (labels)
    const categories = this.data.map(d => d.label);

    // Get segment labels and colors from legend or data
    const segmentLabels = this.legend.length
      ? this.legend.map(l => l.label)
      : [...new Set(this.data.flatMap(d => d.segments.map(s => s.label || '')))];

    const colors = this.legend.length
      ? this.legend.map(l => l.color)
      : [...new Set(this.data.flatMap(d => d.segments.map(s => s.color)))];

    // Build series data
    const series = segmentLabels.map((label, segmentIndex) => ({
      name: label,
      data: this.data.map(d => d.segments[segmentIndex]?.value || 0)
    }));

    if (this.stacked) {
      this.buildStackedBarChart(series, categories, colors);
    } else {
      this.buildAreaChart(series, categories, colors);
    }
  }

  private buildStackedBarChart(series: ApexAxisChartSeries, categories: string[], colors: string[]): void {
    this.chartOptions = {
      series,
      chart: {
        type: 'bar',
        height: this.height,
        stacked: true,
        stackType: '100%',
        toolbar: { show: false },
        fontFamily: 'DM Sans, sans-serif',
        animations: {
          enabled: true,
          speed: 800
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 3,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last'
        }
      },
      stroke: {
        width: 0
      },
      fill: this.useGradient ? {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.4,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.7,
          stops: [0, 90, 100]
        }
      } : {
        type: 'solid',
        opacity: 1
      },
      xaxis: {
        categories,
        labels: {
          show: this.showLabels,
          style: {
            fontSize: '12px',
            fontFamily: 'Urbanist, sans-serif',
            fontWeight: 600,
            colors: '#c3c3c3'
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          show: this.showValues,
          style: {
            fontSize: '12px',
            fontFamily: 'Urbanist, sans-serif',
            fontWeight: 600,
            colors: '#c3c3c3'
          },
          formatter: (val: number) => Math.round(val) + '%'
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
        fontFamily: 'DM Sans, sans-serif',
        markers: {
          shape: 'circle',
          offsetX: -4
        },
        itemMargin: {
          horizontal: 16
        }
      },
      tooltip: {
        y: {
          formatter: (val: number) => Math.round(val) + '%'
        }
      },
      grid: {
        borderColor: '#ececec',
        strokeDashArray: 0,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } }
      },
      colors
    };
  }

  private buildAreaChart(series: ApexAxisChartSeries, categories: string[], colors: string[]): void {
    this.chartOptions = {
      series,
      chart: {
        type: 'area',
        height: this.height,
        toolbar: { show: false },
        fontFamily: 'DM Sans, sans-serif',
        animations: {
          enabled: true,
          speed: 800
        }
      },
      plotOptions: {},
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.05,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories,
        labels: {
          show: this.showLabels,
          style: {
            fontSize: '12px',
            fontFamily: 'Urbanist, sans-serif',
            fontWeight: 600,
            colors: '#c3c3c3'
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          show: this.showValues,
          style: {
            fontSize: '12px',
            fontFamily: 'Urbanist, sans-serif',
            fontWeight: 600,
            colors: '#c3c3c3'
          },
          formatter: (val: number) => Math.round(val).toString()
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
        fontFamily: 'DM Sans, sans-serif',
        markers: {
          shape: 'circle',
          offsetX: -4
        },
        itemMargin: {
          horizontal: 16
        }
      },
      tooltip: {
        x: {
          show: true
        },
        y: {
          formatter: (val: number) => Math.round(val).toString()
        }
      },
      grid: {
        borderColor: '#ececec',
        strokeDashArray: 0,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } }
      },
      colors
    };
  }
}

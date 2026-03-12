import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexGrid,
  ApexStroke,
  ApexMarkers,
  ApexFill,
  ApexAxisChartSeries
} from 'ng-apexcharts';

export interface LineChartSeries {
  name: string;
  color: string;
  data: number[];
}

export interface LineChartData {
  labels: string[];
  series: LineChartSeries[];
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  colors: string[];
  stroke: ApexStroke;
  markers: ApexMarkers;
  fill: ApexFill;
};

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements OnChanges {
  @ViewChild('chart') chart!: ChartComponent;

  @Input() data: LineChartData = { labels: [], series: [] };
  @Input() height: number = 250;
  @Input() showGrid: boolean = true;
  @Input() showDots: boolean = true;
  @Input() showLegend: boolean = true;
  @Input() showLabels: boolean = true;
  @Input() smooth: boolean = true;
  @Input() areaChart: boolean = false;  // Enable area chart with gradient fill

  chartOptions: Partial<ChartOptions> = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['height'] || changes['areaChart']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (!this.data.series.length || !this.data.labels.length) return;

    const series = this.data.series.map(s => ({
      name: s.name,
      data: s.data
    }));

    const colors = this.data.series.map(s => s.color);

    this.chartOptions = {
      series,
      chart: {
        type: this.areaChart ? 'area' : 'line',
        height: this.height,
        toolbar: { show: false },
        fontFamily: 'DM Sans, sans-serif',
        zoom: { enabled: false },
        stacked: false
      },
      stroke: {
        curve: this.smooth ? 'smooth' : 'straight',
        width: this.areaChart ? 2 : 3
      },
      xaxis: {
        categories: this.data.labels,
        labels: {
          show: this.showLabels,
          style: {
            fontSize: '12px',
            colors: '#c3c3c3',
            fontFamily: 'Urbanist, sans-serif',
            fontWeight: 600
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '12px',
            colors: '#c3c3c3',
            fontFamily: 'Urbanist, sans-serif',
            fontWeight: 600
          },
          formatter: (val: number) => this.formatValue(val)
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: this.showLegend,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '12px'
      },
      tooltip: {
        y: {
          formatter: (val: number) => this.formatValue(val)
        }
      },
      grid: {
        show: this.showGrid,
        borderColor: '#ececec',
        strokeDashArray: 0,
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } }
      },
      colors,
      fill: this.areaChart ? {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 100]
        }
      } : {
        type: 'solid'
      },
      markers: {
        size: this.showDots ? 5 : 0,
        hover: {
          size: 7
        }
      }
    };
  }

  formatValue(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(0) + 'K';
    }
    return value.toString();
  }
}

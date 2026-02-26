import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CountryChartData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-fb-aud-pais-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fb-aud-pais-chart.component.html',
  styleUrl: './fb-aud-pais-chart.component.scss'
})
export class FbAudPaisChartComponent {
  readonly countries: CountryChartData[] = [
    { name: 'México', value: 14 },
    { name: 'Colombia', value: 11 },
    { name: 'Argentina', value: 8 },
    { name: 'España', value: 5 },
    { name: 'Perú', value: 3 }
  ];

  get maxValue(): number {
    return Math.max(...this.countries.map(c => c.value));
  }

  getBarWidth(value: number): number {
    return (value / this.maxValue) * 100;
  }
}

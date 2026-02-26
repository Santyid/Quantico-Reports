import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CityData {
  name: string;
  value: number;
}

@Component({
  selector: 'app-fb-aud-ciudad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fb-aud-ciudad.component.html',
  styleUrl: './fb-aud-ciudad.component.scss'
})
export class FbAudCiudadComponent {
  readonly cities: CityData[] = [
    { name: 'Ciudad de México', value: 5 },
    { name: 'Bogotá', value: 4 },
    { name: 'Buenos Aires', value: 3 },
    { name: 'Madrid', value: 2 },
    { name: 'Lima', value: 1 }
  ];

  get maxValue(): number {
    return Math.max(...this.cities.map(c => c.value));
  }

  getBarWidth(value: number): number {
    return (value / this.maxValue) * 100;
  }
}

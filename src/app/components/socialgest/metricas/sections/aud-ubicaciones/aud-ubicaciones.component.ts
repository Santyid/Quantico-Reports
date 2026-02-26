import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';

interface CountryData {
  flag: string;
  name: string;
  value: number;
}

@Component({
  selector: 'app-aud-ubicaciones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './aud-ubicaciones.component.html',
  styleUrl: './aud-ubicaciones.component.scss'
})
export class AudUbicacionesComponent {
  readonly MoreIcon = MoreHorizontal;

  readonly countries: CountryData[] = [
    { flag: '🇺🇸', name: 'EE.UU.', value: 416 },
    { flag: '🇵🇪', name: 'Perú', value: 40 },
    { flag: '🇫🇮', name: 'Finlandia', value: 64 },
    { flag: '🇨🇴', name: 'Colombia', value: 300 },
    { flag: '🇻🇪', name: 'Venezuela', value: 10 },
    { flag: '🇫🇷', name: 'Francia', value: 9 },
    { flag: '🇷🇺', name: 'Rusia', value: 3 },
    { flag: '🇬🇧', name: 'R. Unido', value: 6 },
    { flag: '🇩🇪', name: 'Alemania', value: 8 },
    { flag: '🇪🇸', name: 'España', value: 2 }
  ];

  get maxValue(): number {
    return Math.max(...this.countries.map(c => c.value));
  }

  getBarHeight(value: number): number {
    return Math.max((value / this.maxValue) * 100, 10);
  }
}

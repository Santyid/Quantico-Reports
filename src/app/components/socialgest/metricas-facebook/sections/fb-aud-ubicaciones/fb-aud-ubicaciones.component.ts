import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoreHorizontal } from 'lucide-angular';

interface CountryData {
  flag: string;
  name: string;
  value: number;
}

@Component({
  selector: 'app-fb-aud-ubicaciones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-aud-ubicaciones.component.html',
  styleUrl: './fb-aud-ubicaciones.component.scss'
})
export class FbAudUbicacionesComponent {
  readonly MoreIcon = MoreHorizontal;

  readonly countries: CountryData[] = [
    { flag: '🇲🇽', name: 'México', value: 380 },
    { flag: '🇨🇴', name: 'Colombia', value: 290 },
    { flag: '🇦🇷', name: 'Argentina', value: 210 },
    { flag: '🇪🇸', name: 'España', value: 180 },
    { flag: '🇵🇪', name: 'Perú', value: 120 },
    { flag: '🇨🇱', name: 'Chile', value: 95 },
    { flag: '🇪🇨', name: 'Ecuador', value: 70 },
    { flag: '🇺🇸', name: 'EE.UU.', value: 55 },
    { flag: '🇻🇪', name: 'Venezuela', value: 40 },
    { flag: '🇧🇷', name: 'Brasil', value: 25 }
  ];

  get maxValue(): number {
    return Math.max(...this.countries.map(c => c.value));
  }

  getBarHeight(value: number): number {
    return Math.max((value / this.maxValue) * 100, 10);
  }
}

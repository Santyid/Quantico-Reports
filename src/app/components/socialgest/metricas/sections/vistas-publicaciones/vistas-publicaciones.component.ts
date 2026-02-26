import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ViewCategory {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-vistas-publicaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vistas-publicaciones.component.html',
  styleUrl: './vistas-publicaciones.component.scss'
})
export class VistasPublicacionesComponent {
  readonly total = '10.500';

  readonly categories: ViewCategory[] = [
    { label: 'Anuncios', value: '2.500', percentage: 16.67, color: '#0061fe' },
    { label: 'Carruseles', value: '2.500', percentage: 16.67, color: '#9e54e2' },
    { label: 'Feed', value: '2.500', percentage: 16.67, color: '#5bc0de' },
    { label: 'Publicaciones', value: '2.500', percentage: 16.67, color: '#3ace76' },
    { label: 'Historias', value: '2.500', percentage: 16.67, color: '#f4b137' },
    { label: 'Reels', value: '2.500', percentage: 16.65, color: '#f07070' }
  ];

  getDonutSegments(): { offset: number; dash: string; color: string }[] {
    const circumference = 2 * Math.PI * 52;
    let accumulated = 0;
    return this.categories.map(cat => {
      const segment = {
        offset: circumference * (1 - accumulated / 100) + circumference * 0.25,
        dash: `${(cat.percentage / 100) * circumference} ${circumference}`,
        color: cat.color
      };
      accumulated += cat.percentage;
      return segment;
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PostCategory {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-fb-publicaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fb-publicaciones.component.html',
  styleUrl: './fb-publicaciones.component.scss'
})
export class FbPublicacionesComponent {
  readonly total = '156';

  readonly categories: PostCategory[] = [
    { label: 'Fotos', value: '52', percentage: 33.33, color: '#0061fe' },
    { label: 'Videos', value: '35', percentage: 22.44, color: '#9e54e2' },
    { label: 'Enlaces', value: '28', percentage: 17.95, color: '#5bc0de' },
    { label: 'Estado', value: '25', percentage: 16.03, color: '#3ace76' },
    { label: 'Eventos', value: '16', percentage: 10.25, color: '#f4b137' }
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

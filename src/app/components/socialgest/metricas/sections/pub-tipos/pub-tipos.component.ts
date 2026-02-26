import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PostCategory {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-pub-tipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pub-tipos.component.html',
  styleUrl: './pub-tipos.component.scss'
})
export class PubTiposComponent {
  readonly total = '10.500';

  readonly categories: PostCategory[] = [
    { label: 'Imagenes', value: '2.500', percentage: 25, color: '#0061fe' },
    { label: 'Carruseles', value: '2.500', percentage: 25, color: '#3ace76' },
    { label: 'Videos', value: '2.500', percentage: 25, color: '#5bc0de' },
    { label: 'Reels', value: '2.500', percentage: 25, color: '#f4b137' }
  ];

  getDonutSegments(): { offset: number; dash: string; color: string }[] {
    const circumference = 2 * Math.PI * 70;
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

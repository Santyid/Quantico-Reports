import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PostCategory {
  label: string;
  value: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-fb-pub-tipos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fb-pub-tipos.component.html',
  styleUrl: './fb-pub-tipos.component.scss'
})
export class FbPubTiposComponent {
  readonly total = '8.640';

  readonly categories: PostCategory[] = [
    { label: 'Fotos', value: '3.024', percentage: 35, color: '#0061fe' },
    { label: 'Videos', value: '2.160', percentage: 25, color: '#3ace76' },
    { label: 'Enlaces', value: '1.901', percentage: 22, color: '#5bc0de' },
    { label: 'Estado', value: '1.555', percentage: 18, color: '#f4b137' }
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

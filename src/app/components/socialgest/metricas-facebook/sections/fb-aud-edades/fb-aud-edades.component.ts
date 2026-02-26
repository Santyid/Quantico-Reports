import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AgeRange {
  label: string;
  percentage: number;
  color: string;
  gradient: string;
}

@Component({
  selector: 'app-fb-aud-edades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fb-aud-edades.component.html',
  styleUrl: './fb-aud-edades.component.scss'
})
export class FbAudEdadesComponent {
  readonly ranges: AgeRange[] = [
    { label: '18-24', percentage: 30, color: '#ff7d4a', gradient: 'linear-gradient(90deg, rgba(255,125,74,0.5) 0%, #ff7d4a 100%)' },
    { label: '25-34', percentage: 35, color: '#9a8afb', gradient: 'linear-gradient(90deg, rgba(154,138,251,0.5) 0%, #9a8afb 100%)' },
    { label: '35-44', percentage: 20, color: '#3ecc80', gradient: 'linear-gradient(90deg, rgba(62,204,128,0.5) 0%, #3ecc80 100%)' },
    { label: '45+', percentage: 15, color: '#f572c5', gradient: 'linear-gradient(90deg, rgba(245,114,197,0.5) 0%, #f572c5 100%)' }
  ];
}

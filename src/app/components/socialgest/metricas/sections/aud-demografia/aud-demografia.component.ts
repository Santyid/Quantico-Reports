import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info, MapPin, Users, Calendar } from 'lucide-angular';

interface DemoKpi {
  flag: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-aud-demografia',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './aud-demografia.component.html',
  styleUrl: './aud-demografia.component.scss'
})
export class AudDemografiaComponent {
  readonly InfoIcon = Info;

  readonly kpis: DemoKpi[] = [
    { flag: '🇪🇸', value: 'España', label: 'Mejor país' },
    { flag: '🇪🇸', value: 'Madrid', label: 'Mejor ciudad' },
    { flag: '♀', value: 'Femenino', label: 'Mejor genero' },
    { flag: '👥', value: '19-24', label: 'Mejor rango de edad' }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Info } from 'lucide-angular';

interface DemoKpi {
  flag: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-fb-aud-demografia',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './fb-aud-demografia.component.html',
  styleUrl: './fb-aud-demografia.component.scss'
})
export class FbAudDemografiaComponent {
  readonly InfoIcon = Info;

  readonly kpis: DemoKpi[] = [
    { flag: '🇲🇽', value: 'México', label: 'Mejor país' },
    { flag: '🇲🇽', value: 'CDMX', label: 'Mejor ciudad' },
    { flag: '♂', value: 'Masculino', label: 'Mejor genero' },
    { flag: '👥', value: '25-34', label: 'Mejor rango de edad' }
  ];
}

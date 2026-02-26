import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, TrendingUp, Package, MessageCircle, CalendarDays } from 'lucide-angular';

@Component({
  selector: 'app-tendencias',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './tendencias.component.html',
  styleUrl: './tendencias.component.scss'
})
export class TendenciasComponent {
  readonly TrendingUpIcon = TrendingUp;
  readonly PackageIcon = Package;
  readonly MessageCircleIcon = MessageCircle;
  readonly CalendarDaysIcon = CalendarDays;

  // Análisis de Tendencias Cards
  readonly analisisTendencias = [
    {
      title: 'Nuevos Usos del Producto',
      icon: 'package',
      iconBg: '#f47a37',
      puntos: [
        'DIY extremo y contenido educativo',
        'Contenido educativo (tutoriales paso a paso)',
      ]
    },
    {
      title: 'Cambios de Lenguaje',
      icon: 'message',
      iconBg: '#3ECC80',
      puntos: [
        'De "barato" a "inteligente/smart"',
        'De "comprar" a "invertir en el hogar"',
      ]
    },
    {
      title: 'Oportunidades Q1 2026',
      icon: 'calendar',
      iconBg: '#9e54e2',
      puntos: [
        'Contenido educativo premium',
        'Programa de sostenibilidad',
        'AR tool para visualización de productos'
      ]
    }
  ];

  // Temas Emergentes
  readonly temasEmergentes = [
    { title: '"Sostenibilidad" en productos del hogar', value: '2100', label: 'menciones' },
    { title: '"Instalación profesional" como valor agregado', value: '+280%', label: '' },
    { title: '"Realidad aumentada" para visualización', value: '42%', label: '' }
  ];
}

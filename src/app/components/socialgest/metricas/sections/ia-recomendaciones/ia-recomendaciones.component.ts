import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, TrendingUp } from 'lucide-angular';

interface Recomendacion {
  prioridad: 'Alta' | 'Media' | 'Baja';
  titulo: string;
  proyeccion: string;
  proyeccionChange: number;
  detalle: string;
}

@Component({
  selector: 'app-ia-recomendaciones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ia-recomendaciones.component.html',
  styleUrl: './ia-recomendaciones.component.scss'
})
export class IaRecomendacionesComponent {
  readonly SparklesIcon = Sparkles;
  readonly TrendingUpIcon = TrendingUp;

  readonly recomendaciones: Recomendacion[] = [
    {
      prioridad: 'Alta',
      titulo: 'Aumentar CTAs directos en captions',
      proyeccion: '+40% en engagement general',
      proyeccionChange: 40,
      detalle: 'Incluir "Link en bio" o CTA claro en todos los posts. Los posts con CTA directo tienen 2.3x más engagement que los que no lo incluyen.'
    },
    {
      prioridad: 'Media',
      titulo: 'Crear más contenido educativo tipo "guía"',
      proyeccion: '+35% en alcance a no seguidores',
      proyeccionChange: 35,
      detalle: 'Producir 2 Reels semanales con formato "X tips para..." o "Guía de...". Este formato tiene el mejor engagement y alcance de tu cuenta.'
    },
    {
      prioridad: 'Baja',
      titulo: 'Optimizar horarios de publicación',
      proyeccion: '+25% en engagement',
      proyeccionChange: 25,
      detalle: 'Concentrar publicaciones en Martes y Miércoles 10-12h, cuando tu audiencia muestra mayor interacción con contenido educativo.'
    }
  ];

  getPrioridadColor(prioridad: string): string {
    switch (prioridad) {
      case 'Alta': return '#3ace76';
      case 'Media': return '#f4b137';
      case 'Baja': return '#f44336';
      default: return '#9e9e9e';
    }
  }
}

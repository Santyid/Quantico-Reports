import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Prediccion {
  confianza: 'Alta' | 'Media' | 'Baja';
  texto: string;
}

@Component({
  selector: 'app-ia-predicciones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ia-predicciones.component.html',
  styleUrl: './ia-predicciones.component.scss'
})
export class IaPrediccionesComponent {
  readonly predicciones: Prediccion[] = [
    {
      confianza: 'Alta',
      texto: 'Proyección: +50% en acciones de perfil en el próximo período si mantienes el ritmo de Reels educativos con CTA'
    },
    {
      confianza: 'Media',
      texto: 'El engagement de posts estáticos está cayendo (-18%). Considera migrar más contenido a formato Reel o Carrusel'
    },
    {
      confianza: 'Baja',
      texto: 'Tu ratio saves/reach (4.2%) está 60% sobre tu promedio histórico. Contenido educativo con lead magnets podría maximizar este patrón'
    }
  ];

  getConfianzaColor(confianza: string): string {
    switch (confianza) {
      case 'Alta': return '#3ace76';
      case 'Media': return '#f4b137';
      case 'Baja': return '#f44336';
      default: return '#9e9e9e';
    }
  }

  getConfianzaLabel(confianza: string): string {
    return confianza + ' confianza';
  }
}

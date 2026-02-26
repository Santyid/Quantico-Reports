import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Lightbulb, Megaphone, Package, HeadphonesIcon, TrendingUp, Building2, Sparkles, LucideIconData } from 'lucide-angular';

export interface DepartmentCard {
  department: string;
  subtitle: string;
  icon: LucideIconData;
  iconColor: 'orange' | 'blue' | 'green' | 'purple' | 'teal';
  actions: string[];
}

@Component({
  selector: 'app-recomendaciones-area',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './recomendaciones-area.component.html',
  styleUrl: './recomendaciones-area.component.scss'
})
export class RecomendacionesAreaComponent {
  readonly LightbulbIcon = Lightbulb;
  readonly SparklesIcon = Sparkles;

  // Department Recommendations with icons and colors
  readonly departments: DepartmentCard[] = [
    {
      department: 'Dirección',
      subtitle: 'Decisiones estratégicas de inversión',
      icon: Building2,
      iconColor: 'teal',
      actions: [
        'Evaluar inversión en logística (32% churn drivers)',
        'Revisar capacidad operativa para season',
        'Considerar expansión canales digitales (↑48% engagement)'
      ]
    },
    {
      department: 'Marketing',
      subtitle: 'Amplificar contenido y narrativa emocional',
      icon: Megaphone,
      iconColor: 'orange',
      actions: [
        'Escalar contenido UGC (+127% engagement vs branded)',
        'Mantener narrativa familiar/emocional en Q1',
        'Desarrollar campaña "Competidor perdió audiencia"',
        'Invertir en YouTube educativo (gap vs competencia)'
      ]
    },
    {
      department: 'Producto',
      subtitle: 'Innovación y desarrollo de nuevas líneas',
      icon: Package,
      iconColor: 'blue',
      actions: [
        'Priorizar tracking en tiempo real de entregas',
        'Evaluar línea "sostenible" (early signal fuerte)',
        'Desarrollar API tool (12 meses, competencia adelantada)'
      ]
    },
    {
      department: 'Customer Success',
      subtitle: 'Optimizar tiempos de respuesta y satisfacción',
      icon: HeadphonesIcon,
      iconColor: 'green',
      actions: [
        'Protocolo <2h respuesta en peak seasons',
        'Entrenamiento en resolución primer contacto',
        'FAQ proactiva en RRSS antes de crisis'
      ]
    },
    {
      department: 'Ventas',
      subtitle: 'Capitalizar debilidades de competencia',
      icon: TrendingUp,
      iconColor: 'purple',
      actions: [
        'Explotar debilidad stock de Competidor 1',
        'Comunicar "mejor relación calidad-precio"',
        'Bundle promocional Q1 (momentum positivo)'
      ]
    }
  ];

  readonly finalInsight = 'Magnetic se encuentra en un momento de oportunidad crítico. La campaña navideña generó momentum positivo sin precedentes (77.8% crecimiento en menciones), pero las señales de alerta en calidad de producto y precio podrían erosionar esta ventaja si no se actúa inmediatamente. Las próximas 8 semanas son determinantes: capitalizar el sentimiento positivo mientras se corrigen los gaps operacionales puede traducirse en un crecimiento sostenido de 15-20% en market share. La ventana de oportunidad se cerrará en Q2 cuando la competencia lance sus nuevas líneas de producto.';
}

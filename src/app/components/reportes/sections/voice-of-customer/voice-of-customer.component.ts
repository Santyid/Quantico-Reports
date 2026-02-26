import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Gift, Tag, HeadphonesIcon, Truck, Star, Sparkles, LucideIconData } from 'lucide-angular';

export interface VoiceCard {
  topic: string;
  percentage: number;
  emotion: string;
  journey: string;
  insight: string;
  icon: LucideIconData;
  iconColor: 'red' | 'orange' | 'green' | 'blue' | 'purple';
}

@Component({
  selector: 'app-voice-of-customer',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './voice-of-customer.component.html',
  styleUrl: './voice-of-customer.component.scss'
})
export class VoiceOfCustomerComponent {
  readonly SparklesIcon = Sparkles;

  // Voice of Customer topics
  readonly voiceTopics: VoiceCard[] = [
    {
      topic: 'Celebración Navideña',
      percentage: 48,
      emotion: 'Alegría, nostalgia',
      journey: 'Consideración → Compra',
      insight: 'Contenido familia genera alta identificación',
      icon: Gift,
      iconColor: 'red'
    },
    {
      topic: 'Promociones y Ofertas',
      percentage: 28,
      emotion: 'Entusiasmo, satisfacción',
      journey: 'Consideración',
      insight: 'Valor percibido supera expectativa de precio',
      icon: Tag,
      iconColor: 'orange'
    },
    {
      topic: 'Servicio al Cliente',
      percentage: 15,
      emotion: 'Frustración',
      journey: 'Post compra',
      insight: 'Demoras en respuesta generan amplificación negativa',
      icon: HeadphonesIcon,
      iconColor: 'green'
    },
    {
      topic: 'Logística y Entregas',
      percentage: 6,
      emotion: 'Decepción, enojo',
      journey: 'Post compra',
      insight: 'Plazo entrega evidencia gaps operativos',
      icon: Truck,
      iconColor: 'blue'
    },
    {
      topic: 'Calidad de Productos',
      percentage: 3,
      emotion: 'Decepción',
      journey: 'Post compra → Churn',
      insight: 'Expectativa vs. realidad en productos específicos',
      icon: Star,
      iconColor: 'purple'
    }
  ];
}

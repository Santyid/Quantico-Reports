import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, AlertTriangle, Sparkles, Package, Megaphone, HeadphonesIcon, LucideIconData } from 'lucide-angular';
import { KpiGroupCardComponent, KpiItem } from '../../../ui/kpi-group-card/kpi-group-card.component';
import { InsightCardComponent } from '../../../ui/insight-card/insight-card.component';
import { StatusBadgeComponent } from '../../../ui/status-badge/status-badge.component';
import { TopicInsight, EarlyWarningAlert, SentimentBreakdown } from '../../models/report.models';

export interface AreaRecommendation {
  area: string;
  action: string;
  icon: LucideIconData;
}

@Component({
  selector: 'app-executive-summary-2',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    KpiGroupCardComponent,
    InsightCardComponent,
    StatusBadgeComponent
  ],
  templateUrl: './executive-summary-2.component.html',
  styleUrl: './executive-summary-2.component.scss'
})
export class ExecutiveSummary2Component {
  readonly AlertIcon = AlertTriangle;
  readonly SparklesIcon = Sparkles;

  // All 5 KPIs in a single row
  readonly allKpis: KpiItem[] = [
    { label: 'Total Menciones', value: '2,157', change: 77.8 },
    { label: 'Net Sentiment', value: '75%', change: 3 },
    { label: 'Share of Voice', value: '15.4%', change: 5 },
    { label: 'Alcance Potencial', value: '3M', change: 12 },
    { label: 'Intención de Abandono', value: '8.6%', change: -2.6 }
  ];

  // Sentiment breakdown from image
  readonly sentimentBreakdown: SentimentBreakdown = {
    positive: 89,
    neutral: 8,
    negative: 3
  };

  // Platform insight
  readonly topPlatform = 'Twitter/X';
  readonly platformInsight = 'El monitoreo abarca Twitter/X, Facebook, Instagram, LinkedIn, Foros y Noticias. La mayor concentración de menciones se encuentra en redes sociales con un sentimiento predominantemente positivo (89%).';

  // Early warning alerts from image
  readonly earlyWarnings: EarlyWarningAlert[] = [
    {
      topic: 'Producto defectuoso',
      riskLevel: 'high',
      trend: 'up',
      mentions: 18,
      description: 'RIESGO ALTO: Quejas recurrentes por producto defectuoso (leche cuajada) sin respuesta oficial - 18 menciones en 30 días'
    },
    {
      topic: 'Percepción de calidad',
      riskLevel: 'medium',
      trend: 'up',
      mentions: 156,
      description: 'TENDENCIA NEGATIVA: Percepción "perdió calidad vs. años anteriores" aumentó 23% - Impacto en recompra'
    },
    {
      topic: 'Gap promesa-realidad',
      riskLevel: 'medium',
      trend: 'stable',
      mentions: 89,
      description: 'GAP PROMESA-REALIDAD: Marketing posiciona "calidad premium" pero 32% menciona "ingredientes chatarra"'
    }
  ];

  // Top 3 topics from image
  readonly topTopics: TopicInsight[] = [
    {
      topic: 'Campañas navideñas generan alta conexión emocional',
      mentions: 875,
      sentiment: { positive: 71, neutral: 20, negative: 9 },
      insight: 'Panetón y Leche Gloria edición navideña concentraron 875 menciones (71% positivas) por nostalgia y tradición familiar.',
      action: 'ACCIÓN: Amplificar storytelling nostálgico todo el año, no solo en navidad'
    },
    {
      topic: 'Price sensitivity amenaza lealtad de largo plazo',
      mentions: 456,
      sentiment: { positive: 32, neutral: 36, negative: 32 },
      insight: '32% de menciones negativas relacionadas con "más caro, menos peso". Elasticidad precio más alta de lo esperado.',
      action: 'ACCIÓN: Evaluar línea económica o promociones segmentadas en Q1 2026'
    },
    {
      topic: 'Brecha innovación vs. Alicorp se amplía',
      mentions: 340,
      sentiment: { positive: 72, neutral: 15, negative: 13 },
      insight: 'Alicorp domina narrativa de innovación (87% sentimiento vs. 72% Gloria). 340 menciones sobre innovación Gloria vs. 1,340 Alicorp.',
      action: 'ACCIÓN: Lanzar producto disruptivo Q1 + campaña "Gloria Innova"'
    }
  ];

  // Area Recommendations from image
  readonly areaRecommendations: AreaRecommendation[] = [
    {
      area: 'Producto',
      action: 'Audit cadena de frío (leche cuajada/mal olor)',
      icon: Package
    },
    {
      area: 'Marketing',
      action: 'Campaña transparencia ingredientes ("Gloria Natural")',
      icon: Megaphone
    },
    {
      area: 'CX',
      action: 'Protocolo respuesta <2h en quejas de calidad',
      icon: HeadphonesIcon
    }
  ];

  getRiskBadgeVariant(risk: 'high' | 'medium' | 'low'): 'error' | 'warning' | 'success' {
    const variants = { high: 'error', medium: 'warning', low: 'success' } as const;
    return variants[risk];
  }

  formatNumber(value: number): string {
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  }

  getTotalTopicMentions(): string {
    const total = this.topTopics.reduce((sum, topic) => sum + topic.mentions, 0);
    return this.formatNumber(total);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sparkles, TrendingUp, AlertTriangle, Calendar } from 'lucide-angular';
import { VerticalBarChartComponent } from '../../../ui/vertical-bar-chart/vertical-bar-chart.component';
import { HorizontalBarChartComponent } from '../../../ui/horizontal-bar-chart/horizontal-bar-chart.component';
import { KpiGroupCardComponent, KpiItem } from '../../../ui/kpi-group-card/kpi-group-card.component';
import { InsightCardComponent } from '../../../ui/insight-card/insight-card.component';
import { StatusBadgeComponent } from '../../../ui/status-badge/status-badge.component';

interface TopicCard {
  title: string;
  mentions: number;
  sentiment: {
    negative: number;
    neutral: number;
  };
}

interface TopUser {
  rank: number;
  username: string;
  handle: string;
  followers: string;
}

interface RiskSignal {
  type: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}

interface FeaturedPost {
  username: string;
  handle: string;
  date: string;
  content: string;
  replies: string;
  retweets: string;
  likes: string;
  views: string;
  insight: string;
}

@Component({
  selector: 'app-reporte-impacto',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    VerticalBarChartComponent,
    HorizontalBarChartComponent,
    KpiGroupCardComponent,
    InsightCardComponent,
    StatusBadgeComponent
  ],
  templateUrl: './reporte-impacto.component.html',
  styleUrl: './reporte-impacto.component.scss'
})
export class ReporteImpactoComponent {
  readonly SparklesIcon = Sparkles;
  readonly TrendingUpIcon = TrendingUp;
  readonly AlertTriangleIcon = AlertTriangle;
  readonly CalendarIcon = Calendar;

  // Header data
  readonly todayString: string;

  constructor() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.todayString = `${year}-${month}-${day}`;
  }

  // KPI data
  readonly kpis: KpiItem[] = [
    {
      value: '47,283',
      label: 'Total menciones',
      change: 1847,
      changeLabel: 'vs promedio'
    },
    {
      value: '+1,847%',
      label: 'Crecimiento',
      changeLabel: 'vs promedio histórico'
    },
    {
      value: '78% Neg',
      label: 'Sentimiento (6% Pos, 16% Neu)',
      change: -78,
      changeLabel: 'Predominantemente negativo'
    },
    {
      value: '8.3M',
      label: 'Audiencia potencial',
      change: 2134,
      changeLabel: 'vs promedio'
    }
  ];

  // Sentiment evolution chart data
  readonly sentimentEvolutionData = [
    {
      label: 'Ene 14',
      segments: [
        { value: 15, color: '#3ECC80', label: 'Positivo' },
        { value: 20, color: '#9e9e9e', label: 'Neutral' },
        { value: 65, color: '#F61A4A', label: 'Negativo' }
      ],
      total: 100
    },
    {
      label: 'Ene 15',
      segments: [
        { value: 12, color: '#3ECC80', label: 'Positivo' },
        { value: 18, color: '#9e9e9e', label: 'Neutral' },
        { value: 70, color: '#F61A4A', label: 'Negativo' }
      ],
      total: 100
    },
    {
      label: 'Ene 16',
      segments: [
        { value: 10, color: '#3ECC80', label: 'Positivo' },
        { value: 15, color: '#9e9e9e', label: 'Neutral' },
        { value: 75, color: '#F61A4A', label: 'Negativo' }
      ],
      total: 100
    },
    {
      label: 'Ene 16',
      segments: [
        { value: 8, color: '#3ECC80', label: 'Positivo' },
        { value: 14, color: '#9e9e9e', label: 'Neutral' },
        { value: 78, color: '#F61A4A', label: 'Negativo' }
      ],
      total: 100
    },
    {
      label: 'Ene 16',
      segments: [
        { value: 7, color: '#3ECC80', label: 'Positivo' },
        { value: 16, color: '#9e9e9e', label: 'Neutral' },
        { value: 77, color: '#F61A4A', label: 'Negativo' }
      ],
      total: 100
    },
    {
      label: 'Ene 17',
      segments: [
        { value: 6, color: '#3ECC80', label: 'Positivo' },
        { value: 16, color: '#9e9e9e', label: 'Neutral' },
        { value: 78, color: '#F61A4A', label: 'Negativo' }
      ],
      total: 100
    },
    {
      label: 'Ene 17',
      segments: [
        { value: 8, color: '#3ECC80', label: 'Positivo' },
        { value: 17, color: '#9e9e9e', label: 'Neutral' },
        { value: 75, color: '#F61A4A', label: 'Negativo' }
      ],
      total: 100
    },
    {
      label: 'Ene 17',
      segments: [
        { value: 10, color: '#3ECC80', label: 'Positivo' },
        { value: 18, color: '#9e9e9e', label: 'Neutral' },
        { value: 72, color: '#F61A4A', label: 'Negativo' }
      ],
      total: 100
    }
  ];

  readonly sentimentLegend = [
    { label: 'Positivo', color: '#3ECC80' },
    { label: 'Neutral', color: '#9e9e9e' },
    { label: 'Negativo', color: '#F61A4A' }
  ];

  // Platform activity data
  readonly platformData = [
    {
      label: 'X (Twitter)',
      icon: 'images/x-twitter-icon.svg',
      segments: [{ value: 25234, color: '#9e54e2', label: 'Menciones' }],
      total: 25234
    },
    {
      label: 'Facebook',
      icon: 'images/facebook-icon.svg',
      segments: [{ value: 14385, color: '#b176e8', label: 'Menciones' }],
      total: 14385
    },
    {
      label: 'Instagram',
      icon: 'images/instagram-icon.svg',
      segments: [{ value: 4534, color: '#be8cec', label: 'Menciones' }],
      total: 4534
    },
    {
      label: 'TikTok',
      icon: 'images/tiktok-icon.svg',
      segments: [{ value: 1890, color: '#d2b0f2', label: 'Menciones' }],
      total: 1890
    },
    {
      label: 'LinkedIn',
      icon: 'images/linkedin-icon.svg',
      segments: [{ value: 726, color: '#e1caf6', label: 'Menciones' }],
      total: 726
    }
  ];

  // Topic cards
  readonly topics: TopicCard[] = [
    { title: 'Falla de Servicio', mentions: 18492, sentiment: { negative: 87, neutral: 13 } },
    { title: 'Atención al Cliente', mentions: 14293, sentiment: { negative: 82, neutral: 18 } },
    { title: 'Reembolsos', mentions: 9847, sentiment: { negative: 76, neutral: 24 } },
    { title: 'Transparencia', mentions: 6234, sentiment: { negative: 72, neutral: 28 } },
    { title: 'Alternativas', mentions: 4892, sentiment: { negative: 65, neutral: 35 } },
    { title: 'Histérico de Problemas', mentions: 3628, sentiment: { negative: 68, neutral: 32 } }
  ];

  // Featured post
  readonly featuredPost: FeaturedPost = {
    username: 'Tech Reviewer Pro',
    handle: '@TechReviewerPro',
    date: '10 Ene',
    content: 'Llevo 6 horas sin poder acceder a mi cuenta de @Magnetic y su soporte me dice que no pueden ayudarme hasta dentro de 48 horas. ¿Alguien más con este problema? Esto es inaceptable para un servicio por el que pago $299/mes. 😡',
    replies: '3,247',
    retweets: '8,934',
    likes: '16,483',
    views: '2.5M vistas',
    insight: 'Este post generó el mayor engagement del período, siendo compartido por un influencer tech de alta credibilidad (347K seguidores) durante horario laboral. El contenido resonó con una audiencia de 2.5M y desencadenó una conversación masiva que amplificó la visibilidad de la situación.'
  };

  // Top users
  readonly topUsers: TopUser[] = [
    { rank: 1, username: '@TechReviewerPro', handle: 'Audiencia: 347K seguidores', followers: '' },
    { rank: 2, username: '@StartUpNewsDaily', handle: 'Audiencia: 186.1K seguidores', followers: '' },
    { rank: 3, username: '@BusinessUpdatesLATAM', handle: 'Audiencia: 89.7K seguidores', followers: '' },
    { rank: 4, username: '@ConsumerRightsOrg', handle: 'Audiencia: 73.4K seguidores', followers: '' },
    { rank: 5, username: '@DigitalMarketingGuru', handle: 'Audiencia: 42K seguidores', followers: '' }
  ];

  // Risk signals
  readonly riskSignals: RiskSignal[] = [
    {
      type: 'high',
      title: 'Escalamiento a medios',
      description: '3 portales tech publicaron artículos sobre el incidente'
    },
    {
      type: 'high',
      title: 'Hashtag trending',
      description: '#MagneticDown alcanzó tendencia en la región'
    },
    {
      type: 'medium',
      title: 'Memes virales',
      description: '47 memes creados sobre la marca en 24 horas'
    },
    {
      type: 'medium',
      title: 'Competencia activa',
      description: '2 competidores ofrecen descuentos para migración'
    },
    {
      type: 'high',
      title: 'Petición online',
      description: 'Creció petición con 8,920 firmas exigiendo compensación'
    }
  ];

  // Executive insight
  readonly executiveInsight = {
    title: 'INSIGHT EJECUTIVO GLOBAL',
    situation: 'Magnetic enfrentó una crisis reputacional de nivel alto originada por una falla técnica que afectó el acceso de usuarios premium durante horario laboral crítico. La crisis fue detonada por un influencer tech de alta credibilidad y amplificada orgánicamente por usuarios legítimos con el mismo problema.',
    impact: 'Por qué importa: El 78% de sentimiento negativo, combinado con 47K menciones (1,847% sobre promedio) y 8.3M de alcance potencial, indica daño reputacional significativo. La conversación no solo cuestiona la estabilidad técnica sino también la capacidad de respuesta y transparencia de la marca. La mención de "alternativas" y las ofertas de competidores señalan riesgo de churn.',
    risk: 'Nivel de riesgo: ALTO. La crisis escaló a medios, generó contenido viral negativo y activa memoria de problemas previos. Sin embargo, la conversación muestra señales de descenso natural tras 48 horas.',
    recommendation: 'Recomendación inmediata: Activar protocolo de comunicación de crisis con (1) statement oficial reconociendo el problema y acciones tomadas, (2) plan de compensación para usuarios afectados, (3) engagement directo con top influencers para neutralizar amplificación, y (4) monitoreo 24/7 en próximas 72 horas para detectar nuevos brotes.'
  };

  formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }
}

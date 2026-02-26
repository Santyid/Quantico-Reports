import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Check, AlertTriangle, Sparkles, MessageCircle, Star } from 'lucide-angular';
import { PieChartComponent, PieChartData } from '../../../ui/pie-chart/pie-chart.component';
import { HorizontalBarChartComponent, HorizontalBarData } from '../../../ui/horizontal-bar-chart/horizontal-bar-chart.component';
import { LineChartComponent, LineChartData } from '../../../ui/line-chart/line-chart.component';
import { InsightCardComponent } from '../../../ui/insight-card/insight-card.component';

@Component({
  selector: 'app-analisis-competitivo',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    PieChartComponent,
    HorizontalBarChartComponent,
    LineChartComponent,
    InsightCardComponent
  ],
  templateUrl: './analisis-competitivo.component.html',
  styleUrl: './analisis-competitivo.component.scss'
})
export class AnalisisCompetitivoComponent {
  // ========================================
  // Overview Section - 3 Cards
  // ========================================

  // Card 1: Sentimiento General (Donut + Platform bars)
  readonly sentimientoGeneralData: PieChartData[] = [
    { label: 'Positivo', value: 42, color: '#3ecc80' },
    { label: 'Neutral', value: 36, color: '#a8d5e5' },
    { label: 'Negativo', value: 22, color: '#f61a4a' }
  ];

  readonly sentimientoMenciones = [
    { label: 'Positivo', value: 42, count: 1484, color: '#3ecc80' },
    { label: 'Neutral', value: 36, count: 1313, color: '#a8d5e5' },
    { label: 'Negativo', value: 22, count: 810, color: '#f61a4a' }
  ];

  readonly principalesPlataformas = [
    { name: 'TikTok', icon: 'tiktok', value: 1156 },
    { name: 'Facebook', icon: 'facebook', value: 1049 },
    { name: 'Instagram', icon: 'instagram', value: 999 },
    { name: 'Twitter', icon: 'x', value: 260 },
    { name: 'LinkedIn', icon: 'linkedin', value: 122 }
  ];

  getMaxPlataformaValue(): number {
    return Math.max(...this.principalesPlataformas.map(p => p.value));
  }

  getPlataformaBarWidth(value: number): string {
    const max = this.getMaxPlataformaValue();
    return `${(value / max) * 100}%`;
  }

  formatPlataformaValue(value: number): string {
    return value.toLocaleString('es-ES');
  }

  formatNumber(value: number): string {
    return value.toLocaleString('es-ES');
  }

  // Card 2: Sentimiento por Marca (Horizontal stacked bars)
  readonly sentimientoPorMarcaData: HorizontalBarData[] = [
    { label: 'DIA', icon: 'images/dia-logo.svg', segments: [{ value: 80, color: '#3ecc80', label: 'Positivo' }, { value: 10, color: '#a8d5e5', label: 'Neutral' }, { value: 10, color: '#f61a4a', label: 'Negativo' }], total: 33159 },
    { label: 'Mercadona', icon: 'images/mercadona-logo.svg', segments: [{ value: 50, color: '#3ecc80', label: 'Positivo' }, { value: 20, color: '#a8d5e5', label: 'Neutral' }, { value: 30, color: '#f61a4a', label: 'Negativo' }], total: 11000 },
    { label: 'Carrefour', icon: 'images/carrefour-logo.svg', segments: [{ value: 60, color: '#3ecc80', label: 'Positivo' }, { value: 20, color: '#a8d5e5', label: 'Neutral' }, { value: 20, color: '#f61a4a', label: 'Negativo' }], total: 5200 },
    { label: 'Lidl', icon: 'images/lidl-logo.svg', segments: [{ value: 40, color: '#3ecc80', label: 'Positivo' }, { value: 30, color: '#a8d5e5', label: 'Neutral' }, { value: 30, color: '#f61a4a', label: 'Negativo' }], total: 8000 }
  ];

  readonly sentimientoMarcaLegend = [
    { label: 'Positivo', color: '#3ecc80' },
    { label: 'Neutral', color: '#a8d5e5' },
    { label: 'Negativo', color: '#f61a4a' }
  ];

  // Card 3: Share of Voice (Donut)
  readonly shareOfVoiceData: PieChartData[] = [
    { label: 'Día España', value: 47, color: '#f61a4a' },
    { label: 'Carrefour', value: 20, color: '#0061fe' },
    { label: 'Mercadona', value: 19, color: '#3ecc80' },
    { label: 'Lidl', value: 14, color: '#f4b137' }
  ];

  // Overview Insight
  readonly overviewInsight = 'DIA España lidera el Share of Voice con un 47%, manteniendo una ventaja significativa sobre sus competidores. El sentimiento general es mayoritariamente positivo (42%), aunque existe un 22% de menciones negativas que requieren atención. TikTok y Facebook son las plataformas con mayor actividad de conversación.';

  // ========================================
  // Benchmark Evolutivo Section
  // ========================================
  readonly benchmarkData: LineChartData = {
    labels: ['01/12', '02/12', '03/12', '04/12', '05/12', '06/12', '07/12', '08/12', '09/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', '21/12', '22/12', '23/12', '24/12', '25/12', '26/12', '27/12', '28/12', '29/12', '30/12'],
    series: [
      {
        name: 'DIA',
        color: '#0061fe',
        data: [539, 873, 1506, 448, 656, 1137, 689, 696, 178, 558, 1060, 556, 324, 418, 1038, 291, 481, 3650, 4258, 2648, 1901, 2183, 801, 952, 550, 326, 281, 79, 118, 781]
      },
      {
        name: 'Interbank',
        color: '#3ecc80',
        data: [237, 173, 324, 623, 412, 282, 358, 419, 312, 278, 456, 389, 298, 267, 312, 345, 289, 412, 523, 445, 389, 567, 423, 312, 289, 234, 198, 156, 134, 91]
      },
      {
        name: 'ScotiaBank',
        color: '#f4b137',
        data: [156, 189, 234, 267, 198, 223, 245, 189, 212, 234, 267, 289, 245, 212, 234, 256, 223, 289, 312, 278, 245, 289, 234, 212, 189, 167, 145, 123, 98, 84]
      },
      {
        name: 'BBVA Continental',
        color: '#f61a4a',
        data: [98, 112, 145, 167, 134, 156, 178, 145, 156, 167, 189, 178, 156, 134, 145, 167, 156, 178, 201, 189, 167, 178, 156, 134, 123, 112, 98, 87, 76, 54]
      }
    ]
  };

  readonly benchmarkHighlights = [
    {
      date: '21/12',
      brand: 'DIA',
      brandColor: '#0061fe',
      mentions: 4258,
      description: 'Juego de encontrar las palabras en el pupiletras virtual y ganarse una tablet.'
    },
    {
      date: '11/12',
      brand: 'Interbank',
      brandColor: '#3ecc80',
      mentions: 1084,
      description: 'Sorteo para ganar entradas para ver al cantante Lasso.'
    },
    {
      date: '04/12',
      brand: 'BBVA',
      brandColor: '#f61a4a',
      mentions: 823,
      description: 'Usuario Diego Grados se queja del tipo de cambio de soles a dólares del BBVA.'
    },
    {
      date: '31/12',
      brand: 'Scotiabank',
      brandColor: '#f4b137',
      mentions: 474,
      description: 'Saludo fin de año: En la publicación de Feliz Año Nuevo, los usuarios aprovecharon en presentar sus quejas relacionadas a App, banca telefónica y pagos.'
    }
  ];

  // ========================================
  // Legacy data (keeping for other sections)
  // ========================================

  // SOV Distribution (Pie Chart) - Legacy
  readonly sovData: PieChartData[] = [
    { label: 'TechNova', value: 38, color: '#0061fe', isHighlighted: true },
    { label: 'DataFlow', value: 28, color: '#f47a37' },
    { label: 'InsightHub', value: 22, color: '#3ECC80' },
    { label: 'Otros', value: 12, color: '#607d8b' }
  ];

  // NSS (Net Sentiment Score) data
  readonly nssData: { [key: string]: number } = {
    'TechNova': 28,
    'DataFlow': -16,
    'InsightHub': 22,
    'Otros': 5
  };

  // SOV Promociones Navideñas (Horizontal bars)
  readonly sovPromocionesData = [
    { name: 'Nuestra Marca', value: 75, isMain: true },
    { name: 'Competidor 1', value: 38, isMain: false },
    { name: 'Competidor 2', value: 7, isMain: false }
  ];

  // SOV Servicio al Cliente (Horizontal bars)
  readonly sovServicioData = [
    { name: 'Nuestra Marca', value: 63, isMain: true },
    { name: 'Competidor 1', value: 28, isMain: false },
    { name: 'Competidor 2', value: 18, isMain: false }
  ];

  readonly sovInsight = 'Tu marca lidera el Share of Voice con un 34.5%, manteniendo una ventaja de 12 puntos porcentuales sobre el competidor más cercano. Este liderazgo se ha consolidado principalmente gracias al lanzamiento de la nueva colección y la campaña de influencers en Instagram.';

  // Icons
  readonly CheckIcon = Check;
  readonly AlertTriangleIcon = AlertTriangle;
  readonly SparklesIcon = Sparkles;
  readonly MessageCircleIcon = MessageCircle;
  readonly StarIcon = Star;

  // ========================================
  // Benchmark: Top Content Section
  // ========================================
  readonly topContentData = [
    {
      brand: 'Scotiabank',
      brandLogo: 'images/scotiabank-logo.svg',
      imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop',
      sentiment: { positive: 100, neutral: 0, negative: 0 },
      comments: 18,
      likes: 23,
      title: 'Promoción Navideña',
      description: 'Sorteo de 5 tarjetas de regalo por compras superiores a $100 USD durante el mes de diciembre.'
    },
    {
      brand: 'BBVA',
      brandLogo: 'images/bbva-logo.svg',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
      sentiment: { positive: 78, neutral: 12, negative: 10 },
      comments: 45,
      likes: 67,
      title: 'App Móvil Renovada',
      description: 'Nuevo diseño de la aplicación móvil con funcionalidades de transferencias instantáneas.'
    },
    {
      brand: 'BCP',
      brandLogo: 'images/bcp-logo.svg',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      sentiment: { positive: 65, neutral: 25, negative: 10 },
      comments: 32,
      likes: 89,
      title: 'Campaña Fin de Año',
      description: 'Promoción de puntos bonus por uso de tarjetas de crédito en compras navideñas.'
    },
    {
      brand: 'Interbank',
      brandLogo: 'images/interbank-logo.svg',
      imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop',
      sentiment: { positive: 82, neutral: 15, negative: 3 },
      comments: 28,
      likes: 54,
      title: 'Concierto Exclusivo',
      description: 'Sorteo de entradas VIP para el concierto de fin de año con artistas internacionales.'
    }
  ];

  // Diferenciadores Percibidos
  readonly diferenciadores = [
    'Mejor relación calidad-precio',
    'Experiencia en tienda superior',
    'Variedad de productos'
  ];

  // Debilidades Competencia No Explotadas
  readonly debilidadesCompetencia = [
    { competitor: 'Competidor 1', weakness: 'Quejas recurrentes sobre stock' },
    { competitor: 'Competidor 2', weakness: 'Percepción de precios altos' }
  ];
}

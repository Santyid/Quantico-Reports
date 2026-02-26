import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalBarChartComponent, VerticalBarData } from '../../../ui/vertical-bar-chart/vertical-bar-chart.component';
import { StatusBadgeComponent, StatusBadgeVariant } from '../../../ui/status-badge/status-badge.component';
import { PieChartComponent, PieChartData } from '../../../ui/pie-chart/pie-chart.component';
import { HorizontalBarChartComponent, HorizontalBarData } from '../../../ui/horizontal-bar-chart/horizontal-bar-chart.component';
import { InsightCardComponent } from '../../../ui/insight-card/insight-card.component';

export interface PositiveDriver {
  driver: string;
  percentage: number;
  emotion: string;
  example: string;
}

export interface NegativeDriver {
  driver: string;
  percentage: number;
  severity: 'critico' | 'moderado';
  trend: 'escalando' | 'recurrente' | 'creciendo' | 'emergente';
}

@Component({
  selector: 'app-insights-marca',
  standalone: true,
  imports: [
    CommonModule,
    VerticalBarChartComponent,
    StatusBadgeComponent,
    PieChartComponent,
    HorizontalBarChartComponent,
    InsightCardComponent
  ],
  templateUrl: './insights-marca.component.html',
  styleUrl: './insights-marca.component.scss'
})
export class InsightsMarcaComponent {
  // Overview - Sentiment Donut Chart
  readonly overviewSentimentData: PieChartData[] = [
    { label: 'Positiva', value: 52, color: '#3ecc80' },
    { label: 'Neutra', value: 19, color: '#a8d5e5' },
    { label: 'Negativa', value: 29, color: '#f61a4a' }
  ];

  // Overview - Platform Activity Data (simple bars)
  readonly platformActivityData = [
    { name: 'X', icon: 'x', value: 29235, color: '#000000' },
    { name: 'Facebook', icon: 'facebook', value: 13239, color: '#1877F2' },
    { name: 'TikTok', icon: 'tiktok', value: 8524, color: '#ff0050' },
    { name: 'YouTube', icon: 'youtube', value: 5683, color: '#FF0000' },
    { name: 'LinkedIn', icon: 'linkedin', value: 47, color: '#0A66C2' }
  ];

  // Overview - Sentiment by Platform (stacked horizontal bars)
  readonly sentimentByPlatformData: HorizontalBarData[] = [
    { label: 'Facebook', icon: 'images/facebook-icon.svg', segments: [{ value: 12, color: '#3ecc80', label: 'Positivo' }, { value: 21, color: '#a8d5e5', label: 'Neutral' }, { value: 67, color: '#f61a4a', label: 'Negativo' }], total: 100 },
    { label: 'X', icon: 'images/x-twitter-icon.svg', segments: [{ value: 15, color: '#3ecc80', label: 'Positivo' }, { value: 32, color: '#a8d5e5', label: 'Neutral' }, { value: 53, color: '#f61a4a', label: 'Negativo' }], total: 100 },
    { label: 'TikTok', icon: 'images/tiktok-icon.svg', segments: [{ value: 46, color: '#3ecc80', label: 'Positivo' }, { value: 14, color: '#a8d5e5', label: 'Neutral' }, { value: 40, color: '#f61a4a', label: 'Negativo' }], total: 100 },
    { label: 'LinkedIn', icon: 'images/linkedin-icon.svg', segments: [{ value: 41, color: '#3ecc80', label: 'Positivo' }, { value: 48, color: '#a8d5e5', label: 'Neutral' }, { value: 11, color: '#f61a4a', label: 'Negativo' }], total: 100 },
    { label: 'YouTube', icon: 'images/youtube-icon.svg', segments: [{ value: 80, color: '#3ecc80', label: 'Positivo' }, { value: 0, color: '#a8d5e5', label: 'Neutral' }, { value: 20, color: '#f61a4a', label: 'Negativo' }], total: 100 },
    { label: 'Instagram', icon: 'images/instagram-icon.svg', segments: [{ value: 0, color: '#3ecc80', label: 'Positivo' }, { value: 0, color: '#a8d5e5', label: 'Neutral' }, { value: 100, color: '#f61a4a', label: 'Negativo' }], total: 100 }
  ];

  readonly sentimentLegend = [
    { label: 'Positivo', color: '#3ecc80' },
    { label: 'Neutral', color: '#a8d5e5' },
    { label: 'Negativo', color: '#f61a4a' }
  ];

  // AI Insight for overview
  readonly overviewInsight = 'X concentra el 63% de las menciones y lidera la conversación con mayor alcance y engagement, lo que sugiere que el esfuerzo comunicacional está correctamente enfocado en esta plataforma. Facebook se posiciona como el segundo canal más relevante con un 23% de participación, destacando por generar conversaciones más extensas y engagement sostenido. TikTok muestra un crecimiento acelerado entre audiencias jóvenes, mientras que LinkedIn mantiene un perfil más institucional con menor volumen pero mayor calidad de interacciones. Se recomienda mantener la estrategia actual en X, reforzar la presencia en Facebook para capitalizar el engagement orgánico, y desarrollar contenido nativo para TikTok orientado a nuevas generaciones.';

  getMaxPlatformValue(): number {
    return Math.max(...this.platformActivityData.map(p => p.value));
  }

  getPlatformBarWidth(value: number): string {
    const max = this.getMaxPlatformValue();
    return `${(value / max) * 100}%`;
  }

  formatPlatformValue(value: number): string {
    if (value >= 1000) {
      return value.toLocaleString('es-ES');
    }
    return value.toString();
  }

  // Daily sentiment data (30 days) for multi-line spline area chart
  readonly weeklySentimentData: VerticalBarData[] = [
    { label: '1',  segments: [{ value: 62, color: '#3ECC80' }, { value: 26, color: '#A8D5E5' }, { value: 12, color: '#f61a4a' }], total: 100 },
    { label: '2',  segments: [{ value: 65, color: '#3ECC80' }, { value: 24, color: '#A8D5E5' }, { value: 11, color: '#f61a4a' }], total: 100 },
    { label: '3',  segments: [{ value: 63, color: '#3ECC80' }, { value: 27, color: '#A8D5E5' }, { value: 10, color: '#f61a4a' }], total: 100 },
    { label: '4',  segments: [{ value: 67, color: '#3ECC80' }, { value: 23, color: '#A8D5E5' }, { value: 10, color: '#f61a4a' }], total: 100 },
    { label: '5',  segments: [{ value: 64, color: '#3ECC80' }, { value: 25, color: '#A8D5E5' }, { value: 11, color: '#f61a4a' }], total: 100 },
    { label: '6',  segments: [{ value: 68, color: '#3ECC80' }, { value: 22, color: '#A8D5E5' }, { value: 10, color: '#f61a4a' }], total: 100 },
    { label: '7',  segments: [{ value: 70, color: '#3ECC80' }, { value: 21, color: '#A8D5E5' }, { value: 9,  color: '#f61a4a' }], total: 100 },
    { label: '8',  segments: [{ value: 66, color: '#3ECC80' }, { value: 23, color: '#A8D5E5' }, { value: 11, color: '#f61a4a' }], total: 100 },
    { label: '9',  segments: [{ value: 69, color: '#3ECC80' }, { value: 20, color: '#A8D5E5' }, { value: 11, color: '#f61a4a' }], total: 100 },
    { label: '10', segments: [{ value: 71, color: '#3ECC80' }, { value: 19, color: '#A8D5E5' }, { value: 10, color: '#f61a4a' }], total: 100 },
    { label: '11', segments: [{ value: 67, color: '#3ECC80' }, { value: 21, color: '#A8D5E5' }, { value: 12, color: '#f61a4a' }], total: 100 },
    { label: '12', segments: [{ value: 60, color: '#3ECC80' }, { value: 24, color: '#A8D5E5' }, { value: 16, color: '#f61a4a' }], total: 100 },
    { label: '13', segments: [{ value: 56, color: '#3ECC80' }, { value: 26, color: '#A8D5E5' }, { value: 18, color: '#f61a4a' }], total: 100 },
    { label: '14', segments: [{ value: 54, color: '#3ECC80' }, { value: 28, color: '#A8D5E5' }, { value: 18, color: '#f61a4a' }], total: 100 },
    { label: '15', segments: [{ value: 57, color: '#3ECC80' }, { value: 27, color: '#A8D5E5' }, { value: 16, color: '#f61a4a' }], total: 100 },
    { label: '16', segments: [{ value: 61, color: '#3ECC80' }, { value: 25, color: '#A8D5E5' }, { value: 14, color: '#f61a4a' }], total: 100 },
    { label: '17', segments: [{ value: 63, color: '#3ECC80' }, { value: 24, color: '#A8D5E5' }, { value: 13, color: '#f61a4a' }], total: 100 },
    { label: '18', segments: [{ value: 66, color: '#3ECC80' }, { value: 22, color: '#A8D5E5' }, { value: 12, color: '#f61a4a' }], total: 100 },
    { label: '19', segments: [{ value: 69, color: '#3ECC80' }, { value: 21, color: '#A8D5E5' }, { value: 10, color: '#f61a4a' }], total: 100 },
    { label: '20', segments: [{ value: 72, color: '#3ECC80' }, { value: 19, color: '#A8D5E5' }, { value: 9,  color: '#f61a4a' }], total: 100 },
    { label: '21', segments: [{ value: 70, color: '#3ECC80' }, { value: 20, color: '#A8D5E5' }, { value: 10, color: '#f61a4a' }], total: 100 },
    { label: '22', segments: [{ value: 73, color: '#3ECC80' }, { value: 18, color: '#A8D5E5' }, { value: 9,  color: '#f61a4a' }], total: 100 },
    { label: '23', segments: [{ value: 71, color: '#3ECC80' }, { value: 20, color: '#A8D5E5' }, { value: 9,  color: '#f61a4a' }], total: 100 },
    { label: '24', segments: [{ value: 68, color: '#3ECC80' }, { value: 22, color: '#A8D5E5' }, { value: 10, color: '#f61a4a' }], total: 100 },
    { label: '25', segments: [{ value: 74, color: '#3ECC80' }, { value: 18, color: '#A8D5E5' }, { value: 8,  color: '#f61a4a' }], total: 100 },
    { label: '26', segments: [{ value: 72, color: '#3ECC80' }, { value: 19, color: '#A8D5E5' }, { value: 9,  color: '#f61a4a' }], total: 100 },
    { label: '27', segments: [{ value: 75, color: '#3ECC80' }, { value: 17, color: '#A8D5E5' }, { value: 8,  color: '#f61a4a' }], total: 100 },
    { label: '28', segments: [{ value: 73, color: '#3ECC80' }, { value: 19, color: '#A8D5E5' }, { value: 8,  color: '#f61a4a' }], total: 100 },
    { label: '29', segments: [{ value: 76, color: '#3ECC80' }, { value: 16, color: '#A8D5E5' }, { value: 8,  color: '#f61a4a' }], total: 100 },
    { label: '30', segments: [{ value: 74, color: '#3ECC80' }, { value: 18, color: '#A8D5E5' }, { value: 8,  color: '#f61a4a' }], total: 100 }
  ];

  readonly chartLegend = [
    { label: 'Positivo', color: '#3ECC80' },
    { label: 'Neutral', color: '#A8D5E5' },
    { label: 'Negativo', color: '#f61a4a' }
  ];

  // Positive drivers from image
  readonly positiveDrivers: PositiveDriver[] = [
    {
      driver: 'Tradición Familiar',
      percentage: 38,
      emotion: 'Nostalgia',
      example: '"El panetón de la abuela, tradición que no puede faltar"'
    },
    {
      driver: 'Sabor Superior',
      percentage: 27,
      emotion: 'Satisfacción',
      example: '"Tú más rico, textura suave irresistible"'
    },
    {
      driver: 'Orgullo Peruano',
      percentage: 19,
      emotion: 'Orgullo',
      example: '"Marca peruana que nos representa en el mundo"'
    }
  ];

  // Negative drivers from image
  readonly negativeDrivers: NegativeDriver[] = [
    {
      driver: 'Precio Alto / Menos Peso',
      percentage: 32,
      severity: 'critico',
      trend: 'escalando'
    },
    {
      driver: 'Producto Defectuoso',
      percentage: 24,
      severity: 'critico',
      trend: 'recurrente'
    },
    {
      driver: 'Percepción "No es Leche"',
      percentage: 18,
      severity: 'moderado',
      trend: 'creciendo'
    },
    {
      driver: 'Ingredientes "Chatarra"',
      percentage: 16,
      severity: 'moderado',
      trend: 'emergente'
    }
  ];

  readonly mainInsight = '"Valoramos la campaña Leche Gloria Navidad como un motivo de unión familiar, destacando que su diseño festivo y la calidad nutritiva de la leche son infaltables en la mesa durante las fiestas, evocando recuerdos de infancia y generando orgullo por lo peruano."';

  getTrendLabel(trend: string): string {
    const labels: Record<string, string> = {
      escalando: '↑ Escalando',
      recurrente: '→ Recurrente',
      creciendo: '↑ Creciendo',
      emergente: '↑ Emergente'
    };
    return labels[trend] || trend;
  }

  getSeverityBadgeVariant(severity: 'critico' | 'moderado'): StatusBadgeVariant {
    return severity === 'critico' ? 'error' : 'warning';
  }

  getSeverityLabel(severity: 'critico' | 'moderado'): string {
    return severity === 'critico' ? 'Crítico' : 'Moderado';
  }
}

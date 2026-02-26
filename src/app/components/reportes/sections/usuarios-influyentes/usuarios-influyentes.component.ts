import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Star, Users, Globe, Sparkles, TrendingUp, Info, Bookmark, Share2, MessageCircle, ThumbsUp, Zap } from 'lucide-angular';
import { PieChartComponent, PieChartData } from '../../../ui/pie-chart/pie-chart.component';
import { InsightCardComponent } from '../../../ui/insight-card/insight-card.component';

interface InfluencerUser {
  name: string;
  avatar: string;
  platform: 'twitter' | 'instagram' | 'facebook' | 'tiktok';
  count: number;
}

interface TopPublication {
  position: number;
  imageUrl: string;
  title: string;
  date: string;
  avatar: string;
  username: string;
  metrics: {
    bookmarks: number;
    shares: number;
    comments: number;
    likes: number;
    engagement: number;
  };
  analysis: string;
}

@Component({
  selector: 'app-usuarios-influyentes',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    PieChartComponent,
    InsightCardComponent
  ],
  templateUrl: './usuarios-influyentes.component.html',
  styleUrl: './usuarios-influyentes.component.scss'
})
export class UsuariosInfluyentesComponent {
  // Icons
  readonly StarIcon = Star;
  readonly UsersIcon = Users;
  readonly GlobeIcon = Globe;
  readonly SparklesIcon = Sparkles;
  readonly TrendingUpIcon = TrendingUp;
  readonly InfoIcon = Info;
  readonly BookmarkIcon = Bookmark;
  readonly Share2Icon = Share2;
  readonly MessageCircleIcon = MessageCircle;
  readonly ThumbsUpIcon = ThumbsUp;
  readonly ZapIcon = Zap;

  // Sentiment Donut Data
  readonly sentimentData: PieChartData[] = [
    { label: 'Negativo', value: 62, color: '#f61a4a' },
    { label: 'Neutral', value: 23, color: '#a8d5e5' },
    { label: 'Positivo', value: 15, color: '#3ecc80' }
  ];

  readonly totalMentions = 1982;

  readonly sentimentLegend = [
    { label: 'Positivo', value: 15, color: '#3ecc80' },
    { label: 'Neutral', value: 23, color: '#a8d5e5' },
    { label: 'Negativo', value: 62, color: '#f61a4a' }
  ];

  // Insight text
  readonly insightText = 'Durante el periodo se evidenció una conversación polarizada en torno a Pluz, marcada por reclamos recurrentes por cortes de luz prolongados, especialmente en fechas sensibles, cuestionamientos a los tiempos de reposición, a la comunicación y a la gestión de medidores, así como la intervención de entidades reguladoras y municipales ante emergencias eléctricas. En paralelo, se registraron menciones positivas asociadas a su solidez financiera, colocación de bonos, avances en infraestructura, alumbrado público y acciones de alto impacto humano.';

  // KPIs
  readonly influenciaMedia = 4;
  readonly influenciaAlta = 8;
  readonly audienciaPotencial = 2624293;

  // Usuarios promotores
  readonly usuariosPromotores: InfluencerUser[] = [
    { name: 'SEMANAeconomica', avatar: 'https://ui-avatars.com/api/?name=SE&background=1877F2&color=fff&size=40', platform: 'twitter', count: 3 },
    { name: 'MuniLima', avatar: 'https://ui-avatars.com/api/?name=ML&background=607d8b&color=fff&size=40', platform: 'twitter', count: 2 },
    { name: 'OSINERGMIN', avatar: 'https://ui-avatars.com/api/?name=OS&background=00A94F&color=fff&size=40', platform: 'twitter', count: 2 },
    { name: 'rocimaldonado', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop', platform: 'twitter', count: 2 },
    { name: 'AdrianzenEduard', avatar: 'https://ui-avatars.com/api/?name=AE&background=9e54e2&color=fff&size=40', platform: 'twitter', count: 1 }
  ];

  // Usuarios detractores
  readonly usuariosDetractores: InfluencerUser[] = [
    { name: 'SEMANAeconomica', avatar: 'https://ui-avatars.com/api/?name=SE&background=1877F2&color=fff&size=40', platform: 'twitter', count: 3 },
    { name: 'MuniLima', avatar: 'https://ui-avatars.com/api/?name=ML&background=607d8b&color=fff&size=40', platform: 'twitter', count: 2 },
    { name: 'OSINERGMIN', avatar: 'https://ui-avatars.com/api/?name=OS&background=00A94F&color=fff&size=40', platform: 'twitter', count: 2 },
    { name: 'rocimaldonado', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop', platform: 'twitter', count: 2 },
    { name: 'AdrianzenEduard', avatar: 'https://ui-avatars.com/api/?name=AE&background=9e54e2&color=fff&size=40', platform: 'twitter', count: 1 }
  ];

  // Publicaciones con mayor conversación
  readonly topPublications: TopPublication[] = [
    {
      position: 1,
      imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=200&h=200&fit=crop',
      title: '5 estrategias para optimizar tu funnel de leads B2B',
      date: '15 Dic 2025',
      avatar: 'https://ui-avatars.com/api/?name=JM&background=0061fe&color=fff&size=40',
      username: '@juanmarketing',
      metrics: { bookmarks: 250, shares: 250, comments: 250, likes: 250, engagement: 250 },
      analysis: 'El hook inicial "¿Sigues programando posts manualmente?" generó curiosidad inmediata. El formato problema-solución con demostración rápida del producto resultó altamente efectivo para dirigir tráfico cualificado al sitio.'
    },
    {
      position: 2,
      imageUrl: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=200&h=200&fit=crop',
      title: 'Cómo duplicamos nuestro engagement en 30 días',
      date: '14 Dic 2025',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop',
      username: '@socialexpert',
      metrics: { bookmarks: 189, shares: 312, comments: 178, likes: 445, engagement: 198 },
      analysis: 'La historia de transformación con datos reales capturó la atención de la audiencia. Los números específicos (30 días, duplicar) generaron credibilidad y FOMO entre profesionales de marketing.'
    },
    {
      position: 3,
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=200&h=200&fit=crop',
      title: 'Tutorial: Automatiza tu content calendar',
      date: '12 Dic 2025',
      avatar: 'https://ui-avatars.com/api/?name=CM&background=9e54e2&color=fff&size=40',
      username: '@contentmaster',
      metrics: { bookmarks: 156, shares: 98, comments: 234, likes: 312, engagement: 167 },
      analysis: 'El formato tutorial paso a paso con imágenes claras facilitó la comprensión. La promesa de ahorro de tiempo resonó fuertemente con community managers ocupados.'
    }
  ];

  formatNumber(value: number): string {
    return value.toLocaleString('es-ES');
  }

  getBarWidth(count: number, type: 'promoter' | 'detractor'): string {
    const users = type === 'promoter' ? this.usuariosPromotores : this.usuariosDetractores;
    const maxCount = Math.max(...users.map(u => u.count));
    const percentage = (count / maxCount) * 100;
    return `${percentage}%`;
  }
}

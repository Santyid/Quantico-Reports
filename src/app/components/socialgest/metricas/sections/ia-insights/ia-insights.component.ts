import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Users, TrendingUp, BarChart3, Layers, ChevronDown, Info } from 'lucide-angular';

interface InsightStat {
  value: string;
  label: string;
  change: string;
}

interface RankingItem {
  name: string;
  value: string;
}

interface TableRow {
  format: string;
  engage: string;
  acciones: string;
  saves: string;
}

interface Insight {
  icon: any;
  iconColor: string;
  title: string;
  subtitle: string;
  type: 'stats' | 'ranking' | 'table';
  stats?: InsightStat[];
  rankingItems?: RankingItem[];
  tableColumns?: string[];
  tableRows?: TableRow[];
}

@Component({
  selector: 'app-ia-insights',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ia-insights.component.html',
  styleUrl: './ia-insights.component.scss'
})
export class IaInsightsComponent {
  readonly ChevronDownIcon = ChevronDown;
  readonly TrendingUpIcon = TrendingUp;
  readonly InfoIcon = Info;

  readonly insights: Insight[] = [
    {
      icon: Users,
      iconColor: 'blue',
      title: 'Comportamiento de audiencia',
      subtitle: 'El 43% de las interacciones provienen de no seguidores',
      type: 'stats',
      stats: [
        { value: 'Martes', label: 'Mejor día', change: '50%' },
        { value: '10-12h', label: 'Mejor hora', change: '50%' },
        { value: '8.7%', label: 'Engagement avg', change: '50%' },
      ]
    },
    {
      icon: TrendingUp,
      iconColor: 'yellow',
      title: 'Métricas de conversión',
      subtitle: '486 acciones en perfil este período (+34%)',
      type: 'stats',
      stats: [
        { value: 'Martes', label: 'Mejor día', change: '50%' },
        { value: '10-12h', label: 'Mejor hora', change: '50%' },
        { value: '8.7%', label: 'Engagement avg', change: '50%' },
      ]
    },
    {
      icon: BarChart3,
      iconColor: 'orange',
      title: 'Rendimiento de contenido',
      subtitle: 'Los Reels educativos lideran en engagement y alcance',
      type: 'ranking',
      rankingItems: [
        { name: 'Reels educativos', value: '42% en engagement' },
        { name: 'Carruseles caso estudio', value: '42% en engagement' },
        { name: 'Posts con lead magnet', value: '42% en engagement' },
      ]
    },
    {
      icon: Layers,
      iconColor: 'purple',
      title: 'Comparativa de formatos',
      subtitle: 'Reels superan a otros formatos en acciones de conversión',
      type: 'table',
      tableColumns: ['Formato', 'Engage', 'Acciones', 'Saves'],
      tableRows: [
        { format: 'Reels', engage: '9.2%', acciones: '9.2%', saves: '9.2%' },
        { format: 'Carruseles', engage: '9.2%', acciones: '9.2%', saves: '9.2%' },
        { format: 'Posts', engage: '9.2%', acciones: '9.2%', saves: '9.2%' },
      ]
    }
  ];
}

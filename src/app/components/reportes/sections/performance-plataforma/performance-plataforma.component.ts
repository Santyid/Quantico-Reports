import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHighlightComponent, PostData } from '../../../ui/post-highlight/post-highlight.component';

interface PlatformKpi {
  platform: string;
  icon: string;
  mentionsPercentage: number;
  mentions: number;
  engagementRate: number;
  sentiment: string;
  bestPost: PostData;
}

@Component({
  selector: 'app-performance-plataforma',
  standalone: true,
  imports: [
    CommonModule,
    PostHighlightComponent
  ],
  templateUrl: './performance-plataforma.component.html',
  styleUrl: './performance-plataforma.component.scss'
})
export class PerformancePlataformaComponent {
  // Platform KPIs with best posts
  readonly platformKpis: PlatformKpi[] = [
    {
      platform: 'Instagram',
      icon: 'images/instagram-icon.svg',
      mentionsPercentage: 68,
      mentions: 12016,
      engagementRate: 8.2,
      sentiment: '92% positivo',
      bestPost: {
        platform: 'Instagram',
        platformIcon: 'images/instagram-icon.svg',
        author: 'SocialGest',
        authorHandle: '@socialgest',
        title: '5 estrategias para optimizar tu funnel de leads B2B',
        content: '5 estrategias para optimizar tu funnel de leads B2B',
        engagement: 250,
        shares: 250,
        reactions: 250,
        comments: 250,
        bookmarks: 250,
        date: '15 Dic 2025',
        imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=300&h=300&fit=crop',
        insight: 'El hook inicial "¿Sigues programando posts manualmente?" generó curiosidad inmediata. El formato problema→solución con demostración rápida del producto resultó altamente efectivo para dirigir tráfico cualificado al sitio.'
      }
    },
        {
      platform: 'Facebook',
      icon: 'images/facebook-icon.svg',
      mentionsPercentage: 18,
      mentions: 3254,
      engagementRate: 5.4,
      sentiment: '78% positivo',
      bestPost: {
        platform: 'Facebook',
        platformIcon: 'images/facebook-icon.svg',
        author: 'SocialGest',
        authorHandle: 'SocialGest',
        title: 'Testimonio: Cómo Magnetic ayudó a nuestra empresa',
        content: 'Testimonio: Cómo Magnetic ayudó a nuestra empresa',
        engagement: 320,
        shares: 156,
        reactions: 890,
        comments: 67,
        date: '10 Dic 2025',
        imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=300&fit=crop',
        insight: 'Los posts con testimonios de clientes reales y métricas específicas generan 3x más engagement que contenido promocional. Audiencia busca prueba social y casos de éxito tangibles.'
      }
    },
    {
      platform: 'Twitter',
      icon: 'images/x-twitter-icon.svg',
      mentionsPercentage: 9,
      mentions: 1627,
      engagementRate: 6.8,
      sentiment: '64% positivo',
      bestPost: {
        platform: 'Twitter',
        platformIcon: 'images/x-twitter-icon.svg',
        author: 'SocialGest',
        authorHandle: '@socialgest',
        title: 'Thread: El futuro de la automatización en retail',
        content: 'Thread: Cómo automatizar tu estrategia de contenido',
        engagement: 180,
        shares: 320,
        reactions: 450,
        comments: 89,
        date: '12 Dic 2025',
        imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=300&h=300&fit=crop',
        insight: ' Los threads educativos con datos duros generan alta viralidad. El formato "problema → data → solución" resuena especialmente bien con audiencia B2B y tech-savvy.'
      }
    },
    // {
    //   platform: 'TikTok',
    //   icon: 'images/tiktok-icon.svg',
    //   mentionsPercentage: 5,
    //   mentions: 890,
    //   engagementRate: 12.5,
    //   sentiment: '95% positivo',
    //   bestPost: {
    //     platform: 'TikTok',
    //     platformIcon: 'images/tiktok-icon.svg',
    //     author: 'SocialGest',
    //     authorHandle: '@socialgest',
    //     title: 'POV: Tu jefe te pide reportes de redes sociales',
    //     content: 'POV: Tu jefe te pide reportes de redes sociales',
    //     engagement: 1200,
    //     shares: 890,
    //     reactions: 5600,
    //     comments: 234,
    //     date: '8 Dic 2025',
    //     imageUrl: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=300&h=300&fit=crop',
    //     insight: 'El contenido humorístico y relatable tuvo alto engagement. El formato POV conectó con pain points de la audiencia.'
    //   }
    // },
    {
      platform: 'LinkedIn',
      icon: 'images/linkedin-icon.svg',
      mentionsPercentage: 5,
      mentions: 720,
      engagementRate: 5.8,
      sentiment: '95% positivo',
      bestPost: {
        platform: 'LinkedIn',
        platformIcon: 'images/linkedin-icon.svg',
        author: 'SocialGest',
        authorHandle: 'SocialGest',
        title: 'Caso de éxito: ROI de 340% en 6 meses',
        content: 'Caso de éxito: ROI de 340% en 6 meses',
        engagement: 450,
        shares: 178,
        reactions: 1200,
        comments: 56,
        date: '5 Dic 2025',
        imageUrl: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=300&fit=crop',
        insight: 'LinkedIn es la plataforma con mayor engagement rate (11.3%) para Magnetic. El contenido de liderazgo de pensamiento y casos de éxito con métricas específicas genera altísima interacción con decisores.'
      }
    }
  ];

  formatNumber(value: number): string {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toString();
  }
}

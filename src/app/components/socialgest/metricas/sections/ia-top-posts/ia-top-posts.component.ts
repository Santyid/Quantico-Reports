import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Bookmark, Share2, MessageCircle, ThumbsUp, Send, Sparkles } from 'lucide-angular';

interface TopPost {
  position: number;
  thumbnail: string;
  date: string;
  title: string;
  metrics: { icon: any; value: string }[];
  aiAnalysis: string;
}

@Component({
  selector: 'app-ia-top-posts',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ia-top-posts.component.html',
  styleUrl: './ia-top-posts.component.scss'
})
export class IaTopPostsComponent {
  readonly SparklesIcon = Sparkles;

  readonly posts: TopPost[] = [
    {
      position: 1,
      thumbnail: 'images/placeholder-post-1.jpg',
      date: '15 Dic 2025',
      title: '5 estrategias para optimizar tu funnel de leads B2B',
      metrics: [
        { icon: Bookmark, value: '250' },
        { icon: Share2, value: '250' },
        { icon: MessageCircle, value: '250' },
        { icon: ThumbsUp, value: '250' },
        { icon: Send, value: '250' },
      ],
      aiAnalysis: 'El hook inicial "¿Sigues programando posts manualmente?" generó curiosidad inmediata. El formato problema-solución con demostración rápida del producto resultó altamente efectivo para dirigir tráfico cualificado al sitio.'
    },
    {
      position: 2,
      thumbnail: 'images/placeholder-post-2.jpg',
      date: '15 Dic 2025',
      title: '5 estrategias para optimizar tu funnel de leads B2B',
      metrics: [
        { icon: Bookmark, value: '250' },
        { icon: Share2, value: '250' },
        { icon: MessageCircle, value: '250' },
        { icon: ThumbsUp, value: '250' },
        { icon: Send, value: '250' },
      ],
      aiAnalysis: 'El hook inicial "¿Sigues programando posts manualmente?" generó curiosidad inmediata. El formato problema-solución con demostración rápida del producto resultó altamente efectivo para dirigir tráfico cualificado al sitio.'
    },
    {
      position: 3,
      thumbnail: 'images/placeholder-post-3.jpg',
      date: '15 Dic 2025',
      title: '5 estrategias para optimizar tu funnel de leads B2B',
      metrics: [
        { icon: Bookmark, value: '250' },
        { icon: Share2, value: '250' },
        { icon: MessageCircle, value: '250' },
        { icon: ThumbsUp, value: '250' },
        { icon: Send, value: '250' },
      ],
      aiAnalysis: 'El hook inicial "¿Sigues programando posts manualmente?" generó curiosidad inmediata. El formato problema-solución con demostración rápida del producto resultó altamente efectivo para dirigir tráfico cualificado al sitio.'
    }
  ];
}

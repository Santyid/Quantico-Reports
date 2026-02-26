import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Bookmark, Reply, MessageCircle, Heart, Zap, Sparkles } from 'lucide-angular';

export interface PostData {
  platform: string;
  platformIcon: string;
  author: string;
  authorHandle: string;
  content: string;
  title?: string;
  engagement: number;
  shares: number;
  reactions: number;
  comments?: number;
  bookmarks?: number;
  date: string;
  insight: string;
  imageUrl?: string;
  rank?: number;
}

@Component({
  selector: 'app-post-highlight',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './post-highlight.component.html',
  styleUrl: './post-highlight.component.scss'
})
export class PostHighlightComponent {
  readonly BookmarkIcon = Bookmark;
  readonly ShareIcon = Reply;
  readonly CommentsIcon = MessageCircle;
  readonly ReactionsIcon = Heart;
  readonly EngagementIcon = Zap;
  readonly AiIcon = Sparkles;

  @Input() post!: PostData;

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

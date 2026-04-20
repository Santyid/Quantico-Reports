import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule, BellRing, X, ExternalLink, AlertTriangle, CheckSquare,
  FileText, Users, Pencil, CreditCard, Clock, MessageCircle, XCircle, Search,
  Check, Filter, ChevronDown, Sparkles, Monitor, RefreshCw
} from 'lucide-angular';
import { LucideIconData } from 'lucide-angular';

export interface FilterOption {
  value: string;
  label: string;
  icon: LucideIconData;
}

export type NotificationIconType =
  'error' | 'post' | 'team' | 'approved' | 'edited' |
  'billing' | 'blocked' | 'subscription' | 'task' | 'comment' | 'rejected';

export type SocialNetwork = 'Instagram' | 'Facebook' | 'Twitter/X' | 'LinkedIn' | 'TikTok';

export interface Notification {
  id: number;
  iconType: NotificationIconType;
  title: string;
  description: string;
  network?: SocialNetwork;
  dateGroup: 'Hoy' | 'Ayer' | 'Esta semana';
  time: string;
  fullDate: string;
  read: boolean;
}

@Component({
  selector: 'app-notificaciones-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './notificaciones-sidebar.component.html',
  styleUrl: './notificaciones-sidebar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NotificacionesSidebarComponent implements OnInit {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  readonly BellRingIcon = BellRing;
  readonly CloseIcon = X;
  readonly ExternalLinkIcon = ExternalLink;
  readonly CheckIcon = Check;
  readonly SearchIcon = Search;
  readonly FilterIcon = Filter;
  readonly ChevronDownIcon = ChevronDown;

  activeTab: 'nuevas' | 'todas' = 'nuevas';
  selectedFilter = 'Todas';
  searchQuery = '';
  isFilterDropdownOpen = false;

  readonly filterOptions: FilterOption[] = [
    { value: 'Publicaciones', label: 'Publicaciones', icon: FileText },
    { value: 'Equipos', label: 'Equipos', icon: Users },
    { value: 'IA', label: 'IA', icon: Sparkles },
    { value: 'Canales', label: 'Canales', icon: Monitor },
    { value: 'Listas cíclicas', label: 'Listas cíclicas', icon: RefreshCw },
  ];

  notifications: Notification[] = [
    // Hoy - 4 unread
    {
      id: 1,
      iconType: 'error',
      title: 'Error al publicar en Instagram',
      description: 'Tal persona comento un post en instagram',
      network: 'Instagram',
      dateGroup: 'Hoy',
      time: 'Hace 24 hs',
      fullDate: '26/03/2026',
      read: false
    },
    {
      id: 2,
      iconType: 'post',
      title: 'Post pendiente de aprobación',
      description: 'marketing_co · Creado por Ana López',
      network: 'Facebook',
      dateGroup: 'Hoy',
      time: 'Hace 6 hs',
      fullDate: '26/03/2026',
      read: false
    },
    {
      id: 3,
      iconType: 'team',
      title: 'Nuevo miembro en el equipo',
      description: 'Mario Rodriguez fue agregado a Mi Equipo Marketing',
      dateGroup: 'Hoy',
      time: 'Hace 2 hs',
      fullDate: '26/03/2026',
      read: false
    },
    {
      id: 4,
      iconType: 'team',
      title: 'Te asignaron a un tablero',
      description: 'Nicolas Rodriguez te agregó al tablero Marketing Q1',
      dateGroup: 'Hoy',
      time: 'Hace 30 min',
      fullDate: '26/03/2026',
      read: false
    },
    // Ayer - 3 read
    {
      id: 5,
      iconType: 'approved',
      title: 'Post aprobado',
      description: 'brand_oficial · Aprobado por Carlos Díaz',
      network: 'Twitter/X',
      dateGroup: 'Ayer',
      time: 'Ayer, 4:15 pm',
      fullDate: '25/03/2026',
      read: true
    },
    {
      id: 6,
      iconType: 'edited',
      title: 'Post editado por un miembro',
      description: 'suministros_iam · Editado por Ana López',
      network: 'Instagram',
      dateGroup: 'Ayer',
      time: 'Ayer, 11:30 am',
      fullDate: '25/03/2026',
      read: true
    },
    {
      id: 7,
      iconType: 'billing',
      title: 'Plan Pro renovado',
      description: 'Tu suscripción fue renovada · $29.99 USD',
      dateGroup: 'Ayer',
      time: 'Ayer, 9:00 am',
      fullDate: '25/03/2026',
      read: true
    },
    // Esta semana - 5 read
    {
      id: 8,
      iconType: 'blocked',
      title: 'Cuenta de Instagram bloqueada',
      description: 'suministros_iam · Requiere reconexión',
      network: 'Instagram',
      dateGroup: 'Esta semana',
      time: 'Lun, 2:00 pm',
      fullDate: '20/03/2026',
      read: true
    },
    {
      id: 9,
      iconType: 'subscription',
      title: 'Tu suscripción vence pronto',
      description: 'Quedan 7 días antes de que expire tu plan',
      dateGroup: 'Esta semana',
      time: 'Lun, 1:00 pm',
      fullDate: '20/03/2026',
      read: true
    },
    {
      id: 10,
      iconType: 'task',
      title: 'Nombre de tarea actualizado',
      description: 'Campaña verano fue renombrada en Marketing Q1',
      dateGroup: 'Esta semana',
      time: 'Lun, 1:00 pm',
      fullDate: '26/03/2026',
      read: true
    },
    {
      id: 11,
      iconType: 'comment',
      title: 'Nuevo comentario en un post',
      description: 'Mario Rodriguez comentó en suministros_iam',
      network: 'Instagram',
      dateGroup: 'Esta semana',
      time: 'Lun, 11:00 am',
      fullDate: '20/03/2026',
      read: true
    },
    {
      id: 12,
      iconType: 'rejected',
      title: 'Post rechazado',
      description: 'brand_oficial · Rechazado por Carlos Díaz',
      network: 'LinkedIn',
      dateGroup: 'Esta semana',
      time: 'Lun, 10:00 am',
      fullDate: '20/03/2026',
      read: true
    }
  ];

  get filteredNotifications(): Notification[] {
    let result = this.notifications;
    if (this.activeTab === 'nuevas') {
      result = result.filter(n => !n.read);
    }
    return result;
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.read).length;
  }

  get allCount(): number {
    return this.notifications.length;
  }

  get groupedNotifications(): { group: string; items: Notification[] }[] {
    const groups: string[] = ['Hoy', 'Ayer', 'Esta semana'];
    const filtered = this.filteredNotifications;
    return groups
      .map(group => ({
        group,
        items: filtered.filter(n => n.dateGroup === group)
      }))
      .filter(g => g.items.length > 0);
  }

  ngOnInit(): void {}

  toggleFilterDropdown(): void {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
  }

  selectFilter(option: FilterOption): void {
    this.selectedFilter = option.label;
    this.isFilterDropdownOpen = false;
  }

  closeFilterDropdown(): void {
    this.isFilterDropdownOpen = false;
  }

  close(): void {
    this.isOpen = false;
    this.closed.emit();
  }

  onBackdropClick(): void {
    this.close();
  }

  setTab(tab: 'nuevas' | 'todas'): void {
    this.activeTab = tab;
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => n.read = true);
  }

  getIconForType(iconType: NotificationIconType): LucideIconData {
    switch (iconType) {
      case 'error': return AlertTriangle;
      case 'post': return FileText;
      case 'team': return Users;
      case 'approved': return CheckSquare;
      case 'edited': return Pencil;
      case 'billing': return CreditCard;
      case 'blocked': return AlertTriangle;
      case 'subscription': return Clock;
      case 'task': return FileText;
      case 'comment': return MessageCircle;
      case 'rejected': return XCircle;
    }
  }

  getNetworkBadgeClass(network?: SocialNetwork): string {
    if (!network) return '';
    const map: Record<string, string> = {
      'Instagram': 'notif-sidebar__badge--instagram',
      'Facebook': 'notif-sidebar__badge--facebook',
      'Twitter/X': 'notif-sidebar__badge--twitter',
      'LinkedIn': 'notif-sidebar__badge--linkedin',
      'TikTok': 'notif-sidebar__badge--tiktok'
    };
    return map[network] || '';
  }
}

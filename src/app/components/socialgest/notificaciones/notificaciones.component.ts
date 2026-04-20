import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Bell, ExternalLink, AlertTriangle, CheckCircle, FileText, Clock, Search, Eye } from 'lucide-angular';
import { LucideIconData } from 'lucide-angular';
import { ButtonComponent } from '../../ui/button/button.component';

export type NotificationType = 'error' | 'info' | 'warning' | 'success';
export type SocialNetwork = 'Instagram' | 'Facebook' | 'Twitter' | 'LinkedIn' | 'TikTok';

export interface NotificationItem {
  id: number;
  type: NotificationType;
  title: string;
  description: string;
  network?: SocialNetwork;
  dateGroup: 'Hoy' | 'Ayer' | 'Esta semana';
  time: string;
  fullDate: string;
  read: boolean;
  category: string;
}

interface TabDef {
  key: string;
  label: string;
  count?: number;
}

@Component({
  selector: 'app-notificaciones',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ButtonComponent],
  templateUrl: './notificaciones.component.html',
  styleUrl: './notificaciones.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class NotificacionesComponent {
  readonly BellIcon = Bell;
  readonly ExternalLinkIcon = ExternalLink;
  readonly SearchIcon = Search;
  readonly EyeIcon = Eye;

  activeTab = 'publicaciones';
  activeFilter: 'todas' | 'no-leidos' = 'todas';

  readonly tabs: TabDef[] = [
    { key: 'publicaciones', label: 'Publicaciones', count: 5 },
    { key: 'equipos', label: 'Equipos' },
    { key: 'ordenes', label: 'Ordenes / Pagos' },
    { key: 'listas', label: 'Listas ciclicas' },
    { key: 'usuarios', label: 'Usuarios RRSS' },
    { key: 'ia', label: 'IA' }
  ];

  notifications: NotificationItem[] = [
    {
      id: 1,
      type: 'error',
      title: 'Error al publicar en Instagram',
      description: 'La publicacion programada para las 14:00 no se pudo publicar por un error de permisos.',
      network: 'Instagram',
      dateGroup: 'Hoy',
      time: 'Hace 24 min',
      fullDate: '26/03/2026',
      read: false,
      category: 'publicaciones'
    },
    {
      id: 2,
      type: 'info',
      title: 'Post pendiente de aprobacion',
      description: 'marketing_co - Creado por Ana Lopez',
      network: 'Facebook',
      dateGroup: 'Hoy',
      time: 'Hace 6 hs',
      fullDate: '26/03/2026',
      read: false,
      category: 'publicaciones'
    },
    {
      id: 3,
      type: 'success',
      title: 'Publicacion exitosa en Twitter',
      description: 'El post "Lanzamiento Q2" se publico correctamente en Twitter/X.',
      network: 'Twitter',
      dateGroup: 'Hoy',
      time: 'Hace 8 hs',
      fullDate: '26/03/2026',
      read: true,
      category: 'publicaciones'
    },
    {
      id: 4,
      type: 'warning',
      title: 'Token de acceso por expirar',
      description: 'El token de LinkedIn expira en 3 dias. Renuevalo para evitar interrupciones.',
      network: 'LinkedIn',
      dateGroup: 'Ayer',
      time: 'Hace 1 dia',
      fullDate: '25/03/2026',
      read: false,
      category: 'publicaciones'
    },
    {
      id: 5,
      type: 'info',
      title: 'Nuevo miembro en el equipo',
      description: 'Carlos Rodriguez fue agregado al equipo de Marketing Digital.',
      dateGroup: 'Ayer',
      time: 'Hace 1 dia',
      fullDate: '25/03/2026',
      read: true,
      category: 'equipos'
    },
    {
      id: 6,
      type: 'success',
      title: 'Publicacion programada confirmada',
      description: 'Se confirmo la publicacion para el 28/03 a las 10:00 AM en Instagram.',
      network: 'Instagram',
      dateGroup: 'Ayer',
      time: 'Hace 2 dias',
      fullDate: '24/03/2026',
      read: true,
      category: 'publicaciones'
    },
    {
      id: 7,
      type: 'error',
      title: 'Fallo en la conexion con TikTok',
      description: 'No se pudieron obtener las metricas de TikTok. Verifica la conexion.',
      network: 'TikTok',
      dateGroup: 'Esta semana',
      time: 'Hace 4 dias',
      fullDate: '22/03/2026',
      read: true,
      category: 'publicaciones'
    },
    {
      id: 8,
      type: 'success',
      title: 'Reporte semanal generado',
      description: 'El reporte de metricas de la semana del 17-23 de marzo esta disponible.',
      dateGroup: 'Esta semana',
      time: 'Hace 5 dias',
      fullDate: '21/03/2026',
      read: false,
      category: 'publicaciones'
    },
    {
      id: 9,
      type: 'info',
      title: 'Actualizacion de permisos de equipo',
      description: 'Se actualizaron los permisos del equipo Contenido para editar publicaciones.',
      dateGroup: 'Esta semana',
      time: 'Hace 5 dias',
      fullDate: '21/03/2026',
      read: true,
      category: 'equipos'
    }
  ];

  get filteredNotifications(): NotificationItem[] {
    let filtered = this.notifications.filter(n => n.category === this.activeTab);
    if (this.activeFilter === 'no-leidos') {
      filtered = filtered.filter(n => !n.read);
    }
    return filtered;
  }

  get unreadCountForTab(): number {
    return this.notifications.filter(n => n.category === this.activeTab && !n.read).length;
  }

  get groupedNotifications(): { group: string; items: NotificationItem[] }[] {
    const groups: string[] = ['Hoy', 'Ayer', 'Esta semana'];
    const filtered = this.filteredNotifications;
    return groups
      .map(group => ({
        group,
        items: filtered.filter(n => n.dateGroup === group)
      }))
      .filter(g => g.items.length > 0);
  }

  setTab(key: string): void {
    this.activeTab = key;
  }

  setFilter(filter: 'todas' | 'no-leidos'): void {
    this.activeFilter = filter;
  }

  markAllAsRead(): void {
    this.notifications
      .filter(n => n.category === this.activeTab)
      .forEach(n => n.read = true);
  }

  getTabCount(tab: TabDef): number {
    if (tab.count !== undefined) return tab.count;
    return this.notifications.filter(n => n.category === tab.key && !n.read).length;
  }

  getIconForType(type: NotificationType): LucideIconData {
    switch (type) {
      case 'error': return AlertTriangle;
      case 'warning': return Clock;
      case 'success': return CheckCircle;
      case 'info': return FileText;
    }
  }

  getNetworkClass(network?: SocialNetwork): string {
    if (!network) return '';
    return `notificaciones__network-badge--${network.toLowerCase()}`;
  }
}

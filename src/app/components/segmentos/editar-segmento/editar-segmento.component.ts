import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Plus,
  X,
  Check,
  Pencil,
  Trash2,
  Ellipsis,
  EllipsisVertical,
  Link2,
  RefreshCw,
  Search,
  Info
} from 'lucide-angular';
import { StatusBadgeComponent } from '../../ui/status-badge/status-badge.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ToastComponent } from '../../ui/toast/toast.component';
import { ConfirmModalComponent } from '../../ui/confirm-modal/confirm-modal.component';

export type ActiveTab = 'general' | 'canales' | 'keywords' | 'sentimiento' | 'etiquetas' | 'etiquetas-automatizadas';

export interface TagColor {
  bg: string;
  text: string;
  label: string;
}

export interface Etiqueta {
  id: number;
  nombre: string;
  tipo: string;
  colorIdx: number;
  selected: boolean;
}

export interface Canal {
  id: string;
  nombre: string;
  bgClass: string;
  estado: 'conectado' | 'sin-conectar';
  mostrarVer: boolean;
}

@Component({
  selector: 'app-editar-segmento',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    StatusBadgeComponent,
    ButtonComponent,
    ToastComponent,
    ConfirmModalComponent
  ],
  templateUrl: './editar-segmento.component.html',
  styleUrl: './editar-segmento.component.scss'
})
export class EditarSegmentoComponent implements OnInit {
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronDownIcon = ChevronDown;
  readonly ChevronUpIcon = ChevronUp;
  readonly PlusIcon = Plus;
  readonly XIcon = X;
  readonly CheckIcon = Check;
  readonly PencilIcon = Pencil;
  readonly TrashIcon = Trash2;
  readonly EllipsisIcon = EllipsisVertical;
  readonly EllipsisHIcon = Ellipsis;
  readonly LinkIcon = Link2;
  readonly RefreshIcon = RefreshCw;
  readonly SearchIcon = Search;
  readonly InfoIcon = Info;

  // General
  segmentoId: number | null = null;
  activeTab: ActiveTab = 'general';
  nombre = 'Prueba N1';
  limiteMenciones = 25000;
  estado: 'Activo' | 'Inactivo' = 'Activo';
  nombreHasError = false;

  // Dirty tracking (initial saved values)
  private savedNombre = 'Prueba N1';
  private savedLimiteMenciones = 25000;

  // Status dropdown
  statusDropdownOpen = false;

  // Toast
  showToast = false;
  toastMessage = 'Tu información ha sido guardada exitosamente.';

  // Sentimiento
  sentMarca = '';
  sentIndustria = '';
  sentCompetidores = '';
  sentPositivo = 'Interes en adquirir el producto\nConsultar donde obtener el producto\nRecomendar la marca a otros\nComparar favorablemente contra competidores';
  sentNegativo = 'Quejas sobre cobros o dinero retenido\nMala experiencia con servicio al cliente\nIntencion de cancelar o darse de baja\nPreferir un competidor sobre la marca';
  sentNeutro = 'Preguntas simples sobre horarios o ubicaciones\nSaludos sin carga emocional';

  // Tag colors palette
  readonly tagColors: TagColor[] = [
    { bg: '#d1fae5', text: '#065f46', label: 'Verde' },
    { bg: '#dbeafe', text: '#1e40af', label: 'Azul' },
    { bg: '#ffedd5', text: '#9a3412', label: 'Naranja' },
    { bg: '#f3f4f6', text: '#374151', label: 'Gris' },
    { bg: '#ccfbf1', text: '#115e59', label: 'Teal' },
    { bg: '#fef3c7', text: '#92400e', label: 'Amarillo' },
    { bg: '#ecfccb', text: '#3f6212', label: 'Lima' },
    { bg: '#fee2e2', text: '#991b1b', label: 'Rojo' },
  ];

  readonly tipoOptions = ['General', 'Sentimiento', 'Producto', 'Canal', 'Campaña'];

  etiquetas: Etiqueta[] = EditarSegmentoComponent.generateEtiquetas(500);

  tagsVisibleCount = 24;
  tagsSearchOpen = false;
  tagsSearchValue = '';
  colorFilter = 'all';
  tagSort = 'creacion';
  openTagMenuId: number | null = null;

  // Modal: agregar etiqueta
  showTagModal = false;
  modalTagNombre = '';
  modalTagTipo = '';
  modalTagColorIdx = 0;
  private nextTagId = 501;

  // Modal: desactivar segmento
  showDesactivarModal = false;

  // Modal: connection type selector (Paso 1 de 2)
  showConnectionModal = false;
  connectionType: 'api' | 'url' | null = null;
  connectionModalCanalId = '';
  connectionModalCanalNombre = '';

  // Modal: contratar canal
  showContratarModal = false;
  contratarModalCanalNombre = '';

  // Modal: conectar por URL
  showUrlModal = false;
  urlModalCanalNombre = '';
  urlModalInput = '';
  urlModalCanalId = '';
  urlModalTipo: 'Marca propia' | 'Competencia' = 'Marca propia';

  // Channels
  canales: Canal[] = [
    { id: 'facebook',     nombre: 'Facebook',          bgClass: '',         estado: 'conectado',    mostrarVer: true  },
    { id: 'instagram',    nombre: 'Instagram',          bgClass: '',         estado: 'conectado',    mostrarVer: true  },
    { id: 'x',            nombre: 'X / Twitter',        bgClass: 'bg-black', estado: 'conectado',    mostrarVer: false },
    { id: 'linkedin',     nombre: 'Linkedin',           bgClass: '',         estado: 'conectado',    mostrarVer: true  },
    { id: 'youtube',      nombre: 'Youtube',            bgClass: '',         estado: 'conectado',    mostrarVer: false },
    { id: 'tiktok',       nombre: 'Tiktok',             bgClass: 'bg-black', estado: 'conectado',    mostrarVer: false },
    { id: 'playstore',    nombre: 'Play Store',         bgClass: 'bg-grey',  estado: 'sin-conectar', mostrarVer: false },
    { id: 'appstore',     nombre: 'App Store',          bgClass: '',         estado: 'sin-conectar', mostrarVer: false },
    { id: 'googlebiz',    nombre: 'Google Business',    bgClass: 'bg-grey',  estado: 'sin-conectar', mostrarVer: false },
    { id: 'metaads',      nombre: 'Meta Ads',           bgClass: '',         estado: 'sin-conectar', mostrarVer: false },
    { id: 'linkedinads',  nombre: 'Linkedin Ads (BETA)', bgClass: '',        estado: 'sin-conectar', mostrarVer: false },
  ];

  openChannelMenuId: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.segmentoId = parseInt(params['id']);
      }
    });
    this.route.queryParams.subscribe(qp => {
      if (qp['tab']) {
        this.activeTab = qp['tab'] as ActiveTab;
      }
    });
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.openTagMenuId = null;
    this.openChannelMenuId = null;
    this.statusDropdownOpen = false;
  }

  setTab(tab: ActiveTab): void {
    this.activeTab = tab;
  }

  goBack(): void {
    this.router.navigate(['/segmentos']);
  }

  getEstadoVariant(): 'success' | 'neutral' {
    return this.estado === 'Activo' ? 'success' : 'neutral';
  }

  onSetEstado(estado: 'Activo' | 'Inactivo'): void {
    this.estado = estado;
    this.statusDropdownOpen = false;
  }

  onRequestDesactivar(): void {
    this.statusDropdownOpen = false;
    this.showDesactivarModal = true;
  }

  onConfirmDesactivar(): void {
    this.estado = 'Inactivo';
    this.showDesactivarModal = false;
  }

  onCancelDesactivar(): void {
    this.showDesactivarModal = false;
  }

  get isGeneralDirty(): boolean {
    return this.nombre !== this.savedNombre || this.limiteMenciones !== this.savedLimiteMenciones;
  }

  onGuardar(): void {
    if (!this.nombre.trim()) {
      this.nombreHasError = true;
      setTimeout(() => { this.nombreHasError = false; }, 2000);
      return;
    }
    this.savedNombre = this.nombre;
    this.savedLimiteMenciones = this.limiteMenciones;
    this.showToast = true;
  }

  onToastDismissed(): void {
    this.showToast = false;
  }

  stepLimite(delta: number): void {
    this.limiteMenciones = Math.max(0, this.limiteMenciones + delta);
  }

  // --- Sentimiento ---

  getExampleCount(text: string): number {
    if (!text.trim()) return 0;
    return text.split('\n').filter(line => line.trim().length > 0).length;
  }

  onAnalizarSentimiento(): void {
    this.showToast = true;
    this.toastMessage = 'Análisis de sentimiento guardado exitosamente.';
  }

  onResetSentimiento(): void {
    this.sentMarca = '';
    this.sentIndustria = '';
    this.sentCompetidores = '';
    this.sentPositivo = '';
    this.sentNegativo = '';
    this.sentNeutro = '';
  }

  // --- Etiquetas ---

  get filteredEtiquetas(): Etiqueta[] {
    let result = [...this.etiquetas];
    if (this.tagsSearchValue.trim()) {
      const q = this.tagsSearchValue.toLowerCase();
      result = result.filter(t => t.nombre.toLowerCase().includes(q));
    }
    if (this.colorFilter !== 'all') {
      result = result.filter(t => t.colorIdx === parseInt(this.colorFilter));
    }
    if (this.tagSort === 'usadas') {
      result.sort((a, b) => (b.selected ? 1 : 0) - (a.selected ? 1 : 0));
    }
    return result;
  }

  get visibleEtiquetas(): Etiqueta[] {
    return this.filteredEtiquetas.slice(0, this.tagsVisibleCount);
  }

  get hasMoreTags(): boolean {
    return this.filteredEtiquetas.length > this.tagsVisibleCount;
  }

  showMoreTags(): void {
    this.tagsVisibleCount += 100;
  }

  showLessTags(): void {
    this.tagsVisibleCount = 24;
  }

  toggleTagMenu(id: number, event: Event): void {
    event.stopPropagation();
    this.openTagMenuId = this.openTagMenuId === id ? null : id;
  }

  toggleTagSelection(etiqueta: Etiqueta): void {
    etiqueta.selected = !etiqueta.selected;
  }

  openAddTagModal(): void {
    this.modalTagNombre = '';
    this.modalTagTipo = '';
    this.modalTagColorIdx = 0;
    this.showTagModal = true;
  }

  closeTagModal(): void {
    this.showTagModal = false;
  }

  onCreateTag(): void {
    if (!this.modalTagNombre.trim()) return;
    this.etiquetas.push({
      id: this.nextTagId++,
      nombre: this.modalTagNombre.trim(),
      tipo: this.modalTagTipo || 'General',
      colorIdx: this.modalTagColorIdx,
      selected: false
    });
    this.closeTagModal();
  }

  onDeleteTag(id: number): void {
    this.openTagMenuId = null;
    this.etiquetas = this.etiquetas.filter(t => t.id !== id);
  }

  getTagStyle(colorIdx: number): { background: string; color: string } {
    const c = this.tagColors[colorIdx];
    return { background: c.bg, color: c.text };
  }

  get modalPreviewStyle(): { background: string; color: string } {
    return this.getTagStyle(this.modalTagColorIdx);
  }

  // --- Canales ---

  toggleChannelMenu(id: string, event: Event): void {
    event.stopPropagation();
    this.openChannelMenuId = this.openChannelMenuId === id ? null : id;
  }

  openConnectionModalForCanal(canal: Canal): void {
    this.connectionType = null;
    this.connectionModalCanalId = canal.id;
    this.connectionModalCanalNombre = canal.nombre;
    this.showConnectionModal = true;
  }

  closeConnectionModal(): void {
    this.showConnectionModal = false;
  }

  selectConnectionType(type: 'api' | 'url'): void {
    this.connectionType = type;
  }

  onConnectionNext(): void {
    if (!this.connectionType) return;
    this.showConnectionModal = false;
    if (this.connectionType === 'url') {
      this.urlModalCanalId = this.connectionModalCanalId;
      this.urlModalCanalNombre = this.connectionModalCanalNombre;
      this.urlModalInput = 'https://';
      this.urlModalTipo = 'Marca propia';
      this.showUrlModal = true;
    }
  }

  closeUrlModal(): void {
    this.showUrlModal = false;
  }

  onUrlModalBack(): void {
    this.showUrlModal = false;
    this.showConnectionModal = true;
  }

  setUrlModalTipo(tipo: 'Marca propia' | 'Competencia'): void {
    this.urlModalTipo = tipo;
  }

  onConectar(): void {
    this.closeUrlModal();
  }

  openContratarModal(canal: Canal): void {
    this.contratarModalCanalNombre = canal.nombre;
    this.showContratarModal = true;
  }

  closeContratarModal(): void {
    this.showContratarModal = false;
  }

  onContactarWhatsApp(): void {
    window.open('https://wa.me/', '_blank');
    this.showContratarModal = false;
  }

  onVerCanal(canal: Canal): void {
    this.router.navigate(['/segmentos/canal', canal.id]);
  }

  private static generateEtiquetas(count: number): Etiqueta[] {
    const baseNames = [
      'Marketing', 'Ventas', 'Soporte', 'Urgente', 'Producto', 'Feedback',
      'Redes sociales', 'Competencia', 'Tendencias', 'Prensa', 'Influencer',
      'Positivo', 'Negativo', 'Neutro', 'Reputación', 'Crisis', 'Engagement',
      'Alcance orgánico', 'Publicidad', 'Retención', 'Churn', 'Satisfacción',
      'Queja', 'Sugerencia', 'Embajadores', 'Contenido viral', 'Innovación',
      'Servicio al cliente', 'Branding', 'SEO', 'Campaña digital', 'Email',
      'Promoción', 'Descuento', 'Lanzamiento', 'Evento', 'Webinar',
      'Podcast', 'Newsletter', 'Blog', 'Video', 'Infografía', 'Encuesta',
      'Testimonio', 'Caso de éxito', 'Partner', 'Alianza', 'Comunidad',
      'Fidelización', 'Onboarding', 'Upsell', 'Cross-sell', 'Referido',
      'Awareness', 'Consideración', 'Conversión', 'Remarketing', 'Lead',
      'Prospecto', 'Cliente VIP', 'Segmento A', 'Segmento B', 'Segmento C',
      'Orgánico', 'Pagado', 'Viral', 'Trending', 'Estacional', 'Recurrente',
      'Primera compra', 'Recompra', 'Abandonó carrito', 'Suscriptor',
      'Free trial', 'Premium', 'Enterprise', 'Startup', 'Pyme', 'Corporativo',
      'Región Norte', 'Región Sur', 'Región Centro', 'Internacional',
      'Español', 'Inglés', 'Portugués', 'Mención directa', 'Mención indirecta',
      'Hashtag', 'Story', 'Reel', 'Post', 'Comentario', 'Review',
      'Calificación alta', 'Calificación baja', 'NPS Promotor', 'NPS Detractor'
    ];
    const tipos = ['General', 'Sentimiento', 'Producto', 'Canal', 'Campaña'];
    const result: Etiqueta[] = [];
    for (let i = 0; i < count; i++) {
      const baseName = baseNames[i % baseNames.length];
      const suffix = i < baseNames.length ? '' : ` ${Math.floor(i / baseNames.length) + 1}`;
      result.push({
        id: i + 1,
        nombre: baseName + suffix,
        tipo: tipos[i % tipos.length],
        colorIdx: i % 8,
        selected: i % 13 === 0
      });
    }
    return result;
  }
}

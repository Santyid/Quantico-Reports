import { Component, ChangeDetectorRef, HostListener, OnInit, inject } from '@angular/core';
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
  Info,
  CircleCheck,
  Ban,
  CircleMinus,
  Sparkles,
  Key,
  Edit3,
  Eye,
  Calendar
} from 'lucide-angular';
import { StatusBadgeComponent } from '../../ui/status-badge/status-badge.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ToastComponent } from '../../ui/toast/toast.component';
import { ConfirmModalComponent } from '../../ui/confirm-modal/confirm-modal.component';
import { TableComponent, TableColumn, TableIconAction } from '../../ui/table/table.component';
import { SelectComponent, SelectOption } from '../../ui/select/select.component';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ChannelSelectorComponent, ChannelOption } from '../../ui/channel-selector/channel-selector.component';

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

export interface SavedKeyword {
  id: string;
  name: string;
  keywords: string[];
  excludedKeywords: string[];
  createdAt: Date;
  status: 'active' | 'paused';
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
    ConfirmModalComponent,
    TableComponent,
    SelectComponent,
    ModalComponent,
    ChannelSelectorComponent
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
  readonly CircleCheckIcon = CircleCheck;
  readonly BanIcon = Ban;
  readonly CircleMinusIcon = CircleMinus;
  readonly SparklesIcon = Sparkles;
  readonly KeyIcon = Key;
  readonly EditIcon = Edit3;
  readonly EyeIcon = Eye;
  readonly CalendarIcon = Calendar;

  private cdr = inject(ChangeDetectorRef);

  // Keywords
  activeKeywordsTab: 'ai' | 'list' = 'ai';
  openKwMenuId: string | null = null;
  kwModalOpen = false;
  kwManualInput = '';
  kwSelectedChannels: string[] = [];
  kwShowAdvanced = false;
  kwSelectedSegmento = '';
  kwSelectedEtiquetas = '';
  kwSelectedInfluencia = '';
  kwSelectedSentimiento = '';
  kwUserInput = '';
  kwIsGenerating = false;
  kwHasConfigured = false;
  kwIsEditingConfig = false;

  savedKeywords: SavedKeyword[] = [
    { id: '1', name: 'cocacola', keywords: ['coca-cola', 'cocacola', '#cocacola'], excludedKeywords: ['zero', 'light'], createdAt: new Date('2024-01-15'), status: 'active' },
    { id: '2', name: 'pepsi', keywords: ['pepsi', 'pepsico', '#pepsi'], excludedKeywords: ['zero', 'light'], createdAt: new Date('2024-01-10'), status: 'active' },
  ];

  readonly kwColumns: TableColumn[] = [
    { key: 'keywords', header: 'Keywords' },
    { key: 'excludedKeywords', header: 'Palabra no contenida' },
    { key: 'createdAt', header: 'Fecha creación', width: '180px' },
    { key: 'status', header: 'Estado', type: 'badge', width: '160px' },
    { key: 'actions', header: '', type: 'text', width: '50px', align: 'center' }
  ];

  readonly kwChannelOptions: ChannelOption[] = [
    { value: 'instagram', label: 'Instagram', image: 'images/instagram-icon.svg' },
    { value: 'facebook', label: 'Facebook', image: 'images/facebook-icon.svg' },
    { value: 'twitter', label: 'X (Twitter)', image: 'images/x-twitter-icon.svg' },
    { value: 'tiktok', label: 'TikTok', image: 'images/tiktok-icon.svg' },
    { value: 'youtube', label: 'YouTube', image: 'images/youtube-icon.svg' },
    { value: 'linkedin', label: 'LinkedIn', image: 'images/linkedin-icon.svg' },
  ];

  readonly kwSegmentoOptions: SelectOption[] = [
    { value: 'todos', label: 'Todos' }, { value: 'clientes', label: 'Clientes' }, { value: 'prospectos', label: 'Prospectos' }
  ];
  readonly kwEtiquetasOptions: SelectOption[] = [
    { value: 'todas', label: 'Todas' }, { value: 'urgente', label: 'Urgente' }, { value: 'importante', label: 'Importante' }
  ];
  readonly kwInfluenciaOptions: SelectOption[] = [
    { value: 'todas', label: 'Todas' }, { value: 'alta', label: 'Alta' }, { value: 'media', label: 'Media' }, { value: 'baja', label: 'Baja' }
  ];
  readonly kwSentimientoOptions: SelectOption[] = [
    { value: 'todos', label: 'Todos' }, { value: 'positivo', label: 'Positivo' }, { value: 'neutral', label: 'Neutral' }, { value: 'negativo', label: 'Negativo' }
  ];

  get kwTableData(): Record<string, unknown>[] {
    return this.savedKeywords.map(kw => ({
      id: kw.id,
      keywords: kw.keywords.length <= 3 ? kw.keywords.join(', ') : kw.keywords.slice(0, 3).join(', ') + ` (+${kw.keywords.length - 3} más)`,
      excludedKeywords: kw.excludedKeywords.length > 0 ? kw.excludedKeywords.join(', ') : '-',
      createdAt: `${String(kw.createdAt.getDate()).padStart(2, '0')}/${String(kw.createdAt.getMonth() + 1).padStart(2, '0')}/${kw.createdAt.getFullYear()}`,
      status: { label: kw.status === 'active' ? 'Activo' : 'Pausado', variant: kw.status === 'active' ? 'success' : 'neutral' },
      actions: ''
    }));
  }

  openKwModal(): void { this.kwModalOpen = true; this.kwManualInput = ''; this.kwSelectedChannels = []; }
  closeKwModal(): void { this.kwModalOpen = false; }

  addManualKeyword(): void {
    if (!this.kwManualInput.trim()) return;
    const keywords = this.kwManualInput.split(',').map(k => k.trim()).filter(k => k.length > 0);
    if (keywords.length > 0) {
      this.savedKeywords.unshift({ id: Date.now().toString(), name: keywords[0], keywords, excludedKeywords: [], createdAt: new Date(), status: 'active' });
    }
    this.closeKwModal();
  }

  toggleKwMenu(id: string, event: Event): void {
    event.stopPropagation();
    this.openKwMenuId = this.openKwMenuId === id ? null : id;
  }

  deleteKeyword(id: string): void {
    this.savedKeywords = this.savedKeywords.filter(k => k.id !== id);
    this.openKwMenuId = null;
  }

  onKwTableAction(event: { action: string; row: Record<string, unknown>; index: number }): void {
    const id = event.row['id'] as string;
    if (event.action === 'delete') this.deleteKeyword(id);
  }

  generateKwConfig(): void {
    if (!this.kwUserInput.trim()) return;
    this.kwIsGenerating = true;
    setTimeout(() => {
      const words = this.kwUserInput.split(/\s+/).filter(w => w.length > 4).slice(0, 5);
      const keywords = words.length > 0 ? words : ['keyword-1', 'keyword-2', 'keyword-3'];
      this.savedKeywords.unshift({ id: Date.now().toString(), name: keywords[0], keywords, excludedKeywords: [], createdAt: new Date(), status: 'active' });
      this.kwIsGenerating = false;
      this.kwHasConfigured = true;
      this.kwIsEditingConfig = false;
      this.cdr.detectChanges();
    }, 2500);
  }

  kwEditConfig(): void { this.kwIsEditingConfig = true; }
  kwViewResults(): void { this.activeKeywordsTab = 'list'; }
  kwGoToManual(): void { this.activeKeywordsTab = 'list'; this.openKwModal(); }

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
  sentCompetidores: string[] = ['Adidas', 'Rebook', 'Nike'];
  newCompetidor = '';
  activeSentimentTab: 'positivo' | 'negativo' | 'neutro' = 'positivo';
  sentPositivo = 'Interes en adquirir el producto\nConsultar donde obtener el producto\nRecomendar la marca a otros\nComparar favorablemente contra competidores';
  sentNegativo = 'Quejas sobre cobros o dinero retenido\nMala experiencia con servicio al cliente\nIntencion de cancelar o darse de baja\nPreferir un competidor sobre la marca';
  sentNeutro = 'Preguntas simples sobre horarios o ubicaciones\nSaludos sin carga emocional';
  newExampleLine = '';

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

  readonly tipoOptions = ['General', 'Sentimiento', 'Producto', 'Canal', 'Campaña']; // kept for data compatibility

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
  modalTagColorIdx = 0;
  private nextTagId = 501;

  // Modal: editar etiqueta
  showEditTagModal = false;
  editTagTarget: Etiqueta | null = null;
  editTagNombre = '';
  editTagColorIdx = 0;

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
    this.openKwMenuId = null;
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
    this.sentCompetidores = [];
    this.newCompetidor = '';
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
      tipo: 'General',
      colorIdx: this.modalTagColorIdx,
      selected: false
    });
    this.closeTagModal();
  }

  openEditTagModal(tag: Etiqueta): void {
    this.openTagMenuId = null;
    this.editTagTarget = tag;
    this.editTagNombre = tag.nombre;
    this.editTagColorIdx = tag.colorIdx;
    this.showEditTagModal = true;
  }

  closeEditTagModal(): void {
    this.showEditTagModal = false;
    this.editTagTarget = null;
  }

  onUpdateTag(): void {
    if (!this.editTagTarget || !this.editTagNombre.trim()) return;
    this.editTagTarget.nombre = this.editTagNombre.trim();
    this.editTagTarget.colorIdx = this.editTagColorIdx;
    this.closeEditTagModal();
  }

  get editPreviewStyle(): { background: string; color: string } {
    return this.getTagStyle(this.editTagColorIdx);
  }

  onDeleteTag(id: number): void {
    this.openTagMenuId = null;
    this.etiquetas = this.etiquetas.filter(t => t.id !== id);
  }

  get activeSentimentText(): string {
    if (this.activeSentimentTab === 'positivo') return this.sentPositivo;
    if (this.activeSentimentTab === 'negativo') return this.sentNegativo;
    return this.sentNeutro;
  }

  set activeSentimentText(value: string) {
    if (this.activeSentimentTab === 'positivo') this.sentPositivo = value;
    else if (this.activeSentimentTab === 'negativo') this.sentNegativo = value;
    else this.sentNeutro = value;
  }

  get sentimentHint(): string {
    if (this.activeSentimentTab === 'positivo') return 'Escribe ejemplos de mensajes con sentimiento positivo hacia tu marca.';
    if (this.activeSentimentTab === 'negativo') return 'Escribe ejemplos de mensajes con sentimiento negativo hacia tu marca.';
    return 'Escribe ejemplos de mensajes con sentimiento neutro hacia tu marca.';
  }

  get activeSentimentLines(): string[] {
    const text = this.activeSentimentText;
    if (!text.trim()) return [];
    return text.split('\n').filter(l => l.trim().length > 0);
  }

  updateLine(index: number, value: string): void {
    const lines = this.activeSentimentLines;
    lines[index] = value;
    this.activeSentimentText = lines.join('\n');
  }

  removeLine(index: number): void {
    const lines = this.activeSentimentLines;
    lines.splice(index, 1);
    this.activeSentimentText = lines.join('\n');
  }

  addCompetidor(): void {
    const val = this.newCompetidor.trim();
    if (!val) return;
    if (!this.sentCompetidores.includes(val)) {
      this.sentCompetidores = [...this.sentCompetidores, val];
    }
    this.newCompetidor = '';
  }

  removeCompetidor(index: number): void {
    this.sentCompetidores = this.sentCompetidores.filter((_, i) => i !== index);
  }

  addExampleLine(): void {
    if (!this.newExampleLine.trim()) return;
    const text = this.activeSentimentText.trim();
    this.activeSentimentText = text ? text + '\n' + this.newExampleLine.trim() : this.newExampleLine.trim();
    this.newExampleLine = '';
  }

  onLineBlur(index: number, value: string): void {
    if (!value.trim()) {
      this.removeLine(index);
    }
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

  onChannelCardClick(canal: Canal): void {
    if (canal.estado === 'conectado') {
      this.router.navigate(['/segmentos/canal', canal.id]);
    } else {
      this.openContratarModal(canal);
    }
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

import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// UI Components
import { ButtonComponent } from '../../ui/button/button.component';
import { SearchInputComponent } from '../../ui/search-input/search-input.component';
import { TextInputComponent } from '../../ui/text-input/text-input.component';
import { SelectComponent, SelectOption } from '../../ui/select/select.component';
import { SelectDateComponent } from '../../ui/select-date/select-date.component';
import { ModalComponent } from '../../ui/modal/modal.component';
import { ChipInputComponent } from '../../ui/chip-input/chip-input.component';
import { ChannelSelectorComponent, ChannelOption } from '../../ui/channel-selector/channel-selector.component';
import { NumberInputComponent } from '../../ui/number-input/number-input.component';
import { CheckboxComponent } from '../../ui/checkbox/checkbox.component';
import { StatusBadgeComponent, StatusBadgeVariant } from '../../ui/status-badge/status-badge.component';
import { FilterChipComponent } from '../../ui/filter-chip/filter-chip.component';
import { ConfirmCodeModalComponent } from '../../ui/confirm-code-modal/confirm-code-modal.component';
import { ToastComponent, ToastVariant } from '../../ui/toast/toast.component';
import { MenuComponent, MenuItem } from '../../ui/menu/menu.component';

// Lucide icons
import {
  LucideAngularModule,
  Plus,
  Bell,
  Search,
  Calendar,
  Mail,
  MessageCircle,
  Trash2,
  Pencil,
  Copy,
  Clock,
  Pause,
  Play,
  MoreHorizontal,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Sparkles,
  Settings,
  X,
  Check,
  Info,
  Globe,
  Users,
  MessageSquare,
  Share2,
  FileText,
  Image,
  Video,
  Link,
  Languages,
  Minus,
  CircleCheck,
  CircleMinus,
  Ban,
  ExternalLink,
  LucideIconData
} from 'lucide-angular';

// === Interfaces ===
export interface Alert {
  id: number;
  name: string;
  segment: string;
  filters: string[];
  channels: { email: boolean; wa: boolean };
  active: boolean;
  volume: number;
  window: string;
  lastFired: string;
  fires24h: number;
  recipients: string[];
  waPaused?: boolean;
}

export interface HistoryEntry {
  date: string;
  mentions: number;
  neg: number;
  neu: number;
  pos: number;
}

export type TabType = 'active' | 'paused';

@Component({
  selector: 'app-alertas2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    ButtonComponent,
    SearchInputComponent,
    TextInputComponent,
    SelectComponent,
    SelectDateComponent,
    ModalComponent,
    ChipInputComponent,
    ChannelSelectorComponent,
    NumberInputComponent,
    CheckboxComponent,
    StatusBadgeComponent,
    FilterChipComponent,
    ConfirmCodeModalComponent,
    ToastComponent,
    MenuComponent
  ],
  templateUrl: './alertas2.component.html',
  styleUrl: './alertas2.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class Alertas2Component {

  @HostListener('document:click')
  onDocumentClick(): void {
    this.activeMenuId = null;
  }

  // === Icons ===
  readonly PlusIcon = Plus;
  readonly BellIcon = Bell;
  readonly SearchIcon = Search;
  readonly CalendarIcon = Calendar;
  readonly MailIcon = Mail;
  readonly MessageCircleIcon = MessageCircle;
  readonly Trash2Icon = Trash2;
  readonly PencilIcon = Pencil;
  readonly CopyIcon = Copy;
  readonly ClockIcon = Clock;
  readonly ExternalLinkIcon = ExternalLink;
  readonly PauseIcon = Pause;
  readonly PlayIcon = Play;
  readonly MoreHorizontalIcon = MoreHorizontal;
  readonly ChevronDownIcon = ChevronDown;
  readonly ChevronUpIcon = ChevronUp;
  readonly BookmarkIcon = Bookmark;
  readonly SparklesIcon = Sparkles;
  readonly SettingsIcon = Settings;
  readonly XIcon = X;
  readonly CheckIcon = Check;
  readonly InfoIcon = Info;
  readonly GlobeIcon = Globe;
  readonly UsersIcon = Users;
  readonly MessageSquareIcon = MessageSquare;
  readonly Share2Icon = Share2;
  readonly FileTextIcon = FileText;
  readonly ImageIcon = Image;
  readonly VideoIcon = Video;
  readonly LinkIcon = Link;
  readonly LanguagesIcon = Languages;
  readonly CircleCheckIcon = CircleCheck;
  readonly CircleMinusIcon = CircleMinus;
  readonly BanIcon = Ban;
  readonly MinusIcon = Minus;

  // === State ===
  currentTab: TabType = 'active';
  searchQuery = '';
  currentStep = 1;
  showSearchBar = false;

  // Header date
  selectedDate = '2026-01-28';

  // Modals
  showCreateModal = false;
  showHistoryModal = false;
  showDeleteModal = false;
  editingAlertId: number | null = null;

  // Toast
  showToast = false;
  toastMessage = '';
  toastVariant: ToastVariant = 'success';

  // Delete modal
  deleteAlertName = '';
  deleteCode = '';
  deleteAlertId: number | null = null;

  // History modal
  historyTitle = '';
  historyEntries: HistoryEntry[] = [];

  // Create/Edit form
  alertName = '';
  alertNameError = '';
  searchMode: 'search' | 'manual' = 'search';
  selectedSegment: string | number | null = null;
  selectedSentiments = { positive: true, neutral: true, negative: true };
  selectedChannels: string[] = ['email'];
  volumeMin = 1;
  showAdvancedStep1 = false;
  showAdvancedStep2 = false;

  // Window presets
  windowPreset: 'always' | 'work' | 'custom' = 'always';
  customDays = [true, true, true, true, true, false, false]; // L-V
  customTimeFrom = '08:00';
  customTimeTo = '18:00';

  // Frequency
  emailFrequency = 'realtime';
  waFrequency = '3h';

  // Card menu
  activeMenuId: number | null = null;

  // Consultas sub-tabs
  consultasSubTab: 'sugeridas' | 'guardadas' | 'repetidas' = 'sugeridas';
  selectedConsulta: string | null = null;

  // Manual mode fields
  manualSearchText = '';

  // Etiquetas popover
  showEtiquetasPopover = false;
  etiquetaSearch = '';
  selectedEtiquetas: string[] = ['Quejas', 'Atención al cliente'];

  // Advanced Step 1 filters
  selectedInfluence: string[] = [];
  selectedPropiedad: string[] = [];
  selectedInteraction: string[] = [];
  selectedFormats: string[] = [];

  // WhatsApp phone
  waPhoneNumber = '';
  waRecipients: string[] = [];
  showCountryDropdown = false;
  countrySearchQuery = '';

  readonly waCountries: { name: string; code: string; flag: string }[] = [
    { name: 'Argentina', code: '+54', flag: '🇦🇷' },
    { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
    { name: 'Brasil', code: '+55', flag: '🇧🇷' },
    { name: 'Chile', code: '+56', flag: '🇨🇱' },
    { name: 'Colombia', code: '+57', flag: '🇨🇴' },
    { name: 'Ecuador', code: '+593', flag: '🇪🇨' },
    { name: 'Guyana', code: '+592', flag: '🇬🇾' },
    { name: 'Paraguay', code: '+595', flag: '🇵🇾' },
    { name: 'Perú', code: '+51', flag: '🇵🇪' },
    { name: 'Surinam', code: '+597', flag: '🇸🇷' },
    { name: 'Uruguay', code: '+598', flag: '🇺🇾' },
    { name: 'Venezuela', code: '+58', flag: '🇻🇪' }
  ];

  selectedCountry = { name: 'Perú', code: '+51', flag: '🇵🇪' };

  get filteredCountries() {
    if (!this.countrySearchQuery) return this.waCountries;
    const q = this.countrySearchQuery.toLowerCase();
    return this.waCountries.filter(c => c.name.toLowerCase().includes(q) || c.code.includes(q));
  }

  // Sentiment switch (Step 2 advanced)
  sentimentSwitchOn = false;

  // === Select Options ===
  readonly segmentOptions: SelectOption[] = [
    { value: 'banco-nacional', label: 'Banco Nacional' },
    { value: 'interbank', label: 'Interbank Principal' },
    { value: 'brand', label: 'Brand Principal' },
    { value: 'soporte', label: 'Soporte General' },
    { value: 'medios', label: 'Medios Peru' },
    { value: 'competidores', label: 'Competidores' }
  ];

  readonly sourceOptions: SelectOption[] = [
    { value: 'twitter', label: 'X / Twitter', imageUrl: 'images/social-x-twitter.svg' },
    { value: 'facebook', label: 'Facebook', imageUrl: 'images/social-facebook.svg' },
    { value: 'instagram', label: 'Instagram', imageUrl: 'images/social-instagram.svg' },
    { value: 'tiktok', label: 'TikTok', imageUrl: 'images/social-tiktok.svg' },
    { value: 'linkedin', label: 'LinkedIn', imageUrl: 'images/social-linkedin.svg' },
    { value: 'youtube', label: 'YouTube', imageUrl: 'images/social-youtube.svg' }
  ];

  readonly languageOptions: SelectOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'es', label: 'Espanol' },
    { value: 'en', label: 'Ingles' },
    { value: 'pt', label: 'Portugues' }
  ];

  readonly channelOptions: ChannelOption[] = [
    { value: 'email', label: 'Email', description: 'Sin limite mensual', icon: Mail },
    { value: 'wa', label: 'WhatsApp', description: '1,753 msgs restantes', icon: MessageCircle }
  ];

  readonly frequencyOptions = ['Tiempo real', '2h', '6h', '12h', '24h'];
  readonly waFrequencyOptions = ['Tiempo real', '2h', '3h', '6h', '12h', '24h'];
  readonly dayLabels = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  readonly dayLabelsLong = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
  readonly dayLabelsFull = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

  readonly tagOptions: SelectOption[] = [
    { value: 'critica', label: 'Critica' },
    { value: 'seguimiento', label: 'Seguimiento' },
    { value: 'baja', label: 'Baja prioridad' }
  ];

  readonly etiquetaGroups: { segment: string; tags: { label: string; bg: string; text: string }[] }[] = [
    {
      segment: 'BANCO NACIONAL',
      tags: [
        { label: 'Quejas', bg: '#fee2e2', text: '#991b1b' },
        { label: 'Fraude', bg: '#fef3c7', text: '#92400e' },
        { label: 'Atención al cliente', bg: '#dbeafe', text: '#1e40af' },
        { label: 'App móvil', bg: '#f3e8ff', text: '#6b21a8' }
      ]
    },
    {
      segment: 'INTERBANK',
      tags: [
        { label: 'Promociones', bg: '#d1fae5', text: '#065f46' },
        { label: 'Tarjetas', bg: '#fce7f3', text: '#9d174d' },
        { label: 'Préstamos', bg: '#e0e7ff', text: '#3730a3' }
      ]
    }
  ];

  readonly countryOptions: SelectOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'pe', label: 'Peru' },
    { value: 'co', label: 'Colombia' },
    { value: 'mx', label: 'Mexico' },
    { value: 'cl', label: 'Chile' },
    { value: 'ar', label: 'Argentina' }
  ];

  readonly influenceOptions: { label: string; range: string }[] = [
    { label: 'Usuarios', range: '0-999' },
    { label: 'Nano', range: '1K-10K' },
    { label: 'Micro', range: '10K-100K' },
    { label: 'Macro', range: '100K-1M' },
    { label: 'Mega', range: '1M+' }
  ];

  readonly sugeridasItems: { label: string; icon: LucideIconData; color: string }[] = [
    { label: 'Menciones negativas esta semana', icon: Sparkles, color: 'red' },
    { label: 'Que dicen en Twitter', icon: MessageSquare, color: 'default' },
    { label: 'Menciones de alto impacto', icon: Users, color: 'purple' },
    { label: 'Resumen del mes', icon: FileText, color: 'green' }
  ];

  guardadasItems: { label: string }[] = [
    { label: 'Crisis reputacional activa' },
    { label: 'Volumen TikTok semanal' },
    { label: 'Competidores directos' }
  ];

  readonly repetidasItems: { label: string; time: string }[] = [
    { label: 'Menciones negativas esta semana', time: 'Hace 2h' },
    { label: 'Resumen del mes', time: 'Hace 5h' },
    { label: 'Que dicen en Twitter', time: 'Hace 1d' }
  ];

  // === Data ===
  alerts: Alert[] = [
    { id: 1, name: 'Crisis reputacional', segment: 'Banco Nacional', filters: ['Negativa', 'Todas fuentes', 'Texto: "fraude"'], channels: { email: true, wa: true }, active: true, volume: 5, window: 'Siempre', lastFired: 'Hoy, 14:32', fires24h: 3, recipients: ['leon@quantico.ai', 'ingrid@quantico.ai'] },
    { id: 2, name: 'Menciones TikTok - Interbank', segment: 'Interbank Principal', filters: ['Todas', 'TikTok'], channels: { email: true, wa: false }, active: true, volume: 1, window: 'Horario laboral', lastFired: 'Hoy, 11:05', fires24h: 1, recipients: ['carlos@interbank.pe'] },
    { id: 3, name: 'Quejas soporte tecnico', segment: 'Soporte General', filters: ['Negativa', 'X, Facebook', 'Texto: "soporte"'], channels: { email: true, wa: true }, active: true, volume: 3, window: 'L-V 8-18h', lastFired: 'Ayer, 17:45', fires24h: 0, recipients: ['soporte@quantico.ai'] },
    { id: 4, name: 'Menciones competencia BBVA', segment: 'BBVA Peru', filters: ['Todas', 'Todas fuentes'], channels: { email: true, wa: false }, active: true, volume: 10, window: 'Siempre', lastFired: 'Hace 2 dias', fires24h: 0, recipients: ['ana@bbva.pe'] },
    { id: 5, name: 'Alertas positivas - campana verano', segment: 'Campana Verano 2026', filters: ['Positiva', 'Instagram, TikTok'], channels: { email: true, wa: true }, active: true, volume: 1, window: 'Siempre', lastFired: 'Hoy, 09:20', fires24h: 5, recipients: ['mkt@empresa.com'], waPaused: true },
    { id: 6, name: 'Monitoreo medios digitales', segment: 'Medios Peru', filters: ['Todas', 'Noticias'], channels: { email: true, wa: false }, active: true, volume: 1, window: 'L-V 7-20h', lastFired: 'Hoy, 13:10', fires24h: 2, recipients: ['prensa@empresa.com'] },
    { id: 7, name: 'Influencers mencionando marca', segment: 'Brand Principal', filters: ['Todas', 'Influencia: Macro+Mega'], channels: { email: true, wa: true }, active: true, volume: 1, window: 'Siempre', lastFired: 'Hace 3 dias', fires24h: 0, recipients: ['brand@empresa.com'] },
    { id: 8, name: 'Keywords regulatorios', segment: 'Legal & Compliance', filters: ['Todas', 'Texto: "demanda OR regulacion"'], channels: { email: true, wa: false }, active: true, volume: 1, window: 'Horario laboral', lastFired: 'Hace 1 semana', fires24h: 0, recipients: ['legal@empresa.com'] },
    { id: 9, name: 'Sentimiento LinkedIn', segment: 'Employer Brand', filters: ['Negativa', 'LinkedIn'], channels: { email: true, wa: false }, active: true, volume: 2, window: 'L-V 8-18h', lastFired: 'Ayer, 10:30', fires24h: 0, recipients: ['rrhh@empresa.com'] },
    { id: 10, name: 'Alto volumen - emergencia', segment: 'Crisis Hub', filters: ['Todas', 'Todas fuentes'], channels: { email: true, wa: true }, active: true, volume: 50, window: 'Siempre', lastFired: 'Hace 2 semanas', fires24h: 0, recipients: ['crisis@empresa.com'] },
    { id: 11, name: 'YouTube reviews producto', segment: 'Producto Core', filters: ['Todas', 'YouTube'], channels: { email: true, wa: false }, active: true, volume: 1, window: 'Siempre', lastFired: 'Hoy, 08:15', fires24h: 1, recipients: ['producto@empresa.com'] },
    { id: 12, name: 'Tendencias emergentes', segment: 'Market Intel', filters: ['Positiva', 'Texto: "innovacion OR tendencia"'], channels: { email: true, wa: false }, active: true, volume: 5, window: 'Siempre', lastFired: 'Ayer, 16:00', fires24h: 0, recipients: ['estrategia@empresa.com'] },
    { id: 13, name: 'Alerta pausada - Q1', segment: 'Q1 Campaign', filters: ['Todas', 'Instagram'], channels: { email: true, wa: false }, active: false, volume: 1, window: 'Siempre', lastFired: '15 Feb, 09:00', fires24h: 0, recipients: ['mkt@empresa.com'] },
    { id: 14, name: 'Monitoreo ex-campana Black Friday', segment: 'Black Friday 2025', filters: ['Todas', 'Todas fuentes'], channels: { email: true, wa: true }, active: false, volume: 1, window: 'Siempre', lastFired: '30 Nov, 23:59', fires24h: 0, recipients: ['ventas@empresa.com'] },
    { id: 15, name: 'Test alertas desarrollo', segment: 'Dev Testing', filters: ['Positiva'], channels: { email: true, wa: false }, active: false, volume: 1, window: 'Siempre', lastFired: 'Nunca', fires24h: 0, recipients: ['dev@quantico.ai'] }
  ];

  readonly alertHistory: Record<number, HistoryEntry[]> = {
    1: [
      { date: 'Hoy, 14:32', mentions: 23, neg: 18, neu: 3, pos: 2 },
      { date: 'Hoy, 11:00', mentions: 8, neg: 5, neu: 2, pos: 1 },
      { date: 'Hoy, 08:30', mentions: 15, neg: 12, neu: 2, pos: 1 },
      { date: 'Ayer, 17:00', mentions: 42, neg: 35, neu: 5, pos: 2 }
    ],
    2: [{ date: 'Hoy, 11:05', mentions: 4, neg: 0, neu: 2, pos: 2 }],
    3: [{ date: 'Ayer, 17:45', mentions: 12, neg: 9, neu: 2, pos: 1 }],
    5: [
      { date: 'Hoy, 09:20', mentions: 18, neg: 0, neu: 3, pos: 15 },
      { date: 'Hoy, 07:00', mentions: 9, neg: 0, neu: 1, pos: 8 }
    ]
  };

  // === Computed ===
  get filteredAlerts(): Alert[] {
    let filtered = this.alerts;
    if (this.currentTab === 'active') filtered = filtered.filter(a => a.active);
    else if (this.currentTab === 'paused') filtered = filtered.filter(a => !a.active);

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(a => {
        const haystack = [a.name, a.segment, ...a.filters, ...a.recipients].join(' ').toLowerCase();
        return haystack.includes(q);
      });
    }
    return filtered;
  }

  get activeCount(): number { return this.alerts.filter(a => a.active).length; }
  get pausedCount(): number { return this.alerts.filter(a => !a.active).length; }

  get isStep1Valid(): boolean {
    return this.alertName.trim().length > 0 && !this.alertNameError;
  }

  get modalTitle(): string {
    return this.editingAlertId ? 'Editar alerta' : 'Crear alerta';
  }

  get modalConfirmText(): string {
    if (this.currentStep === 1) return 'Siguiente';
    return this.editingAlertId ? 'Guardar cambios' : 'Crear alerta';
  }

  // === Tab Methods ===
  switchTab(tab: TabType): void {
    this.currentTab = tab;
  }

  onSearchChange(query: string): void {
    this.searchQuery = query;
  }

  toggleSearch(): void {
    this.showSearchBar = !this.showSearchBar;
    if (!this.showSearchBar) {
      this.searchQuery = '';
    }
  }

  onDateChange(date: string): void {
    this.selectedDate = date;
  }

  toggleCardMenu(alertId: number, event: Event): void {
    event.stopPropagation();
    this.activeMenuId = this.activeMenuId === alertId ? null : alertId;
  }

  onMenuAction(action: string, alert: Alert): void {
    this.activeMenuId = null;
    switch (action) {
      case 'edit': this.openEditModal(alert); break;
      case 'toggle': this.toggleAlertActive(alert); break;
      case 'duplicate': this.duplicateAlert(alert); break;
      case 'history': this.openHistoryModal(alert); break;
      case 'delete': this.openDeleteModal(alert); break;
    }
  }

  // === Card Methods ===
  getAlertStatus(alert: Alert): StatusBadgeVariant {
    return alert.active ? 'success' : 'warning';
  }

  getAlertStatusLabel(alert: Alert): string {
    return alert.active ? 'Activa' : 'Pausada';
  }

  toggleAlertActive(alert: Alert, event?: Event): void {
    event?.stopPropagation();
    alert.active = !alert.active;
    this.showToastMessage(alert.active ? 'Alerta activada' : 'Alerta pausada');
  }

  getMenuItemsForAlert(alert: Alert): MenuItem[] {
    return [
      { id: 'edit', label: 'Editar', icon: Pencil },
      { id: 'duplicate', label: 'Duplicar', icon: Copy },
      { id: 'history', label: 'Historial de envíos', icon: Clock },
      { id: 'toggle', label: alert.active ? 'Pausar' : 'Activar', icon: alert.active ? Pause : Play },
      { id: 'delete', label: 'Eliminar', icon: Trash2 }
    ];
  }

  onCardMenuAction(item: MenuItem, alert: Alert): void {
    switch (item.id) {
      case 'edit': this.openEditModal(alert); break;
      case 'duplicate': this.duplicateAlert(alert); break;
      case 'history': this.openHistoryModal(alert); break;
      case 'toggle': this.toggleAlertActive(alert); break;
      case 'delete': this.openDeleteModal(alert); break;
    }
  }

  // === Create/Edit Modal ===
  openCreateModal(): void {
    this.editingAlertId = null;
    this.alertName = '';
    this.alertNameError = '';
    this.currentStep = 1;
    this.searchMode = 'search';
    this.selectedSegment = null;
    this.selectedChannels = ['email'];
    this.volumeMin = 1;
    this.windowPreset = 'always';
    this.emailFrequency = 'realtime';
    this.waFrequency = '3h';
    this.showAdvancedStep1 = false;
    this.showAdvancedStep2 = false;
    this.consultasSubTab = 'sugeridas';
    this.selectedConsulta = null;
    this.manualSearchText = '';
    this.selectedInfluence = [];
    this.selectedPropiedad = [];
    this.selectedInteraction = [];
    this.selectedFormats = [];
    this.waPhoneNumber = '';
    this.waRecipients = [];
    this.sentimentSwitchOn = false;
    this.showCreateModal = true;
  }

  openEditModal(alert: Alert): void {
    this.editingAlertId = alert.id;
    this.alertName = alert.name;
    this.alertNameError = '';
    this.currentStep = 1;
    this.searchMode = 'manual';
    this.selectedSegment = this.segmentOptions.find(s => s.label === alert.segment)?.value || null;
    this.selectedChannels = [];
    if (alert.channels.email) this.selectedChannels.push('email');
    if (alert.channels.wa) this.selectedChannels.push('wa');
    this.volumeMin = alert.volume;
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
    this.editingAlertId = null;
  }

  onModalConfirm(): void {
    if (this.currentStep === 1) {
      if (this.validateAlertName()) {
        this.currentStep = 2;
      }
    } else {
      this.saveAlert();
    }
  }

  onModalCancel(): void {
    if (this.currentStep === 2) {
      this.currentStep = 1;
    } else {
      this.closeCreateModal();
    }
  }

  validateAlertName(): boolean {
    const name = this.alertName.trim();
    if (!name) {
      this.alertNameError = 'El nombre es obligatorio';
      return false;
    }
    const isDupe = this.alerts.some(a => a.name.toLowerCase() === name.toLowerCase() && a.id !== this.editingAlertId);
    if (isDupe) {
      this.alertNameError = 'Ya existe una alerta con ese nombre';
      return false;
    }
    this.alertNameError = '';
    return true;
  }

  onAlertNameChange(value: string | number): void {
    this.alertName = String(value);
    if (this.alertNameError) this.validateAlertName();
  }

  saveAlert(): void {
    if (!this.validateAlertName()) return;

    if (this.editingAlertId) {
      const alert = this.alerts.find(a => a.id === this.editingAlertId);
      if (alert) {
        alert.name = this.alertName.trim();
        const seg = this.segmentOptions.find(s => s.value === this.selectedSegment);
        if (seg) alert.segment = seg.label;
        alert.channels.email = this.selectedChannels.includes('email');
        alert.channels.wa = this.selectedChannels.includes('wa');
        alert.volume = this.volumeMin;
      }
      this.showToastMessage('Alerta actualizada exitosamente');
    } else {
      const newId = Math.max(...this.alerts.map(a => a.id)) + 1;
      const seg = this.segmentOptions.find(s => s.value === this.selectedSegment);
      this.alerts.unshift({
        id: newId,
        name: this.alertName.trim(),
        segment: seg?.label || 'Sin segmento',
        filters: ['Todas'],
        channels: {
          email: this.selectedChannels.includes('email'),
          wa: this.selectedChannels.includes('wa')
        },
        active: true,
        volume: this.volumeMin,
        window: this.windowPreset === 'always' ? 'Siempre' : this.windowPreset === 'work' ? 'Horario laboral' : 'Personalizado',
        lastFired: 'Nunca',
        fires24h: 0,
        recipients: []
      });
      this.currentTab = 'active';
      this.showToastMessage('Alerta creada exitosamente');
    }

    this.closeCreateModal();
  }

  setSearchMode(mode: 'search' | 'manual'): void {
    this.searchMode = mode;
  }

  setWindowPreset(preset: 'always' | 'work' | 'custom'): void {
    this.windowPreset = preset;
  }

  toggleDay(index: number): void {
    this.customDays[index] = !this.customDays[index];
  }

  setEmailFrequency(freq: string): void {
    this.emailFrequency = freq;
  }

  setWaFrequency(freq: string): void {
    this.waFrequency = freq;
  }

  toggleSentiment(type: 'positive' | 'neutral' | 'negative'): void {
    this.selectedSentiments[type] = !this.selectedSentiments[type];
  }

  toggleEtiqueta(label: string): void {
    const idx = this.selectedEtiquetas.indexOf(label);
    if (idx > -1) this.selectedEtiquetas.splice(idx, 1);
    else this.selectedEtiquetas.push(label);
  }

  removeGuardada(index: number): void {
    this.guardadasItems.splice(index, 1);
  }

  // === Toggle helpers ===
  toggleInfluence(label: string): void {
    const idx = this.selectedInfluence.indexOf(label);
    if (idx > -1) this.selectedInfluence.splice(idx, 1);
    else this.selectedInfluence.push(label);
  }

  togglePropiedad(value: string): void {
    const idx = this.selectedPropiedad.indexOf(value);
    if (idx > -1) this.selectedPropiedad.splice(idx, 1);
    else this.selectedPropiedad.push(value);
  }

  toggleInteraction(value: string): void {
    const idx = this.selectedInteraction.indexOf(value);
    if (idx > -1) this.selectedInteraction.splice(idx, 1);
    else this.selectedInteraction.push(value);
  }

  toggleFormat(value: string): void {
    const idx = this.selectedFormats.indexOf(value);
    if (idx > -1) this.selectedFormats.splice(idx, 1);
    else this.selectedFormats.push(value);
  }

  toggleChannel(channel: string): void {
    const idx = this.selectedChannels.indexOf(channel);
    if (idx > -1) this.selectedChannels.splice(idx, 1);
    else this.selectedChannels.push(channel);
  }

  addWaRecipient(): void {
    const num = this.waPhoneNumber.trim();
    if (num && this.waRecipients.length < 3) {
      this.waRecipients.push(this.selectedCountry.code + ' ' + num);
      this.waPhoneNumber = '';
    }
  }

  selectCountry(country: { name: string; code: string; flag: string }): void {
    this.selectedCountry = country;
    this.showCountryDropdown = false;
    this.countrySearchQuery = '';
  }

  removeWaRecipient(index: number): void {
    this.waRecipients.splice(index, 1);
  }

  // === Duplicate ===
  duplicateAlert(alert: Alert): void {
    this.openCreateModal();
    this.searchMode = 'manual';
    this.selectedSegment = this.segmentOptions.find(s => s.label === alert.segment)?.value || null;
  }

  // === Delete Modal ===
  openDeleteModal(alert: Alert): void {
    this.deleteAlertId = alert.id;
    this.deleteAlertName = alert.name;
    this.deleteCode = this.generateCode();
    this.showDeleteModal = true;
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.deleteAlertId = null;
  }

  onDeleteConfirm(): void {
    if (this.deleteAlertId) {
      const idx = this.alerts.findIndex(a => a.id === this.deleteAlertId);
      if (idx > -1) this.alerts.splice(idx, 1);
      this.showToastMessage('Alerta eliminada');
    }
    this.closeDeleteModal();
  }

  generateCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  // === History Modal ===
  openHistoryModal(alert: Alert): void {
    this.historyTitle = 'Historial - ' + alert.name;
    this.historyEntries = this.alertHistory[alert.id] || [];
    this.showHistoryModal = true;
  }

  closeHistoryModal(): void {
    this.showHistoryModal = false;
  }

  // === Toast ===
  showToastMessage(message: string, variant: ToastVariant = 'success'): void {
    this.toastMessage = message;
    this.toastVariant = variant;
    this.showToast = true;
  }
}

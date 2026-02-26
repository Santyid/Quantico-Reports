import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  AtSign,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  Download,
  SlidersHorizontal,
  Sparkles,
  MoreHorizontal,
  Calendar,
  Clock,
  Building2,
  LayoutDashboard,
  Star,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Tv,
  X,
  Plus,
  BarChart3,
  CheckSquare,
  FileText,
  ClipboardCheck,
  Trash2,
  Eraser,
  Eye,
  Copy,
  Link,
  Repeat,
  MessageCircle,
  List,
  ChevronRight,
  Search
} from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from '../ui/toast/toast.component';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { TextInputComponent } from '../ui/text-input/text-input.component';
import { ButtonComponent } from '../ui/button/button.component';
import { DateRange } from '../ui/date-range-picker/date-range-picker.component';
import { PieChartComponent, PieChartData } from '../ui/pie-chart/pie-chart.component';
import { SearchInputComponent } from '../ui/search-input/search-input.component';

interface MentionData {
  id: string;
  source: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok';
  userName: string;
  userHandle: string;
  userType: string;
  avatarUrl?: string;
  content: string;
  date: Date;
  time: string;
  category: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  tags: string[];
  imageUrl?: string;
  followers?: number;
}

interface PlatformResult {
  name: string;
  icon: string;
  value: number;
  color: string;
  maxValue: number;
}

interface RecentSearch {
  id: string;
  name: string;
  date: string;
  filtersCount: number;
}

@Component({
  selector: 'app-menciones',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    FormsModule,
    SelectComponent,
    ButtonComponent,
    PieChartComponent,
    TextInputComponent,
    ToastComponent,
    SearchInputComponent
  ],
  templateUrl: './menciones.component.html',
  styleUrl: './menciones.component.scss'
})
export class MencionesComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  // Icons
  readonly AtSignIcon = AtSign;
  readonly ChevronUpIcon = ChevronUp;
  readonly ChevronDownIcon = ChevronDown;
  readonly ArrowLeftIcon = ArrowLeft;
  readonly DownloadIcon = Download;
  readonly SlidersIcon = SlidersHorizontal;
  readonly SparklesIcon = Sparkles;
  readonly MoreIcon = MoreHorizontal;
  readonly CalendarIcon = Calendar;
  readonly ClockIcon = Clock;
  readonly BuildingIcon = Building2;
  readonly LayoutDashboardIcon = LayoutDashboard;
  readonly StarIcon = Star;
  readonly SendIcon = Send;
  readonly FacebookIcon = Facebook;
  readonly InstagramIcon = Instagram;
  readonly YoutubeIcon = Youtube;
  readonly LinkedinIcon = Linkedin;
  readonly TvIcon = Tv;
  readonly XIcon = X;
  readonly PlusIcon = Plus;
  readonly BarChartIcon = BarChart3;
  readonly CheckSquareIcon = CheckSquare;
  readonly FileTextIcon = FileText;
  readonly ClipboardCheckIcon = ClipboardCheck;
  readonly TrashIcon = Trash2;
  readonly EraserIcon = Eraser;
  readonly EyeIcon = Eye;
  readonly CopyIcon = Copy;
  readonly LinkIcon = Link;
  readonly RepeatIcon = Repeat;
  readonly MessageCircleIcon = MessageCircle;
  readonly ListIcon = List;
  readonly ChevronRightIcon = ChevronRight;
  readonly SearchIcon = Search;

  // State
  isSearchExpanded = false;
  isFilterDrawerOpen = false;
  isRecentSearchesModalOpen = false;
  isAdvancedFiltersOpen = false;
  isTwitterFiltersOpen = false;
  isQueriesGuardadosOpen = false;
  isAiInsightExpanded = false;
  toastVisible = false;
  toastMessage = '';
  openSentimentDropdown: string | null = null;
  openOptionsMenu: string | null = null;

  // Recent Searches
  recentSearches: RecentSearch[] = [
    { id: '1', name: 'Menciones Mi Marca', date: '5/2/26, 12:05 p. m.', filtersCount: 4 },
    { id: '2', name: 'Competidores Q1', date: '3/2/26, 09:30 a. m.', filtersCount: 6 },
    { id: '3', name: 'Sentimiento negativo', date: '1/2/26, 15:45 p. m.', filtersCount: 3 },
    { id: '4', name: 'Influencers Tech', date: '28/1/26, 10:20 a. m.', filtersCount: 5 },
    { id: '5', name: 'Campaña Navidad 2025', date: '20/1/26, 16:00 p. m.', filtersCount: 8 }
  ];

  // Advanced filter checkboxes
  filterContenidoPropio = false;
  filterMencionesRevisadas = false;
  filterMencionesBorradas = false;
  filterAnalisisMuestral = false;

  // Search filters
  readonly segmentoOptions: SelectOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'brand', label: 'Marca' },
    { value: 'competitor', label: 'Competencia' },
    { value: 'industry', label: 'Industria' }
  ];

  readonly etiquetasOptions: SelectOption[] = [
    { value: 'all', label: 'Todas' },
    { value: 'positive', label: 'Positivas' },
    { value: 'negative', label: 'Negativas' },
    { value: 'neutral', label: 'Neutras' }
  ];

  readonly redesSocialesOptions: SelectOption[] = [
    { value: 'all', label: 'Todas' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'twitter', label: 'X (Twitter)' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'youtube', label: 'YouTube' }
  ];

  readonly influenciaOptions: SelectOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'high', label: 'Alta' },
    { value: 'medium', label: 'Media' },
    { value: 'low', label: 'Baja' }
  ];

  readonly categoriasOptions: SelectOption[] = [
    { value: 'all', label: 'Todas' },
    { value: 'mi-marca', label: 'Mi Marca' },
    { value: 'competidor', label: 'Competidor' },
    { value: 'industria', label: 'Industria' }
  ];

  readonly sentimientoOptions: SelectOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'positive', label: 'Positivo' },
    { value: 'neutral', label: 'Neutro' },
    { value: 'negative', label: 'Negativo' }
  ];

  readonly generoOptions: SelectOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Femenino' },
    { value: 'other', label: 'Otro' }
  ];

  readonly fuentesOptions: SelectOption[] = [
    { value: 'all', label: 'Todas' },
    { value: 'facebook', label: 'Facebook', icon: Facebook },
    { value: 'instagram', label: 'Instagram', icon: Instagram },
    { value: 'twitter', label: 'X (Twitter)', icon: AtSign },
    { value: 'linkedin', label: 'LinkedIn', icon: Linkedin },
    { value: 'youtube', label: 'YouTube', icon: Youtube },
    { value: 'tiktok', label: 'TikTok', icon: Tv },
    { value: 'medios', label: 'Medios nacionales', icon: FileText }
  ];

  readonly queriesGuardadosOptions: SelectOption[] = [
    { value: '', label: 'Queries guardados' },
    { value: 'query1', label: 'Menciones de marca' },
    { value: 'query2', label: 'Competidores principales' },
    { value: 'query3', label: 'Industria general' }
  ];

  readonly edadesOptions: SelectOption[] = [
    { value: 'all', label: 'Todas' },
    { value: '18-24', label: '18-24 años' },
    { value: '25-34', label: '25-34 años' },
    { value: '35-44', label: '35-44 años' },
    { value: '45-54', label: '45-54 años' },
    { value: '55+', label: '55+ años' }
  ];

  readonly paisesOptions: SelectOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'pe', label: 'Perú' },
    { value: 'mx', label: 'México' },
    { value: 'co', label: 'Colombia' },
    { value: 'ar', label: 'Argentina' },
    { value: 'cl', label: 'Chile' },
    { value: 'es', label: 'España' }
  ];

  readonly filtroAnteriorOptions: SelectOption[] = [
    { value: '', label: 'Seleccionar filtro...' },
    { value: 'filtro1', label: 'Búsqueda 28/01/2026' },
    { value: 'filtro2', label: 'Búsqueda 25/01/2026' },
    { value: 'filtro3', label: 'Búsqueda 20/01/2026' }
  ];

  selectedSegmento: string = 'all';
  selectedEtiquetas: string = 'all';
  selectedRedesSociales: string = 'all';
  selectedInfluencia: string = 'all';
  selectedCategorias: string = 'all';
  selectedSentimiento: string = 'all';
  selectedGenero: string = 'all';
  selectedFuentes: string = 'all';
  selectedQuery: string = '';
  selectedEdades: string = 'all';
  selectedPaises: string = 'all';
  selectedFiltroAnterior: string = '';
  queryInput: string = '';

  dateRange: DateRange = {
    startDate: new Date(2026, 0, 1, 0, 0),
    endDate: new Date(2026, 0, 28, 23, 59)
  };

  // KPI Data - General
  readonly kpiDataGeneral = [
    { label: 'Total menciones', value: '11', color: '#0061fe', hasXIcon: false },
    { label: 'Usuarios únicos', value: '7', color: '#9e54e2', hasXIcon: false },
    { label: 'Usuarios únicos', value: '2', color: '#1DA1F2', hasXIcon: true },
    { label: 'Audiencia Potencial TW', value: '5,578', color: '#1DA1F2', hasXIcon: false }
  ];

  // KPI Data - Influencia
  readonly kpiDataInfluencia = [
    { label: '100% Baja', value: '2', color: '#3ace76' },
    { label: '0% Media', value: '0', color: '#f4b137' },
    { label: '0% Alta', value: '0', color: '#f61a4a' }
  ];

  // Platform Results Data
  readonly platformResults: PlatformResult[] = [
    { name: 'Facebook', icon: 'facebook', value: 2012, color: '#1877F2', maxValue: 2500 },
    { name: 'Instagram', icon: 'instagram', value: 2012, color: '#E4405F', maxValue: 2500 },
    { name: 'Medios nacionales', icon: 'tv', value: 2012, color: '#3ace76', maxValue: 2500 },
    { name: 'Youtube', icon: 'youtube', value: 2012, color: '#FF0000', maxValue: 2500 },
    { name: 'Linkedin', icon: 'linkedin', value: 2012, color: '#0A66C2', maxValue: 2500 }
  ];

  // Sentiment Chart Data
  readonly sentimentData: PieChartData[] = [
    { label: 'Positiva', value: 52, color: '#3ecc80' },
    { label: 'Neutra', value: 19, color: '#a8d5e5' },
    { label: 'Negativa', value: 29, color: '#f61a4a' }
  ];

  // Mentions Data (images first)
  mentions: MentionData[] = [
    {
      id: '1',
      source: 'facebook',
      userName: 'Entel Peru',
      userHandle: 'Usuario Facebook',
      userType: 'Usuario Facebook',
      content: 'Entel la peor empresa, ya va hacer un año que trato de cambiar de titularidad por el fallecimiento de mi papá y hasta ahora nada, que no hay sistema y ahora mienten diciendo que en diciembre se soluciona, me acerco con los documentos y para que después de casi 1 hora le digan que no hay sistema, que creen que los certificados lo dan gratis???!!!>:(:(:(:(>:(',
      date: new Date(2026, 0, 26),
      time: '18:57:23',
      category: 'COMPETIDOR 4',
      sentiment: 'positive',
      tags: ['Etiqueta 1', 'Etiqueta 2'],
      imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=500&fit=crop'
    },
    {
      id: '3',
      source: 'instagram',
      userName: 'TechReviewer_PE',
      userHandle: 'techreviewer_pe',
      userType: 'Influencer Tech',
      followers: 15420,
      content: 'Probando el nuevo plan de fibra óptica de @MovistarPeru. La velocidad es increíble, 500 Mbps reales. El técnico llegó puntual y la instalación fue rápida. Muy satisfecho con el servicio.',
      date: new Date(2026, 0, 27),
      time: '14:32:15',
      category: 'MI MARCA',
      sentiment: 'positive',
      tags: ['Fibra Óptica', 'Instalación', 'Servicio'],
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      id: '5',
      source: 'youtube',
      userName: 'ReviewsTech Peru',
      userHandle: 'reviewstechperu',
      userType: 'Canal de Reviews',
      followers: 45000,
      content: 'Nuevo video comparando los planes de internet hogar. Spoiler: hay sorpresas interesantes en la relación calidad-precio.',
      date: new Date(2026, 0, 24),
      time: '16:45:00',
      category: 'INDUSTRIA',
      sentiment: 'neutral',
      tags: ['Review', 'Comparativa'],
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=500&fit=crop'
    },
    {
      id: '2',
      source: 'twitter',
      userName: 'PositivoSJCrema_90',
      userHandle: 'SJCrema_90',
      userType: 'Scarlett Crema',
      followers: 28,
      content: '@ComsMovistarPe Se acuerdan de Gol Perú?? volvió en forma de Movistar tv https://t.co/KGaxd8e83y',
      date: new Date(2026, 0, 28),
      time: '18:57:23',
      category: 'MI MARCA',
      sentiment: 'negative',
      tags: []
    },
    {
      id: '4',
      source: 'linkedin',
      userName: 'Carlos Mendoza',
      userHandle: 'carlosmendoza',
      userType: 'Director Comercial',
      followers: 5200,
      content: 'Excelente experiencia con el servicio empresarial de Movistar. El equipo técnico resolvió todos nuestros requerimientos de conectividad en tiempo récord.',
      date: new Date(2026, 0, 25),
      time: '10:15:42',
      category: 'MI MARCA',
      sentiment: 'positive',
      tags: []
    }
  ];

  // AI Insight
  readonly aiInsight = 'Tu estrategia de Instagram está generando resultados excepcionales. El contenido enfocado en Reels incrementó el engagement 340% mientras mantienes crecimiento de audiencia de calidad. Los indicadores de generación de leads mejoraron 26% de los resultados. Además, se detectó un incremento significativo en menciones positivas relacionadas con el servicio al cliente, especialmente en Twitter donde los tiempos de respuesta han mejorado un 45%. Las publicaciones con contenido educativo tienen un 28% más de compartidos que el promedio. Se recomienda continuar con la estrategia de Reels y explorar colaboraciones con micro-influencers del sector tecnológico para ampliar el alcance orgánico.';

  toggleSearch(): void {
    this.isSearchExpanded = !this.isSearchExpanded;
  }

  toggleAiInsight(): void {
    this.isAiInsightExpanded = !this.isAiInsightExpanded;
  }

  openFilterDrawer(): void {
    this.isFilterDrawerOpen = true;
  }

  closeFilterDrawer(): void {
    this.isFilterDrawerOpen = false;
  }

  toggleAdvancedFilters(): void {
    this.isAdvancedFiltersOpen = !this.isAdvancedFiltersOpen;
  }

  toggleTwitterFilters(): void {
    this.isTwitterFiltersOpen = !this.isTwitterFiltersOpen;
  }

  toggleQueriesGuardados(): void {
    this.isQueriesGuardadosOpen = !this.isQueriesGuardadosOpen;
  }

  selectQuery(query: string): void {
    this.queryInput = query;
    this.isQueriesGuardadosOpen = false;
  }

  get hasQueriesGuardadosActive(): boolean {
    return this.queryInput.trim() !== '';
  }

  get hasTwitterFiltersActive(): boolean {
    return this.selectedGenero !== 'all' ||
           this.selectedEdades !== 'all' ||
           this.selectedPaises !== 'all';
  }

  get hasAdvancedFiltersActive(): boolean {
    return this.selectedSentimiento !== 'all' ||
           this.selectedInfluencia !== 'all' ||
           this.filterContenidoPropio ||
           this.filterMencionesRevisadas ||
           this.filterMencionesBorradas;
  }

  onSegmentoChange(option: SelectOption | null): void {
    if (option) this.selectedSegmento = option.value as string;
  }

  onQueryGuardadoChange(option: SelectOption | null): void {
    if (option) this.selectedQuery = option.value as string;
  }

  onQueryInputChange(value: string | number): void {
    this.queryInput = String(value);
  }

  onEtiquetasChange(option: SelectOption | null): void {
    if (option) this.selectedEtiquetas = option.value as string;
  }

  onRedesSocialesChange(option: SelectOption | null): void {
    if (option) this.selectedRedesSociales = option.value as string;
  }

  onInfluenciaChange(option: SelectOption | null): void {
    if (option) this.selectedInfluencia = option.value as string;
  }

  onCategoriasChange(option: SelectOption | null): void {
    if (option) this.selectedCategorias = option.value as string;
  }

  onSentimientoChange(option: SelectOption | null): void {
    if (option) this.selectedSentimiento = option.value as string;
  }

  onGeneroChange(option: SelectOption | null): void {
    if (option) this.selectedGenero = option.value as string;
  }

  onFuentesChange(option: SelectOption | null): void {
    if (option) this.selectedFuentes = option.value as string;
  }

  onQuerySelect(option: SelectOption | null): void {
    if (option && option.value) {
      this.selectedQuery = option.value as string;
      // Optionally populate the query input based on selection
    }
  }

  onEdadesChange(option: SelectOption | null): void {
    if (option) this.selectedEdades = option.value as string;
  }

  onPaisesChange(option: SelectOption | null): void {
    if (option) this.selectedPaises = option.value as string;
  }

  onFiltroAnteriorChange(option: SelectOption | null): void {
    if (option) this.selectedFiltroAnterior = option.value as string;
  }

  clearFilters(): void {
    this.selectedSegmento = 'all';
    this.selectedEtiquetas = 'all';
    this.selectedRedesSociales = 'all';
    this.selectedInfluencia = 'all';
    this.selectedCategorias = 'all';
    this.selectedSentimiento = 'all';
    this.selectedGenero = 'all';
    this.selectedFuentes = 'all';
    this.selectedQuery = '';
    this.selectedEdades = 'all';
    this.selectedPaises = 'all';
    this.selectedFiltroAnterior = '';
    this.queryInput = '';
    this.filterContenidoPropio = false;
    this.filterMencionesRevisadas = false;
    this.filterMencionesBorradas = false;
    this.filterAnalisisMuestral = false;
  }

  onDateRangeChange(range: DateRange): void {
    this.dateRange = range;
  }

  onSearch(): void {
    console.log('Searching with filters:', {
      segmento: this.selectedSegmento,
      etiquetas: this.selectedEtiquetas,
      redesSociales: this.selectedRedesSociales,
      influencia: this.selectedInfluencia,
      query: this.queryInput,
      dateRange: this.dateRange
    });
  }

  onModelEffectiveness(): void {
    console.log('Opening model effectiveness');
  }

  onSendTo(mention: MentionData): void {
    console.log('Sending mention:', mention.id);
  }

  onViewMention(mention: MentionData): void {
    console.log('Viewing mention:', mention.id);
  }

  onMentionOptions(mention: MentionData): void {
    this.openOptionsMenu = this.openOptionsMenu === mention.id ? null : mention.id;
    this.openSentimentDropdown = null;
  }

  toggleSentimentDropdown(mention: MentionData): void {
    this.openSentimentDropdown = this.openSentimentDropdown === mention.id ? null : mention.id;
    this.openOptionsMenu = null;
  }

  changeSentiment(mention: MentionData, sentiment: 'positive' | 'negative' | 'neutral'): void {
    const index = this.mentions.findIndex(m => m.id === mention.id);
    if (index !== -1) {
      this.mentions[index] = { ...this.mentions[index], sentiment };
    }
    this.openSentimentDropdown = null;
  }

  onMenuAction(mention: MentionData, action: string): void {
    console.log(`Action "${action}" for mention:`, mention.id);
    this.openOptionsMenu = null;
  }

  copyMentionId(mention: MentionData, event: Event): void {
    event.stopPropagation();
    const id = mention.id;
    this.openOptionsMenu = null;

    navigator.clipboard.writeText(id).then(() => {
      this.toastMessage = `ID ${id} copiado al portapapeles`;
      this.toastVisible = true;
      this.cdr.detectChanges();
    }).catch(() => {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = id;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      this.toastMessage = `ID ${id} copiado al portapapeles`;
      this.toastVisible = true;
      this.cdr.detectChanges();
    });
  }

  closeAllDropdowns(): void {
    this.openSentimentDropdown = null;
    this.openOptionsMenu = null;
  }

  onToggleFavorite(mention: MentionData): void {
    console.log('Toggling favorite for mention:', mention.id);
  }

  onRemoveTag(mention: MentionData, tag: string): void {
    console.log('Removing tag:', tag, 'from mention:', mention.id);
  }

  onAddTag(mention: MentionData): void {
    console.log('Adding tag to mention:', mention.id);
  }

  getSentimentLabel(sentiment: string): string {
    switch (sentiment) {
      case 'positive': return 'Sentimiento positiva';
      case 'negative': return 'Sentimiento negativo';
      default: return 'Sentimiento neutra';
    }
  }

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }

  getBarWidth(value: number, maxValue: number): string {
    return `${(value / maxValue) * 100}%`;
  }

  getPlatformIcon(platform: string) {
    switch (platform) {
      case 'facebook': return this.FacebookIcon;
      case 'instagram': return this.InstagramIcon;
      case 'youtube': return this.YoutubeIcon;
      case 'linkedin': return this.LinkedinIcon;
      case 'tv': return this.TvIcon;
      default: return this.FacebookIcon;
    }
  }

  getSourceIcon(source: string) {
    switch (source) {
      case 'facebook': return this.FacebookIcon;
      case 'instagram': return this.InstagramIcon;
      case 'youtube': return this.YoutubeIcon;
      case 'linkedin': return this.LinkedinIcon;
      case 'twitter': return this.AtSignIcon;
      default: return this.FacebookIcon;
    }
  }

  formatDisplayDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  getTagColor(index: number): string {
    const colors = ['orange', 'green', 'blue', 'purple'];
    return colors[index % colors.length];
  }

  // Recent Searches Modal
  openRecentSearchesModal(): void {
    this.isRecentSearchesModalOpen = true;
  }

  closeRecentSearchesModal(): void {
    this.isRecentSearchesModalOpen = false;
  }

  selectRecentSearch(search: RecentSearch): void {
    console.log('Loading recent search:', search.name);
    // Here you would load the saved filters
    this.toastMessage = `Búsqueda "${search.name}" cargada`;
    this.toastVisible = true;
    this.closeRecentSearchesModal();
  }

  deleteRecentSearch(search: RecentSearch, event: Event): void {
    event.stopPropagation();
    this.recentSearches = this.recentSearches.filter(s => s.id !== search.id);
    this.toastMessage = `Búsqueda "${search.name}" eliminada`;
    this.toastVisible = true;
  }

  // Queries Guardados Modal
  openQueriesGuardadosModal(): void {
    // TODO: Implementar modal de queries guardados
    this.toastMessage = 'Queries guardados (próximamente)';
    this.toastVisible = true;
  }
}

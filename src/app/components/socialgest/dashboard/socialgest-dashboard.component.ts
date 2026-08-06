import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, PlusCircle, Copy, Check, Search, X, Sparkles, CircleCheck, CircleX, CircleCheckBig, TriangleAlert, Info, ChevronDown, User, Globe, Mail, MapPin, Bell, Settings, Home, FileText, BarChart3, Layers, Zap, Trash2, Pencil, EllipsisVertical, LoaderCircle, MoreHorizontal, PartyPopper, ArrowRight, PlayCircle, ImagePlus, LineChart } from 'lucide-angular';
import { RadioButton } from 'primeng/radiobutton';
import { SelectUserComponent, SelectUserOption } from '../../ui/select-user/select-user.component';
import { SelectSegmentComponent, SelectSegmentOption } from '../../ui/select-segment/select-segment.component';
import { SelectSegmentImgComponent, SelectSegmentImgOption } from '../../ui/select-segment-img/select-segment-img.component';
import { SelectColorpickerComponent, SelectColorpickerOption } from '../../ui/select-colorpicker/select-colorpicker.component';
import { SelectSegmentChipsComponent, SelectSegmentChipsOption } from '../../ui/select-segment-chips/select-segment-chips.component';
import { ConfirmModalComponent, ConfirmModalVariant } from '../../ui/confirm-modal/confirm-modal.component';
import { ConfirmCodeModalComponent } from '../../ui/confirm-code-modal/confirm-code-modal.component';
import { StepperComponent } from '../../ui/stepper/stepper.component';
import { TextareaComponent } from '../../ui/textarea/textarea.component';
import { NumberInputComponent } from '../../ui/number-input/number-input.component';
import { AccountCounterComponent } from '../../ui/account-counter/account-counter.component';
import { SelectDateComponent } from '../../ui/select-date/select-date.component';
import { HourDatePickerComponent } from '../../ui/hour-date-picker/hour-date-picker.component';
import { SelectComponent, SelectOption } from '../../ui/select/select.component';
import { SearchInputComponent } from '../../ui/search-input/search-input.component';
import { TextInputComponent } from '../../ui/text-input/text-input.component';
import { CardComponent } from '../../ui/card/card.component';
import { MenuComponent, MenuItem } from '../../ui/menu/menu.component';
import { AvatarSocialComponent } from '../../ui/avatar-social/avatar-social.component';
import { BarVerticalComponent, BarVerticalItem } from '../../ui/bar-vertical/bar-vertical.component';
import { BarHorizontalComponent, BarHorizontalItem } from '../../ui/bar-horizontal/bar-horizontal.component';
import { TrendIndicatorComponent } from '../../ui/trend-indicator/trend-indicator.component';
import { SparklineComponent } from '../../ui/sparkline/sparkline.component';
import { DonutChartComponent, DonutSegment } from '../../ui/donut-chart/donut-chart.component';

interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  scssVar: string;
  isBase?: boolean;
  isGradient?: boolean;
}

interface ColorPalette {
  title: string;
  swatches: ColorSwatch[];
}

interface TokenRow {
  token: string;
  value: string;
  usage: string;
}

interface TypographyRow {
  name: string;
  family: string;
  size: string;
  weight: string;
  usage: string;
}

interface SpacingRow {
  name: string;
  value: string;
  usage: string;
}

interface RadiusRow {
  name: string;
  value: string;
  usage: string;
}

interface ComponentDoc {
  name: string;
  selector: string;
  description: string;
  inputs: { name: string; type: string; default: string; description: string }[];
  codeExample: string;
}

@Component({
  selector: 'app-socialgest-dashboard',
  standalone: true,
  imports: [
    CommonModule, FormsModule, LucideAngularModule, RadioButton,
    SelectUserComponent, SelectSegmentComponent, SelectSegmentImgComponent,
    SelectColorpickerComponent, SelectSegmentChipsComponent,
    ConfirmModalComponent,
    ConfirmCodeModalComponent,
    StepperComponent,
    TextareaComponent,
    NumberInputComponent,
    AccountCounterComponent,
    SelectDateComponent,
    HourDatePickerComponent,
    SelectComponent,
    SearchInputComponent,
    TextInputComponent,
    CardComponent,
    MenuComponent,
    AvatarSocialComponent,
    BarVerticalComponent,
    BarHorizontalComponent,
    TrendIndicatorComponent,
    SparklineComponent,
    DonutChartComponent
  ],
  templateUrl: './socialgest-dashboard.component.html',
  styleUrl: './socialgest-dashboard.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SocialgestDashboardComponent {
  readonly PlusCircleIcon = PlusCircle;
  readonly CopyIcon = Copy;
  readonly CheckIcon = Check;
  readonly SearchIcon = Search;
  readonly XIcon = X;
  readonly SparklesIcon = Sparkles;
  readonly CircleCheckIcon = CircleCheck;
  readonly CircleXIcon = CircleX;
  readonly CircleCheckBigIcon = CircleCheckBig;
  readonly TriangleAlertIcon = TriangleAlert;
  readonly InfoIcon = Info;
  readonly ChevronDownIcon = ChevronDown;
  readonly UserIcon = User;
  readonly GlobeIcon = Globe;
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly BellIcon = Bell;
  readonly SettingsIcon = Settings;
  readonly HomeIcon = Home;
  readonly FileTextIcon = FileText;
  readonly BarChart3Icon = BarChart3;
  readonly LayersIcon = Layers;
  readonly ZapIcon = Zap;
  readonly TrashIcon = Trash2;
  readonly PencilIcon = Pencil;
  readonly EllipsisIcon = EllipsisVertical;
  readonly LoaderCircleIcon = LoaderCircle;
  readonly MoreHorizontalIcon = MoreHorizontal;
  readonly PartyPopperIcon = PartyPopper;
  readonly ArrowRightIcon = ArrowRight;
  readonly PlayCircleIcon = PlayCircle;
  readonly ImagePlusIcon = ImagePlus;
  readonly LineChartIcon = LineChart;

  // ─── Color labels demo ───
  readonly labelVariants = [
    { key: 'azul', label: 'Azul' },
    { key: 'verde', label: 'Verde' },
    { key: 'amarillo', label: 'Amarillo' },
    { key: 'rojo', label: 'Rojo' },
    { key: 'violeta', label: 'Violeta' },
    { key: 'naranja', label: 'Naranja' },
    { key: 'turquesa', label: 'Turquesa' },
    { key: 'gris', label: 'Gris' },
    { key: 'vinotinto', label: 'Vinotinto' },
    { key: 'olivo', label: 'Olivo' },
  ] as const;

  // ─── Table menu state ───
  openTableMenuId: string | null = null;

  toggleTableMenu(rowId: string, event: MouseEvent): void {
    event.stopPropagation();
    this.openTableMenuId = this.openTableMenuId === rowId ? null : rowId;
  }

  @HostListener('document:click')
  onDocumentClickGlobal(): void {
    this.openTableMenuId = null;
    this.tokenDropdownOpen = false;
  }

  copiedToken: string | null = null;
  expandedCode: Record<string, boolean> = {};
  copiedCode: string | null = null;

  toggleCode(name: string): void {
    this.expandedCode[name] = !this.expandedCode[name];
  }

  copyCode(code: string, name: string): void {
    navigator.clipboard.writeText(code);
    this.copiedCode = name;
    setTimeout(() => this.copiedCode = null, 2000);
  }
  searchQuery = '';
  navDropdownOpen = false;
  headerScrolled = false;

  get navSelectLabel(): string {
    return 'Secciones';
  }

  toggleNavDropdown(): void {
    this.navDropdownOpen = !this.navDropdownOpen;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.headerScrolled = window.scrollY > 20;
  }

  readonly sections = [
    // ─── Componentes interactivos primero ───
    { id: 'colors', label: 'Colors', keywords: ['color', 'palette', 'primary', 'secondary', 'grey', 'hex', 'rgb', 'scss'] },
    { id: 'typography', label: 'Typography', keywords: ['font', 'tipografia', 'urbanist', 'dm sans', 'heading', 'body', 'weight', 'size'] },
    { id: 'spacing', label: 'Spacing', keywords: ['espacio', 'padding', 'margin', 'gap', 'gestalt', 'proximidad'] },
    { id: 'radius', label: 'Border Radius', keywords: ['border', 'radius', 'redondeo', 'pill', 'circle'] },
    { id: 'buttons', label: 'Buttons', keywords: ['boton', 'button', 'primary', 'secundary', 'white', 'hover', 'active', 'disabled', 'ai', 'icon button', 'toggle button'] },
    { id: 'ia-elements', label: 'Elementos de IA', keywords: ['ia', 'ai', 'inteligencia', 'artificial', 'gradiente', 'nota', 'titulo', 'generando', 'creando', 'sparkles', 'loader', 'progress', 'hero'] },
    { id: 'labels', label: 'Etiquetas', keywords: ['etiqueta', 'label', 'badge', 'tag', 'chip', 'color'] },
    { id: 'controls', label: 'Controls', keywords: ['toggle', 'checkbox', 'radio', 'switch', 'check', 'tab', 'primeng'] },
    { id: 'badges', label: 'Status Badge', keywords: ['badge', 'status', 'positiva', 'negativa', 'neutra', 'desactivado', 'dot', 'pill'] },
    { id: 'chips', label: 'Chips', keywords: ['chip', 'tag', 'pill', 'removable', 'filtro', 'label'] },
    { id: 'toasters', label: 'Toasters', keywords: ['toast', 'toaster', 'notificacion', 'alert', 'success', 'error', 'warning', 'info', 'snackbar'] },
    { id: 'selects-seg', label: 'Select Segments', keywords: ['select', 'segment', 'user', 'avatar', 'colorpicker', 'image', 'chips', 'hover', 'selected'] },
    { id: 'modals', label: 'Modals', keywords: ['modal', 'dialog', 'confirm', 'confirmacion', 'alerta', 'error', 'general', 'overlay'] },
    { id: 'special-modals', label: 'Modales Especiales', keywords: ['modal', 'especial', 'bienvenida', 'welcome', 'plan', 'vencido', 'expired', 'lanzamiento', 'launch', 'nuevo', 'socialgest.ai', 'ia', 'ai'] },
    { id: 'steppers', label: 'Steppers', keywords: ['stepper', 'paso', 'step', 'progress', 'wizard', 'barra', 'progreso'] },
    { id: 'form-inputs', label: 'Form Inputs', keywords: ['input', 'text', 'textarea', 'number', 'form', 'campo', 'formulario'] },
    { id: 'date-pickers', label: 'Date Pickers', keywords: ['date', 'fecha', 'calendar', 'calendario', 'hora', 'hour', 'time', 'picker'] },
    { id: 'counters', label: 'Counters', keywords: ['counter', 'contador', 'cuenta', 'badge', 'number', 'users'] },
    { id: 'selects', label: 'Selects', keywords: ['select', 'dropdown', 'option', 'icon', 'label', 'size', 'disabled'] },
    { id: 'search-inputs', label: 'Search Inputs', keywords: ['search', 'buscar', 'input', 'pill', 'full width', 'expandable'] },
    { id: 'text-inputs', label: 'Text Inputs', keywords: ['text', 'input', 'campo', 'field', 'label', 'icon', 'error', 'disabled'] },
    { id: 'cards', label: 'Cards', keywords: ['card', 'tarjeta', 'container', 'simple', 'titled', 'large'] },
    { id: 'menus', label: 'Menus', keywords: ['menu', 'dropdown', 'icon', 'avatar', 'radio', 'checkbox', 'item', 'list'] },
    { id: 'avatars', label: 'Avatares', keywords: ['avatar', 'social', 'media', 'instagram', 'facebook', 'badge', 'platform', 'foto', 'perfil', 'imagen'] },
    { id: 'metricas', label: 'Métricas', keywords: ['metrica', 'bar', 'barra', 'vertical', 'horizontal', 'chart', 'grafico', 'gradient', 'blue', 'pink', 'lineal', 'sparkline', 'circular', 'donut', 'indicador', 'trend', 'dato', 'dashboard'] },
    { id: 'tables', label: 'Tables', keywords: ['tabla', 'table', 'columna', 'fila', 'row', 'column', 'badge', 'action', 'icon', 'data', 'orden'] },
    // ─── Documentacion al final ───
    { id: 'tokens', label: 'Design Tokens', keywords: ['token', 'variable', 'scss', '$', 'status', 'success', 'warning', 'error'] },
    { id: 'icons', label: 'Icons', keywords: ['icono', 'lucide', 'icon', 'svg', 'plus', 'bell', 'search'] },
    { id: 'components', label: 'Component API', keywords: ['componente', 'api', 'input', 'output', 'select', 'table', 'badge', 'search'] },
    { id: 'rules', label: 'Reglas', keywords: ['regla', 'convencion', 'bem', 'archivo', 'estructura', 'chart', 'accesibilidad'] },
  ];

  // ─── Métricas tab & demo data ───
  metricasActiveTab: string = 'vert-primary';

  readonly barVerticalItems: BarVerticalItem[] = [
    { value: 416 }, { value: 380 }, { value: 350 },
    { value: 310 }, { value: 280 }, { value: 240 },
    { value: 200 }, { value: 150 }, { value: 100 }, { value: 60 }
  ];
  readonly barVerticalLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'];

  readonly barHorizontalItems: BarHorizontalItem[] = [
    { value: 416 }, { value: 380 }, { value: 350 },
    { value: 310 }, { value: 280 }, { value: 240 },
    { value: 200 }, { value: 150 }, { value: 100 }, { value: 60 }
  ];

  // Sparkline demo data
  readonly sparklineData1 = [30, 45, 28, 50, 42, 60, 55, 70, 65, 85];
  readonly sparklineData2 = [20, 25, 35, 30, 45, 40, 55, 50, 65, 80];

  // Donut chart demo segments
  readonly donutSegments: DonutSegment[] = [
    { value: 35, color: '#5cd680', gradientTo: '#8aeab0', label: 'Orgánico' },
    { value: 12, color: '#f5c842', gradientTo: '#f5d97a', label: 'Referral' },
    { value: 10, color: '#f47a37', gradientTo: '#f9b48e', label: 'Social' },
    { value: 15, color: '#ee6fa0', gradientTo: '#f2a5c8', label: 'Email' },
    { value: 13, color: '#9e7be8', gradientTo: '#c4aff2', label: 'Directo' },
    { value: 15, color: '#5495fe', gradientTo: '#8ab6ff', label: 'Paid' }
  ];

  // ─── Interactive states for new components ───
  toggleStates: Record<string, boolean> = { large: true, medium: false, small: true };
  checkboxStates: Record<string, boolean> = { demo1: false, demo2: true };
  radioSelected = 'option1';
  radioSelectedSm = 'optionA';
  radioSelectedLg = 'optionX';
  radioDisabledVal = 'disabledB';
  radioFilledVal = 'filled1';
  toggleBtnActive: Record<string, boolean> = { btn1: false, btn2: true, btn3: false };
  radioTabSelected = 'tab2';

  // ─── Chips state ───
  chips: { label: string; variant: string }[] = [
    { label: 'Angular', variant: 'primary' },
    { label: 'TypeScript', variant: 'secundary' },
    { label: 'SCSS', variant: 'white' },
    { label: 'PrimeNG', variant: 'primary' },
    { label: 'Lucide', variant: 'secundary' },
  ];

  removeChip(index: number) {
    this.chips = this.chips.filter((_, i) => i !== index);
  }

  // ─── Toaster state ───
  toasterVisible: Record<string, boolean> = {
    success: true, warning: true, error: true, info: true
  };

  showToaster(variant: string) {
    this.toasterVisible[variant] = true;
  }

  dismissToaster(variant: string) {
    this.toasterVisible[variant] = false;
  }

  addChip() {
    const labels = ['React', 'Vue', 'Svelte', 'Next.js', 'Nuxt', 'Figma', 'Tailwind'];
    const variants = ['primary', 'secundary', 'white'];
    const label = labels[Math.floor(Math.random() * labels.length)];
    const variant = variants[Math.floor(Math.random() * variants.length)];
    this.chips.push({ label, variant });
  }

  // ─── Table demo data ───
  readonly tableColumns = [
    { key: 'orden', header: 'Orden' },
    { key: 'estatus', header: 'Estatus', type: 'badge' as const },
    { key: 'plan', header: 'Plan' },
    { key: 'monto', header: 'Monto' },
    { key: 'tipo', header: 'Tipo' },
    { key: 'codigo', header: 'Codigo' },
  ];

  readonly tableData = [
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€396,60', tipo: 'Renovacion mensual', codigo: '714' },
    { orden: '121893', estatus: { label: 'Negativa', variant: 'error' }, plan: 'Enterprise 2.0', monto: '€1.250,00', tipo: 'Nuevo contrato', codigo: '512' },
    { orden: '121892', estatus: { label: 'Neutra', variant: 'warning' }, plan: 'Starter 1.0', monto: '€99,00', tipo: 'Renovacion anual', codigo: '389' },
    { orden: '121891', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€396,60', tipo: 'Upgrade', codigo: '271' },
    { orden: '121890', estatus: { label: 'Desactivado', variant: 'neutral' }, plan: 'Basic 1.0', monto: '€49,00', tipo: 'Cancelacion', codigo: '158' },
  ];

  readonly tableMenuItems: MenuItem[] = [
    { id: 'edit', label: 'Editar', icon: Pencil },
    { id: 'delete', label: 'Eliminar', icon: Trash2 },
  ];

  onTableRowClick(row: Record<string, unknown>, index: number): void {
    console.log('Row clicked:', row, 'Index:', index);
  }

  onTableMenuAction(item: MenuItem): void {
    console.log('Table action:', item.id, 'Row:', this.openTableMenuId);
    this.openTableMenuId = null;
  }

  // ─── Token group selector ───
  tokenDropdownOpen = false;

  toggleTokenDropdown(): void {
    this.tokenDropdownOpen = !this.tokenDropdownOpen;
  }

  scrollToTokenGroup(groupTitle: string): void {
    this.tokenDropdownOpen = false;
    const id = 'sg-token-' + groupTitle.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isSectionVisible(sectionId: string): boolean {
    if (!this.searchQuery.trim()) return true;
    const query = this.searchQuery.toLowerCase().trim();
    const section = this.sections.find(s => s.id === sectionId);
    if (!section) return true;
    return section.label.toLowerCase().includes(query)
      || section.keywords.some(k => k.includes(query));
  }

  scrollToSection(sectionId: string) {
    this.searchQuery = '';
    this.navDropdownOpen = false;
    const el = document.getElementById('sg-' + sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  get filteredSections() {
    if (!this.searchQuery.trim()) return this.sections;
    const query = this.searchQuery.toLowerCase().trim();
    return this.sections.filter(s =>
      s.label.toLowerCase().includes(query)
      || s.keywords.some(k => k.includes(query))
    );
  }

  clearSearch() {
    this.searchQuery = '';
  }

  // ─── Color Palettes ───
  readonly palettes: ColorPalette[] = [
    {
      title: 'Primary',
      swatches: [
        { name: 'sg-primary-50', hex: '#e6efff', rgb: 'rgb(230, 239, 255)', scssVar: '$sg-primary-50' },
        { name: 'sg-primary-100', hex: '#b0ceff', rgb: 'rgb(176, 206, 255)', scssVar: '$sg-primary-100' },
        { name: 'sg-primary-200', hex: '#8ab6ff', rgb: 'rgb(138, 182, 255)', scssVar: '$sg-primary-200' },
        { name: 'sg-primary-300', hex: '#5495fe', rgb: 'rgb(84, 149, 254)', scssVar: '$sg-primary-300' },
        { name: 'sg-primary-400', hex: '#3381fe', rgb: 'rgb(51, 129, 254)', scssVar: '$sg-primary-400' },
        { name: 'sg-primary-500', hex: '#0061fe', rgb: 'rgb(0, 97, 254)', scssVar: '$sg-primary-500', isBase: true },
        { name: 'sg-primary-600', hex: '#0058e7', rgb: 'rgb(0, 88, 231)', scssVar: '$sg-primary-600' },
        { name: 'sg-primary-700', hex: '#0045b4', rgb: 'rgb(0, 69, 180)', scssVar: '$sg-primary-700' },
        { name: 'sg-primary-800', hex: '#00358c', rgb: 'rgb(0, 53, 140)', scssVar: '$sg-primary-800' },
        { name: 'sg-primary-900', hex: '#00296b', rgb: 'rgb(0, 41, 107)', scssVar: '$sg-primary-900' }
      ]
    },
    {
      title: 'Secondary',
      swatches: [
        { name: 'sg-secondary-50', hex: '#fef2eb', rgb: 'rgb(254, 242, 235)', scssVar: '$sg-secondary-50' },
        { name: 'sg-secondary-100', hex: '#fcd6c1', rgb: 'rgb(252, 214, 193)', scssVar: '$sg-secondary-100' },
        { name: 'sg-secondary-200', hex: '#fac2a3', rgb: 'rgb(250, 194, 163)', scssVar: '$sg-secondary-200' },
        { name: 'sg-secondary-300', hex: '#f8a679', rgb: 'rgb(248, 166, 121)', scssVar: '$sg-secondary-300' },
        { name: 'sg-secondary-400', hex: '#f6955f', rgb: 'rgb(246, 149, 95)', scssVar: '$sg-secondary-400' },
        { name: 'sg-secondary-500', hex: '#f47a37', rgb: 'rgb(244, 122, 55)', scssVar: '$sg-secondary-500', isBase: true },
        { name: 'sg-secondary-600', hex: '#e5641e', rgb: 'rgb(229, 100, 30)', scssVar: '$sg-secondary-600' },
        { name: 'sg-secondary-700', hex: '#c84802', rgb: 'rgb(200, 72, 2)', scssVar: '$sg-secondary-700' },
        { name: 'sg-secondary-800', hex: '#b84100', rgb: 'rgb(184, 65, 0)', scssVar: '$sg-secondary-800' },
        { name: 'sg-secondary-900', hex: '#9c3700', rgb: 'rgb(156, 55, 0)', scssVar: '$sg-secondary-900' }
      ]
    },
    {
      title: 'Grey',
      swatches: [
        { name: 'sg-grey-50', hex: '#ececec', rgb: 'rgb(236, 236, 236)', scssVar: '$sg-grey-50' },
        { name: 'sg-grey-100', hex: '#c3c3c3', rgb: 'rgb(195, 195, 195)', scssVar: '$sg-grey-100' },
        { name: 'sg-grey-200', hex: '#a6a6a6', rgb: 'rgb(166, 166, 166)', scssVar: '$sg-grey-200' },
        { name: 'sg-grey-300', hex: '#7d7d7d', rgb: 'rgb(125, 125, 125)', scssVar: '$sg-grey-300' },
        { name: 'sg-grey-400', hex: '#646464', rgb: 'rgb(100, 100, 100)', scssVar: '$sg-grey-400' },
        { name: 'sg-grey-500', hex: '#3d3d3d', rgb: 'rgb(61, 61, 61)', scssVar: '$sg-grey-500', isBase: true },
        { name: 'sg-grey-600', hex: '#383838', rgb: 'rgb(56, 56, 56)', scssVar: '$sg-grey-600' },
        { name: 'sg-grey-700', hex: '#2b2b2b', rgb: 'rgb(43, 43, 43)', scssVar: '$sg-grey-700' },
        { name: 'sg-grey-800', hex: '#222222', rgb: 'rgb(34, 34, 34)', scssVar: '$sg-grey-800' },
        { name: 'sg-grey-900', hex: '#1a1a1a', rgb: 'rgb(26, 26, 26)', scssVar: '$sg-grey-900' }
      ]
    },
    {
      title: 'Success',
      swatches: [
        { name: 'sg-success-50', hex: '#ebfaf1', rgb: 'rgb(235, 250, 241)', scssVar: '$sg-success-50' },
        { name: 'sg-success-100', hex: '#aeebc7', rgb: 'rgb(174, 235, 199)', scssVar: '$sg-success-100' },
        { name: 'sg-success-200', hex: '#8de3b0', rgb: 'rgb(141, 227, 176)', scssVar: '$sg-success-200' },
        { name: 'sg-success-300', hex: '#5bd68d', rgb: 'rgb(91, 214, 141)', scssVar: '$sg-success-300' },
        { name: 'sg-success-400', hex: '#3ace76', rgb: 'rgb(58, 206, 118)', scssVar: '$sg-success-400', isBase: true },
        { name: 'sg-success-500', hex: '#299053', rgb: 'rgb(41, 144, 83)', scssVar: '$sg-success-500' },
        { name: 'sg-success-600', hex: '#237e48', rgb: 'rgb(35, 126, 72)', scssVar: '$sg-success-600' }
      ]
    },
    {
      title: 'Warning',
      swatches: [
        { name: 'sg-warning-50', hex: '#fff5ea', rgb: 'rgb(255, 245, 234)', scssVar: '$sg-warning-50' },
        { name: 'sg-warning-100', hex: '#ffd4a8', rgb: 'rgb(255, 212, 168)', scssVar: '$sg-warning-100' },
        { name: 'sg-warning-200', hex: '#ffc285', rgb: 'rgb(255, 194, 133)', scssVar: '$sg-warning-200' },
        { name: 'sg-warning-300', hex: '#ffa850', rgb: 'rgb(255, 168, 80)', scssVar: '$sg-warning-300' },
        { name: 'sg-warning-400', hex: '#ff962c', rgb: 'rgb(255, 150, 44)', scssVar: '$sg-warning-400', isBase: true },
        { name: 'sg-warning-500', hex: '#b3691f', rgb: 'rgb(179, 105, 31)', scssVar: '$sg-warning-500' },
        { name: 'sg-warning-600', hex: '#9c5c1b', rgb: 'rgb(156, 92, 27)', scssVar: '$sg-warning-600' }
      ]
    },
    {
      title: 'Error',
      swatches: [
        { name: 'sg-error-50', hex: '#ffecec', rgb: 'rgb(255, 236, 236)', scssVar: '$sg-error-50' },
        { name: 'sg-error-100', hex: '#feb0b0', rgb: 'rgb(254, 176, 176)', scssVar: '$sg-error-100' },
        { name: 'sg-error-200', hex: '#fd8f8f', rgb: 'rgb(253, 143, 143)', scssVar: '$sg-error-200' },
        { name: 'sg-error-300', hex: '#fd5f5f', rgb: 'rgb(253, 95, 95)', scssVar: '$sg-error-300' },
        { name: 'sg-error-400', hex: '#fc3e3e', rgb: 'rgb(252, 62, 62)', scssVar: '$sg-error-400', isBase: true },
        { name: 'sg-error-500', hex: '#b02b2b', rgb: 'rgb(176, 43, 43)', scssVar: '$sg-error-500' },
        { name: 'sg-error-600', hex: '#9a2626', rgb: 'rgb(154, 38, 38)', scssVar: '$sg-error-600' }
      ]
    },
    {
      title: 'Neutral',
      swatches: [
        { name: 'sg-neutral-50', hex: '#fafafa', rgb: 'rgb(250, 250, 250)', scssVar: '$sg-neutral-50' },
        { name: 'sg-neutral-100', hex: '#f5f7fa', rgb: 'rgb(245, 247, 250)', scssVar: '$sg-neutral-100' },
        { name: 'sg-neutral-200', hex: '#f1f1f1', rgb: 'rgb(241, 241, 241)', scssVar: '$sg-neutral-200' }
      ]
    },
    {
      title: 'AI',
      swatches: [
        { name: 'sg-ai-50', hex: '#e5f6ff', rgb: 'rgb(229, 246, 255)', scssVar: '$sg-ai-50' },
        { name: 'sg-ai-100', hex: '#c9edff', rgb: 'rgb(201, 237, 255)', scssVar: '$sg-ai-100' },
        { name: 'sg-ai-500', hex: '#00aaff', rgb: 'rgb(0, 170, 255)', scssVar: '$sg-ai-500', isBase: true }
      ]
    },
    {
      title: 'White',
      swatches: [
        { name: 'sg-white-base', hex: '#ffffff', rgb: 'rgb(255, 255, 255)', scssVar: '$sg-white-base', isBase: true }
      ]
    },
    {
      title: 'Black',
      swatches: [
        { name: 'sg-black-base', hex: '#000000', rgb: 'rgb(0, 0, 0)', scssVar: '$sg-black-base', isBase: true }
      ]
    },
    {
      title: 'IA Gradiente',
      swatches: [
        {
          name: '$sg-ia-gradient',
          hex: 'linear-gradient(19.84deg, #0061fe → #00aaff)',
          rgb: 'primary-500 → ai-500',
          scssVar: '$sg-ia-gradient',
          isBase: true,
          isGradient: true
        }
      ]
    }
  ];

  // ─── Buttons ───
  readonly buttonTypes = ['primary', 'secundary', 'white'] as const;
  readonly buttonSizes = ['large', 'medium', 'small'] as const;

  // ─── Design Tokens Reference ───
  readonly tokenGroups: { title: string; tokens: TokenRow[] }[] = [
    {
      title: 'Primary Scale (Blue)',
      tokens: [
        { token: '$sg-primary-50', value: '$sg-primary-50 (#e6efff)', usage: 'Fondo muy claro primary' },
        { token: '$sg-primary-100', value: '$sg-primary-100 (#b0ceff)', usage: 'Fondo claro primary' },
        { token: '$sg-primary-200', value: '$sg-primary-200 (#8ab6ff)', usage: 'Borde claro primary' },
        { token: '$sg-primary-300', value: '$sg-primary-300 (#5495fe)', usage: 'Acento suave primary' },
        { token: '$sg-primary-400', value: '$sg-primary-400 (#3381fe)', usage: 'Acento medio primary' },
        { token: '$sg-primary-500', value: '$sg-primary-500 (#0061fe)', usage: 'Base primary — acciones principales' },
        { token: '$sg-primary-600', value: '$sg-primary-600 (#0058e7)', usage: 'Hover primary' },
        { token: '$sg-primary-700', value: '$sg-primary-700 (#0045b4)', usage: 'Active primary' },
        { token: '$sg-primary-800', value: '$sg-primary-800 (#00358c)', usage: 'Oscuro primary' },
        { token: '$sg-primary-900', value: '$sg-primary-900 (#00296b)', usage: 'Muy oscuro primary' },
      ]
    },
    {
      title: 'Secondary Scale (Orange)',
      tokens: [
        { token: '$sg-secondary-50', value: '$sg-secondary-50 (#fef2eb)', usage: 'Fondo muy claro secondary' },
        { token: '$sg-secondary-100', value: '$sg-secondary-100 (#fcd6c1)', usage: 'Fondo claro secondary / badges' },
        { token: '$sg-secondary-200', value: '$sg-secondary-200 (#fac2a3)', usage: 'Borde claro / disabled' },
        { token: '$sg-secondary-300', value: '$sg-secondary-300 (#f8a679)', usage: 'Acento suave secondary' },
        { token: '$sg-secondary-400', value: '$sg-secondary-400 (#f6955f)', usage: 'Acento medio secondary' },
        { token: '$sg-secondary-500', value: '$sg-secondary-500 (#f47a37)', usage: 'Base secondary — naranja distintivo SocialGest' },
        { token: '$sg-secondary-600', value: '$sg-secondary-600 (#e5641e)', usage: 'Hover secondary' },
        { token: '$sg-secondary-700', value: '$sg-secondary-700 (#c84802)', usage: 'Active secondary' },
        { token: '$sg-secondary-800', value: '$sg-secondary-800 (#b84100)', usage: 'Oscuro secondary' },
        { token: '$sg-secondary-900', value: '$sg-secondary-900 (#9c3700)', usage: 'Muy oscuro secondary' },
      ]
    },
    {
      title: 'Grey Scale',
      tokens: [
        { token: '$sg-grey-50', value: '$sg-grey-50 (#ececec)', usage: 'Bordes, divisores' },
        { token: '$sg-grey-100', value: '$sg-grey-100 (#c3c3c3)', usage: 'Bordes inputs, disabled bg' },
        { token: '$sg-grey-200', value: '$sg-grey-200 (#a6a6a6)', usage: 'Placeholder, iconos' },
        { token: '$sg-grey-300', value: '$sg-grey-300 (#7d7d7d)', usage: 'Texto secundario' },
        { token: '$sg-grey-400', value: '$sg-grey-400 (#646464)', usage: 'Texto labels' },
        { token: '$sg-grey-500', value: '$sg-grey-500 (#3d3d3d)', usage: 'Texto body' },
        { token: '$sg-grey-600', value: '$sg-grey-600 (#383838)', usage: 'Texto oscuro' },
        { token: '$sg-grey-700', value: '$sg-grey-700 (#2b2b2b)', usage: 'Texto muy oscuro' },
        { token: '$sg-grey-800', value: '$sg-grey-800 (#222222)', usage: 'Texto principal, headings' },
        { token: '$sg-grey-900', value: '$sg-grey-900 (#1a1a1a)', usage: 'Texto casi negro' },
      ]
    },
    {
      title: 'Success Scale (Green)',
      tokens: [
        { token: '$sg-success-50', value: '$sg-success-50 (#ebfaf1)', usage: 'Fondo muy claro success' },
        { token: '$sg-success-100', value: '$sg-success-100 (#aeebc7)', usage: 'Fondo claro success' },
        { token: '$sg-success-200', value: '$sg-success-200 (#8de3b0)', usage: 'Borde claro success' },
        { token: '$sg-success-300', value: '$sg-success-300 (#5bd68d)', usage: 'Acento suave success' },
        { token: '$sg-success-400', value: '$sg-success-400 (#3ace76)', usage: 'Base success — estados exitosos' },
        { token: '$sg-success-500', value: '$sg-success-500 (#299053)', usage: 'Hover success' },
        { token: '$sg-success-600', value: '$sg-success-600 (#237e48)', usage: 'Active success' },
      ]
    },
    {
      title: 'Warning Scale (Orange)',
      tokens: [
        { token: '$sg-warning-50', value: '$sg-warning-50 (#fff5ea)', usage: 'Fondo muy claro warning' },
        { token: '$sg-warning-100', value: '$sg-warning-100 (#ffd4a8)', usage: 'Fondo claro warning' },
        { token: '$sg-warning-200', value: '$sg-warning-200 (#ffc285)', usage: 'Borde claro warning' },
        { token: '$sg-warning-300', value: '$sg-warning-300 (#ffa850)', usage: 'Acento suave warning' },
        { token: '$sg-warning-400', value: '$sg-warning-400 (#ff962c)', usage: 'Base warning — advertencia' },
        { token: '$sg-warning-500', value: '$sg-warning-500 (#b3691f)', usage: 'Hover warning' },
        { token: '$sg-warning-600', value: '$sg-warning-600 (#9c5c1b)', usage: 'Active warning' },
      ]
    },
    {
      title: 'Error Scale (Red)',
      tokens: [
        { token: '$sg-error-50', value: '$sg-error-50 (#ffecec)', usage: 'Fondo muy claro error' },
        { token: '$sg-error-100', value: '$sg-error-100 (#feb0b0)', usage: 'Fondo claro error' },
        { token: '$sg-error-200', value: '$sg-error-200 (#fd8f8f)', usage: 'Borde claro error' },
        { token: '$sg-error-300', value: '$sg-error-300 (#fd5f5f)', usage: 'Acento suave error' },
        { token: '$sg-error-400', value: '$sg-error-400 (#fc3e3e)', usage: 'Base error — estados de error' },
        { token: '$sg-error-500', value: '$sg-error-500 (#b02b2b)', usage: 'Hover error' },
        { token: '$sg-error-600', value: '$sg-error-600 (#9a2626)', usage: 'Active error' },
      ]
    },
    {
      title: 'AI Scale (Cyan)',
      tokens: [
        { token: '$sg-ai-50', value: '$sg-ai-50 (#e5f6ff)', usage: 'Hover boton AI' },
        { token: '$sg-ai-100', value: '$sg-ai-100 (#c9edff)', usage: 'Active boton AI' },
        { token: '$sg-ai-500', value: '$sg-ai-500 (#00aaff)', usage: 'Base AI — borde boton AI' },
      ]
    },
    {
      title: 'Neutral & Base',
      tokens: [
        { token: '$sg-neutral-50', value: '$sg-neutral-50 (#fafafa)', usage: 'Fondos sutiles, message boxes' },
        { token: '$sg-neutral-100', value: '$sg-neutral-100 (#f5f7fa)', usage: 'Fondos de seccion' },
        { token: '$sg-neutral-200', value: '$sg-neutral-200 (#f1f1f1)', usage: 'Fondos de cards' },
        { token: '$sg-white-base', value: '$sg-white-base (#ffffff)', usage: 'Fondos blancos, superficies' },
        { token: '$sg-black-base', value: '$sg-black-base (#000000)', usage: 'Negro puro, superficies oscuras' },
      ]
    },
    {
      title: 'Button Tokens',
      tokens: [
        { token: '$sg-button-primary-bg', value: '$sg-primary-500 (#0061fe)', usage: 'Fondo boton primary' },
        { token: '$sg-button-primary-text', value: '$sg-neutral-200 (#f1f1f1)', usage: 'Texto boton primary' },
        { token: '$sg-button-primary-hover', value: '$sg-primary-600 (#0058e7)', usage: 'Hover boton primary' },
        { token: '$sg-button-primary-active', value: '$sg-primary-700 (#0045b4)', usage: 'Active boton primary' },
        { token: '$sg-button-primary-disabled-bg', value: '$sg-primary-200 (#8ab6ff)', usage: 'Disabled boton primary' },
        { token: '$sg-button-secondary-bg', value: '$sg-secondary-500 (#f47a37)', usage: 'Fondo boton secondary (naranja SocialGest)' },
        { token: '$sg-button-secondary-text', value: '$sg-white-base (#ffffff)', usage: 'Texto boton secondary' },
        { token: '$sg-button-secondary-hover', value: '$sg-secondary-600 (#e5641e)', usage: 'Hover boton secondary' },
        { token: '$sg-button-secondary-active', value: '$sg-secondary-700 (#c84802)', usage: 'Active boton secondary' },
        { token: '$sg-button-secondary-disabled-bg', value: '$sg-secondary-200 (#fac2a3)', usage: 'Disabled boton secondary' },
        { token: '$sg-button-white-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo boton white' },
        { token: '$sg-button-white-text', value: '$sg-grey-300 (#7d7d7d)', usage: 'Texto boton white' },
        { token: '$sg-button-white-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde boton white' },
        { token: '$sg-button-white-hover', value: '$sg-neutral-50 (#fafafa)', usage: 'Hover boton white' },
        { token: '$sg-button-white-active', value: '$sg-neutral-200 (#f1f1f1)', usage: 'Active boton white' },
        { token: '$sg-button-white-disabled-text', value: '$sg-grey-100 (#c3c3c3)', usage: 'Disabled texto boton white' },
        { token: '$sg-button-height-large', value: '48px', usage: 'Altura boton large' },
        { token: '$sg-button-height-medium', value: '40px', usage: 'Altura boton medium' },
        { token: '$sg-button-height-small', value: '36px', usage: 'Altura boton small' },
        { token: '$sg-button-font-size-large', value: '18px', usage: 'Font size boton large' },
        { token: '$sg-button-font-size-medium', value: '16px', usage: 'Font size boton medium' },
        { token: '$sg-button-font-size-small', value: '14px', usage: 'Font size boton small' },
        { token: '$sg-button-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-button-font-weight', value: '700', usage: 'Peso de fuente' },
        { token: '$sg-button-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$sg-button-padding', value: '10px 20px', usage: 'Padding' },
        { token: '$sg-button-gap', value: '10px', usage: 'Gap entre icono y texto' },
        { token: '$sg-button-transition', value: 'all 0.2s ease', usage: 'Transicion de estados' },
      ]
    },
    {
      title: 'Toggle / Switch Tokens',
      tokens: [
        { token: '$sg-toggle-off-bg', value: '$sg-grey-100 (#c3c3c3)', usage: 'Fondo toggle apagado' },
        { token: '$sg-toggle-on-bg', value: '$sg-secondary-500 (#f47a37)', usage: 'Fondo toggle encendido (naranja)' },
        { token: '$sg-toggle-thumb-bg', value: '$sg-white-base (#ffffff)', usage: 'Color thumb del toggle' },
        { token: '$sg-toggle-thumb-shadow', value: '0 1px 3px rgba(#000, 0.15)', usage: 'Sombra del thumb' },
        { token: '$sg-toggle-large-width', value: '56px', usage: 'Ancho toggle large' },
        { token: '$sg-toggle-large-height', value: '32px', usage: 'Altura toggle large' },
        { token: '$sg-toggle-large-thumb', value: '24px', usage: 'Tamano thumb toggle large' },
        { token: '$sg-toggle-medium-width', value: '48px', usage: 'Ancho toggle medium' },
        { token: '$sg-toggle-medium-height', value: '28px', usage: 'Altura toggle medium' },
        { token: '$sg-toggle-medium-thumb', value: '20px', usage: 'Tamano thumb toggle medium' },
        { token: '$sg-toggle-small-width', value: '40px', usage: 'Ancho toggle small' },
        { token: '$sg-toggle-small-height', value: '24px', usage: 'Altura toggle small' },
        { token: '$sg-toggle-small-thumb', value: '18px', usage: 'Tamano thumb toggle small' },
      ]
    },
    {
      title: 'Checkbox Tokens',
      tokens: [
        { token: '$sg-checkbox-size', value: '24px', usage: 'Tamano del checkbox' },
        { token: '$sg-checkbox-border-radius', value: '8px', usage: 'Border radius' },
        { token: '$sg-checkbox-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde default' },
        { token: '$sg-checkbox-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo default' },
        { token: '$sg-checkbox-active-bg', value: '$sg-secondary-500 (#f47a37)', usage: 'Fondo activo (naranja)' },
        { token: '$sg-checkbox-active-border', value: '$sg-secondary-500 (#f47a37)', usage: 'Borde activo' },
        { token: '$sg-checkbox-hover-border', value: '$sg-secondary-500 (#f47a37)', usage: 'Borde en hover' },
        { token: '$sg-checkbox-check-color', value: '$sg-white-base (#ffffff)', usage: 'Color del check' },
      ]
    },
    {
      title: 'Radio Button Tokens (PrimeNG)',
      tokens: [
        { token: '$sg-radio-checked-bg', value: '$sg-secondary-500 (#f47a37)', usage: 'Fondo radio seleccionado' },
        { token: '$sg-radio-checked-border', value: '$sg-secondary-500 (#f47a37)', usage: 'Borde radio seleccionado' },
        { token: '$sg-radio-checked-hover-bg', value: '$sg-secondary-600 (#e5641e)', usage: 'Hover radio seleccionado' },
        { token: '$sg-radio-hover-border', value: '$sg-secondary-300 (#f8a679)', usage: 'Hover borde radio' },
        { token: '$sg-radio-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde default' },
        { token: '$sg-radio-icon-color', value: '$sg-white-base (#ffffff)', usage: 'Color icono radio' },
        { token: '$sg-radio-focus-ring', value: 'rgba(244, 122, 55, 0.2)', usage: 'Sombra de focus (naranja)' },
      ]
    },
    {
      title: 'Radio Tab Tokens',
      tokens: [
        { token: '$sg-radio-tab-height', value: '36px', usage: 'Altura radio tab' },
        { token: '$sg-radio-tab-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$sg-radio-tab-font-size', value: '14px', usage: 'Tamano de fuente' },
        { token: '$sg-radio-tab-font-weight', value: '700', usage: 'Peso de fuente' },
        { token: '$sg-radio-tab-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color texto inactivo' },
        { token: '$sg-radio-tab-hover-color', value: '$sg-grey-500 (#3d3d3d)', usage: 'Color texto en hover' },
        { token: '$sg-radio-tab-active-border', value: '$sg-secondary-500 (#f47a37)', usage: 'Borde tab activo (naranja)' },
        { token: '$sg-radio-tab-active-color', value: '$sg-secondary-500 (#f47a37)', usage: 'Color texto activo' },
        { token: '$sg-radio-tab-active-bg', value: '$sg-secondary-50 (#fef2eb)', usage: 'Fondo tab activo (naranja claro)' },
      ]
    },
    {
      title: 'Status Badge Tokens',
      tokens: [
        { token: '$sg-badge-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde del badge' },
        { token: '$sg-badge-border-radius', value: '50px', usage: 'Border radius pill' },
        { token: '$sg-badge-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-badge-font-size', value: '14px', usage: 'Tamano de fuente' },
        { token: '$sg-badge-font-weight', value: '600', usage: 'Peso de fuente' },
        { token: '$sg-badge-text-color', value: '$sg-grey-500 (#3d3d3d)', usage: 'Color texto' },
        { token: '$sg-badge-padding', value: '4px 10px', usage: 'Padding' },
        { token: '$sg-badge-gap', value: '10px', usage: 'Gap entre dot y texto' },
        { token: '$sg-badge-dot-size', value: '10px', usage: 'Tamano dot indicador' },
        { token: '$sg-badge-height-small', value: '30px', usage: 'Altura badge small' },
        { token: '$sg-badge-height-large', value: '36px', usage: 'Altura badge large' },
        { token: '$sg-badge-positiva', value: '$sg-success-400 (#3ace76)', usage: 'Dot positiva (verde)' },
        { token: '$sg-badge-negativa', value: '$sg-error-400 (#fc3e3e)', usage: 'Dot negativa (rojo)' },
        { token: '$sg-badge-neutra', value: '$sg-warning-400 (#ff962c)', usage: 'Dot neutra (naranja)' },
        { token: '$sg-badge-desactivado', value: '$sg-grey-200 (#a6a6a6)', usage: 'Dot desactivado (gris)' },
      ]
    },
    {
      title: 'Chip Tokens',
      tokens: [
        { token: '$sg-chip-height', value: '26px', usage: 'Altura del chip' },
        { token: '$sg-chip-border-radius', value: '23px', usage: 'Border radius' },
        { token: '$sg-chip-padding', value: '6px 11px', usage: 'Padding' },
        { token: '$sg-chip-gap', value: '10px', usage: 'Gap entre dot/icono y texto' },
        { token: '$sg-chip-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-chip-font-size', value: '14px', usage: 'Tamano de fuente' },
        { token: '$sg-chip-font-weight', value: '600', usage: 'Peso de fuente' },
        { token: '$sg-chip-white-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo chip white' },
        { token: '$sg-chip-white-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde chip white' },
        { token: '$sg-chip-white-color', value: '$sg-grey-500 (#3d3d3d)', usage: 'Texto chip white' },
        { token: '$sg-chip-primary-bg', value: '$sg-primary-100 (#b0ceff)', usage: 'Fondo chip primary' },
        { token: '$sg-chip-primary-color', value: '$sg-primary-500 (#0061fe)', usage: 'Texto chip primary' },
        { token: '$sg-chip-secondary-bg', value: '$sg-secondary-100 (#fcd6c1)', usage: 'Fondo chip secondary (naranja)' },
        { token: '$sg-chip-secondary-color', value: '$sg-secondary-500 (#f47a37)', usage: 'Texto chip secondary' },
        { token: '$sg-chip-disabled-bg', value: '$sg-grey-50 (#ececec)', usage: 'Fondo chip disabled' },
        { token: '$sg-chip-disabled-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde chip disabled' },
        { token: '$sg-chip-disabled-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Texto chip disabled' },
        { token: '$sg-chip-add-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde boton agregar' },
        { token: '$sg-chip-add-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color boton agregar' },
        { token: '$sg-chip-add-hover-border', value: '$sg-primary-500 (#0061fe)', usage: 'Hover borde agregar' },
        { token: '$sg-chip-add-hover-color', value: '$sg-primary-500 (#0061fe)', usage: 'Hover color agregar' },
      ]
    },
    {
      title: 'Toaster Tokens',
      tokens: [
        { token: '$sg-toast-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$sg-toast-accent-width', value: '13px', usage: 'Ancho barra lateral de color' },
        { token: '$sg-toast-shadow', value: '0 8px 32px rgba(#000, 0.08)', usage: 'Sombra del toast' },
        { token: '$sg-toast-success-stripe', value: '$sg-success-400 (#3ace76)', usage: 'Barra lateral success' },
        { token: '$sg-toast-success-bg', value: '$sg-success-50 (#ebfaf1)', usage: 'Fondo icono success' },
        { token: '$sg-toast-success-color', value: '$sg-success-400 (#3ace76)', usage: 'Color icono success' },
        { token: '$sg-toast-warning-stripe', value: '$sg-warning-400 (#ff962c)', usage: 'Barra lateral warning' },
        { token: '$sg-toast-warning-bg', value: '$sg-warning-50 (#fff5ea)', usage: 'Fondo icono warning' },
        { token: '$sg-toast-warning-color', value: '$sg-warning-400 (#ff962c)', usage: 'Color icono warning' },
        { token: '$sg-toast-error-stripe', value: '$sg-error-400 (#fc3e3e)', usage: 'Barra lateral error' },
        { token: '$sg-toast-error-bg', value: '$sg-error-50 (#ffecec)', usage: 'Fondo icono error' },
        { token: '$sg-toast-error-color', value: '$sg-error-400 (#fc3e3e)', usage: 'Color icono error' },
        { token: '$sg-toast-info-stripe', value: '$sg-primary-500 (#0061fe)', usage: 'Barra lateral info' },
        { token: '$sg-toast-info-bg', value: '$sg-primary-50 (#e6efff)', usage: 'Fondo icono info' },
        { token: '$sg-toast-info-color', value: '$sg-primary-500 (#0061fe)', usage: 'Color icono info' },
        { token: '$sg-toast-title-color', value: '$sg-grey-800 (#222222)', usage: 'Color titulo' },
        { token: '$sg-toast-message-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color mensaje' },
        { token: '$sg-toast-close-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color boton cerrar' },
      ]
    },
    {
      title: 'Select Segment Tokens',
      tokens: [
        { token: '$sg-select-seg-border-color', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde de los segmentos' },
        { token: '$sg-select-seg-selected-bg', value: '$sg-secondary-50 (#fef2eb)', usage: 'Fondo seleccionado (naranja claro)' },
        { token: '$sg-select-seg-selected-border', value: '$sg-secondary-500 (#f47a37)', usage: 'Borde seleccionado' },
        { token: '$sg-select-seg-hover-border', value: '$sg-secondary-500 (#f47a37)', usage: 'Borde en hover (naranja)' },
        { token: '$sg-select-seg-chip-radius', value: '23px', usage: 'Border radius de chips' },
        { token: '$sg-select-colorpicker-dot-size', value: '25px', usage: 'Tamano dot de color' },
        { token: '$sg-select-user-avatar-size-lg', value: '36px', usage: 'Tamano avatar large' },
      ]
    },
    {
      title: 'Confirm Modal Tokens',
      tokens: [
        { token: '$sg-confirm-modal-border-radius', value: '12px', usage: 'Border radius del modal' },
        { token: '$sg-confirm-modal-max-width', value: '700px', usage: 'Ancho maximo' },
        { token: '$sg-confirm-modal-icon-size', value: '56px', usage: 'Tamano icono circular' },
        { token: '$sg-confirm-general-btn-bg', value: '$sg-primary-500 (#0061fe)', usage: 'Boton variante general (azul)' },
        { token: '$sg-confirm-confirmation-icon-color', value: '$sg-success-400 (#3ace76)', usage: 'Icono variante confirmacion (verde)' },
        { token: '$sg-confirm-alert-btn-bg', value: '$sg-secondary-500 (#f47a37)', usage: 'Boton variante alerta (naranja SocialGest)' },
        { token: '$sg-confirm-error-btn-bg', value: '$sg-error-400 (#fc3e3e)', usage: 'Boton variante error (rojo)' },
      ]
    },
    {
      title: 'Modales Especiales Tokens',
      tokens: [
        { token: '$sg-special-modal-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo del contenedor del modal' },
        { token: '$sg-special-modal-border', value: '1px solid $sg-grey-50', usage: 'Borde del contenedor' },
        { token: '$sg-special-modal-radius', value: '40px', usage: 'Border radius del contenedor' },
        { token: '$sg-special-modal-padding', value: '48px 40px', usage: 'Padding del contenedor' },
        { token: '$sg-special-modal-overlay-bg', value: 'rgba(0, 0, 0, 0.5)', usage: 'Fondo del backdrop' },
        { token: '$sg-special-modal-circle-size', value: '729px', usage: 'Tamano de los circulos decorativos' },
        { token: '$sg-special-modal-circle-primary', value: 'radial-gradient primary-50 → transparent', usage: 'Circulo decorativo (top-right)' },
        { token: '$sg-special-modal-circle-secondary', value: 'radial-gradient secondary-50 → transparent', usage: 'Circulo decorativo (bottom-left)' },
        { token: '$sg-special-modal-icon-circle-size', value: '80px', usage: 'Circulo del icono del header' },
        { token: '$sg-special-modal-icon-circle-bg', value: '$sg-secondary-50 (#fef2eb)', usage: 'Fondo del circulo del icono' },
        { token: '$sg-special-modal-icon-color', value: '$sg-secondary-500 (#f47a37)', usage: 'Color del icono (Lucide)' },
        { token: '$sg-special-modal-icon-size', value: '49px', usage: 'Tamano del icono' },
        { token: '$sg-special-modal-title-size', value: '36px', usage: 'Tamano del titulo (bienvenida)' },
        { token: '$sg-special-modal-title-size-expired', value: '24px', usage: 'Tamano del titulo (plan vencido)' },
        { token: '$sg-special-modal-title-color', value: '$sg-grey-500 (#3d3d3d)', usage: 'Color del titulo' },
        { token: '$sg-special-modal-body-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo del card de contenido' },
        { token: '$sg-special-modal-body-radius', value: '12px', usage: 'Border radius del card' },
        { token: '$sg-special-modal-body-padding', value: '40px 20px', usage: 'Padding del card' },
        { token: '$sg-special-modal-body-text-color', value: '$sg-primary-800 (#00358c)', usage: 'Color del texto del cuerpo' },
        { token: '$sg-special-launch-panel-radius', value: '24px', usage: 'Border radius de los paneles del modal lanzamiento' },
        { token: '$sg-special-launch-badge-bg', value: 'linear-gradient(74.11deg, primary-200 → secondary-200)', usage: 'Fondo del badge "Nuevo lanzamiento"' },
        { token: '$sg-special-launch-hero-title-size', value: '48px', usage: 'Tamano del titulo hero del lanzamiento' },
        { token: '$sg-special-launch-overlay-btn-bg', value: '$sg-secondary-500 (#f47a37)', usage: 'Fondo del boton overlay sobre la imagen' },
        { token: '$sg-special-launch-mia-btn-width', value: '419px', usage: 'Ancho del boton Mia (footer)' },
      ]
    },
    {
      title: 'Code Modal Tokens',
      tokens: [
        { token: '$sg-code-modal-border-radius', value: '24px', usage: 'Border radius' },
        { token: '$sg-code-modal-icon-bg', value: '$sg-warning-50 (#fff5ea)', usage: 'Fondo icono warning' },
        { token: '$sg-code-modal-icon-color', value: '$sg-warning-400 (#ff962c)', usage: 'Color icono warning' },
        { token: '$sg-code-modal-btn-bg', value: '$sg-error-400 (#fc3e3e)', usage: 'Boton confirmacion destructiva' },
        { token: '$sg-code-modal-code-size', value: '40px', usage: 'Tamano codigo verificacion' },
      ]
    },
    {
      title: 'Stepper Tokens',
      tokens: [
        { token: '$sg-stepper-track-height', value: '5px', usage: 'Altura barra progreso' },
        { token: '$sg-stepper-track-bg', value: '$sg-grey-50 (#ececec)', usage: 'Fondo del track' },
        { token: '$sg-stepper-progress-bg', value: '$sg-primary-500 (#0061fe)', usage: 'Color barra progreso (azul)' },
        { token: '$sg-stepper-track-radius', value: '10px', usage: 'Border radius del track' },
        { token: '$sg-stepper-label-font', value: "'DM Sans', sans-serif", usage: 'Familia tipografica label' },
        { token: '$sg-stepper-label-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color texto del paso' },
      ]
    },
    {
      title: 'TextArea Tokens',
      tokens: [
        { token: '$sg-textarea-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde del textarea' },
        { token: '$sg-textarea-border-focus', value: '$sg-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$sg-textarea-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$sg-textarea-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-textarea-font-size', value: '16px', usage: 'Tamano de fuente' },
        { token: '$sg-textarea-label-color', value: '$sg-grey-800 (#222222)', usage: 'Color del label' },
        { token: '$sg-textarea-placeholder-color', value: '$sg-grey-200 (#a6a6a6)', usage: 'Color placeholder' },
        { token: '$sg-textarea-padding', value: '12px 16px', usage: 'Padding' },
        { token: '$sg-textarea-disabled-opacity', value: '0.5', usage: 'Opacidad en disabled' },
      ]
    },
    {
      title: 'Number Input Tokens',
      tokens: [
        { token: '$sg-number-input-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde del contenedor' },
        { token: '$sg-number-input-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$sg-number-input-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$sg-number-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$sg-number-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$sg-number-input-btn-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color botones -/+' },
        { token: '$sg-number-input-btn-hover', value: '$sg-primary-500 (#0061fe)', usage: 'Hover botones -/+' },
        { token: '$sg-number-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-number-input-font-weight', value: '600', usage: 'Peso de fuente' },
      ]
    },
    {
      title: 'Account Counter Tokens',
      tokens: [
        { token: '$sg-counter-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde del badge' },
        { token: '$sg-counter-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$sg-counter-icon-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color icono User' },
        { token: '$sg-counter-text-color', value: '$sg-grey-800 (#222222)', usage: 'Color del numero' },
        { token: '$sg-counter-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-counter-font-weight', value: '600', usage: 'Peso de fuente' },
        { token: '$sg-counter-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$sg-counter-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$sg-counter-height-sm', value: '36px', usage: 'Altura small' },
      ]
    },
    {
      title: 'Select Date Tokens',
      tokens: [
        { token: '$sg-select-date-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde del trigger' },
        { token: '$sg-select-date-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$sg-select-date-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-select-date-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$sg-select-date-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$sg-select-date-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$sg-select-date-dropdown-shadow', value: '0 4px 15px rgba(#000, 0.12)', usage: 'Sombra dropdown' },
        { token: '$sg-select-date-day-selected-bg', value: '$sg-primary-500 (#0061fe)', usage: 'Fondo dia seleccionado' },
        { token: '$sg-select-date-day-other-color', value: '$sg-grey-100 (#c3c3c3)', usage: 'Color dias de otro mes' },
      ]
    },
    {
      title: 'Hour Date Picker Tokens',
      tokens: [
        { token: '$sg-hour-picker-spinner-gap', value: '18px', usage: 'Gap entre spinners' },
        { token: '$sg-hour-picker-chevron-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color flechas' },
        { token: '$sg-hour-picker-chevron-hover', value: '$sg-grey-500 (#3d3d3d)', usage: 'Hover flechas' },
        { token: '$sg-hour-picker-value-color', value: '$sg-grey-800 (#222222)', usage: 'Color valor' },
        { token: '$sg-hour-picker-divider', value: '$sg-grey-50 (#ececec)', usage: 'Color separador' },
      ]
    },
    {
      title: 'Select Tokens',
      tokens: [
        { token: '$sg-select-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$sg-select-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde' },
        { token: '$sg-select-border-focus', value: '$sg-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$sg-select-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$sg-select-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$sg-select-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$sg-select-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$sg-select-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-select-placeholder-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color placeholder' },
        { token: '$sg-select-text-color', value: '$sg-grey-800 (#222222)', usage: 'Color texto seleccionado' },
        { token: '$sg-select-icon-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color iconos' },
        { token: '$sg-select-dropdown-shadow', value: '0 4px 12px rgba(#000, 0.1)', usage: 'Sombra dropdown' },
        { token: '$sg-select-option-hover-bg', value: '$sg-neutral-50 (#fafafa)', usage: 'Hover opcion' },
        { token: '$sg-select-disabled-bg', value: '$sg-grey-100 (#c3c3c3)', usage: 'Fondo disabled' },
        { token: '$sg-select-disabled-text', value: '$sg-grey-200 (#a6a6a6)', usage: 'Texto disabled' },
      ]
    },
    {
      title: 'Search Input Tokens',
      tokens: [
        { token: '$sg-search-input-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$sg-search-input-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde' },
        { token: '$sg-search-input-border-focus', value: '$sg-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$sg-search-input-border-radius', value: '50px', usage: 'Pill shape' },
        { token: '$sg-search-input-height-lg', value: '50px', usage: 'Altura large' },
        { token: '$sg-search-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$sg-search-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$sg-search-input-icon-color', value: '$sg-grey-200 (#a6a6a6)', usage: 'Color icono search' },
        { token: '$sg-search-input-placeholder-color', value: '$sg-grey-200 (#a6a6a6)', usage: 'Color placeholder' },
        { token: '$sg-search-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-search-input-font-weight', value: '500', usage: 'Peso de fuente' },
        { token: '$sg-search-input-disabled-bg', value: '$sg-grey-100 (#c3c3c3)', usage: 'Fondo disabled' },
        { token: '$sg-search-input-disabled-text', value: '$sg-grey-200 (#a6a6a6)', usage: 'Texto disabled' },
      ]
    },
    {
      title: 'Text Input Tokens',
      tokens: [
        { token: '$sg-text-input-border', value: '$sg-grey-100 (#c3c3c3)', usage: 'Borde' },
        { token: '$sg-text-input-border-focus', value: '$sg-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$sg-text-input-border-error', value: '$sg-error-400 (#fc3e3e)', usage: 'Borde en error' },
        { token: '$sg-text-input-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$sg-text-input-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$sg-text-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$sg-text-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$sg-text-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$sg-text-input-label-color', value: '$sg-grey-800 (#222222)', usage: 'Color label' },
        { token: '$sg-text-input-placeholder-color', value: '$sg-grey-200 (#a6a6a6)', usage: 'Color placeholder' },
        { token: '$sg-text-input-icon-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color iconos' },
      ]
    },
    {
      title: 'Card Tokens',
      tokens: [
        { token: '$sg-card-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$sg-card-border', value: '$sg-grey-50 (#ececec)', usage: 'Borde' },
        { token: '$sg-card-border-radius', value: '16px', usage: 'Border radius' },
        { token: '$sg-card-padding-simple', value: '24px', usage: 'Padding variante simple' },
        { token: '$sg-card-padding-large', value: '32px', usage: 'Padding variante large' },
        { token: '$sg-card-title-color', value: '$sg-grey-800 (#222222)', usage: 'Color titulo' },
        { token: '$sg-card-title-size-titled', value: '20px', usage: 'Tamano titulo titled' },
        { token: '$sg-card-title-size-large', value: '24px', usage: 'Tamano titulo large' },
      ]
    },
    {
      title: 'Menu Tokens',
      tokens: [
        { token: '$sg-menu-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$sg-menu-border', value: '$sg-grey-50 (#ececec)', usage: 'Borde' },
        { token: '$sg-menu-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$sg-menu-item-hover', value: '$sg-neutral-50 (#fafafa)', usage: 'Hover items' },
        { token: '$sg-menu-item-selected-bg', value: '$sg-secondary-50 (#fef2eb)', usage: 'Fondo seleccionado (naranja claro)' },
        { token: '$sg-menu-item-color', value: '$sg-grey-500 (#3d3d3d)', usage: 'Color texto items' },
        { token: '$sg-menu-icon-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color iconos' },
        { token: '$sg-menu-radio-active', value: '$sg-secondary-500 (#f47a37)', usage: 'Radio seleccionado' },
        { token: '$sg-menu-checkbox-active', value: '$sg-secondary-500 (#f47a37)', usage: 'Checkbox seleccionado' },
      ]
    },
    {
      title: 'Avatar Tokens',
      tokens: [
        { token: '$sg-avatar-border-radius', value: '50%', usage: 'Forma circular' },
        { token: '$sg-avatar-size-xlarge', value: '50px', usage: 'Tamano extra large' },
        { token: '$sg-avatar-size-large', value: '36px', usage: 'Tamano large' },
        { token: '$sg-avatar-size-medium', value: '26px', usage: 'Tamano medium' },
        { token: '$sg-avatar-size-small', value: '18px', usage: 'Tamano small' },
        { token: '$sg-avatar-badge-size', value: '16px', usage: 'Tamano badge plataforma' },
        { token: '$sg-avatar-badge-border', value: '$sg-white-base (#ffffff)', usage: 'Borde del badge' },
      ]
    },
    {
      title: 'Metricas / Bar Chart Tokens',
      tokens: [
        { token: '$sg-bar-primary-from', value: '$sg-primary-300 (#5495fe)', usage: 'Gradiente inicio primary' },
        { token: '$sg-bar-primary-to', value: '$sg-primary-500 (#0061fe)', usage: 'Gradiente fin primary' },
        { token: '$sg-bar-secondary-from', value: '$sg-secondary-300 (#f8a679)', usage: 'Gradiente inicio secondary (naranja)' },
        { token: '$sg-bar-secondary-to', value: '$sg-secondary-500 (#f47a37)', usage: 'Gradiente fin secondary' },
        { token: '$sg-bar-size-large', value: '78px', usage: 'Ancho barra large' },
        { token: '$sg-bar-size-medium', value: '35px', usage: 'Ancho barra medium' },
        { token: '$sg-bar-size-small', value: '17px', usage: 'Ancho barra small' },
        { token: '$sg-bar-size-xsmall', value: '8px', usage: 'Ancho barra x-small' },
        { token: '$sg-bar-label-color', value: '$sg-grey-300 (#7d7d7d)', usage: 'Color labels' },
        { token: '$sg-sparkline-primary-color', value: '$sg-primary-500 (#0061fe)', usage: 'Color linea primary' },
        { token: '$sg-sparkline-secondary-color', value: '$sg-secondary-500 (#f47a37)', usage: 'Color linea secondary (naranja)' },
        { token: '$sg-donut-stroke-width', value: '30px', usage: 'Grosor segmentos dona' },
        { token: '$sg-trend-up-color', value: '$sg-success-400 (#3ace76)', usage: 'Indicador positivo' },
        { token: '$sg-trend-down-color', value: '$sg-error-400 (#fc3e3e)', usage: 'Indicador negativo' },
      ]
    },
    {
      title: 'Table Tokens',
      tokens: [
        { token: '$sg-table-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$sg-table-border-color', value: '$sg-grey-50 (#ececec)', usage: 'Borde de filas' },
        { token: '$sg-table-header-color', value: '$sg-grey-500 (#3d3d3d)', usage: 'Color texto header' },
        { token: '$sg-table-body-color', value: '$sg-grey-500 (#3d3d3d)', usage: 'Color texto body' },
        { token: '$sg-table-title-color', value: '$sg-grey-800 (#222222)', usage: 'Color titulo' },
        { token: '$sg-table-title-size', value: '24px', usage: 'Tamano titulo' },
        { token: '$sg-table-row-height', value: '44px', usage: 'Altura de filas' },
        { token: '$sg-table-cell-padding', value: '10px 20px', usage: 'Padding de celdas' },
        { token: '$sg-table-hover-bg', value: '$sg-neutral-50 (#fafafa)', usage: 'Fondo hover de fila' },
        { token: '$sg-table-action-icon-color', value: '$sg-secondary-500 (#f47a37)', usage: 'Color icono acciones (naranja)' },
      ]
    },
    {
      title: 'Dashboard UI Tokens',
      tokens: [
        { token: '$sg-code-block-bg', value: '$sg-grey-900 (#1a1a1a)', usage: 'Fondo code blocks' },
        { token: '$sg-code-block-text', value: '$sg-grey-100 (#c3c3c3)', usage: 'Color texto code blocks' },
        { token: '$sg-ui-label-color', value: '$sg-grey-200 (#a6a6a6)', usage: 'Color labels UI del dashboard' },
        { token: '$sg-ui-light-bg', value: '$sg-neutral-200 (#f1f1f1)', usage: 'Fondo inline code' },
        { token: '$sg-swatch-border', value: '$sg-grey-50 (#ececec)', usage: 'Borde color swatches' },
      ]
    },
    {
      title: 'IA Gradiente',
      tokens: [
        { token: '$sg-ia-gradient', value: 'linear-gradient(19.84deg, $sg-primary-500 2.99%, $sg-ai-500 105.98%)', usage: 'Gradiente distintivo para elementos de IA (botones, iconos, headers)' }
      ]
    },
    {
      title: 'Elementos de IA Tokens',
      tokens: [
        { token: '$sg-ia-panel-bg', value: 'linear-gradient(111.48deg, rgba(230,239,255,0.7) 0%, $sg-white-base 50.75%, rgba(254,242,235,0.7) 100%)', usage: 'Fondo del panel "Generando con IA"' },
        { token: '$sg-ia-note-bg', value: 'linear-gradient(161.67deg, rgba(230,239,255,0.33) → rgba(133,177,255,0.33))', usage: 'Fondo de la Nota de IA' },
        { token: '$sg-ia-text-gradient', value: 'linear-gradient(5.79deg, $sg-primary-500 → $sg-ai-500)', usage: 'Gradiente de texto para titulos/subtitulos de IA' },
        { token: '$sg-ia-hero-title-gradient', value: 'linear-gradient(to right, $sg-primary-500 → $sg-primary-900 → $sg-secondary-500)', usage: 'Gradiente de texto tricolor para titulos hero de IA' },
        { token: '$sg-ia-progress-gradient', value: 'linear-gradient(90deg, $sg-primary-500 → $sg-primary-100)', usage: 'Fill de la barra de progreso IA' },
        { token: '$sg-ia-panel-padding', value: '24px 32px', usage: 'Padding del panel IA' },
        { token: '$sg-ia-panel-radius', value: '16px', usage: 'Border radius del panel IA' },
        { token: '$sg-ia-panel-icon-size', value: '48px', usage: 'Tamano del contenedor del icono Sparkles' },
        { token: '$sg-ia-panel-icon-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo del contenedor del icono' },
        { token: '$sg-ia-panel-title-color', value: '$sg-primary-900 (#00296b)', usage: 'Color base del titulo (usado con text gradient)' },
        { token: '$sg-ia-panel-title-font-size', value: '18px', usage: 'Tamano del titulo del panel' },
        { token: '$sg-ia-panel-subtitle-color', value: '$sg-primary-900 (#00296b)', usage: 'Color del subtitulo del panel' },
        { token: '$sg-ia-panel-subtitle-font-size', value: '14px', usage: 'Tamano del subtitulo' },
        { token: '$sg-ia-note-padding', value: '4px 16px', usage: 'Padding de la nota de IA' },
        { token: '$sg-ia-note-radius', value: '10px', usage: 'Border radius de la nota' },
        { token: '$sg-ia-note-text-color', value: '$sg-primary-900 (#00296b)', usage: 'Color del texto de la nota' },
        { token: '$sg-ia-note-text-size', value: '12px', usage: 'Tamano del texto de la nota' },
        { token: '$sg-ia-hero-title-size', value: '48px', usage: 'Tamano de titulo hero IA' },
        { token: '$sg-ia-hero-title-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica del titulo hero' },
        { token: '$sg-ia-hero-title-weight', value: '600 (SemiBold)', usage: 'Peso de fuente del titulo hero' },
        { token: '$sg-ia-hero-title-letter-spacing', value: '-0.96px', usage: 'Tracking del titulo hero' },
      ]
    },
    {
      title: 'Etiquetas de Colores',
      tokens: [
        { token: '$sg-label-height', value: '20px', usage: 'Altura de la etiqueta' },
        { token: '$sg-label-padding', value: '10px 8px', usage: 'Padding interno' },
        { token: '$sg-label-radius', value: '10px', usage: 'Border radius' },
        { token: '$sg-label-gap', value: '6px', usage: 'Gap entre texto e icono de accion' },
        { token: '$sg-label-font-size', value: '10px', usage: 'Tamano de fuente (DM Sans Medium)' },
        { token: '$sg-label-font-weight', value: '500', usage: 'Peso de fuente (Medium)' },
        { token: '$sg-label-letter-spacing', value: '-0.2px', usage: 'Tracking del texto' },
        { token: '$sg-label-azul-bg', value: '#dbeafe', usage: 'Fondo etiqueta azul (default)' },
        { token: '$sg-label-azul-text', value: '#1e40af', usage: 'Texto etiqueta azul' },
        { token: '$sg-label-verde-bg', value: '#d1fae5', usage: 'Fondo etiqueta verde' },
        { token: '$sg-label-verde-text', value: '#065f46', usage: 'Texto etiqueta verde' },
        { token: '$sg-label-amarillo-bg', value: '#fef3c7', usage: 'Fondo etiqueta amarilla' },
        { token: '$sg-label-amarillo-text', value: '#92400e', usage: 'Texto etiqueta amarilla' },
        { token: '$sg-label-rojo-bg', value: '#fee2e2', usage: 'Fondo etiqueta roja' },
        { token: '$sg-label-rojo-text', value: '#991b1b', usage: 'Texto etiqueta roja' },
        { token: '$sg-label-violeta-bg', value: '#ede9fe', usage: 'Fondo etiqueta violeta' },
        { token: '$sg-label-violeta-text', value: '#5b21b6', usage: 'Texto etiqueta violeta' },
        { token: '$sg-label-naranja-bg', value: '#ffedd5', usage: 'Fondo etiqueta naranja' },
        { token: '$sg-label-naranja-text', value: '#9a3412', usage: 'Texto etiqueta naranja' },
        { token: '$sg-label-turquesa-bg', value: '#ccfbf1', usage: 'Fondo etiqueta turquesa' },
        { token: '$sg-label-turquesa-text', value: '#115e59', usage: 'Texto etiqueta turquesa' },
        { token: '$sg-label-gris-bg', value: '#f3f4f6', usage: 'Fondo etiqueta gris' },
        { token: '$sg-label-gris-text', value: '#374151', usage: 'Texto etiqueta gris' },
        { token: '$sg-label-vinotinto-bg', value: '#fce7f3', usage: 'Fondo etiqueta vinotinto' },
        { token: '$sg-label-vinotinto-text', value: '#9f1239', usage: 'Texto etiqueta vinotinto' },
        { token: '$sg-label-olivo-bg', value: '#ecfccb', usage: 'Fondo etiqueta olivo' },
        { token: '$sg-label-olivo-text', value: '#3f6212', usage: 'Texto etiqueta olivo' },
        { token: '$sg-label-ia-bg', value: '$sg-white-base (#ffffff)', usage: 'Fondo etiqueta IA' },
        { token: '$sg-label-ia-border', value: '$sg-primary-500 (#0061fe)', usage: 'Borde etiqueta IA' },
        { token: '$sg-label-ia-text-gradient', value: '$sg-ia-text-gradient', usage: 'Gradiente de texto etiqueta IA' },
        { token: '$sg-label-action-size', value: '14px', usage: 'Tamano circulo de accion' },
        { token: '$sg-label-action-radius', value: '30px', usage: 'Border radius circulo de accion' },
        { token: '$sg-label-action-icon-size', value: '10px', usage: 'Tamano del icono dentro del circulo' },
      ]
    }
  ];

  // ─── Typography ───
  readonly typographyRows: TypographyRow[] = [
    { name: 'Heading 1', family: 'Urbanist', size: '28px', weight: '700 (Bold)', usage: 'Titulos principales de pagina' },
    { name: 'Heading 2', family: 'Urbanist', size: '24px', weight: '700 (Bold)', usage: 'Titulos de secciones y cards' },
    { name: 'Heading 3', family: 'Urbanist', size: '22px', weight: '700 (Bold)', usage: 'Subtitulos dentro de cards' },
    { name: 'Heading 4', family: 'Urbanist', size: '20px', weight: '600 (SemiBold)', usage: 'Titulos de subsecciones' },
    { name: 'Body', family: 'DM Sans', size: '16px', weight: '400 (Regular)', usage: 'Texto general, cuerpo, tablas' },
    { name: 'Body Bold', family: 'DM Sans', size: '16px', weight: '700 (Bold)', usage: 'Texto enfatizado en cuerpo' },
    { name: 'Small', family: 'DM Sans', size: '14px', weight: '400 (Regular)', usage: 'Texto secundario, labels' },
    { name: 'Caption', family: 'DM Sans', size: '12px', weight: '400 (Regular)', usage: 'Textos muy pequenos, helpers' },
    { name: 'Label', family: 'Urbanist', size: '14px', weight: '600 (SemiBold)', usage: 'Labels de formularios, badges' },
    { name: 'Button', family: 'Urbanist', size: '14-18px', weight: '700 (Bold)', usage: 'Texto dentro de botones' },
    { name: 'Nav Link', family: 'Urbanist', size: '15px', weight: '600 (SemiBold)', usage: 'Links del navbar' },
    { name: 'Token Code', family: 'Inter', size: '13px', weight: '500 (Medium)', usage: 'Nombres de variables, codigo' },
  ];

  // ─── Spacing ───
  readonly spacingRows: SpacingRow[] = [
    { name: '2xs', value: '4px', usage: 'Espacio minimo, gaps internos muy pequenos' },
    { name: 'xs', value: '8px', usage: 'Padding interno de badges, gaps pequenos' },
    { name: 'sm', value: '12px', usage: 'Gap entre elementos relacionados (Gestalt: proximidad)' },
    { name: 'md', value: '16px', usage: 'Gap estandar dentro de grupos, padding de swatches' },
    { name: 'lg', value: '24px', usage: 'Margen debajo de titulos, separacion entre subsecciones' },
    { name: 'xl', value: '32px', usage: 'Padding de cards, separacion entre grupos (Gestalt)' },
    { name: '2xl', value: '40px', usage: 'Padding vertical de paginas' },
    { name: '3xl', value: '48px', usage: 'Separacion entre secciones principales' },
  ];

  // ─── Border Radius ───
  readonly radiusRows: RadiusRow[] = [
    { name: 'sm', value: '8px', usage: 'Dropdown options, elementos pequenos' },
    { name: 'md', value: '10px', usage: 'Inputs, selects' },
    { name: 'lg', value: '12px', usage: 'Botones, KPI cards, swatches de color' },
    { name: 'xl', value: '16px', usage: 'Cards principales, secciones' },
    { name: 'pill', value: '50px', usage: 'Search inputs, badges, pills' },
    { name: 'circle', value: '50%', usage: 'Avatares, dots de status' },
  ];

  // ─── Component API Docs ───
  readonly componentDocs: ComponentDoc[] = [
    {
      name: 'Button',
      selector: '<app-button>',
      description: 'Boton reutilizable con variantes, tamanos y soporte para iconos Lucide.',
      inputs: [
        { name: 'variant', type: "'primary' | 'secondary' | 'white' | 'text'", default: "'primary'", description: 'Estilo visual del boton' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Tamano del boton' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el boton' },
        { name: 'leftIcon', type: 'LucideIconData', default: '-', description: 'Icono de Lucide a la izquierda' },
        { name: '(clicked)', type: 'EventEmitter<void>', default: '-', description: 'Evento al hacer click' },
      ],
      codeExample: `<app-button
  variant="primary"
  size="large"
  [leftIcon]="PlusCircleIcon"
  (clicked)="onCreate()">
  Crear reporte
</app-button>`
    },
    {
      name: 'Select',
      selector: '<app-select>',
      description: 'Select personalizado con soporte para Reactive Forms (ControlValueAccessor).',
      inputs: [
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del select' },
        { name: 'label', type: 'string', default: '-', description: 'Texto del label superior' },
        { name: 'placeholder', type: 'string', default: '-', description: 'Placeholder cuando no hay seleccion' },
        { name: '[options]', type: 'SelectOption[]', default: '[]', description: 'Array de opciones { value, label }' },
        { name: '[leftIcon]', type: 'LucideIconData', default: '-', description: 'Icono de Lucide a la izquierda' },
        { name: '[formControl]', type: 'FormControl', default: '-', description: 'Control de Reactive Forms' },
      ],
      codeExample: `<app-select
  size="large"
  label="Plataforma"
  placeholder="Selecciona una opcion"
  [options]="platformOptions"
  [leftIcon]="GlobeIcon"
  (selectionChange)="onPlatformChange($event)">
</app-select>`
    },
    {
      name: 'Search Input',
      selector: '<app-search-input>',
      description: 'Input de busqueda pill-shaped con icono y boton de limpiar.',
      inputs: [
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del input' },
        { name: 'placeholder', type: 'string', default: "'Buscar...'", description: 'Texto placeholder' },
        { name: '(search)', type: 'EventEmitter<string>', default: '-', description: 'Evento al presionar Enter' },
        { name: '(cleared)', type: 'EventEmitter<void>', default: '-', description: 'Evento al limpiar el campo' },
      ],
      codeExample: `<app-search-input
  size="large"
  placeholder="Buscar reportes..."
  (search)="onSearch($event)"
  (cleared)="onClearSearch()">
</app-search-input>`
    },
    {
      name: 'Status Badge',
      selector: '<app-status-badge>',
      description: 'Badge de estado con dot de color y texto.',
      inputs: [
        { name: 'label', type: 'string', default: '-', description: 'Texto del badge' },
        { name: 'variant', type: "'success' | 'warning' | 'error' | 'info' | 'neutral'", default: "'neutral'", description: 'Color del dot indicador' },
        { name: 'showDot', type: 'boolean', default: 'true', description: 'Mostrar/ocultar el dot' },
      ],
      codeExample: `<app-status-badge
  label="Activo"
  variant="success">
</app-status-badge>`
    },
    {
      name: 'Table',
      selector: '<div class="sg-table">',
      description: 'Tabla independiente de SocialGest con columnas, badges de estado e iconos de accion. CSS-only, sin dependencias externas.',
      inputs: [
        { name: '.sg-table__title', type: 'HTML element', default: '-', description: 'Titulo superior de la tabla' },
        { name: '.sg-table__row--header', type: 'CSS class', default: '-', description: 'Fila de encabezado con columnas' },
        { name: '.sg-table__row--body', type: 'CSS class', default: '-', description: 'Fila de datos con hover y click' },
        { name: '.sg-table__badge--{variant}', type: 'CSS class', default: '-', description: 'Badge inline: success, error, warning, neutral, info' },
        { name: '.sg-table__action-btn', type: 'CSS class', default: '-', description: 'Boton de accion con icono Lucide' },
      ],
      codeExample: `<div class="sg-table">
  <h3 class="sg-table__title">Mis ordenes</h3>
  <div class="sg-table__wrapper">
    <div class="sg-table__row sg-table__row--header">
      <div class="sg-table__cell sg-table__cell--header">Orden</div>
      <div class="sg-table__cell sg-table__cell--header">Estatus</div>
    </div>
    <div class="sg-table__row sg-table__row--body">
      <div class="sg-table__cell">121894</div>
      <div class="sg-table__cell">
        <span class="sg-table__badge sg-table__badge--success">
          <span class="sg-table__badge-dot"></span>
          Positiva
        </span>
      </div>
    </div>
  </div>
</div>`
    },
    {
      name: 'AI Button',
      selector: '<button class="ai-btn">',
      description: 'Boton especial con borde cyan y icono AI. Usado para acciones de inteligencia artificial.',
      inputs: [
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el boton' },
      ],
      codeExample: `<button class="ai-btn" (click)="onAiAction()">
  <lucide-icon [img]="SparklesIcon" [size]="20"></lucide-icon>
  <span>AI</span>
</button>`
    },
    {
      name: 'Icon Button',
      selector: '<button class="icon-btn">',
      description: 'Boton cuadrado solo con icono, sin texto. Mismas variantes y tamanos que el boton regular.',
      inputs: [
        { name: 'variant', type: "'primary' | 'secundary' | 'white'", default: "'primary'", description: 'Estilo visual' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del boton' },
      ],
      codeExample: `<button class="sg-sg__icon-btn sg-sg__icon-btn--primary sg-sg__icon-btn--large">
  <lucide-icon [img]="PlusCircleIcon" [size]="20"></lucide-icon>
</button>`
    },
    {
      name: 'Toggle',
      selector: '<div class="toggle">',
      description: 'Switch de encendido/apagado con 3 tamanos. Color secundary cuando esta activo.',
      inputs: [
        { name: 'checked', type: 'boolean', default: 'false', description: 'Estado del toggle' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del toggle' },
        { name: '(changed)', type: 'EventEmitter<boolean>', default: '-', description: 'Evento al cambiar estado' },
      ],
      codeExample: `<div class="toggle toggle--large"
     [class.toggle--on]="isEnabled"
     (click)="isEnabled = !isEnabled">
  <div class="toggle__thumb"></div>
</div>`
    },
    {
      name: 'Checkbox',
      selector: '<div class="checkbox">',
      description: 'Checkbox con borde redondeado (8px). Color secundary cuando esta activo con icono check.',
      inputs: [
        { name: 'checked', type: 'boolean', default: 'false', description: 'Estado del checkbox' },
        { name: '(changed)', type: 'EventEmitter<boolean>', default: '-', description: 'Evento al cambiar estado' },
      ],
      codeExample: `<div class="checkbox"
     [class.checkbox--active]="isChecked"
     (click)="isChecked = !isChecked">
  <lucide-icon *ngIf="isChecked" [img]="CheckIcon" [size]="16"></lucide-icon>
</div>`
    },
    {
      name: 'Radio Button (PrimeNG)',
      selector: '<p-radiobutton>',
      description: 'PrimeNG RadioButton con tema Lara. Soporta sizes (small, large), disabled, filled variant, y reactive forms.',
      inputs: [
        { name: 'name', type: 'string', default: '-', description: 'Nombre del grupo de radio buttons' },
        { name: 'value', type: 'any', default: '-', description: 'Valor de la opcion' },
        { name: 'inputId', type: 'string', default: '-', description: 'ID para asociar con label' },
        { name: 'size', type: "'small' | 'large'", default: 'default', description: 'Tamano del radio button' },
        { name: 'variant', type: "'filled'", default: 'outlined', description: 'Variante visual' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilitar interaccion' },
        { name: '[(ngModel)]', type: 'any', default: '-', description: 'Two-way binding del valor seleccionado' },
      ],
      codeExample: `<p-radiobutton
  name="group1"
  value="option1"
  [(ngModel)]="selectedValue"
  inputId="radio1">
</p-radiobutton>
<label for="radio1">Opcion 1</label>

// Import in component:
import { RadioButton } from 'primeng/radiobutton';

// Add to imports array:
imports: [RadioButton, FormsModule]`
    },
    {
      name: 'Toggle Button',
      selector: '<button class="toggle-btn">',
      description: 'Boton tipo tab/pill que alterna entre activo e inactivo. Puede tener icono.',
      inputs: [
        { name: 'active', type: 'boolean', default: 'false', description: 'Estado activo del boton' },
        { name: '(toggled)', type: 'EventEmitter<boolean>', default: '-', description: 'Evento al alternar' },
      ],
      codeExample: `<button class="toggle-btn"
        [class.toggle-btn--active]="isFilterActive"
        (click)="isFilterActive = !isFilterActive">
  <lucide-icon [img]="FilterIcon" [size]="16"></lucide-icon>
  Filtrar
</button>`
    },
    {
      name: 'Radio Tab',
      selector: '<div class="radio-tab">',
      description: 'Tab tipo pill para seleccion unica entre opciones. Borde y texto secundary cuando activo.',
      inputs: [
        { name: 'active', type: 'boolean', default: 'false', description: 'Si esta seleccionado' },
        { name: '(selected)', type: 'EventEmitter<void>', default: '-', description: 'Evento al seleccionar' },
      ],
      codeExample: `@for (tab of tabs; track tab.id) {
  <div class="radio-tab"
       [class.radio-tab--active]="selectedTab === tab.id"
       (click)="selectedTab = tab.id">
    {{ tab.label }}
  </div>
}`
    },
    {
      name: 'Status Badge',
      selector: '<app-status-badge>',
      description: 'Badge pill con dot de color y texto. 4 variantes de estado × 2 tamanos (small/large).',
      inputs: [
        { name: 'label', type: 'string', default: '-', description: 'Texto del badge' },
        { name: 'variant', type: "'positiva' | 'negativa' | 'neutra' | 'desactivado'", default: "'positiva'", description: 'Variante de estado' },
        { name: 'size', type: "'small' | 'large'", default: "'small'", description: 'Tamano del badge' },
      ],
      codeExample: `<span class="status-badge status-badge--positiva status-badge--small">
  <span class="status-badge__dot"></span>
  Positiva
</span>`
    },
    {
      name: 'Chip',
      selector: '<div class="chip">',
      description: 'Chip/tag pill con icono izquierdo y boton de cerrar. 4 variantes: white, primary, secundary, disabled.',
      inputs: [
        { name: 'label', type: 'string', default: '-', description: 'Texto del chip' },
        { name: 'variant', type: "'white' | 'primary' | 'secundary' | 'disabled'", default: "'white'", description: 'Variante visual' },
        { name: 'removable', type: 'boolean', default: 'true', description: 'Mostrar icono de cerrar' },
        { name: '(removed)', type: 'EventEmitter<void>', default: '-', description: 'Evento al remover el chip' },
      ],
      codeExample: `<div class="chip chip--primary">
  <lucide-icon [img]="CircleCheckIcon" [size]="16"></lucide-icon>
  <span>Angular</span>
  <button (click)="onRemove()">
    <lucide-icon [img]="CircleXIcon" [size]="16"></lucide-icon>
  </button>
</div>`
    },
    {
      name: 'Toaster',
      selector: '<div class="toaster">',
      description: 'Notificacion tipo toast con barra lateral de color, icono, titulo, descripcion y boton de cerrar. 4 variantes.',
      inputs: [
        { name: 'variant', type: "'success' | 'warning' | 'error' | 'info'", default: "'success'", description: 'Tipo de notificacion' },
        { name: 'title', type: 'string', default: '-', description: 'Titulo del toaster (opcional)' },
        { name: 'message', type: 'string', default: '-', description: 'Mensaje descriptivo' },
        { name: '(dismissed)', type: 'EventEmitter<void>', default: '-', description: 'Evento al cerrar el toaster' },
      ],
      codeExample: `<div class="toaster toaster--success">
  <div class="toaster__stripe"></div>
  <div class="toaster__icon-wrap">
    <lucide-icon [img]="CircleCheckBigIcon" [size]="28"></lucide-icon>
  </div>
  <div class="toaster__content">
    <p class="toaster__title">¡Todo bien!</p>
    <p class="toaster__message">Operacion completada.</p>
  </div>
  <button class="toaster__close" (click)="dismiss()">
    <lucide-icon [img]="XIcon" [size]="20"></lucide-icon>
  </button>
</div>`
    },
    {
      name: 'Confirm Modal',
      selector: '<app-confirm-modal>',
      description: 'Modal de confirmacion con 4 variantes: general (azul), confirmation (verde), alert (naranja), error (rojo).',
      inputs: [
        { name: 'variant', type: "'general' | 'confirmation' | 'alert' | 'error'", default: "'general'", description: 'Variante visual' },
        { name: 'title', type: 'string', default: '-', description: 'Titulo del modal' },
        { name: 'message', type: 'string', default: '-', description: 'Mensaje (soporta HTML)' },
        { name: 'visible', type: 'boolean', default: 'false', description: 'Mostrar/ocultar el modal' },
        { name: '(confirmed)', type: 'EventEmitter<void>', default: '-', description: 'Evento al confirmar' },
        { name: '(cancelled)', type: 'EventEmitter<void>', default: '-', description: 'Evento al cancelar' },
      ],
      codeExample: `<app-confirm-modal
  variant="alert"
  title="Alerta"
  message="¿Estas seguro de eliminar <strong>este elemento</strong>?"
  [visible]="showModal"
  (confirmed)="onConfirm()"
  (cancelled)="showModal = false">
</app-confirm-modal>`
    },
    {
      name: 'Confirm Code Modal',
      selector: '<app-confirm-code-modal>',
      description: 'Modal de verificacion de doble factor. Muestra un codigo que el usuario debe copiar y pegar para confirmar.',
      inputs: [
        { name: 'title', type: 'string', default: '-', description: 'Titulo del modal' },
        { name: 'message', type: 'string', default: '-', description: 'Mensaje de instrucciones' },
        { name: 'code', type: 'string', default: '-', description: 'Codigo de verificacion a validar' },
        { name: 'visible', type: 'boolean', default: 'false', description: 'Mostrar/ocultar el modal' },
        { name: '(confirmed)', type: 'EventEmitter<void>', default: '-', description: 'Evento al confirmar (code valido)' },
        { name: '(cancelled)', type: 'EventEmitter<void>', default: '-', description: 'Evento al cancelar' },
      ],
      codeExample: `<app-confirm-code-modal
  title="Eliminar canal"
  message="Para confirmar la eliminacion, escriba el codigo"
  code="ABC-1234"
  [visible]="showCodeModal"
  (confirmed)="onDeleteChannel()"
  (cancelled)="showCodeModal = false">
</app-confirm-code-modal>`
    },
    {
      name: 'Stepper',
      selector: '<app-stepper>',
      description: 'Barra de progreso por pasos. Muestra "Paso X de Y" con barra animada.',
      inputs: [
        { name: 'currentStep', type: 'number', default: '1', description: 'Paso actual' },
        { name: 'totalSteps', type: 'number', default: '3', description: 'Total de pasos' },
      ],
      codeExample: `<app-stepper
  [currentStep]="currentStep"
  [totalSteps]="4">
</app-stepper>

<!-- Avanzar paso -->
<button (click)="currentStep++">Siguiente</button>`
    },
    {
      name: 'TextArea',
      selector: '<app-textarea>',
      description: 'Textarea con label, placeholder, estados y soporte para Reactive Forms (ControlValueAccessor).',
      inputs: [
        { name: 'label', type: 'string', default: '-', description: 'Texto del label superior' },
        { name: 'placeholder', type: 'string', default: '-', description: 'Texto placeholder' },
        { name: 'rows', type: 'number', default: '3', description: 'Cantidad de filas visibles' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el textarea' },
        { name: '[(ngModel)]', type: 'string', default: '-', description: 'Two-way binding del valor' },
        { name: '[formControl]', type: 'FormControl', default: '-', description: 'Control de Reactive Forms' },
      ],
      codeExample: `<app-textarea
  label="Descripcion"
  placeholder="Escribe aqui..."
  [(ngModel)]="description"
  [rows]="4">
</app-textarea>`
    },
    {
      name: 'Number Input',
      selector: '<app-number-input>',
      description: 'Input numerico con 2 variantes: buttons (−/+) y spinner (flechas). 3 tamanos.',
      inputs: [
        { name: 'value', type: 'number', default: '0', description: 'Valor actual' },
        { name: 'variant', type: "'buttons' | 'spinner'", default: "'buttons'", description: 'Variante visual' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano' },
        { name: 'min', type: 'number', default: '-Infinity', description: 'Valor minimo' },
        { name: 'max', type: 'number', default: 'Infinity', description: 'Valor maximo' },
        { name: 'step', type: 'number', default: '1', description: 'Incremento por click' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el input' },
        { name: '(valueChange)', type: 'EventEmitter<number>', default: '-', description: 'Evento al cambiar valor' },
      ],
      codeExample: `<!-- Variante botones -->
<app-number-input
  [(value)]="quantity"
  variant="buttons"
  [min]="0" [max]="100"
  size="large">
</app-number-input>

<!-- Variante spinner -->
<app-number-input
  [(value)]="quantity"
  variant="spinner"
  size="medium">
</app-number-input>`
    },
    {
      name: 'Account Counter',
      selector: '<app-account-counter>',
      description: 'Badge compacto con icono de usuario y contador numerico. 3 tamanos.',
      inputs: [
        { name: 'count', type: 'number', default: '0', description: 'Numero a mostrar' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del badge' },
      ],
      codeExample: `<app-account-counter
  [count]="totalAccounts"
  size="large">
</app-account-counter>`
    },
    {
      name: 'Select Date',
      selector: '<app-select-date>',
      description: 'Date picker con calendario desplegable. 3 tamanos. Label opcional.',
      inputs: [
        { name: 'label', type: 'string', default: '-', description: 'Texto del label' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del trigger' },
        { name: 'value', type: 'string', default: '-', description: 'Fecha seleccionada (YYYY-MM-DD)' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el picker' },
        { name: '(valueChange)', type: 'EventEmitter<string>', default: '-', description: 'Evento al seleccionar fecha' },
      ],
      codeExample: `<app-select-date
  label="Fecha de inicio"
  size="large"
  [(value)]="startDate"
  (valueChange)="onDateChange($event)">
</app-select-date>`
    },
    {
      name: 'Hour & Date Picker',
      selector: '<app-hour-date-picker>',
      description: 'DateTime picker con calendario + spinners de hora (HH:MM AM/PM). 3 tamanos.',
      inputs: [
        { name: 'label', type: 'string', default: '-', description: 'Texto del label' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del trigger' },
        { name: 'value', type: 'Date | null', default: 'null', description: 'Fecha+hora seleccionada' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el picker' },
        { name: '(valueChange)', type: 'EventEmitter<Date>', default: '-', description: 'Evento al cambiar fecha/hora' },
      ],
      codeExample: `<app-hour-date-picker
  label="Fecha de publicacion"
  size="large"
  [(value)]="publishDate"
  (valueChange)="onDateTimeChange($event)">
</app-hour-date-picker>`
    },
    {
      name: 'Text Input',
      selector: '<app-text-input>',
      description: 'Input de texto con label, iconos, estados de error y soporte para Reactive Forms (ControlValueAccessor).',
      inputs: [
        { name: 'type', type: "'text' | 'email' | 'number' | 'date' | 'password'", default: "'text'", description: 'Tipo de input HTML' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del input' },
        { name: 'label', type: 'string', default: '-', description: 'Texto del label superior' },
        { name: 'placeholder', type: 'string', default: '-', description: 'Texto placeholder' },
        { name: '[leftIcon]', type: 'LucideIconData', default: '-', description: 'Icono Lucide a la izquierda' },
        { name: '[rightIcon]', type: 'LucideIconData', default: '-', description: 'Icono Lucide a la derecha (clickeable)' },
        { name: 'errorMessage', type: 'string', default: '-', description: 'Mensaje de error debajo del input' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el input' },
        { name: '(valueChange)', type: 'EventEmitter<string|number>', default: '-', description: 'Evento al cambiar valor' },
      ],
      codeExample: `<app-text-input
  size="large"
  label="Email"
  placeholder="correo@ejemplo.com"
  type="email"
  [leftIcon]="MailIcon"
  (valueChange)="onEmailChange($event)">
</app-text-input>`
    },
    {
      name: 'Card',
      selector: '<app-card>',
      description: 'Contenedor con 3 variantes de tamano y estilo. Usa ng-content para contenido flexible.',
      inputs: [
        { name: 'variant', type: "'simple' | 'titled' | 'large'", default: "'simple'", description: 'Variante de tamano y estilo' },
        { name: 'title', type: 'string', default: '-', description: 'Titulo (solo para titled y large)' },
      ],
      codeExample: `<!-- Card simple -->
<app-card variant="simple">
  <p>Contenido de la card sin titulo.</p>
</app-card>

<!-- Card con titulo -->
<app-card variant="titled" title="Metricas">
  <p>Contenido con titulo de 20px.</p>
</app-card>

<!-- Card grande -->
<app-card variant="large" title="Resumen General">
  <p>Card grande con titulo de 24px y mas padding.</p>
</app-card>`
    },
    {
      name: 'Menu',
      selector: '<app-menu>',
      description: 'Menu desplegable con 4 tipos: iconos, avatar, radio y checkbox. Soporta seleccion simple y multiple.',
      inputs: [
        { name: 'type', type: "'icon' | 'avatar' | 'radio' | 'checkbox'", default: "'icon'", description: 'Tipo de menu' },
        { name: '[items]', type: 'MenuItem[]', default: '[]', description: 'Array de items { id, label, icon?, avatarUrl? }' },
        { name: '[selectedIds]', type: 'string[]', default: '[]', description: 'IDs de items seleccionados' },
        { name: '(itemClick)', type: 'EventEmitter<MenuItem>', default: '-', description: 'Evento al hacer click en un item' },
        { name: '(selectionChange)', type: 'EventEmitter<string[]>', default: '-', description: 'Evento al cambiar seleccion' },
      ],
      codeExample: `<!-- Menu con iconos -->
<app-menu
  type="icon"
  [items]="menuItems"
  (itemClick)="onMenuClick($event)">
</app-menu>

<!-- Menu radio (seleccion unica) -->
<app-menu
  type="radio"
  [items]="frequencyItems"
  [selectedIds]="['weekly']"
  (selectionChange)="onFreqChange($event)">
</app-menu>

<!-- Menu checkbox (seleccion multiple) -->
<app-menu
  type="checkbox"
  [items]="platformItems"
  [selectedIds]="selectedPlatforms"
  (selectionChange)="onPlatformChange($event)">
</app-menu>`
    },
    {
      name: 'Avatar',
      selector: '<app-avatar-social>',
      description: 'Avatar circular reutilizable con 4 tamanos. Se integra en Select User y Menu Avatar. Soporta badge de plataforma opcional.',
      inputs: [
        { name: 'avatarUrl', type: 'string', default: "''", description: 'URL de la imagen de perfil' },
        { name: 'platformIconUrl', type: 'string', default: '-', description: 'URL del icono de plataforma social' },
        { name: 'size', type: "'small' | 'medium' | 'large' | 'xlarge'", default: "'large'", description: 'Tamano del avatar' },
        { name: 'showBadge', type: 'boolean', default: 'true', description: 'Mostrar/ocultar badge de plataforma' },
        { name: 'alt', type: 'string', default: "''", description: 'Texto alt de la imagen' },
      ],
      codeExample: `<!-- Avatar Large con badge Instagram -->
<app-avatar-social
  size="large"
  avatarUrl="images/avatar.jpg"
  platformIconUrl="images/instagram-icon.svg"
  alt="Dana Paola">
</app-avatar-social>

<!-- Avatar sin badge -->
<app-avatar-social
  size="xlarge"
  avatarUrl="images/avatar.jpg"
  [showBadge]="false">
</app-avatar-social>`
    },
  ];

  // ─── Icon examples ───
  readonly iconExamples = [
    'Plus', 'PlusCircle', 'Bell', 'CircleHelp', 'ChevronDown',
    'User', 'Search', 'Trash2', 'Edit', 'X', 'Check',
    'ArrowUp', 'ArrowDown', 'TrendingUp', 'TrendingDown',
    'Eye', 'Download', 'Upload', 'Filter', 'Settings'
  ];

  // ─── Select Segments tabs ───
  readonly selectTabs = [
    { id: 'segment', label: 'Select Segment' },
    { id: 'user', label: 'Select User' },
    { id: 'segment-img', label: 'Select con Imagen' },
    { id: 'colorpicker', label: 'Select Colorpicker' },
    { id: 'chips', label: 'Select con Chips' },
  ];
  activeSelectTab = 'segment';

  // ─── Select Segments demo data ───
  readonly selectUserOptions: SelectUserOption[] = [
    { id: 'u1', name: 'Dana Paola Cuatro', avatarUrl: 'images/avatar-demo.png', platformIconUrl: 'images/instagram-icon.svg' },
    { id: 'u2', name: 'Maria Lopez', avatarUrl: 'images/avatar-demo.png', platformIconUrl: 'images/facebook-icon.svg' },
    { id: 'u3', name: 'Carlos Ruiz', avatarUrl: 'images/avatar-demo.png', platformIconUrl: 'images/instagram-icon.svg' },
  ];
  selectUserSelectedId: string | null = null;

  readonly selectSegmentOptions: SelectSegmentOption[] = [
    { id: 's1', title: 'Authenticator App', description: 'Use an authenticator app to generate a one-time codes' },
    { id: 's2', title: 'SMS Verification', description: 'Receive a code via text message to verify your identity', recommended: true },
    { id: 's3', title: 'Email Verification', description: 'Receive a verification link to your email address' },
  ];
  selectSegmentSelectedId: string | null = null;

  readonly selectSegmentImgOptions: SelectSegmentImgOption[] = [
    { id: 'si1', title: 'Authenticator App', description: 'Use an authenticator app to generate a one-time codes', date: '11 jul 2025 - 09:00 PM' },
    { id: 'si2', title: 'Security Key', description: 'Use a physical security key for two-factor authentication', date: '15 jul 2025 - 02:30 PM' },
  ];
  selectSegImgSelectedId: string | null = null;

  readonly selectColorpickerOptions: SelectColorpickerOption[] = [
    { id: 'c1', name: 'Lista ciclica 1', color: '#3ecc80' },
    { id: 'c2', name: 'Lista ciclica 2', color: '#0061fe' },
    { id: 'c3', name: 'Lista ciclica 3', color: '#f4b137' },
  ];
  selectColorSelectedId: string | null = null;

  readonly selectChipsOptions: SelectSegmentChipsOption[] = [
    { id: 'ch1', name: 'Dana Paola Cuatro', chips: [{ label: 'Chips', removable: false }] },
    { id: 'ch2', name: 'Maria Lopez', chips: [{ label: 'Admin', removable: true }] },
    { id: 'ch3', name: 'Carlos Ruiz', chips: [{ label: 'Editor', removable: true }] },
  ];
  selectChipsSelectedId: string | null = null;

  // ─── Modals demo state ───
  activeModal: ConfirmModalVariant | null = null;

  readonly modalVariants: { variant: ConfirmModalVariant; label: string; title: string; message: string }[] = [
    { variant: 'general', label: 'General', title: '¿Estas seguro?', message: 'Se refrescará la informacion del usuario de SocialGest <strong>Usuario genérico</strong>' },
    { variant: 'confirmation', label: 'Confirmación', title: 'Confirmación', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Aliquam ac rhoncus quam.</strong> Si vis pacem, para bellum. Suspendisse potenti. Curabitur et lorem et sem consequat.' },
    { variant: 'alert', label: 'Alerta', title: 'Alerta', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Aliquam ac rhoncus quam.</strong> Si vis pacem, para bellum. Suspendisse potenti. Curabitur et lorem et sem consequat.' },
    { variant: 'error', label: 'Error', title: 'Error', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Aliquam ac rhoncus quam.</strong> Si vis pacem, para bellum. Suspendisse potenti. Curabitur et lorem et sem consequat.' },
  ];

  openModal(variant: ConfirmModalVariant): void {
    this.activeModal = variant;
  }

  closeModal(): void {
    this.activeModal = null;
  }

  // ─── Confirm Code Modal ───
  codeModalVisible = false;

  // ─── Modales Especiales (Bienvenida, Plan Vencido, Lanzamiento) ───
  openSpecialModalType: 'welcome' | 'expired' | 'launch' | null = null;

  openSpecialModal(type: 'welcome' | 'expired' | 'launch'): void {
    this.openSpecialModalType = type;
  }

  closeSpecialModal(): void {
    this.openSpecialModalType = null;
  }

  // ─── Stepper demo state ───
  stepperCurrent = 1;
  stepperTotal = 4;

  stepperNext(): void {
    if (this.stepperCurrent < this.stepperTotal) {
      this.stepperCurrent++;
    }
  }

  stepperPrev(): void {
    if (this.stepperCurrent > 1) {
      this.stepperCurrent--;
    }
  }

  stepperReset(): void {
    this.stepperCurrent = 1;
  }

  // ─── Form Inputs demo state ───
  textareaValue = '';
  numberValue1 = 10;
  numberValue2 = 5;
  numberValue3 = 0;
  numberSpinnerValue = 10;

  // ─── Date Pickers demo state ───
  selectedDate = '2025-06-01';
  selectedDateTime: Date | null = new Date(2025, 5, 1, 12, 31);

  // ─── Account Counter demo state ───
  counterValue = 1;

  incrementCounter(): void {
    this.counterValue++;
  }

  decrementCounter(): void {
    if (this.counterValue > 0) this.counterValue--;
  }

  // ─── Select demo state ───
  readonly selectOptions: SelectOption[] = [
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js', disabled: true },
  ];

  readonly countryOptions: SelectOption[] = [
    { value: 'es', label: 'España' },
    { value: 'mx', label: 'México' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'cl', label: 'Chile' },
  ];

  readonly roleOptions: SelectOption[] = [
    { value: 'admin', label: 'Administrador' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Viewer' },
  ];

  selectValue: string | number | null = null;
  selectIconValue: string | number | null = null;
  selectDisabledValue: string | number | null = 'react';

  onSelectChange(option: any): void {
    // demo action
  }

  // ─── Search demo state ───
  searchDemo = '';
  searchResults: string[] = [];
  readonly mockItems = ['Dashboard', 'Reportes', 'Métricas', 'Segmentos', 'Alertas', 'Keywords', 'Menciones', 'Configuración', 'Usuarios', 'Canales'];

  onSearchDemo(query: string): void {
    if (!query.trim()) {
      this.searchResults = [];
      return;
    }
    this.searchResults = this.mockItems.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }

  onSearchCleared(): void {
    this.searchResults = [];
  }

  // ─── Text Input demo state ───
  textInputValue = '';

  // ─── Menu demo state ───
  readonly menuIconItems: MenuItem[] = [
    { id: 'm1', label: 'Dashboard', icon: Home },
    { id: 'm2', label: 'Reportes', icon: FileText },
    { id: 'm3', label: 'Métricas', icon: BarChart3 },
    { id: 'm4', label: 'Configuración', icon: Settings },
  ];

  readonly menuAvatarItems: MenuItem[] = [
    { id: 'a1', label: 'Dana Paola', avatarUrl: 'images/avatar-demo.png', platformIconUrl: 'images/instagram-icon.svg' },
    { id: 'a2', label: 'Maria Lopez', avatarUrl: 'images/avatar-demo.png', platformIconUrl: 'images/facebook-icon.svg' },
    { id: 'a3', label: 'Carlos Ruiz', avatarUrl: 'images/avatar-demo.png', platformIconUrl: 'images/instagram-icon.svg' },
  ];

  readonly menuRadioItems: MenuItem[] = [
    { id: 'r1', label: 'Diario' },
    { id: 'r2', label: 'Semanal' },
    { id: 'r3', label: 'Mensual' },
    { id: 'r4', label: 'Anual' },
  ];

  readonly menuCheckboxItems: MenuItem[] = [
    { id: 'c1', label: 'Instagram' },
    { id: 'c2', label: 'Facebook' },
    { id: 'c3', label: 'Twitter / X' },
    { id: 'c4', label: 'TikTok' },
    { id: 'c5', label: 'LinkedIn' },
  ];

  menuIconSelected: string[] = [];
  menuAvatarSelected: string[] = [];
  menuRadioSelected: string[] = ['r2'];
  menuCheckboxSelected: string[] = ['c1', 'c2'];

  // Map SCSS variable names → hex for color swatch resolution
  // All SocialGest tokens use the $sg- prefix
  private readonly colorMap: Record<string, string> = {
    // Primary (blue)
    '$sg-primary-50': '#e6efff', '$sg-primary-100': '#b0ceff', '$sg-primary-200': '#8ab6ff',
    '$sg-primary-300': '#5495fe', '$sg-primary-400': '#3381fe', '$sg-primary-500': '#0061fe',
    '$sg-primary-600': '#0058e7', '$sg-primary-700': '#0045b4', '$sg-primary-800': '#00358c', '$sg-primary-900': '#00296b',
    // Secondary (pink)
    '$sg-secondary-50': '#fef2eb', '$sg-secondary-100': '#fcd6c1', '$sg-secondary-200': '#fac2a3',
    '$sg-secondary-300': '#f8a679', '$sg-secondary-400': '#f6955f', '$sg-secondary-500': '#f47a37',
    '$sg-secondary-600': '#e5641e', '$sg-secondary-700': '#c84802', '$sg-secondary-800': '#b84100', '$sg-secondary-900': '#9c3700',
    // Grey
    '$sg-grey-50': '#ececec', '$sg-grey-100': '#c3c3c3', '$sg-grey-200': '#a6a6a6',
    '$sg-grey-300': '#7d7d7d', '$sg-grey-400': '#646464', '$sg-grey-500': '#3d3d3d',
    '$sg-grey-600': '#383838', '$sg-grey-700': '#2b2b2b', '$sg-grey-800': '#222222', '$sg-grey-900': '#1a1a1a',
    // Success
    '$sg-success-50': '#ebfaf1', '$sg-success-100': '#aeebc7', '$sg-success-200': '#8de3b0',
    '$sg-success-300': '#5bd68d', '$sg-success-400': '#3ace76', '$sg-success-500': '#299053', '$sg-success-600': '#237e48',
    // Warning
    '$sg-warning-50': '#fff5ea', '$sg-warning-100': '#ffd4a8', '$sg-warning-200': '#ffc285',
    '$sg-warning-300': '#ffa850', '$sg-warning-400': '#ff962c', '$sg-warning-500': '#b3691f', '$sg-warning-600': '#9c5c1b',
    // Error
    '$sg-error-50': '#ffecec', '$sg-error-100': '#feb0b0', '$sg-error-200': '#fd8f8f',
    '$sg-error-300': '#fd5f5f', '$sg-error-400': '#fc3e3e', '$sg-error-500': '#b02b2b', '$sg-error-600': '#9a2626',
    // Neutral
    '$sg-neutral-50': '#fafafa', '$sg-neutral-100': '#f5f7fa', '$sg-neutral-200': '#f1f1f1',
    // AI (cyan)
    '$sg-ai-50': '#e5f6ff', '$sg-ai-100': '#c9edff', '$sg-ai-500': '#00aaff',
    // Base
    '$sg-white-base': '#ffffff', '$sg-black-base': '#000000',
  };

  extractHex(value: string): string | null {
    // 1) Direct hex in the string
    const hexMatch = value.match(/#[0-9a-fA-F]{3,8}/);
    if (hexMatch) return hexMatch[0];
    // 2) Resolve $variable-name from colorMap
    const varMatch = value.match(/\$[\w-]+/);
    if (varMatch && this.colorMap[varMatch[0]]) return this.colorMap[varMatch[0]];
    return null;
  }

  resolveTokenDisplay(value: string): string {
    // If value already has hex in parentheses, return as-is
    if (value.includes('#')) return value;
    // If it's a $variable, try to add the hex
    const varMatch = value.match(/\$[\w-]+/);
    if (varMatch && this.colorMap[varMatch[0]]) {
      return `${value} (${this.colorMap[varMatch[0]]})`;
    }
    return value;
  }

  // Returns true when the token value is a raw hex/color not bound to an $sg-* token
  // (useful to flag tokens not linked to the SocialGest palette)
  isStandaloneColor(value: string): boolean {
    if (!value) return false;
    const trimmed = value.trim();
    // If it references an $sg- token, it's linked to the palette
    if (trimmed.startsWith('$sg-')) return false;
    // Standalone hex value: e.g. #f47a37, #fff
    return /^#[0-9a-fA-F]{3,8}$/.test(trimmed);
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.copiedToken = text;
    setTimeout(() => this.copiedToken = null, 1500);
  }
}

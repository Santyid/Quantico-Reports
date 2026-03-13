import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, PlusCircle, Copy, Check, Search, X, Sparkles, CircleCheck, CircleX, CircleCheckBig, TriangleAlert, Info, ChevronDown, User, Globe, Mail, MapPin, Bell, Settings, Home, FileText, BarChart3, Layers, Zap, Trash2, Pencil, EllipsisVertical } from 'lucide-angular';
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
  selector: 'app-advocatespro-dashboard',
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
  templateUrl: './advocatespro-dashboard.component.html',
  styleUrl: './advocatespro-dashboard.component.scss'
})
export class AdvocatesproDashboardComponent {
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
    { id: 'controls', label: 'Controls', keywords: ['toggle', 'checkbox', 'radio', 'switch', 'check', 'tab', 'primeng'] },
    { id: 'badges', label: 'Status Badge', keywords: ['badge', 'status', 'positiva', 'negativa', 'neutra', 'desactivado', 'dot', 'pill'] },
    { id: 'chips', label: 'Chips', keywords: ['chip', 'tag', 'pill', 'removable', 'filtro', 'label'] },
    { id: 'toasters', label: 'Toasters', keywords: ['toast', 'toaster', 'notificacion', 'alert', 'success', 'error', 'warning', 'info', 'snackbar'] },
    { id: 'selects-seg', label: 'Select Segments', keywords: ['select', 'segment', 'user', 'avatar', 'colorpicker', 'image', 'chips', 'hover', 'selected'] },
    { id: 'modals', label: 'Modals', keywords: ['modal', 'dialog', 'confirm', 'confirmacion', 'alerta', 'error', 'general', 'overlay'] },
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
        { name: 'primary-50', hex: '#e6efff', rgb: 'rgb(230, 239, 255)', scssVar: '$primary-50' },
        { name: 'primary-100', hex: '#b0ceff', rgb: 'rgb(176, 206, 255)', scssVar: '$primary-100' },
        { name: 'primary-200', hex: '#8ab6ff', rgb: 'rgb(138, 182, 255)', scssVar: '$primary-200' },
        { name: 'primary-300', hex: '#5495fe', rgb: 'rgb(84, 149, 254)', scssVar: '$primary-300' },
        { name: 'primary-400', hex: '#3381fe', rgb: 'rgb(51, 129, 254)', scssVar: '$primary-400' },
        { name: 'primary-500', hex: '#0061fe', rgb: 'rgb(0, 97, 254)', scssVar: '$primary-500', isBase: true },
        { name: 'primary-600', hex: '#0058e7', rgb: 'rgb(0, 88, 231)', scssVar: '$primary-600' },
        { name: 'primary-700', hex: '#0045b4', rgb: 'rgb(0, 69, 180)', scssVar: '$primary-700' },
        { name: 'primary-800', hex: '#00358c', rgb: 'rgb(0, 53, 140)', scssVar: '$primary-800' },
        { name: 'primary-900', hex: '#00296b', rgb: 'rgb(0, 41, 107)', scssVar: '$primary-900' }
      ]
    },
    {
      title: 'Secundary',
      swatches: [
        { name: 'secundary-50', hex: '#fdedf2', rgb: 'rgb(253, 237, 242)', scssVar: '$secundary-50' },
        { name: 'secundary-100', hex: '#fac7d5', rgb: 'rgb(250, 199, 213)', scssVar: '$secundary-100' },
        { name: 'secundary-200', hex: '#f7acc1', rgb: 'rgb(247, 172, 193)', scssVar: '$secundary-200' },
        { name: 'secundary-300', hex: '#f486a5', rgb: 'rgb(244, 134, 165)', scssVar: '$secundary-300' },
        { name: 'secundary-400', hex: '#f16e94', rgb: 'rgb(241, 110, 148)', scssVar: '$secundary-400' },
        { name: 'secundary-500', hex: '#ee4a79', rgb: 'rgb(238, 74, 121)', scssVar: '$secundary-500', isBase: true },
        { name: 'secundary-600', hex: '#d9436e', rgb: 'rgb(217, 67, 110)', scssVar: '$secundary-600' },
        { name: 'secundary-700', hex: '#a93556', rgb: 'rgb(169, 53, 86)', scssVar: '$secundary-700' },
        { name: 'secundary-800', hex: '#832943', rgb: 'rgb(131, 41, 67)', scssVar: '$secundary-800' },
        { name: 'secundary-900', hex: '#641f33', rgb: 'rgb(100, 31, 51)', scssVar: '$secundary-900' }
      ]
    },
    {
      title: 'Grey',
      swatches: [
        { name: 'grey-50', hex: '#ececec', rgb: 'rgb(236, 236, 236)', scssVar: '$grey-50' },
        { name: 'grey-100', hex: '#c3c3c3', rgb: 'rgb(195, 195, 195)', scssVar: '$grey-100' },
        { name: 'grey-200', hex: '#a6a6a6', rgb: 'rgb(166, 166, 166)', scssVar: '$grey-200' },
        { name: 'grey-300', hex: '#7d7d7d', rgb: 'rgb(125, 125, 125)', scssVar: '$grey-300' },
        { name: 'grey-400', hex: '#646464', rgb: 'rgb(100, 100, 100)', scssVar: '$grey-400' },
        { name: 'grey-500', hex: '#3d3d3d', rgb: 'rgb(61, 61, 61)', scssVar: '$grey-500', isBase: true },
        { name: 'grey-600', hex: '#383838', rgb: 'rgb(56, 56, 56)', scssVar: '$grey-600' },
        { name: 'grey-700', hex: '#2b2b2b', rgb: 'rgb(43, 43, 43)', scssVar: '$grey-700' },
        { name: 'grey-800', hex: '#222222', rgb: 'rgb(34, 34, 34)', scssVar: '$grey-800' },
        { name: 'grey-900', hex: '#1a1a1a', rgb: 'rgb(26, 26, 26)', scssVar: '$grey-900' }
      ]
    },
    {
      title: 'Error',
      swatches: [
        { name: 'error-50', hex: '#ffecec', rgb: 'rgb(255, 236, 236)', scssVar: '$error-50' },
        { name: 'error-100', hex: '#feb0b0', rgb: 'rgb(254, 176, 176)', scssVar: '$error-100' },
        { name: 'error-200', hex: '#fd8f8f', rgb: 'rgb(253, 143, 143)', scssVar: '$error-200' },
        { name: 'error-300', hex: '#fd5f5f', rgb: 'rgb(253, 95, 95)', scssVar: '$error-300' },
        { name: 'error-400', hex: '#fc3e3e', rgb: 'rgb(252, 62, 62)', scssVar: '$error-400', isBase: true },
        { name: 'error-500', hex: '#b02b2b', rgb: 'rgb(176, 43, 43)', scssVar: '$error-500' },
        { name: 'error-600', hex: '#9a2626', rgb: 'rgb(154, 38, 38)', scssVar: '$error-600' }
      ]
    },
    {
      title: 'Warning',
      swatches: [
        { name: 'warning-50', hex: '#fff5ea', rgb: 'rgb(255, 245, 234)', scssVar: '$warning-50' },
        { name: 'warning-100', hex: '#ffd4a8', rgb: 'rgb(255, 212, 168)', scssVar: '$warning-100' },
        { name: 'warning-200', hex: '#ffc285', rgb: 'rgb(255, 194, 133)', scssVar: '$warning-200' },
        { name: 'warning-300', hex: '#ffa850', rgb: 'rgb(255, 168, 80)', scssVar: '$warning-300' },
        { name: 'warning-400', hex: '#ff962c', rgb: 'rgb(255, 150, 44)', scssVar: '$warning-400', isBase: true },
        { name: 'warning-500', hex: '#b3691f', rgb: 'rgb(179, 105, 31)', scssVar: '$warning-500' },
        { name: 'warning-600', hex: '#9c5c1b', rgb: 'rgb(156, 92, 27)', scssVar: '$warning-600' }
      ]
    },
    {
      title: 'Success',
      swatches: [
        { name: 'success-50', hex: '#ebfaf1', rgb: 'rgb(235, 250, 241)', scssVar: '$success-50' },
        { name: 'success-100', hex: '#aeebc7', rgb: 'rgb(174, 235, 199)', scssVar: '$success-100' },
        { name: 'success-200', hex: '#8de3b0', rgb: 'rgb(141, 227, 176)', scssVar: '$success-200' },
        { name: 'success-300', hex: '#5bd68d', rgb: 'rgb(91, 214, 141)', scssVar: '$success-300' },
        { name: 'success-400', hex: '#3ace76', rgb: 'rgb(58, 206, 118)', scssVar: '$success-400', isBase: true },
        { name: 'success-500', hex: '#299053', rgb: 'rgb(41, 144, 83)', scssVar: '$success-500' },
        { name: 'success-600', hex: '#237e48', rgb: 'rgb(35, 126, 72)', scssVar: '$success-600' }
      ]
    },
    {
      title: 'Neutral',
      swatches: [
        { name: 'neutral-50', hex: '#fafafa', rgb: 'rgb(250, 250, 250)', scssVar: '$neutral-50' },
        { name: 'neutral-100', hex: '#f5f7fa', rgb: 'rgb(245, 247, 250)', scssVar: '$neutral-100' },
        { name: 'neutral-200', hex: '#f1f1f1', rgb: 'rgb(241, 241, 241)', scssVar: '$neutral-200' }
      ]
    },
    {
      title: 'White',
      swatches: [
        { name: 'white-base', hex: '#ffffff', rgb: 'rgb(255, 255, 255)', scssVar: '$white-500', isBase: true }
      ]
    },
    {
      title: 'Black',
      swatches: [
        { name: 'black-base', hex: '#000000', rgb: 'rgb(0, 0, 0)', scssVar: '$black-base', isBase: true }
      ]
    }
  ];

  // ─── Buttons ───
  readonly buttonTypes = ['primary', 'secundary', 'white'] as const;
  readonly buttonSizes = ['large', 'medium', 'small'] as const;

  // ─── Design Tokens Reference ───
  readonly tokenGroups: { title: string; tokens: TokenRow[] }[] = [
    {
      title: 'Button Tokens',
      tokens: [
        { token: '$button-primary-bg', value: '$primary-500 (#0061fe)', usage: 'Background del boton primary' },
        { token: '$button-primary-hover', value: '$primary-600 (#0058e7)', usage: 'Hover state primary' },
        { token: '$button-primary-active', value: '$primary-700 (#0045b4)', usage: 'Active/pressed state primary' },
        { token: '$button-secondary-bg', value: '$secundary-500 (#ee4a79)', usage: 'Background del boton secondary (rosa AdvocatesPro)' },
        { token: '$button-border-radius', value: '12px', usage: 'Border radius de todos los botones' },
        { token: '$button-font-family', value: "'Urbanist', sans-serif", usage: 'Fuente de botones' },
        { token: '$button-font-weight', value: '600', usage: 'Peso de fuente en botones' },
      ]
    },
    {
      title: 'Component Tokens',
      tokens: [
        { token: '$select-border-radius', value: '10px', usage: 'Border radius de selects' },
        { token: '$search-input-border-radius', value: '50px', usage: 'Pill shape para search inputs' },
        { token: '$status-badge-border-radius', value: '50px', usage: 'Pill shape para badges' },
        { token: '$kpi-card-border-radius', value: '12px', usage: 'Border radius de KPI cards' },
        { token: '$table-cell-padding', value: '10px 20px', usage: 'Padding interno de celdas' },
        { token: '$table-row-height', value: '44px', usage: 'Altura de filas de tabla' },
      ]
    },
    {
      title: 'Status Colors',
      tokens: [
        { token: '$status-success', value: '$success-400 (#3ace76)', usage: 'Estados positivos, confirmaciones' },
        { token: '$status-warning', value: '$warning-400 (#f4b137)', usage: 'Alertas, precauciones' },
        { token: '$status-error', value: '$error-400 (#fc3e3e)', usage: 'Estados de error, validaciones' },
        { token: '$status-info', value: '$primary-500 (#0061fe)', usage: 'Informacion, estados neutros activos' },
        { token: '$status-neutral', value: '$grey-200 (#a6a6a6)', usage: 'Estados neutros, inactivos' },
      ]
    },
    {
      title: 'Semantic Colors — Error',
      tokens: [
        { token: '$error-50', value: '$error-50 (#ffecec)', usage: 'Background claro para alertas de error' },
        { token: '$error-400', value: '$error-400 (#fc3e3e)', usage: 'Color base de error (botones, iconos)' },
        { token: '$error-500', value: '$error-500 (#b02b2b)', usage: 'Hover de error' },
        { token: '$error-600', value: '$error-600 (#9a2626)', usage: 'Active/pressed de error' },
      ]
    },
    {
      title: 'Semantic Colors — Warning',
      tokens: [
        { token: '$warning-50', value: '$warning-50 (#fff5ea)', usage: 'Background claro para alertas warning' },
        { token: '$warning-400', value: '$warning-400 (#ff962c)', usage: 'Color base de warning' },
        { token: '$warning-icon', value: '$warning-icon (#e8922d)', usage: 'Color de icono warning (code modal)' },
      ]
    },
    {
      title: 'Semantic Colors — Success',
      tokens: [
        { token: '$success-50', value: '$success-50 (#ebfaf1)', usage: 'Background claro para estados exitosos' },
        { token: '$success-400', value: '$success-400 (#3ace76)', usage: 'Color base de success' },
        { token: '$success-500', value: '$success-500 (#299053)', usage: 'Hover de success' },
      ]
    },
    {
      title: 'Semantic Colors — Neutral',
      tokens: [
        { token: '$neutral-50', value: '$neutral-50 (#fafafa)', usage: 'Background sutil (message boxes, hover states)' },
        { token: '$neutral-100', value: '$neutral-100 (#f5f7fa)', usage: 'Background intermedio' },
        { token: '$neutral-200', value: '$neutral-200 (#f1f1f1)', usage: 'Background neutro' },
      ]
    },
    {
      title: 'Confirm Modal Tokens',
      tokens: [
        { token: '$confirm-modal-border-radius', value: '12px', usage: 'Border radius del confirm modal' },
        { token: '$confirm-modal-max-width', value: '700px', usage: 'Ancho maximo del modal' },
        { token: '$confirm-modal-icon-size', value: '56px', usage: 'Tamano del icono circular' },
        { token: '$confirm-general-btn-bg', value: '$primary-500 (#0061fe)', usage: 'Boton variante general (azul)' },
        { token: '$confirm-confirmation-icon-color', value: '$success-400 (#3ace76)', usage: 'Icono variante confirmacion (verde)' },
        { token: '$confirm-alert-btn-bg', value: '$secundary-500 (#ee4a79)', usage: 'Boton variante alerta (rosa)' },
        { token: '$confirm-error-btn-bg', value: '$error-400 (#fc3e3e)', usage: 'Boton variante error (rojo)' },
      ]
    },
    {
      title: 'Code Modal Tokens',
      tokens: [
        { token: '$code-modal-border-radius', value: '24px', usage: 'Border radius del code modal' },
        { token: '$code-modal-icon-bg', value: '$warning-50 (#fff5ea)', usage: 'Background del icono warning' },
        { token: '$code-modal-icon-color', value: '$warning-icon (#e8922d)', usage: 'Color del icono warning' },
        { token: '$code-modal-btn-bg', value: '$error-400 (#fc3e3e)', usage: 'Boton de confirmacion destructiva' },
        { token: '$code-modal-code-size', value: '40px', usage: 'Tamano del codigo de verificacion' },
        { token: '$code-modal-input-width', value: '334px', usage: 'Ancho del input de verificacion' },
      ]
    },
    {
      title: 'Toast Tokens',
      tokens: [
        { token: '$toast-border-radius', value: '10px', usage: 'Border radius del toast' },
        { token: '$toast-shadow', value: '0 8px 32px rgba(...)', usage: 'Sombra del toast' },
        { token: '$toast-accent-width', value: '13px', usage: 'Ancho de la barra lateral de color' },
        { token: '$toast-success-bg', value: '$success-50 (#ebfaf1)', usage: 'Background del icono success' },
        { token: '$toast-error-bg', value: '$error-50 (#ffecec)', usage: 'Background del icono error' },
        { token: '$toast-warning-bg', value: '$warning-50 (#fff5ea)', usage: 'Background del icono warning' },
        { token: '$toast-info-bg', value: '$primary-50 (#e6edff)', usage: 'Background del icono info' },
      ]
    },
    {
      title: 'Stepper Tokens',
      tokens: [
        { token: '$stepper-track-height', value: '5px', usage: 'Altura de la barra de progreso' },
        { token: '$stepper-track-bg', value: '$grey-50 (#ececec)', usage: 'Background del track (gris)' },
        { token: '$stepper-progress-bg', value: '$primary-500 (#0061fe)', usage: 'Color de la barra de progreso (azul)' },
        { token: '$stepper-track-radius', value: '10px', usage: 'Border radius del track' },
        { token: '$stepper-label-font', value: "'DM Sans'", usage: 'Fuente del label "Paso X de Y"' },
        { token: '$stepper-label-color', value: '$grey-300 (#7d7d7d)', usage: 'Color del texto del paso' },
      ]
    },
    {
      title: 'Text Input Tokens',
      tokens: [
        { token: '$text-input-border', value: '$grey-100 (#c3c3c3)', usage: 'Borde del input' },
        { token: '$text-input-border-focus', value: '$primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$text-input-border-error', value: '$status-error (#fc3e3e)', usage: 'Borde en estado de error' },
        { token: '$text-input-border-radius', value: '10px', usage: 'Border radius de inputs' },
        { token: '$text-input-height-large', value: '48px', usage: 'Altura del input large' },
      ]
    },
    {
      title: 'Chip Input Tokens',
      tokens: [
        { token: '$chip-input-border', value: '$grey-100 (#c3c3c3)', usage: 'Borde del contenedor de chips' },
        { token: '$chip-bg', value: '$primary-50 (#e6edff)', usage: 'Background de cada chip' },
        { token: '$chip-text-color', value: '$primary-700 (#0045b4)', usage: 'Color del texto del chip' },
        { token: '$chip-border-radius', value: '6px', usage: 'Border radius de los chips' },
        { token: '$chip-font-family', value: "'DM Sans'", usage: 'Fuente del texto del chip' },
      ]
    },
    {
      title: 'Filter Chip Tokens',
      tokens: [
        { token: '$filter-chip-border', value: '$grey-50 (#ececec)', usage: 'Borde del chip' },
        { token: '$filter-chip-border-radius', value: '8px', usage: 'Border radius del chip' },
        { token: '$filter-chip-hover-bg', value: '$neutral-50 (#fafafa)', usage: 'Background en hover' },
        { token: '$filter-chip-remove-size', value: '18px', usage: 'Tamano del boton de eliminar' },
      ]
    },
    {
      title: 'Select Segment Tokens',
      tokens: [
        { token: '$select-seg-border-color', value: '$grey-100 (#c3c3c3)', usage: 'Borde de los segmentos' },
        { token: '$select-seg-selected-bg', value: '$secundary-50 (#fdedf2)', usage: 'Background cuando esta seleccionado' },
        { token: '$select-seg-hover-border', value: '$secundary-500 (#ee4a79)', usage: 'Borde en hover (rosa)' },
        { token: '$select-seg-img-placeholder', value: '$grey-100 (#c3c3c3)', usage: 'Placeholder de imagen' },
        { token: '$select-seg-chip-radius', value: '23px', usage: 'Border radius de chips en segmentos' },
        { token: '$select-colorpicker-dot-size', value: '25px', usage: 'Tamano del dot de color' },
        { token: '$select-user-avatar-size-lg', value: '36px', usage: 'Tamano de avatar (large)' },
      ]
    },
    {
      title: 'TextArea Tokens',
      tokens: [
        { token: '$textarea-border', value: '$grey-100 (#c3c3c3)', usage: 'Borde del textarea' },
        { token: '$textarea-border-focus', value: '$primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$textarea-border-radius', value: '10px', usage: 'Border radius del textarea' },
        { token: '$textarea-font', value: "'Urbanist', sans-serif", usage: 'Fuente del textarea' },
        { token: '$textarea-font-size', value: '16px', usage: 'Tamano de fuente' },
        { token: '$textarea-label-color', value: '$grey-800 (#222222)', usage: 'Color del label' },
        { token: '$textarea-placeholder-color', value: '$grey-200 (#a6a6a6)', usage: 'Color del placeholder' },
        { token: '$textarea-padding', value: '12px 16px', usage: 'Padding interno' },
        { token: '$textarea-disabled-opacity', value: '0.5', usage: 'Opacidad cuando disabled' },
      ]
    },
    {
      title: 'Number Input Tokens',
      tokens: [
        { token: '$number-input-border', value: '$grey-100 (#c3c3c3)', usage: 'Borde del contenedor' },
        { token: '$number-input-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$number-input-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$number-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$number-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$number-input-btn-color', value: '$grey-300 (#7d7d7d)', usage: 'Color de botones −/+' },
        { token: '$number-input-btn-hover', value: '$primary-500 (#0061fe)', usage: 'Color de botones en hover' },
        { token: '$number-input-font', value: "'Urbanist', sans-serif", usage: 'Fuente del valor' },
        { token: '$number-input-font-weight', value: '600 (SemiBold)', usage: 'Peso del valor' },
      ]
    },
    {
      title: 'Account Counter Tokens',
      tokens: [
        { token: '$counter-border', value: '$grey-100 (#c3c3c3)', usage: 'Borde del badge' },
        { token: '$counter-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$counter-icon-color', value: '$grey-300 (#7d7d7d)', usage: 'Color del icono User' },
        { token: '$counter-text-color', value: '$grey-800 (#222)', usage: 'Color del numero' },
        { token: '$counter-font', value: "'Urbanist', sans-serif", usage: 'Fuente del numero' },
        { token: '$counter-font-weight', value: '600 (SemiBold)', usage: 'Peso del numero' },
        { token: '$counter-height-lg', value: '48px', usage: 'Altura large (80x48)' },
        { token: '$counter-height-md', value: '40px', usage: 'Altura medium (67x40)' },
        { token: '$counter-height-sm', value: '36px', usage: 'Altura small (61x36)' },
      ]
    },
    {
      title: 'Select Date Tokens',
      tokens: [
        { token: '$select-date-border', value: '$grey-100 (#c3c3c3)', usage: 'Borde del trigger' },
        { token: '$select-date-border-radius', value: '12px', usage: 'Border radius del trigger' },
        { token: '$select-date-font', value: "'Urbanist', sans-serif", usage: 'Fuente del valor y calendario' },
        { token: '$select-date-label-size-lg', value: '16px', usage: 'Label font size large' },
        { token: '$select-date-label-size-sm', value: '14px', usage: 'Label font size small/medium' },
        { token: '$select-date-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$select-date-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$select-date-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$select-date-dropdown-shadow', value: '0 4px 15px rgba(0,0,0,0.12)', usage: 'Sombra del dropdown' },
        { token: '$select-date-dropdown-width', value: '267px', usage: 'Ancho del calendario' },
        { token: '$select-date-day-selected-bg', value: '$primary-500 (#0061fe)', usage: 'Background dia seleccionado' },
        { token: '$select-date-day-other-color', value: '$grey-100 (#c3c3c3)', usage: 'Color dias de otro mes' },
      ]
    },
    {
      title: 'Hour Date Picker Tokens',
      tokens: [
        { token: '(hereda Select Date)', value: '-', usage: 'Mismos tokens de trigger y calendario' },
        { token: '$hour-picker-spinner-gap', value: '18px', usage: 'Gap entre columnas de hora' },
        { token: '$hour-picker-chevron-color', value: '$grey-300 (#7d7d7d)', usage: 'Color de flechas up/down' },
        { token: '$hour-picker-chevron-hover', value: '$grey-500 (#3d3d3d)', usage: 'Color flechas en hover' },
        { token: '$hour-picker-value-font', value: "'Urbanist' SemiBold 16px", usage: 'Fuente de valores HH:MM' },
        { token: '$hour-picker-value-color', value: '$grey-800 (#222222)', usage: 'Color del valor HH:MM' },
        { token: '$hour-picker-divider', value: '$grey-50 (#ececec)', usage: 'Color del separador calendario/hora' },
      ]
    },
    {
      title: 'Select Tokens',
      tokens: [
        { token: '$select-bg', value: '$white-500 (#fff)', usage: 'Background del select' },
        { token: '$select-border', value: '$grey-100 (#c3c3c3)', usage: 'Borde del select' },
        { token: '$select-border-focus', value: '$primary-500 (#0061fe)', usage: 'Borde en focus/abierto' },
        { token: '$select-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$select-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$select-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$select-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$select-font', value: "'Urbanist', sans-serif", usage: 'Fuente del select' },
        { token: '$select-placeholder-color', value: '$grey-300 (#7d7d7d)', usage: 'Color del placeholder' },
        { token: '$select-text-color', value: '$grey-800 (#222)', usage: 'Color del texto seleccionado' },
        { token: '$select-icon-color', value: '$grey-300 (#7d7d7d)', usage: 'Color de iconos izq/chevron' },
        { token: '$select-dropdown-shadow', value: '0 4px 12px rgba(0,0,0,0.1)', usage: 'Sombra del dropdown' },
        { token: '$select-option-hover-bg', value: '$neutral-50 (#fafafa)', usage: 'Background opcion en hover' },
      ]
    },
    {
      title: 'Search Input Tokens',
      tokens: [
        { token: '$search-input-bg', value: '$white-500 (#fff)', usage: 'Background del input' },
        { token: '$search-input-border', value: '$grey-100 (#c3c3c3)', usage: 'Borde del input' },
        { token: '$search-input-border-focus', value: '$primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$search-input-border-radius', value: '50px', usage: 'Pill shape' },
        { token: '$search-input-height-lg', value: '50px', usage: 'Altura large' },
        { token: '$search-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$search-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$search-input-icon-color', value: '$grey-200 (#a6a6a6)', usage: 'Color del icono search' },
        { token: '$search-input-placeholder-color', value: '$grey-200 (#a6a6a6)', usage: 'Color del placeholder' },
        { token: '$search-input-font', value: "'Urbanist', sans-serif", usage: 'Fuente del input' },
        { token: '$search-input-font-weight', value: '500 (Medium)', usage: 'Peso de fuente' },
      ]
    },
    {
      title: 'Card Tokens',
      tokens: [
        { token: '$card-simple-radius', value: '10px', usage: 'Border radius de card simple' },
        { token: '$card-simple-padding', value: '30px 25px', usage: 'Padding de card simple' },
        { token: '$card-titled-radius', value: '12px', usage: 'Border radius de card con titulo' },
        { token: '$card-titled-padding', value: '30px', usage: 'Padding de card con titulo' },
        { token: '$card-titled-title-size', value: '20px', usage: 'Font size del titulo' },
        { token: '$card-large-radius', value: '24px', usage: 'Border radius de card grande' },
        { token: '$card-large-padding', value: '40px', usage: 'Padding de card grande' },
        { token: '$card-large-title-size', value: '24px', usage: 'Font size del titulo grande' },
      ]
    },
    {
      title: 'Menu Tokens',
      tokens: [
        { token: '$menu-border-radius', value: '10px', usage: 'Border radius del menu' },
        { token: '$menu-shadow', value: '0 2px 8px rgba(0,0,0,0.1)', usage: 'Sombra del menu' },
        { token: '$menu-item-height', value: '36px', usage: 'Altura de items' },
        { token: '$menu-item-hover-bg', value: '$grey-50 (#ececec)', usage: 'Background en hover' },
        { token: '$menu-item-selected-bg', value: '$secundary-50 (#fdedf2)', usage: 'Background seleccionado (rosa)' },
        { token: '$menu-avatar-size', value: '36px', usage: 'Tamano del avatar' },
        { token: '$menu-radio-size', value: '20px', usage: 'Tamano del radio button' },
        { token: '$menu-checkbox-size', value: '24px', usage: 'Tamano del checkbox' },
        { token: '$menu-checkbox-radius', value: '8px', usage: 'Border radius del checkbox' },
      ]
    },
    {
      title: 'Avatar Tokens',
      tokens: [
        { token: '$avatar-social-size-sm', value: '18px', usage: 'Avatar small' },
        { token: '$avatar-social-size-md', value: '26px', usage: 'Avatar medium' },
        { token: '$avatar-social-size-lg', value: '36px', usage: 'Avatar large' },
        { token: '$avatar-social-size-xl', value: '50px', usage: 'Avatar extra large' },
        { token: '$avatar-social-badge-sm', value: '8px', usage: 'Badge social small' },
        { token: '$avatar-social-badge-md', value: '13px', usage: 'Badge social medium' },
        { token: '$avatar-social-badge-lg', value: '18px', usage: 'Badge social large/xlarge' },
        { token: '$avatar-social-offset-sm', value: '3px', usage: 'Overlap offset small' },
        { token: '$avatar-social-offset-md', value: '6px', usage: 'Overlap offset medium' },
        { token: '$avatar-social-offset-lg', value: '8px', usage: 'Overlap offset large/xlarge' },
        { token: '$avatar-social-badge-border', value: '2px solid $white-500', usage: 'Borde blanco del badge' },
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
      description: 'Tabla independiente de AdvocatesPro con columnas, badges de estado e iconos de accion. CSS-only, sin dependencias externas.',
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
      codeExample: `<button class="style-guide__icon-btn style-guide__icon-btn--primary style-guide__icon-btn--large">
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
      description: 'Modal de confirmacion con 4 variantes: general (azul), confirmation (verde), alert (rosa), error (rojo).',
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
  private readonly colorMap: Record<string, string> = {
    '$primary-50': '#e6edff', '$primary-100': '#b0ceff', '$primary-200': '#8ab6ff',
    '$primary-300': '#5495fe', '$primary-400': '#338ffe', '$primary-500': '#0061fe',
    '$primary-600': '#0058e7', '$primary-700': '#0045b4', '$primary-800': '#00358c', '$primary-900': '#00296b',
    '$secondary-50': '#f5eefc', '$secondary-100': '#e1caf6', '$secondary-200': '#d2b0f2',
    '$secondary-300': '#be8cec', '$secondary-400': '#b176e8', '$secondary-500': '#9e54e2',
    '$secondary-600': '#904cce', '$secondary-700': '#703ca0', '$secondary-800': '#572e7c', '$secondary-900': '#42235f',
    '$grey-50': '#ececec', '$grey-100': '#c3c3c3', '$grey-200': '#a6a6a6',
    '$grey-300': '#7d7d7d', '$grey-400': '#646464', '$grey-500': '#3d3d3d',
    '$grey-600': '#383838', '$grey-700': '#2b2b2b', '$grey-800': '#222222', '$grey-900': '#1a1a1a',
    '$white-500': '#ffffff', '$white-800': '#f1f1f1',
    '$ap-accent-50': '#fdedf2', '$ap-accent-100': '#fac7d5',
    '$ap-accent-500': '#ee4a79', '$ap-accent-600': '#d9426e', '$ap-accent-700': '#a93556',
    '$error-50': '#ffecec', '$error-100': '#feb0b0', '$error-200': '#fd8f8f',
    '$error-300': '#fd5f5f', '$error-400': '#fc3e3e', '$error-500': '#b02b2b', '$error-600': '#9a2626',
    '$warning-50': '#fff5ea', '$warning-100': '#ffd4a8', '$warning-200': '#ffc285',
    '$warning-300': '#ffa850', '$warning-400': '#ff962c', '$warning-500': '#b3691f', '$warning-600': '#9c5c1b',
    '$warning-icon': '#e8922d',
    '$success-50': '#ebfaf1', '$success-100': '#aeebc7', '$success-200': '#8de3b0',
    '$success-300': '#5bd68d', '$success-400': '#3ace76', '$success-500': '#299053', '$success-600': '#237e48',
    '$neutral-50': '#fafafa', '$neutral-100': '#f5f7fa', '$neutral-200': '#f1f1f1',
    '$status-success': '#3ace76', '$status-warning': '#f4b137', '$status-error': '#fc3e3e',
    '$status-info': '#0061fe', '$status-neutral': '#a6a6a6',
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

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.copiedToken = text;
    setTimeout(() => this.copiedToken = null, 1500);
  }
}

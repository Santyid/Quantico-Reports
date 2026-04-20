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
        { name: 'ap-primary-50', hex: '#e6efff', rgb: 'rgb(230, 239, 255)', scssVar: '$ap-primary-50' },
        { name: 'ap-primary-100', hex: '#b0ceff', rgb: 'rgb(176, 206, 255)', scssVar: '$ap-primary-100' },
        { name: 'ap-primary-200', hex: '#8ab6ff', rgb: 'rgb(138, 182, 255)', scssVar: '$ap-primary-200' },
        { name: 'ap-primary-300', hex: '#5495fe', rgb: 'rgb(84, 149, 254)', scssVar: '$ap-primary-300' },
        { name: 'ap-primary-400', hex: '#3381fe', rgb: 'rgb(51, 129, 254)', scssVar: '$ap-primary-400' },
        { name: 'ap-primary-500', hex: '#0061fe', rgb: 'rgb(0, 97, 254)', scssVar: '$ap-primary-500', isBase: true },
        { name: 'ap-primary-600', hex: '#0058e7', rgb: 'rgb(0, 88, 231)', scssVar: '$ap-primary-600' },
        { name: 'ap-primary-700', hex: '#0045b4', rgb: 'rgb(0, 69, 180)', scssVar: '$ap-primary-700' },
        { name: 'ap-primary-800', hex: '#00358c', rgb: 'rgb(0, 53, 140)', scssVar: '$ap-primary-800' },
        { name: 'ap-primary-900', hex: '#00296b', rgb: 'rgb(0, 41, 107)', scssVar: '$ap-primary-900' }
      ]
    },
    {
      title: 'Secondary',
      swatches: [
        { name: 'ap-secondary-50', hex: '#fdedf2', rgb: 'rgb(253, 237, 242)', scssVar: '$ap-secondary-50' },
        { name: 'ap-secondary-100', hex: '#fac7d5', rgb: 'rgb(250, 199, 213)', scssVar: '$ap-secondary-100' },
        { name: 'ap-secondary-200', hex: '#f7acc1', rgb: 'rgb(247, 172, 193)', scssVar: '$ap-secondary-200' },
        { name: 'ap-secondary-300', hex: '#f38fab', rgb: 'rgb(243, 143, 171)', scssVar: '$ap-secondary-300' },
        { name: 'ap-secondary-400', hex: '#f07090', rgb: 'rgb(240, 112, 144)', scssVar: '$ap-secondary-400' },
        { name: 'ap-secondary-500', hex: '#ee4a79', rgb: 'rgb(238, 74, 121)', scssVar: '$ap-secondary-500', isBase: true },
        { name: 'ap-secondary-600', hex: '#d9436e', rgb: 'rgb(217, 67, 110)', scssVar: '$ap-secondary-600' },
        { name: 'ap-secondary-700', hex: '#b93c5e', rgb: 'rgb(185, 60, 94)', scssVar: '$ap-secondary-700' },
        { name: 'ap-secondary-800', hex: '#8a2c48', rgb: 'rgb(138, 44, 72)', scssVar: '$ap-secondary-800' },
        { name: 'ap-secondary-900', hex: '#5e1c30', rgb: 'rgb(94, 28, 48)', scssVar: '$ap-secondary-900' }
      ]
    },
    {
      title: 'Grey',
      swatches: [
        { name: 'ap-grey-50', hex: '#ececec', rgb: 'rgb(236, 236, 236)', scssVar: '$ap-grey-50' },
        { name: 'ap-grey-100', hex: '#c3c3c3', rgb: 'rgb(195, 195, 195)', scssVar: '$ap-grey-100' },
        { name: 'ap-grey-200', hex: '#a6a6a6', rgb: 'rgb(166, 166, 166)', scssVar: '$ap-grey-200' },
        { name: 'ap-grey-300', hex: '#7d7d7d', rgb: 'rgb(125, 125, 125)', scssVar: '$ap-grey-300' },
        { name: 'ap-grey-400', hex: '#646464', rgb: 'rgb(100, 100, 100)', scssVar: '$ap-grey-400' },
        { name: 'ap-grey-500', hex: '#3d3d3d', rgb: 'rgb(61, 61, 61)', scssVar: '$ap-grey-500', isBase: true },
        { name: 'ap-grey-600', hex: '#383838', rgb: 'rgb(56, 56, 56)', scssVar: '$ap-grey-600' },
        { name: 'ap-grey-700', hex: '#2b2b2b', rgb: 'rgb(43, 43, 43)', scssVar: '$ap-grey-700' },
        { name: 'ap-grey-800', hex: '#222222', rgb: 'rgb(34, 34, 34)', scssVar: '$ap-grey-800' },
        { name: 'ap-grey-900', hex: '#1a1a1a', rgb: 'rgb(26, 26, 26)', scssVar: '$ap-grey-900' }
      ]
    },
    {
      title: 'Success',
      swatches: [
        { name: 'ap-success-50', hex: '#ebfaf1', rgb: 'rgb(235, 250, 241)', scssVar: '$ap-success-50' },
        { name: 'ap-success-100', hex: '#aeebc7', rgb: 'rgb(174, 235, 199)', scssVar: '$ap-success-100' },
        { name: 'ap-success-200', hex: '#8de3b0', rgb: 'rgb(141, 227, 176)', scssVar: '$ap-success-200' },
        { name: 'ap-success-300', hex: '#5bd68d', rgb: 'rgb(91, 214, 141)', scssVar: '$ap-success-300' },
        { name: 'ap-success-400', hex: '#3ace76', rgb: 'rgb(58, 206, 118)', scssVar: '$ap-success-400', isBase: true },
        { name: 'ap-success-500', hex: '#299053', rgb: 'rgb(41, 144, 83)', scssVar: '$ap-success-500' },
        { name: 'ap-success-600', hex: '#237e48', rgb: 'rgb(35, 126, 72)', scssVar: '$ap-success-600' }
      ]
    },
    {
      title: 'Warning',
      swatches: [
        { name: 'ap-warning-50', hex: '#fff5ea', rgb: 'rgb(255, 245, 234)', scssVar: '$ap-warning-50' },
        { name: 'ap-warning-100', hex: '#ffd4a8', rgb: 'rgb(255, 212, 168)', scssVar: '$ap-warning-100' },
        { name: 'ap-warning-200', hex: '#ffc285', rgb: 'rgb(255, 194, 133)', scssVar: '$ap-warning-200' },
        { name: 'ap-warning-300', hex: '#ffa850', rgb: 'rgb(255, 168, 80)', scssVar: '$ap-warning-300' },
        { name: 'ap-warning-400', hex: '#ff962c', rgb: 'rgb(255, 150, 44)', scssVar: '$ap-warning-400', isBase: true },
        { name: 'ap-warning-500', hex: '#b3691f', rgb: 'rgb(179, 105, 31)', scssVar: '$ap-warning-500' },
        { name: 'ap-warning-600', hex: '#9c5c1b', rgb: 'rgb(156, 92, 27)', scssVar: '$ap-warning-600' }
      ]
    },
    {
      title: 'Error',
      swatches: [
        { name: 'ap-error-50', hex: '#ffecec', rgb: 'rgb(255, 236, 236)', scssVar: '$ap-error-50' },
        { name: 'ap-error-100', hex: '#feb0b0', rgb: 'rgb(254, 176, 176)', scssVar: '$ap-error-100' },
        { name: 'ap-error-200', hex: '#fd8f8f', rgb: 'rgb(253, 143, 143)', scssVar: '$ap-error-200' },
        { name: 'ap-error-300', hex: '#fd5f5f', rgb: 'rgb(253, 95, 95)', scssVar: '$ap-error-300' },
        { name: 'ap-error-400', hex: '#fc3e3e', rgb: 'rgb(252, 62, 62)', scssVar: '$ap-error-400', isBase: true },
        { name: 'ap-error-500', hex: '#b02b2b', rgb: 'rgb(176, 43, 43)', scssVar: '$ap-error-500' },
        { name: 'ap-error-600', hex: '#9a2626', rgb: 'rgb(154, 38, 38)', scssVar: '$ap-error-600' }
      ]
    },
    {
      title: 'Neutral',
      swatches: [
        { name: 'ap-neutral-50', hex: '#fafafa', rgb: 'rgb(250, 250, 250)', scssVar: '$ap-neutral-50' },
        { name: 'ap-neutral-100', hex: '#f5f7fa', rgb: 'rgb(245, 247, 250)', scssVar: '$ap-neutral-100' },
        { name: 'ap-neutral-200', hex: '#f1f1f1', rgb: 'rgb(241, 241, 241)', scssVar: '$ap-neutral-200' }
      ]
    },
    {
      title: 'AI',
      swatches: [
        { name: 'ap-ai-50', hex: '#e5f6ff', rgb: 'rgb(229, 246, 255)', scssVar: '$ap-ai-50' },
        { name: 'ap-ai-100', hex: '#c9edff', rgb: 'rgb(201, 237, 255)', scssVar: '$ap-ai-100' },
        { name: 'ap-ai-500', hex: '#00aaff', rgb: 'rgb(0, 170, 255)', scssVar: '$ap-ai-500', isBase: true }
      ]
    },
    {
      title: 'White',
      swatches: [
        { name: 'ap-white-base', hex: '#ffffff', rgb: 'rgb(255, 255, 255)', scssVar: '$ap-white-base', isBase: true }
      ]
    },
    {
      title: 'Black',
      swatches: [
        { name: 'ap-black-base', hex: '#000000', rgb: 'rgb(0, 0, 0)', scssVar: '$ap-black-base', isBase: true }
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
        { token: '$ap-primary-50', value: '$ap-primary-50 (#e6efff)', usage: 'Fondo muy claro primary' },
        { token: '$ap-primary-100', value: '$ap-primary-100 (#b0ceff)', usage: 'Fondo claro primary' },
        { token: '$ap-primary-200', value: '$ap-primary-200 (#8ab6ff)', usage: 'Borde claro primary' },
        { token: '$ap-primary-300', value: '$ap-primary-300 (#5495fe)', usage: 'Acento suave primary' },
        { token: '$ap-primary-400', value: '$ap-primary-400 (#3381fe)', usage: 'Acento medio primary' },
        { token: '$ap-primary-500', value: '$ap-primary-500 (#0061fe)', usage: 'Base primary — acciones principales' },
        { token: '$ap-primary-600', value: '$ap-primary-600 (#0058e7)', usage: 'Hover primary' },
        { token: '$ap-primary-700', value: '$ap-primary-700 (#0045b4)', usage: 'Active primary' },
        { token: '$ap-primary-800', value: '$ap-primary-800 (#00358c)', usage: 'Oscuro primary' },
        { token: '$ap-primary-900', value: '$ap-primary-900 (#00296b)', usage: 'Muy oscuro primary' },
      ]
    },
    {
      title: 'Secondary Scale (Pink/Rose)',
      tokens: [
        { token: '$ap-secondary-50', value: '$ap-secondary-50 (#fdedf2)', usage: 'Fondo muy claro secondary' },
        { token: '$ap-secondary-100', value: '$ap-secondary-100 (#fac7d5)', usage: 'Fondo claro secondary / badges' },
        { token: '$ap-secondary-200', value: '$ap-secondary-200 (#f7acc1)', usage: 'Borde claro / disabled' },
        { token: '$ap-secondary-300', value: '$ap-secondary-300 (#f38fab)', usage: 'Acento suave secondary' },
        { token: '$ap-secondary-400', value: '$ap-secondary-400 (#f07090)', usage: 'Acento medio secondary' },
        { token: '$ap-secondary-500', value: '$ap-secondary-500 (#ee4a79)', usage: 'Base secondary — rosa distintivo AdvocatesPro' },
        { token: '$ap-secondary-600', value: '$ap-secondary-600 (#d9436e)', usage: 'Hover secondary' },
        { token: '$ap-secondary-700', value: '$ap-secondary-700 (#b93c5e)', usage: 'Active secondary' },
        { token: '$ap-secondary-800', value: '$ap-secondary-800 (#8a2c48)', usage: 'Oscuro secondary' },
        { token: '$ap-secondary-900', value: '$ap-secondary-900 (#5e1c30)', usage: 'Muy oscuro secondary' },
      ]
    },
    {
      title: 'Grey Scale',
      tokens: [
        { token: '$ap-grey-50', value: '$ap-grey-50 (#ececec)', usage: 'Bordes, divisores' },
        { token: '$ap-grey-100', value: '$ap-grey-100 (#c3c3c3)', usage: 'Bordes inputs, disabled bg' },
        { token: '$ap-grey-200', value: '$ap-grey-200 (#a6a6a6)', usage: 'Placeholder, iconos' },
        { token: '$ap-grey-300', value: '$ap-grey-300 (#7d7d7d)', usage: 'Texto secundario' },
        { token: '$ap-grey-400', value: '$ap-grey-400 (#646464)', usage: 'Texto labels' },
        { token: '$ap-grey-500', value: '$ap-grey-500 (#3d3d3d)', usage: 'Texto body' },
        { token: '$ap-grey-600', value: '$ap-grey-600 (#383838)', usage: 'Texto oscuro' },
        { token: '$ap-grey-700', value: '$ap-grey-700 (#2b2b2b)', usage: 'Texto muy oscuro' },
        { token: '$ap-grey-800', value: '$ap-grey-800 (#222222)', usage: 'Texto principal, headings' },
        { token: '$ap-grey-900', value: '$ap-grey-900 (#1a1a1a)', usage: 'Texto casi negro' },
      ]
    },
    {
      title: 'Success Scale (Green)',
      tokens: [
        { token: '$ap-success-50', value: '$ap-success-50 (#ebfaf1)', usage: 'Fondo muy claro success' },
        { token: '$ap-success-100', value: '$ap-success-100 (#aeebc7)', usage: 'Fondo claro success' },
        { token: '$ap-success-200', value: '$ap-success-200 (#8de3b0)', usage: 'Borde claro success' },
        { token: '$ap-success-300', value: '$ap-success-300 (#5bd68d)', usage: 'Acento suave success' },
        { token: '$ap-success-400', value: '$ap-success-400 (#3ace76)', usage: 'Base success — estados exitosos' },
        { token: '$ap-success-500', value: '$ap-success-500 (#299053)', usage: 'Hover success' },
        { token: '$ap-success-600', value: '$ap-success-600 (#237e48)', usage: 'Active success' },
      ]
    },
    {
      title: 'Warning Scale (Orange)',
      tokens: [
        { token: '$ap-warning-50', value: '$ap-warning-50 (#fff5ea)', usage: 'Fondo muy claro warning' },
        { token: '$ap-warning-100', value: '$ap-warning-100 (#ffd4a8)', usage: 'Fondo claro warning' },
        { token: '$ap-warning-200', value: '$ap-warning-200 (#ffc285)', usage: 'Borde claro warning' },
        { token: '$ap-warning-300', value: '$ap-warning-300 (#ffa850)', usage: 'Acento suave warning' },
        { token: '$ap-warning-400', value: '$ap-warning-400 (#ff962c)', usage: 'Base warning — advertencia' },
        { token: '$ap-warning-500', value: '$ap-warning-500 (#b3691f)', usage: 'Hover warning' },
        { token: '$ap-warning-600', value: '$ap-warning-600 (#9c5c1b)', usage: 'Active warning' },
      ]
    },
    {
      title: 'Error Scale (Red)',
      tokens: [
        { token: '$ap-error-50', value: '$ap-error-50 (#ffecec)', usage: 'Fondo muy claro error' },
        { token: '$ap-error-100', value: '$ap-error-100 (#feb0b0)', usage: 'Fondo claro error' },
        { token: '$ap-error-200', value: '$ap-error-200 (#fd8f8f)', usage: 'Borde claro error' },
        { token: '$ap-error-300', value: '$ap-error-300 (#fd5f5f)', usage: 'Acento suave error' },
        { token: '$ap-error-400', value: '$ap-error-400 (#fc3e3e)', usage: 'Base error — estados de error' },
        { token: '$ap-error-500', value: '$ap-error-500 (#b02b2b)', usage: 'Hover error' },
        { token: '$ap-error-600', value: '$ap-error-600 (#9a2626)', usage: 'Active error' },
      ]
    },
    {
      title: 'AI Scale (Cyan)',
      tokens: [
        { token: '$ap-ai-50', value: '$ap-ai-50 (#e5f6ff)', usage: 'Hover boton AI' },
        { token: '$ap-ai-100', value: '$ap-ai-100 (#c9edff)', usage: 'Active boton AI' },
        { token: '$ap-ai-500', value: '$ap-ai-500 (#00aaff)', usage: 'Base AI — borde boton AI' },
      ]
    },
    {
      title: 'Neutral & Base',
      tokens: [
        { token: '$ap-neutral-50', value: '$ap-neutral-50 (#fafafa)', usage: 'Fondos sutiles, message boxes' },
        { token: '$ap-neutral-100', value: '$ap-neutral-100 (#f5f7fa)', usage: 'Fondos de seccion' },
        { token: '$ap-neutral-200', value: '$ap-neutral-200 (#f1f1f1)', usage: 'Fondos de cards' },
        { token: '$ap-white-base', value: '$ap-white-base (#ffffff)', usage: 'Fondos blancos, superficies' },
        { token: '$ap-black-base', value: '$ap-black-base (#000000)', usage: 'Negro puro, superficies oscuras' },
      ]
    },
    {
      title: 'Button Tokens',
      tokens: [
        { token: '$ap-button-primary-bg', value: '$ap-primary-500 (#0061fe)', usage: 'Fondo boton primary' },
        { token: '$ap-button-primary-text', value: '$ap-neutral-200 (#f1f1f1)', usage: 'Texto boton primary' },
        { token: '$ap-button-primary-hover', value: '$ap-primary-600 (#0058e7)', usage: 'Hover boton primary' },
        { token: '$ap-button-primary-active', value: '$ap-primary-700 (#0045b4)', usage: 'Active boton primary' },
        { token: '$ap-button-primary-disabled-bg', value: '$ap-primary-200 (#8ab6ff)', usage: 'Disabled boton primary' },
        { token: '$ap-button-secondary-bg', value: '$ap-secondary-500 (#ee4a79)', usage: 'Fondo boton secondary (rosa AdvocatesPro)' },
        { token: '$ap-button-secondary-text', value: '$ap-white-base (#ffffff)', usage: 'Texto boton secondary' },
        { token: '$ap-button-secondary-hover', value: '$ap-secondary-600 (#d9436e)', usage: 'Hover boton secondary' },
        { token: '$ap-button-secondary-active', value: '$ap-secondary-700 (#b93c5e)', usage: 'Active boton secondary' },
        { token: '$ap-button-secondary-disabled-bg', value: '$ap-secondary-200 (#f7acc1)', usage: 'Disabled boton secondary' },
        { token: '$ap-button-white-bg', value: '$ap-white-base (#ffffff)', usage: 'Fondo boton white' },
        { token: '$ap-button-white-text', value: '$ap-grey-300 (#7d7d7d)', usage: 'Texto boton white' },
        { token: '$ap-button-white-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde boton white' },
        { token: '$ap-button-white-hover', value: '$ap-neutral-50 (#fafafa)', usage: 'Hover boton white' },
        { token: '$ap-button-white-active', value: '$ap-neutral-200 (#f1f1f1)', usage: 'Active boton white' },
        { token: '$ap-button-white-disabled-text', value: '$ap-grey-100 (#c3c3c3)', usage: 'Disabled texto boton white' },
        { token: '$ap-button-height-large', value: '48px', usage: 'Altura boton large' },
        { token: '$ap-button-height-medium', value: '40px', usage: 'Altura boton medium' },
        { token: '$ap-button-height-small', value: '36px', usage: 'Altura boton small' },
        { token: '$ap-button-font-size-large', value: '18px', usage: 'Font size boton large' },
        { token: '$ap-button-font-size-medium', value: '16px', usage: 'Font size boton medium' },
        { token: '$ap-button-font-size-small', value: '14px', usage: 'Font size boton small' },
        { token: '$ap-button-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-button-font-weight', value: '700', usage: 'Peso de fuente' },
        { token: '$ap-button-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$ap-button-padding', value: '10px 20px', usage: 'Padding' },
        { token: '$ap-button-gap', value: '10px', usage: 'Gap entre icono y texto' },
        { token: '$ap-button-transition', value: 'all 0.2s ease', usage: 'Transicion de estados' },
      ]
    },
    {
      title: 'Toggle / Switch Tokens',
      tokens: [
        { token: '$ap-toggle-off-bg', value: '$ap-grey-100 (#c3c3c3)', usage: 'Fondo toggle apagado' },
        { token: '$ap-toggle-on-bg', value: '$ap-secondary-500 (#ee4a79)', usage: 'Fondo toggle encendido (rosa)' },
        { token: '$ap-toggle-thumb-bg', value: '$ap-white-base (#ffffff)', usage: 'Color thumb del toggle' },
        { token: '$ap-toggle-thumb-shadow', value: '0 1px 3px rgba(#000, 0.15)', usage: 'Sombra del thumb' },
        { token: '$ap-toggle-large-width', value: '56px', usage: 'Ancho toggle large' },
        { token: '$ap-toggle-large-height', value: '32px', usage: 'Altura toggle large' },
        { token: '$ap-toggle-large-thumb', value: '24px', usage: 'Tamano thumb toggle large' },
        { token: '$ap-toggle-medium-width', value: '48px', usage: 'Ancho toggle medium' },
        { token: '$ap-toggle-medium-height', value: '28px', usage: 'Altura toggle medium' },
        { token: '$ap-toggle-medium-thumb', value: '20px', usage: 'Tamano thumb toggle medium' },
        { token: '$ap-toggle-small-width', value: '40px', usage: 'Ancho toggle small' },
        { token: '$ap-toggle-small-height', value: '24px', usage: 'Altura toggle small' },
        { token: '$ap-toggle-small-thumb', value: '18px', usage: 'Tamano thumb toggle small' },
      ]
    },
    {
      title: 'Checkbox Tokens',
      tokens: [
        { token: '$ap-checkbox-size', value: '24px', usage: 'Tamano del checkbox' },
        { token: '$ap-checkbox-border-radius', value: '8px', usage: 'Border radius' },
        { token: '$ap-checkbox-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde default' },
        { token: '$ap-checkbox-bg', value: '$ap-white-base (#ffffff)', usage: 'Fondo default' },
        { token: '$ap-checkbox-active-bg', value: '$ap-secondary-500 (#ee4a79)', usage: 'Fondo activo (rosa)' },
        { token: '$ap-checkbox-active-border', value: '$ap-secondary-500 (#ee4a79)', usage: 'Borde activo' },
        { token: '$ap-checkbox-hover-border', value: '$ap-secondary-500 (#ee4a79)', usage: 'Borde en hover' },
        { token: '$ap-checkbox-check-color', value: '$ap-white-base (#ffffff)', usage: 'Color del check' },
      ]
    },
    {
      title: 'Radio Button Tokens (PrimeNG)',
      tokens: [
        { token: '$ap-radio-checked-bg', value: '$ap-secondary-500 (#ee4a79)', usage: 'Fondo radio seleccionado' },
        { token: '$ap-radio-checked-border', value: '$ap-secondary-500 (#ee4a79)', usage: 'Borde radio seleccionado' },
        { token: '$ap-radio-checked-hover-bg', value: '$ap-secondary-600 (#d9436e)', usage: 'Hover radio seleccionado' },
        { token: '$ap-radio-hover-border', value: '$ap-secondary-300 (#f38fab)', usage: 'Hover borde radio' },
        { token: '$ap-radio-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde default' },
        { token: '$ap-radio-icon-color', value: '$ap-white-base (#ffffff)', usage: 'Color icono radio' },
        { token: '$ap-radio-focus-ring', value: 'rgba(238, 74, 121, 0.2)', usage: 'Sombra de focus (rosa)' },
      ]
    },
    {
      title: 'Radio Tab Tokens',
      tokens: [
        { token: '$ap-radio-tab-height', value: '36px', usage: 'Altura radio tab' },
        { token: '$ap-radio-tab-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$ap-radio-tab-font-size', value: '14px', usage: 'Tamano de fuente' },
        { token: '$ap-radio-tab-font-weight', value: '700', usage: 'Peso de fuente' },
        { token: '$ap-radio-tab-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color texto inactivo' },
        { token: '$ap-radio-tab-hover-color', value: '$ap-grey-500 (#3d3d3d)', usage: 'Color texto en hover' },
        { token: '$ap-radio-tab-active-border', value: '$ap-secondary-500 (#ee4a79)', usage: 'Borde tab activo (rosa)' },
        { token: '$ap-radio-tab-active-color', value: '$ap-secondary-500 (#ee4a79)', usage: 'Color texto activo' },
        { token: '$ap-radio-tab-active-bg', value: '$ap-secondary-50 (#fdedf2)', usage: 'Fondo tab activo (rosa claro)' },
      ]
    },
    {
      title: 'Status Badge Tokens',
      tokens: [
        { token: '$ap-badge-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde del badge' },
        { token: '$ap-badge-border-radius', value: '50px', usage: 'Border radius pill' },
        { token: '$ap-badge-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-badge-font-size', value: '14px', usage: 'Tamano de fuente' },
        { token: '$ap-badge-font-weight', value: '600', usage: 'Peso de fuente' },
        { token: '$ap-badge-text-color', value: '$ap-grey-500 (#3d3d3d)', usage: 'Color texto' },
        { token: '$ap-badge-padding', value: '4px 10px', usage: 'Padding' },
        { token: '$ap-badge-gap', value: '10px', usage: 'Gap entre dot y texto' },
        { token: '$ap-badge-dot-size', value: '10px', usage: 'Tamano dot indicador' },
        { token: '$ap-badge-height-small', value: '30px', usage: 'Altura badge small' },
        { token: '$ap-badge-height-large', value: '36px', usage: 'Altura badge large' },
        { token: '$ap-badge-positiva', value: '$ap-success-400 (#3ace76)', usage: 'Dot positiva (verde)' },
        { token: '$ap-badge-negativa', value: '$ap-error-400 (#fc3e3e)', usage: 'Dot negativa (rojo)' },
        { token: '$ap-badge-neutra', value: '$ap-warning-400 (#ff962c)', usage: 'Dot neutra (naranja)' },
        { token: '$ap-badge-desactivado', value: '$ap-grey-200 (#a6a6a6)', usage: 'Dot desactivado (gris)' },
      ]
    },
    {
      title: 'Chip Tokens',
      tokens: [
        { token: '$ap-chip-height', value: '26px', usage: 'Altura del chip' },
        { token: '$ap-chip-border-radius', value: '23px', usage: 'Border radius' },
        { token: '$ap-chip-padding', value: '6px 11px', usage: 'Padding' },
        { token: '$ap-chip-gap', value: '10px', usage: 'Gap entre dot/icono y texto' },
        { token: '$ap-chip-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-chip-font-size', value: '14px', usage: 'Tamano de fuente' },
        { token: '$ap-chip-font-weight', value: '600', usage: 'Peso de fuente' },
        { token: '$ap-chip-white-bg', value: '$ap-white-base (#ffffff)', usage: 'Fondo chip white' },
        { token: '$ap-chip-white-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde chip white' },
        { token: '$ap-chip-white-color', value: '$ap-grey-500 (#3d3d3d)', usage: 'Texto chip white' },
        { token: '$ap-chip-primary-bg', value: '$ap-primary-100 (#b0ceff)', usage: 'Fondo chip primary' },
        { token: '$ap-chip-primary-color', value: '$ap-primary-500 (#0061fe)', usage: 'Texto chip primary' },
        { token: '$ap-chip-secondary-bg', value: '$ap-secondary-100 (#fac7d5)', usage: 'Fondo chip secondary (rosa)' },
        { token: '$ap-chip-secondary-color', value: '$ap-secondary-500 (#ee4a79)', usage: 'Texto chip secondary' },
        { token: '$ap-chip-disabled-bg', value: '$ap-grey-50 (#ececec)', usage: 'Fondo chip disabled' },
        { token: '$ap-chip-disabled-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde chip disabled' },
        { token: '$ap-chip-disabled-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Texto chip disabled' },
        { token: '$ap-chip-add-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde boton agregar' },
        { token: '$ap-chip-add-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color boton agregar' },
        { token: '$ap-chip-add-hover-border', value: '$ap-primary-500 (#0061fe)', usage: 'Hover borde agregar' },
        { token: '$ap-chip-add-hover-color', value: '$ap-primary-500 (#0061fe)', usage: 'Hover color agregar' },
      ]
    },
    {
      title: 'Toaster Tokens',
      tokens: [
        { token: '$ap-toast-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$ap-toast-accent-width', value: '13px', usage: 'Ancho barra lateral de color' },
        { token: '$ap-toast-shadow', value: '0 8px 32px rgba(#000, 0.08)', usage: 'Sombra del toast' },
        { token: '$ap-toast-success-stripe', value: '$ap-success-400 (#3ace76)', usage: 'Barra lateral success' },
        { token: '$ap-toast-success-bg', value: '$ap-success-50 (#ebfaf1)', usage: 'Fondo icono success' },
        { token: '$ap-toast-success-color', value: '$ap-success-400 (#3ace76)', usage: 'Color icono success' },
        { token: '$ap-toast-warning-stripe', value: '$ap-warning-400 (#ff962c)', usage: 'Barra lateral warning' },
        { token: '$ap-toast-warning-bg', value: '$ap-warning-50 (#fff5ea)', usage: 'Fondo icono warning' },
        { token: '$ap-toast-warning-color', value: '$ap-warning-400 (#ff962c)', usage: 'Color icono warning' },
        { token: '$ap-toast-error-stripe', value: '$ap-error-400 (#fc3e3e)', usage: 'Barra lateral error' },
        { token: '$ap-toast-error-bg', value: '$ap-error-50 (#ffecec)', usage: 'Fondo icono error' },
        { token: '$ap-toast-error-color', value: '$ap-error-400 (#fc3e3e)', usage: 'Color icono error' },
        { token: '$ap-toast-info-stripe', value: '$ap-primary-500 (#0061fe)', usage: 'Barra lateral info' },
        { token: '$ap-toast-info-bg', value: '$ap-primary-50 (#e6efff)', usage: 'Fondo icono info' },
        { token: '$ap-toast-info-color', value: '$ap-primary-500 (#0061fe)', usage: 'Color icono info' },
        { token: '$ap-toast-title-color', value: '$ap-grey-800 (#222222)', usage: 'Color titulo' },
        { token: '$ap-toast-message-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color mensaje' },
        { token: '$ap-toast-close-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color boton cerrar' },
      ]
    },
    {
      title: 'Select Segment Tokens',
      tokens: [
        { token: '$ap-select-seg-border-color', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde de los segmentos' },
        { token: '$ap-select-seg-selected-bg', value: '$ap-secondary-50 (#fdedf2)', usage: 'Fondo seleccionado (rosa claro)' },
        { token: '$ap-select-seg-selected-border', value: '$ap-secondary-500 (#ee4a79)', usage: 'Borde seleccionado' },
        { token: '$ap-select-seg-hover-border', value: '$ap-secondary-500 (#ee4a79)', usage: 'Borde en hover (rosa)' },
        { token: '$ap-select-seg-chip-radius', value: '23px', usage: 'Border radius de chips' },
        { token: '$ap-select-colorpicker-dot-size', value: '25px', usage: 'Tamano dot de color' },
        { token: '$ap-select-user-avatar-size-lg', value: '36px', usage: 'Tamano avatar large' },
      ]
    },
    {
      title: 'Confirm Modal Tokens',
      tokens: [
        { token: '$ap-confirm-modal-border-radius', value: '12px', usage: 'Border radius del modal' },
        { token: '$ap-confirm-modal-max-width', value: '700px', usage: 'Ancho maximo' },
        { token: '$ap-confirm-modal-icon-size', value: '56px', usage: 'Tamano icono circular' },
        { token: '$ap-confirm-general-btn-bg', value: '$ap-primary-500 (#0061fe)', usage: 'Boton variante general (azul)' },
        { token: '$ap-confirm-confirmation-icon-color', value: '$ap-success-400 (#3ace76)', usage: 'Icono variante confirmacion (verde)' },
        { token: '$ap-confirm-alert-btn-bg', value: '$ap-secondary-500 (#ee4a79)', usage: 'Boton variante alerta (rosa AdvocatesPro)' },
        { token: '$ap-confirm-error-btn-bg', value: '$ap-error-400 (#fc3e3e)', usage: 'Boton variante error (rojo)' },
      ]
    },
    {
      title: 'Code Modal Tokens',
      tokens: [
        { token: '$ap-code-modal-border-radius', value: '24px', usage: 'Border radius' },
        { token: '$ap-code-modal-icon-bg', value: '$ap-warning-50 (#fff5ea)', usage: 'Fondo icono warning' },
        { token: '$ap-code-modal-icon-color', value: '$ap-warning-400 (#ff962c)', usage: 'Color icono warning' },
        { token: '$ap-code-modal-btn-bg', value: '$ap-error-400 (#fc3e3e)', usage: 'Boton confirmacion destructiva' },
        { token: '$ap-code-modal-code-size', value: '40px', usage: 'Tamano codigo verificacion' },
      ]
    },
    {
      title: 'Stepper Tokens',
      tokens: [
        { token: '$ap-stepper-track-height', value: '5px', usage: 'Altura barra progreso' },
        { token: '$ap-stepper-track-bg', value: '$ap-grey-50 (#ececec)', usage: 'Fondo del track' },
        { token: '$ap-stepper-progress-bg', value: '$ap-primary-500 (#0061fe)', usage: 'Color barra progreso (azul)' },
        { token: '$ap-stepper-track-radius', value: '10px', usage: 'Border radius del track' },
        { token: '$ap-stepper-label-font', value: "'DM Sans', sans-serif", usage: 'Familia tipografica label' },
        { token: '$ap-stepper-label-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color texto del paso' },
      ]
    },
    {
      title: 'TextArea Tokens',
      tokens: [
        { token: '$ap-textarea-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde del textarea' },
        { token: '$ap-textarea-border-focus', value: '$ap-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$ap-textarea-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$ap-textarea-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-textarea-font-size', value: '16px', usage: 'Tamano de fuente' },
        { token: '$ap-textarea-label-color', value: '$ap-grey-800 (#222222)', usage: 'Color del label' },
        { token: '$ap-textarea-placeholder-color', value: '$ap-grey-200 (#a6a6a6)', usage: 'Color placeholder' },
        { token: '$ap-textarea-padding', value: '12px 16px', usage: 'Padding' },
        { token: '$ap-textarea-disabled-opacity', value: '0.5', usage: 'Opacidad en disabled' },
      ]
    },
    {
      title: 'Number Input Tokens',
      tokens: [
        { token: '$ap-number-input-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde del contenedor' },
        { token: '$ap-number-input-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$ap-number-input-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$ap-number-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$ap-number-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$ap-number-input-btn-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color botones -/+' },
        { token: '$ap-number-input-btn-hover', value: '$ap-primary-500 (#0061fe)', usage: 'Hover botones -/+' },
        { token: '$ap-number-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-number-input-font-weight', value: '600', usage: 'Peso de fuente' },
      ]
    },
    {
      title: 'Account Counter Tokens',
      tokens: [
        { token: '$ap-counter-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde del badge' },
        { token: '$ap-counter-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$ap-counter-icon-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color icono User' },
        { token: '$ap-counter-text-color', value: '$ap-grey-800 (#222222)', usage: 'Color del numero' },
        { token: '$ap-counter-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-counter-font-weight', value: '600', usage: 'Peso de fuente' },
        { token: '$ap-counter-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$ap-counter-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$ap-counter-height-sm', value: '36px', usage: 'Altura small' },
      ]
    },
    {
      title: 'Select Date Tokens',
      tokens: [
        { token: '$ap-select-date-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde del trigger' },
        { token: '$ap-select-date-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$ap-select-date-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-select-date-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$ap-select-date-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$ap-select-date-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$ap-select-date-dropdown-shadow', value: '0 4px 15px rgba(#000, 0.12)', usage: 'Sombra dropdown' },
        { token: '$ap-select-date-day-selected-bg', value: '$ap-primary-500 (#0061fe)', usage: 'Fondo dia seleccionado' },
        { token: '$ap-select-date-day-other-color', value: '$ap-grey-100 (#c3c3c3)', usage: 'Color dias de otro mes' },
      ]
    },
    {
      title: 'Hour Date Picker Tokens',
      tokens: [
        { token: '$ap-hour-picker-spinner-gap', value: '18px', usage: 'Gap entre spinners' },
        { token: '$ap-hour-picker-chevron-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color flechas' },
        { token: '$ap-hour-picker-chevron-hover', value: '$ap-grey-500 (#3d3d3d)', usage: 'Hover flechas' },
        { token: '$ap-hour-picker-value-color', value: '$ap-grey-800 (#222222)', usage: 'Color valor' },
        { token: '$ap-hour-picker-divider', value: '$ap-grey-50 (#ececec)', usage: 'Color separador' },
      ]
    },
    {
      title: 'Select Tokens',
      tokens: [
        { token: '$ap-select-bg', value: '$ap-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$ap-select-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde' },
        { token: '$ap-select-border-focus', value: '$ap-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$ap-select-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$ap-select-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$ap-select-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$ap-select-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$ap-select-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-select-placeholder-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color placeholder' },
        { token: '$ap-select-text-color', value: '$ap-grey-800 (#222222)', usage: 'Color texto seleccionado' },
        { token: '$ap-select-icon-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color iconos' },
        { token: '$ap-select-dropdown-shadow', value: '0 4px 12px rgba(#000, 0.1)', usage: 'Sombra dropdown' },
        { token: '$ap-select-option-hover-bg', value: '$ap-neutral-50 (#fafafa)', usage: 'Hover opcion' },
        { token: '$ap-select-disabled-bg', value: '$ap-grey-100 (#c3c3c3)', usage: 'Fondo disabled' },
        { token: '$ap-select-disabled-text', value: '$ap-grey-200 (#a6a6a6)', usage: 'Texto disabled' },
      ]
    },
    {
      title: 'Search Input Tokens',
      tokens: [
        { token: '$ap-search-input-bg', value: '$ap-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$ap-search-input-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde' },
        { token: '$ap-search-input-border-focus', value: '$ap-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$ap-search-input-border-radius', value: '50px', usage: 'Pill shape' },
        { token: '$ap-search-input-height-lg', value: '50px', usage: 'Altura large' },
        { token: '$ap-search-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$ap-search-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$ap-search-input-icon-color', value: '$ap-grey-200 (#a6a6a6)', usage: 'Color icono search' },
        { token: '$ap-search-input-placeholder-color', value: '$ap-grey-200 (#a6a6a6)', usage: 'Color placeholder' },
        { token: '$ap-search-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-search-input-font-weight', value: '500', usage: 'Peso de fuente' },
        { token: '$ap-search-input-disabled-bg', value: '$ap-grey-100 (#c3c3c3)', usage: 'Fondo disabled' },
        { token: '$ap-search-input-disabled-text', value: '$ap-grey-200 (#a6a6a6)', usage: 'Texto disabled' },
      ]
    },
    {
      title: 'Text Input Tokens',
      tokens: [
        { token: '$ap-text-input-border', value: '$ap-grey-100 (#c3c3c3)', usage: 'Borde' },
        { token: '$ap-text-input-border-focus', value: '$ap-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$ap-text-input-border-error', value: '$ap-error-400 (#fc3e3e)', usage: 'Borde en error' },
        { token: '$ap-text-input-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$ap-text-input-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$ap-text-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$ap-text-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$ap-text-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$ap-text-input-label-color', value: '$ap-grey-800 (#222222)', usage: 'Color label' },
        { token: '$ap-text-input-placeholder-color', value: '$ap-grey-200 (#a6a6a6)', usage: 'Color placeholder' },
        { token: '$ap-text-input-icon-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color iconos' },
      ]
    },
    {
      title: 'Card Tokens',
      tokens: [
        { token: '$ap-card-bg', value: '$ap-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$ap-card-border', value: '$ap-grey-50 (#ececec)', usage: 'Borde' },
        { token: '$ap-card-border-radius', value: '16px', usage: 'Border radius' },
        { token: '$ap-card-padding-simple', value: '24px', usage: 'Padding variante simple' },
        { token: '$ap-card-padding-large', value: '32px', usage: 'Padding variante large' },
        { token: '$ap-card-title-color', value: '$ap-grey-800 (#222222)', usage: 'Color titulo' },
        { token: '$ap-card-title-size-titled', value: '20px', usage: 'Tamano titulo titled' },
        { token: '$ap-card-title-size-large', value: '24px', usage: 'Tamano titulo large' },
      ]
    },
    {
      title: 'Menu Tokens',
      tokens: [
        { token: '$ap-menu-bg', value: '$ap-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$ap-menu-border', value: '$ap-grey-50 (#ececec)', usage: 'Borde' },
        { token: '$ap-menu-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$ap-menu-item-hover', value: '$ap-neutral-50 (#fafafa)', usage: 'Hover items' },
        { token: '$ap-menu-item-selected-bg', value: '$ap-secondary-50 (#fdedf2)', usage: 'Fondo seleccionado (rosa claro)' },
        { token: '$ap-menu-item-color', value: '$ap-grey-500 (#3d3d3d)', usage: 'Color texto items' },
        { token: '$ap-menu-icon-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color iconos' },
        { token: '$ap-menu-radio-active', value: '$ap-secondary-500 (#ee4a79)', usage: 'Radio seleccionado' },
        { token: '$ap-menu-checkbox-active', value: '$ap-secondary-500 (#ee4a79)', usage: 'Checkbox seleccionado' },
      ]
    },
    {
      title: 'Avatar Tokens',
      tokens: [
        { token: '$ap-avatar-border-radius', value: '50%', usage: 'Forma circular' },
        { token: '$ap-avatar-size-xlarge', value: '50px', usage: 'Tamano extra large' },
        { token: '$ap-avatar-size-large', value: '36px', usage: 'Tamano large' },
        { token: '$ap-avatar-size-medium', value: '26px', usage: 'Tamano medium' },
        { token: '$ap-avatar-size-small', value: '18px', usage: 'Tamano small' },
        { token: '$ap-avatar-badge-size', value: '16px', usage: 'Tamano badge plataforma' },
        { token: '$ap-avatar-badge-border', value: '$ap-white-base (#ffffff)', usage: 'Borde del badge' },
      ]
    },
    {
      title: 'Metricas / Bar Chart Tokens',
      tokens: [
        { token: '$ap-bar-primary-from', value: '$ap-primary-300 (#5495fe)', usage: 'Gradiente inicio primary' },
        { token: '$ap-bar-primary-to', value: '$ap-primary-500 (#0061fe)', usage: 'Gradiente fin primary' },
        { token: '$ap-bar-secondary-from', value: '$ap-secondary-300 (#f38fab)', usage: 'Gradiente inicio secondary (rosa)' },
        { token: '$ap-bar-secondary-to', value: '$ap-secondary-500 (#ee4a79)', usage: 'Gradiente fin secondary' },
        { token: '$ap-bar-size-large', value: '78px', usage: 'Ancho barra large' },
        { token: '$ap-bar-size-medium', value: '35px', usage: 'Ancho barra medium' },
        { token: '$ap-bar-size-small', value: '17px', usage: 'Ancho barra small' },
        { token: '$ap-bar-size-xsmall', value: '8px', usage: 'Ancho barra x-small' },
        { token: '$ap-bar-label-color', value: '$ap-grey-300 (#7d7d7d)', usage: 'Color labels' },
        { token: '$ap-sparkline-primary-color', value: '$ap-primary-500 (#0061fe)', usage: 'Color linea primary' },
        { token: '$ap-sparkline-secondary-color', value: '$ap-secondary-500 (#ee4a79)', usage: 'Color linea secondary (rosa)' },
        { token: '$ap-donut-stroke-width', value: '30px', usage: 'Grosor segmentos dona' },
        { token: '$ap-trend-up-color', value: '$ap-success-400 (#3ace76)', usage: 'Indicador positivo' },
        { token: '$ap-trend-down-color', value: '$ap-error-400 (#fc3e3e)', usage: 'Indicador negativo' },
      ]
    },
    {
      title: 'Table Tokens',
      tokens: [
        { token: '$ap-table-bg', value: '$ap-white-base (#ffffff)', usage: 'Fondo' },
        { token: '$ap-table-border-color', value: '$ap-grey-50 (#ececec)', usage: 'Borde de filas' },
        { token: '$ap-table-header-color', value: '$ap-grey-500 (#3d3d3d)', usage: 'Color texto header' },
        { token: '$ap-table-body-color', value: '$ap-grey-500 (#3d3d3d)', usage: 'Color texto body' },
        { token: '$ap-table-title-color', value: '$ap-grey-800 (#222222)', usage: 'Color titulo' },
        { token: '$ap-table-title-size', value: '24px', usage: 'Tamano titulo' },
        { token: '$ap-table-row-height', value: '44px', usage: 'Altura de filas' },
        { token: '$ap-table-cell-padding', value: '10px 20px', usage: 'Padding de celdas' },
        { token: '$ap-table-hover-bg', value: '$ap-neutral-50 (#fafafa)', usage: 'Fondo hover de fila' },
        { token: '$ap-table-action-icon-color', value: '$ap-secondary-500 (#ee4a79)', usage: 'Color icono acciones (rosa)' },
      ]
    },
    {
      title: 'Dashboard UI Tokens',
      tokens: [
        { token: '$ap-code-block-bg', value: '$ap-grey-900 (#1a1a1a)', usage: 'Fondo code blocks' },
        { token: '$ap-code-block-text', value: '$ap-grey-100 (#c3c3c3)', usage: 'Color texto code blocks' },
        { token: '$ap-ui-label-color', value: '$ap-grey-200 (#a6a6a6)', usage: 'Color labels UI del dashboard' },
        { token: '$ap-ui-light-bg', value: '$ap-neutral-200 (#f1f1f1)', usage: 'Fondo inline code' },
        { token: '$ap-swatch-border', value: '$ap-grey-50 (#ececec)', usage: 'Borde color swatches' },
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
  // All AdvocatesPro tokens use the $ap- prefix
  private readonly colorMap: Record<string, string> = {
    // Primary (blue)
    '$ap-primary-50': '#e6efff', '$ap-primary-100': '#b0ceff', '$ap-primary-200': '#8ab6ff',
    '$ap-primary-300': '#5495fe', '$ap-primary-400': '#3381fe', '$ap-primary-500': '#0061fe',
    '$ap-primary-600': '#0058e7', '$ap-primary-700': '#0045b4', '$ap-primary-800': '#00358c', '$ap-primary-900': '#00296b',
    // Secondary (pink)
    '$ap-secondary-50': '#fdedf2', '$ap-secondary-100': '#fac7d5', '$ap-secondary-200': '#f7acc1',
    '$ap-secondary-300': '#f38fab', '$ap-secondary-400': '#f07090', '$ap-secondary-500': '#ee4a79',
    '$ap-secondary-600': '#d9436e', '$ap-secondary-700': '#b93c5e', '$ap-secondary-800': '#8a2c48', '$ap-secondary-900': '#5e1c30',
    // Grey
    '$ap-grey-50': '#ececec', '$ap-grey-100': '#c3c3c3', '$ap-grey-200': '#a6a6a6',
    '$ap-grey-300': '#7d7d7d', '$ap-grey-400': '#646464', '$ap-grey-500': '#3d3d3d',
    '$ap-grey-600': '#383838', '$ap-grey-700': '#2b2b2b', '$ap-grey-800': '#222222', '$ap-grey-900': '#1a1a1a',
    // Success
    '$ap-success-50': '#ebfaf1', '$ap-success-100': '#aeebc7', '$ap-success-200': '#8de3b0',
    '$ap-success-300': '#5bd68d', '$ap-success-400': '#3ace76', '$ap-success-500': '#299053', '$ap-success-600': '#237e48',
    // Warning
    '$ap-warning-50': '#fff5ea', '$ap-warning-100': '#ffd4a8', '$ap-warning-200': '#ffc285',
    '$ap-warning-300': '#ffa850', '$ap-warning-400': '#ff962c', '$ap-warning-500': '#b3691f', '$ap-warning-600': '#9c5c1b',
    // Error
    '$ap-error-50': '#ffecec', '$ap-error-100': '#feb0b0', '$ap-error-200': '#fd8f8f',
    '$ap-error-300': '#fd5f5f', '$ap-error-400': '#fc3e3e', '$ap-error-500': '#b02b2b', '$ap-error-600': '#9a2626',
    // Neutral
    '$ap-neutral-50': '#fafafa', '$ap-neutral-100': '#f5f7fa', '$ap-neutral-200': '#f1f1f1',
    // AI (cyan)
    '$ap-ai-50': '#e5f6ff', '$ap-ai-100': '#c9edff', '$ap-ai-500': '#00aaff',
    // Base
    '$ap-white-base': '#ffffff', '$ap-black-base': '#000000',
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

  // Returns true when the token value is a raw hex/color not bound to an $ap-* token
  // (useful to flag tokens not linked to the AdvocatesPro palette)
  isStandaloneColor(value: string): boolean {
    if (!value) return false;
    const trimmed = value.trim();
    // If it references an $ap- token, it's linked to the palette
    if (trimmed.startsWith('$ap-')) return false;
    // Standalone hex value: e.g. #ee4a79, #fff
    return /^#[0-9a-fA-F]{3,8}$/.test(trimmed);
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.copiedToken = text;
    setTimeout(() => this.copiedToken = null, 1500);
  }
}

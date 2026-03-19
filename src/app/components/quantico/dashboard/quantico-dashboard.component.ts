import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search, X, ChevronDown, Copy, Check, PlusCircle, CircleCheck, CircleX, Sparkles, CircleCheckBig, TriangleAlert, Info, User, Globe, Mail, MapPin, Home, FileText, BarChart3, Settings, Layers, Zap, Trash2, Pencil, EllipsisVertical } from 'lucide-angular';
import { RadioButton } from 'primeng/radiobutton';
import { SelectSegmentComponent, SelectSegmentOption } from '../../ui/select-segment/select-segment.component';
import { SelectSegmentImgComponent, SelectSegmentImgOption } from '../../ui/select-segment-img/select-segment-img.component';
import { SelectColorpickerComponent, SelectColorpickerOption } from '../../ui/select-colorpicker/select-colorpicker.component';
import { SelectSegmentChipsComponent, SelectSegmentChipsOption } from '../../ui/select-segment-chips/select-segment-chips.component';
import { SelectUserComponent, SelectUserOption } from '../../ui/select-user/select-user.component';
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
  scssVar: string;
  isBase?: boolean;
}

interface ColorPalette {
  title: string;
  swatches: ColorSwatch[];
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

interface TokenRow {
  token: string;
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
  selector: 'app-quantico-dashboard',
  standalone: true,
  imports: [
    CommonModule, FormsModule, LucideAngularModule, RadioButton,
    SelectSegmentComponent, SelectSegmentImgComponent, SelectColorpickerComponent,
    SelectSegmentChipsComponent, SelectUserComponent,
    ConfirmModalComponent, ConfirmCodeModalComponent,
    StepperComponent, TextareaComponent, NumberInputComponent,
    AccountCounterComponent, SelectDateComponent, HourDatePickerComponent,
    SelectComponent, SearchInputComponent, TextInputComponent,
    CardComponent, MenuComponent, AvatarSocialComponent,
    BarVerticalComponent, BarHorizontalComponent, TrendIndicatorComponent,
    SparklineComponent, DonutChartComponent
  ],
  templateUrl: './quantico-dashboard.component.html',
  styleUrl: './quantico-dashboard.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class QuanticoDashboardComponent {
  readonly SearchIcon = Search;
  readonly XIcon = X;
  readonly ChevronDownIcon = ChevronDown;
  readonly CopyIcon = Copy;
  readonly CheckIcon = Check;
  readonly PlusCircleIcon = PlusCircle;
  readonly CircleCheckIcon = CircleCheck;
  readonly CircleXIcon = CircleX;
  readonly SparklesIcon = Sparkles;
  readonly CircleCheckBigIcon = CircleCheckBig;
  readonly TriangleAlertIcon = TriangleAlert;
  readonly InfoIcon = Info;
  readonly UserIcon = User;
  readonly GlobeIcon = Globe;
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly HomeIcon = Home;
  readonly FileTextIcon = FileText;
  readonly BarChart3Icon = BarChart3;
  readonly SettingsIcon = Settings;
  readonly LayersIcon = Layers;
  readonly ZapIcon = Zap;
  readonly TrashIcon = Trash2;
  readonly PencilIcon = Pencil;
  readonly EllipsisIcon = EllipsisVertical;

  searchQuery = '';
  copiedToken: string | null = null;
  headerScrolled = false;
  navDropdownOpen = false;
  expandedCode: Record<string, boolean> = {};
  copiedCode: string | null = null;
  tokenDropdownOpen = false;

  // ─── Buttons ───
  readonly buttonTypes = ['primary', 'secundary', 'white'] as const;
  readonly buttonSizes = ['large', 'medium', 'small'] as const;

  // ─── Controls ───
  toggleStates: Record<string, boolean> = { large: true, medium: false, small: true };
  checkboxStates: Record<string, boolean> = { demo1: false, demo2: true };
  radioSelected = 'option1';
  radioSelectedSm = 'optionA';
  radioSelectedLg = 'optionX';
  radioDisabledVal = 'disabledB';
  radioFilledVal = 'filled1';
  toggleBtnActive: Record<string, boolean> = { btn1: false, btn2: true, btn3: false };
  radioTabSelected = 'tab2';

  // ─── Chips ───
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

  addChip() {
    const labels = ['React', 'Vue', 'Svelte', 'Next.js', 'Nuxt', 'Figma', 'Tailwind'];
    const variants = ['primary', 'secundary', 'white'];
    const label = labels[Math.floor(Math.random() * labels.length)];
    const variant = variants[Math.floor(Math.random() * variants.length)];
    this.chips.push({ label, variant });
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

  // ─── Select Segments state ───
  readonly selectTabs = [
    { id: 'segment', label: 'Select Segment' },
    { id: 'user', label: 'Select User' },
    { id: 'segment-img', label: 'Select con Imagen' },
    { id: 'colorpicker', label: 'Select Colorpicker' },
    { id: 'chips', label: 'Select con Chips' },
  ];
  activeSelectTab = 'segment';

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

  // ─── Modals state ───
  activeModal: ConfirmModalVariant | null = null;

  readonly modalVariants: { variant: ConfirmModalVariant; label: string; title: string; message: string }[] = [
    { variant: 'general', label: 'General', title: '¿Estas seguro?', message: 'Se refrescará la informacion del usuario de Quantico <strong>Usuario genérico</strong>' },
    { variant: 'confirmation', label: 'Confirmación', title: 'Confirmación', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Aliquam ac rhoncus quam.</strong>' },
    { variant: 'alert', label: 'Alerta', title: 'Alerta', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Aliquam ac rhoncus quam.</strong>' },
    { variant: 'error', label: 'Error', title: 'Error', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Aliquam ac rhoncus quam.</strong>' },
  ];

  openModal(variant: ConfirmModalVariant): void {
    this.activeModal = variant;
  }

  closeModal(): void {
    this.activeModal = null;
  }

  codeModalVisible = false;

  // ─── Stepper state ───
  stepperCurrent = 1;
  stepperTotal = 4;

  stepperNext(): void {
    if (this.stepperCurrent < this.stepperTotal) this.stepperCurrent++;
  }

  stepperPrev(): void {
    if (this.stepperCurrent > 1) this.stepperCurrent--;
  }

  stepperReset(): void {
    this.stepperCurrent = 1;
  }

  // ─── Form Inputs state ───
  textareaValue = '';
  numberValue1 = 10;
  numberValue2 = 5;
  numberValue3 = 0;
  numberSpinnerValue = 10;

  // ─── Date Pickers state ───
  selectedDate = '2025-06-01';
  selectedDateTime: Date | null = new Date(2025, 5, 1, 12, 31);

  // ─── Account Counter state ───
  counterValue = 1;

  incrementCounter(): void {
    this.counterValue++;
  }

  decrementCounter(): void {
    if (this.counterValue > 0) this.counterValue--;
  }

  // ─── Select state ───
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

  onSelectChange(option: any): void {}

  // ─── Search state ───
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

  // ─── Text Input state ───
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

  readonly sparklineData1 = [30, 45, 28, 50, 42, 60, 55, 70, 65, 85];
  readonly sparklineData2 = [20, 25, 35, 30, 45, 40, 55, 50, 65, 80];

  readonly donutSegments: DonutSegment[] = [
    { value: 35, color: '#5cd680', gradientTo: '#8aeab0', label: 'Orgánico' },
    { value: 12, color: '#f5c842', gradientTo: '#f5d97a', label: 'Referral' },
    { value: 10, color: '#f47a37', gradientTo: '#f9b48e', label: 'Social' },
    { value: 15, color: '#9e54e2', gradientTo: '#c4aff2', label: 'Email' },
    { value: 13, color: '#5495fe', gradientTo: '#8ab6ff', label: 'Directo' },
    { value: 15, color: '#b176e8', gradientTo: '#d2b0f2', label: 'Paid' }
  ];

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

  openTableMenuId: string | null = null;

  toggleTableMenu(rowId: string, event: MouseEvent): void {
    event.stopPropagation();
    this.openTableMenuId = this.openTableMenuId === rowId ? null : rowId;
  }

  onTableRowClick(row: Record<string, unknown>, index: number): void {
    console.log('Row clicked:', row, 'Index:', index);
  }

  onTableMenuAction(item: MenuItem): void {
    console.log('Table action:', item.id, 'Row:', this.openTableMenuId);
    this.openTableMenuId = null;
  }

  readonly sections = [
    { id: 'colors', label: 'Colors', keywords: ['color', 'palette', 'primary', 'secondary', 'grey', 'hex', 'rgb', 'scss'] },
    { id: 'typography', label: 'Typography', keywords: ['font', 'tipografia', 'urbanist', 'dm sans', 'heading', 'body', 'weight', 'size'] },
    { id: 'spacing', label: 'Spacing', keywords: ['espacio', 'padding', 'margin', 'gap'] },
    { id: 'radius', label: 'Border Radius', keywords: ['border', 'radius', 'redondeo', 'pill', 'circle'] },
    { id: 'buttons', label: 'Buttons', keywords: ['boton', 'button', 'primary', 'secundary', 'white', 'hover', 'active', 'disabled', 'ai', 'icon button', 'toggle button'] },
    { id: 'controls', label: 'Controls', keywords: ['toggle', 'checkbox', 'radio', 'switch', 'check', 'tab', 'primeng'] },
    { id: 'badges', label: 'Status Badge', keywords: ['badge', 'status', 'positiva', 'negativa', 'neutra', 'desactivado', 'dot', 'pill'] },
    { id: 'chips', label: 'Chips', keywords: ['chip', 'tag', 'pill', 'removable', 'filtro', 'label'] },
    { id: 'toasters', label: 'Toasters', keywords: ['toast', 'toaster', 'notificacion', 'alert', 'success', 'error', 'warning', 'info'] },
    { id: 'selects-seg', label: 'Select Segments', keywords: ['select', 'segment', 'user', 'avatar', 'colorpicker', 'image', 'chips'] },
    { id: 'modals', label: 'Modals', keywords: ['modal', 'dialog', 'confirm', 'confirmacion', 'alerta', 'error', 'general'] },
    { id: 'steppers', label: 'Steppers', keywords: ['stepper', 'paso', 'step', 'progress', 'wizard', 'barra'] },
    { id: 'form-inputs', label: 'Form Inputs', keywords: ['input', 'text', 'textarea', 'number', 'form', 'campo', 'formulario'] },
    { id: 'date-pickers', label: 'Date Pickers', keywords: ['date', 'fecha', 'calendar', 'calendario', 'hora', 'hour', 'time'] },
    { id: 'counters', label: 'Counters', keywords: ['counter', 'contador', 'cuenta', 'badge', 'number', 'users'] },
    { id: 'selects', label: 'Selects', keywords: ['select', 'dropdown', 'option', 'icon', 'label', 'size', 'disabled'] },
    { id: 'search-inputs', label: 'Search Inputs', keywords: ['search', 'buscar', 'input', 'pill', 'full width'] },
    { id: 'text-inputs', label: 'Text Inputs', keywords: ['text', 'input', 'campo', 'field', 'label', 'icon', 'error', 'disabled'] },
    { id: 'cards', label: 'Cards', keywords: ['card', 'tarjeta', 'container', 'simple', 'titled', 'large'] },
    { id: 'menus', label: 'Menus', keywords: ['menu', 'dropdown', 'icon', 'avatar', 'radio', 'checkbox', 'item', 'list'] },
    { id: 'avatars', label: 'Avatares', keywords: ['avatar', 'social', 'media', 'instagram', 'facebook', 'badge', 'platform', 'foto', 'perfil', 'imagen'] },
    { id: 'metricas', label: 'Métricas', keywords: ['metrica', 'bar', 'barra', 'vertical', 'horizontal', 'chart', 'grafico', 'gradient', 'lineal', 'sparkline', 'circular', 'donut', 'indicador', 'trend', 'dato', 'dashboard'] },
    { id: 'tables', label: 'Tables', keywords: ['tabla', 'table', 'columna', 'fila', 'row', 'column', 'badge', 'action', 'icon', 'data', 'orden'] },
    { id: 'tokens', label: 'Design Tokens', keywords: ['token', 'variable', 'scss', '$', 'status', 'success', 'warning', 'error'] },
    { id: 'icons', label: 'Icons', keywords: ['icono', 'lucide', 'icon', 'svg', 'plus', 'bell', 'search'] },
    { id: 'components', label: 'Component API', keywords: ['componente', 'api', 'input', 'output', 'select', 'table', 'badge', 'search'] },
    { id: 'rules', label: 'Reglas', keywords: ['regla', 'convencion', 'bem', 'archivo', 'estructura'] },
  ];

  get filteredSections() {
    if (!this.searchQuery) return this.sections;
    const q = this.searchQuery.toLowerCase();
    return this.sections.filter(s =>
      s.label.toLowerCase().includes(q) ||
      s.keywords.some(k => k.includes(q))
    );
  }

  get navSelectLabel(): string {
    return 'Secciones';
  }

  // ═══════════════════════════════════════
  // Color Palettes
  // ═══════════════════════════════════════
  readonly palettes: ColorPalette[] = [
    {
      title: 'Primary',
      swatches: [
        { name: 'primary-50', hex: '#e6efff', scssVar: '$qt-primary-50' },
        { name: 'primary-100', hex: '#b0ceff', scssVar: '$qt-primary-100' },
        { name: 'primary-200', hex: '#8ab6ff', scssVar: '$qt-primary-200' },
        { name: 'primary-300', hex: '#5495fe', scssVar: '$qt-primary-300' },
        { name: 'primary-400', hex: '#3381fe', scssVar: '$qt-primary-400' },
        { name: 'primary-500', hex: '#0061fe', scssVar: '$qt-primary-500', isBase: true },
        { name: 'primary-600', hex: '#0058e7', scssVar: '$qt-primary-600' },
        { name: 'primary-700', hex: '#0045b4', scssVar: '$qt-primary-700' },
        { name: 'primary-800', hex: '#00358c', scssVar: '$qt-primary-800' },
        { name: 'primary-900', hex: '#00296b', scssVar: '$qt-primary-900' }
      ]
    },
    {
      title: 'Secondary',
      swatches: [
        { name: 'secondary-50', hex: '#f5eefc', scssVar: '$qt-secondary-50' },
        { name: 'secondary-100', hex: '#e1caf6', scssVar: '$qt-secondary-100' },
        { name: 'secondary-200', hex: '#d2b0f2', scssVar: '$qt-secondary-200' },
        { name: 'secondary-300', hex: '#be8cec', scssVar: '$qt-secondary-300' },
        { name: 'secondary-400', hex: '#b176e8', scssVar: '$qt-secondary-400' },
        { name: 'secondary-500', hex: '#9e54e2', scssVar: '$qt-secondary-500', isBase: true },
        { name: 'secondary-600', hex: '#904cce', scssVar: '$qt-secondary-600' },
        { name: 'secondary-700', hex: '#703ca0', scssVar: '$qt-secondary-700' },
        { name: 'secondary-800', hex: '#572e7c', scssVar: '$qt-secondary-800' },
        { name: 'secondary-900', hex: '#42235f', scssVar: '$qt-secondary-900' }
      ]
    },
    {
      title: 'Grey',
      swatches: [
        { name: 'grey-50', hex: '#ececec', scssVar: '$qt-grey-50' },
        { name: 'grey-100', hex: '#c3c3c3', scssVar: '$qt-grey-100' },
        { name: 'grey-200', hex: '#a6a6a6', scssVar: '$qt-grey-200' },
        { name: 'grey-300', hex: '#7d7d7d', scssVar: '$qt-grey-300' },
        { name: 'grey-400', hex: '#646464', scssVar: '$qt-grey-400' },
        { name: 'grey-500', hex: '#3d3d3d', scssVar: '$qt-grey-500' },
        { name: 'grey-600', hex: '#383838', scssVar: '$qt-grey-600' },
        { name: 'grey-700', hex: '#2b2b2b', scssVar: '$qt-grey-700' },
        { name: 'grey-800', hex: '#222222', scssVar: '$qt-grey-800' },
        { name: 'grey-900', hex: '#1a1a1a', scssVar: '$qt-grey-900' }
      ]
    },
    {
      title: 'Error',
      swatches: [
        { name: 'error-50', hex: '#ffecec', scssVar: '$qt-error-50' },
        { name: 'error-100', hex: '#feb0b0', scssVar: '$qt-error-100' },
        { name: 'error-200', hex: '#fd8f8f', scssVar: '$qt-error-200' },
        { name: 'error-300', hex: '#fd5f5f', scssVar: '$qt-error-300' },
        { name: 'error-400', hex: '#fc3e3e', scssVar: '$qt-error-400', isBase: true },
        { name: 'error-500', hex: '#b02b2b', scssVar: '$qt-error-500' },
        { name: 'error-600', hex: '#9a2626', scssVar: '$qt-error-600' }
      ]
    },
    {
      title: 'Warning',
      swatches: [
        { name: 'warning-50', hex: '#fff5ea', scssVar: '$qt-warning-50' },
        { name: 'warning-100', hex: '#ffd4a8', scssVar: '$qt-warning-100' },
        { name: 'warning-200', hex: '#ffc285', scssVar: '$qt-warning-200' },
        { name: 'warning-300', hex: '#ffa850', scssVar: '$qt-warning-300' },
        { name: 'warning-400', hex: '#ff962c', scssVar: '$qt-warning-400', isBase: true },
        { name: 'warning-500', hex: '#b3691f', scssVar: '$qt-warning-500' },
        { name: 'warning-600', hex: '#9c5c1b', scssVar: '$qt-warning-600' }
      ]
    },
    {
      title: 'Success',
      swatches: [
        { name: 'success-50', hex: '#ebfaf1', scssVar: '$qt-success-50' },
        { name: 'success-100', hex: '#aeebc7', scssVar: '$qt-success-100' },
        { name: 'success-200', hex: '#8de3b0', scssVar: '$qt-success-200' },
        { name: 'success-300', hex: '#5bd68d', scssVar: '$qt-success-300' },
        { name: 'success-400', hex: '#3ace76', scssVar: '$qt-success-400', isBase: true },
        { name: 'success-500', hex: '#299053', scssVar: '$qt-success-500' },
        { name: 'success-600', hex: '#237e48', scssVar: '$qt-success-600' }
      ]
    },
    {
      title: 'Neutral',
      swatches: [
        { name: 'neutral-50', hex: '#fafafa', scssVar: '$qt-neutral-50' },
        { name: 'neutral-100', hex: '#f5f7fa', scssVar: '$qt-neutral-100' },
        { name: 'neutral-200', hex: '#f1f1f1', scssVar: '$qt-neutral-200' }
      ]
    },
    {
      title: 'White',
      swatches: [
        { name: 'white-base', hex: '#ffffff', scssVar: '$qt-white-base' }
      ]
    },
    {
      title: 'Black',
      swatches: [
        { name: 'black-base', hex: '#000000', scssVar: '$qt-black-base' }
      ]
    }
  ];

  // ═══════════════════════════════════════
  // Typography
  // ═══════════════════════════════════════
  readonly typographyRows: TypographyRow[] = [
    { name: 'Heading 1', family: 'Urbanist', size: '28px', weight: '700 Bold', usage: 'Titulos principales' },
    { name: 'Heading 2', family: 'Urbanist', size: '24px', weight: '700 Bold', usage: 'Titulos de seccion' },
    { name: 'Heading 3', family: 'Urbanist', size: '22px', weight: '700 Bold', usage: 'Subtitulos de card' },
    { name: 'Heading 4', family: 'Urbanist', size: '20px', weight: '600 SemiBold', usage: 'Subtitulos secundarios' },
    { name: 'Body', family: 'DM Sans', size: '16px', weight: '400 Regular', usage: 'Texto de cuerpo, tablas' },
    { name: 'Small', family: 'DM Sans', size: '14px', weight: '400 Regular', usage: 'Texto secundario, captions' },
    { name: 'Caption', family: 'DM Sans', size: '12px', weight: '400 Regular', usage: 'Etiquetas, metadata' },
    { name: 'Label', family: 'Urbanist', size: '14px', weight: '600 SemiBold', usage: 'Labels de formularios, badges' },
  ];

  // ═══════════════════════════════════════
  // Spacing
  // ═══════════════════════════════════════
  readonly spacingRows: SpacingRow[] = [
    { name: '4px', value: '4px', usage: 'Espaciado minimo entre iconos' },
    { name: '8px', value: '8px', usage: 'Padding interno compacto' },
    { name: '12px', value: '12px', usage: 'Gap entre elementos relacionados' },
    { name: '16px', value: '16px', usage: 'Padding standard de inputs' },
    { name: '20px', value: '20px', usage: 'Padding interno de cards compactos' },
    { name: '24px', value: '24px', usage: 'Gap entre secciones internas' },
    { name: '32px', value: '32px', usage: 'Padding de cards, gap entre secciones' },
    { name: '48px', value: '48px', usage: 'Separacion entre secciones grandes' },
  ];

  // ═══════════════════════════════════════
  // Border Radius
  // ═══════════════════════════════════════
  readonly radiusRows: RadiusRow[] = [
    { name: '4px', value: '4px', usage: 'Elementos minimos' },
    { name: '8px', value: '8px', usage: 'Chips, tags' },
    { name: '10px', value: '10px', usage: 'Inputs, selects' },
    { name: '12px', value: '12px', usage: 'Botones, cards pequenos' },
    { name: '16px', value: '16px', usage: 'Cards grandes, secciones' },
    { name: '50px', value: '50px', usage: 'Pills, badges, search inputs' },
  ];

  // ═══════════════════════════════════════
  // Design Tokens
  // ═══════════════════════════════════════
  readonly tokenGroups = [
    {
      title: 'Colores Base',
      tokens: [
        { token: '$qt-primary-500', value: '#0061fe', usage: 'Acciones principales, links, focus' },
        { token: '$qt-secondary-500', value: '#9e54e2', usage: 'Acciones secundarias, acentos' },
        { token: '$qt-grey-800', value: '#222222', usage: 'Texto principal, headings' },
        { token: '$qt-grey-300', value: '#7d7d7d', usage: 'Placeholder, texto secundario' },
        { token: '$qt-grey-50', value: '#ececec', usage: 'Bordes, divisores' },
        { token: '$qt-success-400', value: '#3ace76', usage: 'Estados exitosos' },
        { token: '$qt-warning-400', value: '#ff962c', usage: 'Estados de advertencia' },
        { token: '$qt-error-400', value: '#fc3e3e', usage: 'Estados de error' },
        { token: '$qt-white-base', value: '#ffffff', usage: 'Fondos' },
        { token: '$qt-black-base', value: '#000000', usage: 'Texto negro puro' },
        { token: '$qt-neutral-50', value: '#fafafa', usage: 'Fondos sutiles' },
        { token: '$qt-neutral-100', value: '#f5f7fa', usage: 'Fondos de seccion' },
      ]
    },
    {
      title: 'Button',
      tokens: [
        { token: '$qt-button-primary-bg', value: '$qt-primary-500 (#0061fe)', usage: 'Fondo boton primary' },
        { token: '$qt-button-primary-text', value: '$qt-neutral-200 (#f1f1f1)', usage: 'Texto boton primary' },
        { token: '$qt-button-primary-hover', value: '$qt-primary-600 (#0058e7)', usage: 'Hover boton primary' },
        { token: '$qt-button-primary-active', value: '$qt-primary-700 (#0045b4)', usage: 'Active boton primary' },
        { token: '$qt-button-primary-disabled-bg', value: '$qt-primary-200 (#8ab6ff)', usage: 'Disabled boton primary' },
        { token: '$qt-button-secondary-bg', value: '$qt-secondary-500 (#9e54e2)', usage: 'Fondo boton secondary' },
        { token: '$qt-button-secondary-text', value: '$qt-white-base (#ffffff)', usage: 'Texto boton secondary' },
        { token: '$qt-button-secondary-hover', value: '$qt-secondary-600 (#904cce)', usage: 'Hover boton secondary' },
        { token: '$qt-button-secondary-active', value: '$qt-secondary-700 (#703ca0)', usage: 'Active boton secondary' },
        { token: '$qt-button-secondary-disabled-bg', value: '$qt-secondary-200 (#d2b0f2)', usage: 'Disabled boton secondary' },
        { token: '$qt-button-white-bg', value: '$qt-white-base (#ffffff)', usage: 'Fondo boton white' },
        { token: '$qt-button-white-text', value: '$qt-grey-300 (#7d7d7d)', usage: 'Texto boton white' },
        { token: '$qt-button-white-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde boton white' },
        { token: '$qt-button-white-hover', value: '$qt-neutral-50 (#fafafa)', usage: 'Hover boton white' },
        { token: '$qt-button-white-active', value: '$qt-neutral-200 (#f1f1f1)', usage: 'Active boton white' },
        { token: '$qt-button-white-disabled-text', value: '$qt-grey-100 (#c3c3c3)', usage: 'Disabled texto boton white' },
        { token: '$qt-button-ai-border', value: '$qt-primary-300 (#5495fe)', usage: 'Borde boton AI' },
        { token: '$qt-button-ai-text', value: '$qt-primary-500 (#0061fe)', usage: 'Texto boton AI' },
        { token: '$qt-button-ai-hover', value: '$qt-primary-50 (#e6efff)', usage: 'Hover boton AI' },
        { token: '$qt-button-ai-active', value: '$qt-primary-100 (#b0ceff)', usage: 'Active boton AI' },
        { token: '$qt-button-border-radius', value: '12px', usage: 'Border radius de botones' },
        { token: '$qt-button-height-large', value: '48px', usage: 'Altura boton large' },
        { token: '$qt-button-height-medium', value: '40px', usage: 'Altura boton medium' },
        { token: '$qt-button-height-small', value: '36px', usage: 'Altura boton small' },
        { token: '$qt-button-font-size-large', value: '18px', usage: 'Font size boton large' },
        { token: '$qt-button-font-size-medium', value: '16px', usage: 'Font size boton medium' },
        { token: '$qt-button-font-size-small', value: '14px', usage: 'Font size boton small' },
        { token: '$qt-button-font-weight', value: '700', usage: 'Font weight de botones' },
        { token: '$qt-button-padding', value: '10px 20px', usage: 'Padding de botones' },
        { token: '$qt-button-gap', value: '10px', usage: 'Gap entre icono y texto' },
        { token: '$qt-button-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-button-transition', value: 'all 0.2s ease', usage: 'Transicion de estados' },
      ]
    },
    {
      title: 'Toggle / Switch',
      tokens: [
        { token: '$qt-toggle-off-bg', value: '$qt-grey-100 (#c3c3c3)', usage: 'Fondo toggle apagado' },
        { token: '$qt-toggle-on-bg', value: '$qt-secondary-500 (#9e54e2)', usage: 'Fondo toggle encendido' },
        { token: '$qt-toggle-thumb-bg', value: '$qt-white-base (#ffffff)', usage: 'Color thumb del toggle' },
        { token: '$qt-toggle-thumb-shadow', value: '0 1px 3px rgba(#000, 0.15)', usage: 'Sombra del thumb' },
        { token: '$qt-toggle-large-width', value: '56px', usage: 'Ancho toggle large' },
        { token: '$qt-toggle-large-height', value: '32px', usage: 'Altura toggle large' },
        { token: '$qt-toggle-medium-width', value: '48px', usage: 'Ancho toggle medium' },
        { token: '$qt-toggle-medium-height', value: '28px', usage: 'Altura toggle medium' },
        { token: '$qt-toggle-small-width', value: '40px', usage: 'Ancho toggle small' },
        { token: '$qt-toggle-small-height', value: '24px', usage: 'Altura toggle small' },
        { token: '$qt-toggle-large-thumb', value: '24px', usage: 'Tamano thumb toggle large' },
        { token: '$qt-toggle-medium-thumb', value: '20px', usage: 'Tamano thumb toggle medium' },
        { token: '$qt-toggle-small-thumb', value: '18px', usage: 'Tamano thumb toggle small' },
      ]
    },
    {
      title: 'Checkbox',
      tokens: [
        { token: '$qt-checkbox-size', value: '24px', usage: 'Tamano del checkbox' },
        { token: '$qt-checkbox-border-radius', value: '8px', usage: 'Border radius checkbox' },
        { token: '$qt-checkbox-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde checkbox default' },
        { token: '$qt-checkbox-bg', value: '$qt-white-base (#ffffff)', usage: 'Fondo checkbox default' },
        { token: '$qt-checkbox-active-bg', value: '$qt-secondary-500 (#9e54e2)', usage: 'Fondo checkbox activo' },
        { token: '$qt-checkbox-active-border', value: '$qt-secondary-500 (#9e54e2)', usage: 'Borde checkbox activo' },
        { token: '$qt-checkbox-hover-border', value: '$qt-secondary-500 (#9e54e2)', usage: 'Borde checkbox en hover' },
        { token: '$qt-checkbox-check-color', value: '$qt-white-base (#ffffff)', usage: 'Color del check' },
      ]
    },
    {
      title: 'Radio Button',
      tokens: [
        { token: '$qt-radio-checked-bg', value: '$qt-secondary-500 (#9e54e2)', usage: 'Fondo radio seleccionado' },
        { token: '$qt-radio-checked-border', value: '$qt-secondary-500 (#9e54e2)', usage: 'Borde radio seleccionado' },
        { token: '$qt-radio-checked-hover-bg', value: '$qt-secondary-600 (#904cce)', usage: 'Hover radio seleccionado' },
        { token: '$qt-radio-hover-border', value: '$qt-secondary-300 (#be8cec)', usage: 'Hover borde radio' },
        { token: '$qt-radio-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde radio default' },
        { token: '$qt-radio-icon-color', value: '$qt-white-base (#ffffff)', usage: 'Color icono radio' },
        { token: '$qt-radio-focus-ring', value: 'rgba(158, 84, 226, 0.2)', usage: 'Sombra de focus' },
      ]
    },
    {
      title: 'Radio Tab',
      tokens: [
        { token: '$qt-radio-tab-height', value: '36px', usage: 'Altura radio tab' },
        { token: '$qt-radio-tab-border-radius', value: '12px', usage: 'Border radius radio tab' },
        { token: '$qt-radio-tab-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color texto inactivo' },
        { token: '$qt-radio-tab-active-border', value: '$qt-secondary-500 (#9e54e2)', usage: 'Borde tab activo' },
        { token: '$qt-radio-tab-active-color', value: '$qt-secondary-500 (#9e54e2)', usage: 'Color texto activo' },
        { token: '$qt-radio-tab-active-bg', value: '$qt-secondary-50 (#f5eefc)', usage: 'Fondo tab activo' },
        { token: '$qt-radio-tab-font-size', value: '14px', usage: 'Tamano de fuente radio tab' },
        { token: '$qt-radio-tab-font-weight', value: '700', usage: 'Peso de fuente radio tab' },
        { token: '$qt-radio-tab-hover-color', value: '$qt-grey-500 (#3d3d3d)', usage: 'Color texto en hover' },
      ]
    },
    {
      title: 'Status Badge',
      tokens: [
        { token: '$qt-badge-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde del badge' },
        { token: '$qt-badge-border-radius', value: '50px', usage: 'Border radius pill' },
        { token: '$qt-badge-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-badge-font-size', value: '14px', usage: 'Tamano de fuente' },
        { token: '$qt-badge-font-weight', value: '600', usage: 'Peso de fuente' },
        { token: '$qt-badge-text-color', value: '$qt-grey-500 (#3d3d3d)', usage: 'Color texto badge' },
        { token: '$qt-badge-padding', value: '4px 10px', usage: 'Padding' },
        { token: '$qt-badge-gap', value: '10px', usage: 'Gap entre dot y texto' },
        { token: '$qt-badge-dot-size', value: '10px', usage: 'Tamano dot indicador' },
        { token: '$qt-badge-height-small', value: '30px', usage: 'Altura badge small' },
        { token: '$qt-badge-height-large', value: '36px', usage: 'Altura badge large' },
        { token: '$qt-badge-positiva', value: '$qt-success-400 (#3ace76)', usage: 'Dot positiva (verde)' },
        { token: '$qt-badge-negativa', value: '$qt-error-400 (#fc3e3e)', usage: 'Dot negativa (rojo)' },
        { token: '$qt-badge-neutra', value: '$qt-warning-400 (#ff962c)', usage: 'Dot neutra (naranja)' },
        { token: '$qt-badge-desactivado', value: '$qt-grey-200 (#a6a6a6)', usage: 'Dot desactivado (gris)' },
      ]
    },
    {
      title: 'Chips',
      tokens: [
        { token: '$qt-chip-height', value: '26px', usage: 'Altura del chip' },
        { token: '$qt-chip-border-radius', value: '23px', usage: 'Border radius chip' },
        { token: '$qt-chip-white-bg', value: '$qt-white-base (#ffffff)', usage: 'Fondo chip white' },
        { token: '$qt-chip-white-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde chip white' },
        { token: '$qt-chip-white-color', value: '$qt-grey-500 (#3d3d3d)', usage: 'Texto chip white' },
        { token: '$qt-chip-primary-bg', value: '$qt-primary-100 (#b0ceff)', usage: 'Fondo chip primary' },
        { token: '$qt-chip-primary-color', value: '$qt-primary-500 (#0061fe)', usage: 'Texto chip primary' },
        { token: '$qt-chip-secondary-bg', value: '$qt-secondary-100 (#e1caf6)', usage: 'Fondo chip secondary' },
        { token: '$qt-chip-secondary-color', value: '$qt-secondary-500 (#9e54e2)', usage: 'Texto chip secondary' },
        { token: '$qt-chip-disabled-bg', value: '$qt-grey-50 (#ececec)', usage: 'Fondo chip disabled' },
        { token: '$qt-chip-disabled-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde chip disabled' },
        { token: '$qt-chip-disabled-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Texto chip disabled' },
        { token: '$qt-chip-add-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde boton agregar' },
        { token: '$qt-chip-add-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color boton agregar' },
        { token: '$qt-chip-add-hover-border', value: '$qt-primary-500 (#0061fe)', usage: 'Hover borde agregar' },
        { token: '$qt-chip-add-hover-color', value: '$qt-primary-500 (#0061fe)', usage: 'Hover color agregar' },
        { token: '$qt-chip-font-family', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-chip-font-size', value: '14px', usage: 'Tamano de fuente' },
        { token: '$qt-chip-font-weight', value: '600', usage: 'Peso de fuente del chip' },
        { token: '$qt-chip-padding', value: '6px 11px', usage: 'Padding del chip' },
        { token: '$qt-chip-gap', value: '10px', usage: 'Gap entre dot/icono y texto' },
      ]
    },
    {
      title: 'Toaster',
      tokens: [
        { token: '$qt-toast-border-radius', value: '10px', usage: 'Border radius del toast' },
        { token: '$qt-toast-accent-width', value: '13px', usage: 'Ancho de la barra lateral de color' },
        { token: '$qt-toast-shadow', value: '0 8px 32px rgba(#000, 0.08)', usage: 'Sombra del toast' },
        { token: '$qt-toast-success-stripe', value: '$qt-success-400 (#3ace76)', usage: 'Barra lateral success' },
        { token: '$qt-toast-success-bg', value: '$qt-success-50 (#ebfaf1)', usage: 'Background icono success' },
        { token: '$qt-toast-success-color', value: '$qt-success-400 (#3ace76)', usage: 'Color icono success' },
        { token: '$qt-toast-warning-stripe', value: '$qt-warning-400 (#ff962c)', usage: 'Barra lateral warning' },
        { token: '$qt-toast-warning-bg', value: '$qt-warning-50 (#fff5ea)', usage: 'Background icono warning' },
        { token: '$qt-toast-warning-color', value: '$qt-warning-400 (#ff962c)', usage: 'Color icono warning' },
        { token: '$qt-toast-error-stripe', value: '$qt-error-400 (#fc3e3e)', usage: 'Barra lateral error' },
        { token: '$qt-toast-error-bg', value: '$qt-error-50 (#ffecec)', usage: 'Background icono error' },
        { token: '$qt-toast-error-color', value: '$qt-error-400 (#fc3e3e)', usage: 'Color icono error' },
        { token: '$qt-toast-info-stripe', value: '$qt-primary-500 (#0061fe)', usage: 'Barra lateral info' },
        { token: '$qt-toast-info-bg', value: '$qt-primary-50 (#e6efff)', usage: 'Background icono info' },
        { token: '$qt-toast-info-color', value: '$qt-primary-500 (#0061fe)', usage: 'Color icono info' },
        { token: '$qt-toast-title-color', value: '$qt-grey-800 (#222222)', usage: 'Color titulo' },
        { token: '$qt-toast-message-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color mensaje' },
        { token: '$qt-toast-close-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color boton cerrar' },
      ]
    },
    {
      title: 'Select Segment',
      tokens: [
        { token: '$qt-select-seg-border-color', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde de los segmentos' },
        { token: '$qt-select-seg-selected-bg', value: '$qt-secondary-50 (#f5eefc)', usage: 'Background cuando esta seleccionado' },
        { token: '$qt-select-seg-selected-border', value: '$qt-secondary-500 (#9e54e2)', usage: 'Borde cuando esta seleccionado' },
        { token: '$qt-select-seg-hover-border', value: '$qt-secondary-500 (#9e54e2)', usage: 'Borde en hover (morado)' },
        { token: '$qt-select-seg-chip-radius', value: '23px', usage: 'Border radius de chips en segmentos' },
        { token: '$qt-select-colorpicker-dot-size', value: '25px', usage: 'Tamano del dot de color' },
        { token: '$qt-select-user-avatar-size-lg', value: '36px', usage: 'Tamano de avatar (large)' },
      ]
    },
    {
      title: 'Confirm Modal',
      tokens: [
        { token: '$qt-confirm-modal-border-radius', value: '12px', usage: 'Border radius del confirm modal' },
        { token: '$qt-confirm-modal-max-width', value: '700px', usage: 'Ancho maximo del modal' },
        { token: '$qt-confirm-modal-icon-size', value: '56px', usage: 'Tamano del icono circular' },
        { token: '$qt-confirm-general-btn-bg', value: '$qt-primary-500 (#0061fe)', usage: 'Boton variante general (azul)' },
        { token: '$qt-confirm-confirmation-icon-color', value: '$qt-success-400 (#3ace76)', usage: 'Icono variante confirmacion (verde)' },
        { token: '$qt-confirm-alert-btn-bg', value: '$qt-warning-400 (#ff962c)', usage: 'Boton variante alerta (naranja)' },
        { token: '$qt-confirm-error-btn-bg', value: '$qt-error-400 (#fc3e3e)', usage: 'Boton variante error (rojo)' },
      ]
    },
    {
      title: 'Code Modal',
      tokens: [
        { token: '$qt-code-modal-border-radius', value: '24px', usage: 'Border radius del code modal' },
        { token: '$qt-code-modal-icon-bg', value: '$qt-warning-50 (#fff5ea)', usage: 'Background del icono warning' },
        { token: '$qt-code-modal-icon-color', value: '$qt-warning-400 (#ff962c)', usage: 'Color del icono warning' },
        { token: '$qt-code-modal-btn-bg', value: '$qt-error-400 (#fc3e3e)', usage: 'Boton de confirmacion destructiva' },
        { token: '$qt-code-modal-code-size', value: '40px', usage: 'Tamano del codigo de verificacion' },
      ]
    },
    {
      title: 'Stepper',
      tokens: [
        { token: '$qt-stepper-track-height', value: '5px', usage: 'Altura de la barra de progreso' },
        { token: '$qt-stepper-track-bg', value: '$qt-grey-50 (#ececec)', usage: 'Background del track' },
        { token: '$qt-stepper-progress-bg', value: '$qt-primary-500 (#0061fe)', usage: 'Color de la barra de progreso' },
        { token: '$qt-stepper-track-radius', value: '10px', usage: 'Border radius del track' },
        { token: '$qt-stepper-label-font', value: "'DM Sans', sans-serif", usage: 'Familia tipografica label' },
        { token: '$qt-stepper-label-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color del texto del paso' },
      ]
    },
    {
      title: 'TextArea',
      tokens: [
        { token: '$qt-textarea-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde del textarea' },
        { token: '$qt-textarea-border-focus', value: '$qt-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$qt-textarea-border-radius', value: '10px', usage: 'Border radius del textarea' },
        { token: '$qt-textarea-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-textarea-font-size', value: '16px', usage: 'Tamano de fuente' },
        { token: '$qt-textarea-label-color', value: '$qt-grey-800 (#222222)', usage: 'Color del label' },
        { token: '$qt-textarea-placeholder-color', value: '$qt-grey-200 (#a6a6a6)', usage: 'Color del placeholder' },
        { token: '$qt-textarea-padding', value: '12px 16px', usage: 'Padding' },
        { token: '$qt-textarea-disabled-opacity', value: '0.5', usage: 'Opacidad en disabled' },
      ]
    },
    {
      title: 'Number Input',
      tokens: [
        { token: '$qt-number-input-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde del contenedor' },
        { token: '$qt-number-input-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$qt-number-input-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$qt-number-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$qt-number-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$qt-number-input-btn-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color de botones -/+' },
        { token: '$qt-number-input-btn-hover', value: '$qt-primary-500 (#0061fe)', usage: 'Color de botones en hover' },
        { token: '$qt-number-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-number-input-font-weight', value: '600', usage: 'Peso de fuente' },
      ]
    },
    {
      title: 'Account Counter',
      tokens: [
        { token: '$qt-counter-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde del badge' },
        { token: '$qt-counter-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$qt-counter-icon-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color del icono User' },
        { token: '$qt-counter-text-color', value: '$qt-grey-800 (#222222)', usage: 'Color del numero' },
        { token: '$qt-counter-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-counter-font-weight', value: '600', usage: 'Peso de fuente' },
        { token: '$qt-counter-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$qt-counter-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$qt-counter-height-sm', value: '36px', usage: 'Altura small' },
      ]
    },
    {
      title: 'Select Date',
      tokens: [
        { token: '$qt-select-date-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde del trigger' },
        { token: '$qt-select-date-border-radius', value: '12px', usage: 'Border radius del trigger' },
        { token: '$qt-select-date-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-select-date-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$qt-select-date-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$qt-select-date-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$qt-select-date-dropdown-shadow', value: '0 4px 15px rgba(#000, 0.12)', usage: 'Sombra dropdown' },
        { token: '$qt-select-date-day-selected-bg', value: '$qt-primary-500 (#0061fe)', usage: 'Background dia seleccionado' },
        { token: '$qt-select-date-day-other-color', value: '$qt-grey-100 (#c3c3c3)', usage: 'Color dias de otro mes' },
      ]
    },
    {
      title: 'Hour Date Picker',
      tokens: [
        { token: '$qt-hour-picker-spinner-gap', value: '18px', usage: 'Gap entre spinners' },
        { token: '$qt-hour-picker-chevron-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color flechas' },
        { token: '$qt-hour-picker-chevron-hover', value: '$qt-grey-500 (#3d3d3d)', usage: 'Hover flechas' },
        { token: '$qt-hour-picker-value-color', value: '$qt-grey-800 (#222222)', usage: 'Color valor' },
        { token: '$qt-hour-picker-divider', value: '$qt-grey-50 (#ececec)', usage: 'Color separador' },
      ]
    },
    {
      title: 'Select',
      tokens: [
        { token: '$qt-select-bg', value: '$qt-white-base (#ffffff)', usage: 'Background del select' },
        { token: '$qt-select-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde del select' },
        { token: '$qt-select-border-focus', value: '$qt-primary-500 (#0061fe)', usage: 'Borde en focus/abierto' },
        { token: '$qt-select-border-radius', value: '10px', usage: 'Border radius' },
        { token: '$qt-select-height-lg', value: '48px', usage: 'Altura large' },
        { token: '$qt-select-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$qt-select-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$qt-select-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-select-placeholder-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color del placeholder' },
        { token: '$qt-select-text-color', value: '$qt-grey-800 (#222222)', usage: 'Color del texto seleccionado' },
        { token: '$qt-select-icon-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color iconos' },
        { token: '$qt-select-dropdown-shadow', value: '0 4px 12px rgba(#000, 0.1)', usage: 'Sombra dropdown' },
        { token: '$qt-select-option-hover-bg', value: '$qt-neutral-50 (#fafafa)', usage: 'Hover opcion' },
        { token: '$qt-select-disabled-bg', value: '$qt-grey-100 (#c3c3c3)', usage: 'Background disabled' },
        { token: '$qt-select-disabled-text', value: '$qt-grey-200 (#a6a6a6)', usage: 'Texto disabled' },
      ]
    },
    {
      title: 'Search Input',
      tokens: [
        { token: '$qt-search-input-bg', value: '$qt-white-base (#ffffff)', usage: 'Background del input' },
        { token: '$qt-search-input-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde del input' },
        { token: '$qt-search-input-border-focus', value: '$qt-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$qt-search-input-border-radius', value: '50px', usage: 'Pill shape' },
        { token: '$qt-search-input-height-lg', value: '50px', usage: 'Altura large' },
        { token: '$qt-search-input-height-md', value: '40px', usage: 'Altura medium' },
        { token: '$qt-search-input-height-sm', value: '36px', usage: 'Altura small' },
        { token: '$qt-search-input-icon-color', value: '$qt-grey-200 (#a6a6a6)', usage: 'Color del icono search' },
        { token: '$qt-search-input-placeholder-color', value: '$qt-grey-200 (#a6a6a6)', usage: 'Color placeholder' },
        { token: '$qt-search-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-search-input-font-weight', value: '500', usage: 'Peso de fuente' },
        { token: '$qt-search-input-disabled-bg', value: '$qt-grey-100 (#c3c3c3)', usage: 'Background disabled' },
        { token: '$qt-search-input-disabled-text', value: '$qt-grey-200 (#a6a6a6)', usage: 'Texto disabled' },
      ]
    },
    {
      title: 'Text Input',
      tokens: [
        { token: '$qt-text-input-border', value: '$qt-grey-100 (#c3c3c3)', usage: 'Borde del input' },
        { token: '$qt-text-input-border-focus', value: '$qt-primary-500 (#0061fe)', usage: 'Borde en focus' },
        { token: '$qt-text-input-border-error', value: '$qt-error-400 (#fc3e3e)', usage: 'Borde en estado de error' },
        { token: '$qt-text-input-border-radius', value: '10px', usage: 'Border radius de inputs' },
        { token: '$qt-text-input-height-lg', value: '48px', usage: 'Altura del input large' },
        { token: '$qt-text-input-height-md', value: '40px', usage: 'Altura del input medium' },
        { token: '$qt-text-input-height-sm', value: '36px', usage: 'Altura del input small' },
        { token: '$qt-text-input-font', value: "'Urbanist', sans-serif", usage: 'Familia tipografica' },
        { token: '$qt-text-input-label-color', value: '$qt-grey-800 (#222222)', usage: 'Color label' },
        { token: '$qt-text-input-placeholder-color', value: '$qt-grey-200 (#a6a6a6)', usage: 'Color placeholder' },
        { token: '$qt-text-input-icon-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color iconos' },
      ]
    },
    {
      title: 'Card',
      tokens: [
        { token: '$qt-card-bg', value: '$qt-white-base (#ffffff)', usage: 'Background de la card' },
        { token: '$qt-card-border', value: '$qt-grey-50 (#ececec)', usage: 'Borde de la card' },
        { token: '$qt-card-border-radius', value: '16px', usage: 'Border radius' },
        { token: '$qt-card-padding-simple', value: '24px', usage: 'Padding variante simple' },
        { token: '$qt-card-padding-large', value: '32px', usage: 'Padding variante large' },
        { token: '$qt-card-title-color', value: '$qt-grey-800 (#222222)', usage: 'Color del titulo' },
        { token: '$qt-card-title-size-titled', value: '20px', usage: 'Tamano titulo titled' },
        { token: '$qt-card-title-size-large', value: '24px', usage: 'Tamano titulo large' },
      ]
    },
    {
      title: 'Menu',
      tokens: [
        { token: '$qt-menu-bg', value: '$qt-white-base (#ffffff)', usage: 'Background del menu' },
        { token: '$qt-menu-border', value: '$qt-grey-50 (#ececec)', usage: 'Borde del menu' },
        { token: '$qt-menu-border-radius', value: '12px', usage: 'Border radius' },
        { token: '$qt-menu-item-hover', value: '$qt-neutral-50 (#fafafa)', usage: 'Hover de items' },
        { token: '$qt-menu-item-color', value: '$qt-grey-500 (#3d3d3d)', usage: 'Color texto items' },
        { token: '$qt-menu-icon-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color iconos' },
        { token: '$qt-menu-radio-active', value: '$qt-secondary-500 (#9e54e2)', usage: 'Radio seleccionado' },
        { token: '$qt-menu-checkbox-active', value: '$qt-secondary-500 (#9e54e2)', usage: 'Checkbox seleccionado' },
      ]
    },
    {
      title: 'Avatar',
      tokens: [
        { token: '$qt-avatar-border-radius', value: '50%', usage: 'Forma circular' },
        { token: '$qt-avatar-size-xlarge', value: '50px', usage: 'Tamano extra large' },
        { token: '$qt-avatar-size-large', value: '36px', usage: 'Tamano large' },
        { token: '$qt-avatar-size-medium', value: '26px', usage: 'Tamano medium' },
        { token: '$qt-avatar-size-small', value: '18px', usage: 'Tamano small' },
        { token: '$qt-avatar-badge-size', value: '16px', usage: 'Tamano badge de plataforma' },
        { token: '$qt-avatar-badge-border', value: '$qt-white-base (#ffffff)', usage: 'Borde del badge' },
      ]
    },
    {
      title: 'Métricas (Bar Charts)',
      tokens: [
        { token: '$qt-bar-primary-from', value: '$qt-primary-300 (#5495fe)', usage: 'Gradiente inicio primary' },
        { token: '$qt-bar-primary-to', value: '$qt-primary-500 (#0061fe)', usage: 'Gradiente fin primary' },
        { token: '$qt-bar-secondary-from', value: '$qt-secondary-300 (#be8cec)', usage: 'Gradiente inicio secondary' },
        { token: '$qt-bar-secondary-to', value: '$qt-secondary-500 (#9e54e2)', usage: 'Gradiente fin secondary' },
        { token: '$qt-bar-size-large', value: '78px', usage: 'Ancho barra large' },
        { token: '$qt-bar-size-medium', value: '35px', usage: 'Ancho barra medium' },
        { token: '$qt-bar-size-small', value: '17px', usage: 'Ancho barra small' },
        { token: '$qt-bar-size-xsmall', value: '8px', usage: 'Ancho barra x-small' },
        { token: '$qt-bar-label-color', value: '$qt-grey-300 (#7d7d7d)', usage: 'Color labels' },
        { token: '$qt-sparkline-primary-color', value: '$qt-primary-500 (#0061fe)', usage: 'Color linea primary' },
        { token: '$qt-sparkline-secondary-color', value: '$qt-secondary-500 (#9e54e2)', usage: 'Color linea secondary' },
        { token: '$qt-donut-stroke-width', value: '30px', usage: 'Grosor segmentos dona' },
        { token: '$qt-trend-up-color', value: '$qt-success-400 (#3ace76)', usage: 'Color indicador positivo' },
        { token: '$qt-trend-down-color', value: '$qt-error-400 (#fc3e3e)', usage: 'Color indicador negativo' },
      ]
    },
    {
      title: 'Table',
      tokens: [
        { token: '$qt-table-bg', value: '$qt-white-base (#ffffff)', usage: 'Background de la tabla' },
        { token: '$qt-table-border-color', value: '$qt-grey-50 (#ececec)', usage: 'Borde de filas' },
        { token: '$qt-table-header-color', value: '$qt-grey-500 (#3d3d3d)', usage: 'Color texto header' },
        { token: '$qt-table-body-color', value: '$qt-grey-500 (#3d3d3d)', usage: 'Color texto body' },
        { token: '$qt-table-title-color', value: '$qt-grey-800 (#222222)', usage: 'Color titulo tabla' },
        { token: '$qt-table-title-size', value: '24px', usage: 'Tamano titulo' },
        { token: '$qt-table-row-height', value: '44px', usage: 'Altura de filas' },
        { token: '$qt-table-cell-padding', value: '10px 20px', usage: 'Padding de celdas' },
        { token: '$qt-table-hover-bg', value: '$qt-neutral-50 (#fafafa)', usage: 'Background hover de fila' },
        { token: '$qt-table-action-icon-color', value: '$qt-grey-800 (#222222)', usage: 'Color icono acciones' },
      ]
    },
    {
      title: 'Dashboard UI',
      tokens: [
        { token: '$qt-code-block-bg', value: '#1e1e2e', usage: 'Background code blocks' },
        { token: '$qt-code-block-text', value: '#cdd6f4', usage: 'Color texto code blocks' },
        { token: '$qt-ui-label-color', value: '#8e98a8', usage: 'Color labels UI del dashboard' },
        { token: '$qt-ui-light-bg', value: '#f5f5f5', usage: 'Background inline code' },
        { token: '$qt-swatch-border', value: '#e9ebf8', usage: 'Borde color swatches' },
      ]
    },
  ];

  // ═══════════════════════════════════════
  // Component API Docs
  // ═══════════════════════════════════════
  readonly componentDocs: ComponentDoc[] = [
    {
      name: 'Toaster',
      selector: '<div class="qt-sg__toaster">',
      description: 'Notificacion tipo toast con barra lateral de color, icono circular y boton de cierre. 4 variantes.',
      inputs: [
        { name: 'variant', type: "'success' | 'warning' | 'error' | 'info'", default: "'success'", description: 'Tipo de notificacion' },
        { name: 'title', type: 'string', default: '-', description: 'Titulo del toaster' },
        { name: 'message', type: 'string', default: '-', description: 'Mensaje descriptivo' },
        { name: '(dismissed)', type: 'EventEmitter<void>', default: '-', description: 'Evento al cerrar el toaster' },
      ],
      codeExample: `<div class="qt-sg__toaster qt-sg__toaster--success">
  <div class="qt-sg__toaster-stripe"></div>
  <div class="qt-sg__toaster-icon-wrap">
    <lucide-icon [img]="CircleCheckBigIcon" [size]="28"></lucide-icon>
  </div>
  <div class="qt-sg__toaster-content">
    <p class="qt-sg__toaster-title">¡Todo bien!</p>
    <p class="qt-sg__toaster-message">Operacion completada.</p>
  </div>
  <button class="qt-sg__toaster-close" (click)="dismiss()">
    <lucide-icon [img]="XIcon" [size]="20"></lucide-icon>
  </button>
</div>`
    },
    {
      name: 'Confirm Modal',
      selector: '<app-confirm-modal>',
      description: 'Modal de confirmacion con 4 variantes: general (azul), confirmation (verde), alert (morado), error (rojo).',
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
  message="¿Estas seguro?"
  [visible]="showModal"
  (confirmed)="onConfirm()"
  (cancelled)="showModal = false">
</app-confirm-modal>`
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
</app-stepper>`
    },
    {
      name: 'TextArea',
      selector: '<app-textarea>',
      description: 'Textarea con label, placeholder, estados y soporte para Reactive Forms.',
      inputs: [
        { name: 'label', type: 'string', default: '-', description: 'Texto del label superior' },
        { name: 'placeholder', type: 'string', default: '-', description: 'Texto placeholder' },
        { name: 'rows', type: 'number', default: '3', description: 'Cantidad de filas visibles' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el textarea' },
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
      description: 'Input numerico con 2 variantes: buttons (-/+) y spinner (flechas). 3 tamanos.',
      inputs: [
        { name: 'value', type: 'number', default: '0', description: 'Valor actual' },
        { name: 'variant', type: "'buttons' | 'spinner'", default: "'buttons'", description: 'Variante visual' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano' },
        { name: 'min', type: 'number', default: '-Infinity', description: 'Valor minimo' },
        { name: 'max', type: 'number', default: 'Infinity', description: 'Valor maximo' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el input' },
      ],
      codeExample: `<app-number-input
  [(value)]="quantity"
  variant="buttons"
  [min]="0" [max]="100"
  size="large">
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
      ],
      codeExample: `<app-select-date
  label="Fecha de inicio"
  size="large"
  [(value)]="startDate">
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
      ],
      codeExample: `<app-hour-date-picker
  label="Fecha de publicacion"
  size="large"
  [(value)]="publishDate">
</app-hour-date-picker>`
    },
    {
      name: 'Select',
      selector: '<app-select>',
      description: 'Select personalizado con soporte para iconos, tamanos, estados y Reactive Forms.',
      inputs: [
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano del select' },
        { name: 'label', type: 'string', default: '-', description: 'Texto del label superior' },
        { name: 'placeholder', type: 'string', default: '-', description: 'Placeholder' },
        { name: '[options]', type: 'SelectOption[]', default: '[]', description: 'Array de opciones' },
        { name: '[leftIcon]', type: 'LucideIconData', default: '-', description: 'Icono a la izquierda' },
        { name: '[formControl]', type: 'FormControl', default: '-', description: 'Control de Reactive Forms' },
      ],
      codeExample: `<app-select
  size="large"
  label="Plataforma"
  placeholder="Selecciona"
  [options]="platformOptions"
  [leftIcon]="GlobeIcon">
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
        { name: '(cleared)', type: 'EventEmitter<void>', default: '-', description: 'Evento al limpiar' },
      ],
      codeExample: `<app-search-input
  size="large"
  placeholder="Buscar reportes..."
  (search)="onSearch($event)"
  (cleared)="onClearSearch()">
</app-search-input>`
    },
    {
      name: 'Text Input',
      selector: '<app-text-input>',
      description: 'Input de texto con label, iconos, estados de error y soporte para Reactive Forms.',
      inputs: [
        { name: 'type', type: "'text' | 'email' | 'number' | 'password'", default: "'text'", description: 'Tipo de input' },
        { name: 'size', type: "'small' | 'medium' | 'large'", default: "'large'", description: 'Tamano' },
        { name: 'label', type: 'string', default: '-', description: 'Texto del label' },
        { name: 'placeholder', type: 'string', default: '-', description: 'Placeholder' },
        { name: '[leftIcon]', type: 'LucideIconData', default: '-', description: 'Icono izquierdo' },
        { name: '[rightIcon]', type: 'LucideIconData', default: '-', description: 'Icono derecho' },
        { name: 'errorMessage', type: 'string', default: '-', description: 'Mensaje de error' },
        { name: 'disabled', type: 'boolean', default: 'false', description: 'Deshabilita el input' },
      ],
      codeExample: `<app-text-input
  size="large"
  label="Email"
  placeholder="correo@ejemplo.com"
  type="email"
  [leftIcon]="MailIcon">
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

  // ═══════════════════════════════════════
  // Methods
  // ═══════════════════════════════════════
  isSectionVisible(sectionId: string): boolean {
    if (!this.searchQuery) return true;
    const q = this.searchQuery.toLowerCase();
    const section = this.sections.find(s => s.id === sectionId);
    if (!section) return false;
    if (section.label.toLowerCase().includes(q)) return true;
    if (section.keywords.some(k => k.includes(q))) return true;
    if (sectionId === 'colors') {
      return this.palettes.some(p =>
        p.title.toLowerCase().includes(q) ||
        p.swatches.some(s => s.name.includes(q) || s.hex.includes(q) || s.scssVar.includes(q))
      );
    }
    return false;
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
    this.copiedToken = text;
    setTimeout(() => { this.copiedToken = null; }, 1500);
  }

  clearSearch(): void {
    this.searchQuery = '';
  }

  toggleNavDropdown(): void {
    this.navDropdownOpen = !this.navDropdownOpen;
  }

  scrollToSection(sectionId: string): void {
    this.navDropdownOpen = false;
    const el = document.getElementById('qt-' + sectionId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  toggleCode(name: string): void {
    this.expandedCode[name] = !this.expandedCode[name];
  }

  copyCode(code: string, name: string): void {
    navigator.clipboard.writeText(code);
    this.copiedCode = name;
    setTimeout(() => this.copiedCode = null, 2000);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.headerScrolled = window.scrollY > 20;
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.qt-sg__nav-select-wrapper')) {
      this.navDropdownOpen = false;
    }
    this.tokenDropdownOpen = false;
    this.openTableMenuId = null;
  }

  extractColor(value: string): string | null {
    const match = value.match(/#[0-9a-fA-F]{3,8}/);
    return match ? match[0] : null;
  }

  isStandaloneColor(value: string): boolean {
    return !value.startsWith('$qt-') && /^#[0-9a-fA-F]{3,8}$/.test(value.trim());
  }

  isLightColor(hex: string): boolean {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6;
  }
}

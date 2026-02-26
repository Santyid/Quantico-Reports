import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ChevronLeft, ChevronRight, Check, Mail, Phone, Bell, ChevronDown, CircleAlert, History } from 'lucide-angular';
import { TextInputComponent } from '../ui/text-input/text-input.component';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { ChannelSelectorComponent, ChannelOption } from '../ui/channel-selector/channel-selector.component';
import { ButtonComponent } from '../ui/button/button.component';
import { ChipInputComponent } from '../ui/chip-input/chip-input.component';

interface DayOption {
  label: string;
  short: string;
  selected: boolean;
}

@Component({
  selector: 'app-crear-alerta-v2',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    TextInputComponent,
    SelectComponent,
    ChannelSelectorComponent,
    ButtonComponent,
    ChipInputComponent
  ],
  templateUrl: './crear-alerta-v2.component.html',
  styleUrl: './crear-alerta-v2.component.scss'
})
export class CrearAlertaV2Component {
  // Icons
  readonly BackIcon = ChevronLeft;
  readonly NextIcon = ChevronRight;
  readonly CheckIcon = Check;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly BellIcon = Bell;
  readonly ChevronDownIcon = ChevronDown;
  readonly AlertIcon = CircleAlert;
  readonly HistoryIcon = History;

  // Wizard state
  currentStep = 1;
  readonly totalSteps = 4;
  readonly steps = [
    { number: 1, label: 'Monitoreo' },
    { number: 2, label: 'Busqueda' },
    { number: 3, label: 'Horario' },
    { number: 4, label: 'Entrega' }
  ];

  // Step 1 - Monitoreo
  nombre = '';
  selectedChannels: string[] = [];
  selectedIdioma = '';

  readonly channelOptions: ChannelOption[] = [
    { value: 'instagram', label: 'Instagram', image: 'images/instagram-icon.svg' },
    { value: 'facebook', label: 'Facebook', image: 'images/facebook-icon.svg' },
    { value: 'twitter', label: 'X (Twitter)', image: 'images/x-twitter-icon.svg' },
    { value: 'tiktok', label: 'TikTok', image: 'images/tiktok-icon.svg' },
    { value: 'youtube', label: 'YouTube', image: 'images/youtube-icon.svg' },
    { value: 'meta-ads', label: 'Meta Ads', image: 'images/meta-ads-icon.svg' },
    { value: 'linkedin', label: 'LinkedIn', image: 'images/linkedin-icon.svg' },
    { value: 'linkedin-ads', label: 'LinkedIn Ads', image: 'images/linkedin-ads-icon.svg' },
    { value: 'play-store', label: 'Play Store', image: 'images/play-store-icon.svg' },
    { value: 'app-store', label: 'App Store', image: 'images/app-store-icon.svg' },
    { value: 'google-business', label: 'Google Business', image: 'images/google-my-business-logo.svg' }
  ];

  readonly idiomaOptions: SelectOption[] = [
    { value: 'es', label: 'Espanol' },
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Portugues' }
  ];

  // Step 2 - Busqueda
  selectedSegmento = '';
  selectedEtiquetas = '';
  selectedInfluencia = '';
  selectedOperador = '';
  query = '';
  selectedSentimiento = '';

  readonly segmentoOptions: SelectOption[] = [
    { value: 'todos', label: 'Todos' },
    { value: 'clientes', label: 'Clientes' },
    { value: 'prospectos', label: 'Prospectos' }
  ];

  readonly etiquetasOptions: SelectOption[] = [
    { value: 'todas', label: 'Todas' },
    { value: 'urgente', label: 'Urgente' },
    { value: 'importante', label: 'Importante' }
  ];

  readonly influenciaOptions: SelectOption[] = [
    { value: 'todas', label: 'Todas' },
    { value: 'alta', label: 'Alta' },
    { value: 'media', label: 'Media' },
    { value: 'baja', label: 'Baja' }
  ];

  readonly operadorOptions: SelectOption[] = [
    { value: 'o', label: 'o' },
    { value: 'y', label: 'y' }
  ];

  readonly sentimientoOptions: SelectOption[] = [
    { value: 'si', label: 'Si' },
    { value: 'no', label: 'No' }
  ];

  // Step 3 - Horario
  showAdvanced = false;
  showAdvancedStep2 = false;
  showRecentSearches = false;
  days: DayOption[] = [
    { label: 'Lun', short: 'L', selected: true },
    { label: 'Mar', short: 'M', selected: true },
    { label: 'Mie', short: 'M', selected: true },
    { label: 'Jue', short: 'J', selected: true },
    { label: 'Vie', short: 'V', selected: true },
    { label: 'Sab', short: 'S', selected: false },
    { label: 'Dom', short: 'D', selected: false }
  ];

  horaInicial = '09:00';
  horaFinal = '18:00';
  selectedZona = '';
  volumen = '';
  validoHasta = '';
  selectedEstado = '';
  limitado = true;

  readonly zonaHorariaOptions: SelectOption[] = [
    { value: 'utc-5', label: 'UTC -5 (EST)' },
    { value: 'utc-6', label: 'UTC -6 (CST)' },
    { value: 'utc-3', label: 'UTC -3 (ART)' },
    { value: 'utc+1', label: 'UTC +1 (CET)' }
  ];

  readonly estadoOptions: SelectOption[] = [
    { value: 'si', label: 'Si' },
    { value: 'no', label: 'No' }
  ];

  // Step 4 - Entrega
  emailEnabled = true;
  whatsappEnabled = false;
  showCC = false;
  showBCC = false;
  destinatarios: string[] = [];
  ccList: string[] = [];
  bccList: string[] = [];
  telefono = '';

  constructor(private router: Router) {}

  // Step info
  get stepTitle(): string {
    switch (this.currentStep) {
      case 1: return 'Que quieres monitorear?';
      case 2: return 'Que quieres buscar?';
      case 3: return 'Cuando quieres recibir las alertas?';
      case 4: return 'Como quieres recibir las notificaciones?';
      default: return '';
    }
  }

  get stepSubtitle(): string {
    switch (this.currentStep) {
      case 1: return 'Define el nombre de tu alerta';
      case 2: return 'Selecciona las redes y configura los filtros de busqueda';
      case 3: return 'Este paso es opcional. Configura los dias, horarios y limites';
      case 4: return 'Elige uno o ambos canales de entrega';
      default: return '';
    }
  }

  get isCurrentStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.nombre.trim().length >= 3;
      case 2:
        return true;
      case 3:
        return true;
      case 4:
        if (!this.emailEnabled && !this.whatsappEnabled) return false;
        if (this.emailEnabled && this.destinatarios.length === 0) return false;
        if (this.whatsappEnabled && this.telefono.trim() === '') return false;
        return true;
      default:
        return false;
    }
  }

  // Navigation
  nextStep(): void {
    if (this.isCurrentStepValid && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number): void {
    if (step < this.currentStep) {
      this.currentStep = step;
    }
  }

  goBack(): void {
    this.router.navigate(['/alertas']);
  }

  onCancel(): void {
    this.router.navigate(['/alertas']);
  }

  onCrear(): void {
    if (this.isCurrentStepValid) {
      this.router.navigate(['/alertas']);
    }
  }

  // Step 1 handlers
  onNombreChange(value: string | number): void {
    this.nombre = String(value);
  }

  onIdiomaChange(value: string | number): void {
    this.selectedIdioma = String(value);
  }

  // Step 2 handlers
  onSegmentoChange(value: string | number): void {
    this.selectedSegmento = String(value);
  }

  onEtiquetasChange(value: string | number): void {
    this.selectedEtiquetas = String(value);
  }

  onInfluenciaChange(value: string | number): void {
    this.selectedInfluencia = String(value);
  }

  onOperadorChange(value: string | number): void {
    this.selectedOperador = String(value);
  }

  onQueryChange(value: string | number): void {
    this.query = String(value);
  }

  onSentimientoChange(value: string | number): void {
    this.selectedSentimiento = String(value);
  }

  // Step 3 handlers
  toggleDay(index: number): void {
    this.days[index].selected = !this.days[index].selected;
  }

  onHoraInicialChange(event: Event): void {
    this.horaInicial = (event.target as HTMLInputElement).value;
  }

  onHoraFinalChange(event: Event): void {
    this.horaFinal = (event.target as HTMLInputElement).value;
  }

  onZonaChange(value: string | number): void {
    this.selectedZona = String(value);
  }

  onVolumenChange(value: string | number): void {
    this.volumen = String(value);
  }

  onValidoHastaChange(value: string | number): void {
    this.validoHasta = String(value);
  }

  onEstadoChange(value: string | number): void {
    this.selectedEstado = String(value);
  }

  toggleLimitado(): void {
    this.limitado = !this.limitado;
  }

  // Step 4 handlers
  toggleEmail(): void {
    this.emailEnabled = !this.emailEnabled;
    if (!this.emailEnabled) {
      this.destinatarios = [];
      this.ccList = [];
      this.bccList = [];
      this.showCC = false;
      this.showBCC = false;
    }
  }

  toggleWhatsapp(): void {
    this.whatsappEnabled = !this.whatsappEnabled;
    if (!this.whatsappEnabled) {
      this.telefono = '';
    }
  }

  onDestinatariosChange(chips: string[]): void {
    this.destinatarios = chips;
  }

  onCCChange(chips: string[]): void {
    this.ccList = chips;
  }

  onBCCChange(chips: string[]): void {
    this.bccList = chips;
  }

  onTelefonoChange(value: string | number): void {
    this.telefono = String(value);
  }

  toggleCC(): void {
    this.showCC = !this.showCC;
  }

  toggleBCC(): void {
    this.showBCC = !this.showBCC;
  }
}

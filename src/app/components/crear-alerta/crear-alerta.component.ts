import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, ChevronLeft, Check, CircleAlert, ChevronUp, Clock, Mail, Phone } from 'lucide-angular';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { ButtonComponent } from '../ui/button/button.component';

interface DayOption {
  label: string;
  short: string;
  selected: boolean;
}

@Component({
  selector: 'app-crear-alerta',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    SelectComponent,
    ButtonComponent
  ],
  templateUrl: './crear-alerta.component.html',
  styleUrl: './crear-alerta.component.scss'
})
export class CrearAlertaComponent {
  // Icons
  readonly BackIcon = ChevronLeft;
  readonly CheckIcon = Check;
  readonly AlertIcon = CircleAlert;
  readonly ChevronUpIcon = ChevronUp;
  readonly ClockIcon = Clock;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;

  // Card 1 - Basic info
  nombre = '';
  volumen = '';

  readonly tipoOptions: SelectOption[] = [
    { value: 'alerts', label: 'Alerts' },
    { value: 'reports', label: 'Reports' },
    { value: 'notifications', label: 'Notifications' }
  ];

  readonly sentimientoOptions: SelectOption[] = [
    { value: 'si', label: 'Si' },
    { value: 'no', label: 'No' }
  ];

  readonly idiomaOptions: SelectOption[] = [
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Português' }
  ];

  readonly formatoOptions: SelectOption[] = [
    { value: 'pdf', label: 'PDF' },
    { value: 'csv', label: 'CSV' },
    { value: 'excel', label: 'Excel' }
  ];

  readonly estadoOptions: SelectOption[] = [
    { value: 'si', label: 'Si' },
    { value: 'no', label: 'No' }
  ];

  limitado = true;
  validoHasta = '01/01/2026 00:00';

  // Card 2 - Schedule
  days: DayOption[] = [
    { label: 'Lun', short: 'L', selected: true },
    { label: 'Mar', short: 'M', selected: true },
    { label: 'Mie', short: 'M', selected: true },
    { label: 'Jue', short: 'J', selected: false },
    { label: 'Vie', short: 'V', selected: false },
    { label: 'Sab', short: 'S', selected: false },
    { label: 'Dom', short: 'D', selected: false }
  ];

  horaInicial = '00:00';
  horaFinal = '00:00';

  readonly zonaHorariaOptions: SelectOption[] = [
    { value: 'utc-5', label: 'UTC -5 (EST)' },
    { value: 'utc-6', label: 'UTC -6 (CST)' },
    { value: 'utc-3', label: 'UTC -3 (ART)' },
    { value: 'utc+1', label: 'UTC +1 (CET)' }
  ];

  // Card 3 - Búsqueda inteligente
  busquedaExpanded = true;

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

  readonly redesOptions: SelectOption[] = [
    { value: 'todas', label: 'Todas' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'twitter', label: 'Twitter' }
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

  // Card 4 - Email
  emailExpanded = true;
  destinatario = '';

  // Card 5 - WhatsApp
  whatsappExpanded = true;
  telefono = '';

  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/alertas']);
  }

  toggleDay(index: number): void {
    this.days[index].selected = !this.days[index].selected;
  }

  toggleBusqueda(): void {
    this.busquedaExpanded = !this.busquedaExpanded;
  }

  toggleEmail(): void {
    this.emailExpanded = !this.emailExpanded;
  }

  toggleWhatsapp(): void {
    this.whatsappExpanded = !this.whatsappExpanded;
  }

  toggleLimitado(): void {
    this.limitado = !this.limitado;
  }

  onCancel(): void {
    this.router.navigate(['/alertas']);
  }

  onCrear(): void {
    // Create alert logic
    this.router.navigate(['/alertas']);
  }

  onInputChange(event: Event, field: string): void {
    const value = (event.target as HTMLInputElement).value;
    (this as Record<string, unknown>)[field] = value;
  }
}

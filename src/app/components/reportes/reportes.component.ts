import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, FileBarChart, Calendar, Share2, Globe, FileText, Video, LayoutDashboard, Lightbulb, BarChart3, Users, TrendingUp, Target, MessageCircle, UserCheck, ChevronLeft, ChevronRight } from 'lucide-angular';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { TextInputComponent } from '../ui/text-input/text-input.component';
import { ButtonComponent } from '../ui/button/button.component';
import { ReportType } from './models/report.models';

// Section imports
import { ExecutiveSummary2Component } from './sections/executive-summary-2/executive-summary-2.component';
import { InsightsMarcaComponent } from './sections/insights-marca/insights-marca.component';
import { PerformancePlataformaComponent } from './sections/performance-plataforma/performance-plataforma.component';
import { AnalisisCompetitivoComponent } from './sections/analisis-competitivo/analisis-competitivo.component';
import { TendenciasComponent } from './sections/tendencias/tendencias.component';
import { RecomendacionesAreaComponent } from './sections/recomendaciones-area/recomendaciones-area.component';
import { VoiceOfCustomerComponent } from './sections/voice-of-customer/voice-of-customer.component';
import { UsuariosInfluyentesComponent } from './sections/usuarios-influyentes/usuarios-influyentes.component';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    SelectComponent,
    TextInputComponent,
    ButtonComponent,
    ExecutiveSummary2Component,
    InsightsMarcaComponent,
    PerformancePlataformaComponent,
    AnalisisCompetitivoComponent,
    TendenciasComponent,
    RecomendacionesAreaComponent,
    VoiceOfCustomerComponent,
    UsuariosInfluyentesComponent
  ],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {
  readonly HeaderIcon = FileBarChart;
  readonly CalendarIcon = Calendar;
  readonly ShareIcon = Share2;
  readonly GlobeIcon = Globe;
  readonly PdfIcon = FileText;
  readonly VideoIcon = Video;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;

  selectedReportType: ReportType = 'executive-summary';
  showShareDropdown = false;

  readonly reportTypeOptions: SelectOption[] = [
    { value: 'executive-summary', label: 'Executive Summary', icon: LayoutDashboard },
    { value: 'recomendaciones-area', label: 'Recomendaciones por Área', icon: Target },
    { value: 'insights-marca', label: 'Insights de Marca', icon: Lightbulb },
    { value: 'performance-plataforma', label: 'Performance por Plataforma', icon: BarChart3 },
    { value: 'voice-of-customer', label: 'Voice of Customer', icon: MessageCircle },
    { value: 'analisis-competitivo', label: 'Análisis Competitivo', icon: Users },
    { value: 'usuarios-influyentes', label: 'Análisis de Usuarios Influyentes', icon: UserCheck },
    { value: 'tendencias', label: 'Tendencias', icon: TrendingUp }
  ];

  // Subtitles and descriptions for each report section
  readonly reportMeta: Record<string, { subtitle: string; description: string }> = {
    'executive-summary': {
      subtitle: 'Vision general del periodo',
      description: 'Resumen ejecutivo con los KPIs mas relevantes, sentimiento general y temas destacados del periodo analizado.'
    },
    'recomendaciones-area': {
      subtitle: 'Acciones sugeridas por departamento',
      description: 'Recomendaciones estrategicas generadas por IA para cada area de la organizacion basadas en los datos de escucha social.'
    },
    'insights-marca': {
      subtitle: 'Percepcion y sentimiento de marca',
      description: 'Evolucion del sentimiento, drivers positivos y negativos que impactan la percepcion de tu marca.'
    },
    'performance-plataforma': {
      subtitle: 'Rendimiento por red social',
      description: 'Metricas de rendimiento, engagement y mejores publicaciones desglosadas por cada plataforma social.'
    },
    'voice-of-customer': {
      subtitle: 'La voz del consumidor',
      description: 'Analisis de los temas, opiniones y sentimientos expresados directamente por los consumidores.'
    },
    'analisis-competitivo': {
      subtitle: 'Posicionamiento vs competencia',
      description: 'Comparativa de Share of Voice, fortalezas y debilidades frente a los principales competidores.'
    },
    'usuarios-influyentes': {
      subtitle: 'Impacto de usuarios clave',
      description: 'Análisis de usuarios influyentes, promotores y detractores que impactan la conversación sobre tu marca.'
    },
    'tendencias': {
      subtitle: 'Temas emergentes y senales tempranas',
      description: 'Identificacion de tendencias en crecimiento, temas emergentes y senales tempranas relevantes para tu industria.'
    }
  };

  startDate = new Date(2025, 0, 1);
  endDate = new Date(2025, 0, 31);

  get startDateString(): string {
    return this.formatDateForInput(this.startDate);
  }

  get endDateString(): string {
    return this.formatDateForInput(this.endDate);
  }

  private formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onReportTypeChange(option: SelectOption | null): void {
    if (option) {
      this.selectedReportType = option.value as ReportType;
    }
  }

  onStartDateChange(value: string | number): void {
    if (value) {
      this.startDate = new Date(String(value));
    }
  }

  onEndDateChange(value: string | number): void {
    if (value) {
      this.endDate = new Date(String(value));
    }
  }

  toggleShareDropdown(): void {
    this.showShareDropdown = !this.showShareDropdown;
  }

  closeShareDropdown(): void {
    this.showShareDropdown = false;
  }

  onShareWeb(): void {
    console.log('Compartir Web');
    this.closeShareDropdown();
  }

  onSharePdf(): void {
    console.log('Compartir PDF');
    this.closeShareDropdown();
  }

  onShareVideo(): void {
    console.log('Compartir Video');
    this.closeShareDropdown();
  }

  // Navigation methods
  get currentReportIndex(): number {
    return this.reportTypeOptions.findIndex(opt => opt.value === this.selectedReportType);
  }

  get canNavigatePrev(): boolean {
    return this.currentReportIndex > 0;
  }

  get canNavigateNext(): boolean {
    return this.currentReportIndex < this.reportTypeOptions.length - 1;
  }

  navigateToPreviousReport(): void {
    if (this.canNavigatePrev) {
      const prevOption = this.reportTypeOptions[this.currentReportIndex - 1];
      this.selectedReportType = prevOption.value as ReportType;
    }
  }

  navigateToNextReport(): void {
    if (this.canNavigateNext) {
      const nextOption = this.reportTypeOptions[this.currentReportIndex + 1];
      this.selectedReportType = nextOption.value as ReportType;
    }
  }
}

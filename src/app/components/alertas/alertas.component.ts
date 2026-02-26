import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, SlidersHorizontal, CirclePlus, Search, ChevronLeft, ChevronRight, EllipsisVertical } from 'lucide-angular';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { StatusBadgeComponent } from '../ui/status-badge/status-badge.component';
import { ButtonComponent } from '../ui/button/button.component';

export interface AlertRow {
  id: number;
  nombre: string;
  volumen: number;
  dias: boolean[]; // [L, M, M, J, V, S, D]
  horaInicial: string;
  horaFinal: string;
  verSentimiento: boolean;
  vigente: string;
  estado: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    SelectComponent,
    StatusBadgeComponent,
    ButtonComponent
  ],
  templateUrl: './alertas.component.html',
  styleUrl: './alertas.component.scss'
})
export class AlertasComponent {
  // Icons
  readonly SlidersIcon = SlidersHorizontal;
  readonly PlusIcon = CirclePlus;
  readonly SearchIcon = Search;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  readonly EllipsisIcon = EllipsisVertical;

  // Day labels
  readonly dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  // Filter options
  readonly dateOptions: SelectOption[] = [
    { value: 'fecha-creacion', label: 'Fecha de creación' },
    { value: 'fecha-modificacion', label: 'Fecha de modificación' },
    { value: 'fecha-inicio', label: 'Fecha de inicio' }
  ];

  readonly tagOptions: SelectOption[] = [
    { value: 'todas', label: 'Por etiquetas' },
    { value: 'urgente', label: 'Urgente' },
    { value: 'importante', label: 'Importante' },
    { value: 'normal', label: 'Normal' }
  ];

  readonly itemsPerPageOptions: SelectOption[] = [
    { value: 6, label: '6' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' }
  ];

  // Search
  searchValue = '';

  // Pagination
  currentPage = 3;
  itemsPerPage = 6;
  totalItems = 120;

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  get canGoPrev(): boolean {
    return this.currentPage > 1;
  }

  get canGoNext(): boolean {
    return this.endItem < this.totalItems;
  }

  // Table data
  readonly alertas: AlertRow[] = [
    {
      id: 110,
      nombre: 'prueba alerta 12222',
      volumen: 2,
      dias: [true, true, true, true, true, true, true],
      horaInicial: '00:00 (-5)',
      horaFinal: '23:59 (-5)',
      verSentimiento: true,
      vigente: 'Limitado',
      estado: 'Activo'
    },
    {
      id: 110,
      nombre: 'Advocates general',
      volumen: 2,
      dias: [true, true, true, true, true, true, true],
      horaInicial: '00:00 (-5)',
      horaFinal: '23:59 (-5)',
      verSentimiento: false,
      vigente: 'Limitado',
      estado: 'Inactivo'
    },
    {
      id: 110,
      nombre: 'Cal email apra descargas...',
      volumen: 2,
      dias: [true, true, true, true, true, true, true],
      horaInicial: '00:00 (-5)',
      horaFinal: '23:59 (-5)',
      verSentimiento: false,
      vigente: 'Limitado',
      estado: 'Activo'
    },
    {
      id: 110,
      nombre: 'Asistentes IA generativa',
      volumen: 2,
      dias: [true, true, true, true, true, true, true],
      horaInicial: '00:00 (-5)',
      horaFinal: '23:59 (-5)',
      verSentimiento: false,
      vigente: 'Limitado',
      estado: 'Inactivo'
    },
    {
      id: 110,
      nombre: '¡40% para comenzar el año!',
      volumen: 2,
      dias: [true, true, true, true, true, true, true],
      horaInicial: '00:00 (-5)',
      horaFinal: '23:59 (-5)',
      verSentimiento: false,
      vigente: 'Limitado',
      estado: 'Activo'
    },
    {
      id: 110,
      nombre: '¡40% para comenzar el año!',
      volumen: 2,
      dias: [true, true, true, true, true, true, true],
      horaInicial: '00:00 (-5)',
      horaFinal: '23:59 (-5)',
      verSentimiento: false,
      vigente: 'Limitado',
      estado: 'Inactivo'
    }
  ];

  constructor(private router: Router) {}

  onAgregar(): void {
    this.router.navigate(['/alertas/crear-v2']);
  }

  getEstadoVariant(estado: string): 'success' | 'neutral' {
    switch (estado) {
      case 'Activo': return 'success';
      default: return 'neutral';
    }
  }

  onSearchInput(event: Event): void {
    this.searchValue = (event.target as HTMLInputElement).value;
  }

  onSearch(): void {
    // Filter logic
  }

  onPrevPage(): void {
    if (this.canGoPrev) {
      this.currentPage--;
    }
  }

  onNextPage(): void {
    if (this.canGoNext) {
      this.currentPage++;
    }
  }

  onItemsPerPageChange(option: SelectOption | null): void {
    if (option) {
      this.itemsPerPage = option.value as number;
      this.currentPage = 1;
    }
  }

  onMenuClick(alerta: AlertRow): void {
    // Menu action
  }
}

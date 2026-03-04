import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  LucideAngularModule,
  Layers,
  Plus,
  ArrowDownNarrowWide,
  ArrowUpNarrowWide,
  EllipsisVertical,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight
} from 'lucide-angular';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { SearchInputComponent } from '../ui/search-input/search-input.component';
import { StatusBadgeComponent } from '../ui/status-badge/status-badge.component';
import { ButtonComponent } from '../ui/button/button.component';

export interface SegmentoRow {
  id: number;
  nombre: string;
  limiteMenciones: number;
  fechaCreacion: string;
  fechaModificacion: string;
  estado: 'Activo' | 'Inactivo';
}

@Component({
  selector: 'app-segmentos',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    SelectComponent,
    SearchInputComponent,
    StatusBadgeComponent,
    ButtonComponent
  ],
  templateUrl: './segmentos.component.html',
  styleUrl: './segmentos.component.scss'
})
export class SegmentosComponent {
  // Icons
  readonly LayersIcon = Layers;
  readonly PlusIcon = Plus;
  readonly ArrowDownNarrowWideIcon = ArrowDownNarrowWide;
  readonly ArrowUpNarrowWideIcon = ArrowUpNarrowWide;
  readonly EllipsisIcon = EllipsisVertical;
  readonly PencilIcon = Pencil;
  readonly TrashIcon = Trash2;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;

  // Sort options
  readonly sortOptions: SelectOption[] = [
    { value: 'nombre', label: 'Nombre' },
    { value: 'fecha', label: 'Fecha de creación' }
  ];

  // Status filter options
  readonly statusOptions: SelectOption[] = [
    { value: 'all', label: 'Todos' },
    { value: 'activo', label: 'Activo' },
    { value: 'inactivo', label: 'Inactivo' }
  ];

  // Items per page options
  readonly itemsPerPageOptions: SelectOption[] = [
    { value: 6, label: '6' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' }
  ];

  // State
  searchValue = '';
  sortValue = '';
  statusFilter = '';
  sortDirection: 'asc' | 'desc' = 'desc';
  openMenuIndex: number | null = null;

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
  segmentos: SegmentoRow[] = [
    { id: 1, nombre: 'Prueba N1', limiteMenciones: 1000,  fechaCreacion: '17/02/2026 15:26', fechaModificacion: '17/02/2026 15:26', estado: 'Activo' },
    { id: 2, nombre: 'Prueba N2', limiteMenciones: 25000, fechaCreacion: '17/02/2026 15:26', fechaModificacion: '17/02/2026 15:26', estado: 'Activo' },
    { id: 3, nombre: 'Prueba N3', limiteMenciones: 1000,  fechaCreacion: '17/02/2026 15:26', fechaModificacion: '17/02/2026 15:26', estado: 'Activo' },
    { id: 4, nombre: 'Prueba N4', limiteMenciones: 25000, fechaCreacion: '17/02/2026 15:26', fechaModificacion: '17/02/2026 15:26', estado: 'Activo' },
    { id: 5, nombre: 'Prueba N5', limiteMenciones: 1000,  fechaCreacion: '17/02/2026 15:26', fechaModificacion: '17/02/2026 15:26', estado: 'Activo' },
    { id: 6, nombre: 'Prueba N6', limiteMenciones: 25000, fechaCreacion: '17/02/2026 15:26', fechaModificacion: '17/02/2026 15:26', estado: 'Activo' }
  ];

  get filteredSegmentos(): SegmentoRow[] {
    let result = [...this.segmentos];

    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      result = result.filter(s => s.nombre.toLowerCase().includes(q));
    }

    if (this.statusFilter && this.statusFilter !== 'all') {
      result = result.filter(s => s.estado.toLowerCase() === this.statusFilter);
    }

    if (this.sortValue === 'nombre') {
      result.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (this.sortValue === 'fecha') {
      result.sort((a, b) => a.fechaCreacion.localeCompare(b.fechaCreacion));
    }

    if (this.sortDirection === 'desc') {
      result.reverse();
    }

    return result;
  }

  constructor(private router: Router) {}

  @HostListener('document:click')
  onDocumentClick(): void {
    this.openMenuIndex = null;
  }

  onToggleSortDirection(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  onRowClick(segmento: SegmentoRow): void {
    this.router.navigate(['/segmentos/editar', segmento.id]);
  }

  onCrearSegmento(): void {
    this.router.navigate(['/segmentos/crear']);
  }

  goToCardView(): void {
    this.router.navigate(['/segmentos-cards']);
  }

  onSearchChange(value: string): void {
    this.searchValue = value;
  }

  onSortChange(option: SelectOption | null): void {
    this.sortValue = option ? String(option.value) : '';
  }

  onStatusFilterChange(option: SelectOption | null): void {
    this.statusFilter = option ? String(option.value) : '';
  }

  onToggleMenu(index: number): void {
    this.openMenuIndex = this.openMenuIndex === index ? null : index;
  }

  onEditarSegmento(segmento: SegmentoRow): void {
    this.openMenuIndex = null;
    this.router.navigate(['/segmentos/editar', segmento.id]);
  }

  onEliminarSegmento(segmento: SegmentoRow): void {
    this.openMenuIndex = null;
    if (confirm(`¿Eliminar el segmento "${segmento.nombre}"?`)) {
      this.segmentos = this.segmentos.filter(s => s.id !== segmento.id);
    }
  }

  getEstadoVariant(estado: string): 'success' | 'neutral' {
    return estado === 'Activo' ? 'success' : 'neutral';
  }

  formatMenciones(value: number): string {
    return value.toLocaleString('es');
  }

  onPrevPage(): void {
    if (this.canGoPrev) this.currentPage--;
  }

  onNextPage(): void {
    if (this.canGoNext) this.currentPage++;
  }

  onItemsPerPageChange(option: SelectOption | null): void {
    if (option) {
      this.itemsPerPage = option.value as number;
      this.currentPage = 1;
    }
  }
}

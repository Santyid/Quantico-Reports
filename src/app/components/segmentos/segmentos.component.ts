import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Layers,
  Plus,
  Search,
  X,
  EllipsisVertical,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight
} from 'lucide-angular';
import { ButtonComponent } from '../ui/button/button.component';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { StatusBadgeComponent } from '../ui/status-badge/status-badge.component';
import { ConfirmModalComponent } from '../ui/confirm-modal/confirm-modal.component';

export type SegmentoTab = 'activos' | 'inactivos';

export interface SegmentoCard {
  id: number;
  nombre: string;
  limiteMenciones: number;
  fechaCreacion: string;
  fechaModificacion: string;
  estado: 'Activo' | 'Inactivo';
  canales: string[];
  totalMenciones: number;
}

@Component({
  selector: 'app-segmentos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    ButtonComponent,
    SelectComponent,
    StatusBadgeComponent,
    ConfirmModalComponent
  ],
  templateUrl: './segmentos.component.html',
  styleUrl: './segmentos.component.scss'
})
export class SegmentosComponent {
  readonly LayersIcon = Layers;
  readonly PlusIcon = Plus;
  readonly SearchIcon = Search;
  readonly XIcon = X;
  readonly EllipsisIcon = EllipsisVertical;
  readonly PencilIcon = Pencil;
  readonly TrashIcon = Trash2;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;

  activeTab: SegmentoTab = 'activos';
  searchOpen = false;
  searchValue = '';
  openMenuId: number | null = null;

  // Pagination
  currentPage = 1;
  itemsPerPage = 6;

  readonly itemsPerPageOptions: SelectOption[] = [
    { value: 6, label: '6' },
    { value: 10, label: '10' },
    { value: 20, label: '20' }
  ];

  segmentos: SegmentoCard[] = [
    { id: 1,  nombre: 'Prueba N1',            limiteMenciones: 1000,  fechaCreacion: '17 Feb 2026', fechaModificacion: '17 Feb 2026', estado: 'Activo',   canales: ['facebook', 'instagram', 'x'],                totalMenciones: 842 },
    { id: 2,  nombre: 'Prueba N2',            limiteMenciones: 25000, fechaCreacion: '17 Feb 2026', fechaModificacion: '20 Feb 2026', estado: 'Activo',   canales: ['facebook', 'linkedin', 'youtube', 'tiktok'], totalMenciones: 12450 },
    { id: 3,  nombre: 'Prueba N3',            limiteMenciones: 1000,  fechaCreacion: '17 Feb 2026', fechaModificacion: '18 Feb 2026', estado: 'Activo',   canales: ['instagram', 'tiktok'],                       totalMenciones: 320 },
    { id: 4,  nombre: 'Prueba N4',            limiteMenciones: 25000, fechaCreacion: '17 Feb 2026', fechaModificacion: '17 Feb 2026', estado: 'Activo',   canales: ['facebook'],                                  totalMenciones: 5200 },
    { id: 5,  nombre: 'Prueba N5',            limiteMenciones: 1000,  fechaCreacion: '17 Feb 2026', fechaModificacion: '22 Feb 2026', estado: 'Inactivo', canales: ['facebook', 'instagram'],                     totalMenciones: 0 },
    { id: 6,  nombre: 'Prueba N6',            limiteMenciones: 25000, fechaCreacion: '17 Feb 2026', fechaModificacion: '17 Feb 2026', estado: 'Activo',   canales: ['linkedin', 'youtube'],                       totalMenciones: 8900 },
    { id: 7,  nombre: 'Marca Competencia',    limiteMenciones: 5000,  fechaCreacion: '01 Mar 2026', fechaModificacion: '02 Mar 2026', estado: 'Activo',   canales: ['facebook', 'x', 'linkedin'],                 totalMenciones: 2100 },
    { id: 8,  nombre: 'Monitoreo Producto',   limiteMenciones: 10000, fechaCreacion: '25 Feb 2026', fechaModificacion: '01 Mar 2026', estado: 'Inactivo', canales: ['instagram', 'tiktok', 'youtube'],             totalMenciones: 0 },
    { id: 9,  nombre: 'Campaña Verano',       limiteMenciones: 50000, fechaCreacion: '10 Feb 2026', fechaModificacion: '28 Feb 2026', estado: 'Activo',   canales: ['facebook', 'instagram', 'x', 'tiktok'],      totalMenciones: 34200 },
    { id: 10, nombre: 'Servicio al Cliente',  limiteMenciones: 15000, fechaCreacion: '05 Feb 2026', fechaModificacion: '03 Mar 2026', estado: 'Activo',   canales: ['facebook', 'x'],                             totalMenciones: 9800 },
  ];

  // Delete confirmation
  showDeleteModal = false;
  deleteTarget: SegmentoCard | null = null;

  constructor(private router: Router) {}

  @HostListener('document:click')
  onDocumentClick(): void {
    this.openMenuId = null;
  }

  setTab(tab: SegmentoTab): void {
    this.activeTab = tab;
    this.currentPage = 1;
  }

  get filteredSegmentos(): SegmentoCard[] {
    let result = [...this.segmentos];

    if (this.activeTab === 'activos') {
      result = result.filter(s => s.estado === 'Activo');
    } else {
      result = result.filter(s => s.estado === 'Inactivo');
    }

    if (this.searchValue.trim()) {
      const q = this.searchValue.toLowerCase();
      result = result.filter(s => s.nombre.toLowerCase().includes(q));
    }

    return result;
  }

  get paginatedSegmentos(): SegmentoCard[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredSegmentos.slice(start, start + this.itemsPerPage);
  }

  get totalFiltered(): number {
    return this.filteredSegmentos.length;
  }

  get startItem(): number {
    return this.totalFiltered === 0 ? 0 : (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalFiltered);
  }

  get canGoPrev(): boolean {
    return this.currentPage > 1;
  }

  get canGoNext(): boolean {
    return this.endItem < this.totalFiltered;
  }

  toggleMenu(id: number, event: Event): void {
    event.stopPropagation();
    this.openMenuId = this.openMenuId === id ? null : id;
  }

  onCardClick(segmento: SegmentoCard): void {
    this.router.navigate(['/segmentos/editar', segmento.id]);
  }

  onEditarSegmento(segmento: SegmentoCard): void {
    this.openMenuId = null;
    this.router.navigate(['/segmentos/editar', segmento.id]);
  }

  onRequestDelete(segmento: SegmentoCard): void {
    this.openMenuId = null;
    this.deleteTarget = segmento;
    this.showDeleteModal = true;
  }

  onConfirmDelete(): void {
    if (this.deleteTarget) {
      this.segmentos = this.segmentos.filter(s => s.id !== this.deleteTarget!.id);
    }
    this.showDeleteModal = false;
    this.deleteTarget = null;
  }

  onCancelDelete(): void {
    this.showDeleteModal = false;
    this.deleteTarget = null;
  }

  onCrearSegmento(): void {
    this.router.navigate(['/segmentos/crear']);
  }

  getEstadoVariant(estado: string): 'success' | 'neutral' {
    return estado === 'Activo' ? 'success' : 'neutral';
  }

  formatMenciones(value: number): string {
    return value.toLocaleString('es');
  }

  prevPage(): void {
    if (this.canGoPrev) this.currentPage--;
  }

  nextPage(): void {
    if (this.canGoNext) this.currentPage++;
  }

  onItemsPerPageChange(option: SelectOption | null): void {
    if (option) {
      this.itemsPerPage = option.value as number;
      this.currentPage = 1;
    }
  }
}

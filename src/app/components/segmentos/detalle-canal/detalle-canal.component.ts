import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  LucideAngularModule,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  Pencil,
  X
} from 'lucide-angular';
import { StatusBadgeComponent } from '../../ui/status-badge/status-badge.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { SelectComponent, SelectOption } from '../../ui/select/select.component';

export type CanalTab = 'api' | 'url';

export interface ConexionApi {
  id: number;
  nombre: string;
  url: string;
  estado: 'Conectado' | 'Desconectado';
  marcaPropia: boolean;
}

export interface ConexionUrl {
  id: number;
  nombre: string;
  url: string;
  tipo: 'Marca propia' | 'Competencia';
}

@Component({
  selector: 'app-detalle-canal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    StatusBadgeComponent,
    ButtonComponent,
    SelectComponent
  ],
  templateUrl: './detalle-canal.component.html',
  styleUrl: './detalle-canal.component.scss'
})
export class DetalleCanalComponent implements OnInit {
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronDownIcon = ChevronDown;
  readonly ChevronRightIcon = ChevronRight;
  readonly PlusIcon = Plus;
  readonly TrashIcon = Trash2;
  readonly PencilIcon = Pencil;
  readonly XIcon = X;

  canalId = '';
  canalNombre = '';
  activeTab: CanalTab = 'api';

  // Pagination
  itemsPerPage = 6;
  currentPage = 1;

  readonly itemsPerPageOptions: SelectOption[] = [
    { value: 6, label: '6' },
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' }
  ];

  // Dummy data: API connections
  conexionesApi: ConexionApi[] = [
    { id: 1, nombre: 'Social Gest', url: 'facebook.com/socialgestlatam', estado: 'Conectado', marcaPropia: true },
    { id: 2, nombre: 'Quantico', url: 'facebook.com/quanticoanalytics', estado: 'Conectado', marcaPropia: false },
    { id: 3, nombre: 'Marketing Pro', url: 'facebook.com/marketingpro', estado: 'Conectado', marcaPropia: true },
    { id: 4, nombre: 'Ventas Digital', url: 'facebook.com/ventasdigital', estado: 'Conectado', marcaPropia: false },
    { id: 5, nombre: 'Brand Monitor', url: 'facebook.com/brandmonitor', estado: 'Conectado', marcaPropia: true },
    { id: 6, nombre: 'Insight Hub', url: 'facebook.com/insighthub', estado: 'Conectado', marcaPropia: false },
    { id: 7, nombre: 'Data Plus', url: 'facebook.com/dataplus', estado: 'Conectado', marcaPropia: true },
    { id: 8, nombre: 'Analytics Lab', url: 'facebook.com/analyticslab', estado: 'Conectado', marcaPropia: false },
    { id: 9, nombre: 'Growth Team', url: 'facebook.com/growthteam', estado: 'Conectado', marcaPropia: true },
    { id: 10, nombre: 'Community Mgr', url: 'facebook.com/communitymgr', estado: 'Conectado', marcaPropia: false },
    { id: 11, nombre: 'Ad Solutions', url: 'facebook.com/adsolutions', estado: 'Conectado', marcaPropia: true },
    { id: 12, nombre: 'Media Desk', url: 'facebook.com/mediadesk', estado: 'Conectado', marcaPropia: false },
  ];

  // Dummy data: URL connections
  conexionesUrl: ConexionUrl[] = [
    { id: 1, nombre: 'Social Gest', url: 'facebook.com/socialgestlatam', tipo: 'Marca propia' },
    { id: 2, nombre: 'Quantico', url: 'facebook.com/quanticoanalytics', tipo: 'Competencia' },
    { id: 3, nombre: 'Marketing Pro', url: 'facebook.com/marketingpro', tipo: 'Marca propia' },
    { id: 4, nombre: 'Ventas Digital', url: 'facebook.com/ventasdigital', tipo: 'Competencia' },
    { id: 5, nombre: 'Brand Monitor', url: 'facebook.com/brandmonitor', tipo: 'Marca propia' },
    { id: 6, nombre: 'Insight Hub', url: 'facebook.com/insighthub', tipo: 'Competencia' },
    { id: 7, nombre: 'Data Plus', url: 'facebook.com/dataplus', tipo: 'Marca propia' },
    { id: 8, nombre: 'Analytics Lab', url: 'facebook.com/analyticslab', tipo: 'Competencia' },
    { id: 9, nombre: 'Growth Team', url: 'facebook.com/growthteam', tipo: 'Marca propia' },
    { id: 10, nombre: 'Community Mgr', url: 'facebook.com/communitymgr', tipo: 'Competencia' },
    { id: 11, nombre: 'Ad Solutions', url: 'facebook.com/adsolutions', tipo: 'Marca propia' },
    { id: 12, nombre: 'Media Desk', url: 'facebook.com/mediadesk', tipo: 'Competencia' },
  ];

  private readonly channelNames: Record<string, string> = {
    facebook: 'Facebook',
    instagram: 'Instagram',
    x: 'X / Twitter',
    linkedin: 'Linkedin',
    youtube: 'Youtube',
    tiktok: 'Tiktok',
    playstore: 'Play Store',
    appstore: 'App Store',
    googlebiz: 'Google Business',
    metaads: 'Meta Ads',
    linkedinads: 'Linkedin Ads'
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.canalId = params['canalId'] || '';
      this.canalNombre = this.channelNames[this.canalId] || this.canalId;
    });
  }

  goBack(): void {
    this.router.navigate(['/segmentos/editar/1'], { queryParams: { tab: 'canales' } });
  }

  setTab(tab: CanalTab): void {
    this.activeTab = tab;
    this.currentPage = 1;
  }

  // --- Pagination ---

  get totalItems(): number {
    return this.activeTab === 'api' ? this.conexionesApi.length : this.conexionesUrl.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  get paginatedApi(): ConexionApi[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.conexionesApi.slice(start, start + this.itemsPerPage);
  }

  get paginatedUrl(): ConexionUrl[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.conexionesUrl.slice(start, start + this.itemsPerPage);
  }

  get canGoPrev(): boolean {
    return this.currentPage > 1;
  }

  get canGoNext(): boolean {
    return this.endItem < this.totalItems;
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

  // --- Toggle ---

  toggleMarcaPropia(item: ConexionApi): void {
    item.marcaPropia = !item.marcaPropia;
  }

  // --- Delete ---

  onDeleteApi(id: number): void {
    this.conexionesApi = this.conexionesApi.filter(c => c.id !== id);
  }

  onDeleteUrl(id: number): void {
    this.conexionesUrl = this.conexionesUrl.filter(c => c.id !== id);
  }

  // --- Modal 1: Connection Type Selector (Paso 1 de 2) ---

  showConnectionModal = false;
  connectionType: 'api' | 'url' | null = null;

  openConnectionModal(): void {
    this.connectionType = null;
    this.showConnectionModal = true;
  }

  closeConnectionModal(): void {
    this.showConnectionModal = false;
  }

  selectConnectionType(type: 'api' | 'url'): void {
    this.connectionType = type;
  }

  onConnectionNext(): void {
    if (!this.connectionType) return;
    this.showConnectionModal = false;
    if (this.connectionType === 'url') {
      this.openUrlModal();
    }
    // API flow: close for now
  }

  // --- Modal 2: URL Connection Form ---

  showUrlModal = false;
  urlModalInput = '';
  urlModalTipo: 'Marca propia' | 'Competencia' = 'Marca propia';
  urlModalDisabled = false;
  private editingUrlItemId: number | null = null;

  openUrlModal(): void {
    this.urlModalInput = 'https://';
    this.urlModalTipo = 'Marca propia';
    this.urlModalDisabled = false;
    this.editingUrlItemId = null;
    this.showUrlModal = true;
  }

  openEditTipoModal(item: ConexionUrl): void {
    this.editingUrlItemId = item.id;
    this.urlModalInput = item.url;
    this.urlModalTipo = item.tipo;
    this.urlModalDisabled = true;
    this.showUrlModal = true;
  }

  closeUrlModal(): void {
    this.showUrlModal = false;
  }

  onUrlModalBack(): void {
    this.showUrlModal = false;
    if (!this.editingUrlItemId) {
      this.showConnectionModal = true;
    }
  }

  setUrlModalTipo(tipo: 'Marca propia' | 'Competencia'): void {
    this.urlModalTipo = tipo;
  }

  onConectar(): void {
    if (this.editingUrlItemId !== null) {
      const item = this.conexionesUrl.find(c => c.id === this.editingUrlItemId);
      if (item) item.tipo = this.urlModalTipo;
    }
    this.showUrlModal = false;
  }
}

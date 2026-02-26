import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Plus, Settings, Sparkles, Key, Trash2, Edit3, Eye, Pencil, X, ChevronDown, Calendar } from 'lucide-angular';
import { ButtonComponent } from '../ui/button/button.component';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { TableComponent, TableColumn, TableIconAction } from '../ui/table/table.component';
import { ChannelSelectorComponent, ChannelOption } from '../ui/channel-selector/channel-selector.component';
import { ModalComponent } from '../ui/modal/modal.component';

type TabType = 'ai' | 'list';

interface DateRange {
  startDate: Date;
  endDate: Date;
}

interface SavedKeyword {
  id: string;
  name: string;
  keywords: string[];
  excludedKeywords: string[];
  createdAt: Date;
  status: 'active' | 'paused';
}

@Component({
  selector: 'app-configurar-keywords',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule,
    ButtonComponent,
    SelectComponent,
    TableComponent,
    ChannelSelectorComponent,
    ModalComponent
  ],
  templateUrl: './configurar-keywords.component.html',
  styleUrl: './configurar-keywords.component.scss'
})
export class ConfigurarKeywordsComponent {
  private cdr = inject(ChangeDetectorRef);

  // Icons
  readonly PlusIcon = Plus;
  readonly SettingsIcon = Settings;
  readonly AIIcon = Sparkles;
  readonly HeaderIcon = Key;
  readonly TrashIcon = Trash2;
  readonly EditIcon = Edit3;
  readonly EyeIcon = Eye;
  readonly PencilIcon = Pencil;
  readonly CloseIcon = X;
  readonly ChevronDownIcon = ChevronDown;
  readonly CalendarIcon = Calendar;

  // Tab State
  activeTab: TabType = 'ai';

  // State
  showManualConfig = false; // Manual config panel visibility in list tab
  isManualModalOpen = false; // Modal visibility
  manualKeywordInput = ''; // Input for manual keyword

  // Saved Keywords List
  savedKeywords: SavedKeyword[] = [
    {
      id: '1',
      name: 'cocacola',
      keywords: ['coca-cola', 'cocacola', '#cocacola'],
      excludedKeywords: ['zero', 'light'],
      createdAt: new Date('2024-01-15'),
      status: 'active'
    },
    {
      id: '2',
      name: 'pepsi',
      keywords: ['pepsi', 'pepsico', '#pepsi'],
      excludedKeywords: [],
      createdAt: new Date('2024-01-10'),
      status: 'active'
    }
  ];


  // Channel options
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

  // Selected channels for manual config
  selectedChannels: string[] = [];

  // Modal state
  showAdvancedModal = false;
  selectedSegmento = '';
  selectedEtiquetas = '';
  selectedInfluencia = '';
  selectedSentimiento = '';

  // Modal options
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

  readonly sentimientoOptions: SelectOption[] = [
    { value: 'todos', label: 'Todos' },
    { value: 'positivo', label: 'Positivo' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'negativo', label: 'Negativo' }
  ];

  // Table configuration
  readonly tableColumns: TableColumn[] = [
    { key: 'keywords', header: 'Keywords' },
    { key: 'excludedKeywords', header: 'Palabra no contenida' },
    { key: 'createdAt', header: 'Fecha creación' },
    { key: 'status', header: 'Estado', type: 'badge' },
    { key: 'actions', header: 'Acciones', type: 'icon', width: '120px', align: 'center' }
  ];

  get tableData(): Record<string, unknown>[] {
    return this.savedKeywords.map(keyword => ({
      id: keyword.id,
      keywords: this.formatKeywords(keyword.keywords),
      excludedKeywords: keyword.excludedKeywords.length > 0 ? this.formatKeywords(keyword.excludedKeywords) : '-',
      createdAt: this.formatDate(keyword.createdAt),
      status: {
        label: keyword.status === 'active' ? 'Activo' : 'Pausado',
        variant: keyword.status === 'active' ? 'success' : 'neutral'
      },
      actions: [
        { icon: Edit3, action: 'edit', ariaLabel: 'Editar' },
        { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar' }
      ] as TableIconAction[]
    }));
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  private formatKeywords(keywords: string[]): string {
    if (keywords.length <= 3) {
      return keywords.join(', ');
    }
    return `${keywords.slice(0, 3).join(', ')} (+${keywords.length - 3} más)`;
  }

  // AI Generation
  userInput = '';
  isGenerating = false;
  hasConfigured = false;
  isEditingConfig = false;

  // Date range
  dateRange: DateRange = {
    startDate: new Date(),
    endDate: new Date()
  };

  constructor() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 0, 0);
    this.dateRange = { startDate: today, endDate: endOfDay };
  }

  // Tab Methods
  setActiveTab(tab: TabType): void {
    this.activeTab = tab;
  }

  goToManualConfig(): void {
    this.activeTab = 'list';
    this.openManualModal();
  }

  editConfiguration(): void {
    this.isEditingConfig = true;
  }

  viewResults(): void {
    this.activeTab = 'list';
  }

  toggleManualConfig(): void {
    this.showManualConfig = !this.showManualConfig;
  }

  openManualModal(): void {
    this.isManualModalOpen = true;
    this.manualKeywordInput = '';
    this.selectedChannels = [];
  }

  closeManualModal(): void {
    this.isManualModalOpen = false;
  }

  addManualKeyword(): void {
    if (!this.manualKeywordInput.trim()) return;

    const keywords = this.manualKeywordInput
      .split(',')
      .map(k => k.trim())
      .filter(k => k.length > 0);

    if (keywords.length > 0) {
      const newKeyword: SavedKeyword = {
        id: Date.now().toString(),
        name: keywords[0],
        keywords: keywords,
        excludedKeywords: [],
        createdAt: new Date(),
        status: 'active'
      };
      this.savedKeywords.unshift(newKeyword);
    }

    this.closeManualModal();
  }

  onSearch(): void {
    console.log('Date range:', this.dateRange);
  }

  onDateRangeChange(range: DateRange): void {
    this.dateRange = range;
  }

  onSegmentoChange(value: string | number): void {
    this.selectedSegmento = String(value);
  }

  onEtiquetasChange(value: string | number): void {
    this.selectedEtiquetas = String(value);
  }

  onInfluenciaChange(value: string | number): void {
    this.selectedInfluencia = String(value);
  }

  onSentimientoChange(value: string | number): void {
    this.selectedSentimiento = String(value);
  }

  formatDisplayDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // AI Generation method
  generateConfiguration(): void {
    if (!this.userInput.trim()) return;

    this.isGenerating = true;

    // Simulate AI processing time
    setTimeout(() => {
      // Extract keywords from user input (simplified simulation)
      const keywords = this.extractKeywordsFromInput(this.userInput);

      // Add to saved keywords list
      const newKeyword: SavedKeyword = {
        id: Date.now().toString(),
        name: keywords[0] || 'Nueva configuración',
        keywords: keywords,
        excludedKeywords: [],
        createdAt: new Date(),
        status: 'active'
      };
      this.savedKeywords.unshift(newKeyword);

      // Update state - keep userInput, mark as configured
      this.isGenerating = false;
      this.hasConfigured = true;
      this.isEditingConfig = false;

      // Force change detection
      this.cdr.detectChanges();
    }, 2500);
  }

  private extractKeywordsFromInput(input: string): string[] {
    // Simplified keyword extraction (in production, this would use AI)
    const lowerInput = input.toLowerCase();
    const keywords: string[] = [];

    if (lowerInput.includes('tecnología') || lowerInput.includes('tech')) {
      keywords.push('tecnología', 'tech', 'innovación', 'startup');
    }
    if (lowerInput.includes('marca') || lowerInput.includes('brand')) {
      keywords.push('marca', 'brand', 'branding');
    }
    if (lowerInput.includes('coca') || lowerInput.includes('pepsi')) {
      keywords.push('coca-cola', 'pepsi', 'refrescos');
    }

    // If no specific keywords found, generate generic ones based on first words
    if (keywords.length === 0) {
      const words = input.split(/\s+/).filter(w => w.length > 4).slice(0, 5);
      keywords.push(...words);
    }

    return keywords.length > 0 ? keywords : ['keyword-1', 'keyword-2', 'keyword-3'];
  }

  // Saved Keywords Methods
  deleteKeyword(id: string): void {
    this.savedKeywords = this.savedKeywords.filter(k => k.id !== id);
  }

  editKeyword(keyword: SavedKeyword): void {
    console.log('Edit keyword:', keyword);
    // Could open a modal or navigate to edit view
  }

  onTableActionClick(event: { action: string; row: Record<string, unknown>; index: number }): void {
    const keywordId = event.row['id'] as string;
    if (event.action === 'delete') {
      this.deleteKeyword(keywordId);
    } else if (event.action === 'edit') {
      const keyword = this.savedKeywords.find(k => k.id === keywordId);
      if (keyword) {
        this.editKeyword(keyword);
      }
    }
  }

}

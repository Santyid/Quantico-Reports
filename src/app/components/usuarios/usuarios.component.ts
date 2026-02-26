import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../ui/search-input/search-input.component';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { ButtonComponent } from '../ui/button/button.component';
import { TableComponent, TableColumn } from '../ui/table/table.component';
import { Trash2, Plus, Filter } from 'lucide-angular';

interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: { label: string; variant: 'success' | 'warning' | 'info' | 'neutral' };
  estado: { label: string; variant: 'success' | 'warning' | 'error' | 'neutral' };
  fechaRegistro: string;
  actions: { icon: typeof Trash2; action: string; ariaLabel: string };
  [key: string]: unknown; // Index signature for Record<string, unknown> compatibility
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    SearchInputComponent,
    SelectComponent,
    ButtonComponent,
    TableComponent
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  // Icons
  readonly PlusIcon = Plus;
  readonly FilterIcon = Filter;

  // Search state
  searchValue = signal('');

  // Filter options
  readonly rolOptions: SelectOption[] = [
    { value: '', label: 'Todos los roles' },
    { value: 'admin', label: 'Administrador' },
    { value: 'editor', label: 'Editor' },
    { value: 'viewer', label: 'Visualizador' }
  ];

  readonly estadoOptions: SelectOption[] = [
    { value: '', label: 'Todos los estados' },
    { value: 'active', label: 'Activo' },
    { value: 'inactive', label: 'Inactivo' },
    { value: 'pending', label: 'Pendiente' }
  ];

  // Table configuration
  readonly tableColumns: TableColumn[] = [
    { key: 'id', header: 'ID', width: '80px' },
    { key: 'nombre', header: 'Nombre' },
    { key: 'email', header: 'Email' },
    { key: 'rol', header: 'Rol', type: 'badge', width: '140px' },
    { key: 'estado', header: 'Estado', type: 'badge', width: '120px' },
    { key: 'fechaRegistro', header: 'Fecha Registro', width: '140px' },
    { key: 'actions', header: '', type: 'icon', width: '67px', align: 'center' }
  ];

  // Sample user data
  readonly usuarios: Usuario[] = [
    {
      id: 'USR001',
      nombre: 'María García',
      email: 'maria.garcia@email.com',
      rol: { label: 'Administrador', variant: 'info' },
      estado: { label: 'Activo', variant: 'success' },
      fechaRegistro: '15/01/2024',
      actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar usuario' }
    },
    {
      id: 'USR002',
      nombre: 'Carlos López',
      email: 'carlos.lopez@email.com',
      rol: { label: 'Editor', variant: 'warning' },
      estado: { label: 'Activo', variant: 'success' },
      fechaRegistro: '22/01/2024',
      actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar usuario' }
    },
    {
      id: 'USR003',
      nombre: 'Ana Martínez',
      email: 'ana.martinez@email.com',
      rol: { label: 'Visualizador', variant: 'neutral' },
      estado: { label: 'Pendiente', variant: 'warning' },
      fechaRegistro: '28/01/2024',
      actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar usuario' }
    },
    {
      id: 'USR004',
      nombre: 'Pedro Sánchez',
      email: 'pedro.sanchez@email.com',
      rol: { label: 'Editor', variant: 'warning' },
      estado: { label: 'Inactivo', variant: 'error' },
      fechaRegistro: '05/02/2024',
      actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar usuario' }
    },
    {
      id: 'USR005',
      nombre: 'Laura Fernández',
      email: 'laura.fernandez@email.com',
      rol: { label: 'Administrador', variant: 'info' },
      estado: { label: 'Activo', variant: 'success' },
      fechaRegistro: '10/02/2024',
      actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar usuario' }
    },
    {
      id: 'USR006',
      nombre: 'Diego Rodríguez',
      email: 'diego.rodriguez@email.com',
      rol: { label: 'Visualizador', variant: 'neutral' },
      estado: { label: 'Activo', variant: 'success' },
      fechaRegistro: '18/02/2024',
      actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar usuario' }
    },
    {
      id: 'USR007',
      nombre: 'Sofia Torres',
      email: 'sofia.torres@email.com',
      rol: { label: 'Editor', variant: 'warning' },
      estado: { label: 'Activo', variant: 'success' },
      fechaRegistro: '25/02/2024',
      actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar usuario' }
    },
    {
      id: 'USR008',
      nombre: 'Miguel Ruiz',
      email: 'miguel.ruiz@email.com',
      rol: { label: 'Visualizador', variant: 'neutral' },
      estado: { label: 'Pendiente', variant: 'warning' },
      fechaRegistro: '01/03/2024',
      actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar usuario' }
    }
  ];

  // Event handlers
  handleSearchChange(value: string): void {
    this.searchValue.set(value);
    console.log('Search value:', value);
  }

  handleSearch(value: string): void {
    console.log('Searching for:', value);
  }

  handleSearchCleared(): void {
    this.searchValue.set('');
    console.log('Search cleared');
  }

  handleRolFilterChange(option: SelectOption | null): void {
    console.log('Rol filter changed:', option);
  }

  handleEstadoFilterChange(option: SelectOption | null): void {
    console.log('Estado filter changed:', option);
  }

  handleAddUser(): void {
    console.log('Add user clicked');
  }

  handleRowClick(event: { row: Record<string, unknown>; index: number }): void {
    console.log('User row clicked:', event);
  }

  handleActionClick(event: { action: string; row: Record<string, unknown>; index: number }): void {
    console.log('Action clicked:', event);
    if (event.action === 'delete') {
      console.log('Delete user:', event.row);
    }
  }
}

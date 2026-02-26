import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Projects } from '../projects/projects';
import { ButtonComponent } from '../ui/button/button.component';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { SearchInputComponent } from '../ui/search-input/search-input.component';
import { TableComponent, TableColumn } from '../ui/table/table.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { Megaphone, Search, User, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    Projects,
    ButtonComponent,
    SelectComponent,
    SearchInputComponent,
    TableComponent,
    UsuariosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Lucide icons for select demo
  readonly MegaphoneIcon = Megaphone;
  readonly SearchIcon = Search;
  readonly UserIcon = User;
  readonly TrashIcon = Trash2;

  // Select demo options
  readonly selectOptions: SelectOption[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
    { value: 4, label: 'Option 4 (Disabled)', disabled: true },
    { value: 5, label: 'Option 5' }
  ];

  // Table demo data
  readonly tableColumns: TableColumn[] = [
    { key: 'orden', header: 'Orden' },
    { key: 'estatus', header: 'Estatus', type: 'badge' },
    { key: 'plan', header: 'Plan' },
    { key: 'monto', header: 'Monto' },
    { key: 'tipo', header: 'Tipo' },
    { key: 'codigo', header: 'Código', width: '113px' },
    { key: 'actions', header: '', type: 'icon', width: '67px', align: 'center' }
  ];

  readonly tableData = [
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€396,60', tipo: 'Renovacion mensual', codigo: '714', actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' } },
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€420,00', tipo: 'Renovacion mensual', codigo: '714', actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' } },
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€450,75', tipo: 'Renovacion mensual', codigo: '714', actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' } },
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€375,30', tipo: 'Renovacion mensual', codigo: '714', actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' } },
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€490,20', tipo: 'Renovacion mensual', codigo: '714', actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' } },
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€510,50', tipo: 'Renovacion mensual', codigo: '714', actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' } },
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€360,00', tipo: 'Renovacion mensual', codigo: '714', actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' } },
    { orden: '121894', estatus: { label: 'Positiva', variant: 'success' }, plan: 'Professional 3.0', monto: '€480,90', tipo: 'Renovacion mensual', codigo: '714', actions: { icon: Trash2, action: 'delete', ariaLabel: 'Eliminar orden' } }
  ];

  handleButtonClick(variant: string): void {
    console.log(`${variant} button clicked!`);
  }

  handleSelectChange(option: SelectOption | null): void {
    console.log('Select changed:', option);
  }

  handleSearchChange(value: string): void {
    console.log('Search value changed:', value);
  }

  handleSearch(value: string): void {
    console.log('Search submitted:', value);
  }

  handleSearchCleared(): void {
    console.log('Search cleared');
  }

  handleTableRowClick(event: { row: Record<string, unknown>; index: number }): void {
    console.log('Table row clicked:', event);
  }

  handleTableActionClick(event: { action: string; row: Record<string, unknown>; index: number }): void {
    console.log('Table action clicked:', event);
  }
}

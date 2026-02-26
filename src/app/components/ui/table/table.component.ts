import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LucideIconData, Trash2 } from 'lucide-angular';
import { StatusBadgeComponent, StatusBadgeVariant } from '../status-badge/status-badge.component';

export type TableColumnType = 'text' | 'badge' | 'icon';

export interface TableColumn {
  key: string;
  header: string;
  type?: TableColumnType;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

export interface TableBadgeData {
  label: string;
  variant: StatusBadgeVariant;
}

export interface TableIconAction {
  icon: LucideIconData;
  action: string;
  ariaLabel?: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, StatusBadgeComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {
  @Input() title?: string;
  @Input() columns: TableColumn[] = [];
  @Input() data: Record<string, unknown>[] = [];
  @Input() showRowBorders: boolean = true;
  @Input() hoverable: boolean = true;

  @Output() rowClick = new EventEmitter<{ row: Record<string, unknown>; index: number }>();
  @Output() actionClick = new EventEmitter<{ action: string; row: Record<string, unknown>; index: number }>();

  // Default icons
  readonly TrashIcon = Trash2;

  get tableClasses(): string[] {
    const classes = ['app-table'];
    if (this.showRowBorders) classes.push('app-table--bordered');
    if (this.hoverable) classes.push('app-table--hoverable');
    return classes;
  }

  getColumnStyle(column: TableColumn): Record<string, string> {
    const style: Record<string, string> = {};
    if (column.width) {
      style['width'] = column.width;
      style['flex'] = `0 0 ${column.width}`;
    } else {
      style['flex'] = '1 1 0';
    }
    return style;
  }

  getCellValue(row: Record<string, unknown>, key: string): unknown {
    return row[key];
  }

  isBadgeData(value: unknown): value is TableBadgeData {
    return typeof value === 'object' && value !== null && 'label' in value && 'variant' in value;
  }

  isIconAction(value: unknown): value is TableIconAction {
    return typeof value === 'object' && value !== null && 'icon' in value && 'action' in value;
  }

  isIconActionArray(value: unknown): value is TableIconAction[] {
    return Array.isArray(value) && value.every(item => this.isIconAction(item));
  }

  onRowClick(row: Record<string, unknown>, index: number): void {
    this.rowClick.emit({ row, index });
  }

  onActionClick(event: Event, action: string, row: Record<string, unknown>, index: number): void {
    event.stopPropagation();
    this.actionClick.emit({ action, row, index });
  }
}

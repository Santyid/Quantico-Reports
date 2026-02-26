import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-query-input',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './query-input.component.html',
  styleUrl: './query-input.component.scss'
})
export class QueryInputComponent implements AfterViewInit {
  @Input() label = '';
  @Input() placeholder = 'Escribir query...';
  @Input() value = '';

  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('textarea') textareaRef!: ElementRef<HTMLTextAreaElement>;

  readonly SearchIcon = Search;

  ngAfterViewInit(): void {
    this.adjustHeight();
  }

  onInputChange(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    this.value = textarea.value;
    this.valueChange.emit(this.value);
    this.adjustHeight();
  }

  private adjustHeight(): void {
    if (this.textareaRef) {
      const textarea = this.textareaRef.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aud-genero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aud-genero.component.html',
  styleUrl: './aud-genero.component.scss'
})
export class AudGeneroComponent {
  readonly masculino = 55;
  readonly femenino = 45;
}

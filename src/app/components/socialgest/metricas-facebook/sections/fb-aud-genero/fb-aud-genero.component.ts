import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fb-aud-genero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fb-aud-genero.component.html',
  styleUrl: './fb-aud-genero.component.scss'
})
export class FbAudGeneroComponent {
  readonly masculino = 60;
  readonly femenino = 40;
}

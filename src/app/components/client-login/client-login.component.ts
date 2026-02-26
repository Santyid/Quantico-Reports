import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from '../ui/text-input/text-input.component';
import { ButtonComponent } from '../ui/button/button.component';
import { AuthService } from '../../services/auth.service';
import { KeyRound } from 'lucide-angular';

@Component({
  selector: 'app-client-login',
  standalone: true,
  imports: [FormsModule, TextInputComponent, ButtonComponent],
  templateUrl: './client-login.component.html',
  styleUrl: './client-login.component.scss'
})
export class ClientLoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly KeyIcon = KeyRound;

  code = '';
  errorMessage = '';

  onLogin(): void {
    this.errorMessage = '';

    if (!this.code) {
      this.errorMessage = 'Por favor ingresa el código de acceso.';
      return;
    }

    if (this.auth.loginClient(this.code)) {
      this.router.navigate(['/cliente/reportes']);
    } else {
      this.errorMessage = 'Código incorrecto. Intenta de nuevo.';
    }
  }
}

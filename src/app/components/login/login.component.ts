import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from '../ui/text-input/text-input.component';
import { ButtonComponent } from '../ui/button/button.component';
import { AuthService } from '../../services/auth.service';
import { Mail, Lock } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, TextInputComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly MailIcon = Mail;
  readonly LockIcon = Lock;

  email = '';
  password = '';
  errorMessage = '';

  onLogin(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor completa todos los campos.';
      return;
    }

    if (this.auth.loginGeneral(this.email, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Credenciales incorrectas. Intenta de nuevo.';
    }
  }
}

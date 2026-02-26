import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TextInputComponent } from '../ui/text-input/text-input.component';
import { ChannelSelectorComponent, ChannelOption } from '../ui/channel-selector/channel-selector.component';
import { ButtonComponent } from '../ui/button/button.component';
import { SelectComponent, SelectOption } from '../ui/select/select.component';
import { CheckboxGroupComponent, CheckboxOption } from '../ui/checkbox-group/checkbox-group.component';
import { LucideAngularModule, User, Calendar, Mail, Users, MessageSquare, Layers, UserPlus, Globe, Coins, DollarSign, FileText, Bell, Key, Building2 } from 'lucide-angular';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TextInputComponent,
    ChannelSelectorComponent,
    ButtonComponent,
    SelectComponent,
    CheckboxGroupComponent,
    LucideAngularModule
  ],
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.scss'
})
export class CrearUsuarioComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Icons
  readonly HeaderIcon = UserPlus;
  readonly UserIcon = User;
  readonly CalendarIcon = Calendar;
  readonly MailIcon = Mail;
  readonly UsersIcon = Users;
  readonly MessageIcon = MessageSquare;
  readonly LayersIcon = Layers;
  readonly GlobeIcon = Globe;
  readonly CoinsIcon = Coins;
  readonly DollarIcon = DollarSign;
  readonly FileTextIcon = FileText;
  readonly BellIcon = Bell;
  readonly KeyIcon = Key;
  readonly BuildingIcon = Building2;

  // Country options
  readonly countryOptions: SelectOption[] = [
    { value: 'es', label: 'España' },
    { value: 'mx', label: 'México' },
    { value: 'ar', label: 'Argentina' },
    { value: 'co', label: 'Colombia' },
    { value: 'cl', label: 'Chile' },
    { value: 'pe', label: 'Perú' },
    { value: 'us', label: 'Estados Unidos' }
  ];

  // Currency options
  readonly currencyOptions: SelectOption[] = [
    { value: 'eur', label: 'EUR - Euro' },
    { value: 'usd', label: 'USD - Dólar estadounidense' },
    { value: 'mxn', label: 'MXN - Peso mexicano' },
    { value: 'ars', label: 'ARS - Peso argentino' },
    { value: 'cop', label: 'COP - Peso colombiano' },
    { value: 'clp', label: 'CLP - Peso chileno' },
    { value: 'pen', label: 'PEN - Sol peruano' }
  ];

  // Channel options with social media logos
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

  // Additional services options
  readonly serviceOptions: CheckboxOption[] = [
    { value: 'data-export', label: 'Data Export' },
    { value: 'looker-studio', label: 'Looker Studio' },
    { value: 'other', label: 'Otro' }
  ];

  // Form
  readonly form: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    nombreFiscal: ['', [Validators.required, Validators.minLength(2)]],
    fechaInicio: ['', Validators.required],
    fechaFin: ['', Validators.required],
    pais: ['', Validators.required],
    moneda: ['', Validators.required],
    montoTotal: [0, [Validators.required, Validators.min(0)]],
    cantidadUsuarios: [1, [Validators.required, Validators.min(1)]],
    cantidadMenciones: [0, [Validators.required, Validators.min(0)]],
    cantidadSegmentos: [1, [Validators.required, Validators.min(1)]],
    cantidadReportes: [0, [Validators.required, Validators.min(0)]],
    cantidadAlertas: [0, [Validators.required, Validators.min(0)]],
    cantidadKeywords: [0, [Validators.required, Validators.min(0)]],
    emailAdministrador: ['', [Validators.required, Validators.email]],
    canales: [[] as string[], Validators.required],
    serviciosAdicionales: [[] as string[]]
  });

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
      this.router.navigate(['/']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  getErrorMessage(controlName: string): string | undefined {
    const control = this.form.get(controlName);
    if (control?.touched && control?.errors) {
      if (control.errors['required']) return 'Este campo es requerido';
      if (control.errors['email']) return 'Email no valido';
      if (control.errors['min']) return `El valor minimo es ${control.errors['min'].min}`;
      if (control.errors['minlength']) return `Minimo ${control.errors['minlength'].requiredLength} caracteres`;
    }
    return undefined;
  }
}

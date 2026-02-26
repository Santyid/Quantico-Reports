import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly GENERAL_KEY = 'quantico_general_auth';
  private readonly CLIENT_KEY = 'quantico_client_auth';
  private readonly SESSION_DURATION_MS = 5 * 60 * 60 * 1000; // 5 horas

  private readonly GENERAL_EMAIL = 'admin@quantico.com';
  private readonly GENERAL_PASSWORD = 'admin123';
  private readonly CLIENT_CODE = 'QUANTICO2025';

  get isGeneralAuthenticated(): boolean {
    return this.isSessionValid(this.GENERAL_KEY);
  }

  get isClientAuthenticated(): boolean {
    return this.isSessionValid(this.CLIENT_KEY);
  }

  loginGeneral(email: string, password: string): boolean {
    if (email === this.GENERAL_EMAIL && password === this.GENERAL_PASSWORD) {
      localStorage.setItem(this.GENERAL_KEY, Date.now().toString());
      return true;
    }
    return false;
  }

  loginClient(code: string): boolean {
    if (code === this.CLIENT_CODE) {
      localStorage.setItem(this.CLIENT_KEY, Date.now().toString());
      return true;
    }
    return false;
  }

  logoutGeneral(): void {
    localStorage.removeItem(this.GENERAL_KEY);
  }

  logoutClient(): void {
    localStorage.removeItem(this.CLIENT_KEY);
  }

  private isSessionValid(key: string): boolean {
    const timestamp = localStorage.getItem(key);
    if (!timestamp) return false;

    const elapsed = Date.now() - Number(timestamp);
    if (elapsed > this.SESSION_DURATION_MS) {
      localStorage.removeItem(key);
      return false;
    }
    return true;
  }
}

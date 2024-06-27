import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mockEmail: string = 'atevirran@gmail.com';
  private readonly mockPassword: string = '12345678';
  private readonly tokenKey: string = 'auth-token';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === this.mockEmail && password === this.mockPassword) {
      const token = this.generateMockToken();
      localStorage.setItem(this.tokenKey, token);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  private generateMockToken(): string {
    return 'mock-token';
  }
}

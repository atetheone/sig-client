import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../entities/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mockEmail: string = 'atevirran@gmail.com';
  private readonly mockPassword: string = '12345678';
  private readonly tokenKey: string = 'auth-token';

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  login(email: string, password: string): void {
    this.http.post<LoginResponse>(`${environment.apiUri}/auth/login`, { email, password })
      .subscribe(
        (res: LoginResponse) => {
          const token = res.token;
          localStorage.setItem(this.tokenKey, token);
          this.router.navigate(['/dashboard/default']);
        },
        (error) => {
          console.error(error);
        }
      );  
  }

  // if (email === this.mockEmail && password === this.mockPassword) {
    //   const token = this.generateMockToken();
    //   localStorage.setItem(this.tokenKey, token);
    //   return true;
    // }
    // return false;

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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode'; // ✅ certo

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; senha: string }): Observable<any> {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUserInfo(): { sub: string; nome?: string; roles?: string[] } | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<{ sub: string; nome?: string; roles?: string[] }>(token);
    } catch (e) {
      return null;
    }
  }
}
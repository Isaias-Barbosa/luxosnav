import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode'; // ✅ certo

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth/login';
  private tokenKey = 'access_token';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; senha: string }): Observable<any> {
    return this.http.post<{ accessToken: string; refreshToken: string }>(this.apiUrl, credentials).pipe(
      tap(response => {
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('refresh_token', response.refreshToken);
      })
    );
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  refreshToken(refreshToken: string): Observable<string> {
    return this.http.post<{ accessToken: string }>('http://localhost:8080/api/auth/refresh', { refreshToken })
      .pipe(map(res => res.accessToken));
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
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

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    try {
      const { exp } = jwtDecode<{ exp: number }>(token);
      const now = Math.floor(Date.now() / 1000);
      return exp < now;
    } catch {
      return true;
    }
  }

}
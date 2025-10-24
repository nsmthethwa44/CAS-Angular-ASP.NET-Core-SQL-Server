import { Injectable } from '@angular/core';
import { baseUrl } from '../env/env';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private baseUrl = `${baseUrl}/api/auth`;
    constructor(private http: HttpClient) {}
    private _profile = new BehaviorSubject<User | null>(this.getProfileFromToken());
    profile$ = this._profile.asObservable();

  login(dto: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, dto);
  }

  setProfile(profile: User) {
    this._profile.next(profile);
  }

  saveToken(token: string) {
    localStorage.setItem('jwt', token);
     const profile = this.getProfileFromToken();
    this._profile.next(profile);
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem('jwt');
  }

  getRole(): string | null {
    const token = this.getToken();
    if (!token) return null;
    const decoded: any = jwtDecode(token);
    return decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] || null;
  }

  get userId(): number | null {
    return this._profile.value?.id || null;
  }

  getProfileFromToken(): any | null {
  const token = this.getToken();
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    return {
      id: Number(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]),
      name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
      email: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
      role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
      ImageUrl: decoded["ImageUrl"] // only if you add this claim
    };
  } catch {
    return null;
  }
}

}

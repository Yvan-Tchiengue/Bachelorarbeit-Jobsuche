import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(token: string, userType: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userType', userType);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserType(): string | null {
    return localStorage.getItem('userType');
  }

  /*clearSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
  }*/
}

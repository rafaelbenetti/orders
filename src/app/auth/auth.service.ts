import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthCredentials, AuthToken } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  isUserLoggedIn(): boolean {
    const token = sessionStorage.getItem('token');
    return !!token;
  }

  signout(): void {
    sessionStorage.clear();
  }

  signin(credentials: AuthCredentials): Observable<AuthToken> {
    return this.http
      .post<AuthToken>(`${this.url}/authenticate`, credentials)
      .pipe(
        tap((authToken: AuthToken) => {
          sessionStorage.setItem('token', authToken.token);
        })
      );
  }
}

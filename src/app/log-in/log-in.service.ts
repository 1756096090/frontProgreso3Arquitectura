import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/login';

  constructor(private http: HttpClient) {}

  login(loginData: { usuarioEstudiante: string; passwordEstudiante: string }): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, loginData);
  }
}

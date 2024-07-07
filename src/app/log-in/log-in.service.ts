import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

//   private apiUrl = '...'; 

//   constructor(private http: HttpClient) { }

//   getCredentials(email: string): Observable<{email: string, password: string}> {
//     return this.http.get<{email: string, password: string}>(`${this.apiUrl}?email=${email}`);
//   }

//   compareCredentials(email: string, password: string): Observable<boolean> {
//     return new Observable(observer => {
//       this.getCredentials(email).subscribe(dbCredentials => {
//         const isValid = dbCredentials && dbCredentials.password === password;
//         observer.next(isValid);
//         observer.complete();
//       });
//     });
//   }
}

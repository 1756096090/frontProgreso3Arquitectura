import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  
  private apiUrl = '...';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // constructor(private http: HttpClient) { }

  // getTeachers(): Observable<Teacher[]> {
  //   return this.http.get<Teacher[]>(this.apiUrl);
  // }

  // getTeacher(id: number): Observable<Teacher> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Teacher>(url);
  // }

  // updateRating(id: number, rating: number): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put(url, { rating }, this.httpOptions);
  // }

}


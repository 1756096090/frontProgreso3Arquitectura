import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from './teacher';
import { map } from 'rxjs/operators';
import { Recomendacion, Evaluacion } from './teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  
  private apiUrl = 'http://localhost:8000'; // Base URL

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<any>(this.apiUrl + '/teachersInformation').pipe(
      map((response: any) => {

        console.log("RESPUESTAAAAAAAAAA", response);

        // Mapeo de los datos
        return response.allTeachersInformation.map((teacher: Teacher) => {
          teacher.recomendaciones = response.allTeacherRecommendation.filter((recomendacion: Recomendacion) => recomendacion.idProfesor === teacher.id);
          teacher.likes = response.allTeachersEvaluation.filter((evaluacion: Evaluacion) => evaluacion.idProfesor === teacher.id && evaluacion.estrellas >= 3).length;
          teacher.dislikes = response.allTeachersEvaluation.filter((evaluacion: Evaluacion) => evaluacion.idProfesor === teacher.id && evaluacion.estrellas < 3).length;
          // Calcular el rating promedio
          const evaluations = response.allTeachersEvaluation.filter((evaluacion: Evaluacion) => evaluacion.idProfesor === teacher.id);
          teacher.rating = evaluations.reduce((sum: number, evaluacion: Evaluacion) => sum + evaluacion.estrellas, 0) / evaluations.length;
          return teacher;
        });
      })
    );
  }

  // getTeacher(id: number): Observable<Teacher> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Teacher>(url);
  // }

  // updateRating(id: number, rating: number): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.put(url, { rating }, this.httpOptions);
  // }

  // getLikes(id: string): Observable<number> {
  //   // Aquí es donde harías la llamada a tu API para obtener los likes de un profesor
  //   // const url = `${this.apiUrl}/likes/${id}`;
  //   // return this.http.get<number>(url);
  // }

  // getDislikes(id: string): Observable<number> {
  //   // Aquí es donde harías la llamada a tu API para obtener los dislikes de un profesor
  //   // const url = `${this.apiUrl}/dislikes/${id}`;
  //   // return this.http.get<number>(url);
  // }

  // likeTeacher(id: string): Observable<any> {
  //   // Aquí es donde harías la llamada a tu API para "like" a un profesor
  //   // const url = `${this.apiUrl}/like/${id}`;
  //   // return this.http.post(url, null, this.httpOptions);
  // }

  // dislikeTeacher(id: string): Observable<any> {
  //   // Aquí es donde harías la llamada a tu API para "dislike" a un profesor
  //   // const url = `${this.apiUrl}/dislike/${id}`;
  //   // return this.http.post(url, null, this.httpOptions);
  // }

  // getRecommendations(id: string): Observable<Recomendacion[]> {
  //   // Aquí es donde harías la llamada a tu API para obtener las recomendaciones de un profesor
  //   // const url = `${this.apiUrl}/recomendaciones/${id}`;
  //   // return this.http.get<Recomendacion[]>(url);
  // }
}

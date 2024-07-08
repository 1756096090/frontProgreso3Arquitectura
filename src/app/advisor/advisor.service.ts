import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutor, Tutoria } from './tutor.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdvisorService {
  
  private apiUrl = 'http://localhost:8000'; // Base URL

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTutors(): Observable<Tutor[]> {
    return this.http.get<any>(this.apiUrl + '/tutoresInformation').pipe(
      map(response => {
        return response.allTutoresInformation.map((tutor: Tutor) => {
          tutor.tutorias = response.allTutorias.filter((tutoria: Tutoria) => tutoria.idProfesor === tutor.id);
          tutor.esTutor = tutor.tutorias.some(tutoria => tutoria.estado === 'activo');
          return tutor;
        });
      })
    );
  }

  reservarMentor(idProfesor: string, usuarioEstudiante: string): Observable<any> {
    const tutoria = {
      usuarioEstudiante,
      idProfesor,
      estado: 'activo',
      fechaContratacion: new Date().toISOString().split('T')[0] // Fecha actual en formato YYYY-MM-DD
    };
    return this.http.post(this.apiUrl + '/contratacionPersonal/tutorias', tutoria, this.httpOptions);
  }

  getActiveTutoria(usuarioEstudiante: string, idProfesor: string): Observable<Tutoria | null> {
    return this.http.get<Tutoria[]>(`${this.apiUrl}/contratacionPersonal/tutorias/allByUsuario/${usuarioEstudiante}/activo`).pipe(
      map(tutorias => tutorias.find(tutoria => tutoria.idProfesor === idProfesor) || null)
    );
  }

  cancelarTutoria(idTutoria: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/contratacionPersonal/tutorias/updateTutoriaEstadoById/${idTutoria}/finalizado`, this.httpOptions);
  }
}

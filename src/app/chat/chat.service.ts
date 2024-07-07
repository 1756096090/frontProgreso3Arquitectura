// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat, Message } from './chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:8080';  // Asegúrate de que esta URL es correcta para tu API

  constructor(private http: HttpClient) { }

  mensajesBase(usuarios: { usuario1: number; usuario2: number }): Observable<Chat[]> {
    console.log("🚀 ~ ChatService ~ mensajesBase ~ usuarios:", usuarios);
    console.log('POST /mensajesBase', usuarios);
    return this.http.post<Chat[]>(`${this.apiUrl}/mensajesBase`, usuarios, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  enviarMensaje(usuarioId1: number, usuarioId2: number, mensaje: string): Observable<Message> {
    console.log('POST /mensaje', { usuario1:usuarioId1, usuario2:usuarioId2, mensaje });
    return this.http.post<Message>(`${this.apiUrl}/mensaje`, { usuario1: usuarioId1, usuario2: usuarioId2, mensaje }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  obtenerNotificacions(usuarios: { usuario1: number; usuario2: number }): Observable<Message[]> {
    console.log("🚀 ~ ChatService ~ obtenerNotificacions ~ usuarios:", usuarios);
    return this.http.post<Message[]>(`${this.apiUrl}/notificacions`, usuarios, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

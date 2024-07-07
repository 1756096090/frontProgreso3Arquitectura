// src/app/services/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat, Message } from './chat.model';


@Injectable({
  providedIn: 'root'
})

export class ChatService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  mensajesBase(usuarios: { usuario1: number; usuario2: number }): Observable<Chat[]> {
    console.log("🚀 ~ ChatService ~ mensajesBase ~ usuarios:", usuarios);
    console.log('POST /mensajesBase', usuarios);
    return this.http.post<Chat[]>(`${this.apiUrl}/mensajesBase`, usuarios, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  enviarMensaje(usuario1: number, usuario2: number, mensaje: string): Observable<Chat> {
    const body = { usuario1, usuario2, mensaje };
    console.log('POST /mensaje', body);
    return this.http.post<Chat>(`${this.apiUrl}/mensaje`, body, {
      headers: { 'Content-Type': 'application/json' }
    });
  }



  obtenerChats(chatId: string): Observable<Message[]> {
    console.log('GET /chat/' + chatId);
    return this.http.get<Message[]>(`${this.apiUrl}/chat/${chatId}`);
  }

  obtenerTodosLosChats(): Observable<Chat[]> {
    console.log('GET /chats');
    return this.http.get<Chat[]>(`${this.apiUrl}/chats`);
  }
}

import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from './chat.service';
import { WebSocketService } from '../websocket.service';
import { Chat, Message } from './chat.model';
import { Subscription } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  chat: any = [];
  newMessage: string = '';
  usuarioId1: number = 1; // ID del usuario actual
  usuarioId2: number = 2; // ID del otro usuario en el chat
  owner: number = this.usuarioId1;
  notifications: Message[] = [];
  private pollingSubscription!: Subscription;
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  constructor(
    private chatService: ChatService,
    private webSocketService: WebSocketService
  ) { }

  ngOnInit(): void {

    this.getChatClass();
    this.startNotificationPolling();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  deleteNotification(index: number): void {
    this.notifications.splice(index, 1);
  }

  getChatClass() {
    this.chatService.mensajesBase({
      usuario1: this.usuarioId1,
      usuario2: this.usuarioId2
    }).pipe(
      tap(messages => {
        if (messages.length === 0) {
          console.log('No hay mensajes en el chat');
          // Puedes hacer algo más aquí, como mostrar un mensaje en la UI
        }
      }),
      catchError(error => {
        console.error('Error al obtener mensajes:', error);
        // Puedes manejar el error en la UI aquí si lo deseas
        return of([]); // Retorna un observable de un array vacío para manejar el error de forma segura
      })
    ).subscribe(messages => {
      this.chat = messages;
      console.log("🚀 ~ ChatComponent ~ ngOnInit ~ messages:", messages);
    });
  }


  startNotificationPolling(): void {

      this.chatService.obtenerNotificacions({
        usuario1: this.usuarioId1,
        usuario2: this.usuarioId2
      }).subscribe({
      next: (messages) => {
        this.notifications = messages;
        console.log("🚀 ~ ChatComponent ~ obtenerNotificacions ~ messages:", messages);
        this.getChatClass();
        this.startNotificationPolling();
      },
      error: (error) => {
        console.error('Error fetching notifications:', error);
      }
    });

  }

  sendMessage(): void {
    const message = {
      usuarioID1: this.usuarioId1,
      usuarioID2: this.usuarioId2,
      mensaje: this.newMessage,
      fecha: new Date()
    };


    this.chatService.enviarMensaje(this.usuarioId1, this.usuarioId2, this.newMessage).subscribe(chat => {
      this.chat.push(message);
      this.newMessage = '';
    });

  }

  private scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}

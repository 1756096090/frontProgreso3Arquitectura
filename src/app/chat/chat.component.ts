// src/app/components/chat/chat.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from './chat.service';
import { WebSocketService } from '../websocket.service';
import { Chat, Message} from './chat.model';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  chat!: any;
  newMessage: string = '';
  usuarioId1: number = 1; // ID del usuario actual
  usuarioId2: number = 2; // ID del otro usuario en el chat
  owner: number = this.usuarioId1;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private webSocketService: WebSocketService
  ) { }

  ngOnInit(): void {
    this.chatService.mensajesBase({
      "usuario1": this.usuarioId1,
      "usuario2": this.usuarioId2
    }).subscribe(messages => {
      this.chat = messages;
      console.log("🚀 ~ ChatComponent ~ ngOnInit ~ messages:", messages)
    });


  }

  sendMessage(): void {
    const message = {
      usuario1: this.usuarioId1,
      usuario2: this.usuarioId2,
      mensaje: this.newMessage,
      fecha: new Date(),
    };

    this.chatService.enviarMensaje(this.usuarioId1, this.usuarioId2, this.newMessage).subscribe(chat => {
      this.chat.push(message);
      this.newMessage = '';
    });

    this.webSocketService.sendMessage(message);
  }


}

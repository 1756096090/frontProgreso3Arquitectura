import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080');
    this.socket.onopen = () => {
      console.log('WebSocket connection opened.');
    };
    this.socket.onmessage = (event) => {
      console.log('WebSocket message received:', event.data);
    };
    this.socket.onerror = (event) => {
      console.error('WebSocket error observed:', event);
    };
  }

  public sendMessage(message: any) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      this.socket.onopen = () => {
        this.socket.send(JSON.stringify(message));
      };
    }
  }
}

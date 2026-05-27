import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket = new WebSocket('ws://localhost:8080');

  connect() {

    this.socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    this.socket.onmessage = (event) => {
      console.log('Received:', event.data);
      alert("New Message: " + event.data);
    };
  }

  sendMessage(message: string) {
    this.socket.send(message);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  users = [
    { name: 'Alice Smith', status: 'online', avatar: 'A' },
    { name: 'John Doe', status: 'online', avatar: 'J' },
    { name: 'Sarah Connor', status: 'offline', avatar: 'S' },
    { name: 'Mike Ross', status: 'online', avatar: 'M' }
  ];

  messages = [
    { sender: 'Alice Smith', text: 'Hey there! Did you check out the new design?', time: '10:00 AM', isMe: false },
    { sender: 'Me', text: 'Yes! Working on implementing the Angular components right now.', time: '10:02 AM', isMe: true },
    { sender: 'Alice Smith', text: 'Awesome, looks super clean.', time: '10:03 AM', isMe: false }
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'Me',
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true
      });
      this.newMessage = '';
    }
  }
}
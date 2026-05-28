import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Message {
  sender: string;
  text: string;
  file?: string;
  time: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrls: ['./chat.css']
})
export class ChatComponent {

  constructor(private router: Router) {}

  currentUser = 'User 1';

  users = [
    {
      name: 'User 1',
      status: 'Online'
    },
    {
      name: 'User 2',
      status: 'Away'
    }
  ];

  message = '';

  selectedFile: File | null = null;

  messages: Message[] = [];

  switchUser(userName: string) {
    this.currentUser = userName;
  }

  sendMessage() {

    if (this.message.trim() === '' && !this.selectedFile) {
      return;
    }

    this.messages.push({
      sender: this.currentUser,
      text: this.message,
      file: this.selectedFile?.name,
      time: new Date().toLocaleTimeString()
    });

    this.message = '';
    this.selectedFile = null;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  logout() {

    localStorage.removeItem('loggedInUser');

    this.router.navigate(['/login']);
  }
}
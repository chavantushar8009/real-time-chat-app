import { Component } from '@angular/core';
import { Sidebar } from './components/sidebar/sidebar';
import { ChatWindow } from './components/chat-window/chat-window';
import { MessageInput } from './components/message-input/message-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Sidebar, ChatWindow, MessageInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

}
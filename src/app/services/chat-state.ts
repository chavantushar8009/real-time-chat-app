import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatStateService {

  private messagesSource = new BehaviorSubject<any[]>([]);
  messages$ = this.messagesSource.asObservable();

  private users = [
    {
      id: 1,
      name: 'Profile 1',
      status: 'online'
    },
    {
      id: 2,
      name: 'Profile 2',
      status: 'away'
    }
  ];

  getUsers() {
    return this.users;
  }

  sendMessage(message: any) {
    const current = this.messagesSource.value;
    this.messagesSource.next([...current, message]);
  }
}
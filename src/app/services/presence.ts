import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  private users = [
    { name: 'Rahul', online: true },
    { name: 'Aman', online: false },
    { name: 'Priya', online: true }
  ];

  private usersSubject = new BehaviorSubject(this.users);

  users$ = this.usersSubject.asObservable();

  constructor() {

    setInterval(() => {

      this.users = this.users.map(user => ({
        ...user,
        online: Math.random() > 0.5
      }));

      this.usersSubject.next(this.users);

    }, 5000);

  }

}
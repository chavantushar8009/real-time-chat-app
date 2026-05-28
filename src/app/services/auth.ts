import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = [
    {
      username: 'user1',
      password: '1234',
      status: 'online'
    },
    {
      username: 'user2',
      password: '1234',
      status: 'away'
    }
  ];

  currentUser: any = null;

  login(username: string, password: string) {

    const foundUser = this.users.find(
      user =>
        user.username === username &&
        user.password === password
    );

    if (foundUser) {

      this.currentUser = foundUser;

      localStorage.setItem(
        'currentUser',
        JSON.stringify(foundUser)
      );

      return true;
    }

    return false;

  }

  logout() {

    localStorage.removeItem('currentUser');

  }

  getCurrentUser() {

    return JSON.parse(
      localStorage.getItem('currentUser') || 'null'
    );

  }

  checkAuth() {

    return !!localStorage.getItem('currentUser');

  }

}
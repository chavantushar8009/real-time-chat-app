import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  login(username: string, password: string) {

    if (username === 'admin' && password === '1234') {
      this.isLoggedIn = true;
      localStorage.setItem('loggedIn', 'true');
    }

  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  checkAuth() {
    return localStorage.getItem('loggedIn') === 'true';
  }

}
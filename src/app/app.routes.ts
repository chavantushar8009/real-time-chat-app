import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login';
import { ChatComponent } from './components/chat/chat';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [authGuard]
  }

];
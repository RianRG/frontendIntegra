import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ChatComponent } from './components/chat-component/chat-component';
import { LoginComponent } from './components/login-component/login-component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component:  LoginComponent}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ChatComponent } from './components/chat-component/chat-component';
import { LoginComponent } from './components/login-component/login-component';
import { VisitComponent } from './components/visit-component/visit-component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component:  LoginComponent},
  { path: 'visit', component: VisitComponent },
];

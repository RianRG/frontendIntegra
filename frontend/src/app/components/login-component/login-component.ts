import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
  isActive = false;

  constructor(private route: Router){};

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  redirectToChat(event: Event): void{
    event.preventDefault();
    event.stopPropagation();
    this.route.navigate(['/chat'])
  }
}

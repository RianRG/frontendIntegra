import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-component',
  imports: [],
  templateUrl: './visit-component.html',
  styleUrl: './visit-component.css'
})
export class VisitComponent {
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIconsModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(public router: Router) {}

  menuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'heroHome' },
    { label: 'Issues', route: '/issues', icon: 'heroDocumentText' },
    { label: 'Projects', route: '/projects', icon: 'heroFolder' },
    { label: 'Users', route: '/users', icon: 'heroUsers' },
    { label: 'Logout', route: '/login', icon: 'heroArrowLeftOnRectangle' },
  ];

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}

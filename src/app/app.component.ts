import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen1-Ariel-Gavilanes';

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-envelope',
      routerLink: '/home',
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/contact',
    },
    {
      label: 'About',
      icon: 'pi pi-envelope',
      routerLink: '/about',
    },
    {
      label: 'Post',
      icon: 'pi pi-envelope',
      routerLink: '/posts',
    },
  ];
}

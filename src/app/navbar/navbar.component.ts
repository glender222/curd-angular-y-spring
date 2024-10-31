import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink: ['/']
          },
          {
              label: 'Features',
              icon: 'pi pi-star'
          },
          {
              label: 'Mantenimiento',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'especialidad',
                      icon: 'pi pi-bolt',
                      shortcut: '⌘+S',
                      routerLink: ['/especialidad']
                  },
                  {
                      label: 'doctor',
                      icon: 'pi pi-server',
                      shortcut: '⌘+B',
                      routerLink: ['/doctor']
                  },

              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope',
              badge: '3'
          }
      ];
  }
}

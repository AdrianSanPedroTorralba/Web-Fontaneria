import { Component, Input, HostBinding } from '@angular/core';
import { RouterLink,RouterModule } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() opacity: number = 0.6;
  menuAbierto = false;
  
  @HostBinding('style.--nav-opacity')
  get navOpacity() {
    return this.opacity;
  }

    toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}

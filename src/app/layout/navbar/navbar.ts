import { Component, Input, HostBinding } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() opacity: number = 0.6;
  
  @HostBinding('style.--nav-opacity')
  get navOpacity() {
    return this.opacity;
  }
}

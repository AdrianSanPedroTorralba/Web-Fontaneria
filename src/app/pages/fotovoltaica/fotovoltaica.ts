import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-fotovoltaica',
  standalone: true,
  imports: [Header, RouterModule, CommonModule, FadeInDirective],
  templateUrl: './fotovoltaica.html',
  styleUrl: './fotovoltaica.css',
})
export class Fotovoltaica {
  
}

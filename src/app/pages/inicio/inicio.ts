import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [Header, RouterModule, FadeInDirective],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}

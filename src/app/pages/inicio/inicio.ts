import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-inicio',
  imports: [Header, RouterModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}

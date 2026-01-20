import { Component, Input } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundImage: string = '';
  @Input() showHero: boolean = true;
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
}

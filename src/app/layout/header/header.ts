import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundImage: string = '';
  @Input() showHero: boolean = true;
  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
  @Input() dynamic: boolean = false;

  displayTitle: string = '';
  displaySubtitle: string = '';
  displayImage: string = '';
  
  private messages = [
    {
      title: 'Fontanería profesional para tu hogar y tu negocio',
      subtitle: 'Servicios rápidos, eficaces y con garantía. Solucionamos cualquier problema de fontanería.',
      image: 'assets/header/heade.jpg'
    },
    {
      title: 'Energía Solar: Ahorra y cuida el planeta',
      subtitle: 'Instalaciones fotovoltaicas eficientes. Pásate al autoconsumo hoy mismo.',
      image: 'assets/header/FondoPlacas.png'
    }
  ];
  
  private currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
    this.displayTitle = this.title;
    this.displaySubtitle = this.subtitle;
    this.displayImage = this.backgroundImage;

    if (this.dynamic) {
      this.startCycle();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startCycle() {
    this.displayTitle = this.messages[0].title;
    this.displaySubtitle = this.messages[0].subtitle;
    this.displayImage = this.messages[0].image;

    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.messages.length;
      this.displayTitle = this.messages[this.currentIndex].title;
      this.displaySubtitle = this.messages[this.currentIndex].subtitle;
      this.displayImage = this.messages[this.currentIndex].image;
    }, 5000);
  }
}

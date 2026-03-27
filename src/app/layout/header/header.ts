import { Component, Input, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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

  private currentIndex = 0;
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

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

  ngOnInit() {

    if (this.dynamic) {
      this.startCycle();
    } else {
      this.displayTitle = this.title;
      this.displaySubtitle = this.subtitle;
      this.displayImage = this.backgroundImage;
    }

  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startCycle() {

    this.currentIndex = 0;

    this.updateMessage();

    this.intervalId = setInterval(() => {

      this.currentIndex = (this.currentIndex + 1) % this.messages.length;

      this.updateMessage();

      this.cdr.detectChanges(); // 👈 esto hace que Angular refresque el texto

    }, 5000);
  }

  private updateMessage() {
    this.displayTitle = this.messages[this.currentIndex].title;
    this.displaySubtitle = this.messages[this.currentIndex].subtitle;
    this.displayImage = this.messages[this.currentIndex].image;
  }

}
import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Contacto } from './pages/contacto/contacto';
import { SobreNosotros } from './pages/sobre-nosotros/sobre-nosotros';

export const routes: Routes = [
  { path: '', component: Inicio },
  {
    path: 'contacto',
    component: Contacto,
    title: 'Instalaciones PTV-Contacto'
  },
  {
    path: 'sobreNosotros',
    component: SobreNosotros,
    title: 'Instalaciones PTV-Sobre-Nosotros'
  }
];


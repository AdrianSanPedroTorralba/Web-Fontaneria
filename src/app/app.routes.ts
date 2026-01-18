import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Inicio },
  {
    path: 'contacto',
    component: Contacto,
    title: 'Contacto'
  }
];


import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Contacto } from './pages/contacto/contacto';
import { Servicio } from './pages/servicio/servicio';

export const routes: Routes = [
  { path: '', component: Inicio },
  {
    path: 'contacto',
    component: Contacto,
    title: 'Instalaciones PTV-Contacto'
  },
  {
    path: 'servicios',
    component: Servicio,
    title: 'Instalaciones PTV-Servicios'
  }
];


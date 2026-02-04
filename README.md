# Instalaciones PTV - Web Corporativa Profesional

[![Angular](https://img.shields.io/badge/Angular-17%2B-DD0031?style=for-the-badge&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://www.typescript.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Proyecto desarrollado para **Instalaciones PTV**, empresa especializada en fontanería y reformas. La aplicación se enfoca en la eficiencia técnica, SEO-friendly y una arquitectura de componentes reutilizables.

## 🚀 Arquitectura Técnica

La web está construida bajo una arquitectura **Standalone** de Angular, priorizando la modularidad y el rendimiento:

* **Layout Dinámico:** Sistema de `Header` adaptativo con inyección de contenido vía `ng-content` y layouts configurables (Vertical/Horizontal).
* **Gestión de Estilos:** Uso de **CSS Custom Properties** vinculadas a `@HostBinding` para manipulación de opacidad y temas en tiempo real sin recargas de DOM.
* **Performance:** Configuración de `App Shell` y optimización de assets para un LCP (Largest Contentful Paint) optimizado.
* **SEO:** Implementación de rutas semánticas y meta-tags dinámicos.

## 🛠️ Stack Tecnológico

* **Frontend:** Angular 17+ (Componentes Standalone).
* **Lenguaje:** TypeScript (Tipado estricto para escalabilidad).
* **Despliegue:** Compilación optimizada para servidores Apache con configuración de redireccionamiento vía `.htaccess`.
* **Diseño:** CSS3 avanzado con metodología BEM y Flexbox/Grid responsivo.

## 📦 Instalación y Desarrollo

Para ejecutar este proyecto en local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/AdrianSanPedroTorralba/Web-Fontaneria.git
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Servir en entorno de desarrollo:**
    ```bash
    ng serve
    ```
    Accede a `http://localhost:4200/`.

© 2026 Instalaciones PTV. Todos los derechos reservados.
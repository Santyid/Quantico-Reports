import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'App de E-commerce',
      description: 'Diseño y desarrollo de una aplicación de comercio electrónico con enfoque en UX y conversión de ventas.',
      technologies: ['Angular', 'TypeScript', 'Figma', 'SCSS'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      category: 'UX/UI + Frontend'
    },
    {
      title: 'Dashboard Analítico',
      description: 'Plataforma de visualización de datos con gráficos interactivos y diseño centrado en el usuario.',
      technologies: ['React', 'D3.js', 'Sketch', 'TailwindCSS'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'Data Visualization'
    },
    {
      title: 'App Móvil de Fitness',
      description: 'Aplicación de seguimiento de ejercicios con experiencia de usuario gamificada y motivacional.',
      technologies: ['React Native', 'Firebase', 'Adobe XD'],
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&h=300&fit=crop',
      category: 'Mobile Design'
    },
    {
      title: 'Sistema de Design',
      description: 'Creación de un sistema de diseño completo con componentes reutilizables y documentación detallada.',
      technologies: ['Storybook', 'Figma', 'Web Components'],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      category: 'Design System'
    },
    {
      title: 'Portal Educativo',
      description: 'Plataforma de aprendizaje en línea con enfoque en accesibilidad y experiencia de usuario inclusiva.',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Figma'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop',
      category: 'Education'
    },
    {
      title: 'Landing Page Corporativa',
      description: 'Sitio web corporativo con animaciones fluidas y diseño responsive optimizado para conversión.',
      technologies: ['Next.js', 'Framer Motion', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      category: 'Web Design'
    }
  ];
}

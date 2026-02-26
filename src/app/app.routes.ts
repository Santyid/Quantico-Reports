import { Routes } from '@angular/router';

export const routes: Routes = [
  // Quantico routes (existing product)
  {
    path: '',
    loadComponent: () =>
      import('./layouts/quantico-layout.component')
        .then(m => m.QuanticoLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'crear-cuenta',
        loadComponent: () =>
          import('./components/crear-usuario/crear-usuario.component')
            .then(m => m.CrearUsuarioComponent)
      },
      {
        path: 'configurar-keywords',
        loadComponent: () =>
          import('./components/configurar-keywords/configurar-keywords.component')
            .then(m => m.ConfigurarKeywordsComponent)
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./components/reportes/reportes.component')
            .then(m => m.ReportesComponent)
      },
      {
        path: 'reportes/impacto',
        loadComponent: () =>
          import('./components/reportes/sections/reporte-impacto/reporte-impacto.component')
            .then(m => m.ReporteImpactoComponent)
      },
      {
        path: 'menciones',
        loadComponent: () =>
          import('./components/menciones/menciones.component')
            .then(m => m.MencionesComponent)
      },
      {
        path: 'alertas',
        loadComponent: () =>
          import('./components/alertas/alertas.component')
            .then(m => m.AlertasComponent)
      },
      {
        path: 'alertas/crear',
        loadComponent: () =>
          import('./components/crear-alerta/crear-alerta.component')
            .then(m => m.CrearAlertaComponent)
      },
      {
        path: 'alertas/crear-v2',
        loadComponent: () =>
          import('./components/crear-alerta-v2/crear-alerta-v2.component')
            .then(m => m.CrearAlertaV2Component)
      }
    ]
  },
  // SocialGest routes (new product)
  {
    path: 'socialgest',
    loadComponent: () =>
      import('./layouts/socialgest-layout.component')
        .then(m => m.SocialgestLayoutComponent),
    children: [
      {
        path: 'metricas',
        loadComponent: () =>
          import('./components/socialgest/metricas/metricas-resumen.component')
            .then(m => m.MetricasResumenComponent)
      },
      {
        path: 'metricas-facebook',
        loadComponent: () =>
          import('./components/socialgest/metricas-facebook/metricas-facebook.component')
            .then(m => m.MetricasFacebookComponent)
      }
    ]
  },
  // Client-facing routes (restricted navigation)
  {
    path: 'cliente',
    loadComponent: () =>
      import('./layouts/client-layout.component')
        .then(m => m.ClientLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'reportes',
        pathMatch: 'full'
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./components/reportes/reportes.component')
            .then(m => m.ReportesComponent)
      },
      {
        path: 'reportes/impacto',
        loadComponent: () =>
          import('./components/reportes/sections/reporte-impacto/reporte-impacto.component')
            .then(m => m.ReporteImpactoComponent)
      },
      {
        path: 'menciones',
        loadComponent: () =>
          import('./components/menciones/menciones.component')
            .then(m => m.MencionesComponent)
      }
    ]
  }
];

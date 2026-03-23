import { Routes } from '@angular/router';
import { generalAuthGuard } from './guards/auth.guard';
import { clientAuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Login routes (no guards, no layout)
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'cliente/login',
    loadComponent: () =>
      import('./components/client-login/client-login.component')
        .then(m => m.ClientLoginComponent)
  },
  // Quantico routes (existing product)
  {
    path: '',
    loadComponent: () =>
      import('./layouts/quantico-layout.component')
        .then(m => m.QuanticoLayoutComponent),
    canActivate: [generalAuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/quantico/dashboard/quantico-dashboard.component')
            .then(m => m.QuanticoDashboardComponent)
      },
      {
        path: 'components-demo',
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
        path: 'alertas2',
        loadComponent: () =>
          import('./components/quantico/alertas2/alertas2.component')
            .then(m => m.Alertas2Component)
      },
      {
        path: 'segmentos',
        loadComponent: () =>
          import('./components/segmentos/segmentos.component')
            .then(m => m.SegmentosComponent)
      },
      {
        path: 'segmentos/editar/:id',
        loadComponent: () =>
          import('./components/segmentos/editar-segmento/editar-segmento.component')
            .then(m => m.EditarSegmentoComponent)
      },
      {
        path: 'segmentos/canal/:canalId',
        loadComponent: () =>
          import('./components/segmentos/detalle-canal/detalle-canal.component')
            .then(m => m.DetalleCanalComponent)
      },
      {
        path: 'design-system',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  // AdvocatesPro routes
  {
    path: 'advocatespro',
    loadComponent: () =>
      import('./layouts/advocatespro-layout.component')
        .then(m => m.AdvocatesproLayoutComponent),
    canActivate: [generalAuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/advocatespro/dashboard/advocatespro-dashboard.component')
            .then(m => m.AdvocatesproDashboardComponent)
      }
    ]
  },
  // Tikket routes
  {
    path: 'tikket',
    loadComponent: () =>
      import('./layouts/tikket-layout.component')
        .then(m => m.TikketLayoutComponent),
    canActivate: [generalAuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/tikket/dashboard/tikket-dashboard.component')
            .then(m => m.TikketDashboardComponent)
      }
    ]
  },
  // SocialGest routes (new product)
  {
    path: 'socialgest',
    loadComponent: () =>
      import('./layouts/socialgest-layout.component')
        .then(m => m.SocialgestLayoutComponent),
    canActivate: [generalAuthGuard],
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
    canActivate: [clientAuthGuard],
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

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Link, Calendar, Crosshair, Eye, Heart, LucideIconData } from 'lucide-angular';
import { SocialgestSidebarComponent, SidebarChannel } from '../sidebar/socialgest-sidebar.component';
import { RendimientoGlobalComponent } from './sections/rendimiento-global/rendimiento-global.component';
import { CrecimientoSeguidoresComponent } from './sections/crecimiento-seguidores/crecimiento-seguidores.component';
import { VistasPublicacionesComponent } from './sections/vistas-publicaciones/vistas-publicaciones.component';
import { TotalEspectadoresComponent } from './sections/total-espectadores/total-espectadores.component';
import { AccionesNegocioComponent } from './sections/acciones-negocio/acciones-negocio.component';
import { EstimadoCrecimientoComponent } from './sections/estimado-crecimiento/estimado-crecimiento.component';
import { InteraccionesComponent } from './sections/interacciones/interacciones.component';
import { PubRendimientoComponent } from './sections/pub-rendimiento/pub-rendimiento.component';
import { PubPorDiaComponent } from './sections/pub-por-dia/pub-por-dia.component';
import { PubTiposComponent } from './sections/pub-tipos/pub-tipos.component';
import { PubTablaComponent } from './sections/pub-tabla/pub-tabla.component';
import { AudDemografiaComponent } from './sections/aud-demografia/aud-demografia.component';
import { AudUbicacionesComponent } from './sections/aud-ubicaciones/aud-ubicaciones.component';
import { AudGeneroComponent } from './sections/aud-genero/aud-genero.component';
import { AudEdadesComponent } from './sections/aud-edades/aud-edades.component';
import { IaRendimientoComponent } from './sections/ia-rendimiento/ia-rendimiento.component';
import { IaRecomendacionesComponent } from './sections/ia-recomendaciones/ia-recomendaciones.component';
import { IaTopPostsComponent } from './sections/ia-top-posts/ia-top-posts.component';
import { IaInsightsComponent } from './sections/ia-insights/ia-insights.component';
import { IaPrediccionesComponent } from './sections/ia-predicciones/ia-predicciones.component';

@Component({
  selector: 'app-metricas-resumen',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    SocialgestSidebarComponent,
    RendimientoGlobalComponent,
    CrecimientoSeguidoresComponent,
    VistasPublicacionesComponent,
    TotalEspectadoresComponent,
    AccionesNegocioComponent,
    EstimadoCrecimientoComponent,
    InteraccionesComponent,
    PubRendimientoComponent,
    PubPorDiaComponent,
    PubTiposComponent,
    PubTablaComponent,
    AudDemografiaComponent,
    AudUbicacionesComponent,
    AudGeneroComponent,
    AudEdadesComponent,
    IaRendimientoComponent,
    IaRecomendacionesComponent,
    IaTopPostsComponent,
    IaInsightsComponent,
    IaPrediccionesComponent
  ],
  templateUrl: './metricas-resumen.component.html',
  styleUrl: './metricas-resumen.component.scss'
})
export class MetricasResumenComponent {
  readonly ChartIcon = Link;
  readonly CalendarIcon = Calendar;

  readonly tabs = ['Análisis con IA', 'Resumen', 'Publicaciones', 'Audiencia'];
  activeTab = 'Análisis con IA';

  readonly iaFilters: { label: string; icon: LucideIconData }[] = [
    { label: 'Lead generation', icon: Crosshair },
    { label: 'Brand awareness', icon: Eye },
    { label: 'Engagement', icon: Heart },
  ];
  activeIaFilter = 'Lead generation';

  readonly channels: SidebarChannel[] = [
    { id: 'fb-1', name: 'Mi Empresa', platform: 'Facebook', icon: 'images/facebook-icon.svg' },
    { id: 'ig-1', name: 'mi_empresa', platform: 'Instagram', icon: 'images/instagram-icon.svg' }
  ];

  selectedChannelId = 'all';

  onChannelSelected(id: string): void {
    this.selectedChannelId = id;
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }
}

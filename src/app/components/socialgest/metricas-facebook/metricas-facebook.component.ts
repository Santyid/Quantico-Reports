import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Link, Calendar } from 'lucide-angular';
import { SocialgestSidebarComponent, SidebarChannel } from '../sidebar/socialgest-sidebar.component';
import { FbRendimientoGlobalComponent } from './sections/fb-rendimiento-global/fb-rendimiento-global.component';
import { FbMovimientoFansComponent } from './sections/fb-movimiento-fans/fb-movimiento-fans.component';
import { FbImpresionesComponent } from './sections/fb-impresiones/fb-impresiones.component';
import { FbAlcanceDiarioComponent } from './sections/fb-alcance-diario/fb-alcance-diario.component';
import { FbReaccionesComponent } from './sections/fb-reacciones/fb-reacciones.component';
import { FbClicksComponent } from './sections/fb-clicks/fb-clicks.component';
import { FbPublicacionesComponent } from './sections/fb-publicaciones/fb-publicaciones.component';
import { FbPubRendimientoComponent } from './sections/fb-pub-rendimiento/fb-pub-rendimiento.component';
import { FbPubPorDiaComponent } from './sections/fb-pub-por-dia/fb-pub-por-dia.component';
import { FbPubTiposComponent } from './sections/fb-pub-tipos/fb-pub-tipos.component';
import { FbPubTablaComponent } from './sections/fb-pub-tabla/fb-pub-tabla.component';
import { FbAudDemografiaComponent } from './sections/fb-aud-demografia/fb-aud-demografia.component';
import { FbAudUbicacionesComponent } from './sections/fb-aud-ubicaciones/fb-aud-ubicaciones.component';
import { FbAudGeneroComponent } from './sections/fb-aud-genero/fb-aud-genero.component';
import { FbAudEdadesComponent } from './sections/fb-aud-edades/fb-aud-edades.component';
import { FbAudMapaComponent } from './sections/fb-aud-mapa/fb-aud-mapa.component';
import { FbAudCiudadComponent } from './sections/fb-aud-ciudad/fb-aud-ciudad.component';
import { FbAudPaisChartComponent } from './sections/fb-aud-pais-chart/fb-aud-pais-chart.component';
import { FbMejoresDiasComponent } from './sections/fb-mejores-dias/fb-mejores-dias.component';
import { FbFansDiaComponent } from './sections/fb-fans-dia/fb-fans-dia.component';
import { FbEstimadoFansComponent } from './sections/fb-estimado-fans/fb-estimado-fans.component';

@Component({
  selector: 'app-metricas-facebook',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    SocialgestSidebarComponent,
    FbRendimientoGlobalComponent,
    FbMovimientoFansComponent,
    FbImpresionesComponent,
    FbAlcanceDiarioComponent,
    FbReaccionesComponent,
    FbClicksComponent,
    FbPublicacionesComponent,
    FbPubRendimientoComponent,
    FbPubPorDiaComponent,
    FbPubTiposComponent,
    FbPubTablaComponent,
    FbAudDemografiaComponent,
    FbAudUbicacionesComponent,
    FbAudGeneroComponent,
    FbAudEdadesComponent,
    FbAudMapaComponent,
    FbAudCiudadComponent,
    FbAudPaisChartComponent,
    FbMejoresDiasComponent,
    FbFansDiaComponent,
    FbEstimadoFansComponent
  ],
  templateUrl: './metricas-facebook.component.html',
  styleUrl: './metricas-facebook.component.scss'
})
export class MetricasFacebookComponent {
  readonly ChartIcon = Link;
  readonly CalendarIcon = Calendar;

  readonly tabs = ['Resumen', 'Publicaciones', 'Audiencia'];
  activeTab = 'Resumen';

  readonly channels: SidebarChannel[] = [
    { id: 'fb-1', name: 'Mi Empresa', platform: 'Facebook', icon: 'images/facebook-icon.svg' },
    { id: 'ig-1', name: 'mi_empresa', platform: 'Instagram', icon: 'images/instagram-icon.svg' }
  ];

  selectedChannelId = 'fb-1';

  onChannelSelected(id: string): void {
    this.selectedChannelId = id;
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }
}

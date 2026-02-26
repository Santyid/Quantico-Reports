import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationDetailModalComponent, PublicationDetailData } from '../../../../ui/publication-detail-modal/publication-detail-modal.component';
import { SelectComponent, SelectOption } from '../../../../ui/select/select.component';

type FbContentType = 'Todos' | 'Fotos' | 'Videos' | 'Enlaces' | 'Estado';

interface FbPublication {
  thumbnail: string;
  date: string;
  title: string;
  contentType: FbContentType;
  alcance: number;
  reacciones: number;
  comentarios: number;
  compartidos: number;
  clicks: number;
}

@Component({
  selector: 'app-fb-pub-tabla',
  standalone: true,
  imports: [CommonModule, PublicationDetailModalComponent, SelectComponent],
  templateUrl: './fb-pub-tabla.component.html',
  styleUrl: './fb-pub-tabla.component.scss'
})
export class FbPubTablaComponent {
  readonly columns = ['Publicación', 'Alcance', 'Reacciones', 'Comentarios', 'Compartidos', 'Clicks'];

  readonly contentTypeOptions: SelectOption[] = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Fotos', label: 'Fotos' },
    { value: 'Videos', label: 'Videos' },
    { value: 'Enlaces', label: 'Enlaces' },
    { value: 'Estado', label: 'Estado' }
  ];
  activeFilter: FbContentType = 'Todos';

  readonly publications: FbPublication[] = [
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '10/01/2026  10:30am',
      title: 'Nuevo lanzamiento de producto: descubre nuestras últimas novedades para este trimestre y aprovecha las ofert...',
      contentType: 'Fotos',
      alcance: 4520, reacciones: 380, comentarios: 45, compartidos: 120, clicks: 890
    },
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '08/01/2026  3:00pm',
      title: 'Gracias a nuestra comunidad por alcanzar los 10.000 seguidores. Cada día trabajamos para ofrecerles el mej...',
      contentType: 'Estado',
      alcance: 6200, reacciones: 520, comentarios: 78, compartidos: 210, clicks: 1250
    },
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '05/01/2026  9:00am',
      title: 'Tips de la semana: 5 formas de optimizar tu estrategia en redes sociales para mejorar el engagement y alc...',
      contentType: 'Enlaces',
      alcance: 3800, reacciones: 290, comentarios: 32, compartidos: 95, clicks: 670
    },
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '03/01/2026  12:00pm',
      title: 'Evento en vivo este viernes: únete a nuestro webinar gratuito sobre tendencias de marketing digital para...',
      contentType: 'Videos',
      alcance: 5100, reacciones: 410, comentarios: 56, compartidos: 180, clicks: 1100
    },
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '01/01/2026  8:00am',
      title: 'Feliz Año Nuevo! Comenzamos 2026 con grandes planes y proyectos para nuestra comunidad. Este año será in...',
      contentType: 'Fotos',
      alcance: 8400, reacciones: 720, comentarios: 95, compartidos: 340, clicks: 1580
    }
  ];

  get filteredPublications(): FbPublication[] {
    if (this.activeFilter === 'Todos') return this.publications;
    return this.publications.filter(p => p.contentType === this.activeFilter);
  }

  onFilterChange(option: SelectOption | null): void {
    this.activeFilter = (option?.value as FbContentType) || 'Todos';
  }

  modalOpen = false;
  selectedPublication: PublicationDetailData | null = null;

  openDetail(pub: FbPublication): void {
    this.selectedPublication = {
      image: pub.thumbnail,
      accountName: 'Mi Empresa',
      date: pub.date.split('  ')[0],
      type: pub.contentType,
      description: pub.title + ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      metrics: [
        { label: 'Alcance', value: pub.alcance.toLocaleString('es-ES') },
        { label: 'Reacciones', value: pub.reacciones.toLocaleString('es-ES') },
        { label: 'Comentarios', value: pub.comentarios.toLocaleString('es-ES') },
        { label: 'Compartidos', value: pub.compartidos.toLocaleString('es-ES') },
        { label: 'Clicks', value: pub.clicks.toLocaleString('es-ES') },
        { label: 'Engagement', value: '4.2%' }
      ],
      profileActivity: [
        { label: 'Llamadas', value: '234' },
        { label: 'Dirección', value: '567' },
        { label: 'Email', value: '45' },
        { label: 'Texto', value: '123' },
        { label: 'Clicks en Bio', value: '89' },
        { label: 'Otras', value: '345' }
      ],
      postUrl: '#'
    };
    this.modalOpen = true;
  }

  closeDetail(): void {
    this.modalOpen = false;
    this.selectedPublication = null;
  }
}

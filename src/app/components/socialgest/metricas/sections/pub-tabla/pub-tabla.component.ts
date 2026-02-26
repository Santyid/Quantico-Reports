import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationDetailModalComponent, PublicationDetailData } from '../../../../ui/publication-detail-modal/publication-detail-modal.component';
import { SelectComponent, SelectOption } from '../../../../ui/select/select.component';

type IgContentType = 'Todos' | 'Imágenes' | 'Carruseles' | 'Videos' | 'Reels';

interface Publication {
  thumbnail: string;
  date: string;
  title: string;
  contentType: IgContentType;
  vistas: number;
  comentarios: number;
  likes: number;
  engagement: number;
  guardados: number;
  alcance: number;
}

@Component({
  selector: 'app-pub-tabla',
  standalone: true,
  imports: [CommonModule, PublicationDetailModalComponent, SelectComponent],
  templateUrl: './pub-tabla.component.html',
  styleUrl: './pub-tabla.component.scss'
})
export class PubTablaComponent {
  readonly columns = ['Publicación', 'Vistas', 'Comentarios', 'Likes', 'Engagement', 'Guardados', 'Alcance'];

  readonly contentTypeOptions: SelectOption[] = [
    { value: 'Todos', label: 'Todos' },
    { value: 'Imágenes', label: 'Imágenes' },
    { value: 'Carruseles', label: 'Carruseles' },
    { value: 'Videos', label: 'Videos' },
    { value: 'Reels', label: 'Reels' }
  ];
  activeFilter: IgContentType = 'Todos';

  readonly publications: Publication[] = [
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '04/04/2024  8:00pm',
      title: 'TedMurphy se une a FLUVIP para potenciar el marketing de creadores en Latinoamérica "Siempre en la busque...',
      contentType: 'Reels',
      vistas: 150, comentarios: 150, likes: 150, engagement: 150, guardados: 150, alcance: 150
    },
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '03/04/2024  2:30pm',
      title: 'Descubre las mejores estrategias de contenido para redes sociales en 2024 con nuestro nuevo estudio...',
      contentType: 'Carruseles',
      vistas: 230, comentarios: 85, likes: 320, engagement: 210, guardados: 95, alcance: 480
    },
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '02/04/2024  10:00am',
      title: 'Nuevo tutorial: Cómo usar las herramientas de edición avanzadas para crear contenido profesional...',
      contentType: 'Videos',
      vistas: 520, comentarios: 67, likes: 190, engagement: 130, guardados: 45, alcance: 680
    },
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '01/04/2024  6:00pm',
      title: 'Nuestra comunidad de creadores sigue creciendo. Gracias a cada uno de ustedes por ser parte de esto...',
      contentType: 'Imágenes',
      vistas: 90, comentarios: 42, likes: 280, engagement: 175, guardados: 60, alcance: 350
    },
    {
      thumbnail: 'images/pub-sample.jpg',
      date: '31/03/2024  9:00am',
      title: 'Behind the scenes de nuestra última producción audiovisual para la campaña de primavera 2024...',
      contentType: 'Reels',
      vistas: 780, comentarios: 120, likes: 450, engagement: 290, guardados: 110, alcance: 920
    }
  ];

  get filteredPublications(): Publication[] {
    if (this.activeFilter === 'Todos') return this.publications;
    return this.publications.filter(p => p.contentType === this.activeFilter);
  }

  onFilterChange(option: SelectOption | null): void {
    this.activeFilter = (option?.value as IgContentType) || 'Todos';
  }

  modalOpen = false;
  selectedPublication: PublicationDetailData | null = null;

  openDetail(pub: Publication): void {
    this.selectedPublication = {
      image: pub.thumbnail,
      accountName: 'Socialgest',
      date: pub.date.split('  ')[0],
      type: pub.contentType,
      description: pub.title + ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      collaborators: [
        { username: '@username' },
        { username: '@username' },
        { username: '@username' }
      ],
      metrics: [
        { label: 'Likes', value: pub.likes.toLocaleString('es-ES') },
        { label: 'Comentarios', value: pub.comentarios.toLocaleString('es-ES') },
        { label: 'Guardados', value: pub.guardados.toLocaleString('es-ES') },
        { label: 'Impresiones', value: pub.vistas.toLocaleString('es-ES') },
        { label: 'Engagement', value: pub.engagement + '%' },
        { label: 'Alcance', value: pub.alcance.toLocaleString('es-ES') },
        { label: 'Seguidores', value: '1.567' }
      ],
      profileActivity: [
        { label: 'Llamadas', value: '234.567' },
        { label: 'Dirección', value: '3.467' },
        { label: 'Email', value: '45' },
        { label: 'Texto', value: '1.234' },
        { label: 'Clicks en Bio', value: '567' },
        { label: 'Otras', value: '234.567' }
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

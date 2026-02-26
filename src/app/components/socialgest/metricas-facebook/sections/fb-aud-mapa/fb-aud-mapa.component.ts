import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const jsVectorMap: any;

@Component({
  selector: 'app-fb-aud-mapa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fb-aud-mapa.component.html',
  styleUrl: './fb-aud-mapa.component.scss'
})
export class FbAudMapaComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  private map: any;

  readonly countryData: Record<string, number> = {
    MX: 380,
    CO: 290,
    AR: 210,
    ES: 180,
    PE: 120,
    CL: 95,
    EC: 70,
    US: 55,
    VE: 40,
    BR: 25
  };

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.destroy();
    }
  }

  private async initMap(): Promise<void> {
    const jsvectormap = await import('jsvectormap');
    await import('jsvectormap/dist/maps/world.js');

    this.map = new jsvectormap.default({
      selector: this.mapContainer.nativeElement,
      map: 'world',
      backgroundColor: '#fafafa',
      zoomButtons: true,
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: '#e8edf4',
          stroke: '#d4dbe6',
          strokeWidth: 0.5
        },
        hover: {
          fill: '#b0ceff',
          cursor: 'pointer'
        }
      },
      series: {
        regions: [{
          attribute: 'fill',
          scale: {
            low: '#b0ceff',
            high: '#5495fe'
          },
          values: this.countryData,
          normalizeFunction: 'linear'
        }]
      },
      onRegionTooltipShow(event: any, tooltip: any, code: string) {
        const data: Record<string, number> = {
          MX: 380, CO: 290, AR: 210, ES: 180, PE: 120,
          CL: 95, EC: 70, US: 55, VE: 40, BR: 25
        };
        if (data[code]) {
          tooltip.text(
            `<div style="font-family:Urbanist,sans-serif;padding:4px 8px;">
              <strong>${tooltip.text()}</strong><br/>
              <span style="font-family:DM Sans,sans-serif;font-size:12px;opacity:0.85">${data[code]} likes</span>
            </div>`,
            true
          );
        }
      }
    });
  }
}

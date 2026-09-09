# AdvocatesPro — Guía del Modal Especial Compacto ("Webinar Embajador")

> Documenta la familia de modal implementada en `advocatespro-dashboard.component.{html,scss,ts}`
> bajo las clases `.style-guide__ambassador-*`. Úsala como base para implementar **más modales
> con el mismo contenido variable, misma estructura y mismo estilo** (otros webinars, anuncios,
> convocatorias, etc.).
>
> Ver también: [advocatespro-modal-ambassador-template.html](advocatespro-modal-ambassador-template.html)
> (referencia visual autocontenida, ábrela en un navegador) y, para el resto del sistema de
> AdvocatesPro, [advocatespro-design-system-guide.md](advocatespro-design-system-guide.md).

---

## 1. Qué es esta familia de modal

Es la **variante compacta de 1 panel** del "Modal Especial" de AdvocatesPro — la otra variante
(2 paneles, 1293px, ya existente) se usa para anuncios grandes tipo landing; esta se usa cuando el
contenido es más ligero (agenda + lista corta de features + CTA) y no necesita tanto espacio.

**No mezclar los dos patrones.** Si el contenido nuevo tiene imagen/video hero grande, usa la
variante de 2 paneles. Si es agenda + lista de features + nota + botones, usa esta.

---

## 2. Anatomía (de arriba hacia abajo)

```
overlay (fondo oscuro, cierra al hacer click fuera)
└── .ambassador-modal (fila flex: tarjeta + botón cerrar)
    ├── .ambassador-card (columna flex, 480px, alto máximo = 100vh - 40px)
    │   ├── .ambassador-header   ← FIJO (no scrollea)
    │   │   ├── .ambassador-badge (pill con ícono + texto)
    │   │   ├── .ambassador-title (h2, degradado tricolor)
    │   │   └── .ambassador-description (p)
    │   ├── .ambassador-body     ← ÚNICO bloque que scrollea
    │   │   ├── .ambassador-schedule (agenda: fecha + horarios)
    │   │   ├── .ambassador-features (lista de N features con ícono)
    │   │   └── .ambassador-note (nota destacada, 1 línea)
    │   └── .ambassador-footer  ← FIJO (no scrollea)
    │       ├── .ambassador-footer-cancel (botón secundario)
    │       └── .ambassador-footer-primary (botón principal)
    └── .ambassador-close (botón X, al costado de la tarjeta, no encima)
```

### Regla clave de layout (no romper esto)

El header y el footer **nunca deben scrollear** — solo el bloque de en medio (`.ambassador-body`).
Esto se logra así, y es la parte más fácil de romper por accidente:

```scss
.ambassador-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;              // solo para los bordes redondeados
  max-height: calc(100vh - 40px);
}
.ambassador-header,
.ambassador-footer {
  flex-shrink: 0;                 // se quedan a su tamaño natural, fijos
}
.ambassador-body {
  flex: 1;
  min-height: 0;                  // ¡imprescindible! sin esto, overflow-y:auto no hace nada
  overflow-y: auto;               // el scroll real vive aquí, y solo aquí
}
```

❌ **Error común**: poner `overflow-y: auto` en `.ambassador-card` completo (en vez de solo en
`.ambassador-body`). Eso hace que el header y el footer también se muevan al hacer scroll, y la
barra de scroll del navegador abarca toda la tarjeta en vez de solo el bloque de en medio.

❌ **Otro error común**: poner `flex: 1` en `.ambassador-body` sin `min-height: 0`. Un hijo flex
nunca se encoge por debajo de la altura de su contenido a menos que se le diga explícitamente —
sin `min-height:0` el `overflow-y:auto` queda sin efecto y el contenido se corta o empuja la
tarjeta fuera de la pantalla.

### Botón de cerrar — por qué es un hermano flex, no `position:absolute`

El botón X es un **hermano flex de la tarjeta** (mismo `.ambassador-modal`, `display:flex; gap:14px`),
no un elemento con `right:-46px` posicionado por fuera. Esto es deliberado: un offset absoluto se
corta en pantallas angostas porque no hay margen del overlay suficiente para alojarlo. El patrón
flex-con-gap es responsive por construcción.

---

## 3. Qué varía por modal (contenido) vs. qué se mantiene fijo (estructura)

| Se mantiene fijo (estructura/estilo) | Varía por modal (contenido) |
|---|---|
| Ancho de tarjeta (480px), radios, paddings | Texto del badge |
| Layout header/body/footer fijo+scroll+fijo | Título (siempre 1-2 líneas, degradado tricolor) |
| Tipografías y tamaños de cada elemento | Descripción (1-3 líneas) |
| Colores/tokens (`$ap-*`) | Fecha y horarios de la agenda |
| Botón cerrar (posición, tamaño, ícono X) | Cantidad y contenido de features (ver nota abajo) |
| Botones de footer (cancelar + primario) | Texto e ícono del botón primario |
| Nota destacada (estilo, ícono genérico) | Texto de la nota, ícono si aplica |

**Sobre la cantidad de features**: la lista vive dentro de `.ambassador-body`, que ya tiene scroll
propio — puedes tener 3, 4 o 6 features sin romper nada, simplemente se verá más o menos contenido
antes de necesitar scroll. Los 4 colores de ícono (`--1` azul, `--2` verde, `--3` rosa, `--4` ámbar)
se repiten en ciclo si hay más de 4 features.

---

## 4. Tabla de medidas y tipografía exactas

| Elemento | Fuente | Tamaño | Peso | Color / fondo |
|---|---|---|---|---|
| Tarjeta | — | 480px ancho, radio 24px | — | `$ap-white-base`, sombra `0 20px 60px rgba(0,0,0,.3)` |
| Header padding | — | `32px 32px 24px` | — | wash `linear-gradient(108.2deg, primary-100, white 55%, secondary-100)` |
| Badge | Urbanist | 13px | 600 | texto `$ap-primary-500`, borde `$ap-primary-500`, fondo blanco |
| Título | Urbanist | 25px / line-height 29px | 700 | `$ap-ia-hero-title-gradient` (texto, background-clip) |
| Descripción | DM Sans | 14px / line-height 19px | 400 | `$ap-grey-500` (strong: `$ap-grey-800` 700) |
| Body padding | — | `24px 32px`, gap 20px | — | — |
| Caja de fecha | Urbanist | día 18px / mes 10px | 700 / 600 | fondo `$ap-secondary-500`, texto blanco, 52×52px radio 14px |
| Label de fecha | DM Sans | 12px, mayúsculas | 700 | `$ap-secondary-700` |
| Chip de horario | DM Sans | 11px | 700 | texto `$ap-secondary-800`, borde `$ap-secondary-200` |
| Ícono de feature | — | 30×30px círculo, ícono 16px | — | 4 variantes de color (ver abajo) |
| Título de feature | Urbanist | 14px | 600 | `$ap-grey-800` |
| Descripción de feature | DM Sans | 13px / line-height 17px | 400 | `$ap-grey-300` |
| Nota destacada | DM Sans | 13px / line-height 1.4 | 500 | texto `$ap-primary-800`, fondo `$ap-ia-panel-bg` |
| Footer padding | — | `16px 32px 20px` | — | borde superior `$ap-grey-50` |
| Botón cancelar | Urbanist | 14px, alto 44px, radio 12px | 700 | `$ap-grey-300` sobre blanco, borde `$ap-grey-100` |
| Botón primario | Urbanist | 14px, alto 44px, radio 12px | 700 | blanco sobre `$ap-secondary-500` (hover `$ap-secondary-600`) |
| Botón cerrar (X) | — | 34×34px círculo | — | blanco, ícono `$ap-grey-500`, sombra `0 2px 8px rgba(0,0,0,.1)` |

**Colores de ícono de feature** (4 variantes, se repiten en ciclo):
1. fondo `$ap-primary-50` / ícono `$ap-primary-500` (azul)
2. fondo `#d1fae5` / ícono `#065f46` (verde)
3. fondo `$ap-secondary-50` / ícono `$ap-secondary-500` (rosa)
4. fondo `rgba(249,198,22,.16)` / ícono `#92400e` (ámbar)

---

## 5. Íconos (todos Lucide, vía `lucide-angular`)

| Uso | Ícono Lucide | Tamaño |
|---|---|---|
| Badge | `Sparkles` | 14px |
| Cerrar | `X` | 18px |
| Nota destacada | `Ticket` | 18px |
| Botón primario | `ArrowRight` | 14px |
| Feature 1 (ejemplo: perfil) | `User` | 16px |
| Feature 2 (ejemplo: gamificación) | `Trophy` | 16px |
| Feature 3 (ejemplo: publicar) | `Smartphone` | 16px |
| Feature 4 (ejemplo: reportes) | `BarChart3` | 16px |

Los últimos 4 son solo ejemplo de contenido — para un modal nuevo, cambia el ícono según el
significado del feature, siempre buscando el equivalente semántico más cercano dentro de Lucide.

---

## 6. Gotchas de implementación (aprendidos a la fuerza — no los repitas)

1. **Angular colapsa espacios en blanco entre elementos** al compilar la plantilla (por defecto,
   `preserveWhitespaces: false`). Si necesitas texto con dos colores distintos en el mismo título,
   NO lo separes en dos `<span>` en líneas distintas — el espacio entre ellos se pierde y el texto
   queda pegado ("...reinventadoenAdvocatesPro"). Mejor: usa un solo nodo de texto con el degradado
   tricolor (`$ap-ia-hero-title-gradient`) en vez de spans de color sólido — es más simple y no
   tiene este problema.
2. Si vas a usar colores sólidos en dos `<span>` por algún motivo, pon el espacio **dentro** del
   texto del primer `<span>` (`>...en </span>`), nunca como texto suelto entre las dos etiquetas.
3. El wash del header (`linear-gradient(108.2deg, ...)`) es **plano**, no son círculos decorativos
   radiales como en el modal de 2 paneles. Es intencional — se distribuye solo, sin necesitar
   ajustar posiciones de círculos.
4. Todos los colores usados ya existen en `_tokens.scss` bajo el prefijo `$ap-*` — no hizo falta
   crear ningún token nuevo para este modal. Antes de agregar un color nuevo, revisa si ya existe
   uno parecido en la paleta.

---

## 7. Checklist para implementar un modal nuevo de esta familia

- [ ] Copiar la estructura HTML de la plantilla, cambiar solo badge/título/descripción/agenda/features/nota/botones.
- [ ] Confirmar que el header y el footer NO tienen `overflow`, y que `.ambassador-body` es el único con `flex:1; min-height:0; overflow-y:auto`.
- [ ] Probar en al menos 2 alturas de ventana distintas (una alta, una baja tipo 480-650px) para confirmar que el scroll queda confinado y nada se corta.
- [ ] Si el título tiene texto en dos colores, usar el degradado tricolor en un solo nodo — no partir en spans.
- [ ] Verificar que todos los íconos son de Lucide y que los colores son tokens `$ap-*` existentes.
- [ ] Agregar el trigger correspondiente en la sección "Modales Especiales" del style guide, y el nuevo valor al union type `openSpecialModalType` en el `.ts`.

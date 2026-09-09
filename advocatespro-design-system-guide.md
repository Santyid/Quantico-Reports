# AdvocatesPro — Guía del Sistema de Diseño

> Este documento describe **únicamente** el sistema de diseño de **AdvocatesPro**. No incluye tokens, componentes ni patrones de Quantico, SocialGest ni ningún otro producto del repositorio, aun cuando compartan infraestructura (Angular, Lucide, `_tokens.scss`).
>
> Fuente de verdad: `src/styles/_tokens.scss` (variables `$ap-*`) y `src/app/components/advocatespro/dashboard/advocatespro-dashboard.component.*` (style guide vivo). Para los valores en formato máquina, ver [advocatespro-design-tokens.json](advocatespro-design-tokens.json).

---

## 1. Identidad de marca

| Aspecto | Valor |
|---|---|
| Color primario | Azul `#0061fe` (compartido con Quantico) |
| Color secundario / acento distintivo | **Rosa** `#ee4a79` — es lo que diferencia visualmente a AdvocatesPro de SocialGest (naranja) y Quantico (púrpura) |
| Tipografía de UI | `Urbanist` (títulos, botones, badges, chips) |
| Tipografía de cuerpo | `DM Sans` (texto, inputs, tablas) |
| Iconografía | Lucide (`lucide-angular`), nunca otro paquete de iconos |
| Prefijo de tokens SCSS | `$ap-` |
| Prefijo de clases CSS | `.style-guide__*` (BEM) en el componente vivo del style guide |

El **rosa** (`$ap-secondary-500`) es la señal visual más importante de la marca: aparece en botones de acción secundaria/destructiva, badges de estado activo, checkboxes/radios marcados, iconos de acción de tabla y en el modal de confirmación tipo "alert". Si un elemento necesita destacar como "propio de AdvocatesPro" (vs. un componente genérico del design system compartido), el rosa es la palanca.

---

## 2. Paleta de colores

### 2.1 Primary (azul)

| Token | Valor | Uso |
|---|---|---|
| `$ap-primary-50` | `#e6efff` | Fondos suaves, hover de chips |
| `$ap-primary-100` | `#b0ceff` | Estados disabled, gradiente de barras |
| `$ap-primary-200` | `#8ab6ff` | Badge gradient, día seleccionado (hover) |
| `$ap-primary-300` | `#5495fe` | Inicio de gradiente de barras/gráficas |
| `$ap-primary-400` | `#3381fe` | Uso puntual en gradientes |
| `$ap-primary-500` | `#0061fe` | **Base** — acciones primarias, focus, links, día seleccionado en date picker |
| `$ap-primary-600` | `#0058e7` | Hover de botón primary |
| `$ap-primary-700` | `#0045b4` | Active/pressed de botón primary |
| `$ap-primary-800` | `#00358c` | Texto sobre fondos de nota IA |
| `$ap-primary-900` | `#00296b` | Título/subtítulo de panel IA, gradiente hero |

### 2.2 Secondary — Rosa (acento distintivo)

| Token | Valor | Uso |
|---|---|---|
| `$ap-secondary-50` | `#fdedf2` | Fondo seleccionado (select-segment, menu item, radio-tab activo) |
| `$ap-secondary-100` | `#fac7d5` | Fondo de chip secondary, gradiente de barras |
| `$ap-secondary-200` | `#f7acc1` | Disabled bg de botón secondary |
| `$ap-secondary-300` | `#f38fab` | Hover de borde en radio button |
| `$ap-secondary-400` | `#f07090` | Uso puntual |
| `$ap-secondary-500` | `#ee4a79` | **Base** — botón secondary, botón "alert" del confirm-modal, toggle ON, checkbox/radio activo, icono de acción de tabla |
| `$ap-secondary-600` | `#d9436e` | Hover de botón secondary/alert |
| `$ap-secondary-700` | `#b93c5e` | Active/pressed |
| `$ap-secondary-800` | `#8a2c48` | Uso puntual (texto sobre fondo claro) |
| `$ap-secondary-900` | `#5e1c30` | Uso puntual |

> ⚠️ **Nota de higiene de tokens**: existe una definición legacy duplicada de `$ap-accent-*` en `_tokens.scss` (líneas ~378-384) con valores ligeramente distintos a la definición activa (líneas ~2385-2392, que son alias de `$ap-secondary-*`). SCSS usa la última declaración, así que el valor efectivo es el de `$ap-secondary-*`. Se recomienda eliminar el bloque legacy y migrar cualquier uso de `$ap-accent-*` a `$ap-secondary-*` directamente.

### 2.3 Grey

| Token | Valor | Uso |
|---|---|---|
| `$ap-grey-50` | `#ececec` | Bordes de cards, tabla, stepper track |
| `$ap-grey-100` | `#c3c3c3` | Bordes de inputs/botones white, disabled text |
| `$ap-grey-200` | `#a6a6a6` | Placeholder, iconos deshabilitados |
| `$ap-grey-300` | `#7d7d7d` | Texto secundario, placeholder, iconos |
| `$ap-grey-400` | `#646464` | Uso puntual |
| `$ap-grey-500` | `#3d3d3d` | Texto de cuerpo, títulos de card en features |
| `$ap-grey-600` | `#383838` | Uso puntual |
| `$ap-grey-700` | `#2b2b2b` | Uso puntual |
| `$ap-grey-800` | `#222222` | Texto principal, títulos, labels |
| `$ap-grey-900` | `#1a1a1a` | Fondo de bloques de código |

### 2.4 Semánticos (Success / Warning / Error)

| Escala | Base | Uso |
|---|---|---|
| Success | `$ap-success-400` `#3ace76` | Badge positivo, toast de éxito, icono de confirmación, tendencia positiva |
| Warning | `$ap-warning-400` `#ff962c` | Badge neutro, toast de advertencia, icono del code-modal (2FA) |
| Error | `$ap-error-400` `#fc3e3e` | Badge negativo, toast de error, botón destructivo del code-modal, borde de input inválido |

### 2.5 Neutral, base y AI

| Token | Valor | Uso |
|---|---|---|
| `$ap-neutral-50` | `#fafafa` | Hover de fila de tabla, hover de opción de select |
| `$ap-neutral-100` | `#f5f7fa` | Uso puntual |
| `$ap-neutral-200` | `#f1f1f1` | Texto de botón primary/secondary, active de botón white |
| `$ap-white-base` | `#ffffff` | Fondo de cards, modales, inputs |
| `$ap-black-base` | `#000000` | Base de sombras (`rgba($ap-black-base, …)`) |
| `$ap-ai-50` / `$ap-ai-100` | `#e5f6ff` / `#c9edff` | Hover/active del botón AI |
| `$ap-ai-500` | `#00aaff` | Borde y extremo de gradiente del botón AI ("Mia") |

### 2.6 Gradientes de IA

| Token | Definición | Uso |
|---|---|---|
| `$ap-ia-gradient` | `linear-gradient(19.84deg, primary-500 → ai-500)` | Borde del botón AI |
| `$ap-ia-panel-bg` | Azul → blanco → rosa, 108.2° | Fondo de panel "Creando ideas", nota destacada de modal especial |
| `$ap-ia-note-bg` | Azul suave, 161.67° | Nota compacta de IA |
| `$ap-ia-text-gradient` | `linear-gradient(5.79deg, primary-500 → ai-500)` | Texto de badges/títulos de IA |
| `$ap-ia-hero-title-gradient` | Azul → azul oscuro → rosa, tricolor | Títulos hero grandes (modal de lanzamiento, sección "Elementos de IA") |
| `$ap-ia-progress-gradient` | `primary-500 → primary-100` | Barra de progreso del panel de IA |

### 2.7 Etiquetas de color (10 variantes pastel + IA)

`azul` · `verde` · `amarillo` · `rojo` · `violeta` · `naranja` · `turquesa` · `gris` · `vinotinto` · `olivo` — cada una con `bg` pastel + `text` en tono oscuro correspondiente (ver JSON, sección `component.colorLabels.variants`). La variante **`ia`** es la excepción: fondo blanco, borde `primary-500`, texto en `$ap-ia-text-gradient`.

---

## 3. Tipografía

| Familia | Uso |
|---|---|
| **Urbanist** | Títulos, botones, badges, chips, labels de UI, tabs |
| **DM Sans** | Texto de cuerpo, inputs, tablas, descripciones |

### Escala de tamaños

| Token | Tamaño | Uso típico |
|---|---|---|
| `xs` | 12px | Nota de IA compacta, texto auxiliar |
| `sm` | 14px | Badge, chip, botón small, radio-tab |
| `md` | 16px | Botón medium, texto de cuerpo, textarea, select |
| `lg` | 18px | Botón large, título de feature card, subtítulo de panel IA |
| `xl` | 20px | Título de card, descripción de modal especial |
| `2xl` | 24px | Título de tabla, título de card large |
| `display` | 40px | Título hero de IA (gradiente tricolor) |

### Pesos

| Token | Valor | Uso |
|---|---|---|
| `regular` | 400 | Cuerpo de texto (DM Sans) |
| `medium` | 500 | Labels de etiquetas de color, search input |
| `semibold` | 600 | Títulos de card, hero title, chips, badges |
| `bold` | 700 | Botones, radio-tab, títulos de tabla |

**Regla de jerarquía**: título de sección (24px/700, Urbanist) → título de card (20px/600, DM Sans) → título de subcomponente (18px/600, Urbanist) → cuerpo (16px/400, DM Sans) → auxiliar (12–14px, grey-300).

---

## 4. Espaciado

Escala base (derivada de los paddings/gaps reales usados en cada componente — no existe una escala numérica global declarada como tal en `_tokens.scss`, pero se respeta consistentemente):

| Paso | Valor |
|---|---|
| 1 | 4px |
| 1.5 | 6px |
| 2 | 8px |
| 2.5 | 10px |
| 3 | 12px |
| 4 | 16px |
| 5 | 20px |
| 6 | 24px |
| 8 | 32px |
| 10 | 40px |
| 12 | 48px |

### Reglas de proximidad (Gestalt aplicado a AdvocatesPro)

- **Dentro de un grupo de campos relacionados**: 12–16px de separación.
- **Entre secciones/grupos distintos dentro de una card**: 24–32px.
- **Padding interno de card**: 24px (simple) o 32px (large/hero).
- **Padding interno de modal**: 40px 32px (paneles del modal especial), 20px auto en cards internas.
- **Gap de grid de features (2×2)**: 20px.

---

## 5. Radios de borde

| Token | Valor | Uso |
|---|---|---|
| `sm` | 8px | Checkbox |
| `md` | 10px | Select, text input, textarea, toast, label |
| `lg` | 12px | Botón, menu, number input, account counter, select-date, radio-tab |
| `xl` | 16px | Card, nota de modal especial, panel de IA |
| `pill-chip` | 23px | Chip, select-segment chip |
| `2xl` | 24px | Code modal, panel del modal de lanzamiento |
| `full` | 50px | Badge, search input (pill), badge del modal especial |
| `circle` | 50% | Avatar |

**Regla**: cuanto más "de acción rápida / pill" es el elemento (chip, badge, search), más redondeado. Cuanto más es "contenedor" (card, modal, panel), radio moderado (16–24px). Los inputs de formulario usan un radio intermedio (10–12px) para distinguirse de los pills sin verse como cajas duras.

---

## 6. Sombras

| Token | Valor | Uso |
|---|---|---|
| `toast` | `0 8px 32px rgba(0,0,0,0.08)` | Notificación toast |
| `selectDateDropdown` | `0 4px 15px rgba(0,0,0,0.12)` | Dropdown del date picker |
| `selectDropdown` | `0 4px 12px rgba(0,0,0,0.1)` | Dropdown del select |
| `toggleThumb` | `0 1px 3px rgba(0,0,0,0.15)` | Thumb del toggle |

Sombras adicionales usadas **inline** (no tokenizadas, documentadas para referencia):

| Valor | Uso |
|---|---|
| `0 20px 60px rgba(0,0,0,0.3)` | Contenedor del modal especial |
| `2px 5px 13.5px rgba(0,0,0,0.05)` | Feature card dentro de modales especiales |
| `0 2px 8px rgba(0,0,0,0.1)` | Botón flotante de cerrar modal |
| `0 4px 16px rgba(0,0,0,0.08)` | Hover de trigger de modal en el style guide |

---

## 7. Breakpoints

| Nombre | Valor | Uso |
|---|---|---|
| `mobile` | 640px | Grid de features pasa a 1 columna |
| `tablet` | 1300px | Modal especial pasa de 2 columnas a apilado vertical |

> No están tokenizados como variables SCSS; son valores usados de forma consistente en los `@media` de `advocatespro-dashboard.component.scss`. Se recomienda promoverlos a variables (`$ap-breakpoint-mobile`, `$ap-breakpoint-tablet`) si se van a reutilizar en más componentes.

---

## 8. Componentes base y variantes

### 8.1 Botones (`<app-button>`)

| Variante | Fondo | Texto | Uso |
|---|---|---|---|
| `primary` | `$ap-primary-500` | `$ap-neutral-200` | Acción principal |
| `secondary` | `$ap-secondary-500` (rosa) | `$ap-white-base` | Acción secundaria / distintiva de AdvocatesPro |
| `white` | `$ap-white-base` + borde `$ap-grey-100` | `$ap-grey-300` | Acción terciaria / cancelar |
| `text` | transparente | `$ap-primary-500` | Enlace tipo texto |

Tamaños: `small` (36px, 14px), `medium` (40px, 16px), `large` (48px, 18px). Compartido: `Urbanist 700`, radio `12px`, padding `10px 20px`, gap `10px`, transición `all 0.2s ease`.

**Variantes especiales del sistema:**
- **AI Button** (`.ai-btn`): fondo blanco, borde de 2px con gradiente `$ap-ia-gradient`, texto `$ap-primary-500`. Usado exclusivamente para acciones de IA ("Mia").
- **Icon Button**: cuadrado, solo ícono, mismas variantes/tamaños que el botón regular.
- **Toggle Button**: tipo pill que alterna activo/inactivo (filtros).

### 8.2 Inputs

| Componente | Alturas | Radio | Notas |
|---|---|---|---|
| `<app-text-input>` | 36/40/48px | 10px | Borde de error en `$ap-error-400` |
| `<app-search-input>` | 36/40/50px | **50px (pill)** | Único input con forma de pill |
| `<app-select>` | 36/40/48px | 10px | Dropdown con `shadow.selectDropdown` |
| `<app-select-date>` | 36/40/48px | 12px | Día seleccionado en `$ap-primary-500` |
| `<app-hour-date-picker>` | — | — | Spinner con gap de 18px |
| `<app-textarea>` | — | 10px | Opacidad 0.5 en disabled |
| `<app-number-input>` | 36/40/48px | 12px | Botones +/- en hover `$ap-primary-500` |
| `<app-account-counter>` | 36/40/48px | 12px | Texto `$ap-grey-800`, `Urbanist 600` |

Todos siguen `ControlValueAccessor` para Reactive Forms. Foco: borde `$ap-primary-500` en todos.

### 8.3 Cards (`<app-card>`)

- Fondo `$ap-white-base`, borde `$ap-grey-50`, radio `16px`.
- Padding: `simple` 24px / `large` 32px.
- Título: `$ap-grey-800`, tamaño `20px` (titled) o `24px` (large).
- **Regla obligatoria (Reportes)**: todo título de sección debe vivir dentro de una card — nunca un `<h3>` suelto fuera de un contenedor.

### 8.4 Badges

| Componente | Variantes | Notas |
|---|---|---|
| `<app-status-badge>` (genérico) | `success / warning / error / info / neutral` | Dot + label, pill con borde `$ap-grey-100` |
| Status Badge (AdvocatesPro) | `positiva / negativa / neutra / desactivado` × `small/large` | Dots mapeados a success/error/warning/grey-200 |
| Etiquetas de color | 10 pastel + `ia` | Ver §2.7 |

### 8.5 Chips (`<div class="chip">`)

Variantes: `white`, `primary`, `secondary` (rosa), `disabled`. Altura 26px, radio 23px (pill), `Urbanist 600 14px`. Botón "add" con hover en `$ap-primary-500`.

### 8.6 Toaster

4 variantes (`success/warning/error/info`), cada una con franja lateral de 13px + fondo del color-50 correspondiente + icono + texto (título `$ap-grey-800`, mensaje `$ap-grey-300`). Sombra `shadow.toast`.

### 8.7 Modales

Cuatro familias, cada una con un propósito distinto — **no mezclar sus patrones**:

#### a) Confirm Modal (`<app-confirm-modal>`)
Diálogo centrado simple. 4 variantes: `general` (azul), `confirmation` (verde), `alert` (**rosa** — distintivo de AdvocatesPro), `error` (rojo). Radio 12px, max-width 700px, icono circular de 56px según variante.

#### b) Confirm Code Modal (`<app-confirm-code-modal>`)
Confirmación destructiva de doble factor: el usuario debe copiar un código y pegarlo para habilitar el botón de acción (rojo). Radio 24px, icono warning.

#### c) Modal Especial ("Special Launch Modal")
Layout de **dos paneles fijos** (555px + 718px, radio 24px partido — `24px 0 0 24px` / `0 24px 24px 0`), usado para anuncios/eventos destacados (hoy: "Webinar en vivo"). Estructura fija, ver §8.7.1 y la plantilla de referencia [advocatespro-modal-template.html](advocatespro-modal-template.html).

**8.7.1 Anatomía del Modal Especial:**
1. Overlay fijo `rgba(0,0,0,0.5)`, cierra al hacer click fuera.
2. Botón cerrar flotante: círculo blanco 34px, `top:0; right:-60px` respecto al modal (fuera del contenedor, no dentro del panel).
3. **Panel izquierdo** (blanco, radio `24px 0 0 24px`):
   - Dos círculos decorativos radiales (729px, `primary-50`→transparente abajo-izquierda, `secondary-50`→transparente arriba-derecha), `overflow:hidden` en el panel.
   - Badge pill con borde `primary-500` + fondo degradado (`$ap-special-launch-badge-bg`) + icono Sparkles + texto en `$ap-ia-text-gradient`.
   - Título hero en `$ap-ia-hero-title-gradient` (tricolor).
   - Descripción (20px, `$ap-grey-500`).
   - Contenido variable (ej. agenda de evento, imagen/video con botón overlay).
4. **Panel derecho** (blanco, radio `0 24px 24px 0`):
   - Título de sección (20px/600, `$ap-grey-800`).
   - Grid 2×2 de feature cards (blancas, sombra suave, icono circular de 50px en 4 colores distintos: azul/verde/rosa/ámbar — ver `component.specialLaunchModal.feature` en el JSON).
   - Nota destacada con fondo `$ap-ia-panel-bg` + encabezado con icono + texto en gradiente + descripción.
   - Footer: botón `cancel` (blanco, bordeado, `flex:1`) + botón `primary` (rosa, compacto, con icono).
5. Responsive: por debajo de 1300px se apila verticalmente (radios pasan a `24px 24px 0 0` / `0 0 24px 24px`); por debajo de 640px el grid de features pasa a 1 columna.

#### d) Modal Especial Compacto (variante de 1 panel, "Webinar Embajador")

Variante de **un solo panel** (480px, radio 24px completo) del Modal Especial — se usa cuando el
contenido es más liviano (agenda + lista corta de features + CTA) y no justifica el layout de dos
paneles de 1293px. Mismo propósito (anuncio/evento destacado), estructura distinta.

**8.7.2 Anatomía:**
1. Overlay igual que el resto (`rgba(0,0,0,0.5)`, cierra al hacer click fuera).
2. Botón cerrar: círculo blanco 34px, **hermano flex** de la tarjeta (`gap:14px`), no absoluto —
   evita que se corte en pantallas angostas.
3. **Header** (fijo, no scrollea): wash plano diagonal 108.2° (`primary-100` → blanco → `secondary-100`),
   badge (borde `primary-500`, sin degradado de fondo) + título hero en `$ap-ia-hero-title-gradient`
   a 25px + descripción (14px, `$ap-grey-500`).
4. **Body** (único bloque que scrollea — `flex:1; min-height:0; overflow-y:auto`): agenda del evento
   (fecha 52×52px + horarios en chips que envuelven), lista de features en columna (ícono circular
   30px en 4 colores, no grid 2×2), nota destacada (`$ap-ia-panel-bg`).
5. **Footer** (fijo, no scrollea): botón cancelar (`flex:1`) + botón primario (`flex:2`, rosa, con icono).
6. Alto máximo `calc(100vh - 40px)` — si el contenido no cabe, scrollea solo el body; header y footer
   permanecen siempre visibles.

Ver plantilla de referencia [advocatespro-modal-ambassador-template.html](advocatespro-modal-ambassador-template.html)
y la guía de implementación [advocatespro-modal-ambassador-guide.md](advocatespro-modal-ambassador-guide.md)
(incluye tabla de medidas exacta y los errores comunes a evitar al construir variantes nuevas).

### 8.8 Tablas (`.sg-table`)

CSS-only, sin dependencias. Fila de header + filas de body con hover (`$ap-neutral-50`), altura de fila 44px, padding de celda `10px 20px`. Badges de estado inline. Iconos de acción en **rosa** (`$ap-secondary-500`) — distintivo de AdvocatesPro (en otros productos del repo el icono de acción de tabla usa su propio color de marca).

### 8.9 Otros controles

Toggle (3 tamaños, ON en rosa) · Checkbox (radio 8px, activo en rosa) · Radio Button vía PrimeNG (tema Lara) · Radio Tab (pill, activo en rosa) · Stepper (barra de progreso azul) · Menu (item seleccionado en `secondary-50`) · Avatar (5 tamaños, badge de plataforma).

---

## 9. Reglas de uso y jerarquía visual

1. **El rosa es para acción/estado, no para decoración**. Úsalo en: botón secondary, botón "alert" de confirm-modal, toggle/checkbox/radio activos, icono de acción de tabla, badge de etiqueta seleccionada. No lo uses como color de fondo decorativo salvo en los gradientes de IA ya definidos.
2. **Los gradientes de IA (`$ap-ia-*`) están reservados** para elementos relacionados con inteligencia artificial: badge "Nuevo"/IA, título hero, panel "Creando ideas", nota de IA, botón AI. No aplicar estos gradientes a elementos sin relación con IA.
3. **Todo título de sección va dentro de una card** (regla obligatoria heredada de Reportes, aplica también al style guide de AdvocatesPro).
4. **Jerarquía tipográfica estricta**: 24px/700 (sección) > 20px/600 (card) > 18px/600 (subcomponente) > 16px/400 (cuerpo) > 12-14px (auxiliar). No saltarse niveles.
5. **Proximidad**: 12–16px agrupa campos relacionados; 24–32px separa grupos/secciones distintas dentro de la misma card.
6. **Cierre de modales**: siempre 3 vías — click en overlay, botón X, y acción explícita (cancelar/confirmar). Nunca solo una.
7. **No mezclar familias de modal**: un Confirm Modal no debe llevar el layout de dos paneles del Modal Especial, y viceversa. Son patrones con propósitos distintos (confirmación puntual vs. anuncio/evento destacado).
8. **Iconografía exclusivamente Lucide**, vía `lucide-angular`. Si el diseño de origen (Figma/mockup) muestra un ícono que no existe en Lucide, usar el equivalente semántico más cercano — nunca instalar otro paquete de iconos.

---

## 10. Patrones de layout

### 10.1 Style Guide (dashboard vivo)

- Contenedor central `max-width: 1200px`, padding `40px 32px`.
- Header sticky con buscador que filtra secciones por `keywords`.
- Cada sección = una o más `.style-guide__card` (nunca contenido suelto sin card).

### 10.2 Grid de features (2×2 → 1 columna)

Usado en modales especiales y secciones de "qué incluye": `grid-template-columns: repeat(2, 1fr)`, gap 20px, colapsa a 1 columna en mobile (640px).

### 10.3 Modal de dos paneles

Panel izquierdo (hero/contexto, ancho fijo ~555px) + panel derecho (detalle/acción, ancho fijo ~718px), sin gap entre ellos, radios partidos para que visualmente sea un solo bloque. Se apila en tablet (1300px). Este patrón es específico del Modal Especial — no usarlo para diálogos de confirmación simples.

### 10.4 Layout de tabla

Título dentro de card → wrapper de tabla → fila header (fondo distinto, `Urbanist 700`) → filas body (`DM Sans 400`, hover sutil) → columna final opcional de iconos de acción, alineada al centro.

---

## Referencias

- Tokens en JSON: [advocatespro-design-tokens.json](advocatespro-design-tokens.json)
- Plantilla de referencia del Modal de Lanzamiento (2 paneles): [advocatespro-modal-template.html](advocatespro-modal-template.html)
- Plantilla de referencia del Modal Especial Compacto (1 panel, "Webinar Embajador"): [advocatespro-modal-ambassador-template.html](advocatespro-modal-ambassador-template.html)
- Guía de implementación del Modal Especial Compacto (medidas exactas + errores a evitar): [advocatespro-modal-ambassador-guide.md](advocatespro-modal-ambassador-guide.md)
- Fuente viva: `src/app/components/advocatespro/dashboard/advocatespro-dashboard.component.{ts,html,scss}`
- Tokens SCSS: `src/styles/_tokens.scss` (bloque `AdvocatesPro —`, prefijo `$ap-`)

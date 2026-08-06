# SocialGest — Design Tokens

> Sistema de diseno independiente para el entorno SocialGest.
> Todos los tokens usan el prefijo `$sg-` para evitar colisiones con otros entornos (SocialGest, Quantico, Tikket).
> Color base secondary: **naranja (#f47a37)** — distintivo de SocialGest.

---

## 1. Primary Color Scale (Blue)

Igual que Quantico — ambos productos usan azul como color primario.

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$sg-primary-50` | `#e6efff` | rgb(230, 239, 255) | Tinta mas clara, fondos |
| `$sg-primary-100` | `#b0ceff` | rgb(176, 206, 255) | Tinta clara, fondos hover |
| `$sg-primary-200` | `#8ab6ff` | rgb(138, 182, 255) | Accent suave |
| `$sg-primary-300` | `#5495fe` | rgb(84, 149, 254) | Accent medio, gradientes |
| `$sg-primary-400` | `#3381fe` | rgb(51, 129, 254) | Accent fuerte |
| `$sg-primary-500` | `#0061fe` | rgb(0, 97, 254) | **Base Primary** — botones, links, focus |
| `$sg-primary-600` | `#0058e7` | rgb(0, 88, 231) | Hover |
| `$sg-primary-700` | `#0045b4` | rgb(0, 69, 180) | Active/pressed |
| `$sg-primary-800` | `#00358c` | rgb(0, 53, 140) | Accent oscuro |
| `$sg-primary-900` | `#00296b` | rgb(0, 41, 107) | Tinta mas oscura |

---

## 2. Secondary Color Scale (Orange)

Color distintivo de SocialGest — naranja base `#f47a37`.

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$sg-secondary-50` | `#fef2eb` | rgb(254, 242, 235) | Tinta mas clara, fondos seleccionados |
| `$sg-secondary-100` | `#fcd6c1` | rgb(252, 214, 193) | Tinta clara, badges |
| `$sg-secondary-200` | `#fac2a3` | rgb(250, 194, 163) | Accent suave, disabled |
| `$sg-secondary-300` | `#f8a679` | rgb(248, 166, 121) | Accent medio, gradientes |
| `$sg-secondary-400` | `#f6955f` | rgb(246, 149, 95) | Accent fuerte |
| `$sg-secondary-500` | `#f47a37` | rgb(244, 122, 55) | **Base Secondary** — acciones secundarias, acentos naranja |
| `$sg-secondary-600` | `#e5641e` | rgb(229, 100, 30) | Hover |
| `$sg-secondary-700` | `#c84802` | rgb(200, 72, 2) | Active/pressed |
| `$sg-secondary-800` | `#b84100` | rgb(184, 65, 0) | Accent oscuro |
| `$sg-secondary-900` | `#9c3700` | rgb(156, 55, 0) | Tinta mas oscura |

---

## 3. Grey Color Scale

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$sg-grey-50` | `#ececec` | rgb(236, 236, 236) | Bordes, divisores, fondos |
| `$sg-grey-100` | `#c3c3c3` | rgb(195, 195, 195) | Bordes de inputs |
| `$sg-grey-200` | `#a6a6a6` | rgb(166, 166, 166) | Placeholder, iconos |
| `$sg-grey-300` | `#7d7d7d` | rgb(125, 125, 125) | Texto secundario, iconos |
| `$sg-grey-400` | `#646464` | rgb(100, 100, 100) | Texto de labels |
| `$sg-grey-500` | `#3d3d3d` | rgb(61, 61, 61) | Texto body |
| `$sg-grey-600` | `#383838` | rgb(56, 56, 56) | Texto oscuro |
| `$sg-grey-700` | `#2b2b2b` | rgb(43, 43, 43) | Texto muy oscuro |
| `$sg-grey-800` | `#222222` | rgb(34, 34, 34) | Headings, texto primario |
| `$sg-grey-900` | `#1a1a1a` | rgb(26, 26, 26) | Texto casi negro |

---

## 4. Success Color Scale (Green)

Mismos valores hex que Quantico (estados semanticos compartidos).

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$sg-success-50` | `#ebfaf1` | rgb(235, 250, 241) | Fondo claro success |
| `$sg-success-100` | `#aeebc7` | rgb(174, 235, 199) | Tinta clara |
| `$sg-success-200` | `#8de3b0` | rgb(141, 227, 176) | Accent suave |
| `$sg-success-300` | `#5bd68d` | rgb(91, 214, 141) | Accent medio |
| `$sg-success-400` | `#3ace76` | rgb(58, 206, 118) | **Base Success** — indicadores, badges |
| `$sg-success-500` | `#299053` | rgb(41, 144, 83) | Success oscuro |
| `$sg-success-600` | `#237e48` | rgb(35, 126, 72) | Success mas oscuro |

---

## 5. Warning Color Scale (Orange)

Mismos valores hex que Quantico (estados semanticos compartidos).

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$sg-warning-50` | `#fff5ea` | rgb(255, 245, 234) | Fondo claro warning |
| `$sg-warning-100` | `#ffd4a8` | rgb(255, 212, 168) | Tinta clara |
| `$sg-warning-200` | `#ffc285` | rgb(255, 194, 133) | Accent suave |
| `$sg-warning-300` | `#ffa850` | rgb(255, 168, 80) | Accent medio |
| `$sg-warning-400` | `#ff962c` | rgb(255, 150, 44) | **Base Warning** — alertas, indicadores |
| `$sg-warning-500` | `#b3691f` | rgb(179, 105, 31) | Warning oscuro |
| `$sg-warning-600` | `#9c5c1b` | rgb(156, 92, 27) | Warning mas oscuro |

---

## 6. Error Color Scale (Red)

Mismos valores hex que Quantico (estados semanticos compartidos).

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$sg-error-50` | `#ffecec` | rgb(255, 236, 236) | Fondo claro error |
| `$sg-error-100` | `#feb0b0` | rgb(254, 176, 176) | Tinta clara |
| `$sg-error-200` | `#fd8f8f` | rgb(253, 143, 143) | Accent suave |
| `$sg-error-300` | `#fd5f5f` | rgb(253, 95, 95) | Accent medio |
| `$sg-error-400` | `#fc3e3e` | rgb(252, 62, 62) | **Base Error** — destructivo, alertas |
| `$sg-error-500` | `#b02b2b` | rgb(176, 43, 43) | Error oscuro |
| `$sg-error-600` | `#9a2626` | rgb(154, 38, 38) | Error mas oscuro |

---

## 7. Neutral Color Scale

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$sg-neutral-50` | `#fafafa` | rgb(250, 250, 250) | Fondos sutiles, message boxes |
| `$sg-neutral-100` | `#f5f7fa` | rgb(245, 247, 250) | Fondos claros |
| `$sg-neutral-200` | `#f1f1f1` | rgb(241, 241, 241) | Fondos de cards/secciones |

---

## 8. White

| Token | Hex | Uso |
|-------|-----|-----|
| `$sg-white-base` | `#ffffff` | Fondos, superficies de cards |

---

## 9. Black

| Token | Hex | Uso |
|-------|-----|-----|
| `$sg-black-base` | `#000000` | Negro puro, superficies oscuras |

---

## 9.1. AI Color Scale (Cyan)

Mismos valores hex que Quantico (reservado para botones AI).

| Token | Hex | RGB | Uso |
|-------|-----|-----|-----|
| `$sg-ai-50` | `#e5f6ff` | rgb(229, 246, 255) | Hover boton AI |
| `$sg-ai-100` | `#c9edff` | rgb(201, 237, 255) | Active boton AI |
| `$sg-ai-500` | `#00aaff` | rgb(0, 170, 255) | **Base AI** — borde boton AI |

---

### IA Gradiente

Gradiente distintivo para elementos de IA en SocialGest.

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-ia-gradient` | `linear-gradient(19.84deg, $sg-primary-500 2.99%, $sg-ai-500 105.98%)` | Botones, iconos, headers de IA |

Se compone del gradiente de `$sg-primary-500` (#0061fe) al `$sg-ai-500` (#00aaff) en un ángulo de 19.84°.

---

### Elementos de IA

Colección de 3 componentes distintivos para funcionalidades de IA en SocialGest: un titulo hero con gradiente tricolor, una nota informativa compacta y un panel grande de progreso "Generando con IA".

#### 1. Titulo con degradés para IA

Encabezado grande con texto de gradiente tricolor (azul → azul oscuro → naranja). Uso: pantallas hero y encabezados destacados de IA.

- Fuente: `Urbanist SemiBold 48px`, line-height 48px, tracking -0.96px
- Gradiente de texto: `$sg-ia-hero-title-gradient` (blue → dark blue → orange)
- Aplicado con `background-clip: text; -webkit-text-fill-color: transparent;`

#### 2. Nota de IA

Caja compacta para hints o notas informativas debajo de componentes/flujos.

- Fondo: `$sg-ia-note-bg` (gradiente azul suave)
- Padding: `4px 16px` | Border-radius: `10px`
- Flex row, gap 12px, items center
- Icono Sparkles (16px) en `$sg-primary-500`
- Texto: `DM Sans Regular 12px`, color `$sg-primary-900`, tracking -0.24px, line-height 21px

#### 3. Generando con IA (panel)

Panel grande que muestra un proceso de generacion en curso.

- Fondo: `$sg-ia-panel-bg` (gradiente suave primary-white-secondary)
- Padding: `24px 32px` | Border-radius: `16px`
- Estructura: header (icono + titulo + subtitulo), barra de progreso, card interna de estado y footer informativo
- Titulos usan `$sg-ia-text-gradient` como texto de gradiente
- Badge "En progreso" con `$sg-ia-gradient` de fondo

#### Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-ia-panel-bg` | `linear-gradient(111.48deg, rgba(230,239,255,0.7) 0%, $sg-white-base 50.75%, rgba(254,242,235,0.7) 100%)` | Fondo del panel "Generando con IA" |
| `$sg-ia-note-bg` | `linear-gradient(161.67deg, rgba(230,239,255,0.33) → rgba(133,177,255,0.33))` | Fondo de la Nota de IA |
| `$sg-ia-text-gradient` | `linear-gradient(5.79deg, $sg-primary-500 2.99%, $sg-ai-500 105.98%)` | Gradiente de texto para titulos/subtitulos de IA |
| `$sg-ia-hero-title-gradient` | `linear-gradient(to right, $sg-primary-500 1.85%, $sg-primary-900 49.5%, $sg-secondary-500 82.2%)` | Gradiente de texto tricolor para titulos hero de IA |
| `$sg-ia-progress-gradient` | `linear-gradient(90deg, $sg-primary-500, $sg-primary-100)` | Fill de la barra de progreso IA |
| `$sg-ia-panel-padding` | `24px 32px` | Padding del panel IA |
| `$sg-ia-panel-radius` | `16px` | Border radius del panel IA |
| `$sg-ia-panel-icon-size` | `48px` | Tamano del contenedor del icono Sparkles |
| `$sg-ia-panel-icon-bg` | `$sg-white-base` (#ffffff) | Fondo del contenedor del icono |
| `$sg-ia-panel-title-color` | `$sg-primary-900` (#00296b) | Color base del titulo (usado con text gradient) |
| `$sg-ia-panel-title-font-size` | `18px` | Tamano del titulo del panel |
| `$sg-ia-panel-subtitle-color` | `$sg-primary-900` (#00296b) | Color del subtitulo del panel |
| `$sg-ia-panel-subtitle-font-size` | `14px` | Tamano del subtitulo |
| `$sg-ia-note-padding` | `4px 16px` | Padding de la nota de IA |
| `$sg-ia-note-radius` | `10px` | Border radius de la nota |
| `$sg-ia-note-text-color` | `$sg-primary-900` (#00296b) | Color del texto de la nota |
| `$sg-ia-note-text-size` | `12px` | Tamano del texto de la nota |
| `$sg-ia-hero-title-size` | `48px` | Tamano de titulo hero IA |
| `$sg-ia-hero-title-font` | `'Urbanist', sans-serif` | Familia tipografica del titulo hero |
| `$sg-ia-hero-title-weight` | `600` (SemiBold) | Peso de fuente del titulo hero |
| `$sg-ia-hero-title-letter-spacing` | `-0.96px` | Tracking del titulo hero |

#### Iconos Lucide utilizados

- `Sparkles` — icono del panel y de la nota de IA
- `LoaderCircle` — icono giratorio de estado dentro del panel
- `Info` — icono del footer del panel

---

## 10. Button Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-button-primary-bg` | `$sg-primary-500` (#0061fe) | Fondo boton primary |
| `$sg-button-primary-text` | `$sg-neutral-200` (#f1f1f1) | Texto boton primary |
| `$sg-button-primary-hover` | `$sg-primary-600` (#0058e7) | Hover boton primary |
| `$sg-button-primary-active` | `$sg-primary-700` (#0045b4) | Active boton primary |
| `$sg-button-primary-disabled-bg` | `$sg-primary-200` (#8ab6ff) | Disabled boton primary |
| `$sg-button-secondary-bg` | `$sg-secondary-500` (#f47a37) | Fondo boton secondary (naranja) |
| `$sg-button-secondary-text` | `$sg-white-base` (#ffffff) | Texto boton secondary |
| `$sg-button-secondary-hover` | `$sg-secondary-600` (#e5641e) | Hover boton secondary |
| `$sg-button-secondary-active` | `$sg-secondary-700` (#c84802) | Active boton secondary |
| `$sg-button-secondary-disabled-bg` | `$sg-secondary-200` (#fac2a3) | Disabled boton secondary |
| `$sg-button-white-bg` | `$sg-white-base` (#ffffff) | Fondo boton white |
| `$sg-button-white-text` | `$sg-grey-300` (#7d7d7d) | Texto boton white |
| `$sg-button-white-border` | `$sg-grey-100` (#c3c3c3) | Borde boton white |
| `$sg-button-white-hover` | `$sg-neutral-50` (#fafafa) | Hover boton white |
| `$sg-button-white-active` | `$sg-neutral-200` (#f1f1f1) | Active boton white |
| `$sg-button-white-disabled-text` | `$sg-grey-100` (#c3c3c3) | Disabled texto boton white |
| `$sg-button-height-large` | `48px` | Altura boton large |
| `$sg-button-height-medium` | `40px` | Altura boton medium |
| `$sg-button-height-small` | `36px` | Altura boton small |
| `$sg-button-font-size-large` | `18px` | Font size boton large |
| `$sg-button-font-size-medium` | `16px` | Font size boton medium |
| `$sg-button-font-size-small` | `14px` | Font size boton small |
| `$sg-button-font-family` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-button-font-weight` | `700` | Peso de fuente |
| `$sg-button-border-radius` | `12px` | Border radius |
| `$sg-button-padding` | `10px 20px` | Padding |
| `$sg-button-gap` | `10px` | Gap entre icono y texto |
| `$sg-button-transition` | `all 0.2s ease` | Transicion de estados |

### AI Button (Cyan con borde gradiente + variante Mia)

Botón blanco con borde de gradiente IA (`$sg-ia-gradient` = `linear-gradient(19.84deg, #0061fe → #00aaff)`). Usado para funcionalidades de IA como "AI" y "Mia". El borde de gradiente se renderiza vía pseudo-elemento con mask.

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-ai-button-bg` | `$sg-white-base` (#ffffff) | Fondo del botón AI |
| `$sg-ai-button-hover-bg` | `$sg-ai-50` (#e5f6ff) | Fondo hover |
| `$sg-ai-button-active-bg` | `$sg-ai-100` (#c9edff) | Fondo active |
| `$sg-ai-button-disabled-opacity` | `0.5` | Opacidad estado disabled |
| `$sg-ai-button-border-width` | `2px` | Grosor del borde gradiente |
| `$sg-ai-button-border-gradient` | `$sg-ia-gradient` | Gradiente del borde (primary → ai) |
| `$sg-ai-button-border-radius` | `12px` | Border radius |
| `$sg-ai-button-text-color` | `$sg-primary-500` (#0061fe) | Color texto e íconos |
| `$sg-ai-button-small-height` | `36px` | Altura small |
| `$sg-ai-button-medium-height` | `40px` | Altura medium |
| `$sg-ai-button-large-height` | `48px` | Altura large |
| `$sg-ai-button-padding` | `10px 20px` | Padding interno |
| `$sg-ai-button-gap` | `8px` | Espacio entre ícono y contenido |

**Variante Mia:** el botón muestra el logo SVG de Mia (`/images/mia-logo.svg`) en lugar del texto "AI". Se renderiza junto al icono `Sparkles` de Lucide con `z-index: 1` para quedar por encima del borde de gradiente.

---

## 11. Toggle / Switch Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-toggle-off-bg` | `$sg-grey-100` (#c3c3c3) | Fondo toggle apagado |
| `$sg-toggle-on-bg` | `$sg-secondary-500` (#f47a37) | Fondo toggle encendido (naranja) |
| `$sg-toggle-thumb-bg` | `$sg-white-base` (#ffffff) | Color thumb del toggle |
| `$sg-toggle-thumb-shadow` | `0 1px 3px rgba(#000, 0.15)` | Sombra del thumb |
| `$sg-toggle-large-width` | `56px` | Ancho toggle large |
| `$sg-toggle-large-height` | `32px` | Altura toggle large |
| `$sg-toggle-large-thumb` | `24px` | Tamano thumb toggle large |
| `$sg-toggle-medium-width` | `48px` | Ancho toggle medium |
| `$sg-toggle-medium-height` | `28px` | Altura toggle medium |
| `$sg-toggle-medium-thumb` | `20px` | Tamano thumb toggle medium |
| `$sg-toggle-small-width` | `40px` | Ancho toggle small |
| `$sg-toggle-small-height` | `24px` | Altura toggle small |
| `$sg-toggle-small-thumb` | `18px` | Tamano thumb toggle small |

---

## 12. Checkbox Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-checkbox-size` | `24px` | Tamano del checkbox |
| `$sg-checkbox-border-radius` | `8px` | Border radius |
| `$sg-checkbox-border` | `$sg-grey-100` (#c3c3c3) | Borde default |
| `$sg-checkbox-bg` | `$sg-white-base` (#ffffff) | Fondo default |
| `$sg-checkbox-active-bg` | `$sg-secondary-500` (#f47a37) | Fondo activo (naranja) |
| `$sg-checkbox-active-border` | `$sg-secondary-500` (#f47a37) | Borde activo |
| `$sg-checkbox-hover-border` | `$sg-secondary-500` (#f47a37) | Borde en hover |
| `$sg-checkbox-check-color` | `$sg-white-base` (#ffffff) | Color del check |

---

## 13. Radio Button Tokens (PrimeNG)

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-radio-checked-bg` | `$sg-secondary-500` (#f47a37) | Fondo radio seleccionado (naranja) |
| `$sg-radio-checked-border` | `$sg-secondary-500` (#f47a37) | Borde radio seleccionado |
| `$sg-radio-checked-hover-bg` | `$sg-secondary-600` (#e5641e) | Hover radio seleccionado |
| `$sg-radio-hover-border` | `$sg-secondary-300` (#f8a679) | Hover borde radio |
| `$sg-radio-border` | `$sg-grey-100` (#c3c3c3) | Borde default |
| `$sg-radio-icon-color` | `$sg-white-base` (#ffffff) | Color icono radio |
| `$sg-radio-focus-ring` | `rgba(244, 122, 55, 0.2)` | Sombra de focus (naranja) |

---

## 14. Radio Tab Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-radio-tab-height` | `36px` | Altura radio tab |
| `$sg-radio-tab-border-radius` | `12px` | Border radius |
| `$sg-radio-tab-font-size` | `14px` | Tamano de fuente |
| `$sg-radio-tab-font-weight` | `700` | Peso de fuente |
| `$sg-radio-tab-color` | `$sg-grey-300` (#7d7d7d) | Color texto inactivo |
| `$sg-radio-tab-hover-color` | `$sg-grey-500` (#3d3d3d) | Color texto en hover |
| `$sg-radio-tab-active-border` | `$sg-secondary-500` (#f47a37) | Borde tab activo (naranja) |
| `$sg-radio-tab-active-color` | `$sg-secondary-500` (#f47a37) | Color texto activo |
| `$sg-radio-tab-active-bg` | `$sg-secondary-50` (#fef2eb) | Fondo tab activo (naranja claro) |

---

## 15. Status Badge Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-badge-border` | `$sg-grey-100` (#c3c3c3) | Borde del badge |
| `$sg-badge-border-radius` | `50px` | Border radius pill |
| `$sg-badge-font-family` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-badge-font-size` | `14px` | Tamano de fuente |
| `$sg-badge-font-weight` | `600` | Peso de fuente |
| `$sg-badge-text-color` | `$sg-grey-500` (#3d3d3d) | Color texto |
| `$sg-badge-padding` | `4px 10px` | Padding |
| `$sg-badge-gap` | `10px` | Gap entre dot y texto |
| `$sg-badge-dot-size` | `10px` | Tamano dot indicador |
| `$sg-badge-height-small` | `30px` | Altura badge small |
| `$sg-badge-height-large` | `36px` | Altura badge large |
| `$sg-badge-positiva` | `$sg-success-400` (#3ace76) | Dot positiva (verde) |
| `$sg-badge-negativa` | `$sg-error-400` (#fc3e3e) | Dot negativa (rojo) |
| `$sg-badge-neutra` | `$sg-warning-400` (#ff962c) | Dot neutra (naranja) |
| `$sg-badge-desactivado` | `$sg-grey-200` (#a6a6a6) | Dot desactivado (gris) |

---

## 16. Chip Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-chip-height` | `26px` | Altura del chip |
| `$sg-chip-border-radius` | `23px` | Border radius |
| `$sg-chip-padding` | `6px 11px` | Padding |
| `$sg-chip-gap` | `10px` | Gap entre dot/icono y texto |
| `$sg-chip-font-family` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-chip-font-size` | `14px` | Tamano de fuente |
| `$sg-chip-font-weight` | `600` | Peso de fuente |
| `$sg-chip-white-bg` | `$sg-white-base` (#ffffff) | Fondo chip white |
| `$sg-chip-white-border` | `$sg-grey-100` (#c3c3c3) | Borde chip white |
| `$sg-chip-white-color` | `$sg-grey-500` (#3d3d3d) | Texto chip white |
| `$sg-chip-primary-bg` | `$sg-primary-100` (#b0ceff) | Fondo chip primary |
| `$sg-chip-primary-color` | `$sg-primary-500` (#0061fe) | Texto chip primary |
| `$sg-chip-secondary-bg` | `$sg-secondary-100` (#fcd6c1) | Fondo chip secondary (naranja) |
| `$sg-chip-secondary-color` | `$sg-secondary-500` (#f47a37) | Texto chip secondary |
| `$sg-chip-disabled-bg` | `$sg-grey-50` (#ececec) | Fondo chip disabled |
| `$sg-chip-disabled-border` | `$sg-grey-100` (#c3c3c3) | Borde chip disabled |
| `$sg-chip-disabled-color` | `$sg-grey-300` (#7d7d7d) | Texto chip disabled |
| `$sg-chip-add-border` | `$sg-grey-100` (#c3c3c3) | Borde boton agregar |
| `$sg-chip-add-color` | `$sg-grey-300` (#7d7d7d) | Color boton agregar |
| `$sg-chip-add-hover-border` | `$sg-primary-500` (#0061fe) | Hover borde agregar |
| `$sg-chip-add-hover-color` | `$sg-primary-500` (#0061fe) | Hover color agregar |

---

## 17. Toaster Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-toast-border-radius` | `10px` | Border radius |
| `$sg-toast-accent-width` | `13px` | Ancho barra lateral de color |
| `$sg-toast-shadow` | `0 8px 32px rgba(#000, 0.08)` | Sombra del toast |
| `$sg-toast-success-stripe` | `$sg-success-400` (#3ace76) | Barra lateral success |
| `$sg-toast-success-bg` | `$sg-success-50` (#ebfaf1) | Fondo icono success |
| `$sg-toast-success-color` | `$sg-success-400` (#3ace76) | Color icono success |
| `$sg-toast-warning-stripe` | `$sg-warning-400` (#ff962c) | Barra lateral warning |
| `$sg-toast-warning-bg` | `$sg-warning-50` (#fff5ea) | Fondo icono warning |
| `$sg-toast-warning-color` | `$sg-warning-400` (#ff962c) | Color icono warning |
| `$sg-toast-error-stripe` | `$sg-error-400` (#fc3e3e) | Barra lateral error |
| `$sg-toast-error-bg` | `$sg-error-50` (#ffecec) | Fondo icono error |
| `$sg-toast-error-color` | `$sg-error-400` (#fc3e3e) | Color icono error |
| `$sg-toast-info-stripe` | `$sg-primary-500` (#0061fe) | Barra lateral info |
| `$sg-toast-info-bg` | `$sg-primary-50` (#e6efff) | Fondo icono info |
| `$sg-toast-info-color` | `$sg-primary-500` (#0061fe) | Color icono info |
| `$sg-toast-title-color` | `$sg-grey-800` (#222222) | Color titulo |
| `$sg-toast-message-color` | `$sg-grey-300` (#7d7d7d) | Color mensaje |
| `$sg-toast-close-color` | `$sg-grey-300` (#7d7d7d) | Color boton cerrar |

---

## 18. Select Segment Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-select-seg-border-color` | `$sg-grey-100` (#c3c3c3) | Borde de los segmentos |
| `$sg-select-seg-selected-bg` | `$sg-secondary-50` (#fef2eb) | Fondo seleccionado (naranja claro) |
| `$sg-select-seg-selected-border` | `$sg-secondary-500` (#f47a37) | Borde seleccionado |
| `$sg-select-seg-hover-border` | `$sg-secondary-500` (#f47a37) | Borde en hover |
| `$sg-select-seg-chip-radius` | `23px` | Border radius de chips |
| `$sg-select-colorpicker-dot-size` | `25px` | Tamano dot de color |
| `$sg-select-user-avatar-size-lg` | `36px` | Tamano avatar large |

---

## 19. Confirm Modal Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-confirm-modal-border-radius` | `12px` | Border radius del modal |
| `$sg-confirm-modal-max-width` | `700px` | Ancho maximo |
| `$sg-confirm-modal-icon-size` | `56px` | Tamano icono circular |
| `$sg-confirm-general-btn-bg` | `$sg-primary-500` (#0061fe) | Boton variante general (azul) |
| `$sg-confirm-confirmation-icon-color` | `$sg-success-400` (#3ace76) | Icono variante confirmacion (verde) |
| `$sg-confirm-alert-btn-bg` | `$sg-secondary-500` (#f47a37) | Boton variante alerta (naranja SocialGest) |
| `$sg-confirm-error-btn-bg` | `$sg-error-400` (#fc3e3e) | Boton variante error (rojo) |

---

## 20. Code Modal Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-code-modal-border-radius` | `24px` | Border radius |
| `$sg-code-modal-icon-bg` | `$sg-warning-50` (#fff5ea) | Fondo icono warning |
| `$sg-code-modal-icon-color` | `$sg-warning-400` (#ff962c) | Color icono warning |
| `$sg-code-modal-btn-bg` | `$sg-error-400` (#fc3e3e) | Boton confirmacion destructiva |
| `$sg-code-modal-code-size` | `40px` | Tamano codigo verificacion |

---

## 20.1. Modales Especiales

Tres modales distintivos de SocialGest con circulos decorativos, gradientes de IA y layouts propios:

- **Modal Bienvenida**: usuario sin canales. Icono `PartyPopper` y CTA "Crear canal".
- **Modal Plan Vencido**: plan caducado. Icono `TriangleAlert`, dos CTAs ("Contáctanos" + "Renovar plan").
- **Modal Lanzamiento SocialGest.ai**: dos columnas (hero + features), badge de novedad, cuadricula 2x2 de features de IA, note-banner de creditos y boton Mia.

### Tokens compartidos

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-special-modal-bg` | `$sg-white-base` (#ffffff) | Fondo del contenedor |
| `$sg-special-modal-border` | `1px solid $sg-grey-50` | Borde del contenedor |
| `$sg-special-modal-radius` | `40px` | Border radius del contenedor |
| `$sg-special-modal-padding` | `48px 40px` | Padding del contenedor |
| `$sg-special-modal-overlay-bg` | `rgba(0, 0, 0, 0.5)` | Backdrop overlay |
| `$sg-special-modal-circle-size` | `729px` | Diametro circulos decorativos |
| `$sg-special-modal-circle-primary` | `radial-gradient primary-50 → transparent` | Circulo top-right |
| `$sg-special-modal-circle-secondary` | `radial-gradient secondary-50 → transparent` | Circulo bottom-left |
| `$sg-special-modal-icon-circle-size` | `80px` | Circulo del icono del header |
| `$sg-special-modal-icon-circle-bg` | `$sg-secondary-50` (#fef2eb) | Fondo del icono |
| `$sg-special-modal-icon-color` | `$sg-secondary-500` (#f47a37) | Color del icono Lucide |
| `$sg-special-modal-icon-size` | `49px` | Tamano del icono |
| `$sg-special-modal-title-size` | `36px` | Tamano titulo (bienvenida) |
| `$sg-special-modal-title-size-expired` | `24px` | Tamano titulo (plan vencido) |
| `$sg-special-modal-title-color` | `$sg-grey-500` (#3d3d3d) | Color del titulo |
| `$sg-special-modal-body-bg` | `$sg-white-base` (#ffffff) | Fondo del card interno |
| `$sg-special-modal-body-radius` | `12px` | Border radius card interno |
| `$sg-special-modal-body-padding` | `40px 20px` | Padding card interno |
| `$sg-special-modal-body-text-color` | `$sg-primary-800` (#00358c) | Color texto cuerpo |

### Tokens Modal Lanzamiento

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-special-launch-panel-radius` | `24px` | Border radius de los paneles |
| `$sg-special-launch-panel-padding` | `40px 32px` | Padding de los paneles |
| `$sg-special-launch-left-width` | `555px` | Ancho del panel izquierdo |
| `$sg-special-launch-right-width` | `718px` | Ancho del panel derecho |
| `$sg-special-launch-badge-width` | `211px` | Ancho del badge "Nuevo lanzamiento" |
| `$sg-special-launch-badge-height` | `36px` | Alto del badge |
| `$sg-special-launch-badge-bg` | `linear-gradient(74.11deg, primary-200 → secondary-200)` | Fondo del badge |
| `$sg-special-launch-hero-title-size` | `48px` | Tamano titulo hero |
| `$sg-special-launch-hero-title-tracking` | `-0.96px` | Tracking titulo hero |
| `$sg-special-launch-desc-size` | `20px` | Tamano descripcion |
| `$sg-special-launch-image-height` | `335px` | Alto del placeholder de imagen |
| `$sg-special-launch-image-radius` | `19px` | Border radius del placeholder |
| `$sg-special-launch-overlay-btn-height` | `48px` | Alto del boton "Ver nuevo SocialGest.ia" |
| `$sg-special-launch-overlay-btn-bg` | `$sg-secondary-500` (#f47a37) | Fondo boton overlay |
| `$sg-special-launch-feature-card-icon-size` | `50px` | Circulo del icono de feature |
| `$sg-special-launch-feature-1-bg` | `$sg-primary-50` (#e6efff) | Fondo icono feature 1 (Crea contenido) |
| `$sg-special-launch-feature-2-bg` | `#d1fae5` | Fondo icono feature 2 (Analiticas) |
| `$sg-special-launch-feature-3-bg` | `$sg-secondary-50` (#fef2eb) | Fondo icono feature 3 (Publicacion) |
| `$sg-special-launch-feature-4-bg` | `rgba(249, 198, 22, 0.16)` | Fondo icono feature 4 (Reportes) |
| `$sg-special-launch-note-radius` | `16px` | Border radius del info-banner |
| `$sg-special-launch-note-padding` | `24px 32px` | Padding del info-banner |
| `$sg-special-launch-mia-btn-width` | `419px` | Ancho boton Mia (footer) |
| `$sg-special-launch-mia-btn-height` | `40px` | Alto boton Mia |
| `$sg-special-launch-close-size` | `34px` | Tamano boton cerrar (X) |

### Iconos Lucide utilizados

`PartyPopper`, `TriangleAlert`, `ArrowRight`, `Sparkles`, `PlayCircle`, `BarChart3`, `ImagePlus`, `LineChart`, `X`.

---

## 21. Stepper Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-stepper-track-height` | `5px` | Altura barra progreso |
| `$sg-stepper-track-bg` | `$sg-grey-50` (#ececec) | Fondo del track |
| `$sg-stepper-progress-bg` | `$sg-primary-500` (#0061fe) | Color barra progreso (azul) |
| `$sg-stepper-track-radius` | `10px` | Border radius del track |
| `$sg-stepper-label-font` | `'DM Sans', sans-serif` | Familia tipografica label |
| `$sg-stepper-label-color` | `$sg-grey-300` (#7d7d7d) | Color texto del paso |

---

## 22. TextArea Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-textarea-border` | `$sg-grey-100` (#c3c3c3) | Borde del textarea |
| `$sg-textarea-border-focus` | `$sg-primary-500` (#0061fe) | Borde en focus |
| `$sg-textarea-border-radius` | `10px` | Border radius |
| `$sg-textarea-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-textarea-font-size` | `16px` | Tamano de fuente |
| `$sg-textarea-label-color` | `$sg-grey-800` (#222222) | Color del label |
| `$sg-textarea-placeholder-color` | `$sg-grey-200` (#a6a6a6) | Color placeholder |
| `$sg-textarea-padding` | `12px 16px` | Padding |
| `$sg-textarea-disabled-opacity` | `0.5` | Opacidad en disabled |

---

## 23. Number Input Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-number-input-border` | `$sg-grey-100` (#c3c3c3) | Borde del contenedor |
| `$sg-number-input-border-radius` | `12px` | Border radius |
| `$sg-number-input-height-lg` | `48px` | Altura large |
| `$sg-number-input-height-md` | `40px` | Altura medium |
| `$sg-number-input-height-sm` | `36px` | Altura small |
| `$sg-number-input-btn-color` | `$sg-grey-300` (#7d7d7d) | Color botones -/+ |
| `$sg-number-input-btn-hover` | `$sg-primary-500` (#0061fe) | Hover botones -/+ |
| `$sg-number-input-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-number-input-font-weight` | `600` | Peso de fuente |

---

## 24. Account Counter Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-counter-border` | `$sg-grey-100` (#c3c3c3) | Borde del badge |
| `$sg-counter-border-radius` | `12px` | Border radius |
| `$sg-counter-icon-color` | `$sg-grey-300` (#7d7d7d) | Color icono User |
| `$sg-counter-text-color` | `$sg-grey-800` (#222222) | Color del numero |
| `$sg-counter-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-counter-font-weight` | `600` | Peso de fuente |
| `$sg-counter-height-lg` | `48px` | Altura large |
| `$sg-counter-height-md` | `40px` | Altura medium |
| `$sg-counter-height-sm` | `36px` | Altura small |

---

## 25. Select Date Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-select-date-border` | `$sg-grey-100` (#c3c3c3) | Borde del trigger |
| `$sg-select-date-border-radius` | `12px` | Border radius |
| `$sg-select-date-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-select-date-height-lg` | `48px` | Altura large |
| `$sg-select-date-height-md` | `40px` | Altura medium |
| `$sg-select-date-height-sm` | `36px` | Altura small |
| `$sg-select-date-dropdown-shadow` | `0 4px 15px rgba(#000, 0.12)` | Sombra dropdown |
| `$sg-select-date-day-selected-bg` | `$sg-primary-500` (#0061fe) | Fondo dia seleccionado |
| `$sg-select-date-day-other-color` | `$sg-grey-100` (#c3c3c3) | Color dias de otro mes |

---

## 26. Hour Date Picker Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-hour-picker-spinner-gap` | `18px` | Gap entre spinners |
| `$sg-hour-picker-chevron-color` | `$sg-grey-300` (#7d7d7d) | Color flechas |
| `$sg-hour-picker-chevron-hover` | `$sg-grey-500` (#3d3d3d) | Hover flechas |
| `$sg-hour-picker-value-color` | `$sg-grey-800` (#222222) | Color valor |
| `$sg-hour-picker-divider` | `$sg-grey-50` (#ececec) | Color separador |

---

## 27. Select Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-select-bg` | `$sg-white-base` (#ffffff) | Fondo |
| `$sg-select-border` | `$sg-grey-100` (#c3c3c3) | Borde |
| `$sg-select-border-focus` | `$sg-primary-500` (#0061fe) | Borde en focus |
| `$sg-select-border-radius` | `10px` | Border radius |
| `$sg-select-height-lg` | `48px` | Altura large |
| `$sg-select-height-md` | `40px` | Altura medium |
| `$sg-select-height-sm` | `36px` | Altura small |
| `$sg-select-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-select-placeholder-color` | `$sg-grey-300` (#7d7d7d) | Color placeholder |
| `$sg-select-text-color` | `$sg-grey-800` (#222222) | Color texto seleccionado |
| `$sg-select-icon-color` | `$sg-grey-300` (#7d7d7d) | Color iconos |
| `$sg-select-dropdown-shadow` | `0 4px 12px rgba(#000, 0.1)` | Sombra dropdown |
| `$sg-select-option-hover-bg` | `$sg-neutral-50` (#fafafa) | Hover opcion |
| `$sg-select-disabled-bg` | `$sg-grey-100` (#c3c3c3) | Fondo disabled |
| `$sg-select-disabled-text` | `$sg-grey-200` (#a6a6a6) | Texto disabled |

---

## 28. Search Input Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-search-input-bg` | `$sg-white-base` (#ffffff) | Fondo |
| `$sg-search-input-border` | `$sg-grey-100` (#c3c3c3) | Borde |
| `$sg-search-input-border-focus` | `$sg-primary-500` (#0061fe) | Borde en focus |
| `$sg-search-input-border-radius` | `50px` | Pill shape |
| `$sg-search-input-height-lg` | `50px` | Altura large |
| `$sg-search-input-height-md` | `40px` | Altura medium |
| `$sg-search-input-height-sm` | `36px` | Altura small |
| `$sg-search-input-icon-color` | `$sg-grey-200` (#a6a6a6) | Color icono search |
| `$sg-search-input-placeholder-color` | `$sg-grey-200` (#a6a6a6) | Color placeholder |
| `$sg-search-input-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-search-input-font-weight` | `500` | Peso de fuente |
| `$sg-search-input-disabled-bg` | `$sg-grey-100` (#c3c3c3) | Fondo disabled |
| `$sg-search-input-disabled-text` | `$sg-grey-200` (#a6a6a6) | Texto disabled |

---

## 29. Text Input Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-text-input-border` | `$sg-grey-100` (#c3c3c3) | Borde |
| `$sg-text-input-border-focus` | `$sg-primary-500` (#0061fe) | Borde en focus |
| `$sg-text-input-border-error` | `$sg-error-400` (#fc3e3e) | Borde en error |
| `$sg-text-input-border-radius` | `10px` | Border radius |
| `$sg-text-input-height-lg` | `48px` | Altura large |
| `$sg-text-input-height-md` | `40px` | Altura medium |
| `$sg-text-input-height-sm` | `36px` | Altura small |
| `$sg-text-input-font` | `'Urbanist', sans-serif` | Familia tipografica |
| `$sg-text-input-label-color` | `$sg-grey-800` (#222222) | Color label |
| `$sg-text-input-placeholder-color` | `$sg-grey-200` (#a6a6a6) | Color placeholder |
| `$sg-text-input-icon-color` | `$sg-grey-300` (#7d7d7d) | Color iconos |

---

## 30. Card Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-card-bg` | `$sg-white-base` (#ffffff) | Fondo |
| `$sg-card-border` | `$sg-grey-50` (#ececec) | Borde |
| `$sg-card-border-radius` | `16px` | Border radius |
| `$sg-card-padding-simple` | `24px` | Padding variante simple |
| `$sg-card-padding-large` | `32px` | Padding variante large |
| `$sg-card-title-color` | `$sg-grey-800` (#222222) | Color titulo |
| `$sg-card-title-size-titled` | `20px` | Tamano titulo titled |
| `$sg-card-title-size-large` | `24px` | Tamano titulo large |

---

## 31. Menu Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-menu-bg` | `$sg-white-base` (#ffffff) | Fondo |
| `$sg-menu-border` | `$sg-grey-50` (#ececec) | Borde |
| `$sg-menu-border-radius` | `12px` | Border radius |
| `$sg-menu-item-hover` | `$sg-neutral-50` (#fafafa) | Hover items |
| `$sg-menu-item-selected-bg` | `$sg-secondary-50` (#fef2eb) | Fondo seleccionado (naranja claro) |
| `$sg-menu-item-color` | `$sg-grey-500` (#3d3d3d) | Color texto items |
| `$sg-menu-icon-color` | `$sg-grey-300` (#7d7d7d) | Color iconos |
| `$sg-menu-radio-active` | `$sg-secondary-500` (#f47a37) | Radio seleccionado |
| `$sg-menu-checkbox-active` | `$sg-secondary-500` (#f47a37) | Checkbox seleccionado |

---

## 32. Avatar Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-avatar-border-radius` | `50%` | Forma circular |
| `$sg-avatar-size-xlarge` | `50px` | Tamano extra large |
| `$sg-avatar-size-large` | `36px` | Tamano large |
| `$sg-avatar-size-medium` | `26px` | Tamano medium |
| `$sg-avatar-size-small` | `18px` | Tamano small |
| `$sg-avatar-badge-size` | `16px` | Tamano badge plataforma |
| `$sg-avatar-badge-border` | `$sg-white-base` (#ffffff) | Borde del badge |

---

## 33. Metricas / Bar Chart Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-bar-primary-from` | `$sg-primary-300` (#5495fe) | Gradiente inicio primary |
| `$sg-bar-primary-to` | `$sg-primary-500` (#0061fe) | Gradiente fin primary |
| `$sg-bar-secondary-from` | `$sg-secondary-300` (#f8a679) | Gradiente inicio secondary (naranja) |
| `$sg-bar-secondary-to` | `$sg-secondary-500` (#f47a37) | Gradiente fin secondary |
| `$sg-bar-size-large` | `78px` | Ancho barra large |
| `$sg-bar-size-medium` | `35px` | Ancho barra medium |
| `$sg-bar-size-small` | `17px` | Ancho barra small |
| `$sg-bar-size-xsmall` | `8px` | Ancho barra x-small |
| `$sg-bar-label-color` | `$sg-grey-300` (#7d7d7d) | Color labels |
| `$sg-sparkline-primary-color` | `$sg-primary-500` (#0061fe) | Color linea primary |
| `$sg-sparkline-secondary-color` | `$sg-secondary-500` (#f47a37) | Color linea secondary (naranja) |
| `$sg-donut-stroke-width` | `30px` | Grosor segmentos dona |
| `$sg-trend-up-color` | `$sg-success-400` (#3ace76) | Indicador positivo |
| `$sg-trend-down-color` | `$sg-error-400` (#fc3e3e) | Indicador negativo |

---

## 34. Table Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-table-bg` | `$sg-white-base` (#ffffff) | Fondo |
| `$sg-table-border-color` | `$sg-grey-50` (#ececec) | Borde de filas |
| `$sg-table-header-color` | `$sg-grey-500` (#3d3d3d) | Color texto header |
| `$sg-table-body-color` | `$sg-grey-500` (#3d3d3d) | Color texto body |
| `$sg-table-title-color` | `$sg-grey-800` (#222222) | Color titulo |
| `$sg-table-title-size` | `24px` | Tamano titulo |
| `$sg-table-row-height` | `44px` | Altura de filas |
| `$sg-table-cell-padding` | `10px 20px` | Padding de celdas |
| `$sg-table-hover-bg` | `$sg-neutral-50` (#fafafa) | Fondo hover de fila |
| `$sg-table-action-icon-color` | `$sg-secondary-500` (#f47a37) | Color icono acciones (naranja) |

---

## 34.5 Etiquetas de Colores (Color Labels)

Etiquetas compactas de 20px de alto con 11 variantes de color (10 pastel + 1 IA con gradiente).
Cada etiqueta puede mostrarse sola o acompanada de un icono de accion (MoreHorizontal o Check) dentro de un circulo blanco.

**Base**

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-label-height` | `20px` | Altura de la etiqueta |
| `$sg-label-padding` | `10px 8px` | Padding interno |
| `$sg-label-radius` | `10px` | Border radius |
| `$sg-label-gap` | `6px` | Gap entre texto e icono de accion |
| `$sg-label-font-size` | `10px` | Tamano de fuente (DM Sans Medium) |
| `$sg-label-font-weight` | `500` | Peso de fuente (Medium) |
| `$sg-label-letter-spacing` | `-0.2px` | Tracking del texto |

**Variantes de color (fondo + texto)**

| Variante | Background | Texto |
|----------|-----------|-------|
| `$sg-label-azul-bg` / `$sg-label-azul-text` | `#dbeafe` | `#1e40af` |
| `$sg-label-verde-bg` / `$sg-label-verde-text` | `#d1fae5` | `#065f46` |
| `$sg-label-amarillo-bg` / `$sg-label-amarillo-text` | `#fef3c7` | `#92400e` |
| `$sg-label-rojo-bg` / `$sg-label-rojo-text` | `#fee2e2` | `#991b1b` |
| `$sg-label-violeta-bg` / `$sg-label-violeta-text` | `#ede9fe` | `#5b21b6` |
| `$sg-label-naranja-bg` / `$sg-label-naranja-text` | `#ffedd5` | `#9a3412` |
| `$sg-label-turquesa-bg` / `$sg-label-turquesa-text` | `#ccfbf1` | `#115e59` |
| `$sg-label-gris-bg` / `$sg-label-gris-text` | `#f3f4f6` | `#374151` |
| `$sg-label-vinotinto-bg` / `$sg-label-vinotinto-text` | `#fce7f3` | `#9f1239` |
| `$sg-label-olivo-bg` / `$sg-label-olivo-text` | `#ecfccb` | `#3f6212` |

**Variante IA (fondo blanco + borde + texto en gradiente)**

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-label-ia-bg` | `$sg-white-base` (#ffffff) | Fondo etiqueta IA |
| `$sg-label-ia-border` | `$sg-primary-500` (#0061fe) | Borde etiqueta IA |
| `$sg-label-ia-text-gradient` | `$sg-ia-text-gradient` | Gradiente de texto etiqueta IA |

**Circulo de accion (icono opcional a la derecha)**

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-label-action-size` | `14px` | Tamano circulo de accion |
| `$sg-label-action-radius` | `30px` | Border radius del circulo |
| `$sg-label-action-icon-size` | `10px` | Tamano del icono Lucide (MoreHorizontal / Check) |

---

## 35. Dashboard UI Tokens

| Token | Valor | Uso |
|-------|-------|-----|
| `$sg-code-block-bg` | `$sg-grey-900` (#1a1a1a) | Fondo code blocks |
| `$sg-code-block-text` | `$sg-grey-100` (#c3c3c3) | Color texto code blocks |
| `$sg-ui-label-color` | `$sg-grey-200` (#a6a6a6) | Color labels UI del dashboard |
| `$sg-ui-light-bg` | `$sg-neutral-200` (#f1f1f1) | Fondo inline code |
| `$sg-swatch-border` | `$sg-grey-50` (#ececec) | Borde color swatches |

---

## 36. Typography

| Nombre | Familia | Tamano | Peso | Uso |
|--------|---------|--------|------|-----|
| Heading 1 | Urbanist | 28px | 700 (Bold) | Titulos principales |
| Heading 2 | Urbanist | 24px | 700 (Bold) | Titulos de secciones y cards |
| Heading 3 | Urbanist | 22px | 700 (Bold) | Subtitulos dentro de cards |
| Heading 4 | Urbanist | 20px | 600 (SemiBold) | Titulos de subsecciones |
| Body | DM Sans | 16px | 400 (Regular) | Texto general, cuerpo, tablas |
| Body Bold | DM Sans | 16px | 700 (Bold) | Texto enfatizado |
| Small | DM Sans | 14px | 400 (Regular) | Texto secundario, labels |
| Caption | DM Sans | 12px | 400 (Regular) | Textos muy pequenos |
| Label | Urbanist | 14px | 600 (SemiBold) | Labels de formularios |
| Button | Urbanist | 14-18px | 700 (Bold) | Texto dentro de botones |
| Nav Link | Urbanist | 15px | 600 (SemiBold) | Links del navbar |
| Token Code | Inter | 13px | 500 (Medium) | Nombres de variables, codigo |

---

## 37. Spacing

| Nombre | Valor | Uso |
|--------|-------|-----|
| 2xs | 4px | Espacio minimo, gaps internos muy pequenos |
| xs | 8px | Padding interno de badges, gaps pequenos |
| sm | 12px | Gap entre elementos relacionados (Gestalt: proximidad) |
| md | 16px | Gap estandar dentro de grupos |
| lg | 24px | Margen debajo de titulos, separacion entre subsecciones |
| xl | 32px | Padding de cards, separacion entre grupos |
| 2xl | 40px | Padding vertical de paginas |
| 3xl | 48px | Separacion entre secciones principales |

---

## 38. Border Radius

| Nombre | Valor | Uso |
|--------|-------|-----|
| sm | 8px | Dropdown options, elementos pequenos |
| md | 10px | Inputs, selects |
| lg | 12px | Botones, KPI cards, swatches de color |
| xl | 16px | Cards principales, secciones |
| pill | 50px | Search inputs, badges, pills |
| circle | 50% | Avatares, dots de status |

---

## Ubicacion del archivo de tokens

Todos los tokens estan definidos en:
```
src/styles/_tokens.scss
```

Busca `ADVOCATESPRO DESIGN SYSTEM TOKENS` para encontrar la seccion SocialGest.

## Uso en SCSS

```scss
@import '../../../../styles/tokens';

.ap-button {
  background: $sg-button-primary-bg;
  color: $sg-button-primary-text;
  height: $sg-button-height-large;
  font-size: $sg-button-font-size-large;
  font-weight: $sg-button-font-weight;
  border-radius: $sg-button-border-radius;
  padding: $sg-button-padding;
  transition: $sg-button-transition;

  &:hover {
    background: $sg-button-primary-hover;
  }

  &:active {
    background: $sg-button-primary-active;
  }

  &:disabled {
    background: $sg-button-primary-disabled-bg;
  }
}

.ap-button--secondary {
  // Rosa distintivo de SocialGest
  background: $sg-button-secondary-bg;
  color: $sg-button-secondary-text;

  &:hover { background: $sg-button-secondary-hover; }
  &:active { background: $sg-button-secondary-active; }
}

.ap-card {
  background: $sg-card-bg;
  border: 1px solid $sg-card-border;
  border-radius: $sg-card-border-radius;
  padding: $sg-card-padding-simple;
  color: $sg-card-title-color;
}

.ap-table {
  background: $sg-table-bg;

  &__row:hover {
    background: $sg-table-hover-bg;
  }

  &__header {
    color: $sg-table-header-color;
    height: $sg-table-row-height;
  }

  &__cell {
    padding: $sg-table-cell-padding;
    color: $sg-table-body-color;
  }

  &__action {
    // Iconos de accion en naranja (distintivo SocialGest)
    color: $sg-table-action-icon-color;
  }
}
```

---

## Convencion de nombres

Todos los tokens SocialGest siguen el patron:
```
$sg-{componente}-{propiedad}
```

- **Color scales**: `$sg-{categoria}-{tono}` — ej. `$sg-primary-500`, `$sg-secondary-500`, `$sg-grey-800`
- **Component tokens**: `$sg-{componente}-{propiedad}` — ej. `$sg-button-primary-bg`, `$sg-card-border-radius`
- **tono**: `50` (mas claro) a `900` (mas oscuro), o `base` para escalas de un solo valor

---

## Diferencias con Quantico

| Aspecto | Quantico | SocialGest |
|---------|----------|--------------|
| Prefijo | `$qt-` | `$sg-` |
| Primary | Azul (`#0061fe`) | Azul (`#0061fe`) — identico |
| Secondary | Purpura (`#9e54e2`) | **Rosa (`#f47a37`)** — distintivo |
| Success / Warning / Error | Identicos hex | Identicos hex |
| Grey / Neutral | Identicos hex | Identicos hex |
| Confirm modal alert btn | Warning (naranja) | **Secondary (naranja)** |
| Table action icon | Grey-800 | **Secondary-500 (naranja)** |
| Menu selected bg | Secondary-50 (purpura claro) | **Secondary-50 (naranja claro)** |
